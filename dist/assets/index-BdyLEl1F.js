(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ia="170",lh=0,hl=1,ch=2,Qc=1,uh=2,Rn=3,vn=0,Dt=1,Ct=2,Nn=0,Yi=1,Vt=2,dl=3,fl=4,hh=5,mi=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,vh=202,xh=203,ko=204,Vo=205,Mh=206,yh=207,Sh=208,bh=209,Th=210,Eh=211,Ah=212,wh=213,Ch=214,Go=0,Ho=1,Wo=2,Ji=3,Xo=4,qo=5,Yo=6,Ko=7,eu=0,Rh=1,Ph=2,ei=0,tu=1,nu=2,iu=3,Da=4,Lh=5,su=6,ru=7,pl="attached",Ih="detached",ou=300,Qi=301,es=302,jo=303,Zo=304,Hr=306,ts=1e3,Jn=1001,Br=1002,Bt=1003,au=1004,Ls=1005,qt=1006,Pr=1007,In=1008,On=1009,lu=1010,cu=1011,zs=1012,Na=1013,xi=1014,ln=1015,Un=1016,Ua=1017,Fa=1018,ns=1020,uu=35902,hu=1021,du=1022,Jt=1023,fu=1024,pu=1025,Ki=1026,is=1027,Oa=1028,Ba=1029,mu=1030,za=1031,ka=1033,Lr=33776,Ir=33777,Dr=33778,Nr=33779,$o=35840,Jo=35841,Qo=35842,ea=35843,ta=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,ua=37814,ha=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,Ur=36492,va=36494,xa=36495,gu=36283,Ma=36284,ya=36285,Sa=36286,ks=2300,Vs=2301,jr=2302,ml=2400,gl=2401,_l=2402,Dh=2500,Nh=0,_u=1,ba=2,Uh=3200,Fh=3201,vu=0,Oh=1,$n="",dt="srgb",Nt="srgb-linear",Wr="linear",ot="srgb",Ai=7680,vl=519,Bh=512,zh=513,kh=514,xu=515,Vh=516,Gh=517,Hh=518,Wh=519,Ta=35044,xl="300 es",Dn=2e3,zr=2001;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ml=1234567;const Ns=Math.PI/180,ss=180/Math.PI;function cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function Va(s,e){return(s%e+e)%e}function Xh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qh(s,e,t){return s!==e?(t-s)/(e-s):0}function Us(s,e,t){return(1-t)*s+t*e}function Yh(s,e,t,n){return Us(s,e,1-Math.exp(-t*n))}function Kh(s,e=1){return e-Math.abs(Va(s,e*2)-e)}function jh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Zh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $h(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Jh(s,e){return s+Math.random()*(e-s)}function Qh(s){return s*(.5-Math.random())}function ed(s){s!==void 0&&(Ml=s);let e=Ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function td(s){return s*Ns}function nd(s){return s*ss}function id(s){return(s&s-1)===0&&s!==0}function sd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function od(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ae={DEG2RAD:Ns,RAD2DEG:ss,generateUUID:cn,clamp:wt,euclideanModulo:Va,mapLinear:Xh,inverseLerp:qh,lerp:Us,damp:Yh,pingpong:Kh,smoothstep:jh,smootherstep:Zh,randInt:$h,randFloat:Jh,randFloatSpread:Qh,seededRandom:ed,degToRad:td,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:sd,floorPowerOfTwo:rd,setQuaternionFromProperEuler:od,normalize:at,denormalize:an};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],M=i[4],v=i[7],T=i[2],R=i[5],A=i[8];return r[0]=o*_+a*x+l*T,r[3]=o*m+a*M+l*R,r[6]=o*p+a*v+l*A,r[1]=c*_+u*x+h*T,r[4]=c*m+u*M+h*R,r[7]=c*p+u*v+h*A,r[2]=d*_+f*x+g*T,r[5]=d*m+f*M+g*R,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zr.makeScale(e,t)),this}rotate(e){return this.premultiply(Zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new We;function Mu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ad(){const s=Gs("canvas");return s.style.display="block",s}const yl={};function Is(s){s in yl||(yl[s]=!0,console.warn(s))}function ld(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function cd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ud(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Wr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Sl=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],Tl=[.3127,.329],El=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Nt]:{primaries:Sl,whitePoint:Tl,transfer:Wr,toXYZ:El,fromXYZ:Al,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:Sl,whitePoint:Tl,transfer:ot,toXYZ:El,fromXYZ:Al,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}});let wi;class hd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Gs("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class yu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($r(i[o].image)):r.push($r(i[o]))}else r=$r(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function $r(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class bt extends us{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Jn,i=Jn,r=qt,o=In,a=Jt,l=On,c=bt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=cn(),this.name="",this.source=new yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=ou;bt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,T=(p+1)/2,R=(u+d)/4,A=(h+_)/4,P=(g+m)/4;return M>v&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=R/n,r=A/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends pd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Su extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,p*x);m=Math.sin(m*R)/T,a=Math.sin(a*R)/T}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new E,wl=new vt;class zn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Qs.subVectors(this.max,vs),Ci.subVectors(e.a,vs),Ri.subVectors(e.b,vs),Pi.subVectors(e.c,vs),Hn.subVectors(Ri,Ci),Wn.subVectors(Pi,Ri),si.subVectors(Ci,Pi);let t=[0,-Hn.z,Hn.y,0,-Wn.z,Wn.y,0,-si.z,si.y,Hn.z,0,-Hn.x,Wn.z,0,-Wn.x,si.z,0,-si.x,-Hn.y,Hn.x,0,-Wn.y,Wn.x,0,-si.y,si.x,0];return!Qr(t,Ci,Ri,Pi,Qs)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,Ci,Ri,Pi,Qs))?!1:(er.crossVectors(Hn,Wn),t=[er.x,er.y,er.z],Qr(t,Ci,Ri,Pi,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new E,new E,new E,new E,new E,new E,new E,new E],sn=new E,Js=new zn,Ci=new E,Ri=new E,Pi=new E,Hn=new E,Wn=new E,si=new E,vs=new E,Qs=new E,er=new E,ri=new E;function Qr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ri.fromArray(s,r);const a=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gd=new zn,xs=new E,eo=new E;class xn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(eo)),this.expandByPoint(xs.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new E,to=new E,tr=new E,Xn=new E,no=new E,nr=new E,io=new E;class Xr{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){to.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,o=-this.direction.dot(tr),a=Xn.dot(this.direction),l=-Xn.dot(tr),c=Xn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(to).addScaledVector(tr,d),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,r){no.subVectors(t,e),nr.subVectors(n,e),io.crossVectors(no,nr);let o=this.direction.dot(io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(nr.crossVectors(Xn,nr));if(l<0)return null;const c=a*this.direction.dot(no.cross(Xn));if(c<0||l+c>o)return null;const u=-a*Xn.dot(io);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_d,e,vd)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),qn.crossVectors(n,Wt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),qn.crossVectors(n,Wt)),qn.normalize(),ir.crossVectors(Wt,qn),i[0]=qn.x,i[4]=ir.x,i[8]=Wt.x,i[1]=qn.y,i[5]=ir.y,i[9]=Wt.y,i[2]=qn.z,i[6]=ir.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],T=n[15],R=i[0],A=i[4],P=i[8],b=i[12],y=i[1],L=i[5],F=i[9],D=i[13],W=i[2],X=i[6],V=i[10],Q=i[14],k=i[3],oe=i[7],ae=i[11],pe=i[15];return r[0]=o*R+a*y+l*W+c*k,r[4]=o*A+a*L+l*X+c*oe,r[8]=o*P+a*F+l*V+c*ae,r[12]=o*b+a*D+l*Q+c*pe,r[1]=u*R+h*y+d*W+f*k,r[5]=u*A+h*L+d*X+f*oe,r[9]=u*P+h*F+d*V+f*ae,r[13]=u*b+h*D+d*Q+f*pe,r[2]=g*R+_*y+m*W+p*k,r[6]=g*A+_*L+m*X+p*oe,r[10]=g*P+_*F+m*V+p*ae,r[14]=g*b+_*D+m*Q+p*pe,r[3]=x*R+M*y+v*W+T*k,r[7]=x*A+M*L+v*X+T*oe,r[11]=x*P+M*F+v*V+T*ae,r[15]=x*b+M*D+v*Q+T*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,M=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,T=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,R=t*x+n*M+i*v+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=x*A,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=M*A,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=v*A,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=T*A,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,x=l*c,M=l*u,v=l*h,T=n.x,R=n.y,A=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+v)*T,i[2]=(g-M)*T,i[3]=0,i[4]=(f-v)*R,i[5]=(1-(d+p))*R,i[6]=(m+x)*R,i[7]=0,i[8]=(g+M)*A,i[9]=(m-x)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/r,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Dn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Dn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Dn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===Dn)g=(o+r)*h,_=-2*h;else if(a===zr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new E,rn=new Fe,_d=new E(0,0,0),vd=new E(1,1,1),qn=new E,ir=new E,Wt=new E,Cl=new Fe,Rl=new vt;class dn{constructor(e=0,t=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const Pl=new E,Ii=new vt,En=new Fe,sr=new E,Ms=new E,Md=new E,yd=new vt,Ll=new E(1,0,0),Il=new E(0,1,0),Dl=new E(0,0,1),Nl={type:"added"},Sd={type:"removed"},Di={type:"childadded",child:null},so={type:"childremoved",child:null};class ft extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new E,t=new dn,n=new vt,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new We}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sr.copy(e):sr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Ms,sr,this.up):En.lookAt(sr,Ms,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(En),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nl),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nl),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,Md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new E(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new E,An=new E,ro=new E,wn=new E,Ni=new E,Ui=new E,Ul=new E,oo=new E,ao=new E,lo=new E,co=new nt,uo=new nt,ho=new nt;class $t{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){on.subVectors(i,t),An.subVectors(n,t),ro.subVectors(e,t);const o=on.dot(on),a=on.dot(An),l=on.dot(ro),c=An.dot(An),u=An.dot(ro),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return co.setScalar(0),uo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),ho.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(uo,r.y),o.addScaledVector(ho,r.z),o}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),An.subVectors(e,t),on.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),An.subVectors(this.a,this.b),on.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ni.subVectors(i,n),Ui.subVectors(r,n),oo.subVectors(e,n);const l=Ni.dot(oo),c=Ui.dot(oo);if(l<=0&&c<=0)return t.copy(n);ao.subVectors(e,i);const u=Ni.dot(ao),h=Ui.dot(ao);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ni,o);lo.subVectors(e,r);const f=Ni.dot(lo),g=Ui.dot(lo);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ui,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ul.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Ul,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Va(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fo(o,r,e+1/3),this.g=fo(o,r,e),this.b=fo(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Ke.fromWorkingColorSpace(Lt.copy(this),e),Math.round(wt(Lt.r*255,0,255))*65536+Math.round(wt(Lt.g*255,0,255))*256+Math.round(wt(Lt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=dt){Ke.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(rr);const n=Us(Yn.h,rr.h,t),i=Us(Yn.s,rr.s,t),r=Us(Yn.l,rr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new re;re.NAMES=Tu;let bd=0;class hn extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=cn(),this.name="",this.blending=Yi,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Vo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new E,or=new Me;class Qe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class Eu extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Au extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const Kt=new Fe,po=new ft,Fi=new E,Xt=new zn,ys=new zn,At=new E;class pt extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Au:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Xt.min,ys.min),Xt.expandByPoint(At),At.addVectors(Xt.max,ys.max),Xt.expandByPoint(At)):(Xt.expandByPoint(ys.min),Xt.expandByPoint(ys.max))}Xt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(e,c),At.add(Fi)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new E,l[P]=new E;const c=new E,u=new E,h=new E,d=new Me,f=new Me,g=new Me,_=new E,m=new E;function p(P,b,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(_),a[b].add(_),a[y].add(_),l[P].add(m),l[b].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,b=x.length;P<b;++P){const y=x[P],L=y.start,F=y.count;for(let D=L,W=L+F;D<W;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const M=new E,v=new E,T=new E,R=new E;function A(P){T.fromBufferAttribute(i,P),R.copy(T);const b=a[P];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(R,b);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,b=x.length;P<b;++P){const y=x[P],L=y.start,F=y.count;for(let D=L,W=L+F;D<W;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,o=new E,a=new E,l=new E,c=new E,u=new E,h=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new Fe,oi=new Xr,ar=new xn,Ol=new E,lr=new E,cr=new E,ur=new E,mo=new E,hr=new E,Bl=new E,dr=new E;class ut extends ft{constructor(e=new pt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(mo.fromBufferAttribute(h,e),o?hr.addScaledVector(mo,u):hr.addScaledVector(mo.sub(t),u))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(ar.containsPoint(oi.origin)===!1&&(oi.intersectSphere(ar,Ol)===null||oi.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=M;v<T;v+=3){const R=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);i=fr(this,p,e,n,c,u,h,R,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=fr(this,o,e,n,c,u,h,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=M;v<T;v+=3){const R=v,A=v+1,P=v+2;i=fr(this,p,e,n,c,u,h,R,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,v=m+2;i=fr(this,o,e,n,c,u,h,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ed(s,e,t,n,i,r,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===vn,a),l===null)return null;dr.copy(a),dr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:s}}function fr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,lr),s.getVertexPosition(l,cr),s.getVertexPosition(c,ur);const u=Ed(s,e,t,n,lr,cr,ur,Bl);if(u){const h=new E;$t.getBarycoord(Bl,lr,cr,ur,h),i&&(u.uv=$t.getInterpolatedAttribute(i,a,l,c,h,new Me)),r&&(u.uv1=$t.getInterpolatedAttribute(r,a,l,c,h,new Me)),o&&(u.normal=$t.getInterpolatedAttribute(o,a,l,c,h,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new E,materialIndex:0};$t.getNormal(lr,cr,ur,d.normal),u.face=d,u.barycoord=h}return u}class zt extends pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(_,m,p,x,M,v,T,R,A,P,b){const y=v/A,L=T/P,F=v/2,D=T/2,W=R/2,X=A+1,V=P+1;let Q=0,k=0;const oe=new E;for(let ae=0;ae<V;ae++){const pe=ae*L-D;for(let Te=0;Te<X;Te++){const ke=Te*y-F;oe[_]=ke*x,oe[m]=pe*M,oe[p]=W,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=R>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Te/A),h.push(1-ae/P),Q+=1}}for(let ae=0;ae<P;ae++)for(let pe=0;pe<A;pe++){const Te=d+pe+X*ae,ke=d+pe+X*(ae+1),Z=d+(pe+1)+X*(ae+1),se=d+(pe+1)+X*ae;l.push(Te,ke,se),l.push(ke,Z,se),k+=6}a.addGroup(f,k,b),f+=k,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(s){const e={};for(let t=0;t<s.length;t++){const n=rs(s[t]);for(const i in n)e[i]=n[i]}return e}function Ad(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Hs={clone:rs,merge:Ft};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new E,zl=new Me,kl=new Me;class Ot extends Cu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,zl,kl),t.subVectors(kl,zl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Rd extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const r=new Ot(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new Ot(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends bt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pd extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ru(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zt(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Nn});r.uniforms.tEquirect.value=t;const o=new ut(i,r),a=t.minFilter;return t.minFilter===In&&(t.minFilter=qt),new Rd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const go=new E,Ld=new E,Id=new We;class di{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=go.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),i=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new xn,pr=new E;class Ga{constructor(e=new di,t=new di,n=new di,i=new di,r=new di,o=new di){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+x).normalize(),n[3].setComponents(l-o,d-u,m-g,v-x).normalize(),n[4].setComponents(l-a,d-h,m-_,v-M).normalize(),t===Dn)n[5].setComponents(l+a,d+h,m+_,v+M).normalize();else if(t===zr)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(pr.x=i.normal.x>0?e.max.x:e.min.x,pr.y=i.normal.y>0?e.max.y:e.min.y,pr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Dd(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Si extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let M=0;M<c;M++){const v=M*h-r;g.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,v=x+c*(p+1),T=x+1+c*(p+1),R=x+1+c*p;f.push(M,v,R),f.push(v,T,R)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Nf=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,jp=`uniform vec3 diffuse;
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
}`,Zp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,nm=`#define PHONG
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
}`,im=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,om=`#define TOON
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
}`,am=`#define TOON
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
}`,lm=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Nd,alphahash_pars_fragment:Ud,alphamap_fragment:Fd,alphamap_pars_fragment:Od,alphatest_fragment:Bd,alphatest_pars_fragment:zd,aomap_fragment:kd,aomap_pars_fragment:Vd,batching_pars_vertex:Gd,batching_vertex:Hd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:ef,color_pars_vertex:tf,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:uf,colorspace_fragment:hf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:wf,envmap_vertex:_f,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:Mf,fog_pars_fragment:yf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:bf,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:If,lights_physical_pars_fragment:Df,lights_fragment_begin:Nf,lights_fragment_maps:Uf,lights_fragment_end:Ff,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:kf,map_fragment:Vf,map_pars_fragment:Gf,map_particle_fragment:Hf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:qf,morphinstance_vertex:Yf,morphcolor_vertex:Kf,morphnormal_vertex:jf,morphtarget_pars_vertex:Zf,morphtarget_vertex:$f,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:op,iridescence_pars_fragment:ap,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:up,project_vertex:hp,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:vp,shadowmask_pars_fragment:xp,skinbase_vertex:Mp,skinning_pars_vertex:yp,skinning_vertex:Sp,skinnormal_vertex:bp,specularmap_fragment:Tp,specularmap_pars_fragment:Ep,tonemapping_fragment:Ap,tonemapping_pars_fragment:wp,transmission_fragment:Cp,transmission_pars_fragment:Rp,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Ip,worldpos_vertex:Dp,background_vert:Np,background_frag:Up,backgroundCube_vert:Fp,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:kp,depth_frag:Vp,distanceRGBA_vert:Gp,distanceRGBA_frag:Hp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:Kp,meshbasic_frag:jp,meshlambert_vert:Zp,meshlambert_frag:$p,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:om,meshtoon_frag:am,points_vert:lm,points_frag:cm,shadow_vert:um,shadow_frag:hm,sprite_vert:dm,sprite_frag:fm},xe={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mn={basic:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new re(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ft([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ft([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new re(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ft([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ft([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ft([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ft([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ft([xe.common,xe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ft([xe.lights,xe.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};mn.physical={uniforms:Ft([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const mr={r:0,b:0,g:0},li=new dn,pm=new Fe;function mm(s,e,t,n,i,r,o){const a=new re(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Hr)?(u===void 0&&(u=new ut(new zt(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:rs(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(li)),u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ot,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ut(new Si(2,2),new St({name:"BackgroundMaterial",uniforms:rs(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(mr,wu(s)),n.buffers.color.setClear(mr.r,mr.g,mr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function gm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,L,F,D,W){let X=!1;const V=h(D,F,L);r!==V&&(r=V,c(r.object)),X=f(y,D,F,W),X&&g(y,D,F,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(y,L,F,D),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,L,F){const D=F.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let X=W[L.id];X===void 0&&(X={},W[L.id]=X);let V=X[D];return V===void 0&&(V=d(l()),X[D]=V),V}function d(y){const L=[],F=[],D=[];for(let W=0;W<t;W++)L[W]=0,F[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,L,F,D){const W=r.attributes,X=L.attributes;let V=0;const Q=F.getAttributes();for(const k in Q)if(Q[k].location>=0){const ae=W[k];let pe=X[k];if(pe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function g(y,L,F,D){const W={},X=L.attributes;let V=0;const Q=F.getAttributes();for(const k in Q)if(Q[k].location>=0){let ae=X[k];ae===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),W[k]=pe,V++}r.attributes=W,r.attributesNum=V,r.index=D}function _(){const y=r.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const F=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;F[y]=1,D[y]===0&&(s.enableVertexAttribArray(y),D[y]=1),W[y]!==L&&(s.vertexAttribDivisor(y,L),W[y]=L)}function x(){const y=r.newAttributes,L=r.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==y[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function M(y,L,F,D,W,X,V){V===!0?s.vertexAttribIPointer(y,L,F,W,X):s.vertexAttribPointer(y,L,F,D,W,X)}function v(y,L,F,D){_();const W=D.attributes,X=F.getAttributes(),V=L.defaultAttributeValues;for(const Q in X){const k=X[Q];if(k.location>=0){let oe=W[Q];if(oe===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){const ae=oe.normalized,pe=oe.itemSize,Te=e.get(oe);if(Te===void 0)continue;const ke=Te.buffer,Z=Te.type,se=Te.bytesPerElement,ce=Z===s.INT||Z===s.UNSIGNED_INT||oe.gpuType===Na;if(oe.isInterleavedBufferAttribute){const me=oe.data,we=me.stride,Ne=oe.offset;if(me.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)p(k.location+ze,me.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ze=0;ze<k.locationSize;ze++)m(k.location+ze);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let ze=0;ze<k.locationSize;ze++)M(k.location+ze,pe/k.locationSize,Z,ae,we*se,(Ne+pe/k.locationSize*ze)*se,ce)}else{if(oe.isInstancedBufferAttribute){for(let me=0;me<k.locationSize;me++)p(k.location+me,oe.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<k.locationSize;me++)m(k.location+me);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let me=0;me<k.locationSize;me++)M(k.location+me,pe/k.locationSize,Z,ae,pe*se,pe/k.locationSize*me*se,ce)}}else if(V!==void 0){const ae=V[Q];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(k.location,ae);break;case 3:s.vertexAttrib3fv(k.location,ae);break;case 4:s.vertexAttrib4fv(k.location,ae);break;default:s.vertexAttrib1fv(k.location,ae)}}}}x()}function T(){P();for(const y in n){const L=n[y];for(const F in L){const D=L[F];for(const W in D)u(D[W].object),delete D[W];delete L[F]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const F in L){const D=L[F];for(const W in D)u(D[W].object),delete D[W];delete L[F]}delete n[y.id]}function A(y){for(const L in n){const F=n[L];if(F[y.id]===void 0)continue;const D=F[y.id];for(const W in D)u(D[W].object),delete D[W];delete F[y.id]}}function P(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function _m(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Jt&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==On&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ln&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:R}}function xm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new di,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=u(g,d,M,f);for(let T=0;T!==M;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mm(s){let e=new WeakMap;function t(o,a){return a===jo?o.mapping=Qi:a===Zo&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jo||a===Zo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pd(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class qr extends Cu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Vl=[.125,.215,.35,.446,.526,.582],gi=20,_o=new qr,Gl=new re;let vo=null,xo=0,Mo=0,yo=!1;const fi=(1+Math.sqrt(5))/2,zi=1/fi,Hl=[new E(-fi,zi,0),new E(fi,zi,0),new E(-zi,0,fi),new E(zi,0,fi),new E(0,fi,-zi),new E(0,fi,zi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,xo,Mo),this._renderer.xr.enabled=yo,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Un,format:Jt,colorSpace:Nt,depthBuffer:!1},i=Xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Sm(r,e,t)}return i}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Gl),u.toneMapping=ei,u.autoClear=!1;const f=new Qt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new ut(new zt,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Gl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;gr(i,x*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,_o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hl[(i-r-1)%Hl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let x=0;for(let A=0;A<gi;++A){const P=A/_,b=Math.exp(-P*P/2);p.push(b),A===0?x+=b:A<m&&(x+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[i],T=3*v*(i>M-Xi?i-M+Xi:0),R=4*(this._cubeSize-v);gr(t,T,R,3*v,2*v),l.setRenderTarget(t),l.render(h,_o)}}function ym(s){const e=[],t=[],n=[];let i=s;const r=s-Xi+1+Vl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Xi?l=Vl[o-s+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,P=R>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(b,_*g*R),M.set(d,m*g*R);const y=[R,R,R,R,R,R];v.set(y,p*g*R)}const T=new pt;T.setAttribute("position",new Qe(x,_)),T.setAttribute("uv",new Qe(M,m)),T.setAttribute("faceIndex",new Qe(v,p)),e.push(T),i>Xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xl(s,e,t){const n=new un(s,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Sm(s,e,t){const n=new Float32Array(gi),i=new E(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ql(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Yl(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}function bm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===jo||l===Zo,u=l===Qi||l===es;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Wl(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Wl(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Em(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const T=x[M+0],R=x[M+1],A=x[M+2];d.push(T,R,R,A,A,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const T=M+0,R=M+1,A=M+2;d.push(T,R,R,A,A,T)}}else return;const m=new(Mu(d)?Au:Eu)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Am(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cm(s,e,t){const n=new WeakMap,i=new nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*R*4*h),P=new Su(A,T,R,h);P.type=ln,P.needsUpdate=!0;const b=v*4;for(let L=0;L<h;L++){const F=p[L],D=x[L],W=M[L],X=T*R*4*L;for(let V=0;V<F.count;V++){const Q=V*b;g===!0&&(i.fromBufferAttribute(F,V),A[X+Q+0]=i.x,A[X+Q+1]=i.y,A[X+Q+2]=i.z,A[X+Q+3]=0),_===!0&&(i.fromBufferAttribute(D,V),A[X+Q+4]=i.x,A[X+Q+5]=i.y,A[X+Q+6]=i.z,A[X+Q+7]=0),m===!0&&(i.fromBufferAttribute(W,V),A[X+Q+8]=i.x,A[X+Q+9]=i.y,A[X+Q+10]=i.z,A[X+Q+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new Me(T,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Rm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Lu extends bt{constructor(e,t,n,i,r,o,a,l,c,u=Ki){if(u!==Ki&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=xi),n===void 0&&u===is&&(n=ns),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Iu=new bt,Kl=new Lu(1,1),Du=new Su,Nu=new md,Uu=new Ru,jl=[],Zl=[],$l=new Float32Array(16),Jl=new Float32Array(9),Ql=new Float32Array(4);function hs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=jl[i];if(r===void 0&&(r=new Float32Array(i),jl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yr(s,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Pm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function Im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function Dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function Nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Ql.set(n),s.uniformMatrix2fv(this.addr,!1,Ql),Et(t,n)}}function Um(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Jl.set(n),s.uniformMatrix3fv(this.addr,!1,Jl),Et(t,n)}}function Fm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;$l.set(n),s.uniformMatrix4fv(this.addr,!1,$l),Et(t,n)}}function Om(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function Vm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function Hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function Wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function Xm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Kl.compareFunction=xu,r=Kl):r=Iu,t.setTexture2D(e||r,i)}function qm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nu,i)}function Ym(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uu,i)}function Km(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Du,i)}function jm(s){switch(s){case 5126:return Pm;case 35664:return Lm;case 35665:return Im;case 35666:return Dm;case 35674:return Nm;case 35675:return Um;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Vm;case 36294:return Gm;case 36295:return Hm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Km}}function Zm(s,e){s.uniform1fv(this.addr,e)}function $m(s,e){const t=hs(e,this.size,2);s.uniform2fv(this.addr,t)}function Jm(s,e){const t=hs(e,this.size,3);s.uniform3fv(this.addr,t)}function Qm(s,e){const t=hs(e,this.size,4);s.uniform4fv(this.addr,t)}function e0(s,e){const t=hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function t0(s,e){const t=hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function n0(s,e){const t=hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function i0(s,e){s.uniform1iv(this.addr,e)}function s0(s,e){s.uniform2iv(this.addr,e)}function r0(s,e){s.uniform3iv(this.addr,e)}function o0(s,e){s.uniform4iv(this.addr,e)}function a0(s,e){s.uniform1uiv(this.addr,e)}function l0(s,e){s.uniform2uiv(this.addr,e)}function c0(s,e){s.uniform3uiv(this.addr,e)}function u0(s,e){s.uniform4uiv(this.addr,e)}function h0(s,e,t){const n=this.cache,i=e.length,r=Yr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Iu,r[o])}function d0(s,e,t){const n=this.cache,i=e.length,r=Yr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nu,r[o])}function f0(s,e,t){const n=this.cache,i=e.length,r=Yr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Uu,r[o])}function p0(s,e,t){const n=this.cache,i=e.length,r=Yr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Du,r[o])}function m0(s){switch(s){case 5126:return Zm;case 35664:return $m;case 35665:return Jm;case 35666:return Qm;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jm(t.type)}}class _0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m0(t.type)}}class v0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function ec(s,e){s.seq.push(e),s.map[e.id]=e}function x0(s,e,t){const n=s.name,i=n.length;for(So.lastIndex=0;;){const r=So.exec(n),o=So.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ec(t,c===void 0?new g0(a,s,e):new _0(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new v0(a),ec(t,h)),t=h}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);x0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function tc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const M0=37297;let y0=0;function S0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nc=new We;function b0(s){Ke._getMatrix(nc,Ke.workingColorSpace,s);const e=`mat3( ${nc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Wr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ic(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+S0(s.getShaderSource(e),o)}else return i}function T0(s,e){const t=b0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function E0(s,e){let t;switch(e){case tu:t="Linear";break;case nu:t="Reinhard";break;case iu:t="Cineon";break;case Da:t="ACESFilmic";break;case su:t="AgX";break;case ru:t="Neutral";break;case Lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new E;function A0(){Ke.getLuminanceCoefficients(_r);const s=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function C0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ds(s){return s!==""}function sc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(P0,I0)}const L0=new Map;function I0(s,e){let t=qe[e];if(t===void 0){const n=L0.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ea(t)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(s){return s.replace(D0,N0)}function N0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ac(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function U0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function F0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case es:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function B0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eu:e="ENVMAP_BLENDING_MULTIPLY";break;case Rh:e="ENVMAP_BLENDING_MIX";break;case Ph:e="ENVMAP_BLENDING_ADD";break}return e}function z0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function k0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=U0(t),c=F0(t),u=O0(t),h=B0(t),d=z0(t),f=w0(t),g=C0(r),_=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(m=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?qe.tonemapping_pars_fragment:"",t.toneMapping!==ei?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,T0("linearToOutputTexel",t.outputColorSpace),A0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Ea(o),o=sc(o,t),o=rc(o,t),a=Ea(a),a=sc(a,t),a=rc(a,t),o=oc(o),a=oc(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,v=x+p+a,T=tc(i,i.VERTEX_SHADER,M),R=tc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(T).trim(),W=i.getShaderInfoLog(R).trim();let X=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,R);else{const Q=ic(i,T,"vertex"),k=ic(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Q+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||W==="")&&(V=!1);V&&(L.diagnostics={runnable:X,programLog:F,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(T),i.deleteShader(R),P=new Fr(i,_),b=R0(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,M0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let V0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new H0(e),t.set(e,n)),n}}class H0{constructor(e){this.id=V0++,this.code=e,this.usedTimes=0}}function W0(s,e,t,n,i,r,o){const a=new bu,l=new G0,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,F,D){const W=F.fog,X=D.geometry,V=b.isMeshStandardMaterial?F.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),k=Q&&Q.mapping===Hr?Q.image.height:null,oe=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=ae!==void 0?ae.length:0;let Te=0;X.morphAttributes.position!==void 0&&(Te=1),X.morphAttributes.normal!==void 0&&(Te=2),X.morphAttributes.color!==void 0&&(Te=3);let ke,Z,se,ce;if(oe){const et=mn[oe];ke=et.vertexShader,Z=et.fragmentShader}else ke=b.vertexShader,Z=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const me=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,ze=D.isBatchedMesh===!0,$e=!!b.map,Xe=!!b.matcap,rt=!!Q,O=!!b.aoMap,xt=!!b.lightMap,Ge=!!b.bumpMap,G=!!b.normalMap,te=!!b.displacementMap,ve=!!b.emissiveMap,ne=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,N=b.clearcoat>0,Y=b.dispersion>0,q=b.iridescence>0,H=b.sheen>0,ge=b.transmission>0,he=S&&!!b.anisotropyMap,_e=N&&!!b.clearcoatMap,Be=N&&!!b.clearcoatNormalMap,le=N&&!!b.clearcoatRoughnessMap,ye=q&&!!b.iridescenceMap,De=q&&!!b.iridescenceThicknessMap,Ue=H&&!!b.sheenColorMap,be=H&&!!b.sheenRoughnessMap,ee=!!b.specularMap,Ee=!!b.specularColorMap,Oe=!!b.specularIntensityMap,I=ge&&!!b.transmissionMap,$=ge&&!!b.thicknessMap,U=!!b.gradientMap,J=!!b.alphaMap,de=b.alphaTest>0,ue=!!b.alphaHash,Ce=!!b.extensions;let Ze=ei;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ze=s.toneMapping);const Mt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:ke,fragmentShader:Z,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ze,batchingColor:ze&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Nt,alphaToCoverage:!!b.alphaToCoverage,map:$e,matcap:Xe,envMap:rt,envMapMode:rt&&Q.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:xt,bumpMap:Ge,normalMap:G,displacementMap:d&&te,emissiveMap:ve,normalMapObjectSpace:G&&b.normalMapType===Oh,normalMapTangentSpace:G&&b.normalMapType===vu,metalnessMap:ne,roughnessMap:C,anisotropy:S,anisotropyMap:he,clearcoat:N,clearcoatMap:_e,clearcoatNormalMap:Be,clearcoatRoughnessMap:le,dispersion:Y,iridescence:q,iridescenceMap:ye,iridescenceThicknessMap:De,sheen:H,sheenColorMap:Ue,sheenRoughnessMap:be,specularMap:ee,specularColorMap:Ee,specularIntensityMap:Oe,transmission:ge,transmissionMap:I,thicknessMap:$,gradientMap:U,opaque:b.transparent===!1&&b.blending===Yi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:ue,combine:b.combine,mapUv:$e&&_(b.map.channel),aoMapUv:O&&_(b.aoMap.channel),lightMapUv:xt&&_(b.lightMap.channel),bumpMapUv:Ge&&_(b.bumpMap.channel),normalMapUv:G&&_(b.normalMap.channel),displacementMapUv:te&&_(b.displacementMap.channel),emissiveMapUv:ve&&_(b.emissiveMap.channel),metalnessMapUv:ne&&_(b.metalnessMap.channel),roughnessMapUv:C&&_(b.roughnessMap.channel),anisotropyMapUv:he&&_(b.anisotropyMap.channel),clearcoatMapUv:_e&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(b.sheenRoughnessMap.channel),specularMapUv:ee&&_(b.specularMap.channel),specularColorMapUv:Ee&&_(b.specularColorMap.channel),specularIntensityMapUv:Oe&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:$&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(G||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&($e||J),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===ot,decodeVideoTextureEmissive:ve&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ct,flipSided:b.side===Dt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(y,b),M(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function x(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const y=g[b.type];let L;if(y){const F=mn[y];L=Hs.clone(F.uniforms)}else L=b.uniforms;return L}function T(b,y){let L;for(let F=0,D=u.length;F<D;F++){const W=u[F];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new k0(s,y,b,r),u.push(L)),L}function R(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:P}}function X0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function q0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||q0),n.length>1&&n.sort(d||lc),i.length>1&&i.sort(d||lc)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Y0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new cc,s.set(n,[o])):i>=r.length?(o=new cc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function K0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new re};break;case"SpotLight":t={position:new E,direction:new E,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function j0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Z0=0;function $0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function J0(s){const e=new K0,t=j0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new Fe,o=new Fe;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,v=0,T=0,R=0,A=0;c.sort($0);for(let b=0,y=c.length;b<y;b++){const L=c[b],F=L.color,D=L.intensity,W=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*D,h+=F.g*D,d+=F.b*D;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],D);A++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,k=t.get(L);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=V,f++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(D),V.distance=W,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[_]=V;const Q=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,Q.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const k=t.get(L);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=X,v++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(F).multiplyScalar(D),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Q=L.shadow,k=t.get(L);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(D),V.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==T||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=T,P.numLightProbes=A,n.version=Z0++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function uc(s){const e=new J0(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Q0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new uc(s),e.set(i,[a])):r>=o.length?(a=new uc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class eg extends hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function sg(s,e,t){let n=new Ga;const i=new Me,r=new Me,o=new nt,a=new eg({depthPacking:Fh}),l=new tg,c={},u=t.maxTextureSize,h={[vn]:Dt,[Dt]:vn,[Ct]:Ct},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let p=this.type;this.render=function(R,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Nn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=p!==Rn&&this.type===Rn,W=p===Rn&&this.type!==Rn;for(let X=0,V=R.length;X<V;X++){const Q=R[X],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const oe=k.getFrameExtents();if(i.multiply(oe),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/oe.x),i.x=r.x*oe.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/oe.y),i.y=r.y*oe.y,k.mapSize.y=r.y)),k.map===null||D===!0||W===!0){const pe=this.type!==Rn?{minFilter:Bt,magFilter:Bt}:{};k.map!==null&&k.map.dispose(),k.map=new un(i.x,i.y,pe),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ae=k.getViewportCount();for(let pe=0;pe<ae;pe++){const Te=k.getViewport(pe);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),F.viewport(o),k.updateMatrices(Q,pe),n=k.getFrustum(),v(A,P,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===Rn&&x(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,y,L)};function x(R,A){const P=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new un(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,P,f,_,null)}function M(R,A,P,b){let y=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=y.uuid,D=A.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let X=W[D];X===void 0&&(X=y.clone(),W[D]=X,A.addEventListener("dispose",T)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Rn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=P}return y}function v(R,A,P,b,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Rn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const D=e.update(R),W=R.material;if(Array.isArray(W)){const X=D.groups;for(let V=0,Q=X.length;V<Q;V++){const k=X[V],oe=W[k.materialIndex];if(oe&&oe.visible){const ae=M(R,oe,b,y);R.onBeforeShadow(s,R,A,P,D,ae,k),s.renderBufferDirect(P,null,D,ae,R,k),R.onAfterShadow(s,R,A,P,D,ae,k)}}}else if(W.visible){const X=M(R,W,b,y);R.onBeforeShadow(s,R,A,P,D,X,null),s.renderBufferDirect(P,null,D,X,R,null),R.onAfterShadow(s,R,A,P,D,X,null)}}const F=R.children;for(let D=0,W=F.length;D<W;D++)v(F[D],A,P,b,y)}function T(R){R.target.removeEventListener("dispose",T);for(const P in c){const b=c[P],y=R.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const rg={[Go]:Ho,[Wo]:Yo,[Xo]:Ko,[Ji]:qo,[Ho]:Go,[Yo]:Wo,[Ko]:Xo,[qo]:Ji};function og(s,e){function t(){let I=!1;const $=new nt;let U=null;const J=new nt(0,0,0,0);return{setMask:function(de){U!==de&&!I&&(s.colorMask(de,de,de,de),U=de)},setLocked:function(de){I=de},setClear:function(de,ue,Ce,Ze,Mt){Mt===!0&&(de*=Ze,ue*=Ze,Ce*=Ze),$.set(de,ue,Ce,Ze),J.equals($)===!1&&(s.clearColor(de,ue,Ce,Ze),J.copy($))},reset:function(){I=!1,U=null,J.set(-1,0,0,0)}}}function n(){let I=!1,$=!1,U=null,J=null,de=null;return{setReversed:function(ue){if($!==ue){const Ce=e.get("EXT_clip_control");$?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const Ze=de;de=null,this.setClear(Ze)}$=ue},getReversed:function(){return $},setTest:function(ue){ue?me(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ue){U!==ue&&!I&&(s.depthMask(ue),U=ue)},setFunc:function(ue){if($&&(ue=rg[ue]),J!==ue){switch(ue){case Go:s.depthFunc(s.NEVER);break;case Ho:s.depthFunc(s.ALWAYS);break;case Wo:s.depthFunc(s.LESS);break;case Ji:s.depthFunc(s.LEQUAL);break;case Xo:s.depthFunc(s.EQUAL);break;case qo:s.depthFunc(s.GEQUAL);break;case Yo:s.depthFunc(s.GREATER);break;case Ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ue}},setLocked:function(ue){I=ue},setClear:function(ue){de!==ue&&($&&(ue=1-ue),s.clearDepth(ue),de=ue)},reset:function(){I=!1,U=null,J=null,de=null,$=!1}}}function i(){let I=!1,$=null,U=null,J=null,de=null,ue=null,Ce=null,Ze=null,Mt=null;return{setTest:function(et){I||(et?me(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(et){$!==et&&!I&&(s.stencilMask(et),$=et)},setFunc:function(et,Gt,tn){(U!==et||J!==Gt||de!==tn)&&(s.stencilFunc(et,Gt,tn),U=et,J=Gt,de=tn)},setOp:function(et,Gt,tn){(ue!==et||Ce!==Gt||Ze!==tn)&&(s.stencilOp(et,Gt,tn),ue=et,Ce=Gt,Ze=tn)},setLocked:function(et){I=et},setClear:function(et){Mt!==et&&(s.clearStencil(et),Mt=et)},reset:function(){I=!1,$=null,U=null,J=null,de=null,ue=null,Ce=null,Ze=null,Mt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,T=null,R=null,A=new re(0,0,0),P=0,b=!1,y=null,L=null,F=null,D=null,W=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Q>=2);let oe=null,ae={};const pe=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),ke=new nt().fromArray(pe),Z=new nt().fromArray(Te);function se(I,$,U,J){const de=new Uint8Array(4),ue=s.createTexture();s.bindTexture(I,ue),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<U;Ce++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D($,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D($+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return ue}const ce={};ce[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(s.DEPTH_TEST),o.setFunc(Ji),Ge(!1),G(hl),me(s.CULL_FACE),O(Nn);function me(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function we(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ne(I,$){return h[I]!==$?(s.bindFramebuffer(I,$),h[I]=$,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=$),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=$),!0):!1}function ze(I,$){let U=f,J=!1;if(I){U=d.get($),U===void 0&&(U=[],d.set($,U));const de=I.textures;if(U.length!==de.length||U[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Ce=de.length;ue<Ce;ue++)U[ue]=s.COLOR_ATTACHMENT0+ue;U.length=de.length,J=!0}}else U[0]!==s.BACK&&(U[0]=s.BACK,J=!0);J&&s.drawBuffers(U)}function $e(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Xe={[mi]:s.FUNC_ADD,[dh]:s.FUNC_SUBTRACT,[fh]:s.FUNC_REVERSE_SUBTRACT};Xe[ph]=s.MIN,Xe[mh]=s.MAX;const rt={[gh]:s.ZERO,[_h]:s.ONE,[vh]:s.SRC_COLOR,[ko]:s.SRC_ALPHA,[Th]:s.SRC_ALPHA_SATURATE,[Sh]:s.DST_COLOR,[Mh]:s.DST_ALPHA,[xh]:s.ONE_MINUS_SRC_COLOR,[Vo]:s.ONE_MINUS_SRC_ALPHA,[bh]:s.ONE_MINUS_DST_COLOR,[yh]:s.ONE_MINUS_DST_ALPHA,[Eh]:s.CONSTANT_COLOR,[Ah]:s.ONE_MINUS_CONSTANT_COLOR,[wh]:s.CONSTANT_ALPHA,[Ch]:s.ONE_MINUS_CONSTANT_ALPHA};function O(I,$,U,J,de,ue,Ce,Ze,Mt,et){if(I===Nn){_===!0&&(we(s.BLEND),_=!1);return}if(_===!1&&(me(s.BLEND),_=!0),I!==hh){if(I!==m||et!==b){if((p!==mi||v!==mi)&&(s.blendEquation(s.FUNC_ADD),p=mi,v=mi),et)switch(I){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vt:s.blendFunc(s.ONE,s.ONE);break;case dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,T=null,R=null,A.set(0,0,0),P=0,m=I,b=et}return}de=de||$,ue=ue||U,Ce=Ce||J,($!==p||de!==v)&&(s.blendEquationSeparate(Xe[$],Xe[de]),p=$,v=de),(U!==x||J!==M||ue!==T||Ce!==R)&&(s.blendFuncSeparate(rt[U],rt[J],rt[ue],rt[Ce]),x=U,M=J,T=ue,R=Ce),(Ze.equals(A)===!1||Mt!==P)&&(s.blendColor(Ze.r,Ze.g,Ze.b,Mt),A.copy(Ze),P=Mt),m=I,b=!1}function xt(I,$){I.side===Ct?we(s.CULL_FACE):me(s.CULL_FACE);let U=I.side===Dt;$&&(U=!U),Ge(U),I.blending===Yi&&I.transparent===!1?O(Nn):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function G(I){I!==lh?(me(s.CULL_FACE),I!==L&&(I===hl?s.cullFace(s.BACK):I===ch?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),L=I}function te(I){I!==F&&(V&&s.lineWidth(I),F=I)}function ve(I,$,U){I?(me(s.POLYGON_OFFSET_FILL),(D!==$||W!==U)&&(s.polygonOffset($,U),D=$,W=U)):we(s.POLYGON_OFFSET_FILL)}function ne(I){I?me(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+X-1),oe!==I&&(s.activeTexture(I),oe=I)}function S(I,$,U){U===void 0&&(oe===null?U=s.TEXTURE0+X-1:U=oe);let J=ae[U];J===void 0&&(J={type:void 0,texture:void 0},ae[U]=J),(J.type!==I||J.texture!==$)&&(oe!==U&&(s.activeTexture(U),oe=U),s.bindTexture(I,$||ce[I]),J.type=I,J.texture=$)}function N(){const I=ae[oe];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(I){ke.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ke.copy(I))}function be(I){Z.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function ee(I,$){let U=c.get($);U===void 0&&(U=new WeakMap,c.set($,U));let J=U.get(I);J===void 0&&(J=s.getUniformBlockIndex($,I.name),U.set(I,J))}function Ee(I,$){const J=c.get($).get(I);l.get($)!==J&&(s.uniformBlockBinding($,J,I.__bindingPointIndex),l.set($,J))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},oe=null,ae={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,T=null,R=null,A=new re(0,0,0),P=0,b=!1,y=null,L=null,F=null,D=null,W=null,ke.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:we,bindFramebuffer:Ne,drawBuffers:ze,useProgram:$e,setBlending:O,setMaterial:xt,setFlipSided:Ge,setCullFace:G,setLineWidth:te,setPolygonOffset:ve,setScissorTest:ne,activeTexture:C,bindTexture:S,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:q,texImage2D:ye,texImage3D:De,updateUBOMapping:ee,uniformBlockBinding:Ee,texStorage2D:Be,texStorage3D:le,texSubImage2D:H,texSubImage3D:ge,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Ue,viewport:be,reset:Oe}}function hc(s,e,t,n){const i=ag(n);switch(t){case hu:return s*e;case fu:return s*e;case pu:return s*e*2;case Oa:return s*e/i.components*i.byteLength;case Ba:return s*e/i.components*i.byteLength;case mu:return s*e*2/i.components*i.byteLength;case za:return s*e*2/i.components*i.byteLength;case du:return s*e*3/i.components*i.byteLength;case Jt:return s*e*4/i.components*i.byteLength;case ka:return s*e*4/i.components*i.byteLength;case Lr:case Ir:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Nr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jo:case ea:return Math.max(s,16)*Math.max(e,8)/4;case $o:case Qo:return Math.max(s,8)*Math.max(e,8)/2;case ta:case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case la:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ca:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ua:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ma:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ur:case va:case xa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gu:case Ma:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ya:case Sa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(s){switch(s){case On:case lu:return{byteLength:1,components:1};case zs:case cu:case Un:return{byteLength:2,components:1};case Ua:case Fa:return{byteLength:2,components:4};case xi:case Na:case ln:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function lg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):Gs("canvas")}function _(C,S,N){let Y=1;const q=ne(C);if((q.width>N||q.height>N)&&(Y=N/Math.max(q.width,q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const H=Math.floor(Y*q.width),ge=Math.floor(Y*q.height);h===void 0&&(h=g(H,ge));const he=S?g(H,ge):h;return he.width=H,he.height=ge,he.getContext("2d").drawImage(C,0,0,H,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+H+"x"+ge+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,S,N,Y,q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let H=S;if(S===s.RED&&(N===s.FLOAT&&(H=s.R32F),N===s.HALF_FLOAT&&(H=s.R16F),N===s.UNSIGNED_BYTE&&(H=s.R8)),S===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.R8UI),N===s.UNSIGNED_SHORT&&(H=s.R16UI),N===s.UNSIGNED_INT&&(H=s.R32UI),N===s.BYTE&&(H=s.R8I),N===s.SHORT&&(H=s.R16I),N===s.INT&&(H=s.R32I)),S===s.RG&&(N===s.FLOAT&&(H=s.RG32F),N===s.HALF_FLOAT&&(H=s.RG16F),N===s.UNSIGNED_BYTE&&(H=s.RG8)),S===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RG8UI),N===s.UNSIGNED_SHORT&&(H=s.RG16UI),N===s.UNSIGNED_INT&&(H=s.RG32UI),N===s.BYTE&&(H=s.RG8I),N===s.SHORT&&(H=s.RG16I),N===s.INT&&(H=s.RG32I)),S===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RGB8UI),N===s.UNSIGNED_SHORT&&(H=s.RGB16UI),N===s.UNSIGNED_INT&&(H=s.RGB32UI),N===s.BYTE&&(H=s.RGB8I),N===s.SHORT&&(H=s.RGB16I),N===s.INT&&(H=s.RGB32I)),S===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),N===s.UNSIGNED_INT&&(H=s.RGBA32UI),N===s.BYTE&&(H=s.RGBA8I),N===s.SHORT&&(H=s.RGBA16I),N===s.INT&&(H=s.RGBA32I)),S===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),S===s.RGBA){const ge=q?Wr:Ke.getTransfer(Y);N===s.FLOAT&&(H=s.RGBA32F),N===s.HALF_FLOAT&&(H=s.RGBA16F),N===s.UNSIGNED_BYTE&&(H=ge===ot?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function v(C,S){let N;return C?S===null||S===xi||S===ns?N=s.DEPTH24_STENCIL8:S===ln?N=s.DEPTH32F_STENCIL8:S===zs&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===ns?N=s.DEPTH_COMPONENT24:S===ln?N=s.DEPTH_COMPONENT32F:S===zs&&(N=s.DEPTH_COMPONENT16),N}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),P(S),S.isVideoTexture&&u.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),y(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const N=C.source,Y=d.get(N);if(Y){const q=Y[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(C),Object.keys(Y).length===0&&d.delete(N)}n.remove(C)}function b(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const N=C.source,Y=d.get(N);delete Y[S.__cacheKey],o.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let q=0;q<S.__webglFramebuffer[Y].length;q++)s.deleteFramebuffer(S.__webglFramebuffer[Y][q]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=C.textures;for(let Y=0,q=N.length;Y<q;Y++){const H=n.get(N[Y]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(C)}let L=0;function F(){L=0}function D(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function W(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const N=n.get(C);if(C.isVideoTexture&&te(C),C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(N,C,S);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+S)}function V(C,S){const N=n.get(C);if(C.version>0&&N.__version!==C.version){Z(N,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+S)}function Q(C,S){const N=n.get(C);if(C.version>0&&N.__version!==C.version){Z(N,C,S);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+S)}function k(C,S){const N=n.get(C);if(C.version>0&&N.__version!==C.version){se(N,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+S)}const oe={[ts]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[Br]:s.MIRRORED_REPEAT},ae={[Bt]:s.NEAREST,[au]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[Pr]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},pe={[Bh]:s.NEVER,[Wh]:s.ALWAYS,[zh]:s.LESS,[xu]:s.LEQUAL,[kh]:s.EQUAL,[Hh]:s.GEQUAL,[Vh]:s.GREATER,[Gh]:s.NOTEQUAL};function Te(C,S){if(S.type===ln&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===Pr||S.magFilter===Ls||S.magFilter===In||S.minFilter===qt||S.minFilter===Pr||S.minFilter===Ls||S.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,oe[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,oe[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,oe[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ae[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==Ls&&S.minFilter!==In||S.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(C,S){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const Y=S.source;let q=d.get(Y);q===void 0&&(q={},d.set(Y,q));const H=W(S);if(H!==C.__cacheKey){q[H]===void 0&&(q[H]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[H].usedTimes++;const ge=q[C.__cacheKey];ge!==void 0&&(q[C.__cacheKey].usedTimes--,ge.usedTimes===0&&b(S)),C.__cacheKey=H,C.__webglTexture=q[H].texture}return N}function Z(C,S,N){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const q=ke(C,S),H=S.source;t.bindTexture(Y,C.__webglTexture,s.TEXTURE0+N);const ge=n.get(H);if(H.version!==ge.__version||q===!0){t.activeTexture(s.TEXTURE0+N);const he=Ke.getPrimaries(Ke.workingColorSpace),_e=S.colorSpace===$n?null:Ke.getPrimaries(S.colorSpace),Be=S.colorSpace===$n||he===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let le=_(S.image,!1,i.maxTextureSize);le=ve(S,le);const ye=r.convert(S.format,S.colorSpace),De=r.convert(S.type);let Ue=M(S.internalFormat,ye,De,S.colorSpace,S.isVideoTexture);Te(Y,S);let be;const ee=S.mipmaps,Ee=S.isVideoTexture!==!0,Oe=ge.__version===void 0||q===!0,I=H.dataReady,$=T(S,le);if(S.isDepthTexture)Ue=v(S.format===is,S.type),Oe&&(Ee?t.texStorage2D(s.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,De,null));else if(S.isDataTexture)if(ee.length>0){Ee&&Oe&&t.texStorage2D(s.TEXTURE_2D,$,Ue,ee[0].width,ee[0].height);for(let U=0,J=ee.length;U<J;U++)be=ee[U],Ee?I&&t.texSubImage2D(s.TEXTURE_2D,U,0,0,be.width,be.height,ye,De,be.data):t.texImage2D(s.TEXTURE_2D,U,Ue,be.width,be.height,0,ye,De,be.data);S.generateMipmaps=!1}else Ee?(Oe&&t.texStorage2D(s.TEXTURE_2D,$,Ue,le.width,le.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le.width,le.height,ye,De,le.data)):t.texImage2D(s.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,De,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ee&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$,Ue,ee[0].width,ee[0].height,le.depth);for(let U=0,J=ee.length;U<J;U++)if(be=ee[U],S.format!==Jt)if(ye!==null)if(Ee){if(I)if(S.layerUpdates.size>0){const de=hc(be.width,be.height,S.format,S.type);for(const ue of S.layerUpdates){const Ce=be.data.subarray(ue*de/be.data.BYTES_PER_ELEMENT,(ue+1)*de/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,U,0,0,ue,be.width,be.height,1,ye,Ce)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,U,0,0,0,be.width,be.height,le.depth,ye,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,U,Ue,be.width,be.height,le.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,U,0,0,0,be.width,be.height,le.depth,ye,De,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,U,Ue,be.width,be.height,le.depth,0,ye,De,be.data)}else{Ee&&Oe&&t.texStorage2D(s.TEXTURE_2D,$,Ue,ee[0].width,ee[0].height);for(let U=0,J=ee.length;U<J;U++)be=ee[U],S.format!==Jt?ye!==null?Ee?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,U,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(s.TEXTURE_2D,U,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?I&&t.texSubImage2D(s.TEXTURE_2D,U,0,0,be.width,be.height,ye,De,be.data):t.texImage2D(s.TEXTURE_2D,U,Ue,be.width,be.height,0,ye,De,be.data)}else if(S.isDataArrayTexture)if(Ee){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$,Ue,le.width,le.height,le.depth),I)if(S.layerUpdates.size>0){const U=hc(le.width,le.height,S.format,S.type);for(const J of S.layerUpdates){const de=le.data.subarray(J*U/le.data.BYTES_PER_ELEMENT,(J+1)*U/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,le.width,le.height,1,ye,De,de)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,De,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,ye,De,le.data);else if(S.isData3DTexture)Ee?(Oe&&t.texStorage3D(s.TEXTURE_3D,$,Ue,le.width,le.height,le.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,De,le.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,ye,De,le.data);else if(S.isFramebufferTexture){if(Oe)if(Ee)t.texStorage2D(s.TEXTURE_2D,$,Ue,le.width,le.height);else{let U=le.width,J=le.height;for(let de=0;de<$;de++)t.texImage2D(s.TEXTURE_2D,de,Ue,U,J,0,ye,De,null),U>>=1,J>>=1}}else if(ee.length>0){if(Ee&&Oe){const U=ne(ee[0]);t.texStorage2D(s.TEXTURE_2D,$,Ue,U.width,U.height)}for(let U=0,J=ee.length;U<J;U++)be=ee[U],Ee?I&&t.texSubImage2D(s.TEXTURE_2D,U,0,0,ye,De,be):t.texImage2D(s.TEXTURE_2D,U,Ue,ye,De,be);S.generateMipmaps=!1}else if(Ee){if(Oe){const U=ne(le);t.texStorage2D(s.TEXTURE_2D,$,Ue,U.width,U.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,De,le)}else t.texImage2D(s.TEXTURE_2D,0,Ue,ye,De,le);m(S)&&p(Y),ge.__version=H.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function se(C,S,N){if(S.image.length!==6)return;const Y=ke(C,S),q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+N);const H=n.get(q);if(q.version!==H.__version||Y===!0){t.activeTexture(s.TEXTURE0+N);const ge=Ke.getPrimaries(Ke.workingColorSpace),he=S.colorSpace===$n?null:Ke.getPrimaries(S.colorSpace),_e=S.colorSpace===$n||ge===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Be=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!Be&&!le?ye[J]=_(S.image[J],!0,i.maxCubemapSize):ye[J]=le?S.image[J].image:S.image[J],ye[J]=ve(S,ye[J]);const De=ye[0],Ue=r.convert(S.format,S.colorSpace),be=r.convert(S.type),ee=M(S.internalFormat,Ue,be,S.colorSpace),Ee=S.isVideoTexture!==!0,Oe=H.__version===void 0||Y===!0,I=q.dataReady;let $=T(S,De);Te(s.TEXTURE_CUBE_MAP,S);let U;if(Be){Ee&&Oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,$,ee,De.width,De.height);for(let J=0;J<6;J++){U=ye[J].mipmaps;for(let de=0;de<U.length;de++){const ue=U[de];S.format!==Jt?Ue!==null?Ee?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ue.width,ue.height,Ue,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ue.width,ue.height,Ue,be,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,ee,ue.width,ue.height,0,Ue,be,ue.data)}}}else{if(U=S.mipmaps,Ee&&Oe){U.length>0&&$++;const J=ne(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,$,ee,J.width,J.height)}for(let J=0;J<6;J++)if(le){Ee?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,Ue,be,ye[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,ye[J].width,ye[J].height,0,Ue,be,ye[J].data);for(let de=0;de<U.length;de++){const Ce=U[de].image[J].image;Ee?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ce.width,Ce.height,Ue,be,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,ee,Ce.width,Ce.height,0,Ue,be,Ce.data)}}else{Ee?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,be,ye[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,Ue,be,ye[J]);for(let de=0;de<U.length;de++){const ue=U[de];Ee?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ue,be,ue.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,ee,Ue,be,ue.image[J])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),H.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ce(C,S,N,Y,q,H){const ge=r.convert(N.format,N.colorSpace),he=r.convert(N.type),_e=M(N.internalFormat,ge,he,N.colorSpace),Be=n.get(S),le=n.get(N);if(le.__renderTarget=S,!Be.__hasExternalTextures){const ye=Math.max(1,S.width>>H),De=Math.max(1,S.height>>H);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,H,_e,ye,De,S.depth,0,ge,he,null):t.texImage2D(q,H,_e,ye,De,0,ge,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),G(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,q,le.__webglTexture,0,Ge(S)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,q,le.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(C,S,N){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Y=S.depthTexture,q=Y&&Y.isDepthTexture?Y.type:null,H=v(S.stencilBuffer,q),ge=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=Ge(S);G(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,H,S.width,S.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,H,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,H,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,C)}else{const Y=S.textures;for(let q=0;q<Y.length;q++){const H=Y[q],ge=r.convert(H.format,H.colorSpace),he=r.convert(H.type),_e=M(H.internalFormat,ge,he,H.colorSpace),Be=Ge(S);N&&G(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,_e,S.width,S.height):G(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,_e,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_e,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const q=Y.__webglTexture,H=Ge(S);if(S.depthTexture.format===Ki)G(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(S.depthTexture.format===is)G(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const S=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",q)};Y.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=Y}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");we(S.__webglFramebuffer,C)}else if(N){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),me(S.__webglDepthbuffer[Y],C,!1);else{const q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,H)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),me(S.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(C,S,N){const Y=n.get(C);S!==void 0&&ce(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ne(C)}function $e(C){const S=C.texture,N=n.get(C),Y=n.get(S);C.addEventListener("dispose",A);const q=C.textures,H=C.isWebGLCubeRenderTarget===!0,ge=q.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,o.memory.textures++),H){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let _e=0;_e<S.mipmaps.length;_e++)N.__webglFramebuffer[he][_e]=s.createFramebuffer()}else N.__webglFramebuffer[he]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)N.__webglFramebuffer[he]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(ge)for(let he=0,_e=q.length;he<_e;he++){const Be=n.get(q[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&G(C)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<q.length;he++){const _e=q[he];N.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const Be=r.convert(_e.format,_e.colorSpace),le=r.convert(_e.type),ye=M(_e.internalFormat,Be,le,_e.colorSpace,C.isXRRenderTarget===!0),De=Ge(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ye,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,N.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),me(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Te(s.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)ce(N.__webglFramebuffer[he][_e],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else ce(N.__webglFramebuffer[he],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let he=0,_e=q.length;he<_e;he++){const Be=q[he],le=n.get(Be);t.bindTexture(s.TEXTURE_2D,le.__webglTexture),Te(s.TEXTURE_2D,Be),ce(N.__webglFramebuffer,C,Be,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),m(Be)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),Te(he,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)ce(N.__webglFramebuffer[_e],C,S,s.COLOR_ATTACHMENT0,he,_e);else ce(N.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,he,0);m(S)&&p(he),t.unbindTexture()}C.depthBuffer&&Ne(C)}function Xe(C){const S=C.textures;for(let N=0,Y=S.length;N<Y;N++){const q=S[N];if(m(q)){const H=x(C),ge=n.get(q).__webglTexture;t.bindTexture(H,ge),p(H),t.unbindTexture()}}}const rt=[],O=[];function xt(C){if(C.samples>0){if(G(C)===!1){const S=C.textures,N=C.width,Y=C.height;let q=s.COLOR_BUFFER_BIT;const H=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(C),he=S.length>1;if(he)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Be=n.get(S[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,q,s.NEAREST),l===!0&&(rt.length=0,O.length=0,rt.push(s.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rt.push(H),O.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Be=n.get(S[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ge(C){return Math.min(i.maxSamples,C.samples)}function G(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function te(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ve(C,S){const N=C.colorSpace,Y=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Nt&&N!==$n&&(Ke.getTransfer(N)===ot?(Y!==Jt||q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=G}function cg(s,e){function t(n,i=$n){let r;const o=Ke.getTransfer(i);if(n===On)return s.UNSIGNED_BYTE;if(n===Ua)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return s.BYTE;if(n===cu)return s.SHORT;if(n===zs)return s.UNSIGNED_SHORT;if(n===Na)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Un)return s.HALF_FLOAT;if(n===hu)return s.ALPHA;if(n===du)return s.RGB;if(n===Jt)return s.RGBA;if(n===fu)return s.LUMINANCE;if(n===pu)return s.LUMINANCE_ALPHA;if(n===Ki)return s.DEPTH_COMPONENT;if(n===is)return s.DEPTH_STENCIL;if(n===Oa)return s.RED;if(n===Ba)return s.RED_INTEGER;if(n===mu)return s.RG;if(n===za)return s.RG_INTEGER;if(n===ka)return s.RGBA_INTEGER;if(n===Lr||n===Ir||n===Dr||n===Nr)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Jo||n===Qo||n===ea)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===na||n===ia)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===na)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===_a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ur||n===va||n===xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ur)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gu||n===Ma||n===ya||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ur)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class ug extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new St({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends us{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new pg,m=t.getContextAttributes();let p=null,x=null;const M=[],v=[],T=new Me;let R=null;const A=new Ot;A.viewport=new nt;const P=new Ot;P.viewport=new nt;const b=[A,P],y=new ug;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=M[Z];return se===void 0&&(se=new bo,M[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=M[Z];return se===void 0&&(se=new bo,M[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=M[Z];return se===void 0&&(se=new bo,M[Z]=se),se.getHandSpace()};function D(Z){const se=v.indexOf(Z.inputSource);if(se===-1)return;const ce=M[se];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,c||o),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let Z=0;Z<M.length;Z++){const se=v[Z];se!==null&&(v[Z]=null,M[Z].disconnect(se))}L=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new un(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:On,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ce=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?is:Ki,ce=m.stencil?ns:xi);const we={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new un(d.textureWidth,d.textureHeight,{format:Jt,type:On,depthTexture:new Lu(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Z){for(let se=0;se<Z.removed.length;se++){const ce=Z.removed[se],me=v.indexOf(ce);me>=0&&(v[me]=null,M[me].disconnect(ce))}for(let se=0;se<Z.added.length;se++){const ce=Z.added[se];let me=v.indexOf(ce);if(me===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=v.length){v.push(ce),me=Ne;break}else if(v[Ne]===null){v[Ne]=ce,me=Ne;break}if(me===-1)break}const we=M[me];we&&we.connect(ce)}}const V=new E,Q=new E;function k(Z,se,ce){V.setFromMatrixPosition(se.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const me=V.distanceTo(Q),we=se.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,ze=we[14]/(we[10]-1),$e=we[14]/(we[10]+1),Xe=(we[9]+1)/we[5],rt=(we[9]-1)/we[5],O=(we[8]-1)/we[0],xt=(Ne[8]+1)/Ne[0],Ge=ze*O,G=ze*xt,te=me/(-O+xt),ve=te*-O;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ve),Z.translateZ(te),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ne=ze+te,C=$e+te,S=Ge-ve,N=G+(me-ve),Y=Xe*$e/C*ne,q=rt*$e/C*ne;Z.projectionMatrix.makePerspective(S,N,Y,q,ne,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let se=Z.near,ce=Z.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),y.near=P.near=A.near=se,y.far=P.far=A.far=ce,(L!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,F=y.far),A.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;const me=Z.parent,we=y.cameras;oe(y,me);for(let Ne=0;Ne<we.length;Ne++)oe(we[Ne],me);we.length===2?k(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),ae(Z,y,me)};function ae(Z,se,ce){ce===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ss*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let pe=null;function Te(Z,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let me=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let Ne=0;Ne<ce.length;Ne++){const ze=ce[Ne];let $e=null;if(f!==null)$e=f.getViewport(ze);else{const rt=h.getViewSubImage(d,ze);$e=rt.viewport,Ne===0&&(e.setRenderTargetTextures(x,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(x))}let Xe=b[Ne];Xe===void 0&&(Xe=new Ot,Xe.layers.enable(Ne),Xe.viewport=new nt,b[Ne]=Xe),Xe.matrix.fromArray(ze.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ze.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set($e.x,$e.y,$e.width,$e.height),Ne===0&&(y.matrix.copy(Xe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(Xe)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ne=h.getDepthInformation(ce[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,i.renderState)}}for(let ce=0;ce<M.length;ce++){const me=v[ce],we=M[ce];me!==null&&we!==void 0&&we.update(me,se,c||o)}pe&&pe(Z,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const ke=new Pu;ke.setAnimationLoop(Te),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}}const ci=new dn,gg=new Fe;function _g(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,ci.copy(v),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vg(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=i[x.id];v===void 0&&(g(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const R=e.render.frame;r[x.id]!==R&&(d(x),r[x.id]=R)}function u(x){const M=h();x.__bindingPointIndex=M;const v=s.createBuffer(),T=x.__size,R=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=i[x.id],v=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,A=v.length;R<A;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,y=P.length;b<y;b++){const L=P[b];if(f(L,R,b,T)===!0){const F=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let X=0;X<D.length;X++){const V=D[X],Q=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+W,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,v,T){const R=x.value,A=M+"_"+v;if(T[A]===void 0)return typeof R=="number"||typeof R=="boolean"?T[A]=R:T[A]=R.clone(),!0;{const P=T[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return T[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(x){const M=x.uniforms;let v=0;const T=16;for(let A=0,P=M.length;A<P;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,L=b.length;y<L;y++){const F=b[y],D=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=D.length;W<X;W++){const V=D[W],Q=_(V),k=v%T,oe=k%Q.boundary,ae=k+oe;v+=oe,ae!==0&&T-ae<Q.storage&&(v+=T-ae),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Q.storage}}}const R=v%T;return R>0&&(v+=T-R),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class xg{constructor(e={}){const{canvas:t=ad(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=ei,this.toneMappingExposure=1;const v=this;let T=!1,R=0,A=0,P=null,b=-1,y=null;const L=new nt,F=new nt;let D=null;const W=new re(0);let X=0,V=t.width,Q=t.height,k=1,oe=null,ae=null;const pe=new nt(0,0,V,Q),Te=new nt(0,0,V,Q);let ke=!1;const Z=new Ga;let se=!1,ce=!1;const me=new Fe,we=new Fe,Ne=new E,ze=new nt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function rt(){return P===null?k:1}let O=n;function xt(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){const B="webgl2";if(O=xt(B,w),O===null)throw xt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,G,te,ve,ne,C,S,N,Y,q,H,ge,he,_e,Be,le,ye,De,Ue,be,ee,Ee,Oe,I;function $(){Ge=new Tm(O),Ge.init(),Ee=new cg(O,Ge),G=new vm(O,Ge,e,Ee),te=new og(O,Ge),G.reverseDepthBuffer&&d&&te.buffers.depth.setReversed(!0),ve=new wm(O),ne=new X0,C=new lg(O,Ge,te,ne,G,Ee,ve),S=new Mm(v),N=new bm(v),Y=new Dd(O),Oe=new gm(O,Y),q=new Em(O,Y,ve,Oe),H=new Rm(O,q,Y,ve),Ue=new Cm(O,G,C),le=new xm(ne),ge=new W0(v,S,N,Ge,G,Oe,le),he=new _g(v,ne),_e=new Y0,Be=new Q0(Ge),De=new mm(v,S,N,te,H,f,l),ye=new sg(v,H,G),I=new vg(O,ve,G,te),be=new _m(O,Ge,ve),ee=new Am(O,Ge,ve),ve.programs=ge.programs,v.capabilities=G,v.extensions=Ge,v.properties=ne,v.renderLists=_e,v.shadowMap=ye,v.state=te,v.info=ve}$();const U=new mg(v,O);this.xr=U,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(V,Q,!1))},this.getSize=function(w){return w.set(V,Q)},this.setSize=function(w,B,K=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,Q=B,t.width=Math.floor(w*k),t.height=Math.floor(B*k),K===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(V*k,Q*k).floor()},this.setDrawingBufferSize=function(w,B,K){V=w,Q=B,k=K,t.width=Math.floor(w*K),t.height=Math.floor(B*K),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(pe)},this.setViewport=function(w,B,K,j){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,B,K,j),te.viewport(L.copy(pe).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(Te)},this.setScissor=function(w,B,K,j){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,B,K,j),te.scissor(F.copy(Te).multiplyScalar(k).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){te.setScissorTest(ke=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,B=!0,K=!0){let j=0;if(w){let z=!1;if(P!==null){const fe=P.texture.format;z=fe===ka||fe===za||fe===Ba}if(z){const fe=P.texture.type,Se=fe===On||fe===xi||fe===zs||fe===ns||fe===Ua||fe===Fa,Re=De.getClearColor(),Pe=De.getClearAlpha(),Ve=Re.r,He=Re.g,Le=Re.b;Se?(g[0]=Ve,g[1]=He,g[2]=Le,g[3]=Pe,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ve,_[1]=He,_[2]=Le,_[3]=Pe,O.clearBufferiv(O.COLOR,0,_))}else j|=O.COLOR_BUFFER_BIT}B&&(j|=O.DEPTH_BUFFER_BIT),K&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),_e.dispose(),Be.dispose(),ne.dispose(),S.dispose(),N.dispose(),H.dispose(),Oe.dispose(),I.dispose(),ge.dispose(),U.dispose(),U.removeEventListener("sessionstart",js),U.removeEventListener("sessionend",ms),ii.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ve.autoReset,B=ye.enabled,K=ye.autoUpdate,j=ye.needsUpdate,z=ye.type;$(),ve.autoReset=w,ye.enabled=B,ye.autoUpdate=K,ye.needsUpdate=j,ye.type=z}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const B=w.target;B.removeEventListener("dispose",Ce),Ze(B)}function Ze(w){Mt(w),ne.remove(w)}function Mt(w){const B=ne.get(w).programs;B!==void 0&&(B.forEach(function(K){ge.releaseProgram(K)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,K,j,z,fe){B===null&&(B=$e);const Se=z.isMesh&&z.matrixWorld.determinant()<0,Re=rh(w,B,K,j,z);te.setMaterial(j,Se);let Pe=K.index,Ve=1;if(j.wireframe===!0){if(Pe=q.getWireframeAttribute(K),Pe===void 0)return;Ve=2}const He=K.drawRange,Le=K.attributes.position;let Je=He.start*Ve,mt=(He.start+He.count)*Ve;fe!==null&&(Je=Math.max(Je,fe.start*Ve),mt=Math.min(mt,(fe.start+fe.count)*Ve)),Pe!==null?(Je=Math.max(Je,0),mt=Math.min(mt,Pe.count)):Le!=null&&(Je=Math.max(Je,0),mt=Math.min(mt,Le.count));const gt=mt-Je;if(gt<0||gt===1/0)return;Oe.setup(z,j,Re,K,Pe);let kt,it=be;if(Pe!==null&&(kt=Y.get(Pe),it=ee,it.setIndex(kt)),z.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*rt()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(z.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),te.setLineWidth(Ie*rt()),z.isLineSegments?it.setMode(O.LINES):z.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else z.isPoints?it.setMode(O.POINTS):z.isSprite&&it.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)it.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ie=z._multiDrawStarts,Sn=z._multiDrawCounts,st=z._multiDrawCount,nn=Pe?Y.get(Pe).bytesPerElement:1,Ei=ne.get(j).currentProgram.getUniforms();for(let Ht=0;Ht<st;Ht++)Ei.setValue(O,"_gl_DrawID",Ht),it.render(Ie[Ht]/nn,Sn[Ht])}else if(z.isInstancedMesh)it.renderInstances(Je,gt,z.count);else if(K.isInstancedBufferGeometry){const Ie=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Sn=Math.min(K.instanceCount,Ie);it.renderInstances(Je,gt,Sn)}else it.render(Je,gt)};function et(w,B,K){w.transparent===!0&&w.side===Ct&&w.forceSinglePass===!1?(w.side=Dt,w.needsUpdate=!0,$s(w,B,K),w.side=vn,w.needsUpdate=!0,$s(w,B,K),w.side=Ct):$s(w,B,K)}this.compile=function(w,B,K=null){K===null&&(K=w),p=Be.get(K),p.init(B),M.push(p),K.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==K&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const j=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Re=fe[Se];et(Re,K,z),j.add(Re)}else et(fe,K,z),j.add(fe)}),M.pop(),p=null,j},this.compileAsync=function(w,B,K=null){const j=this.compile(w,B,K);return new Promise(z=>{function fe(){if(j.forEach(function(Se){ne.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){z(w);return}setTimeout(fe,10)}Ge.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Gt=null;function tn(w){Gt&&Gt(w)}function js(){ii.stop()}function ms(){ii.start()}const ii=new Pu;ii.setAnimationLoop(tn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(w){Gt=w,U.setAnimationLoop(w),w===null?ii.stop():ii.start()},U.addEventListener("sessionstart",js),U.addEventListener("sessionend",ms),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(B),B=U.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,P),p=Be.get(w,M.length),p.init(B),M.push(p),we.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(we),ce=this.localClippingEnabled,se=le.init(this.clippingPlanes,ce),m=_e.get(w,x.length),m.init(),x.push(m),U.enabled===!0&&U.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Kr(fe,B,-1/0,v.sortObjects)}Kr(w,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,ae),Xe=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Xe&&De.addToRenderList(m,w),this.info.render.frame++,se===!0&&le.beginShadows();const K=p.state.shadowsArray;ye.render(K,w,B),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const fe=B.cameras;if(z.length>0)for(let Se=0,Re=fe.length;Se<Re;Se++){const Pe=fe[Se];ol(j,z,w,Pe)}Xe&&De.render(w);for(let Se=0,Re=fe.length;Se<Re;Se++){const Pe=fe[Se];rl(m,w,Pe,Pe.viewport)}}else z.length>0&&ol(j,z,w,B),Xe&&De.render(w),rl(m,w,B);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,B),Oe.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],se===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Kr(w,B,K,j){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){j&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const Se=H.update(w),Re=w.material;Re.visible&&m.push(w,Se,Re,K,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Se=H.update(w),Re=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Re)){const Pe=Se.groups;for(let Ve=0,He=Pe.length;Ve<He;Ve++){const Le=Pe[Ve],Je=Re[Le.materialIndex];Je&&Je.visible&&m.push(w,Se,Je,K,ze.z,Le)}}else Re.visible&&m.push(w,Se,Re,K,ze.z,null)}}const fe=w.children;for(let Se=0,Re=fe.length;Se<Re;Se++)Kr(fe[Se],B,K,j)}function rl(w,B,K,j){const z=w.opaque,fe=w.transmissive,Se=w.transparent;p.setupLightsView(K),se===!0&&le.setGlobalState(v.clippingPlanes,K),j&&te.viewport(L.copy(j)),z.length>0&&Zs(z,B,K),fe.length>0&&Zs(fe,B,K),Se.length>0&&Zs(Se,B,K),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function ol(w,B,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new un(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Un:On,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const fe=p.state.transmissionRenderTarget[j.id],Se=j.viewport||L;fe.setSize(Se.z,Se.w);const Re=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(W),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&De.render(K);const Pe=v.toneMapping;v.toneMapping=ei;const Ve=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),se===!0&&le.setGlobalState(v.clippingPlanes,j),Zs(w,K,j),C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Le=0,Je=B.length;Le<Je;Le++){const mt=B[Le],gt=mt.object,kt=mt.geometry,it=mt.material,Ie=mt.group;if(it.side===Ct&&gt.layers.test(j.layers)){const Sn=it.side;it.side=Dt,it.needsUpdate=!0,al(gt,K,j,kt,it,Ie),it.side=Sn,it.needsUpdate=!0,He=!0}}He===!0&&(C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe))}v.setRenderTarget(Re),v.setClearColor(W,X),Ve!==void 0&&(j.viewport=Ve),v.toneMapping=Pe}function Zs(w,B,K){const j=B.isScene===!0?B.overrideMaterial:null;for(let z=0,fe=w.length;z<fe;z++){const Se=w[z],Re=Se.object,Pe=Se.geometry,Ve=j===null?Se.material:j,He=Se.group;Re.layers.test(K.layers)&&al(Re,B,K,Pe,Ve,He)}}function al(w,B,K,j,z,fe){w.onBeforeRender(v,B,K,j,z,fe),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,B,K,j,w,fe),z.transparent===!0&&z.side===Ct&&z.forceSinglePass===!1?(z.side=Dt,z.needsUpdate=!0,v.renderBufferDirect(K,B,j,z,w,fe),z.side=vn,z.needsUpdate=!0,v.renderBufferDirect(K,B,j,z,w,fe),z.side=Ct):v.renderBufferDirect(K,B,j,z,w,fe),w.onAfterRender(v,B,K,j,z,fe)}function $s(w,B,K){B.isScene!==!0&&(B=$e);const j=ne.get(w),z=p.state.lights,fe=p.state.shadowsArray,Se=z.state.version,Re=ge.getParameters(w,z.state,fe,B,K),Pe=ge.getProgramCacheKey(Re);let Ve=j.programs;j.environment=w.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(w.isMeshStandardMaterial?N:S).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",Ce),Ve=new Map,j.programs=Ve);let He=Ve.get(Pe);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===Se)return cl(w,Re),He}else Re.uniforms=ge.getUniforms(w),w.onBeforeCompile(Re,v),He=ge.acquireProgram(Re,Pe),Ve.set(Pe,He),j.uniforms=Re.uniforms;const Le=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=le.uniform),cl(w,Re),j.needsLights=ah(w),j.lightsStateVersion=Se,j.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function ll(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Fr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function cl(w,B){const K=ne.get(w);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function rh(w,B,K,j,z){B.isScene!==!0&&(B=$e),C.resetTextureUnits();const fe=B.fog,Se=j.isMeshStandardMaterial?B.environment:null,Re=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nt,Pe=(j.isMeshStandardMaterial?N:S).get(j.envMap||Se),Ve=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!K.morphAttributes.position,Je=!!K.morphAttributes.normal,mt=!!K.morphAttributes.color;let gt=ei;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=v.toneMapping);const kt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,it=kt!==void 0?kt.length:0,Ie=ne.get(j),Sn=p.state.lights;if(se===!0&&(ce===!0||w!==y)){const Yt=w===y&&j.id===b;le.setState(j,w,Yt)}let st=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Sn.state.version||Ie.outputColorSpace!==Re||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==Pe||j.fog===!0&&Ie.fog!==fe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Ve||Ie.vertexTangents!==He||Ie.morphTargets!==Le||Ie.morphNormals!==Je||Ie.morphColors!==mt||Ie.toneMapping!==gt||Ie.morphTargetsCount!==it)&&(st=!0):(st=!0,Ie.__version=j.version);let nn=Ie.currentProgram;st===!0&&(nn=$s(j,B,z));let Ei=!1,Ht=!1,gs=!1;const _t=nn.getUniforms(),fn=Ie.uniforms;if(te.useProgram(nn.program)&&(Ei=!0,Ht=!0,gs=!0),j.id!==b&&(b=j.id,Ht=!0),Ei||y!==w){te.buffers.depth.getReversed()?(me.copy(w.projectionMatrix),cd(me),ud(me),_t.setValue(O,"projectionMatrix",me)):_t.setValue(O,"projectionMatrix",w.projectionMatrix),_t.setValue(O,"viewMatrix",w.matrixWorldInverse);const Vn=_t.map.cameraPosition;Vn!==void 0&&Vn.setValue(O,Ne.setFromMatrixPosition(w.matrixWorld)),G.logarithmicDepthBuffer&&_t.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ht=!0,gs=!0)}if(z.isSkinnedMesh){_t.setOptional(O,z,"bindMatrix"),_t.setOptional(O,z,"bindMatrixInverse");const Yt=z.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),_t.setValue(O,"boneTexture",Yt.boneTexture,C))}z.isBatchedMesh&&(_t.setOptional(O,z,"batchingTexture"),_t.setValue(O,"batchingTexture",z._matricesTexture,C),_t.setOptional(O,z,"batchingIdTexture"),_t.setValue(O,"batchingIdTexture",z._indirectTexture,C),_t.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(O,"batchingColorTexture",z._colorsTexture,C));const _s=K.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&Ue.update(z,K,nn),(Ht||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,_t.setValue(O,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(fn.envMap.value=Pe,fn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(fn.envMapIntensity.value=B.environmentIntensity),Ht&&(_t.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&oh(fn,gs),fe&&j.fog===!0&&he.refreshFogUniforms(fn,fe),he.refreshMaterialUniforms(fn,j,k,Q,p.state.transmissionRenderTarget[w.id]),Fr.upload(O,ll(Ie),fn,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fr.upload(O,ll(Ie),fn,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(O,"center",z.center),_t.setValue(O,"modelViewMatrix",z.modelViewMatrix),_t.setValue(O,"normalMatrix",z.normalMatrix),_t.setValue(O,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Yt=j.uniformsGroups;for(let Vn=0,Gn=Yt.length;Vn<Gn;Vn++){const ul=Yt[Vn];I.update(ul,nn),I.bind(ul,nn)}}return nn}function oh(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function ah(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,K){ne.get(w.texture).__webglTexture=B,ne.get(w.depthTexture).__webglTexture=K;const j=ne.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const K=ne.get(w);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,K=0){P=w,R=B,A=K;let j=!0,z=null,fe=!1,Se=!1;if(w){const Pe=ne.get(w);if(Pe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(Pe.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Pe.__hasExternalTextures)C.rebindTextures(w,ne.get(w.texture).__webglTexture,ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&ne.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const He=ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[B])?z=He[B][K]:z=He[B],fe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?z=ne.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[K]:z=He,L.copy(w.viewport),F.copy(w.scissor),D=w.scissorTest}else L.copy(pe).multiplyScalar(k).floor(),F.copy(Te).multiplyScalar(k).floor(),D=ke;if(te.bindFramebuffer(O.FRAMEBUFFER,z)&&j&&te.drawBuffers(w,z),te.viewport(L),te.scissor(F),te.setScissorTest(D),fe){const Pe=ne.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,K)}else if(Se){const Pe=ne.get(w.texture),Ve=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,Ve)}b=-1},this.readRenderTargetPixels=function(w,B,K,j,z,fe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){te.bindFramebuffer(O.FRAMEBUFFER,Re);try{const Pe=w.texture,Ve=Pe.format,He=Pe.type;if(!G.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-j&&K>=0&&K<=w.height-z&&O.readPixels(B,K,j,z,Ee.convert(Ve),Ee.convert(He),fe)}finally{const Pe=P!==null?ne.get(P).__webglFramebuffer:null;te.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,B,K,j,z,fe,Se){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){const Pe=w.texture,Ve=Pe.format,He=Pe.type;if(!G.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-j&&K>=0&&K<=w.height-z){te.bindFramebuffer(O.FRAMEBUFFER,Re);const Le=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(B,K,j,z,Ee.convert(Ve),Ee.convert(He),0);const Je=P!==null?ne.get(P).__webglFramebuffer:null;te.bindFramebuffer(O.FRAMEBUFFER,Je);const mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ld(O,mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.deleteBuffer(Le),O.deleteSync(mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,K=0){w.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-K),z=Math.floor(w.image.width*j),fe=Math.floor(w.image.height*j),Se=B!==null?B.x:0,Re=B!==null?B.y:0;C.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Se,Re,z,fe),te.unbindTexture()},this.copyTextureToTexture=function(w,B,K=null,j=null,z=0){w.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,K=null);let fe,Se,Re,Pe,Ve,He,Le,Je,mt;const gt=w.isCompressedTexture?w.mipmaps[z]:w.image;K!==null?(fe=K.max.x-K.min.x,Se=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Pe=K.min.x,Ve=K.min.y,He=K.isBox3?K.min.z:0):(fe=gt.width,Se=gt.height,Re=gt.depth||1,Pe=0,Ve=0,He=0),j!==null?(Le=j.x,Je=j.y,mt=j.z):(Le=0,Je=0,mt=0);const kt=Ee.convert(B.format),it=Ee.convert(B.type);let Ie;B.isData3DTexture?(C.setTexture3D(B,0),Ie=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),Ie=O.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),Ie=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Sn=O.getParameter(O.UNPACK_ROW_LENGTH),st=O.getParameter(O.UNPACK_IMAGE_HEIGHT),nn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ei=O.getParameter(O.UNPACK_SKIP_ROWS),Ht=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);const gs=w.isDataArrayTexture||w.isData3DTexture,_t=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const fn=ne.get(w),_s=ne.get(B),Yt=ne.get(fn.__renderTarget),Vn=ne.get(_s.__renderTarget);te.bindFramebuffer(O.READ_FRAMEBUFFER,Yt.__webglFramebuffer),te.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Gn=0;Gn<Re;Gn++)gs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(w).__webglTexture,z,He+Gn),w.isDepthTexture?(_t&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(B).__webglTexture,z,mt+Gn),O.blitFramebuffer(Pe,Ve,fe,Se,Le,Je,fe,Se,O.DEPTH_BUFFER_BIT,O.NEAREST)):_t?O.copyTexSubImage3D(Ie,z,Le,Je,mt+Gn,Pe,Ve,fe,Se):O.copyTexSubImage2D(Ie,z,Le,Je,mt+Gn,Pe,Ve,fe,Se);te.bindFramebuffer(O.READ_FRAMEBUFFER,null),te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _t?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ie,z,Le,Je,mt,fe,Se,Re,kt,it,gt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,z,Le,Je,mt,fe,Se,Re,kt,gt.data):O.texSubImage3D(Ie,z,Le,Je,mt,fe,Se,Re,kt,it,gt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,Le,Je,fe,Se,kt,it,gt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,Le,Je,gt.width,gt.height,kt,gt.data):O.texSubImage2D(O.TEXTURE_2D,z,Le,Je,fe,Se,kt,it,gt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),O.pixelStorei(O.UNPACK_SKIP_PIXELS,nn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ei),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ht),z===0&&B.generateMipmaps&&O.generateMipmap(Ie),te.unbindTexture()},this.copyTextureToTexture3D=function(w,B,K=null,j=null,z=0){return w.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,K,j,z)},this.initRenderTarget=function(w){ne.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),te.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,te.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Wa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new Wa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mg extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ta,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new E;class Ws{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=an(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=an(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=an(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=an(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ou extends hn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ki;const Ss=new E,Vi=new E,Gi=new E,Hi=new Me,bs=new Me,Bu=new Fe,vr=new E,Ts=new E,xr=new E,dc=new Me,To=new Me,fc=new Me;class yg extends ft{constructor(e=new Ou){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fu(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Ws(n,3,0,!1)),ki.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=ki,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),Bu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Gi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Mr(vr.set(-.5,-.5,0),Gi,o,Vi,i,r),Mr(Ts.set(.5,-.5,0),Gi,o,Vi,i,r),Mr(xr.set(.5,.5,0),Gi,o,Vi,i,r),dc.set(0,0),To.set(1,0),fc.set(1,1);let a=e.ray.intersectTriangle(vr,Ts,xr,!1,Ss);if(a===null&&(Mr(Ts.set(-.5,.5,0),Gi,o,Vi,i,r),To.set(0,1),a=e.ray.intersectTriangle(vr,xr,Ts,!1,Ss),a===null))return;const l=e.ray.origin.distanceTo(Ss);l<e.near||l>e.far||t.push({distance:l,point:Ss.clone(),uv:$t.getInterpolation(Ss,vr,Ts,xr,dc,To,fc,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Mr(s,e,t,n,i,r){Hi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(bs.x=r*Hi.x-i*Hi.y,bs.y=i*Hi.x+r*Hi.y):bs.copy(Hi),s.copy(e),s.x+=bs.x,s.y+=bs.y,s.applyMatrix4(Bu)}const pc=new E,mc=new nt,gc=new nt,Sg=new E,_c=new Fe,yr=new E,Eo=new xn,vc=new Fe,Ao=new Xr;class bg extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pl,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yr),this.boundingBox.expandByPoint(yr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yr),this.boundingSphere.expandByPoint(yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(i),e.ray.intersectsSphere(Eo)!==!1&&(vc.copy(i).invert(),Ao.copy(e.ray).applyMatrix4(vc),!(this.boundingBox!==null&&Ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ih?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mc.fromBufferAttribute(i.attributes.skinIndex,e),gc.fromBufferAttribute(i.attributes.skinWeight,e),pc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=gc.getComponent(r);if(o!==0){const a=mc.getComponent(r);_c.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Sg.copy(pc).applyMatrix4(_c),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zu extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ku extends bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Bt,u=Bt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=new Fe,Tg=new Fe;class Xa{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Tg;xc.multiplyMatrices(a,t[r]),xc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ku(t,e,e,Jt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zu),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Aa extends Qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new Fe,Mc=new Fe,Sr=[],yc=new zn,Eg=new Fe,Es=new ut,As=new xn;class tt extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Eg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),yc.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(yc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),As.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wi),Mc.multiplyMatrices(n,Wi),Es.matrixWorld=Mc,Es.raycast(e,Sr);for(let o=0,a=Sr.length;o<a;o++){const l=Sr[o];l.instanceId=r,l.object=this,t.push(l)}Sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ku(new Float32Array(i*this.count),i,this.count,Oa,ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qa extends hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kr=new E,Vr=new E,Sc=new Fe,ws=new Xr,br=new xn,wo=new E,bc=new E;class Ya extends ft{constructor(e=new pt,t=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)kr.fromBufferAttribute(t,i-1),Vr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kr.distanceTo(Vr);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;Sc.copy(i).invert(),ws.copy(e.ray).applyMatrix4(Sc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),M=Tr(this,e,ws,l,p,x);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Tr(this,e,ws,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Tr(this,e,ws,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Tr(this,e,ws,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(kr.fromBufferAttribute(o,i),Vr.fromBufferAttribute(o,r),t.distanceSqToSegment(kr,Vr,wo,bc)>n)return;wo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(wo);if(!(l<e.near||l>e.far))return{distance:l,point:bc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Tc=new E,Ec=new E;class Vu extends Ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tc.fromBufferAttribute(t,i),Ec.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tc.distanceTo(Ec);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ag extends Ya{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ti extends hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ac=new Fe,wa=new Xr,Er=new xn,Ar=new E;class Mi extends ft{constructor(e=new pt,t=new ti){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;Ac.copy(i).invert(),wa.copy(e.ray).applyMatrix4(Ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ar.fromBufferAttribute(h,m),wc(Ar,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ar.fromBufferAttribute(h,g),wc(Ar,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wc(s,e,t,n,i,r,o){const a=wa.distanceSqToPoint(s);if(a<t){const l=new E;wa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _n extends bt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Me:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],r=[],o=[],a=new E,l=new Fe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(wt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(wt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gu extends kn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Me){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wg extends Gu{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ka(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const wr=new E,Co=new Ka,Ro=new Ka,Po=new Ka;class ja extends kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(wr.subVectors(i[0],i[1]).add(i[0]),c=wr);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(wr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Co.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Ro.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Po.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ro.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Po.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Co.calc(l),Ro.calc(l),Po.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Cg(s,e){const t=1-s;return t*t*e}function Rg(s,e){return 2*(1-s)*s*e}function Pg(s,e){return s*s*e}function Fs(s,e,t,n){return Cg(s,e)+Rg(s,t)+Pg(s,n)}function Lg(s,e){const t=1-s;return t*t*t*e}function Ig(s,e){const t=1-s;return 3*t*t*s*e}function Dg(s,e){return 3*(1-s)*s*s*e}function Ng(s,e){return s*s*s*e}function Os(s,e,t,n,i){return Lg(s,e)+Ig(s,t)+Dg(s,n)+Ng(s,i)}class Ug extends kn{constructor(e=new Me,t=new Me,n=new Me,i=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Me){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(e,i.x,r.x,o.x,a.x),Os(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fg extends kn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(e,i.x,r.x,o.x,a.x),Os(e,i.y,r.y,o.y,a.y),Os(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Og extends kn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bg extends kn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zg extends kn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Fs(e,i.x,r.x,o.x),Fs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hu extends kn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Fs(e,i.x,r.x,o.x),Fs(e,i.y,r.y,o.y),Fs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kg extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Cc(a,l.x,c.x,u.x,h.x),Cc(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Me().fromArray(i))}return this}}var Vg=Object.freeze({__proto__:null,ArcCurve:wg,CatmullRomCurve3:ja,CubicBezierCurve:Ug,CubicBezierCurve3:Fg,EllipseCurve:Gu,LineCurve:Og,LineCurve3:Bg,QuadraticBezierCurve:zg,QuadraticBezierCurve3:Hu,SplineCurve:kg});class Bn extends pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function x(){const v=new E,T=new E;let R=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const b=[],y=P/r,L=y*(t-e)+e;for(let F=0;F<=i;F++){const D=F/i,W=D*l+a,X=Math.sin(W),V=Math.cos(W);T.x=L*X,T.y=-y*n+m,T.z=L*V,h.push(T.x,T.y,T.z),v.set(X,A,V).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-y),b.push(g++)}_.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const y=_[b][P],L=_[b+1][P],F=_[b+1][P+1],D=_[b][P+1];(e>0||b!==0)&&(u.push(y,L,D),R+=3),(t>0||b!==r-1)&&(u.push(L,F,D),R+=3)}c.addGroup(p,R,0),p+=R}function M(v){const T=g,R=new Me,A=new E;let P=0;const b=v===!0?e:t,y=v===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const L=g;for(let F=0;F<=i;F++){const W=F/i*l+a,X=Math.cos(W),V=Math.sin(W);A.x=b*V,A.y=m*y,A.z=b*X,h.push(A.x,A.y,A.z),d.push(0,y,0),R.x=X*.5+.5,R.y=V*.5*y+.5,f.push(R.x,R.y),g++}for(let F=0;F<i;F++){const D=T+F,W=L+F;v===!0?u.push(W,W+1,D):u.push(W+1,W,D),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _i extends Bn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Za extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new E,v=new E,T=new E;for(let R=0;R<t.length;R+=3)f(t[R+0],M),f(t[R+1],v),f(t[R+2],T),l(M,v,T,x)}function l(x,M,v,T){const R=T+1,A=[];for(let P=0;P<=R;P++){A[P]=[];const b=x.clone().lerp(v,P/R),y=M.clone().lerp(v,P/R),L=R-P;for(let F=0;F<=L;F++)F===0&&P===R?A[P][F]=b:A[P][F]=b.clone().lerp(y,F/L)}for(let P=0;P<R;P++)for(let b=0;b<2*(R-P)-1;b++){const y=Math.floor(b/2);b%2===0?(d(A[P][y+1]),d(A[P+1][y]),d(A[P][y])):(d(A[P][y+1]),d(A[P+1][y+1]),d(A[P+1][y]))}}function c(x){const M=new E;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){const x=new E;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(v,1-T)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const M=o[x+0],v=o[x+2],T=o[x+4],R=Math.max(M,v,T),A=Math.min(M,v,T);R>.9&&A<.1&&(M<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const x=new E,M=new E,v=new E,T=new E,R=new Me,A=new Me,P=new Me;for(let b=0,y=0;b<r.length;b+=9,y+=6){x.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),R.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),T.copy(x).add(M).add(v).divideScalar(3);const L=m(T);_(R,y+0,x,L),_(A,y+2,M,L),_(P,y+4,v,L)}}function _(x,M,v,T){T<0&&x.x===1&&(o[M]=x.x-1),v.x===0&&v.z===0&&(o[M]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.vertices,e.indices,e.radius,e.details)}}class $a extends Za{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $a(e.radius,e.detail)}}class Ja extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new E,g=new Me;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,v=x+n+1,T=x+n+2,R=x+1;a.push(M,v,R),a.push(v,T,R)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class en extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const R=T/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-M),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const M=u[p][x+1],v=u[p][x],T=u[p+1][x],R=u[p+1][x+1];(p!==0||o>0)&&f.push(M,v,R),(p!==n-1||l<Math.PI)&&f.push(v,T,R)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qa extends pt{constructor(e=new Hu(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new Me;let u=new E;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),x(),p()}function m(M){u=e.getPointAt(M/t,u);const v=o.normals[M],T=o.binormals[M];for(let R=0;R<=i;R++){const A=R/i*Math.PI*2,P=Math.sin(A),b=-Math.cos(A);l.x=b*v.x+P*T.x,l.y=b*v.y+P*T.y,l.z=b*v.z+P*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=i;v++){const T=(i+1)*(M-1)+(v-1),R=(i+1)*M+(v-1),A=(i+1)*M+v,P=(i+1)*(M-1)+v;g.push(T,R,P),g.push(R,A,P)}}function x(){for(let M=0;M<=t;M++)for(let v=0;v<=i;v++)c.x=M/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Qa(new Vg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Gg extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ct extends hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends ct{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Cr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Hg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Wg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Wu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Xs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xg extends Xs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case gl:r=e,a=2*t-n;break;case _l:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gl:o=e,l=2*n-t;break;case _l:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+x*o[c+T]+M*o[l+T]+v*o[h+T];return r}}class qg extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Yg extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Hg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Vs;class ds extends yn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ks;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Xu extends yn{}Xu.prototype.ValueTypeName="color";class os extends yn{}os.prototype.ValueTypeName="number";class Kg extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)vt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class as extends yn{InterpolantFactoryMethodLinear(e){return new Kg(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends yn{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ks;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends yn{}ls.prototype.ValueTypeName="vector";class jg{constructor(e="",t=-1,n=[],i=Dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($g(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Wg(l);l=Rc(l,1,u),c=Rc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new os(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Wu(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new os(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(ls,f+".position",d,"pos",i),n(as,f+".quaternion",d,"rot",i),n(ls,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return Xu;case"quaternion":return as;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $g(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zg(s.type);if(s.times===void 0){const t=[],n=[];Wu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Jg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Qg=new Jg;class bi{constructor(e){this.manager=e!==void 0?e:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class e_ extends Error{constructor(e,t){super(e),this.response=t}}class Gr extends bi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:M,value:v})=>{if(M)p.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,A=u.length;R<A;R++){const P=u[R];P.onProgress&&P.onProgress(T)}p.enqueue(v),x()}},M=>{p.error(M)})}}});return new Response(m)}else throw new e_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Qn.add(e,c);const u=Cn[e];delete Cn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class t_ extends bi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Gs("img");function l(){u(),Qn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class n_ extends bi{constructor(e){super(e)}load(e,t,n,i){const r=new bt,o=new t_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qs extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class i_ extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lo=new Fe,Pc=new E,Lc=new E;class el{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s_ extends el{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class r_ extends qs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new s_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ic=new Fe,Cs=new E,Io=new E;class o_ extends el{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cs),Io.copy(n.position),Io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Io),n.updateMatrixWorld(),i.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic)}}class Or extends qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new o_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class a_ extends el{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qu extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new a_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class l_ extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class c_ extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Qn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(e,l),r.manager.itemStart(e)}}class Yu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Dc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Dc(){return performance.now()}const tl="\\[\\]\\.:\\/",u_=new RegExp("["+tl+"]","g"),nl="[^"+tl+"]",h_="[^"+tl.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",nl),f_=/(WCOD+)?/.source.replace("WCOD",h_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nl),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nl),g_=new RegExp("^"+d_+f_+p_+m_+"$"),__=["material","materials","bones","map"];class v_{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){const t=g_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=v_;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);const Ku={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ps{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const x_=new qr(-1,1,1,-1,0,1);class M_ extends pt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const y_=new M_;class il{constructor(e){this._mesh=new ut(y_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,x_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class S_ extends ps{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hs.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new il(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nc extends ps{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class b_ extends ps{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class T_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S_(Ku),this.copyPass.material.blending=Nn,this.clock=new Yu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(o instanceof Nc?n=!0:o instanceof b_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class E_ extends ps{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const A_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class cs extends ps{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,o,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new un(r,o,{type:Un});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new un(r,o,{type:Un});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=A_;this.highPassUniforms=Hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Ku;this.copyUniforms=Hs.clone(u.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Vt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new il(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}cs.BlurDirectionX=new Me(1,0);cs.BlurDirectionY=new Me(0,1);const w_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class C_ extends ps{constructor(){super();const e=w_;this.uniforms=Hs.clone(e.uniforms),this.material=new Gg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new il(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===su?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ru&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function ju(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new _n(s);return n.needsUpdate=!0,n}function R_(s=8500,e=14e3){const t=new Rt;t.name="Procedural_Starfield";const n=new Float32Array(s*3),i=new Float32Array(s*3),r=[new re(10205439),new re(13293823),new re(16316415),new re(16774378),new re(16765601),new re(16754795)];for(let p=0;p<s;p++){const x=Math.random(),M=Math.random(),v=x*2*Math.PI;let T=Math.acos(2*M-1);Math.random()<.35&&(T=Math.PI*.5+(Math.random()-.5)*.32);const R=e*(.55+.45*Math.random()),A=Math.sin(T);n[p*3]=R*A*Math.cos(v),n[p*3+1]=R*Math.cos(T),n[p*3+2]=R*A*Math.sin(v);const P=r[Math.floor(Math.random()*r.length)],b=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=P.r*b,i[p*3+1]=P.g*b,i[p*3+2]=P.b*b}const o=new pt;o.setAttribute("position",new Qe(n,3)),o.setAttribute("color",new Qe(i,3));const a=ju(),l=e/14e3,c=new ti({size:28*l,map:a,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Vt,sizeAttenuation:!0}),u=new Mi(o,c);t.add(u);const h=500,d=new Float32Array(h*3),f=new Float32Array(h*3);for(let p=0;p<h;p++){const x=Math.random()*2*Math.PI,M=Math.acos(2*Math.random()-1),v=e*.72;d[p*3]=v*Math.sin(M)*Math.cos(x),d[p*3+1]=v*Math.cos(M),d[p*3+2]=v*Math.sin(M)*Math.sin(x);const T=r[p%r.length];f[p*3]=T.r,f[p*3+1]=T.g,f[p*3+2]=T.b}const g=new pt;g.setAttribute("position",new Qe(d,3)),g.setAttribute("color",new Qe(f,3));const _=new ti({size:56*l,map:a,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Vt});t.add(new Mi(g,_)),t.renderOrder=-80,u.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const x=Ae.clamp(p,0,1);c.opacity=.92*x,_.opacity=.95*x,t.visible=x>.015},t}class P_{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let r=0;r<t;r++)n[r*3]=(Math.random()-.5)*28,n[r*3+1]=(Math.random()-.5)*18,n[r*3+2]=-Math.random()*55;this.geometry=new pt,this.geometry.setAttribute("position",new Qe(n,3)),this.material=new ti({color:new re(16758892),size:.42,map:ju(),transparent:!0,opacity:0,depthWrite:!1,blending:Vt}),this.points=new Mi(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let r=0;r<this.streakCount;r++){const o=Math.random()*Math.PI*2,a=3.5+Math.random()*22,l=Math.cos(o)*a,c=Math.sin(o)*a*.72,u=-8-Math.random()*95,h=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:u,len:h}),i[r*6]=l,i[r*6+1]=c,i[r*6+2]=u,i[r*6+3]=l,i[r*6+4]=c,i[r*6+5]=u-h}this.streakGeometry=new pt,this.streakGeometry.setAttribute("position",new Qe(i,3)),this.streakMaterial=new qa({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:Vt}),this.streakLines=new Vu(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=Ae.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=Ae.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const r=this.geometry.attributes.position,o=r.array,a=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=o[l*3+2]+a;c>2&&(c=-52-Math.random()*12,o[l*3]=(Math.random()-.5)*28,o[l*3+1]=(Math.random()-.5)*18),o[l*3+2]=c}r.needsUpdate=!0}if(this.pulseFactor=Ae.lerp(this.pulseFactor,Ae.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const r=this.streakGeometry.attributes.position,o=r.array,a=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const u=this.streakSeeds[c];u.z+=a,u.z>4&&(u.z=-95-Math.random()*25);const h=u.z-u.len*l;o[c*6]=u.x,o[c*6+1]=u.y,o[c*6+2]=u.z,o[c*6+3]=u.x,o[c*6+4]=u.y,o[c*6+5]=h}r.needsUpdate=!0}}}class L_{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new E,this.angularVelocity=new E,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.altitudeContext={surfaceAltitude:9999,planetRadius:220,atmoTopAlt:320,groundFloorAlt:.9,planetCenter:new E,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new E},this._tmpToShip=new E,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=Ae.clamp(-t*.011,-.52,.52);this.targetBankAngle=Ae.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=Ae.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,planetCenter:r,hasPlanet:o,inGravityWell:a,planetDeltaPos:l}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||220,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*1.45,this.altitudeContext.groundFloorAlt=i??.9,r?(this.altitudeContext.planetCenter.copy(r),this.altitudeContext.hasPlanet=o!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!a,l?this.altitudeContext.planetDeltaPos.copy(l):this.altitudeContext.planetDeltaPos.set(0,0,0)}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:r=!1,onComplete:o=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const a=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new E(0,1,0)}));this.autopilot={startPos:a,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:r,onComplete:o}}setPose(e,t,n=new E(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(100,this.altitudeContext.atmoTopAlt),i=Ae.clamp(t/n,0,1),r=Ae.smoothstep(t,n,n+1350),o=Ae.lerp(8,38,Math.pow(i,.78)),a=Ae.lerp(o,260,Math.pow(r,1.1)),l=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&l){const g=Ae.lerp(Ae.lerp(.22,.56,i),1,r);this.pulseDriveCharge=Ae.lerp(this.pulseDriveCharge,g,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=Ae.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const c=this.keys.boost&&l?Math.min(1,this.pulseDriveCharge/Math.max(.2,Ae.lerp(.22,1,r))):this.pulseDriveCharge,u=Ae.lerp(2.2,3.05,i),d=Ae.lerp(u,5.8,r),f=Ae.lerp(1,d,Math.min(1,c));return a*this.speedMultiplier*f}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell&&this.camera.position.add(this.altitudeContext.planetDeltaPos),this.autopilot){this.autopilot.elapsed+=t;const c=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),u=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2,{targetPos:h,lookAtPos:d,upVec:f,useCurveNow:g}=this.autopilot.poseProvider(u,c,this.autopilot.startPos),_=this.camera.position.clone();this.autopilot.useDirectCurve||g?this.camera.position.copy(h):this.camera.position.lerpVectors(this.autopilot.startPos,h,u);const m=this.camera.clone();m.position.copy(this.camera.position),m.up.copy(f||new E(0,1,0)),m.lookAt(d),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,m.quaternion,this.autopilot.useDirectCurve?Math.min(1,u*2.2):Math.min(1,u*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(_).divideScalar(t);const p=this.autopilot.useDirectCurve?Math.sin(c*Math.PI)*9:Math.sin(c*Math.PI)*18,x=this.baseFov+p;if(this.camera.fov=Ae.lerp(this.camera.fov,x,.25),this.camera.updateProjectionMatrix(),c>=1){const M=this.autopilot.onComplete;this.autopilot=null,this.velocity.multiplyScalar(.15),M&&M()}return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const c=new vt().setFromAxisAngle(new E(1,0,0),this.angularVelocity.x),u=new vt().setFromAxisAngle(new E(0,1,0),this.angularVelocity.y),h=new vt().setFromAxisAngle(new E(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(u),this.shipQuaternion.multiply(c),this.shipQuaternion.multiply(h),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=Ae.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const r=new vt().setFromAxisAngle(new E(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(r);const o=new E((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),a=this._computeAdaptiveSpeedLimits(t);if(o.lengthSq()>0){o.normalize(),o.applyQuaternion(this.shipQuaternion);const c=o.multiplyScalar(a),u=Ae.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(c,1-Math.exp(-u*t))}else this.velocity.multiplyScalar(Math.exp(-3.4*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0);if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const c=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,u=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),h=u.length();if(h>1e-4&&h<c){const d=u.divideScalar(h);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(d,c);const f=this.velocity.dot(d);f<0&&this.velocity.addScaledVector(d,-f)}}const l=this.baseFov+this.pulseDriveCharge*18.5;Math.abs(this.camera.fov-l)>.05&&(this.camera.fov=Ae.lerp(this.camera.fov,l,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function yi(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new pt;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Uc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=Uc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Uc(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Qe(o,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Fc(s,e){if(e===Nh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ba||e===_u){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ba)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class I_ extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new O_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new $_(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Bs.extractUrlBase(e);o=Bs.resolveURL(c,this.path)}else o=Bs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zu){try{o[je.KHR_BINARY_GLTF]=new J_(e)}catch(h){i&&i(h);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new hv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new U_;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new Q_(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new ev;break;case je.KHR_MESH_QUANTIZATION:o[h]=new tv;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function D_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class N_{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Nt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qu(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Or(u),c.distance=h;break;case"spot":c=new r_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class U_{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){const i=[];e.color=new re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}}class F_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class O_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}}class B_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class z_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class k_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class V_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class G_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(a[0],a[1],a[2],Nt),Promise.all(r)}}class H_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class W_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(r)}}class X_{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class q_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Y_{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class K_{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class j_{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Z_{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class $_{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==jt.TRIANGLES&&c.mode!==jt.TRIANGLE_STRIP&&c.mode!==jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new Fe,m=new E,p=new vt,x=new E(1,1,1),M=new tt(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const T=l[v];M.instanceColor=new Aa(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ft.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Zu="glTF",Rs=12,Oc={JSON:1313821514,BIN:5130562};class J_{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rs,r=new DataView(e,Rs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Oc.JSON){const c=new Uint8Array(e,Rs+o,a);this.content=n.decode(c)}else if(l===Oc.BIN){const c=Rs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Q_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Ca[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ca[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Zi[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Nt,d)})})}}class ev{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class tv{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class $u extends Xs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,M=p-d+h;for(let v=0;v!==a;v++){const T=o[_+v+a],R=o[_+v+l]*u,A=o[g+v+a],P=o[g+v]*u;r[v]=x*T+M*R+m*A+p*P}return r}}const nv=new vt;class iv extends $u{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return nv.fromArray(r).normalize().toArray(r),r}}const jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bc={9728:Bt,9729:qt,9984:au,9985:Pr,9986:Ls,9987:In},zc={33071:Jn,33648:Br,10497:ts},Do={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ca={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sv={CUBICSPLINE:void 0,LINEAR:Vs,STEP:ks},No={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vn})),s.DefaultMaterial}function ui(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ov(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function av(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lv(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uo(t.attributes):e=s.indices+":"+Uo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Uo(s.targets[n]);return e}function Uo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ra(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const uv=new Fe;class hv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new D_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new n_(this.options.manager):this.textureLoader=new c_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ui(r,a,i),Pn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Bs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Do[i.type],a=Zi[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Qe(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Do[i.type],c=Zi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(x);M||(_=new c(a,p*f,i.count*f/u),M=new Fu(_,f/u),t.cache.add(x,M)),m=new Ws(M,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Qe(_,l,g);if(i.sparse!==void 0){const p=Do.SCALAR,x=Zi[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new x(o[1],M,i.sparse.count*p),R=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Qe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=T.length;A<P;A++){const b=T[A];if(m.setX(b,R[A*l]),l>=2&&m.setY(b,R[A*l+1]),l>=3&&m.setZ(b,R[A*l+2]),l>=4&&m.setW(b,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Bc[d.magFilter]||qt,u.minFilter=Bc[d.minFilter]||In,u.wrapS=zc[d.wrapS]||ts,u.wrapT=zc[d.wrapT]||ts,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==qt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new bt(_);m.needsUpdate=!0,d(m)}),t.load(Bs.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Pn(h,o),h.userData.mimeType=o.mimeType||cv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ti,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new qa,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ct}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Nt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,dt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);const u=r.alphaMode||No.OPAQUE;if(u===No.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===No.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qt){const h=r.emissiveFactor;a.emissive=new re().setRGB(h[0],h[1],h[2],Nt)}return r.emissiveTexture!==void 0&&o!==Qt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Pn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ui(i,h,r),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return kc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=lv(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=kc(new pt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?rv(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const x=c[f];if(m.mode===jt.TRIANGLES||m.mode===jt.TRIANGLE_STRIP||m.mode===jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new bg(_,x):new ut(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===jt.TRIANGLE_STRIP?p.geometry=Fc(p.geometry,_u):m.mode===jt.TRIANGLE_FAN&&(p.geometry=Fc(p.geometry,ba));else if(m.mode===jt.LINES)p=new Vu(_,x);else if(m.mode===jt.LINE_STRIP)p=new Ya(_,x);else if(m.mode===jt.LINE_LOOP)p=new Ag(_,x);else if(m.mode===jt.POINTS)p=new Mi(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&av(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pn(p,r),m.extensions&&ui(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ui(i,h[0],r),h[0];const d=new Rt;r.extensions&&ui(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Ae.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xa(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,M=d.length;x<M;x++){const v=d[x],T=f[x],R=g[x],A=_[x],P=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=n._createAnimationTracks(v,T,R,A,P);if(b)for(let y=0;y<b.length;y++)p.push(b[y])}return new jg(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,uv)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new zu:c.length>1?u=new Rt:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Pn(u,r),r.extensions&&ui(n,u,r),r.matrix!==void 0){const h=new Fe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Rt;n.name&&(r.name=i.createUniqueName(n.name)),Pn(r,n),n.extensions&&ui(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof bt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];jn[r.path]===jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(jn[r.path]){case jn.weights:c=os;break;case jn.rotation:c=as;break;case jn.position:case jn.scale:c=ls;break;default:switch(n.itemSize){case 1:c=os;break;case 2:case 3:default:c=ls;break}break}const u=i.interpolation!==void 0?sv[i.interpolation]:Vs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+jn[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ra(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof as?iv:$u;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dv(s,e,t){const n=e.attributes,i=new zn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const u=Ra(Zi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new E,l=new E;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ra(Zi[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new xn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function kc(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Ca[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Pn(s,e),dv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ov(s,e.targets,t):s})}const Fo=new WeakMap;class fv extends bi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Gr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,dt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Nt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Fo.has(e)){const l=Fo.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Fo.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new pt;e.index&&t.setIndex(new Qe(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Qe(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==dt)return;const n=new re;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ke.toWorkingColorSpace(n,dt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Gr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=pv.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function pv(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let x,M;if(c.useUniqueIDs)M=u[m],x=a.GetAttributeByUniqueId(d,M);else{if(M=a.GetAttributeId(d,o[u[m]]),M===-1)continue;x=a.GetAttribute(d,M)}const v=i(o,a,d,m,p,x);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,_=g*u.BYTES_PER_ELEMENT,m=r(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,m,_,p);const x=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:x,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Ju={uSunViewPos:{value:new E}};function ie(s,e,t){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function It(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=Math.floor(t),o=s-n,a=e-i,l=t-r,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ie(n,i,r),f=ie(n+1,i,r),g=ie(n,i+1,r),_=ie(n+1,i+1,r),m=ie(n,i,r+1),p=ie(n+1,i,r+1),x=ie(n,i+1,r+1),M=ie(n+1,i+1,r+1),v=d+(f-d)*c,T=g+(_-g)*c,R=m+(p-m)*c,A=x+(M-x)*c,P=v+(T-v)*u,b=R+(A-R)*u;return(P+(b-P)*h)*2-1}function $i(s,e,t,n=4){let i=0,r=.5,o=1;for(let a=0;a<n;a++)i+=r*It(s*o+a*17.31,e*o-a*9.7,t*o+a*3.3),o*=2.03,r*=.5;return i}function pn(s,e,t){const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)}function vi(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function mv(){return[[0,1,0],[0,-1,0],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(e=>{const t=new E(...e).normalize(),n=Math.abs(t.y)<.9?new E(0,1,0):new E(1,0,0),i=new E().crossVectors(t,n).normalize(),r=new E().crossVectors(t,i).normalize();return{h:t,e1:i,e2:r}})}function gv(s,e,t){const n=vi(e,t),i=vi(e,t),r=vi(e,t),o=n.getContext("2d").createImageData(e,t),a=i.getContext("2d").createImageData(e,t),l=r.getContext("2d").createImageData(e,t),c=o.data,u=a.data,h=l.data,d=new Float32Array(e),f=new Float32Array(e);for(let x=0;x<e;x++){const M=(x+.5)/e*Math.PI*2;d[x]=Math.cos(M),f[x]=Math.sin(M)}const g=s==="p4"?mv():null;for(let x=0;x<t;x++){const M=(x+.5)/t*Math.PI,v=Math.sin(M),T=Math.cos(M);for(let R=0;R<e;R++){const A=-d[R]*v,P=f[R]*v,b=(x*e+R)*4;let y=0,L=0,F=0,D=0,W=0,X=0,V=.5;if(s==="p4"){let k=-2,oe=-2,ae=0;for(let te=0;te<g.length;te++){const ve=g[te].h,ne=A*ve.x+T*ve.y+P*ve.z;ne>k?(oe=k,k=ne,ae=te):ne>oe&&(oe=ne)}const pe=g[ae],Te=Math.acos(Math.min(1,k)),ke=Math.atan2(A*pe.e2.x+T*pe.e2.y+P*pe.e2.z,A*pe.e1.x+T*pe.e1.y+P*pe.e1.z);let Z=Math.abs(Math.cos(Te*95));Z*=Z,Z*=Z,Z*=Z,Z*=Z;const se=pn(.008,.02,Te);let ce=Math.abs(Math.cos(ke*12));ce*=ce,ce*=ce,ce*=ce,ce*=ce,ce*=ce;const me=ce*pn(.02,.07,Te)*(1-pn(.45,.9,Te)),we=1-pn(0,.014,k-oe),Ne=ie(Math.floor(A*140),Math.floor(T*140),Math.floor(P*140)),ze=ie(Math.floor(A*700)+3,Math.floor(T*700),Math.floor(P*700)),$e=It(A*6,T*6,P*6)*.5+.5,Xe=(ze>.6?1:0)*(.35+.65*Ne)*(.4+.6*$e),rt=Z*.85*se+me*.8+we*1.1+Xe*.45;let O,xt,Ge;Ne<.33?(O=1,xt=.74,Ge=.32):Ne<.66?(O=1,xt=.88,Ge=.62):(O=1,xt=.52,Ge=.18),D=rt*O,W=rt*xt,X=rt*Ge;const G=.11+.1*Ne+.05*$e+.06*Z*se;y=G*1.05,L=G,F=G*.95,V=.4+.3*Ne+.2*Z}else if(s==="p2"){let k=$i(A*2.2+5.1,T*2.2,P*2.2,5);T>.86&&(k=Math.max(k,.12+(T-.86)*2));const oe=k>.02,ae=(k-.02)/.06,pe=Math.exp(-ae*ae),Te=ie(Math.floor(A*520),Math.floor(T*520),Math.floor(P*520)),ke=ie(Math.floor(A*90)+7,Math.floor(T*90),Math.floor(P*90)),Z=It(A*7+2,T*7,P*7)*.5+.5;if(oe){const se=(Te>.45?1:0)*(pe*1.25+.16*Z+(T>.86?.95:0))*(.5+.5*ke);let ce,me,we;Z>.62?(ce=1,me=.15,we=.6):ke>.5?(ce=.1,me=.85,we=1):(ce=.75,me=.85,we=1),D=se*ce,W=se*me,X=se*we,y=.08+.05*ke,L=.09+.05*ke,F=.11+.05*ke,V=.55+k*.4}else{const se=pn(-.35,.02,k);y=.01+.02*se,L=.03+.04*se,F=.06+.06*se,V=.3}}else if(s==="p3"){let k=$i(A*1.8+11,T*1.8,P*1.8,5);T>.84&&(k=Math.max(k,.08+(T-.84)*.8));const oe=1-Math.abs(It(A*7+3,T*7,P*7)),ae=Math.max(0,k-.12)*oe*oe*3*(T>.9?.2:1),pe=It(A*14,T*14,P*14);if(k>0)V=.45+k*.6+ae*.6,T<-.9?(y=.9,L=.93,F=.96):ae>.6?(y=.88,L=.9,F=.94):ae>.25?(y=.36,L=.31,F=.26):pe>.3&&T<.9?(y=.07,L=.2,F=.07):(y=.15+.04*pe,L=.34+.05*pe,F=.11),ie(Math.floor(A*300),Math.floor(T*300),Math.floor(P*300))>.996&&(D=.9,W=.62,X=.3);else{const Te=pn(-.25,0,k);y=.02+.03*Te,L=.08+.12*Te,F=.22+.13*Te,T<-.92&&(y=.88,L=.92,F=.96),V=.3+k*.3}}else{let k=$i(A*2-7,T*2,P*2,5);T>.84&&(k=Math.max(k,.1+(T-.84)));const oe=It(A*11,T*11,P*11);if(k>0){y=.03+.03*oe,L=.15+.06*oe,F=.09+.04*oe;let ae=1-Math.abs(It(A*9+1,T*9,P*9)),pe=1-Math.abs(It(A*23+5,T*23,P*23));ae=Math.pow(ae,14),pe=Math.pow(pe,20);const Te=ae*.85+pe*.5;It(A*3+9,T*3,P*3)>0?(D=Te*.15,W=Te*.95,X=Te*1):(D=Te*.85,W=Te*.2,X=Te*1),V=.5+k*.7+ae*.1}else{const ae=pn(-.3,0,k);y=0+.02*ae,L=.16+.29*ae,F=.26+.24*ae;const pe=pn(-.06,0,k)*.45;D=pe*.1,W=pe*.8,X=pe*.9,V=.3}}c[b]=y*255,c[b+1]=L*255,c[b+2]=F*255,c[b+3]=255,u[b]=D*255,u[b+1]=W*255,u[b+2]=X*255,u[b+3]=255;const Q=V*255;h[b]=Q,h[b+1]=Q,h[b+2]=Q,h[b+3]=255}}n.getContext("2d").putImageData(o,0,0),i.getContext("2d").putImageData(a,0,0),r.getContext("2d").putImageData(l,0,0);const _=new _n(n);_.colorSpace=dt,_.anisotropy=8;const m=new _n(i);m.colorSpace=dt,m.anisotropy=8;const p=new _n(r);return{map:_,emissiveMap:m,bumpMap:p}}function _v(s,e=1024,t=512){const n=vi(e,t),i=n.getContext("2d"),r=i.createImageData(e,t),o=r.data,a={p1:{lo:.05,hi:.38,col:[1,1,1],k:.82},p2:{lo:-.18,hi:.25,col:[.2,.22,.28],k:.9},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[s]||{lo:.1,hi:.4,col:[1,1,1],k:.7};for(let c=0;c<t;c++){const u=(c+.5)/t*Math.PI,h=Math.sin(u),d=Math.cos(u);for(let f=0;f<e;f++){const g=(f+.5)/e*Math.PI*2,_=-Math.cos(g)*h,m=Math.sin(g)*h,p=It(_*2+4,d*2,m*2)*.35,x=$i(_*3.2+20+p,d*5,m*3.2-p,5);let M=pn(a.lo,a.hi,x)*a.k;a.clearNorth&&(M*=1-pn(.78,.9,d));const v=(c*e+f)*4;o[v]=a.col[0]*255,o[v+1]=a.col[1]*255,o[v+2]=a.col[2]*255,o[v+3]=M*255}}i.putImageData(r,0,0);const l=new _n(n);return l.colorSpace=dt,l.anisotropy=8,l}function vv(s,e=.06){s.onBeforeCompile=t=>{t.uniforms.uSunViewPos=Ju.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 sunDirV = normalize(uSunViewPos + vViewPosition);
        float nightF = smoothstep(0.18, -0.22, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},s.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function xv(){const s=vi(128,128),e=s.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 255, 255, 0.92)"),t.addColorStop(.35,"rgba(242, 248, 255, 0.56)"),t.addColorStop(.7,"rgba(215, 232, 255, 0.18)"),t.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new _n(s);return n.needsUpdate=!0,n}function Vc(s,e){return new St({uniforms:{uCloudMap:{value:s},uSunPosition:{value:new E(0,0,0)},uPlanetCenter:{value:new E(0,0,0)},uAmbientColor:{value:new re(e.ambient)},uSunColor:{value:new re(e.sunlit)},uHorizonColor:{value:new re(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
        float sunWrap = smoothstep(-0.42, 0.72, dot(n, sunDir));
        float forwardCos = max(dot(-viewDir, sunDir), 0.0001);
        float forward = pow(forwardCos, 3.2) * 0.45;
        vec3 litCloud = mix(uAmbientColor, uSunColor, clamp(sunWrap + forward, 0.0, 1.0)) * (0.75 + 0.35 * tex.rgb);

        // Fundir bordes rasantes al horizonte con el color del cielo para evitar recortes negros
        float ndotv = abs(dot(n, viewDir));
        float horizonBlend = 1.0 - smoothstep(0.02, 0.28, ndotv);
        vec3 finalCol = clamp(mix(litCloud, uHorizonColor, horizonBlend * 0.78), 0.0, 4.0);
        float edgeAlpha = cloudAlpha * smoothstep(0.005, 0.14, ndotv);

        gl_FragColor = vec4(finalCol, clamp(edgeAlpha, 0.0, 0.96));
      }
    `,transparent:!0,depthWrite:!1,fog:!1,side:Ct})}function Mv(){const s=new en(28e3,48,32),e=new St({uniforms:{uLocalUp:{value:new E(0,1,0)},uSunDir:{value:new E(0,.2,1)},uZenithColor:{value:new re(1991880)},uMidColor:{value:new re(5155054)},uHorizonColor:{value:new re(16760171)},uSunGlowColor:{value:new re(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:Dt}),t=new ut(s,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t}function yv(s,e=1.45){const t=s.localRadius,n=new Rt;n.name=`${s.id}_Orbital_Globe`;const i={p4:[2048,1024],p2:[1536,768]}[s.id]||[1024,512],{map:r,emissiveMap:o,bumpMap:a}=gv(s.id,i[0],i[1]),l={p1:{ei:1.9,rough:.8,metal:.05,bump:1.2,floor:.05},p2:{ei:2.6,rough:.55,metal:.35,bump:.6,floor:.04},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[s.id],c=new ct({map:r,emissiveMap:o,emissive:new re(1,1,1),emissiveIntensity:l.ei,roughness:l.rough,metalness:l.metal,bumpMap:a,bumpScale:l.bump});vv(c,l.floor);const u=new ut(new en(t,128,128),c);u.name=`${s.id}_Orbital_Surface`,n.add(u);const h=_v(s.id),d=new ct({map:h,transparent:!0,depthWrite:!1,roughness:1,metalness:0}),f=new ut(new en(t*1.014,128,128),d);f.name=`${s.id}_Cloud_Layer`,n.add(f);const g={p1:{ambient:1465968,sunlit:9368319,horizon:1737360},p2:{ambient:729136,sunlit:5023944,horizon:931922},p3:{ambient:8033976,sunlit:16774884,horizon:16037484},p4:{ambient:6040598,sunlit:16758904,horizon:13920302}}[s.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},_=Vc(h,g),m=new ut(new en(t*(1+e*.94),96,96),_);m.name=`${s.id}_Upper_Atmo_Cloud_Veil`,m.visible=!1,n.add(m);const p=new Rt;p.name=`${s.id}_Lower_Cloud_Deck`,p.visible=!1,n.add(p);const x=t*(1+e*.42),M=Vc(h,g),v=new ut(new en(x,96,96),M);p.add(v);const T=340,R=new Float32Array(T*3);for(let L=0;L<T;L++){const F=Math.acos(1-ie(L,2,17)*.85),D=ie(L,9,5)*Math.PI*2,W=.36+ie(L,4,13)*.13,X=t*(1+e*W);R[L*3]=X*Math.sin(F)*Math.cos(D),R[L*3+1]=X*Math.cos(F),R[L*3+2]=X*Math.sin(F)*Math.sin(D)}const A=new pt;A.setAttribute("position",new Qe(R,3));const P=new ti({map:xv(),color:g.sunlit,size:56,transparent:!0,opacity:0,depthWrite:!1,fog:!1,sizeAttenuation:!0}),b=new Mi(A,P);p.add(b);const y=Qu(s,t,s.id==="p4"?1.032:1.048);return n.add(y),{group:n,surfaceMesh:u,cloudMesh:f,upperCloudMesh:m,lowerCloudGroup:p,lowerCloudMesh:v,lowerCloudPuffs:b,atmosphere:y}}function Qu(s,e,t=1.045){const n=new en(e*t,96,96),i={p1:[6281471,11558143],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[s.id]||[6866175,16755285],r=new St({uniforms:{uColorDay:{value:new re(i[0])},uColorHorizon:{value:new re(i[1])},uSunPosition:{value:new E(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Vt,side:vn}),o=new ut(n,r);return o.name=`${s.id}_Fresnel_Atmosphere`,o}function Sv(s,e=1400){const t=s.localRadius,n=s.id==="p4",i=256,r=vi(i,i),o=vi(i,i),a=r.getContext("2d"),l=o.getContext("2d");a.fillStyle=n?"#2a2c31":"#111821",a.fillRect(0,0,i,i),l.fillStyle="#000000",l.fillRect(0,0,i,i);const c=n?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let x=4;x<i;x+=8)for(let M=3;M<i;M+=6)Math.random()<(n?.55:.42)&&(l.fillStyle=c[Math.random()*c.length|0],l.fillRect(M,x,3,4));const u=new _n(r);u.colorSpace=dt;const h=new _n(o);h.colorSpace=dt;const d=new zt(1,1,1);d.translate(0,.5,0);const f=new ct({map:u,emissiveMap:h,emissive:new re(1,1,1),emissiveIntensity:n?1.6:2,roughness:.42,metalness:.7}),g=new tt(d,f,e);g.name=`${s.id}_Horizon_Tower_Band`;const _=new ft,m=new E(0,1,0),p=new E;for(let x=0;x<e;x++){const M=.118+Math.pow(ie(x,3,9),.85)*.38,v=ie(x,7,1)*Math.PI*2;p.set(Math.sin(M)*Math.cos(v),Math.cos(M),Math.sin(M)*Math.sin(v)),_.position.copy(p).multiplyScalar(t*.998),_.quaternion.setFromUnitVectors(m,p),_.rotateY(ie(x,2,2)*Math.PI);const T=t*(.0024+.0042*ie(x,5,5)),R=t*(.0024+.0042*ie(x,6,8)),A=t*(.006+.025*Math.pow(ie(x,9,4),1.6));_.scale.set(T,A,R),_.updateMatrix(),g.setMatrixAt(x,_.matrix)}return g.instanceMatrix.needsUpdate=!0,g}function bv(s,e,t,n){s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrixWorld(!0);const i=new E(0,1,0),r=e/t,o=152;function a(p,x,M,v=!1){const T=Math.sqrt(p*p+M*M),R=Math.min(1.18,T/(r*.94)),A=Math.atan2(M,p),P=Math.sin(R),b=P*Math.cos(A),y=Math.cos(R),L=P*Math.sin(A);let F=x;if(v){const X=Ae.smoothstep(T,o*.65,o*1);F=Ae.lerp(x,-18,X)}const D=n==="p3"?14.5:.4,W=Math.max(r*.92,r+F+D);return{px:W*b,py:W*y-r,pz:W*L,nx:b,ny:y,nz:L}}const l=new Fe().copy(s.matrixWorld).invert(),c=[],u=new Map;s.traverse(p=>{if(p.isMesh&&p.geometry){const x=new Fe().multiplyMatrices(l,p.matrixWorld);c.push({mesh:p,initRootMat:x}),u.set(p.geometry,(u.get(p.geometry)||0)+1)}});for(const{mesh:p,initRootMat:x}of c)p.parent!==s&&s.attach(p),x.decompose(p.position,p.quaternion,p.scale),p.updateMatrix();const h=new E,d=new vt,f=new E,g=new E,_=new vt,m=new E;for(const{mesh:p,initRootMat:x}of c){const M=u.get(p.geometry)||1,v=/Terrain|River|Ground|Forest|Canal/.test(p.name);if(M===1||v){M>1&&(p.geometry=p.geometry.clone());const T=p.geometry.attributes.position,R=new Fe().copy(x).invert();for(let A=0;A<T.count;A++){m.fromBufferAttribute(T,A).applyMatrix4(x);const P=a(m.x,m.y,m.z,v);m.set(P.px,P.py,P.pz).applyMatrix4(R),T.setXYZ(A,m.x,m.y,m.z)}T.needsUpdate=!0,p.geometry.computeVertexNormals(),p.geometry.computeBoundingBox(),p.geometry.computeBoundingSphere()}else{x.decompose(h,d,f);const T=a(h.x,h.y,h.z,!1);g.set(T.nx,T.ny,T.nz).normalize(),_.setFromUnitVectors(i,g),p.position.set(T.px,T.py,T.pz),p.quaternion.copy(_).multiply(d),p.scale.copy(f),p.updateMatrix()}}s.scale.setScalar(t),s.position.set(0,e,0),s.updateMatrixWorld(!0)}const Ye=1/3.5,qi=.24;function Zt(s,e,t,n=0){const i=Math.sin(e),r=i*Math.cos(t),o=Math.cos(e),a=i*Math.sin(t),l=s+n;return{pos:new E(l*r,l*o,l*a),normal:new E(r,o,a)}}function Ln(s,e,t,n){const i=$i(s*44+3.1,e*44,t*44,4),r=Ae.smoothstep(n,qi*.72,qi),o=Math.exp(-Math.pow((s-Math.sin(t*28)*.032)/.022,2))*.0014;return(Math.max(-.001,i*.0052)-o)*(1-r)-r*.0045}function Tv(s){const e=[],t=[];for(let i=0;i<=40;i++){const r=i/40,o=Ae.lerp(-.15,.16,r),a=Math.sin(r*Math.PI*2.2)*.038+Ae.lerp(-.08,.09,r),l=Math.hypot(o,a),c=Math.atan2(a,o),u=Math.sin(l),h=u*Math.cos(c),d=Math.cos(l),f=u*Math.sin(c),g=Ln(h,d,f,l)+5e-4;t.push({theta:l,phi:c,...Zt(s,l,c,g)})}e.push(t);const n=[];for(let i=0;i<=28;i++){const r=i/28,o=.025+Math.cos(r*Math.PI*1.4)*.042,a=Ae.lerp(-.14,.05,r),l=Math.hypot(o,a),c=Math.atan2(a,o),u=Math.sin(l),h=u*Math.cos(c),d=Math.cos(l),f=u*Math.sin(c),g=Ln(h,d,f,l)+5e-4;n.push({theta:l,phi:c,...Zt(s,l,c,g)})}return e.push(n),e}function Ev(s,e,t,n){const i=new $a(1,2),r=i.attributes.position,o=r.count,a=new Float32Array(o*3),l=new re(803372),c=new re(1477244),u=new re(2304566),h=new re(1185310),d=new re;for(let f=0;f<o;f++){let g=r.getX(f),_=r.getY(f),m=r.getZ(f);const p=It(g*2.7+s*3.1,_*2.4-s,m*2.7+s*1.9),x=It(g*5.5+s*7.3,_*4.5,m*5.5);if(_>.15){const M=.25+(_-.15)*.22+.08*p,v=1+.18*p;g*=e*v,m*=t*v,_=n*M,d.copy(l).lerp(c,Math.max(0,x)*.5)}else{const M=Math.min(1,(.15-_)/1.15),v=Math.pow(1-M*.86,1.25),T=1+.34*p+.16*x;g*=e*v*T,m*=t*v*T,_=-n*M*(.85+.25*Math.abs(p)),d.copy(u).lerp(h,M*.75+Math.max(0,-p)*.25)}r.setXYZ(f,g,_,m),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}return i.setAttribute("color",new Qe(a,3)),i.computeVertexNormals(),i}function Av(s,e,t){const{t1:n,p1:i,t2:r,p2:o,peakAlt:a,tubeRadius:l}=e,c=Zt(s,n,i,-.002*Ye).pos,u=Zt(s,r,o,-.002*Ye).pos,h=c.clone().add(u).multiplyScalar(.5).normalize(),d=c.clone().lerp(u,.26).normalize().multiplyScalar(s+a*.72),f=h.clone().multiplyScalar(s+a),g=c.clone().lerp(u,.74).normalize().multiplyScalar(s+a*.76),_=new ja([c,d,f,g,u]),m=new Qa(_,28,l,8,!1),p=m.attributes.position,x=m.attributes.normal,M=new Float32Array(p.count*3),v=new re(2041136),T=new re(1001008),R=new re(1607810),A=new E,P=new E,b=new re;for(let y=0;y<p.count;y++){A.fromBufferAttribute(p,y),P.fromBufferAttribute(x,y);const L=It(A.x*260+t*3.7,A.y*260,A.z*260-t),F=It(A.x*580,A.y*580,A.z*580),D=A.clone().normalize(),W=Math.max(0,P.dot(D));A.addScaledVector(P,l*(.38*L+.18*F)),p.setXYZ(y,A.x,A.y,A.z),b.copy(v).lerp(T,Math.pow(W,1.3)),W>.45&&F>.25&&b.lerp(R,.55),M[y*3]=b.r,M[y*3+1]=b.g,M[y*3+2]=b.b}return m.setAttribute("color",new Qe(M,3)),m.computeVertexNormals(),{geo:m,curve:_,apex:f}}function wv(s){const e=new Bn(.12,1,1,9,8);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new re(1777706),r=new re(934956),o=new re(1865326),a=new re;for(let l=0;l<t.count;l++){let c=t.getX(l);const u=t.getY(l);let h=t.getZ(l);const d=It(c*3.8+s*2.1,u*4.5,h*3.8-s),f=1+.35*d;c*=f,h*=f,t.setXYZ(l,c,u,h),a.copy(i).lerp(r,Ae.smoothstep(u,.25,.72)),u>.72&&d>.1&&a.lerp(o,.5),n[l*3]=a.r,n[l*3+1]=a.g,n[l*3+2]=a.b}return e.setAttribute("color",new Qe(n,3)),e.computeVertexNormals(),e}function Cv(s,e){const t=s.length,n=[],i=[],r=[],o=[],a=new E,l=new E,c=new E;for(let p=0;p<t;p++){const x=s[p],M=s[Math.max(0,p-1)],v=s[Math.min(t-1,p+1)];a.copy(v.pos).sub(M.pos).normalize(),c.copy(x.normal),l.crossVectors(a,c).normalize();const T=1+.22*Math.sin(p*.45),R=e*T,A=R*.22,P=x.pos.clone().addScaledVector(l,-R),b=x.pos.clone().addScaledVector(l,R),y=x.pos.clone().addScaledVector(l,-(R+A)).addScaledVector(c,12e-5),L=x.pos.clone().addScaledVector(l,R+A).addScaledVector(c,12e-5);n.push(P.x,P.y,P.z,b.x,b.y,b.z);const F=p/(t-1);i.push(0,F,1,F),r.push(y.x,y.y,y.z,P.x,P.y,P.z),o.push(b.x,b.y,b.z,L.x,L.y,L.z)}const u=p=>{const x=[];for(let v=0;v<t-1;v++){const T=v*2,R=T+1,A=T+2,P=T+3;x.push(T,R,A,R,P,A)}const M=new pt;return M.setAttribute("position",new ht(p,3)),M.setIndex(x),M.computeVertexNormals(),M},h=u(n);h.setAttribute("uv",new ht(i,2));const d=new ct({color:280664,emissive:35e3,emissiveIntensity:.9,roughness:.08,metalness:.72,transparent:!0,opacity:.9,depthWrite:!1}),f=new ut(h,d),g=new ct({color:59647,emissive:62975,emissiveIntensity:2.35,roughness:.3,transparent:!0,opacity:.88,depthWrite:!1}),_=new ut(u(r),g),m=new ut(u(o),g);return{waterMesh:f,bankL:_,bankR:m,waterMat:d,bankMat:g}}function Pa(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function Rv(){const s=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=new Si(.32,1,2,4),r=i.attributes.position;for(let o=0;o<r.count;o++){const a=Ae.clamp(r.getY(o)+.5,0,1),l=r.getX(o)*(1-Math.pow(a,1.4)*.85),c=-a*a*.38;r.setXYZ(o,l,a*.52,c+a*.75)}i.rotateX(.45),i.rotateY(n),i.computeVertexNormals(),s.push(i.toNonIndexed())}const e=yi(s,!1);return e.computeVertexNormals(),Pa(e,1)}function Pv(){const s=[];for(let t=0;t<6;t++){const n=new _i(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/6*Math.PI*2),s.push(n.toNonIndexed())}const e=yi(s,!1);return e.computeVertexNormals(),e}function Lv(){const s=[],e=new en(1,12,7,0,Math.PI*2,0,Math.PI*.55);e.scale(1,.38,1),e.translate(0,.92,0),s.push(e.toNonIndexed());const t=new Bn(.14,.24,.95,7,1);t.translate(0,.47,0),s.push(t.toNonIndexed());const n=yi(s,!1);return n.computeVertexNormals(),n}function Iv(){const s=new en(1,14,8,0,Math.PI*2,0,Math.PI*.52);s.scale(1.05,.28,1.05),s.computeVertexNormals(),Pa(s,1);const e=new _i(.96,.18,14,1,!0);return e.rotateX(Math.PI),e.translate(0,-.02,0),e.computeVertexNormals(),Pa(e,-1),{outer:s,under:e}}function Dv(s){const e=s.localRadius,t=new Rt;t.name="Pandora_Procedural_Surface_World";const n=new Ja(1e-4,qi,72,48),i=n.attributes.position,r=i.count,o=new Float32Array(r*3),a=new re(402466),l=new re(936504),c=new re(710884),u=new re;for(let G=0;G<r;G++){const te=i.getX(G),ve=i.getY(G),ne=Math.min(qi,Math.hypot(te,ve)),C=Math.atan2(ve,te),S=Math.sin(ne),N=S*Math.cos(C),Y=Math.cos(ne),q=S*Math.sin(C),H=$i(N*44+3.1,Y*44,q*44,4),ge=Ae.smoothstep(ne,qi*.72,qi),he=Ln(N,Y,q,ne),_e=Zt(e,ne,C,he);i.setXYZ(G,_e.pos.x,_e.pos.y,_e.pos.z);const Be=1-Math.abs(It(N*68+1.5,Y*68,q*68)),le=Math.pow(Be,12)*(1-ge);u.copy(a).lerp(l,Ae.clamp(H+.5,0,1)),u.lerp(c,le*.7),o[G*3]=u.r,o[G*3+1]=u.g,o[G*3+2]=u.b}if(n.index){const G=n.index.array;for(let te=0;te<G.length;te+=3){const ve=G[te+1];G[te+1]=G[te+2],G[te+2]=ve}n.index.needsUpdate=!0}n.setAttribute("color",new Qe(o,3)),n.computeVertexNormals();const h=new ut(n,new ct({vertexColors:!0,roughness:.84,metalness:.08}));h.name="Pandora_Jungle_Cap_Terrain",t.add(h);const d=Tv(e),f=[];d.forEach((G,te)=>{const ve=(te===0?.011:.0068)*Ye,{waterMesh:ne,bankL:C,bankR:S,waterMat:N,bankMat:Y}=Cv(G,ve);ne.name=`Pandora_Luminous_River_${te}`,t.add(ne,C,S),f.push({waterMat:N,bankMat:Y,phase:te*1.7})});const g=[{t1:.048,p1:.25,t2:.056,p2:3.15,peakAlt:.052*Ye,tubeRadius:.0085*Ye},{t1:.072,p1:4.5,t2:.095,p2:5.55,peakAlt:.062*Ye,tubeRadius:.0095*Ye},{t1:.085,p1:1.55,t2:.112,p2:2.48,peakAlt:.048*Ye,tubeRadius:.0078*Ye},{t1:.065,p1:2.95,t2:.096,p2:4.05,peakAlt:.044*Ye,tubeRadius:.0072*Ye}],_=new ct({vertexColors:!0,roughness:.88,metalness:.06}),m=[],p=[];g.forEach((G,te)=>{const{geo:ve,curve:ne,apex:C}=Av(e,G,te+1),S=new ut(ve,_);S.name=`Pandora_Monumental_Arch_${te+1}`,t.add(S),m.push({apex:C,normal:C.clone().normalize()});for(let N=0;N<22;N++){const Y=.18+N/21*.64,q=ne.getPoint(Y),H=q.clone().normalize(),ge=new E((ie(N,te,3)-.5)*G.tubeRadius*1.1,0,(ie(N,te,9)-.5)*G.tubeRadius*1.1);p.push({pos:q.add(ge).addScaledVector(H,-G.tubeRadius*.6),normal:H,length:(.012+ie(N,te,5)*.022)*Ye})}});const x=18,M=wv(7),v=new tt(M,_,x);v.name="Pandora_Mossy_Rock_Spires";const T=new ft,R=new E(0,1,0);for(let G=0;G<x;G++){const te=d[G%d.length],ve=te[Math.min(te.length-1,3+G*5%(te.length-5))],ne=ve.phi+(G%2===0?.28:-.28),C=ve.theta+(ie(G,4,2)*.014+.008),S=Math.sin(C),N=S*Math.cos(ne),Y=Math.cos(C),q=S*Math.sin(ne),H=Ln(N,Y,q,C),ge=Zt(e,C,ne,H-.001*Ye);T.position.copy(ge.pos),T.quaternion.setFromUnitVectors(R,ge.normal),T.rotateY(ie(G,2,8)*Math.PI*2);const he=(.007+ie(G,9,1)*.009)*Ye,_e=(.032+ie(G,3,6)*.045)*Ye;T.scale.set(he,_e,he),T.updateMatrix(),v.setMatrixAt(G,T.matrix)}v.instanceMatrix.needsUpdate=!0,t.add(v);const A=new Rt;A.name="Pandora_Hallelujah_Islands",t.add(A);const P=new ct({vertexColors:!0,roughness:.86,metalness:.06}),b=new Qt({color:new re(.55,1.9,2.4),transparent:!0,opacity:.68,side:Ct,depthWrite:!1,blending:Vt}),y=[],L=[],F=22;for(let G=0;G<F;G++){const ve=(.02+(G===0?.02:.14+.82*Math.sqrt(ie(G,4,11)))*.36)*Ye*1.25,ne=G*2.39996+ie(G,7,3)*.45,C=(G===0?.175:.072+ie(G,9,2)*.18)*Ye,{pos:S,normal:N}=Zt(e,ve,ne,C),Y=(G===0?.082:.034+ie(G,2,5)*.05)*Ye,q=Y*(.72+ie(G,5,8)*.45),H=(G===0?.135:.05+ie(G,6,1)*.078)*Ye,ge=Ev(G+1,Y,q,H),he=new ut(ge,P);he.position.copy(S),he.quaternion.setFromUnitVectors(R,N),he.rotateY(ie(G,1,8)*Math.PI*2),A.add(he),y.push({pos:S,normal:N,rx:Y,rz:q,h:H,theta:ve,phi:ne,alt:C});for(let _e=0;_e<7;_e++){const Be=ie(G,_e,14)*Math.PI*2,le=.25+ie(G,_e,2)*.55,ye=new E(Math.cos(Be)*Y*le,-H*.32,Math.sin(Be)*q*le);ye.applyQuaternion(he.quaternion),p.push({pos:S.clone().add(ye),normal:N,length:(.015+ie(G,_e,8)*.032)*Ye})}if(G<13){const _e=b.clone(),Be=C+.012*Ye,le=(.006+ie(G,12,4)*.007)*Ye,ye=new Si(le,Be,2,12),De=ye.attributes.position;for(let I=0;I<De.count;I++){const U=(De.getY(I)+Be*.5)/Be,J=Math.sin((1-U)*Math.PI*.5)*.012*Ye;De.setZ(I,J)}ye.computeVertexNormals();const Ue=ie(G,3,6)*Math.PI*2,be=new E(Math.cos(Ue)*Y*.72,0,Math.sin(Ue)*q*.72),ee=new vt().setFromUnitVectors(R,N);be.applyQuaternion(ee);const Ee=S.clone().add(be).addScaledVector(N,-Be*.5+H*.16),Oe=new ut(ye,_e);Oe.position.copy(Ee),Oe.quaternion.copy(ee),Oe.rotateY(Ue+Math.PI*.5),A.add(Oe),L.push({mesh:Oe,material:_e,phase:G*1.17})}}const D=new Bn(3e-4*Ye,12e-5*Ye,1,4,1);D.translate(0,-.5,0);const W=new ct({color:59647,emissive:2293720,emissiveIntensity:1.9,roughness:.35}),X=new tt(D,W,p.length);X.name="Pandora_Hanging_Luminous_Vines",p.forEach((G,te)=>{T.position.copy(G.pos),T.quaternion.setFromUnitVectors(R,G.normal),T.scale.set(1,G.length,1),T.updateMatrix(),X.setMatrixAt(te,T.matrix)}),X.instanceMatrix.needsUpdate=!0,t.add(X);const V=240,Q=new Bn(.055,.18,1,8,1);Q.translate(0,.5,0);const k=new ct({color:1446180,roughness:.88,metalness:.06}),oe=new tt(Q,k,V);oe.name="Pandora_Umbrella_Tree_Trunks",t.add(oe);const{outer:ae,under:pe}=Iv(),Te=[],ke=[{name:"Pandora_Canopy_Underside_Turquoise",color:61695,emissive:65512,matrices:[]},{name:"Pandora_Canopy_Underside_Magenta",color:16722088,emissive:16720544,matrices:[]}];for(let G=0;G<V;G++){let te,ve,ne,C;if(G<42){const S=y[G%y.length],N=ie(G,2,13)*Math.PI*2,Y=Math.sqrt(ie(G,5,2))*.56,q=new E(Math.cos(N)*S.rx*Y,S.h*.28,Math.sin(N)*S.rz*Y),H=new vt().setFromUnitVectors(R,S.normal);q.applyQuaternion(H),te=S.pos.clone().add(q),ve=S.normal,ne=(.018+ie(G,8,4)*.02)*Ye,C=ne*.62}else{const S=G%10===0,N=(.015+Math.sqrt(ie(G,6,9))*.44)*Ye*1.25,Y=ie(G,1,4)*Math.PI*2,q=Math.sin(N),H=Ln(q*Math.cos(Y),Math.cos(N),q*Math.sin(Y),N),ge=Zt(e,N,Y,H);te=ge.pos,ve=ge.normal,ne=(S?.062+ie(G,3,7)*.026:.02+ie(G,3,7)*.022)*Ye,C=ne*(S?.78:.56)}T.position.copy(te),T.quaternion.setFromUnitVectors(R,ve),T.rotateY(ie(G,9,9)*Math.PI*2),T.scale.set(ne,ne,ne),T.updateMatrix(),oe.setMatrixAt(G,T.matrix),T.position.copy(te).addScaledVector(ve,ne*.92),T.scale.set(C,C,C),T.updateMatrix(),Te.push(T.matrix.clone()),ke[G%2].matrices.push(T.matrix.clone())}oe.instanceMatrix.needsUpdate=!0;const Z=new ct({color:734772,emissive:404536,emissiveIntensity:.65,roughness:.65,metalness:.08}),se=new tt(ae,Z,Te.length);se.name="Pandora_Umbrella_Canopy_Top",Te.forEach((G,te)=>se.setMatrixAt(te,G)),se.instanceMatrix.needsUpdate=!0,t.add(se);const ce=[];for(const G of ke){const te=new ct({color:G.color,emissive:G.emissive,emissiveIntensity:2.25,roughness:.35,side:Ct}),ve=new tt(pe,te,G.matrices.length);ve.name=G.name,G.matrices.forEach((ne,C)=>ve.setMatrixAt(C,ne)),ve.instanceMatrix.needsUpdate=!0,t.add(ve),ce.push(ve)}const me=Rv(),we=new ct({color:805432,emissive:564360,emissiveIntensity:.72,roughness:.6,side:Ct}),Ne=340,ze=new tt(me,we,Ne);ze.name="Pandora_Riverside_Giant_Ferns";for(let G=0;G<Ne;G++){const te=d[G%d.length],ve=te[Math.floor(ie(G,5,3)*te.length)],ne=(G%2===0?1:-1)*(.008+ie(G,7,1)*.025)*Ye,C=ve.phi+ne*1.4,S=ve.theta+(ie(G,3,8)-.5)*.015*Ye,N=Math.sin(S),Y=Ln(N*Math.cos(C),Math.cos(S),N*Math.sin(C),S),q=Zt(e,S,C,Y);T.position.copy(q.pos),T.quaternion.setFromUnitVectors(R,q.normal),T.rotateY(ie(G,1,6)*Math.PI*2);const H=(.007+ie(G,4,9)*.009)*Ye;T.scale.set(H,H,H),T.updateMatrix(),ze.setMatrixAt(G,T.matrix)}ze.instanceMatrix.needsUpdate=!0,t.add(ze);const $e=Pv(),Xe=[{name:"Pandora_Flowers_Violet",color:12728575,emissive:13648127,matrices:[]},{name:"Pandora_Flowers_Orange",color:16739866,emissive:16742436,matrices:[]}],rt=280;for(let G=0;G<rt;G++){const te=d[G%d.length],ve=te[Math.floor(ie(G,8,2)*te.length)],ne=ve.phi+(ie(G,2,7)-.5)*.08*Ye,C=ve.theta+(ie(G,9,3)-.5)*.06*Ye,S=Math.sin(C),N=Ln(S*Math.cos(ne),Math.cos(C),S*Math.sin(ne),C),Y=Zt(e,C,ne,N);T.position.copy(Y.pos),T.quaternion.setFromUnitVectors(R,Y.normal),T.rotateY(ie(G,6,4)*Math.PI*2);const q=(.0042+ie(G,3,5)*.0048)*Ye;T.scale.set(q,q,q),T.updateMatrix(),Xe[G%2].matrices.push(T.matrix.clone())}for(const G of Xe){const te=new ct({color:G.color,emissive:G.emissive,emissiveIntensity:2.35,roughness:.3}),ve=new tt($e,te,G.matrices.length);ve.name=G.name,G.matrices.forEach((ne,C)=>ve.setMatrixAt(C,ne)),ve.instanceMatrix.needsUpdate=!0,t.add(ve),ce.push(ve)}const O=Lv(),xt=[{name:"Pandora_Mushrooms_Violet",color:9973503,emissive:11024639,matrices:[]},{name:"Pandora_Mushrooms_NeonPink",color:16722072,emissive:16725672,matrices:[]}],Ge=160;for(let G=0;G<Ge;G++){const te=Math.floor(G/4),ve=(.02+Math.sqrt(ie(te,11,3))*.36)*Ye*1.2,ne=ie(te,4,17)*Math.PI*2,C=ve+(ie(G,2,9)-.5)*.018*Ye,S=ne+(ie(G,7,5)-.5)*.14,N=Math.sin(C),Y=Ln(N*Math.cos(S),Math.cos(C),N*Math.sin(S),C),q=Zt(e,C,S,Y);T.position.copy(q.pos),T.quaternion.setFromUnitVectors(R,q.normal),T.rotateY(ie(G,5,1)*Math.PI*2);const H=(.0085+ie(G,9,6)*.011)*Ye;T.scale.set(H,H,H),T.updateMatrix(),xt[te%2].matrices.push(T.matrix.clone())}for(const G of xt){const te=new ct({color:G.color,emissive:G.emissive,emissiveIntensity:2.2,roughness:.35}),ve=new tt(O,te,G.matrices.length);ve.name=G.name,G.matrices.forEach((ne,C)=>ve.setMatrixAt(C,ne)),ve.instanceMatrix.needsUpdate=!0,t.add(ve),ce.push(ve)}return{group:t,waterfalls:L,glowingCanopies:ce,pulsingRivers:f,archCenters:m,riverPaths:d}}function Nv(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new _n(s);return n.needsUpdate=!0,n}const eh=Nv();function Uv(s,e,t=350){const n=e,i=1/3.5,r=new Rt;r.name=`${s}_Urban_AV_Traffic_System`;const o=(s==="p4"?.0033:.0032)*i,a=new zt(o*.55,o*.34,o*1.85),l=new ct({color:1580068,roughness:.38,metalness:.85}),c=new tt(a,l,t),u=new zt(o*.58,o*.22,o*.55);u.translate(0,0,o*.92);const h=new Qt({color:s==="p4"?new re(2.4,2.8,3.2):new re(1.2,3.1,3.8)}),d=new tt(u,h,t),f=new zt(o*.42,o*.16,o*3.8);f.translate(0,0,-o*2.55);const g=new Qt({color:s==="p4"?new re(4.2,1.4,.25):new re(4,.75,.28),transparent:!0,opacity:.88}),_=new tt(f,g,t);r.add(c,d,_);const m=[],p=[new E(1,0,0),new E(0,0,1),new E(.707,0,.707),new E(-.707,0,.707)];for(let P=0;P<t;P++){const b=P%2===0,L=(.016+P%7*.022+ie(P,3,7)*.012)*i,F=n+L;if(b){const D=(P>>1)%14,W=(.035+D*.034+(ie(P,1,9)-.5)*.014)*i*1.2,X=D%2===0?1:-1,V=X*(.085+ie(P,5,2)*.11)/Math.max(.08,Math.sin(W));m.push({type:"ring",radius:F,theta:W,sinTheta:Math.sin(W),cosTheta:Math.cos(W),phi0:ie(P,8,4)*Math.PI*2,omega:V,dir:X,bobAmp:(.002+ie(P,2,6)*.0025)*i,bobPhase:ie(P,4,1)*Math.PI*2})}else{const D=P%p.length,W=(Math.floor(P/8)%11-5)*.042*i*1.15,X=p[D],V=new vt().setFromAxisAngle(X,W),Q=P%4===1?1:-1,k=.52*i*1.2,oe=(ie(P,6,3)*2-1)*k,ae=Q*(.09+ie(P,9,5)*.13)*i*1.25;m.push({type:"corridor",radius:F,qPlane:V,s0:oe,arcSpan:k,speed:ae,dir:Q,bobAmp:(.002+ie(P,7,2)*.002)*i,bobPhase:ie(P,3,4)*Math.PI*2})}}const x=new E,M=new E,v=new E,T=new E,R=new Fe,A=new E;return{update(P){if(!(!r.parent||!r.parent.visible)){for(let b=0;b<t;b++){const y=m[b],L=Math.sin(P*2.2+y.bobPhase)*y.bobAmp,F=y.radius+L;if(y.type==="ring"){const W=y.phi0+y.omega*P,X=Math.cos(W),V=Math.sin(W);M.set(y.sinTheta*X,y.cosTheta,y.sinTheta*V).normalize(),x.copy(M).multiplyScalar(F),v.set(-y.dir*V,0,y.dir*X).normalize(),T.crossVectors(M,v).normalize(),v.crossVectors(T,M).normalize()}else{const W=y.arcSpan*2;let X=(y.s0+y.speed*P+y.arcSpan)%W;X<0&&(X+=W);const V=X-y.arcSpan,Q=Math.sin(V),k=Math.cos(V);M.set(Q,k,0).applyQuaternion(y.qPlane).normalize(),x.copy(M).multiplyScalar(F),v.set(y.dir*k,-y.dir*Q,0).applyQuaternion(y.qPlane).normalize(),T.crossVectors(M,v).normalize()}let D=1;if(y.type==="corridor"){const W=Math.abs(Math.acos(Ae.clamp(M.y,-1,1)))/y.arcSpan;D=1-Ae.smoothstep(W,.85,1)}R.makeBasis(T,M,v),R.setPosition(x),D<.99&&(A.setScalar(Math.max(.01,D)),R.scale(A)),c.setMatrixAt(b,R),d.setMatrixAt(b,R),_.setMatrixAt(b,R)}c.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0}},group:r}}function Fv(s){const e=[],t=[],n=[],i=[],r=[],o=(f,g)=>({mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let a=0;s.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";a++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(o(f,a)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(o(f,a)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(o(f,a)):/NC_Neon_Sign_/.test(g)?i.push(o(f,a)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&r.push(o(f,a))});const l=f=>{if(f.length===0)return null;const g=new E;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const _=g.clone().normalize();return{parts:f,centroid:g,localUp:_}},c=[l(e),l(t)].filter(Boolean),u=new vt,h=new vt,d=new E;return{update(f){c.forEach((g,_)=>{const m=_*2.4,p=Math.sin(f*1.45+m)*1.4,x=Math.sin(f*1.15+m)*.08;for(let M=0;M<g.parts.length;M++){const v=g.parts[M],T=/Tail|Fin/i.test(v.mesh.name),R=Math.sin(f*3.1+m+M*.65)*(T?.14:.045);d.copy(v.basePos).sub(g.centroid),u.setFromAxisAngle(g.localUp,x+R),d.applyQuaternion(u),v.mesh.position.copy(g.centroid).add(d).addScaledVector(g.localUp,p),v.mesh.quaternion.copy(u).multiply(v.baseQuat),v.material&&v.material.emissiveIntensity!==void 0&&(v.material.emissiveIntensity=v.baseEmissive*(.85+.22*Math.sin(f*2.6+M*.7+m)))}});for(let g=0;g<n.length;g++){const _=n[g],m=Math.sin(f*1.6+_.seed*.9)*.55;_.mesh.position.copy(_.basePos).addScaledVector(_.normal,m),_.material&&_.material.emissiveIntensity!==void 0&&(_.material.emissiveIntensity=_.baseEmissive*(.88+.16*Math.sin(f*3.4+_.seed)))}for(let g=0;g<i.length;g++){const _=i[g];if(!_.material||_.material.emissiveIntensity===void 0)continue;const m=.88+.14*Math.sin(f*2.2+_.seed*1.7),p=Math.sin(f*23+_.seed*7.3)>.965?.55:1;_.material.emissiveIntensity=_.baseEmissive*m*p}for(let g=0;g<r.length;g++){const _=r[g];_.material&&_.material.emissiveIntensity!==void 0&&(_.material.emissiveIntensity=_.baseEmissive*(.72+.48*Math.sin(f*3.2+_.seed*.8))),/Hexagon_Ring|Hexagon_Spoke/i.test(_.mesh.name)&&(h.setFromAxisAngle(_.normal,f*.35*(g%2===0?1:-1)),_.mesh.quaternion.copy(h).multiply(_.baseQuat))}}}}function Ov(s){const e=[];let t=0;return s.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n){for(let i=0;i<e.length;i++){const r=e[i];if(r.material.emissiveIntensity!==void 0){const o=.78+.36*Math.sin(n*1.9-r.phase);r.material.emissiveIntensity=r.baseEmissive*o}}}}}function Bv(s){const e=s,t=1/3.5,n=new Rt;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,r=.0022*t,o=new zt(r*.4,r*.32,r*1.8),a=new zt(r*1.9,r*.08,r*.72);a.translate(r*.95,0,0);const l=new zt(r*1.9,r*.08,r*.72);l.translate(-r*.95,0,0);const c=new ct({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),u=new tt(o,c,i),h=new tt(a,c,i),d=new tt(l,c,i);n.add(u,h,d);const f=[];for(let D=0;D<i;D++){const W=e+(D<55?.145+ie(D,2,7)*.09:.035+ie(D,4,3)*.06)*t,X=(.025+ie(D,5,1)*.24)*t*1.1,V=ie(D,8,9)*Math.PI*2,Q=(D%3===0?-1:1)*(.28+ie(D,3,6)*.28);f.push({alt:W,theta:X,phi0:V,omega:Q,dir:Q>=0?1:-1,flapSpeed:5.5+ie(D,1,5)*3.5,flapPhase:ie(D,7,2)*Math.PI*2,scaleFactor:.75+ie(D,9,4)*.8})}const g=42,_=new Float32Array(g*3),m=[];for(let D=0;D<g;D++){const W=(.16+ie(D,11,2)*.24)*t*1.15,X=ie(D,13,5)*Math.PI*2,V=e+(.045+ie(D,4,8)*.065)*t;m.push({theta:W,phi0:X,alt:V,speed:.028+ie(D,6,3)*.025})}const p=new pt;p.setAttribute("position",new Qe(_,3));const x=new ti({map:eh,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),M=new Mi(p,x);M.name="Medieval_Drifting_Cloud_Banks",n.add(M);const v=new E,T=new E,R=new E,A=new E,P=new Fe,b=new Fe,y=new vt,L=new E(0,0,1),F=new E;return{group:n,update(D){if(!n.parent||!n.parent.visible)return;for(let X=0;X<i;X++){const V=f[X],Q=V.phi0+V.omega*D,k=V.theta+Math.sin(D*.6+V.flapPhase)*.008,oe=V.alt+Math.sin(D*1.1+V.flapPhase)*.0018,ae=Math.sin(k),pe=Math.cos(k),Te=Math.cos(Q),ke=Math.sin(Q);T.set(ae*Te,pe,ae*ke).normalize(),v.copy(T).multiplyScalar(oe),R.set(-V.dir*ke,0,V.dir*Te).normalize(),A.crossVectors(T,R).normalize(),R.crossVectors(A,T).normalize(),P.makeBasis(A,T,R),P.setPosition(v),F.setScalar(V.scaleFactor),P.scale(F),u.setMatrixAt(X,P);const se=Math.sin(D*.45+V.flapPhase)>-.25?.55:.12,ce=Math.sin(D*V.flapSpeed+V.flapPhase)*se;y.setFromAxisAngle(L,ce),b.makeRotationFromQuaternion(y),b.premultiply(P),h.setMatrixAt(X,b),y.setFromAxisAngle(L,-ce),b.makeRotationFromQuaternion(y),b.premultiply(P),d.setMatrixAt(X,b)}u.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const W=p.attributes.position;for(let X=0;X<g;X++){const V=m[X],Q=V.phi0+V.speed*D,k=Math.sin(V.theta);W.setXYZ(X,V.alt*k*Math.cos(Q),V.alt*Math.cos(V.theta),V.alt*k*Math.sin(Q))}W.needsUpdate=!0}}}function La(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function Zn(s,e,t){const n=Math.max(1e-6,s),i=new Si(n,e,4,2);i.rotateX(-Math.PI*.5);const r=i.attributes.position;for(let o=0;o<r.count;o++){const a=Ae.clamp((r.getX(o)+n*.5)/n,0,1),l=r.getZ(o),c=t*a*n,u=-Math.pow(a,1.35)*e*.85,h=1-Math.pow(a,1.6)*.78,d=Math.sin(a*Math.PI)*e*.14;r.setXYZ(o,c,d,l*h+u)}return i.computeVertexNormals(),La(i,1)}function Gc(s){const e=[],t=new _i(s*.34,s*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new _i(s*.18,s*.9,4);n.rotateX(Math.PI*.42),n.translate(0,s*.2,s*1.15),e.push(n.toNonIndexed());const i=new _i(s*.12,s*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-s*1.85),e.push(i.toNonIndexed());const r=yi(e,!1);return r.computeVertexNormals(),r}function zv(s){const e=[],t=new zt(s*.72,s*.68,s*1.55);t.translate(0,s*.95,0),e.push(t.toNonIndexed());const n=new zt(s*.36,s*.58,s*.68);n.rotateX(.45),n.translate(0,s*1.32,s*.85),e.push(n.toNonIndexed());const i=new zt(s*.92,s*.44,s*.36);i.rotateX(.28),i.translate(0,s*1.54,s*1.15),e.push(i.toNonIndexed());const r=yi(e,!1);r.computeVertexNormals();const o=[],a=new Bn(s*.1,s*.08,s*.85,5);a.translate(s*.28,-s*.42,0);const l=a.clone();l.translate(-s*.56,0,0),o.push(a.toNonIndexed(),l.toNonIndexed());const c=yi(o,!1);c.computeVertexNormals();const u=c.clone();return{bodyGeo:r,frontLegsGeo:c,backLegsGeo:u}}function kv(s){const e=new en(s*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),La(e,1);const t=[];for(let i=0;i<4;i++){const r=i/4*Math.PI*2,o=new Bn(s*.05,s*.012,s*1.45,4);o.translate(Math.cos(r)*s*.22,-s*.72,Math.sin(r)*s*.22),t.push(o.toNonIndexed())}const n=yi(t,!1);return n.computeVertexNormals(),La(n,-1),{bellGeo:e,tentGeo:n}}function Vv(s,e){const t=s,n=1/3.5,i=new Rt;i.name="Pandora_Bioluminescent_Life";const r=1100,o=new Float32Array(r*3),a=new Float32Array(r*3),l=[],c=[new re(62975),new re(11553023),new re(3836159),new re(16732856)];for(let ee=0;ee<r;ee++){const Ee=(.008+Math.sqrt(ie(ee,3,19))*.44)*n*1.25,Oe=ie(ee,7,13)*Math.PI*2,I=(.004+ie(ee,5,11)*.22)*n;l.push({theta:Ee,phi:Oe,baseAlt:I,driftSpeed:.02+ie(ee,2,7)*.035,risePhase:ie(ee,9,4)*Math.PI*2});const $=c[ee%c.length];a[ee*3]=$.r,a[ee*3+1]=$.g,a[ee*3+2]=$.b}const u=new pt;u.setAttribute("position",new Qe(o,3)),u.setAttribute("color",new Qe(a,3));const h=new ti({size:.72,map:eh,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Vt,sizeAttenuation:!0});i.add(new Mi(u,h));const d=45,f=.0052*n,g=new ct({color:744312,emissive:55551,emissiveIntensity:1.25,roughness:.38}),_=new ct({color:46284,emissive:61695,emissiveIntensity:1.65,roughness:.35,side:Ct}),m=new ct({color:944852,emissive:2132223,emissiveIntensity:1.45,roughness:.4,side:Ct}),p=new tt(Gc(f),g,d),x=new tt(Zn(f*2.75,f*1.1,1),_,d),M=new tt(Zn(f*2.75,f*1.1,-1),_,d),v=new tt(Zn(f*1.65,f*.75,1),m,d),T=new tt(Zn(f*1.65,f*.75,-1),m,d);i.add(p,x,M,v,T);const R=[],A=e?.archCenters||[];for(let ee=0;ee<Math.max(1,A.length);ee++){const Ee=A[ee]?.normal?.clone()||new E(0,1,0),Oe=Math.abs(Ee.x)<.85?new E(1,0,0):new E(0,0,1),I=new E().crossVectors(Ee,Oe).normalize(),$=new E().crossVectors(Ee,I).normalize();R.push({normalDir:Ee,e1:I,e2:$})}const P=[];for(let ee=0;ee<d;ee++){const Ee=R[ee%R.length],Oe=(.025+ie(ee,4,1)*.068)*n,I=t+(.042+ie(ee,8,5)*.145)*n,$=(ee%3===0?-1:1)*(.42+ie(ee,6,3)*.36);P.push({frame:Ee,orbitRad:Oe,alt:I,phi0:ie(ee,4,2)*Math.PI*2,omega:$,phase:ie(ee,3,9)*Math.PI*2,scale:.78+ie(ee,5,6)*.55})}const b=2,y=.0145*n,L=new ct({color:10884618,emissive:16727056,emissiveIntensity:1.9,roughness:.35}),F=new ct({color:14166542,emissive:16734744,emissiveIntensity:2.15,roughness:.35,side:Ct}),D=new tt(Gc(y),L,b),W=new tt(Zn(y*3.1,y*1.25,1),F,b),X=new tt(Zn(y*3.1,y*1.25,-1),F,b),V=new tt(Zn(y*1.85,y*.85,1),F,b),Q=new tt(Zn(y*1.85,y*.85,-1),F,b);i.add(D,W,X,V,Q);const k=[{alt:t+.165*n,theta:.075*n,phi0:.4,omega:.24,phase:0},{alt:t+.195*n,theta:.105*n,phi0:3.5,omega:-.21,phase:2.2}],oe=24,ae=.0048*n,{bodyGeo:pe,frontLegsGeo:Te,backLegsGeo:ke}=zv(ae),Z=new ct({color:2500680,emissive:1990808,emissiveIntensity:.72,roughness:.68}),se=new ct({color:1711668,roughness:.75}),ce=new tt(pe,Z,oe),me=new tt(Te,se,oe),we=new tt(ke,se,oe);i.add(ce,me,we);const Ne=[{cTheta:.045,cPhi:1.05,rTheta:.018,speed:.16},{cTheta:.068,cPhi:3.65,rTheta:.022,speed:-.14},{cTheta:.088,cPhi:5.35,rTheta:.02,speed:.15}],ze=[];for(let ee=0;ee<oe;ee++){const Ee=Ne[ee%Ne.length],Oe=Math.floor(ee/3);ze.push({herd:Ee,offsetAng:Oe*.78+ie(ee,2,7)*.35,radialFactor:.55+ie(ee,5,3)*.65,phase:ie(ee,9,1)*Math.PI*2,scale:.85+ie(ee,4,8)*.38})}const $e=110,Xe=.0038*n,{bellGeo:rt,tentGeo:O}=kv(Xe),xt=new ct({color:16047359,emissive:12735743,emissiveIntensity:2.35,transparent:!0,opacity:.76,roughness:.25,depthWrite:!1,blending:Vt,side:Ct}),Ge=new Qt({color:new re(1.4,.85,2.2),transparent:!0,opacity:.62,depthWrite:!1,blending:Vt}),G=new tt(rt,xt,$e),te=new tt(O,Ge,$e);i.add(G,te);const ve=[];for(let ee=0;ee<$e;ee++){const Ee=(.012+Math.sqrt(ie(ee,6,11))*.34)*n*1.25,Oe=ie(ee,3,15)*Math.PI*2,I=t+(.015+ie(ee,9,7)*.058)*n;ve.push({theta:Ee,phi:Oe,alt:I,phase:ie(ee,2,5)*Math.PI*2,scale:.72+ie(ee,8,3)*.78})}const ne=new E,C=new E,S=new E,N=new E,Y=new E,q=new Fe,H=new Fe,ge=new vt,he=new vt,_e=new E(1,0,0),Be=new E(0,0,1),le=new E,ye=new E(0,1,0),De=(ee,Ee,Oe,I,$,U,J,de,ue,Ce,Ze,Mt)=>{S.copy(J).normalize(),N.copy(de).sub(J),N.lengthSq()<1e-12&&N.set(1,0,0),N.normalize(),Y.crossVectors(S,N).normalize(),N.crossVectors(Y,S).normalize(),q.makeBasis(Y,S,N),he.setFromAxisAngle(Be,Mt),H.makeRotationFromQuaternion(he),q.multiply(H),q.setPosition(J),le.setScalar(Ze),q.scale(le),Ee.setMatrixAt(ee,q),ge.setFromAxisAngle(Be,ue),H.makeRotationFromQuaternion(ge),H.premultiply(q),Oe.setMatrixAt(ee,H),ge.setFromAxisAngle(Be,-ue),H.makeRotationFromQuaternion(ge),H.premultiply(q),I.setMatrixAt(ee,H),ge.setFromAxisAngle(Be,Ce),H.makeRotationFromQuaternion(ge),H.setPosition(0,0,-f*.72),H.premultiply(q),$.setMatrixAt(ee,H),ge.setFromAxisAngle(Be,-Ce),H.makeRotationFromQuaternion(ge),H.setPosition(0,0,-f*.72),H.premultiply(q),U.setMatrixAt(ee,H)},Ue=(ee,Ee,Oe)=>{const I=ee.phi0+ee.omega*Ee,$=ee.orbitRad+Math.sin(Ee*.8+ee.phase)*.008*n,U=ee.alt+Math.sin(Ee*1.15+ee.phase)*.006*n;Oe.copy(ee.frame.normalDir).addScaledVector(ee.frame.e1,Math.cos(I)*$).addScaledVector(ee.frame.e2,Math.sin(I)*$).normalize().multiplyScalar(U)};return{group:i,update(ee){if(!i.parent||!i.parent.visible)return;const Ee=u.attributes.position;for(let $=0;$<r;$++){const U=l[$],J=(U.risePhase+ee*U.driftSpeed*3)%1*.014,de=t+U.baseAlt+J,ue=U.theta+Math.sin(ee*.4+U.risePhase)*.0025,Ce=U.phi+ee*U.driftSpeed*.4,Ze=Math.sin(ue);Ee.setXYZ($,de*Ze*Math.cos(Ce),de*Math.cos(ue),de*Ze*Math.sin(Ce))}Ee.needsUpdate=!0;for(let $=0;$<d;$++){const U=P[$];Ue(U,ee,ne),Ue(U,ee+.05,C);const J=Math.sin(ee*.65+U.phase)>-.2?.46:.1,de=Math.sin(ee*4.9+U.phase)*J,ue=Math.sin(ee*4.9+U.phase-.85)*J*.82,Ce=U.omega>0?-.32:.32;De($,p,x,M,v,T,ne,C,de,ue,U.scale,Ce)}p.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0,v.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0;for(let $=0;$<b;$++){const U=k[$],J=U.phi0+U.omega*ee,de=J+U.omega*.08;ne.set(U.alt*Math.sin(U.theta)*Math.cos(J),U.alt*Math.cos(U.theta),U.alt*Math.sin(U.theta)*Math.sin(J)),C.set(U.alt*Math.sin(U.theta)*Math.cos(de),U.alt*Math.cos(U.theta),U.alt*Math.sin(U.theta)*Math.sin(de));const ue=Math.sin(ee*2.5+U.phase)*.42,Ce=Math.sin(ee*2.5+U.phase-.9)*.35;De($,D,W,X,V,Q,ne,C,ue,Ce,1,U.omega>0?-.25:.25)}D.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,V.instanceMatrix.needsUpdate=!0,Q.instanceMatrix.needsUpdate=!0;const Oe=($,U,J,de)=>{const ue=$.offsetAng+$.herd.speed*U,Ce=$.herd.cTheta+Math.cos(ue)*$.herd.rTheta*$.radialFactor,Ze=$.herd.cPhi+Math.sin(ue)*.28*$.radialFactor,Mt=Math.sin(Ce),et=Mt*Math.cos(Ze),Gt=Math.cos(Ce),tn=Mt*Math.sin(Ze),js=Ln(et,Gt,tn,Ce),ms=Zt(t,Ce,Ze,js);J.copy(ms.pos),de.copy(ms.normal)},I=new E;for(let $=0;$<oe;$++){const U=ze[$];Oe(U,ee,ne,S),Oe(U,ee+.08,C,I),N.copy(C).sub(ne).normalize(),Y.crossVectors(S,N).normalize(),N.crossVectors(Y,S).normalize(),q.makeBasis(Y,S,N),q.setPosition(ne),le.setScalar(U.scale),q.scale(le),ce.setMatrixAt($,q);const J=Math.sin(ee*4.5+U.phase)*.42;ge.setFromAxisAngle(_e,J),H.makeRotationFromQuaternion(ge),H.setPosition(0,ae*.72,ae*.52),H.premultiply(q),me.setMatrixAt($,H),ge.setFromAxisAngle(_e,-J),H.makeRotationFromQuaternion(ge),H.setPosition(0,ae*.72,-ae*.56),H.premultiply(q),we.setMatrixAt($,H)}ce.instanceMatrix.needsUpdate=!0,me.instanceMatrix.needsUpdate=!0,we.instanceMatrix.needsUpdate=!0;for(let $=0;$<$e;$++){const U=ve[$],J=Math.sin(ee*1.15+U.phase)*.004*n,de=U.theta+Math.cos(ee*.45+U.phase)*.003*n,ue=U.phi+Math.sin(ee*.35+U.phase)*.04,Ce=Math.sin(de);S.set(Ce*Math.cos(ue),Math.cos(de),Ce*Math.sin(ue)).normalize(),ne.copy(S).multiplyScalar(U.alt+J);const Ze=1+Math.sin(ee*2.8+U.phase)*.16;be(q,ne,S,U.scale*Ze,U.scale/Math.sqrt(Ze)),G.setMatrixAt($,q),be(q,ne,S,U.scale,U.scale*(1+Math.sin(ee*2.8+U.phase)*.08)),te.setMatrixAt($,q)}if(G.instanceMatrix.needsUpdate=!0,te.instanceMatrix.needsUpdate=!0,e){if(e.waterfalls)for(const $ of e.waterfalls)$.material.opacity=.56+.18*Math.sin(ee*4.2+$.phase);if(e.pulsingRivers)for(const $ of e.pulsingRivers){const U=Math.sin(ee*2+$.phase);$.waterMat.emissiveIntensity=.85+.32*U,$.bankMat.emissiveIntensity=2.1+.65*U}e.glowingCanopies&&e.glowingCanopies.forEach(($,U)=>{$.material.emissiveIntensity=2.05+.42*Math.sin(ee*1.6+U*1.9)})}}};function be(ee,Ee,Oe,I,$){ge.setFromUnitVectors(ye,Oe),le.set(I,$,I),ee.compose(Ee,ge,le)}}const Ps=157.5,hi=1.45,Oo=1/3.5,Gv={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:11.5,eccentricity:.045,orbitOmega:.022,localRadius:1.32,groundFloorAlt:1.35,kmScale:5800,rotationSpeed:.014,landable:!0,hasProceduralWorld:!0,fogColor:726590,maxFogDensity:.0052,skyColor:329760,particleColor:62975,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new E(0,1.32*2.58,1.32*.92),lowOrbitLookAt:new E(0,1.32,0),highCloudOffset:new E(-.08,1.32*2.24,1.32*.56),aerialOffset:new E(-.018,1.32+.036,.068),aerialLookAt:new E(.004,1.32+.022,-.018),sunColor:8039167,sunIntensity:1.25,ambientColor:1183798,ambientIntensity:.98,hemiSkyColor:3482756,hemiGroundColor:411736,hemiIntensity:1.55,localLightColor:61695,localBounceColor:12073215,bloomStrength:.62,skyDome:{zenith:337998,mid:944774,horizon:2411468,sunGlow:8454120,zenithAlpha:.72,starFloor:.42}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:18.5,eccentricity:.035,orbitOmega:.015,localRadius:1.42,groundFloorAlt:.95,glbLocalScale:.0038*Oo,kmScale:6200,rotationSpeed:.011,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0038,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new E(0,1.42*2.58,1.42*.92),lowOrbitLookAt:new E(0,1.42,0),highCloudOffset:new E(-.06,1.42*2.24,1.42*.56),aerialOffset:new E(-.003,1.42+.028,.064),aerialLookAt:new E(.003,1.42+.024,-.024),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.64,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:26.5,eccentricity:.05,orbitOmega:.011,localRadius:1.52,groundFloorAlt:.95,glbLocalScale:.004*Oo,kmScale:6800,rotationSpeed:.01,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new E(-.32,1.52*2.58,1.52*.92),lowOrbitLookAt:new E(0,1.52,0),highCloudOffset:new E(-.18,1.52*2.24,1.52*.58),aerialOffset:new E(-.025,1.52+.08,.092),aerialLookAt:new E(.003,1.52+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:35.5,eccentricity:.04,orbitOmega:.0085,localRadius:1.62,groundFloorAlt:.95,glbLocalScale:.0039*Oo,kmScale:7500,rotationSpeed:.009,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new E(0,1.62*2.58,1.62*.92),lowOrbitLookAt:new E(0,1.62,0),highCloudOffset:new E(.08,1.62*2.24,1.62*.58),aerialOffset:new E(0,1.62+.042,.102),aerialLookAt:new E(0,1.62+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:46,eccentricity:.06,orbitOmega:.006,localRadius:1.85,groundFloorAlt:2,kmScale:11800,rotationSpeed:.05,landable:!1}};class Hv{constructor({scene:e,camera:t,controls:n,starfield:i,cockpitParticles:r,bloomPass:o,onStatusUpdate:a}){this.scene=e,this.camera=t,this.controls=n,this.starfield=i,this.cockpitParticles=r,this.bloomPass=o,this.onStatusUpdate=a||(()=>{}),this.dracoLoader=new fv,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new I_,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Rt,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(Ps),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.elapsedTime=0,this.skyDome=Mv(),this.scene.add(this.skyDome),this._setupLighting()}_setupLighting(){this.ambientLight=new l_(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new i_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new Or(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new qu(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.scene.add(this.planetaryDirLight),this.localAtmoLight=new Or(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new Or(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(.5),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new E(3.4,2.35,.72)},uHotColor:{value:new E(4,3.1,1.45)},uLimbColor:{value:new E(2.2,.85,.14)}};const n=new St({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(_=>{_.isMesh&&(_.material=n)});const i=new St({uniforms:{uColor:{value:new E(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:Vt,side:Dt}),r=new ut(new en(1.48,48,48),i);r.name="Solar_Tight_Corona";const o=document.createElement("canvas");o.width=512,o.height=512;const a=o.getContext("2d");a.clearRect(0,0,512,512);const l=256,c=256,u=a.createRadialGradient(l,c,4,l,c,130);u.addColorStop(0,"rgba(255, 245, 205, 0.72)"),u.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),u.addColorStop(1,"rgba(255, 140, 40, 0.0)"),a.fillStyle=u,a.beginPath(),a.arc(l,c,130,0,Math.PI*2),a.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((_,m)=>{a.save(),a.translate(l,c),a.rotate(_+.18);const p=m===0?242:210,x=a.createLinearGradient(-p,0,p,0);x.addColorStop(0,"rgba(255, 210, 120, 0.0)"),x.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),x.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),x.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),x.addColorStop(1,"rgba(255, 210, 120, 0.0)"),a.fillStyle=x,a.beginPath(),a.ellipse(0,0,p,3.2,0,0,Math.PI*2),a.fill(),a.restore()});const d=new _n(o);d.colorSpace=dt;const f=new Ou({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:Vt}),g=new yg(f);g.name="Solar_Diffraction_Rays",g.scale.set(6.4,6.4,1),t&&(t.add(r),t.add(g))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,r)=>{this.gltfLoader.load(e,o=>i(o),void 0,o=>r(o))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const r=Array.isArray(i.material)?i.material:[i.material];for(const o of r)o&&o.emissiveIntensity!==void 0&&o.emissiveIntensity>3.2&&(o.emissiveIntensity=2.2+Math.log10(o.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(Gv)){const r=t.getObjectByName(i.spinnerName),o=t.getObjectByName(i.rootName),a=t.getObjectByName(i.bodyName);if(!o)continue;const c=new dn().setFromQuaternion(r?r.quaternion:new vt,"YXZ").y||0,u=[];let h=0;o.children.forEach(m=>{if(m.name.includes("Moon")&&!m.name.endsWith("_Orbit")){if(m.traverse(p=>{p.isMesh&&p.material&&(p.material.fog=!1)}),n==="p1"){const p=i.localRadius*(1.95+h*.65),x=p*(.22+h*.14),M=h===0?-1.85:-.78;m.position.set(Math.cos(M)*p,x,Math.sin(M)*p),u.push({node:m,baseRadius:p,angle:M,yOffset:x,speed:.014+h*.008})}else m.position.multiplyScalar(1.65),m.position.length()<i.localRadius*1.6&&m.position.normalize().multiplyScalar(i.localRadius*1.65),u.push({node:m,baseRadius:m.position.length(),angle:Math.atan2(m.position.z,m.position.x),yOffset:m.position.y,speed:.06+Math.random()*.08});h++}});let d=null,f=null;i.landable?(o.traverse(m=>{m!==o&&m.isMesh&&(m.name.includes("_Body")||m.name.includes("_Atmosphere")||m.name.includes("_Clouds")||m.name.includes("_DarkClouds")||/^Planet_01/i.test(m.name))&&(m.visible=!1)}),d=yv(i,hi),o.add(d.group),f=d.atmosphere):(f=Qu(i,i.localRadius,1.05),o.add(f));const g=new Rt;g.name=`${i.id}_Atmosphere_Surface_Detail`,g.visible=!1,o.add(g),this.orbitalGroup.updateMatrixWorld(!0);const _=new E;o.getWorldPosition(_),this.planetNodes.set(n,{config:i,spinner:r,root:o,body:a,orbitalBundle:d,atmosphereShell:f,surfaceCapGroup:g,surfaceLoaded:!1,surfaceLoading:!1,animators:[],orbitAngle:c,prevWorldPos:_.clone(),currWorldPos:_.clone(),planetDeltaPos:new E,moonOrbits:u})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95,2.15,2.35),this.controls.setPose(new E(0,1190,4270),new E(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded||t.surfaceLoading)return;t.surfaceLoading=!0;const n=t.config;try{if(n.hasProceduralWorld){const i=Dv(n);t.surfaceCapGroup.add(i.group);const r=Vv(n.localRadius,i);t.surfaceCapGroup.add(r.group),t.animators.push(r)}else if(n.surfaceUrl){const i=await this._loadGLB(n.surfaceUrl);if(bv(i,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(i),n.id==="p2"||n.id==="p4"){const r=Sv(n,1400);t.surfaceCapGroup.add(r);const o=Uv(n.id,n.localRadius,350);t.surfaceCapGroup.add(o.group),t.animators.push(o),n.id==="p2"?t.animators.push(Fv(i)):t.animators.push(Ov(i))}else if(n.id==="p3"){const r=Bv(n.localRadius);t.surfaceCapGroup.add(r.group),t.animators.push(r)}}t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}}_showTransitionBanner(e,t,n,i=1500){const r=document.getElementById("hud-transition-banner"),o=document.getElementById("banner-subtitle"),a=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");o&&(o.textContent=e),a&&(a.textContent=t),r&&r.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{r&&r.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){document.querySelectorAll(".nav-btn").forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){const t=String(e);if(this._highlightActiveNavButton(t),t==="1"){this.controls.engageAutopilot({getTargetPose:()=>({targetPos:new E(0,1280,4380),lookAtPos:new E(0,0,0),upVec:new E(0,1,0)}),duration:3.4});return}if(t==="2"){if(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor)return;this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const d=new E;return this.crystalPalaceAnchor.getWorldPosition(d),{targetPos:d.clone().add(new E(0,18,74)),lookAtPos:d,upVec:new E(0,1,0)}},duration:3.6});return}const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const r=this.planetNodes.get(i);if(!r)return;await this.ensurePlanetSurfaceLoaded(i);const o=r.config,a=new E;r.root.getWorldPosition(a);const l=this.camera.position.distanceTo(a),c=o.localRadius*Ps,u=c*hi,h=l-c;if(h>u*1.1){const d=Ae.clamp(l/820,3,5.2);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.lowOrbitOffset.clone().applyMatrix4(r.root.matrixWorld),lookAtPos:o.lowOrbitLookAt.clone().applyMatrix4(r.root.matrixWorld),upVec:new E(0,1,0)}),duration:d});return}if(h>u*.24){const d=this.camera.position.clone();this.orbitalGroup.updateMatrixWorld(!0);const f=new Fe().copy(r.root.matrixWorld).invert();d.applyMatrix4(f);const g=[d];d.distanceTo(o.highCloudOffset)>o.localRadius*.25&&h>u*.85&&g.push(o.highCloudOffset.clone());const _=o.highCloudOffset.clone().lerp(o.aerialOffset,.55).normalize().multiplyScalar(o.localRadius*(1+hi*.42)),m=o.highCloudOffset.clone().lerp(o.aerialOffset,.82).normalize().multiplyScalar(o.localRadius*(1+hi*.16));g.push(_,m,o.aerialOffset.clone());const p=new ja(g);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.6,getTargetPose:(x,M)=>{this.orbitalGroup.updateMatrixWorld(!0);const v=p.getPoint(x),T=o.aerialLookAt.clone().lerp(o.lowOrbitLookAt,Math.pow(1-x,1.8)*.45),A=p.getPoint(Math.min(1,x+.08)).lerp(T,Math.min(1,x*1.15+.2));return{targetPos:v.applyMatrix4(r.root.matrixWorld),lookAtPos:A.applyMatrix4(r.root.matrixWorld),upVec:new E(0,1,0)}}});return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.aerialOffset.clone().applyMatrix4(r.root.matrixWorld),lookAtPos:o.aerialLookAt.clone().applyMatrix4(r.root.matrixWorld),upVec:new E(0,1,0)}),duration:2.6})}update(e){const t=Math.min(e,.1);this.elapsedTime+=t,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),Ju.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,_]of this.planetNodes){const m=_.config;_.prevWorldPos.copy(_.currWorldPos),_.orbitAngle+=t*m.orbitOmega;const p=m.semiMajorAxis,x=m.eccentricity||.04,M=p*(1-x*x)/(1+x*Math.cos(_.orbitAngle));_.spinner&&(_.spinner.rotation.y=_.orbitAngle),_.root.position.set(M,0,0);for(const v of _.moonOrbits)v.angle+=t*v.speed,v.node.position.set(Math.cos(v.angle)*v.baseRadius,v.yOffset,Math.sin(v.angle)*v.baseRadius);_.orbitalBundle?(_.orbitalBundle.cloudMesh.rotation.y+=t*m.rotationSpeed,_.orbitalBundle.upperCloudMesh.rotation.y+=t*m.rotationSpeed*1.4,_.orbitalBundle.lowerCloudGroup.rotation.y+=t*m.rotationSpeed*.7):_.body&&(_.body.rotation.y+=t*m.rotationSpeed)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=t*.06),this.orbitalGroup.updateMatrixWorld(!0);let n="Sol Central",i=Math.max(0,this.camera.position.length()-2.6*Ps),r=12e3,o=null,a=null,l=99999;for(const[_,m]of this.planetNodes){m.root.getWorldPosition(m.currWorldPos),m.planetDeltaPos.copy(m.currWorldPos).sub(m.prevWorldPos);const p=m.config.localRadius*Ps,x=p*hi,M=this.camera.position.distanceTo(m.currWorldPos),v=M-p,T=v/x;if(m.atmosphereShell&&m.atmosphereShell.material.uniforms){const R=m.atmosphereShell.material.uniforms;R.uSunPosition.value.set(0,0,0);const A=Ae.smoothstep(T,0,.85);R.uAltitudeFade.value=Ae.lerp(.18,1,A)}if(m.config.landable){!m.surfaceLoaded&&!m.surfaceLoading&&M<p*4.5&&this.ensurePlanetSurfaceLoaded(_),m.surfaceCapGroup.scale.setScalar(1);const R=T<.56;if(m.surfaceCapGroup.visible=R,R)for(const A of m.animators)A.update(this.elapsedTime);if(m.orbitalBundle){const A=m.orbitalBundle,P=Ae.smoothstep(T,.52,.96);if(A.cloudMesh.material.opacity=P,A.cloudMesh.visible=P>.01,T>.62&&T<1.24){const b=Math.exp(-Math.pow((T-.95)/.14,2))*.55;A.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(m.currWorldPos),A.upperCloudMesh.material.uniforms.uOpacity.value=b,A.upperCloudMesh.visible=b>.01}else A.upperCloudMesh.visible=!1;if(T<1.15){const b=1-Ae.smoothstep(T,.58,1.12),y=Ae.smoothstep(T,.24,.38),L=b*Ae.lerp(.42,.96,y);A.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(m.currWorldPos),A.lowerCloudMesh.material.uniforms.uOpacity.value=L;const F=Math.exp(-Math.pow((T-.42)/.13,2))*.85;A.lowerCloudPuffs.material.opacity=Math.max(b*.25,F),A.lowerCloudGroup.visible=L>.01||A.lowerCloudPuffs.material.opacity>.01}else A.lowerCloudGroup.visible=!1}}v<i&&(i=Math.max(0,v),n=m.config.name,r=m.config.kmScale),v<l&&(l=v,a=m,o=_)}if(this.crystalPalaceAnchor){const _=new E;this.crystalPalaceAnchor.getWorldPosition(_);const m=Math.max(0,this.camera.position.distanceTo(_)-12);m<i&&(i=m,n="Estación Crystal Palace",r=850)}let c=!1,u=!1,h=null,d=220,f=220*hi,g=.95;if(a){const _=a.config;d=_.localRadius*Ps,f=d*hi,g=_.groundFloorAlt??.95;const m=f*1.25,p=l/f;if(l<m&&(u=!0,h=a.planetDeltaPos),_.landable&&p<1.06){c=p<=1,this.currentDominantPlanet=c?_:null,c&&this.lastBannerPlanetId!==_.id&&(this.lastBannerPlanetId=_.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${_.name.toUpperCase()}`,_.glowCss,1700),_.navKey&&this._highlightActiveNavButton(_.navKey));const x=Ae.clamp(1-p,0,1),M=1-Ae.smoothstep(p,.92,1.06),v=1-Ae.smoothstep(x,.04,.25);for(const Z of this.orbitLines)Z.material.opacity=Z.baseOpacity*v,Z.mesh.visible=v>.01;const T=this.camera.position.clone().sub(a.currWorldPos).normalize(),R=this.camera.position.clone().negate().normalize(),A=-Math.sqrt(Math.max(0,1-Math.pow(d/Math.max(d,d+l),2))),P=Ae.smoothstep(x,.01,.36),b=this.skyDome.material.uniforms;if(_.skyDome&&(b.uLocalUp.value.copy(T),b.uSunDir.value.copy(R),b.uZenithColor.value.setHex(_.skyDome.zenith),b.uMidColor.value.setHex(_.skyDome.mid),b.uHorizonColor.value.setHex(_.skyDome.horizon),b.uSunGlowColor.value.setHex(_.skyDome.sunGlow),b.uZenithAlpha.value=_.skyDome.zenithAlpha,b.uHorizonDot.value=A,b.uAtmoOpacity.value=P,this.skyDome.visible=P>.005,this.starfield.userData.setStarVisibility)){const Z=Ae.lerp(1,_.skyDome.starFloor,Ae.smoothstep(x,.06,.42));this.starfield.userData.setStarVisibility(Z)}const y=x>.32;for(const[Z,se]of this.planetNodes)se.root.visible=y?Z===o:!0;const L=1-Ae.smoothstep(p,.45,.98),F=new re(198156),D=new re(_.skyColor);this.scene.background=F.clone().lerp(D,L*.9);const W=_.maxFogDensity*(1-Ae.smoothstep(p,.16,.85)),X=.02*Math.exp(-Math.pow((p-.43)/.11,2)),V=.0028*Math.exp(-Math.pow((p-.94)/.12,2)),Q=_.id==="p1"?.0024*(1-Ae.smoothstep(p,0,.09)):0,k=(W+X+V+Q)*M;this.scene.fog?(this.scene.fog.color.setHex(_.fogColor),this.scene.fog.density=k):this.scene.fog=new Wa(_.fogColor,k);const oe=_.id==="p1"?1-.34*(1-Ae.smoothstep(p,0,.12)):1,ae=_.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1;this.planetaryDirLight.color.setHex(_.sunColor),this.planetaryDirLight.intensity=Ae.lerp(1.4,_.sunIntensity,x)*oe,this.hemiLight.color.lerp(new re(_.hemiSkyColor),x*.28),this.hemiLight.groundColor.lerp(new re(_.hemiGroundColor),x*.28),this.hemiLight.intensity=Ae.lerp(.42,_.hemiIntensity,x),this.ambientLight.color.lerp(new re(_.ambientColor),x*.28),this.ambientLight.intensity=Ae.lerp(.55,_.ambientIntensity,x)*oe;const pe=1-Ae.smoothstep(p,.05,.45);this.localAtmoLight.color.setHex(_.localLightColor),this.localAtmoLight.intensity=pe*5.2*ae,this.localAtmoLight.position.copy(this.camera.position).addScaledVector(T,18),this.localBounceLight.color.setHex(_.localBounceColor),this.localBounceLight.intensity=pe*4.8*ae,this.localBounceLight.position.copy(this.camera.position).addScaledVector(T,-8),this.bloomPass&&(this.bloomPass.strength=Ae.lerp(.55,_.bloomStrength*ae,pe));const Te=Math.exp(-Math.pow((p-.78)/.2,2))*.85,ke=Math.exp(-Math.pow((p-.4)/.14,2))*.55;this.cockpitParticles.setAtmosphereStyle(_.particleColor,Math.max(Te,ke))}}if(a&&l/f>=1.06&&(c=!1),this.mode=c?"SURFACE":"ORBIT",!a||!a.config.landable||l/f>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const _ of this.orbitLines)_.material.opacity=_.baseOpacity,_.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,_]of this.planetNodes)_.root.visible=!0;this.scene.background.lerp(new re(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.hemiLight.color.lerp(new re(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new re(1053724),Math.min(1,t*3)),this.hemiLight.intensity=Ae.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new re(1844790),Math.min(1,t*3)),this.ambientLight.intensity=Ae.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=Ae.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=Ae.lerp(this.localBounceLight.intensity,0,.15),this.bloomPass&&(this.bloomPass.strength=Ae.lerp(this.bloomPass.strength,.55,.1)),this.cockpitParticles.setAtmosphereStyle(8965375,0)}if(this.controls.setAltitudeContext({surfaceAltitude:l,planetRadius:d,atmoTopAlt:f,groundFloorAlt:g,planetCenter:a?a.currWorldPos:null,hasPlanet:!!a,inGravityWell:u,planetDeltaPos:h}),c&&this.currentDominantPlanet){const _=Math.max(0,Math.round((l-g)*115));this.onStatusUpdate({modeText:"ATMOSFÉRICO",isSurface:!0,sectorName:this.currentDominantPlanet.name.toUpperCase(),nearestText:`${this.currentDominantPlanet.name}`,altitudeText:`${_.toLocaleString("es-ES")} m`})}else{const _=Math.max(1,Math.round(i*(r/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${n} · ${_.toLocaleString("es-ES")} km`,altitudeText:`${_.toLocaleString("es-ES")} km`})}}}const th=document.getElementById("app-canvas"),Hc=document.getElementById("loading-screen"),Rr=document.getElementById("loading-status"),Wc=document.getElementById("loading-bar-fill"),Bo=document.getElementById("hud-mode"),Xc=document.getElementById("hud-sector"),qc=document.getElementById("hud-nearest"),Yc=document.getElementById("hud-altitude"),Kc=document.getElementById("hud-speed"),jc=document.getElementById("hud-speed-unit"),Zc=document.getElementById("hud-speed-bar"),$c=document.getElementById("hud-mult"),zo=document.getElementById("hud-boost"),Jc=document.getElementById("hud-coords"),Ys=new Mg;Ys.background=new re(198156);const ni=new Ot(62,window.innerWidth/window.innerHeight,.05,12e4);Ys.add(ni);const Ti=new xg({canvas:th,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});Ti.setSize(window.innerWidth,window.innerHeight);Ti.setPixelRatio(Math.min(window.devicePixelRatio,2));Ti.outputColorSpace=dt;Ti.toneMapping=Da;Ti.toneMappingExposure=1.08;const Ks=new T_(Ti),Wv=new E_(Ys,ni);Ks.addPass(Wv);const sl=new cs(new Me(window.innerWidth,window.innerHeight),.55,.35,.95);Ks.addPass(sl);const Xv=new C_;Ks.addPass(Xv);const nh=R_(8500,52e3);Ys.add(nh);const ih=new P_(ni,420),pi=new L_(ni,th),gn=new Hv({scene:Ys,camera:ni,controls:pi,starfield:nh,cockpitParticles:ih,bloomPass:sl,onStatusUpdate:s=>{Bo&&(Bo.textContent=s.modeText,Bo.className=`hud-value ${s.isSurface?"mode-atmo":"mode-orbit"}`),Xc&&(Xc.textContent=s.sectorName),qc&&(qc.textContent=s.nearestText),Yc&&(Yc.textContent=s.altitudeText)}});document.querySelectorAll(".nav-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.target;t&&gn.navigateToTarget(t)})});window.addEventListener("keydown",s=>{["Digit1","Numpad1"].includes(s.code)&&gn.navigateToTarget("1"),["Digit2","Numpad2"].includes(s.code)&&gn.navigateToTarget("2"),["Digit3","Numpad3"].includes(s.code)&&gn.navigateToTarget("3"),["Digit4","Numpad4"].includes(s.code)&&gn.navigateToTarget("4"),["Digit5","Numpad5"].includes(s.code)&&gn.navigateToTarget("5"),["Digit6","Numpad6"].includes(s.code)&&gn.navigateToTarget("6")});window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;ni.aspect=s/e,ni.updateProjectionMatrix(),Ti.setSize(s,e),Ks.setSize(s,e),sl.resolution.set(s,e)});async function qv(){try{await gn.init((s,e)=>{Wc&&(Wc.style.width=`${s}%`),Rr&&(Rr.textContent=e)})}catch(s){console.error("Error inicializando simulador:",s),Rr&&(Rr.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{Hc&&Hc.classList.add("hidden")},300)}}const Yv=new Yu;function sh(){requestAnimationFrame(sh);const s=Yv.getDelta();gn.update(s),pi.update(s);const e=pi.getCurrentSpeed(),t=pi.getPulseRatio();ih.update(s,e,t);const n=gn.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(Kc&&(Kc.textContent=i),jc&&(jc.textContent=n?"km/s":"m/s"),Zc){const r=(n?1400:120)*pi.speedMultiplier,o=Math.min(100,e/Math.max(1,r)*100);Zc.style.width=`${o}%`}if($c&&($c.textContent=`x${pi.speedMultiplier.toFixed(1)}`),zo){const r=t>.1;zo.textContent=pi.autopilot?"PILOTO AUTO":r?"MOTOR PULSE":"EN ESPERA",zo.className=r?"status-active":"status-standby"}if(Jc){const r=ni.position;Jc.textContent=`${r.x.toFixed(0)}, ${r.y.toFixed(0)}, ${r.z.toFixed(0)}`}Ks.render()}qv();sh();
