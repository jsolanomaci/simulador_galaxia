(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="170",Iu=0,Il=1,Du=2,Eh=1,Nu=2,jn=3,Bn=0,Qt=1,zt=2,Jn=0,hs=1,Yt=2,Dl=3,Nl=4,Uu=5,Di=100,Fu=101,Ou=102,Bu=103,zu=104,ku=200,Gu=201,Vu=202,Hu=203,ca=204,ha=205,Wu=206,Xu=207,qu=208,Yu=209,Ku=210,ju=211,Zu=212,$u=213,Qu=214,ua=0,da=1,fa=2,gs=3,pa=4,ma=5,ga=6,_a=7,Th=0,Ju=1,ed=2,xi=0,Ah=1,Ch=2,Rh=3,sl=4,td=5,Ph=6,Lh=7,Ul="attached",nd="detached",Ih=300,_s=301,xs=302,xa=303,va=304,ho=306,vs=1e3,gi=1001,so=1002,on=1003,Dh=1004,Zs=1005,fn=1006,Zr=1007,$n=1008,ni=1009,Nh=1010,Uh=1011,sr=1012,rl=1013,Oi=1014,Rn=1015,ei=1016,ol=1017,al=1018,Ms=1020,Fh=35902,Oh=1021,Bh=1022,Sn=1023,zh=1024,kh=1025,us=1026,ys=1027,ll=1028,cl=1029,Gh=1030,hl=1031,ul=1033,$r=33776,Qr=33777,Jr=33778,eo=33779,Ma=35840,ya=35841,Sa=35842,ba=35843,wa=36196,Ea=37492,Ta=37496,Aa=37808,Ca=37809,Ra=37810,Pa=37811,La=37812,Ia=37813,Da=37814,Na=37815,Ua=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,to=36492,Ga=36494,Va=36495,Vh=36283,Ha=36284,Wa=36285,Xa=36286,rr=2300,or=2301,xo=2302,Fl=2400,Ol=2401,Bl=2402,id=2500,sd=0,Hh=1,qa=2,rd=3200,od=3201,Wh=0,ad=1,mi="",Ct="srgb",en="srgb-linear",uo="linear",Rt="srgb",Vi=7680,zl=519,ld=512,cd=513,hd=514,Xh=515,ud=516,dd=517,fd=518,pd=519,Ya=35044,kl="300 es",Qn=2e3,ro=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const Js=Math.PI/180,Ss=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function dl(s,e){return(s%e+e)%e}function md(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gd(s,e,t){return s!==e?(t-s)/(e-s):0}function er(s,e,t){return(1-t)*s+t*e}function _d(s,e,t,n){return er(s,e,1-Math.exp(-t*n))}function xd(s,e=1){return e-Math.abs(dl(s,e*2)-e)}function vd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Md(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function yd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sd(s,e){return s+Math.random()*(e-s)}function bd(s){return s*(.5-Math.random())}function wd(s){s!==void 0&&(Gl=s);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ed(s){return s*Js}function Td(s){return s*Ss}function Ad(s){return(s&s-1)===0&&s!==0}function Cd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Q={DEG2RAD:Js,RAD2DEG:Ss,generateUUID:Pn,clamp:qt,euclideanModulo:dl,mapLinear:md,inverseLerp:gd,lerp:er,damp:_d,pingpong:xd,smoothstep:vd,smootherstep:Md,randInt:yd,randFloat:Sd,randFloatSpread:bd,seededRandom:wd,degToRad:Ed,radToDeg:Td,isPowerOfTwo:Ad,ceilPowerOfTwo:Cd,floorPowerOfTwo:Rd,setQuaternionFromProperEuler:Pd,normalize:Pt,denormalize:Cn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,i,r,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],S=i[2],w=i[5],T=i[8];return r[0]=o*_+a*v+l*S,r[3]=o*m+a*y+l*w,r[6]=o*p+a*x+l*T,r[1]=c*_+h*v+u*S,r[4]=c*m+h*y+u*w,r[7]=c*p+h*x+u*T,r[2]=d*_+f*v+g*S,r[5]=d*m+f*y+g*w,r[8]=d*p+f*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new lt;function qh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ld(){const s=ar("canvas");return s.style.display="block",s}const Vl={};function $s(s){s in Vl||(Vl[s]=!0,console.warn(s))}function Id(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Dd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?uo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Hl=[.64,.33,.3,.6,.15,.06],Wl=[.2126,.7152,.0722],Xl=[.3127,.329],ql=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[en]:{primaries:Hl,whitePoint:Xl,transfer:uo,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:Wl,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Hl,whitePoint:Xl,transfer:Rt,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:Wl,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let Hi;class Ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=ar("canvas")),Hi.width=e.width,Hi.height=e.height;const n=Hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Mo(i[o].image)):r.push(Mo(i[o]))}else r=Mo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Mo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ud.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Od=0;class Vt extends Rs{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=gi,i=gi,r=fn,o=$n,a=Sn,l=ni,c=Vt.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Pn(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Ih;Vt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,S=(p+1)/2,w=(h+d)/4,T=(u+_)/4,A=(g+m)/4;return y>x&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=T/n):x>S?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=A/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=A/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bd extends Rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Bd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kh extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zd extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),w=Math.atan2(S,p*v);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const x=a*v;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new E,Kl=new ut;class ii{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),mr.subVectors(this.max,Os),Wi.subVectors(e.a,Os),Xi.subVectors(e.b,Os),qi.subVectors(e.c,Os),ai.subVectors(Xi,Wi),li.subVectors(qi,Xi),bi.subVectors(Wi,qi);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-bi.z,bi.y,ai.z,0,-ai.x,li.z,0,-li.x,bi.z,0,-bi.x,-ai.y,ai.x,0,-li.y,li.x,0,-bi.y,bi.x,0];return!So(t,Wi,Xi,qi,mr)||(t=[1,0,0,0,1,0,0,0,1],!So(t,Wi,Xi,qi,mr))?!1:(gr.crossVectors(ai,li),t=[gr.x,gr.y,gr.z],So(t,Wi,Xi,qi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new E,new E,new E,new E,new E,new E,new E,new E],En=new E,pr=new ii,Wi=new E,Xi=new E,qi=new E,ai=new E,li=new E,bi=new E,Os=new E,mr=new E,gr=new E,wi=new E;function So(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const kd=new ii,Bs=new E,bo=new E;class zn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(bo)),this.expandByPoint(Bs.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new E,wo=new E,_r=new E,ci=new E,Eo=new E,xr=new E,To=new E;class fo{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wo.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(wo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=ci.dot(this.direction),l=-ci.dot(_r),c=ci.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wo).addScaledVector(_r,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){Eo.subVectors(t,e),xr.subVectors(n,e),To.crossVectors(Eo,xr);let o=this.direction.dot(To),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(xr.crossVectors(ci,xr));if(l<0)return null;const c=a*this.direction.dot(Eo.cross(ci));if(c<0||l+c>o)return null;const h=-a*ci.dot(To);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gd,e,Vd)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),hi.crossVectors(n,hn),hi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),hi.crossVectors(n,hn)),hi.normalize(),vr.crossVectors(hn,hi),i[0]=hi.x,i[4]=vr.x,i[8]=hn.x,i[1]=hi.y,i[5]=vr.y,i[9]=hn.y,i[2]=hi.z,i[6]=vr.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],S=n[15],w=i[0],T=i[4],A=i[8],M=i[12],b=i[1],P=i[5],N=i[9],I=i[13],B=i[2],z=i[6],U=i[10],H=i[14],D=i[3],te=i[7],he=i[11],me=i[15];return r[0]=o*w+a*b+l*B+c*D,r[4]=o*T+a*P+l*z+c*te,r[8]=o*A+a*N+l*U+c*he,r[12]=o*M+a*I+l*H+c*me,r[1]=h*w+u*b+d*B+f*D,r[5]=h*T+u*P+d*z+f*te,r[9]=h*A+u*N+d*U+f*he,r[13]=h*M+u*I+d*H+f*me,r[2]=g*w+_*b+m*B+p*D,r[6]=g*T+_*P+m*z+p*te,r[10]=g*A+_*N+m*U+p*he,r[14]=g*M+_*I+m*H+p*me,r[3]=v*w+y*b+x*B+S*D,r[7]=v*T+y*P+x*z+S*te,r[11]=v*A+y*N+x*U+S*he,r[15]=v*M+y*I+x*H+S*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,S=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,w=t*v+n*y+i*x+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=v*T,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=y*T,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=x*T,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=S*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,y=l*h,x=l*u,S=n.x,w=n.y,T=n.z;return i[0]=(1-(_+p))*S,i[1]=(f+x)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+y)*T,i[9]=(m-v)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Yi.set(i[0],i[1],i[2]).length();const o=Yi.set(i[4],i[5],i[6]).length(),a=Yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/r,h=1/o,u=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Qn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ro)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Qn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let g,_;if(a===Qn)g=(o+r)*u,_=-2*u;else if(a===ro)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new E,Tn=new Je,Gd=new E(0,0,0),Vd=new E(1,1,1),hi=new E,vr=new E,hn=new E,jl=new Je,Zl=new ut;class Dn{constructor(e=0,t=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const $l=new E,Ki=new ut,Xn=new Je,Mr=new E,zs=new E,Wd=new E,Xd=new ut,Ql=new E(1,0,0),Jl=new E(0,1,0),ec=new E(0,0,1),tc={type:"added"},qd={type:"removed"},ji={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Et extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new E,t=new Dn,n=new ut,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new lt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(zs,Mr,this.up):Xn.lookAt(Mr,zs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Xn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tc),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qd),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new E(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new E,qn=new E,Co=new E,Yn=new E,Zi=new E,$i=new E,nc=new E,Ro=new E,Po=new E,Lo=new E,Io=new wt,Do=new wt,No=new wt;class Mn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),qn.subVectors(n,t),Co.subVectors(e,t);const o=An.dot(An),a=An.dot(qn),l=An.dot(Co),c=qn.dot(qn),h=qn.dot(Co),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Io.setScalar(0),Do.setScalar(0),No.setScalar(0),Io.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),No.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Io,r.x),o.addScaledVector(Do,r.y),o.addScaledVector(No,r.z),o}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),qn.subVectors(e,t),An.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),An.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Zi.subVectors(i,n),$i.subVectors(r,n),Ro.subVectors(e,n);const l=Zi.dot(Ro),c=$i.dot(Ro);if(l<=0&&c<=0)return t.copy(n);Po.subVectors(e,i);const h=Zi.dot(Po),u=$i.dot(Po);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Zi,o);Lo.subVectors(e,r);const f=Zi.dot(Lo),g=$i.dot(Lo);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($i,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return nc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(nc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Zi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Uo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=dl(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Uo(o,r,e+1/3),this.g=Uo(o,r,e),this.b=Uo(o,r,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return _t.fromWorkingColorSpace($t.copy(this),e),Math.round(qt($t.r*255,0,255))*65536+Math.round(qt($t.g*255,0,255))*256+Math.round(qt($t.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,r=$t.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ct){_t.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(yr);const n=er(ui.h,yr.h,t),i=er(ui.s,yr.s,t),r=er(ui.l,yr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ie;ie.NAMES=Zh;let Yd=0;class In extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Pn(),this.name="",this.blending=hs,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pn extends In{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new E,Sr=new Ce;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class $h extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qh extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kd=0;const _n=new Je,Fo=new Et,Qi=new E,un=new ii,ks=new ii,Xt=new E;class St extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Qh:$h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(un.min,ks.min),un.expandByPoint(Xt),Xt.addVectors(un.max,ks.max),un.expandByPoint(Xt)):(un.expandByPoint(ks.min),un.expandByPoint(ks.max))}un.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Xt.add(Qi)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new E,l[A]=new E;const c=new E,h=new E,u=new E,d=new Ce,f=new Ce,g=new Ce,_=new E,m=new E;function p(A,M,b){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[A].add(_),a[M].add(_),a[b].add(_),l[A].add(m),l[M].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,M=v.length;A<M;++A){const b=v[A],P=b.start,N=b.count;for(let I=P,B=P+N;I<B;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new E,x=new E,S=new E,w=new E;function T(A){S.fromBufferAttribute(i,A),w.copy(S);const M=a[A];y.copy(M),y.sub(S.multiplyScalar(S.dot(M))).normalize(),x.crossVectors(w,M);const P=x.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,P)}for(let A=0,M=v.length;A<M;++A){const b=v[A],P=b.start,N=b.count;for(let I=P,B=P+N;I<B;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new Je,Ei=new fo,br=new zn,sc=new E,wr=new E,Er=new E,Tr=new E,Oo=new E,Ar=new E,rc=new E,Cr=new E;class dt extends Et{constructor(e=new St,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,e),o?Ar.addScaledVector(Oo,h):Ar.addScaledVector(Oo.sub(t),h))}t.add(Ar)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(br.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(br,sc)===null||Ei.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ic.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(ic),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const w=a.getX(x),T=a.getX(x+1),A=a.getX(x+2);i=Rr(this,p,e,n,c,h,u,w,T,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Rr(this,o,e,n,c,h,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const w=x,T=x+1,A=x+2;i=Rr(this,p,e,n,c,h,u,w,T,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;i=Rr(this,o,e,n,c,h,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jd(s,e,t,n,i,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bn,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:s}}function Rr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,wr),s.getVertexPosition(l,Er),s.getVertexPosition(c,Tr);const h=jd(s,e,t,n,wr,Er,Tr,rc);if(h){const u=new E;Mn.getBarycoord(rc,wr,Er,Tr,u),i&&(h.uv=Mn.getInterpolatedAttribute(i,a,l,c,u,new Ce)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,l,c,u,new Ce)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new E,materialIndex:0};Mn.getNormal(wr,Er,Tr,d.normal),h.face=d,h.barycoord=u}return h}class Kt extends St{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function g(_,m,p,v,y,x,S,w,T,A,M){const b=x/T,P=S/A,N=x/2,I=S/2,B=w/2,z=T+1,U=A+1;let H=0,D=0;const te=new E;for(let he=0;he<U;he++){const me=he*P-I;for(let ze=0;ze<z;ze++){const We=ze*b-N;te[_]=We*v,te[m]=me*y,te[p]=B,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=w>0?1:-1,h.push(te.x,te.y,te.z),u.push(ze/T),u.push(1-he/A),H+=1}}for(let he=0;he<A;he++)for(let me=0;me<T;me++){const ze=d+me+z*he,We=d+me+z*(he+1),ee=d+(me+1)+z*(he+1),se=d+(me+1)+z*he;l.push(ze,We,se),l.push(We,ee,se),D+=6}a.addGroup(f,D,M),f+=D,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=bs(s[t]);for(const i in n)e[i]=n[i]}return e}function Zd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const lr={clone:bs,merge:sn};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends In{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eu extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new E,oc=new Ce,ac=new Ce;class rn extends eu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,oc,ac),t.subVectors(ac,oc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,es=1;class Jd extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(Ji,es,e,t);i.layers=this.layers,this.add(i);const r=new rn(Ji,es,e,t);r.layers=this.layers,this.add(r);const o=new rn(Ji,es,e,t);o.layers=this.layers,this.add(o);const a=new rn(Ji,es,e,t);a.layers=this.layers,this.add(a);const l=new rn(Ji,es,e,t);l.layers=this.layers,this.add(l);const c=new rn(Ji,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tu extends Vt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ef extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kt(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Jn});r.uniforms.tEquirect.value=t;const o=new dt(i,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=fn),new Jd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Bo=new E,tf=new E,nf=new lt;class Pi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bo.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nf.getNormalMatrix(e),i=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new zn,Pr=new E;class fl{constructor(e=new Pi,t=new Pi,n=new Pi,i=new Pi,r=new Pi,o=new Pi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+v).normalize(),n[3].setComponents(l-o,d-h,m-g,x-v).normalize(),n[4].setComponents(l-a,d-u,m-_,x-y).normalize(),t===Qn)n[5].setComponents(l+a,d+u,m+_,x+y).normalize();else if(t===ro)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Pr.x=i.normal.x>0?e.max.x:e.min.x,Pr.y=i.normal.y>0?e.max.y:e.min.y,Pr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sf(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Si extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<c;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,x=v+c*(p+1),S=v+1+c*(p+1),w=v+1+c*p;f.push(y,x,w),f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
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
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,sp=`
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,fm=`#define DISTANCE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
}`,Sm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Em=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:rf,alphahash_pars_fragment:of,alphamap_fragment:af,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:vf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:bf,color_fragment:wf,color_pars_fragment:Ef,color_pars_vertex:Tf,color_vertex:Af,common:Cf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:If,emissivemap_fragment:Df,emissivemap_pars_fragment:Nf,colorspace_fragment:Uf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:$f,envmap_vertex:Gf,fog_vertex:Vf,fog_pars_vertex:Hf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:jf,lights_pars_begin:Zf,lights_toon_fragment:Qf,lights_toon_pars_fragment:Jf,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:_p,morphcolor_vertex:xp,morphnormal_vertex:vp,morphtarget_pars_vertex:Mp,morphtarget_vertex:yp,normal_fragment_begin:Sp,normal_fragment_maps:bp,normal_pars_fragment:wp,normal_pars_vertex:Ep,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Ip,packing:Dp,premultiplied_alpha_fragment:Np,project_vertex:Up,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Hp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:Kp,specularmap_pars_fragment:jp,tonemapping_fragment:Zp,tonemapping_pars_fragment:$p,transmission_fragment:Qp,transmission_pars_fragment:Jp,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:xm,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:ym,meshmatcap_vert:Sm,meshmatcap_frag:bm,meshnormal_vert:wm,meshnormal_frag:Em,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Im,points_frag:Dm,shadow_vert:Nm,shadow_frag:Um,sprite_vert:Fm,sprite_frag:Om},Ae={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},On={basic:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ie(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ie(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:sn([Ae.points,Ae.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:sn([Ae.common,Ae.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:sn([Ae.sprite,Ae.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:sn([Ae.lights,Ae.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};On.physical={uniforms:sn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Lr={r:0,b:0,g:0},Ai=new Dn,Bm=new Je;function zm(s,e,t,n,i,r,o){const a=new ie(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===ho)?(h===void 0&&(h=new dt(new Kt(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:bs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Ai)),h.material.toneMapped=_t.getTransfer(x.colorSpace)!==Rt,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new dt(new Si(2,2),new Gt({name:"BackgroundMaterial",uniforms:bs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=_t.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Lr,Jh(s)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function km(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,P,N,I,B){let z=!1;const U=u(I,N,P);r!==U&&(r=U,c(r.object)),z=f(b,I,N,B),z&&g(b,I,N,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(b,P,N,I),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,P,N){const I=N.wireframe===!0;let B=n[b.id];B===void 0&&(B={},n[b.id]=B);let z=B[P.id];z===void 0&&(z={},B[P.id]=z);let U=z[I];return U===void 0&&(U=d(l()),z[I]=U),U}function d(b){const P=[],N=[],I=[];for(let B=0;B<t;B++)P[B]=0,N[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:I,object:b,attributes:{},index:null}}function f(b,P,N,I){const B=r.attributes,z=P.attributes;let U=0;const H=N.getAttributes();for(const D in H)if(H[D].location>=0){const he=B[D];let me=z[D];if(me===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),he===void 0||he.attribute!==me||me&&he.data!==me.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function g(b,P,N,I){const B={},z=P.attributes;let U=0;const H=N.getAttributes();for(const D in H)if(H[D].location>=0){let he=z[D];he===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));const me={};me.attribute=he,he&&he.data&&(me.data=he.data),B[D]=me,U++}r.attributes=B,r.attributesNum=U,r.index=I}function _(){const b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const N=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;N[b]=1,I[b]===0&&(s.enableVertexAttribArray(b),I[b]=1),B[b]!==P&&(s.vertexAttribDivisor(b,P),B[b]=P)}function v(){const b=r.newAttributes,P=r.enabledAttributes;for(let N=0,I=P.length;N<I;N++)P[N]!==b[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function y(b,P,N,I,B,z,U){U===!0?s.vertexAttribIPointer(b,P,N,B,z):s.vertexAttribPointer(b,P,N,I,B,z)}function x(b,P,N,I){_();const B=I.attributes,z=N.getAttributes(),U=P.defaultAttributeValues;for(const H in z){const D=z[H];if(D.location>=0){let te=B[H];if(te===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){const he=te.normalized,me=te.itemSize,ze=e.get(te);if(ze===void 0)continue;const We=ze.buffer,ee=ze.type,se=ze.bytesPerElement,ge=ee===s.INT||ee===s.UNSIGNED_INT||te.gpuType===rl;if(te.isInterleavedBufferAttribute){const ae=te.data,Ee=ae.stride,Re=te.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<D.locationSize;Ne++)p(D.location+Ne,ae.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<D.locationSize;Ne++)m(D.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Ne=0;Ne<D.locationSize;Ne++)y(D.location+Ne,me/D.locationSize,ee,he,Ee*se,(Re+me/D.locationSize*Ne)*se,ge)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<D.locationSize;ae++)p(D.location+ae,te.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<D.locationSize;ae++)m(D.location+ae);s.bindBuffer(s.ARRAY_BUFFER,We);for(let ae=0;ae<D.locationSize;ae++)y(D.location+ae,me/D.locationSize,ee,he,me*se,me/D.locationSize*ae*se,ge)}}else if(U!==void 0){const he=U[H];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(D.location,he);break;case 3:s.vertexAttrib3fv(D.location,he);break;case 4:s.vertexAttrib4fv(D.location,he);break;default:s.vertexAttrib1fv(D.location,he)}}}}v()}function S(){A();for(const b in n){const P=n[b];for(const N in P){const I=P[N];for(const B in I)h(I[B].object),delete I[B];delete P[N]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const N in P){const I=P[N];for(const B in I)h(I[B].object),delete I[B];delete P[N]}delete n[b.id]}function T(b){for(const P in n){const N=n[P];if(N[b.id]===void 0)continue;const I=N[b.id];for(const B in I)h(I[B].object),delete I[B];delete N[b.id]}}function A(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Gm(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Sn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ni&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!A)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:S,maxSamples:w}}function Hm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Pi,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let S=0;S!==y;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Wm(s){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=_s:a===va&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===va)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ef(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class po extends eu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,lc=[.125,.215,.35,.446,.526,.582],Ni=20,zo=new po,cc=new ie;let ko=null,Go=0,Vo=0,Ho=!1;const Li=(1+Math.sqrt(5))/2,ts=1/Li,hc=[new E(-Li,ts,0),new E(Li,ts,0),new E(-ts,0,Li),new E(ts,0,Li),new E(0,Li,-ts),new E(0,Li,ts),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ko=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Go,Vo),this._renderer.xr.enabled=Ho,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ei,format:Sn,colorSpace:en,depthBuffer:!1},i=dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(r)),this._blurMaterial=qm(r,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i){const a=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cc),h.toneMapping=xi,h.autoClear=!1;const f=new pn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new dt(new Kt,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(cc),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Ir(i,v*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hc[(i-r-1)%hc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let v=0;for(let T=0;T<Ni;++T){const A=T/_,M=Math.exp(-A*A/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],S=3*x*(i>y-cs?i-y+cs:0),w=4*(this._cubeSize-x);Ir(t,S,w,3*x,2*x),l.setRenderTarget(t),l.render(u,zo)}}function Xm(s){const e=[],t=[],n=[];let i=s;const r=s-cs+1+lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-cs?l=lc[o-s+cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,A=w>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(M,_*g*w),y.set(d,m*g*w);const b=[w,w,w,w,w,w];x.set(b,p*g*w)}const S=new St;S.setAttribute("position",new pt(v,_)),S.setAttribute("uv",new pt(y,m)),S.setAttribute("faceIndex",new pt(x,p)),e.push(S),i>cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dc(s,e,t){const n=new Ln(s,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qm(s,e,t){const n=new Float32Array(Ni),i=new E(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fc(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function pc(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function Ym(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xa||l===va,h=l===_s||l===xs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new uc(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new uc(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Km(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jm(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const S=v[y+0],w=v[y+1],T=v[y+2];d.push(S,w,w,T,T,S)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const S=y+0,w=y+1,T=y+2;d.push(S,w,w,T,T,S)}}else return;const m=new(qh(d)?Qh:$h)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Zm(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $m(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qm(s,e,t){const n=new WeakMap,i=new wt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let S=a.attributes.position.count*x,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*w*4*u),A=new Kh(T,S,w,u);A.type=Rn,A.needsUpdate=!0;const M=x*4;for(let P=0;P<u;P++){const N=p[P],I=v[P],B=y[P],z=S*w*4*P;for(let U=0;U<N.count;U++){const H=U*M;g===!0&&(i.fromBufferAttribute(N,U),T[z+H+0]=i.x,T[z+H+1]=i.y,T[z+H+2]=i.z,T[z+H+3]=0),_===!0&&(i.fromBufferAttribute(I,U),T[z+H+4]=i.x,T[z+H+5]=i.y,T[z+H+6]=i.z,T[z+H+7]=0),m===!0&&(i.fromBufferAttribute(B,U),T[z+H+8]=i.x,T[z+H+9]=i.y,T[z+H+10]=i.z,T[z+H+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Ce(S,w)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Jm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class iu extends Vt{constructor(e,t,n,i,r,o,a,l,c,h=us){if(h!==us&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Oi),n===void 0&&h===ys&&(n=Ms),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const su=new Vt,mc=new iu(1,1),ru=new Kh,ou=new zd,au=new tu,gc=[],_c=[],xc=new Float32Array(16),vc=new Float32Array(9),Mc=new Float32Array(4);function Ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=gc[i];if(r===void 0&&(r=new Float32Array(i),gc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function mo(s,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function e0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function t0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Wt(t,e)}}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Wt(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Wt(t,e)}}function s0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;Mc.set(n),s.uniformMatrix2fv(this.addr,!1,Mc),Wt(t,n)}}function r0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;vc.set(n),s.uniformMatrix3fv(this.addr,!1,vc),Wt(t,n)}}function o0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;xc.set(n),s.uniformMatrix4fv(this.addr,!1,xc),Wt(t,n)}}function a0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function l0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Wt(t,e)}}function c0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Wt(t,e)}}function h0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Wt(t,e)}}function u0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function d0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Wt(t,e)}}function f0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Wt(t,e)}}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Wt(t,e)}}function m0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mc.compareFunction=Xh,r=mc):r=su,t.setTexture2D(e||r,i)}function g0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ou,i)}function _0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||au,i)}function x0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ru,i)}function v0(s){switch(s){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}function M0(s,e){s.uniform1fv(this.addr,e)}function y0(s,e){const t=Ps(e,this.size,2);s.uniform2fv(this.addr,t)}function S0(s,e){const t=Ps(e,this.size,3);s.uniform3fv(this.addr,t)}function b0(s,e){const t=Ps(e,this.size,4);s.uniform4fv(this.addr,t)}function w0(s,e){const t=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E0(s,e){const t=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function T0(s,e){const t=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function A0(s,e){s.uniform1iv(this.addr,e)}function C0(s,e){s.uniform2iv(this.addr,e)}function R0(s,e){s.uniform3iv(this.addr,e)}function P0(s,e){s.uniform4iv(this.addr,e)}function L0(s,e){s.uniform1uiv(this.addr,e)}function I0(s,e){s.uniform2uiv(this.addr,e)}function D0(s,e){s.uniform3uiv(this.addr,e)}function N0(s,e){s.uniform4uiv(this.addr,e)}function U0(s,e,t){const n=this.cache,i=e.length,r=mo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||su,r[o])}function F0(s,e,t){const n=this.cache,i=e.length,r=mo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ou,r[o])}function O0(s,e,t){const n=this.cache,i=e.length,r=mo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||au,r[o])}function B0(s,e,t){const n=this.cache,i=e.length,r=mo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ru,r[o])}function z0(s){switch(s){case 5126:return M0;case 35664:return y0;case 35665:return S0;case 35666:return b0;case 35674:return w0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v0(t.type)}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function yc(s,e){s.seq.push(e),s.map[e.id]=e}function H0(s,e,t){const n=s.name,i=n.length;for(Wo.lastIndex=0;;){const r=Wo.exec(n),o=Wo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){yc(t,c===void 0?new k0(a,s,e):new G0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new V0(a),yc(t,u)),t=u}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);H0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Sc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const W0=37297;let X0=0;function q0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const bc=new lt;function Y0(s){_t._getMatrix(bc,_t.workingColorSpace,s);const e=`mat3( ${bc.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(s)){case uo:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+q0(s.getShaderSource(e),o)}else return i}function K0(s,e){const t=Y0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(s,e){let t;switch(e){case Ah:t="Linear";break;case Ch:t="Reinhard";break;case Rh:t="Cineon";break;case sl:t="ACESFilmic";break;case Ph:t="AgX";break;case Lh:t="Neutral";break;case td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new E;function Z0(){_t.getLuminanceCoefficients(Dr);const s=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Q0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qs(s){return s!==""}function Ec(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(s){return s.replace(eg,ng)}const tg=new Map;function ng(s,e){let t=ht[e];if(t===void 0){const n=tg.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}const ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(s){return s.replace(ig,sg)}function sg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cc(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function rg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function og(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ag(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function lg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Th:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case ed:e="ENVMAP_BLENDING_ADD";break}return e}function cg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rg(t),c=og(t),h=ag(t),u=lg(t),d=cg(t),f=$0(t),g=Q0(r),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ht.tonemapping_pars_fragment:"",t.toneMapping!==xi?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,K0("linearToOutputTexel",t.outputColorSpace),Z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Ka(o),o=Ec(o,t),o=Tc(o,t),a=Ka(a),a=Ec(a,t),a=Tc(a,t),o=Ac(o),a=Ac(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,S=Sc(i,i.VERTEX_SHADER,y),w=Sc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,S),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(S).trim(),B=i.getShaderInfoLog(w).trim();let z=!0,U=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,w);else{const H=wc(i,S,"vertex"),D=wc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+H+`
`+D)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(I===""||B==="")&&(U=!1);U&&(P.diagnostics={runnable:z,programLog:N,vertexShader:{log:I,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(S),i.deleteShader(w),A=new no(i,_),M=J0(i,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,W0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let ug=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fg(e),t.set(e,n)),n}}class fg{constructor(e){this.id=ug++,this.code=e,this.usedTimes=0}}function pg(s,e,t,n,i,r,o){const a=new jh,l=new dg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,P,N,I){const B=N.fog,z=I.geometry,U=M.isMeshStandardMaterial?N.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),D=H&&H.mapping===ho?H.image.height:null,te=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=he!==void 0?he.length:0;let ze=0;z.morphAttributes.position!==void 0&&(ze=1),z.morphAttributes.normal!==void 0&&(ze=2),z.morphAttributes.color!==void 0&&(ze=3);let We,ee,se,ge;if(te){const k=On[te];We=k.vertexShader,ee=k.fragmentShader}else We=M.vertexShader,ee=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const ae=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Re=I.isInstancedMesh===!0,Ne=I.isBatchedMesh===!0,ke=!!M.map,Ue=!!M.matcap,Ke=!!H,O=!!M.aoMap,Mt=!!M.lightMap,Ve=!!M.bumpMap,nt=!!M.normalMap,Le=!!M.displacementMap,it=!!M.emissiveMap,Ie=!!M.metalnessMap,L=!!M.roughnessMap,C=M.anisotropy>0,Y=M.clearcoat>0,ne=M.dispersion>0,K=M.iridescence>0,Z=M.sheen>0,Se=M.transmission>0,pe=C&&!!M.anisotropyMap,_e=Y&&!!M.clearcoatMap,He=Y&&!!M.clearcoatNormalMap,oe=Y&&!!M.clearcoatRoughnessMap,ve=K&&!!M.iridescenceMap,Ge=K&&!!M.iridescenceThicknessMap,Pe=Z&&!!M.sheenColorMap,fe=Z&&!!M.sheenRoughnessMap,je=!!M.specularMap,st=!!M.specularColorMap,vt=!!M.specularIntensityMap,F=Se&&!!M.transmissionMap,Me=Se&&!!M.thicknessMap,J=!!M.gradientMap,re=!!M.alphaMap,be=M.alphaTest>0,Te=!!M.alphaHash,X=!!M.extensions;let Fe=xi;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const tt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:ee,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&I._colorsTexture!==null,instancing:Re,instancingColor:Re&&I.instanceColor!==null,instancingMorph:Re&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:en,alphaToCoverage:!!M.alphaToCoverage,map:ke,matcap:Ue,envMap:Ke,envMapMode:Ke&&H.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:Mt,bumpMap:Ve,normalMap:nt,displacementMap:d&&Le,emissiveMap:it,normalMapObjectSpace:nt&&M.normalMapType===ad,normalMapTangentSpace:nt&&M.normalMapType===Wh,metalnessMap:Ie,roughnessMap:L,anisotropy:C,anisotropyMap:pe,clearcoat:Y,clearcoatMap:_e,clearcoatNormalMap:He,clearcoatRoughnessMap:oe,dispersion:ne,iridescence:K,iridescenceMap:ve,iridescenceThicknessMap:Ge,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:je,specularColorMap:st,specularIntensityMap:vt,transmission:Se,transmissionMap:F,thicknessMap:Me,gradientMap:J,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:be,alphaHash:Te,combine:M.combine,mapUv:ke&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:Mt&&_(M.lightMap.channel),bumpMapUv:Ve&&_(M.bumpMap.channel),normalMapUv:nt&&_(M.normalMap.channel),displacementMapUv:Le&&_(M.displacementMap.channel),emissiveMapUv:it&&_(M.emissiveMap.channel),metalnessMapUv:Ie&&_(M.metalnessMap.channel),roughnessMapUv:L&&_(M.roughnessMap.channel),anisotropyMapUv:pe&&_(M.anisotropyMap.channel),clearcoatMapUv:_e&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(M.sheenRoughnessMap.channel),specularMapUv:je&&_(M.specularMap.channel),specularColorMapUv:st&&_(M.specularColorMap.channel),specularIntensityMapUv:vt&&_(M.specularIntensityMap.channel),transmissionMapUv:F&&_(M.transmissionMap.channel),thicknessMapUv:Me&&_(M.thicknessMap.channel),alphaMapUv:re&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(nt||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(ke||re),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===Rt,decodeVideoTextureEmissive:it&&M.emissiveMap.isVideoTexture===!0&&_t.getTransfer(M.emissiveMap.colorSpace)===Rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:X&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X&&M.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(b,M),y(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const b=g[M.type];let P;if(b){const N=On[b];P=lr.clone(N.uniforms)}else P=M.uniforms;return P}function S(M,b){let P;for(let N=0,I=h.length;N<I;N++){const B=h[N];if(B.cacheKey===b){P=B,++P.usedTimes;break}}return P===void 0&&(P=new hg(s,b,M,r),h.push(P)),P}function w(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:A}}function mg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function gg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||gg),n.length>1&&n.sort(d||Rc),i.length>1&&i.sort(d||Rc)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function _g(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Pc,s.set(n,[o])):i>=r.length?(o=new Pc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function xg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ie};break;case"SpotLight":t={position:new E,direction:new E,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":t={color:new ie,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function vg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Mg=0;function yg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Sg(s){const e=new xg,t=vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new Je,o=new Je;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,S=0,w=0,T=0;c.sort(yg);for(let M=0,b=c.length;M<b;M++){const P=c[M],N=P.color,I=P.intensity,B=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*I,u+=N.g*I,d+=N.b*I;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],I);T++}else if(P.isDirectionalLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,D=t.get(P);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,n.directionalShadow[f]=D,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=U,f++}else if(P.isSpotLight){const U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(N).multiplyScalar(I),U.distance=B,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[_]=U;const H=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,H.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=H.matrix,P.castShadow){const D=t.get(P);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=z,x++}_++}else if(P.isRectAreaLight){const U=e.get(P);U.color.copy(N).multiplyScalar(I),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const H=P.shadow,D=t.get(P);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(I),U.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==S||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=S,A.numLightProbes=T,n.version=Mg++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Lc(s){const e=new Sg(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function bg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Lc(s),e.set(i,[a])):r>=o.length?(a=new Lc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class wg extends In{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eg extends In{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function Cg(s,e,t){let n=new fl;const i=new Ce,r=new Ce,o=new wt,a=new wg({depthPacking:od}),l=new Eg,c={},h=t.maxTextureSize,u={[Bn]:Qt,[Qt]:Bn,[zt]:zt},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(w,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Jn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=p!==jn&&this.type===jn,B=p===jn&&this.type!==jn;for(let z=0,U=w.length;z<U;z++){const H=w[z],D=H.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const te=D.getFrameExtents();if(i.multiply(te),r.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,D.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,D.mapSize.y=r.y)),D.map===null||I===!0||B===!0){const me=this.type!==jn?{minFilter:on,magFilter:on}:{};D.map!==null&&D.map.dispose(),D.map=new Ln(i.x,i.y,me),D.map.texture.name=H.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const he=D.getViewportCount();for(let me=0;me<he;me++){const ze=D.getViewport(me);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),N.viewport(o),D.updateMatrices(H,me),n=D.getFrustum(),x(T,A,D.camera,H,this.type)}D.isPointLightShadow!==!0&&this.type===jn&&v(D,A),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,P)};function v(w,T){const A=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ln(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,A,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,A,f,_,null)}function y(w,T,A,M){let b=null;const P=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=A.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=b.uuid,I=T.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let z=B[I];z===void 0&&(z=b.clone(),B[I]=z,T.addEventListener("dispose",S)),b=z}if(b.visible=T.visible,b.wireframe=T.wireframe,M===jn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=s.properties.get(b);N.light=A}return b}function x(w,T,A,M,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const I=e.update(w),B=w.material;if(Array.isArray(B)){const z=I.groups;for(let U=0,H=z.length;U<H;U++){const D=z[U],te=B[D.materialIndex];if(te&&te.visible){const he=y(w,te,M,b);w.onBeforeShadow(s,w,T,A,I,he,D),s.renderBufferDirect(A,null,I,he,w,D),w.onAfterShadow(s,w,T,A,I,he,D)}}}else if(B.visible){const z=y(w,B,M,b);w.onBeforeShadow(s,w,T,A,I,z,null),s.renderBufferDirect(A,null,I,z,w,null),w.onAfterShadow(s,w,T,A,I,z,null)}}const N=w.children;for(let I=0,B=N.length;I<B;I++)x(N[I],T,A,M,b)}function S(w){w.target.removeEventListener("dispose",S);for(const A in c){const M=c[A],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const Rg={[ua]:da,[fa]:ga,[pa]:_a,[gs]:ma,[da]:ua,[ga]:fa,[_a]:pa,[ma]:gs};function Pg(s,e){function t(){let F=!1;const Me=new wt;let J=null;const re=new wt(0,0,0,0);return{setMask:function(be){J!==be&&!F&&(s.colorMask(be,be,be,be),J=be)},setLocked:function(be){F=be},setClear:function(be,Te,X,Fe,tt){tt===!0&&(be*=Fe,Te*=Fe,X*=Fe),Me.set(be,Te,X,Fe),re.equals(Me)===!1&&(s.clearColor(be,Te,X,Fe),re.copy(Me))},reset:function(){F=!1,J=null,re.set(-1,0,0,0)}}}function n(){let F=!1,Me=!1,J=null,re=null,be=null;return{setReversed:function(Te){if(Me!==Te){const X=e.get("EXT_clip_control");Me?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT);const Fe=be;be=null,this.setClear(Fe)}Me=Te},getReversed:function(){return Me},setTest:function(Te){Te?ae(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Te){J!==Te&&!F&&(s.depthMask(Te),J=Te)},setFunc:function(Te){if(Me&&(Te=Rg[Te]),re!==Te){switch(Te){case ua:s.depthFunc(s.NEVER);break;case da:s.depthFunc(s.ALWAYS);break;case fa:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case pa:s.depthFunc(s.EQUAL);break;case ma:s.depthFunc(s.GEQUAL);break;case ga:s.depthFunc(s.GREATER);break;case _a:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=Te}},setLocked:function(Te){F=Te},setClear:function(Te){be!==Te&&(Me&&(Te=1-Te),s.clearDepth(Te),be=Te)},reset:function(){F=!1,J=null,re=null,be=null,Me=!1}}}function i(){let F=!1,Me=null,J=null,re=null,be=null,Te=null,X=null,Fe=null,tt=null;return{setTest:function(k){F||(k?ae(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(k){Me!==k&&!F&&(s.stencilMask(k),Me=k)},setFunc:function(k,ce,ye){(J!==k||re!==ce||be!==ye)&&(s.stencilFunc(k,ce,ye),J=k,re=ce,be=ye)},setOp:function(k,ce,ye){(Te!==k||X!==ce||Fe!==ye)&&(s.stencilOp(k,ce,ye),Te=k,X=ce,Fe=ye)},setLocked:function(k){F=k},setClear:function(k){tt!==k&&(s.clearStencil(k),tt=k)},reset:function(){F=!1,Me=null,J=null,re=null,be=null,Te=null,X=null,Fe=null,tt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,S=null,w=null,T=new ie(0,0,0),A=0,M=!1,b=null,P=null,N=null,I=null,B=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(D)[1]),U=H>=1):D.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),U=H>=2);let te=null,he={};const me=s.getParameter(s.SCISSOR_BOX),ze=s.getParameter(s.VIEWPORT),We=new wt().fromArray(me),ee=new wt().fromArray(ze);function se(F,Me,J,re){const be=new Uint8Array(4),Te=s.createTexture();s.bindTexture(F,Te),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let X=0;X<J;X++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Me+X,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Te}const ge={};ge[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(gs),Ve(!1),nt(Il),ae(s.CULL_FACE),O(Jn);function ae(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Ee(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Re(F,Me){return u[F]!==Me?(s.bindFramebuffer(F,Me),u[F]=Me,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Me),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ne(F,Me){let J=f,re=!1;if(F){J=d.get(Me),J===void 0&&(J=[],d.set(Me,J));const be=F.textures;if(J.length!==be.length||J[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,X=be.length;Te<X;Te++)J[Te]=s.COLOR_ATTACHMENT0+Te;J.length=be.length,re=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,re=!0);re&&s.drawBuffers(J)}function ke(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Ue={[Di]:s.FUNC_ADD,[Fu]:s.FUNC_SUBTRACT,[Ou]:s.FUNC_REVERSE_SUBTRACT};Ue[Bu]=s.MIN,Ue[zu]=s.MAX;const Ke={[ku]:s.ZERO,[Gu]:s.ONE,[Vu]:s.SRC_COLOR,[ca]:s.SRC_ALPHA,[Ku]:s.SRC_ALPHA_SATURATE,[qu]:s.DST_COLOR,[Wu]:s.DST_ALPHA,[Hu]:s.ONE_MINUS_SRC_COLOR,[ha]:s.ONE_MINUS_SRC_ALPHA,[Yu]:s.ONE_MINUS_DST_COLOR,[Xu]:s.ONE_MINUS_DST_ALPHA,[ju]:s.CONSTANT_COLOR,[Zu]:s.ONE_MINUS_CONSTANT_COLOR,[$u]:s.CONSTANT_ALPHA,[Qu]:s.ONE_MINUS_CONSTANT_ALPHA};function O(F,Me,J,re,be,Te,X,Fe,tt,k){if(F===Jn){_===!0&&(Ee(s.BLEND),_=!1);return}if(_===!1&&(ae(s.BLEND),_=!0),F!==Uu){if(F!==m||k!==M){if((p!==Di||x!==Di)&&(s.blendEquation(s.FUNC_ADD),p=Di,x=Di),k)switch(F){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yt:s.blendFunc(s.ONE,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,y=null,S=null,w=null,T.set(0,0,0),A=0,m=F,M=k}return}be=be||Me,Te=Te||J,X=X||re,(Me!==p||be!==x)&&(s.blendEquationSeparate(Ue[Me],Ue[be]),p=Me,x=be),(J!==v||re!==y||Te!==S||X!==w)&&(s.blendFuncSeparate(Ke[J],Ke[re],Ke[Te],Ke[X]),v=J,y=re,S=Te,w=X),(Fe.equals(T)===!1||tt!==A)&&(s.blendColor(Fe.r,Fe.g,Fe.b,tt),T.copy(Fe),A=tt),m=F,M=!1}function Mt(F,Me){F.side===zt?Ee(s.CULL_FACE):ae(s.CULL_FACE);let J=F.side===Qt;Me&&(J=!J),Ve(J),F.blending===hs&&F.transparent===!1?O(Jn):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const re=F.stencilWrite;a.setTest(re),re&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),it(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function nt(F){F!==Iu?(ae(s.CULL_FACE),F!==P&&(F===Il?s.cullFace(s.BACK):F===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),P=F}function Le(F){F!==N&&(U&&s.lineWidth(F),N=F)}function it(F,Me,J){F?(ae(s.POLYGON_OFFSET_FILL),(I!==Me||B!==J)&&(s.polygonOffset(Me,J),I=Me,B=J)):Ee(s.POLYGON_OFFSET_FILL)}function Ie(F){F?ae(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function L(F){F===void 0&&(F=s.TEXTURE0+z-1),te!==F&&(s.activeTexture(F),te=F)}function C(F,Me,J){J===void 0&&(te===null?J=s.TEXTURE0+z-1:J=te);let re=he[J];re===void 0&&(re={type:void 0,texture:void 0},he[J]=re),(re.type!==F||re.texture!==Me)&&(te!==J&&(s.activeTexture(J),te=J),s.bindTexture(F,Me||ge[F]),re.type=F,re.texture=Me)}function Y(){const F=he[te];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){We.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),We.copy(F))}function fe(F){ee.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function je(F,Me){let J=c.get(Me);J===void 0&&(J=new WeakMap,c.set(Me,J));let re=J.get(F);re===void 0&&(re=s.getUniformBlockIndex(Me,F.name),J.set(F,re))}function st(F,Me){const re=c.get(Me).get(F);l.get(Me)!==re&&(s.uniformBlockBinding(Me,re,F.__bindingPointIndex),l.set(Me,re))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,he={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,S=null,w=null,T=new ie(0,0,0),A=0,M=!1,b=null,P=null,N=null,I=null,B=null,We.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ee,bindFramebuffer:Re,drawBuffers:Ne,useProgram:ke,setBlending:O,setMaterial:Mt,setFlipSided:Ve,setCullFace:nt,setLineWidth:Le,setPolygonOffset:it,setScissorTest:Ie,activeTexture:L,bindTexture:C,unbindTexture:Y,compressedTexImage2D:ne,compressedTexImage3D:K,texImage2D:ve,texImage3D:Ge,updateUBOMapping:je,uniformBlockBinding:st,texStorage2D:He,texStorage3D:oe,texSubImage2D:Z,texSubImage3D:Se,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Pe,viewport:fe,reset:vt}}function Ic(s,e,t,n){const i=Lg(n);switch(t){case Oh:return s*e;case zh:return s*e;case kh:return s*e*2;case ll:return s*e/i.components*i.byteLength;case cl:return s*e/i.components*i.byteLength;case Gh:return s*e*2/i.components*i.byteLength;case hl:return s*e*2/i.components*i.byteLength;case Bh:return s*e*3/i.components*i.byteLength;case Sn:return s*e*4/i.components*i.byteLength;case ul:return s*e*4/i.components*i.byteLength;case $r:case Qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jr:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ya:case ba:return Math.max(s,16)*Math.max(e,8)/4;case Ma:case Sa:return Math.max(s,8)*Math.max(e,8)/2;case wa:case Ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case La:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case to:case Ga:case Va:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vh:case Ha:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lg(s){switch(s){case ni:case Nh:return{byteLength:1,components:1};case sr:case Uh:case ei:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Oi:case rl:case Rn:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ig(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return f?new OffscreenCanvas(L,C):ar("canvas")}function _(L,C,Y){let ne=1;const K=Ie(L);if((K.width>Y||K.height>Y)&&(ne=Y/Math.max(K.width,K.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(ne*K.width),Se=Math.floor(ne*K.height);u===void 0&&(u=g(Z,Se));const pe=C?g(Z,Se):u;return pe.width=Z,pe.height=Se,pe.getContext("2d").drawImage(L,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+Se+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(L,C,Y,ne,K=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=C;if(C===s.RED&&(Y===s.FLOAT&&(Z=s.R32F),Y===s.HALF_FLOAT&&(Z=s.R16F),Y===s.UNSIGNED_BYTE&&(Z=s.R8)),C===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Z=s.R8UI),Y===s.UNSIGNED_SHORT&&(Z=s.R16UI),Y===s.UNSIGNED_INT&&(Z=s.R32UI),Y===s.BYTE&&(Z=s.R8I),Y===s.SHORT&&(Z=s.R16I),Y===s.INT&&(Z=s.R32I)),C===s.RG&&(Y===s.FLOAT&&(Z=s.RG32F),Y===s.HALF_FLOAT&&(Z=s.RG16F),Y===s.UNSIGNED_BYTE&&(Z=s.RG8)),C===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Z=s.RG8UI),Y===s.UNSIGNED_SHORT&&(Z=s.RG16UI),Y===s.UNSIGNED_INT&&(Z=s.RG32UI),Y===s.BYTE&&(Z=s.RG8I),Y===s.SHORT&&(Z=s.RG16I),Y===s.INT&&(Z=s.RG32I)),C===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),Y===s.UNSIGNED_INT&&(Z=s.RGB32UI),Y===s.BYTE&&(Z=s.RGB8I),Y===s.SHORT&&(Z=s.RGB16I),Y===s.INT&&(Z=s.RGB32I)),C===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),Y===s.UNSIGNED_INT&&(Z=s.RGBA32UI),Y===s.BYTE&&(Z=s.RGBA8I),Y===s.SHORT&&(Z=s.RGBA16I),Y===s.INT&&(Z=s.RGBA32I)),C===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),C===s.RGBA){const Se=K?uo:_t.getTransfer(ne);Y===s.FLOAT&&(Z=s.RGBA32F),Y===s.HALF_FLOAT&&(Z=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(Z=Se===Rt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(L,C){let Y;return L?C===null||C===Oi||C===Ms?Y=s.DEPTH24_STENCIL8:C===Rn?Y=s.DEPTH32F_STENCIL8:C===sr&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Oi||C===Ms?Y=s.DEPTH_COMPONENT24:C===Rn?Y=s.DEPTH_COMPONENT32F:C===sr&&(Y=s.DEPTH_COMPONENT16),Y}function S(L,C){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==on&&L.minFilter!==fn?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function w(L){const C=L.target;C.removeEventListener("dispose",w),A(C),C.isVideoTexture&&h.delete(C)}function T(L){const C=L.target;C.removeEventListener("dispose",T),b(C)}function A(L){const C=n.get(L);if(C.__webglInit===void 0)return;const Y=L.source,ne=d.get(Y);if(ne){const K=ne[C.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(L),Object.keys(ne).length===0&&d.delete(Y)}n.remove(L)}function M(L){const C=n.get(L);s.deleteTexture(C.__webglTexture);const Y=L.source,ne=d.get(Y);delete ne[C.__cacheKey],o.memory.textures--}function b(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(C.__webglFramebuffer[ne]))for(let K=0;K<C.__webglFramebuffer[ne].length;K++)s.deleteFramebuffer(C.__webglFramebuffer[ne][K]);else s.deleteFramebuffer(C.__webglFramebuffer[ne]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[ne])}else{if(Array.isArray(C.__webglFramebuffer))for(let ne=0;ne<C.__webglFramebuffer.length;ne++)s.deleteFramebuffer(C.__webglFramebuffer[ne]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ne=0;ne<C.__webglColorRenderbuffer.length;ne++)C.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[ne]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Y=L.textures;for(let ne=0,K=Y.length;ne<K;ne++){const Z=n.get(Y[ne]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(Y[ne])}n.remove(L)}let P=0;function N(){P=0}function I(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function B(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function z(L,C){const Y=n.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Y,L,C);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+C)}function U(L,C){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){ee(Y,L,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+C)}function H(L,C){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){ee(Y,L,C);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+C)}function D(L,C){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){se(Y,L,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+C)}const te={[vs]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[so]:s.MIRRORED_REPEAT},he={[on]:s.NEAREST,[Dh]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Zr]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},me={[ld]:s.NEVER,[pd]:s.ALWAYS,[cd]:s.LESS,[Xh]:s.LEQUAL,[hd]:s.EQUAL,[fd]:s.GEQUAL,[ud]:s.GREATER,[dd]:s.NOTEQUAL};function ze(L,C){if(C.type===Rn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===fn||C.magFilter===Zr||C.magFilter===Zs||C.magFilter===$n||C.minFilter===fn||C.minFilter===Zr||C.minFilter===Zs||C.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,te[C.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,te[C.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,te[C.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,he[C.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,he[C.minFilter]),C.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,me[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===on||C.minFilter!==Zs&&C.minFilter!==$n||C.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function We(L,C){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",w));const ne=C.source;let K=d.get(ne);K===void 0&&(K={},d.set(ne,K));const Z=B(C);if(Z!==L.__cacheKey){K[Z]===void 0&&(K[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),K[Z].usedTimes++;const Se=K[L.__cacheKey];Se!==void 0&&(K[L.__cacheKey].usedTimes--,Se.usedTimes===0&&M(C)),L.__cacheKey=Z,L.__webglTexture=K[Z].texture}return Y}function ee(L,C,Y){let ne=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ne=s.TEXTURE_3D);const K=We(L,C),Z=C.source;t.bindTexture(ne,L.__webglTexture,s.TEXTURE0+Y);const Se=n.get(Z);if(Z.version!==Se.__version||K===!0){t.activeTexture(s.TEXTURE0+Y);const pe=_t.getPrimaries(_t.workingColorSpace),_e=C.colorSpace===mi?null:_t.getPrimaries(C.colorSpace),He=C.colorSpace===mi||pe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let oe=_(C.image,!1,i.maxTextureSize);oe=it(C,oe);const ve=r.convert(C.format,C.colorSpace),Ge=r.convert(C.type);let Pe=y(C.internalFormat,ve,Ge,C.colorSpace,C.isVideoTexture);ze(ne,C);let fe;const je=C.mipmaps,st=C.isVideoTexture!==!0,vt=Se.__version===void 0||K===!0,F=Z.dataReady,Me=S(C,oe);if(C.isDepthTexture)Pe=x(C.format===ys,C.type),vt&&(st?t.texStorage2D(s.TEXTURE_2D,1,Pe,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ve,Ge,null));else if(C.isDataTexture)if(je.length>0){st&&vt&&t.texStorage2D(s.TEXTURE_2D,Me,Pe,je[0].width,je[0].height);for(let J=0,re=je.length;J<re;J++)fe=je[J],st?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,fe.width,fe.height,ve,Ge,fe.data):t.texImage2D(s.TEXTURE_2D,J,Pe,fe.width,fe.height,0,ve,Ge,fe.data);C.generateMipmaps=!1}else st?(vt&&t.texStorage2D(s.TEXTURE_2D,Me,Pe,oe.width,oe.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,Ge,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ve,Ge,oe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){st&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Pe,je[0].width,je[0].height,oe.depth);for(let J=0,re=je.length;J<re;J++)if(fe=je[J],C.format!==Sn)if(ve!==null)if(st){if(F)if(C.layerUpdates.size>0){const be=Ic(fe.width,fe.height,C.format,C.type);for(const Te of C.layerUpdates){const X=fe.data.subarray(Te*be/fe.data.BYTES_PER_ELEMENT,(Te+1)*be/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Te,fe.width,fe.height,1,ve,X)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,oe.depth,ve,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Pe,fe.width,fe.height,oe.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,oe.depth,ve,Ge,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Pe,fe.width,fe.height,oe.depth,0,ve,Ge,fe.data)}else{st&&vt&&t.texStorage2D(s.TEXTURE_2D,Me,Pe,je[0].width,je[0].height);for(let J=0,re=je.length;J<re;J++)fe=je[J],C.format!==Sn?ve!==null?st?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,fe.width,fe.height,ve,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,fe.width,fe.height,ve,Ge,fe.data):t.texImage2D(s.TEXTURE_2D,J,Pe,fe.width,fe.height,0,ve,Ge,fe.data)}else if(C.isDataArrayTexture)if(st){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Pe,oe.width,oe.height,oe.depth),F)if(C.layerUpdates.size>0){const J=Ic(oe.width,oe.height,C.format,C.type);for(const re of C.layerUpdates){const be=oe.data.subarray(re*J/oe.data.BYTES_PER_ELEMENT,(re+1)*J/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,ve,Ge,be)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ge,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,ve,Ge,oe.data);else if(C.isData3DTexture)st?(vt&&t.texStorage3D(s.TEXTURE_3D,Me,Pe,oe.width,oe.height,oe.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ge,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,ve,Ge,oe.data);else if(C.isFramebufferTexture){if(vt)if(st)t.texStorage2D(s.TEXTURE_2D,Me,Pe,oe.width,oe.height);else{let J=oe.width,re=oe.height;for(let be=0;be<Me;be++)t.texImage2D(s.TEXTURE_2D,be,Pe,J,re,0,ve,Ge,null),J>>=1,re>>=1}}else if(je.length>0){if(st&&vt){const J=Ie(je[0]);t.texStorage2D(s.TEXTURE_2D,Me,Pe,J.width,J.height)}for(let J=0,re=je.length;J<re;J++)fe=je[J],st?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ve,Ge,fe):t.texImage2D(s.TEXTURE_2D,J,Pe,ve,Ge,fe);C.generateMipmaps=!1}else if(st){if(vt){const J=Ie(oe);t.texStorage2D(s.TEXTURE_2D,Me,Pe,J.width,J.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Ge,oe)}else t.texImage2D(s.TEXTURE_2D,0,Pe,ve,Ge,oe);m(C)&&p(ne),Se.__version=Z.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function se(L,C,Y){if(C.image.length!==6)return;const ne=We(L,C),K=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Y);const Z=n.get(K);if(K.version!==Z.__version||ne===!0){t.activeTexture(s.TEXTURE0+Y);const Se=_t.getPrimaries(_t.workingColorSpace),pe=C.colorSpace===mi?null:_t.getPrimaries(C.colorSpace),_e=C.colorSpace===mi||Se===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=C.isCompressedTexture||C.image[0].isCompressedTexture,oe=C.image[0]&&C.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!He&&!oe?ve[re]=_(C.image[re],!0,i.maxCubemapSize):ve[re]=oe?C.image[re].image:C.image[re],ve[re]=it(C,ve[re]);const Ge=ve[0],Pe=r.convert(C.format,C.colorSpace),fe=r.convert(C.type),je=y(C.internalFormat,Pe,fe,C.colorSpace),st=C.isVideoTexture!==!0,vt=Z.__version===void 0||ne===!0,F=K.dataReady;let Me=S(C,Ge);ze(s.TEXTURE_CUBE_MAP,C);let J;if(He){st&&vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,je,Ge.width,Ge.height);for(let re=0;re<6;re++){J=ve[re].mipmaps;for(let be=0;be<J.length;be++){const Te=J[be];C.format!==Sn?Pe!==null?st?F&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,je,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,Te.width,Te.height,Pe,fe,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,je,Te.width,Te.height,0,Pe,fe,Te.data)}}}else{if(J=C.mipmaps,st&&vt){J.length>0&&Me++;const re=Ie(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,je,re.width,re.height)}for(let re=0;re<6;re++)if(oe){st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,Pe,fe,ve[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,ve[re].width,ve[re].height,0,Pe,fe,ve[re].data);for(let be=0;be<J.length;be++){const X=J[be].image[re].image;st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,X.width,X.height,Pe,fe,X.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,je,X.width,X.height,0,Pe,fe,X.data)}}else{st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,fe,ve[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Pe,fe,ve[re]);for(let be=0;be<J.length;be++){const Te=J[be];st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Pe,fe,Te.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,je,Pe,fe,Te.image[re])}}}m(C)&&p(s.TEXTURE_CUBE_MAP),Z.__version=K.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function ge(L,C,Y,ne,K,Z){const Se=r.convert(Y.format,Y.colorSpace),pe=r.convert(Y.type),_e=y(Y.internalFormat,Se,pe,Y.colorSpace),He=n.get(C),oe=n.get(Y);if(oe.__renderTarget=C,!He.__hasExternalTextures){const ve=Math.max(1,C.width>>Z),Ge=Math.max(1,C.height>>Z);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,_e,ve,Ge,C.depth,0,Se,pe,null):t.texImage2D(K,Z,_e,ve,Ge,0,Se,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),nt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,K,oe.__webglTexture,0,Ve(C)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,K,oe.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(L,C,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,L),C.depthBuffer){const ne=C.depthTexture,K=ne&&ne.isDepthTexture?ne.type:null,Z=x(C.stencilBuffer,K),Se=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=Ve(C);nt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,Z,C.width,C.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,Z,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Z,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,L)}else{const ne=C.textures;for(let K=0;K<ne.length;K++){const Z=ne[K],Se=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),_e=y(Z.internalFormat,Se,pe,Z.colorSpace),He=Ve(C);Y&&nt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,_e,C.width,C.height):nt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,_e,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,_e,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(C.depthTexture);ne.__renderTarget=C,(!ne.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const K=ne.__webglTexture,Z=Ve(C);if(C.depthTexture.format===us)nt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(C.depthTexture.format===ys)nt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Re(L){const C=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const ne=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ne){const K=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ne.removeEventListener("dispose",K)};ne.addEventListener("dispose",K),C.__depthDisposeCallback=K}C.__boundDepthTexture=ne}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ee(C.__webglFramebuffer,L)}else if(Y){C.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ne]),C.__webglDepthbuffer[ne]===void 0)C.__webglDepthbuffer[ne]=s.createRenderbuffer(),ae(C.__webglDepthbuffer[ne],L,!1);else{const K=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ae(C.__webglDepthbuffer,L,!1);else{const ne=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,K)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(L,C,Y){const ne=n.get(L);C!==void 0&&ge(ne.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Re(L)}function ke(L){const C=L.texture,Y=n.get(L),ne=n.get(C);L.addEventListener("dispose",T);const K=L.textures,Z=L.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=C.version,o.memory.textures++),Z){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let _e=0;_e<C.mipmaps.length;_e++)Y.__webglFramebuffer[pe][_e]=s.createFramebuffer()}else Y.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<C.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Se)for(let pe=0,_e=K.length;pe<_e;pe++){const He=n.get(K[pe]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&nt(L)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<K.length;pe++){const _e=K[pe];Y.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);const He=r.convert(_e.format,_e.colorSpace),oe=r.convert(_e.type),ve=y(_e.internalFormat,He,oe,_e.colorSpace,L.isXRRenderTarget===!0),Ge=Ve(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,ve,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),ze(s.TEXTURE_CUBE_MAP,C);for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)ge(Y.__webglFramebuffer[pe][_e],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else ge(Y.__webglFramebuffer[pe],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(C)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let pe=0,_e=K.length;pe<_e;pe++){const He=K[pe],oe=n.get(He);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),ze(s.TEXTURE_2D,He),ge(Y.__webglFramebuffer,L,He,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),m(He)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),ze(pe,C),C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)ge(Y.__webglFramebuffer[_e],L,C,s.COLOR_ATTACHMENT0,pe,_e);else ge(Y.__webglFramebuffer,L,C,s.COLOR_ATTACHMENT0,pe,0);m(C)&&p(pe),t.unbindTexture()}L.depthBuffer&&Re(L)}function Ue(L){const C=L.textures;for(let Y=0,ne=C.length;Y<ne;Y++){const K=C[Y];if(m(K)){const Z=v(L),Se=n.get(K).__webglTexture;t.bindTexture(Z,Se),p(Z),t.unbindTexture()}}}const Ke=[],O=[];function Mt(L){if(L.samples>0){if(nt(L)===!1){const C=L.textures,Y=L.width,ne=L.height;let K=s.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(L),pe=C.length>1;if(pe)for(let _e=0;_e<C.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<C.length;_e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const He=n.get(C[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,K,s.NEAREST),l===!0&&(Ke.length=0,O.length=0,Ke.push(s.COLOR_ATTACHMENT0+_e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ke.push(Z),O.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<C.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const He=n.get(C[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ve(L){return Math.min(i.maxSamples,L.samples)}function nt(L){const C=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Le(L){const C=o.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function it(L,C){const Y=L.colorSpace,ne=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==en&&Y!==mi&&(_t.getTransfer(Y)===Rt?(ne!==Sn||K!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),C}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=D,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=nt}function Dg(s,e){function t(n,i=mi){let r;const o=_t.getTransfer(i);if(n===ni)return s.UNSIGNED_BYTE;if(n===ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===al)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return s.BYTE;if(n===Uh)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===rl)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===ei)return s.HALF_FLOAT;if(n===Oh)return s.ALPHA;if(n===Bh)return s.RGB;if(n===Sn)return s.RGBA;if(n===zh)return s.LUMINANCE;if(n===kh)return s.LUMINANCE_ALPHA;if(n===us)return s.DEPTH_COMPONENT;if(n===ys)return s.DEPTH_STENCIL;if(n===ll)return s.RED;if(n===cl)return s.RED_INTEGER;if(n===Gh)return s.RG;if(n===hl)return s.RG_INTEGER;if(n===ul)return s.RGBA_INTEGER;if(n===$r||n===Qr||n===Jr||n===eo)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===ya||n===Sa||n===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ea||n===Ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ea)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Ia||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===Ga||n===Va)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===to)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Ha||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===to)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Ng extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ug={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Vt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:Fg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zg extends Rs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Bg,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],S=new Ce;let w=null;const T=new rn;T.viewport=new wt;const A=new rn;A.viewport=new wt;const M=[T,A],b=new Ng;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=y[ee];return se===void 0&&(se=new Xo,y[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=y[ee];return se===void 0&&(se=new Xo,y[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=y[ee];return se===void 0&&(se=new Xo,y[ee]=se),se.getHandSpace()};function I(ee){const se=x.indexOf(ee.inputSource);if(se===-1)return;const ge=y[se];ge!==void 0&&(ge.update(ee.inputSource,ee.frame,c||o),ge.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",z);for(let ee=0;ee<y.length;ee++){const se=x[ee];se!==null&&(x[ee]=null,y[ee].disconnect(se))}P=null,N=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",B),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ge=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?ys:us,ge=m.stencil?Ms:Oi);const Ee={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ln(d.textureWidth,d.textureHeight,{format:Sn,type:ni,depthTexture:new iu(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(ee){for(let se=0;se<ee.removed.length;se++){const ge=ee.removed[se],ae=x.indexOf(ge);ae>=0&&(x[ae]=null,y[ae].disconnect(ge))}for(let se=0;se<ee.added.length;se++){const ge=ee.added[se];let ae=x.indexOf(ge);if(ae===-1){for(let Re=0;Re<y.length;Re++)if(Re>=x.length){x.push(ge),ae=Re;break}else if(x[Re]===null){x[Re]=ge,ae=Re;break}if(ae===-1)break}const Ee=y[ae];Ee&&Ee.connect(ge)}}const U=new E,H=new E;function D(ee,se,ge){U.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(ge.matrixWorld);const ae=U.distanceTo(H),Ee=se.projectionMatrix.elements,Re=ge.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),ke=Ee[14]/(Ee[10]+1),Ue=(Ee[9]+1)/Ee[5],Ke=(Ee[9]-1)/Ee[5],O=(Ee[8]-1)/Ee[0],Mt=(Re[8]+1)/Re[0],Ve=Ne*O,nt=Ne*Mt,Le=ae/(-O+Mt),it=Le*-O;if(se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(it),ee.translateZ(Le),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ee[10]===-1)ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ie=Ne+Le,L=ke+Le,C=Ve-it,Y=nt+(ae-it),ne=Ue*ke/L*Ie,K=Ke*ke/L*Ie;ee.projectionMatrix.makePerspective(C,Y,ne,K,Ie,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function te(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let se=ee.near,ge=ee.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),b.near=A.near=T.near=se,b.far=A.far=T.far=ge,(P!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,N=b.far),T.layers.mask=ee.layers.mask|2,A.layers.mask=ee.layers.mask|4,b.layers.mask=T.layers.mask|A.layers.mask;const ae=ee.parent,Ee=b.cameras;te(b,ae);for(let Re=0;Re<Ee.length;Re++)te(Ee[Re],ae);Ee.length===2?D(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),he(ee,b,ae)};function he(ee,se,ge){ge===null?ee.matrix.copy(se.matrixWorld):(ee.matrix.copy(ge.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ss*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let me=null;function ze(ee,se){if(h=se.getViewerPose(c||o),g=se,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ae=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Re=0;Re<ge.length;Re++){const Ne=ge[Re];let ke=null;if(f!==null)ke=f.getViewport(Ne);else{const Ke=u.getViewSubImage(d,Ne);ke=Ke.viewport,Re===0&&(e.setRenderTargetTextures(v,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(v))}let Ue=M[Re];Ue===void 0&&(Ue=new rn,Ue.layers.enable(Re),Ue.viewport=new wt,M[Re]=Ue),Ue.matrix.fromArray(Ne.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ne.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ke.x,ke.y,ke.width,ke.height),Re===0&&(b.matrix.copy(Ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(Ue)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Re=u.getDepthInformation(ge[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let ge=0;ge<y.length;ge++){const ae=x[ge],Ee=y[ge];ae!==null&&Ee!==void 0&&Ee.update(ae,se,c||o)}me&&me(ee,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const We=new nu;We.setAnimationLoop(ze),this.setAnimationLoop=function(ee){me=ee},this.dispose=function(){}}}const Ci=new Dn,kg=new Je;function Gg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ci)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vg(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(v,S);const w=e.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){const y=u();v.__bindingPointIndex=y;const x=s.createBuffer(),S=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,T=x.length;w<T;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,b=A.length;M<b;M++){const P=A[M];if(f(P,w,M,S)===!0){const N=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let z=0;z<I.length;z++){const U=I[z],H=_(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,N+B,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,B),B+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,x,S){const w=v.value,T=y+"_"+x;if(S[T]===void 0)return typeof w=="number"||typeof w=="boolean"?S[T]=w:S[T]=w.clone(),!0;{const A=S[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return S[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(v){const y=v.uniforms;let x=0;const S=16;for(let T=0,A=y.length;T<A;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,P=M.length;b<P;b++){const N=M[b],I=Array.isArray(N.value)?N.value:[N.value];for(let B=0,z=I.length;B<z;B++){const U=I[B],H=_(U),D=x%S,te=D%H.boundary,he=D+te;x+=te,he!==0&&S-he<H.storage&&(x+=S-he),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=H.storage}}}const w=x%S;return w>0&&(x+=S-w),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Hg{constructor(e={}){const{canvas:t=Ld(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=xi,this.toneMappingExposure=1;const x=this;let S=!1,w=0,T=0,A=null,M=-1,b=null;const P=new wt,N=new wt;let I=null;const B=new ie(0);let z=0,U=t.width,H=t.height,D=1,te=null,he=null;const me=new wt(0,0,U,H),ze=new wt(0,0,U,H);let We=!1;const ee=new fl;let se=!1,ge=!1;const ae=new Je,Ee=new Je,Re=new E,Ne=new wt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Ke(){return A===null?D:1}let O=n;function Mt(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){const G="webgl2";if(O=Mt(G,R),O===null)throw Mt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ve,nt,Le,it,Ie,L,C,Y,ne,K,Z,Se,pe,_e,He,oe,ve,Ge,Pe,fe,je,st,vt,F;function Me(){Ve=new Km(O),Ve.init(),st=new Dg(O,Ve),nt=new Vm(O,Ve,e,st),Le=new Pg(O,Ve),nt.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),it=new $m(O),Ie=new mg,L=new Ig(O,Ve,Le,Ie,nt,st,it),C=new Wm(x),Y=new Ym(x),ne=new sf(O),vt=new km(O,ne),K=new jm(O,ne,it,vt),Z=new Jm(O,K,ne,it),Pe=new Qm(O,nt,L),oe=new Hm(Ie),Se=new pg(x,C,Y,Ve,nt,vt,oe),pe=new Gg(x,Ie),_e=new _g,He=new bg(Ve),Ge=new zm(x,C,Y,Le,Z,f,l),ve=new Cg(x,Z,nt),F=new Vg(O,it,nt,Le),fe=new Gm(O,Ve,it),je=new Zm(O,Ve,it),it.programs=Se.programs,x.capabilities=nt,x.extensions=Ve,x.properties=Ie,x.renderLists=_e,x.shadowMap=ve,x.state=Le,x.info=it}Me();const J=new zg(x,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(U,H,!1))},this.getSize=function(R){return R.set(U,H)},this.setSize=function(R,G,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,H=G,t.width=Math.floor(R*D),t.height=Math.floor(G*D),j===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(U*D,H*D).floor()},this.setDrawingBufferSize=function(R,G,j){U=R,H=G,D=j,t.width=Math.floor(R*j),t.height=Math.floor(G*j),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,G,j,$){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,G,j,$),Le.viewport(P.copy(me).multiplyScalar(D).round())},this.getScissor=function(R){return R.copy(ze)},this.setScissor=function(R,G,j,$){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,G,j,$),Le.scissor(N.copy(ze).multiplyScalar(D).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(R){Le.setScissorTest(We=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(R=!0,G=!0,j=!0){let $=0;if(R){let V=!1;if(A!==null){const xe=A.texture.format;V=xe===ul||xe===hl||xe===cl}if(V){const xe=A.texture.type,De=xe===ni||xe===Oi||xe===sr||xe===Ms||xe===ol||xe===al,Xe=Ge.getClearColor(),qe=Ge.getClearAlpha(),ot=Xe.r,at=Xe.g,Ye=Xe.b;De?(g[0]=ot,g[1]=at,g[2]=Ye,g[3]=qe,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=ot,_[1]=at,_[2]=Ye,_[3]=qe,O.clearBufferiv(O.COLOR,0,_))}else $|=O.COLOR_BUFFER_BIT}G&&($|=O.DEPTH_BUFFER_BIT),j&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),_e.dispose(),He.dispose(),Ie.dispose(),C.dispose(),Y.dispose(),Z.dispose(),vt.dispose(),F.dispose(),Se.dispose(),J.dispose(),J.removeEventListener("sessionstart",Oe),J.removeEventListener("sessionend",le),W.stop()};function re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=it.autoReset,G=ve.enabled,j=ve.autoUpdate,$=ve.needsUpdate,V=ve.type;Me(),it.autoReset=R,ve.enabled=G,ve.autoUpdate=j,ve.needsUpdate=$,ve.type=V}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function X(R){const G=R.target;G.removeEventListener("dispose",X),Fe(G)}function Fe(R){tt(R),Ie.remove(R)}function tt(R){const G=Ie.get(R).programs;G!==void 0&&(G.forEach(function(j){Se.releaseProgram(j)}),R.isShaderMaterial&&Se.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,j,$,V,xe){G===null&&(G=ke);const De=V.isMesh&&V.matrixWorld.determinant()<0,Xe=Be(R,G,j,$,V);Le.setMaterial($,De);let qe=j.index,ot=1;if($.wireframe===!0){if(qe=K.getWireframeAttribute(j),qe===void 0)return;ot=2}const at=j.drawRange,Ye=j.attributes.position;let bt=at.start*ot,Dt=(at.start+at.count)*ot;xe!==null&&(bt=Math.max(bt,xe.start*ot),Dt=Math.min(Dt,(xe.start+xe.count)*ot)),qe!==null?(bt=Math.max(bt,0),Dt=Math.min(Dt,qe.count)):Ye!=null&&(bt=Math.max(bt,0),Dt=Math.min(Dt,Ye.count));const Ft=Dt-bt;if(Ft<0||Ft===1/0)return;vt.setup(V,$,Xe,j,qe);let ln,Tt=fe;if(qe!==null&&(ln=ne.get(qe),Tt=je,Tt.setIndex(ln)),V.isMesh)$.wireframe===!0?(Le.setLineWidth($.wireframeLinewidth*Ke()),Tt.setMode(O.LINES)):Tt.setMode(O.TRIANGLES);else if(V.isLine){let Ze=$.linewidth;Ze===void 0&&(Ze=1),Le.setLineWidth(Ze*Ke()),V.isLineSegments?Tt.setMode(O.LINES):V.isLineLoop?Tt.setMode(O.LINE_LOOP):Tt.setMode(O.LINE_STRIP)}else V.isPoints?Tt.setMode(O.POINTS):V.isSprite&&Tt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Tt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ze=V._multiDrawStarts,Vn=V._multiDrawCounts,At=V._multiDrawCount,wn=qe?ne.get(qe).bytesPerElement:1,Gi=Ie.get($).currentProgram.getUniforms();for(let cn=0;cn<At;cn++)Gi.setValue(O,"_gl_DrawID",cn),Tt.render(Ze[cn]/wn,Vn[cn])}else if(V.isInstancedMesh)Tt.renderInstances(bt,Ft,V.count);else if(j.isInstancedBufferGeometry){const Ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Vn=Math.min(j.instanceCount,Ze);Tt.renderInstances(bt,Ft,Vn)}else Tt.render(bt,Ft)};function k(R,G,j){R.transparent===!0&&R.side===zt&&R.forceSinglePass===!1?(R.side=Qt,R.needsUpdate=!0,ft(R,G,j),R.side=Bn,R.needsUpdate=!0,ft(R,G,j),R.side=zt):ft(R,G,j)}this.compile=function(R,G,j=null){j===null&&(j=R),p=He.get(j),p.init(G),y.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==j&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let De=0;De<xe.length;De++){const Xe=xe[De];k(Xe,j,V),$.add(Xe)}else k(xe,j,V),$.add(xe)}),y.pop(),p=null,$},this.compileAsync=function(R,G,j=null){const $=this.compile(R,G,j);return new Promise(V=>{function xe(){if($.forEach(function(De){Ie.get(De).currentProgram.isReady()&&$.delete(De)}),$.size===0){V(R);return}setTimeout(xe,10)}Ve.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ce=null;function ye(R){ce&&ce(R)}function Oe(){W.stop()}function le(){W.start()}const W=new nu;W.setAnimationLoop(ye),typeof self<"u"&&W.setContext(self),this.setAnimationLoop=function(R){ce=R,J.setAnimationLoop(R),R===null?W.stop():W.start()},J.addEventListener("sessionstart",Oe),J.addEventListener("sessionend",le),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(G),G=J.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,A),p=He.get(R,y.length),p.init(G),y.push(p),Ee.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(Ee),ge=this.localClippingEnabled,se=oe.init(this.clippingPlanes,ge),m=_e.get(R,v.length),m.init(),v.push(m),J.enabled===!0&&J.isPresenting===!0){const xe=x.xr.getDepthSensingMesh();xe!==null&&ue(xe,G,-1/0,x.sortObjects)}ue(R,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,he),Ue=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ue&&Ge.addToRenderList(m,R),this.info.render.frame++,se===!0&&oe.beginShadows();const j=p.state.shadowsArray;ve.render(j,R,G),se===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,V=m.transmissive;if(p.setupLights(),G.isArrayCamera){const xe=G.cameras;if(V.length>0)for(let De=0,Xe=xe.length;De<Xe;De++){const qe=xe[De];$e($,V,R,qe)}Ue&&Ge.render(R);for(let De=0,Xe=xe.length;De<Xe;De++){const qe=xe[De];we(m,R,qe,qe.viewport)}}else V.length>0&&$e($,V,R,G),Ue&&Ge.render(R),we(m,R,G);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,G),vt.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],se===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ue(R,G,j,$){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){$&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const De=Z.update(R),Xe=R.material;Xe.visible&&m.push(R,De,Xe,j,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const De=Z.update(R),Xe=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ne.copy(De.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(Xe)){const qe=De.groups;for(let ot=0,at=qe.length;ot<at;ot++){const Ye=qe[ot],bt=Xe[Ye.materialIndex];bt&&bt.visible&&m.push(R,De,bt,j,Ne.z,Ye)}}else Xe.visible&&m.push(R,De,Xe,j,Ne.z,null)}}const xe=R.children;for(let De=0,Xe=xe.length;De<Xe;De++)ue(xe[De],G,j,$)}function we(R,G,j,$){const V=R.opaque,xe=R.transmissive,De=R.transparent;p.setupLightsView(j),se===!0&&oe.setGlobalState(x.clippingPlanes,j),$&&Le.viewport(P.copy($)),V.length>0&&Qe(V,G,j),xe.length>0&&Qe(xe,G,j),De.length>0&&Qe(De,G,j),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function $e(R,G,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Ln(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ei:ni,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const xe=p.state.transmissionRenderTarget[$.id],De=$.viewport||P;xe.setSize(De.z,De.w);const Xe=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(B),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Ue&&Ge.render(j);const qe=x.toneMapping;x.toneMapping=xi;const ot=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),se===!0&&oe.setGlobalState(x.clippingPlanes,$),Qe(R,j,$),L.updateMultisampleRenderTarget(xe),L.updateRenderTargetMipmap(xe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ye=0,bt=G.length;Ye<bt;Ye++){const Dt=G[Ye],Ft=Dt.object,ln=Dt.geometry,Tt=Dt.material,Ze=Dt.group;if(Tt.side===zt&&Ft.layers.test($.layers)){const Vn=Tt.side;Tt.side=Qt,Tt.needsUpdate=!0,yt(Ft,j,$,ln,Tt,Ze),Tt.side=Vn,Tt.needsUpdate=!0,at=!0}}at===!0&&(L.updateMultisampleRenderTarget(xe),L.updateRenderTargetMipmap(xe))}x.setRenderTarget(Xe),x.setClearColor(B,z),ot!==void 0&&($.viewport=ot),x.toneMapping=qe}function Qe(R,G,j){const $=G.isScene===!0?G.overrideMaterial:null;for(let V=0,xe=R.length;V<xe;V++){const De=R[V],Xe=De.object,qe=De.geometry,ot=$===null?De.material:$,at=De.group;Xe.layers.test(j.layers)&&yt(Xe,G,j,qe,ot,at)}}function yt(R,G,j,$,V,xe){R.onBeforeRender(x,G,j,$,V,xe),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,G,j,$,R,xe),V.transparent===!0&&V.side===zt&&V.forceSinglePass===!1?(V.side=Qt,V.needsUpdate=!0,x.renderBufferDirect(j,G,$,V,R,xe),V.side=Bn,V.needsUpdate=!0,x.renderBufferDirect(j,G,$,V,R,xe),V.side=zt):x.renderBufferDirect(j,G,$,V,R,xe),R.onAfterRender(x,G,j,$,V,xe)}function ft(R,G,j){G.isScene!==!0&&(G=ke);const $=Ie.get(R),V=p.state.lights,xe=p.state.shadowsArray,De=V.state.version,Xe=Se.getParameters(R,V.state,xe,G,j),qe=Se.getProgramCacheKey(Xe);let ot=$.programs;$.environment=R.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(R.isMeshStandardMaterial?Y:C).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,ot===void 0&&(R.addEventListener("dispose",X),ot=new Map,$.programs=ot);let at=ot.get(qe);if(at!==void 0){if($.currentProgram===at&&$.lightsStateVersion===De)return rt(R,Xe),at}else Xe.uniforms=Se.getUniforms(R),R.onBeforeCompile(Xe,x),at=Se.acquireProgram(Xe,qe),ot.set(qe,at),$.uniforms=Xe.uniforms;const Ye=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=oe.uniform),rt(R,Xe),$.needsLights=ct(R),$.lightsStateVersion=De,$.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=at,$.uniformsList=null,at}function mt(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=no.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function rt(R,G){const j=Ie.get(R);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Be(R,G,j,$,V){G.isScene!==!0&&(G=ke),L.resetTextureUnits();const xe=G.fog,De=$.isMeshStandardMaterial?G.environment:null,Xe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:en,qe=($.isMeshStandardMaterial?Y:C).get($.envMap||De),ot=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,at=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ye=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,Dt=!!j.morphAttributes.color;let Ft=xi;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const ln=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=ln!==void 0?ln.length:0,Ze=Ie.get($),Vn=p.state.lights;if(se===!0&&(ge===!0||R!==b)){const gn=R===b&&$.id===M;oe.setState($,R,gn)}let At=!1;$.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Vn.state.version||Ze.outputColorSpace!==Xe||V.isBatchedMesh&&Ze.batching===!1||!V.isBatchedMesh&&Ze.batching===!0||V.isBatchedMesh&&Ze.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ze.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ze.instancing===!1||!V.isInstancedMesh&&Ze.instancing===!0||V.isSkinnedMesh&&Ze.skinning===!1||!V.isSkinnedMesh&&Ze.skinning===!0||V.isInstancedMesh&&Ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ze.instancingMorph===!1&&V.morphTexture!==null||Ze.envMap!==qe||$.fog===!0&&Ze.fog!==xe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==oe.numPlanes||Ze.numIntersection!==oe.numIntersection)||Ze.vertexAlphas!==ot||Ze.vertexTangents!==at||Ze.morphTargets!==Ye||Ze.morphNormals!==bt||Ze.morphColors!==Dt||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==Tt)&&(At=!0):(At=!0,Ze.__version=$.version);let wn=Ze.currentProgram;At===!0&&(wn=ft($,G,V));let Gi=!1,cn=!1,Us=!1;const Ot=wn.getUniforms(),Un=Ze.uniforms;if(Le.useProgram(wn.program)&&(Gi=!0,cn=!0,Us=!0),$.id!==M&&(M=$.id,cn=!0),Gi||b!==R){Le.buffers.depth.getReversed()?(ae.copy(R.projectionMatrix),Dd(ae),Nd(ae),Ot.setValue(O,"projectionMatrix",ae)):Ot.setValue(O,"projectionMatrix",R.projectionMatrix),Ot.setValue(O,"viewMatrix",R.matrixWorldInverse);const ri=Ot.map.cameraPosition;ri!==void 0&&ri.setValue(O,Re.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,cn=!0,Us=!0)}if(V.isSkinnedMesh){Ot.setOptional(O,V,"bindMatrix"),Ot.setOptional(O,V,"bindMatrixInverse");const gn=V.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ot.setValue(O,"boneTexture",gn.boneTexture,L))}V.isBatchedMesh&&(Ot.setOptional(O,V,"batchingTexture"),Ot.setValue(O,"batchingTexture",V._matricesTexture,L),Ot.setOptional(O,V,"batchingIdTexture"),Ot.setValue(O,"batchingIdTexture",V._indirectTexture,L),Ot.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&Ot.setValue(O,"batchingColorTexture",V._colorsTexture,L));const Fs=j.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&Pe.update(V,j,wn),(cn||Ze.receiveShadow!==V.receiveShadow)&&(Ze.receiveShadow=V.receiveShadow,Ot.setValue(O,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Un.envMap.value=qe,Un.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(Un.envMapIntensity.value=G.environmentIntensity),cn&&(Ot.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&tn(Un,Us),xe&&$.fog===!0&&pe.refreshFogUniforms(Un,xe),pe.refreshMaterialUniforms(Un,$,D,H,p.state.transmissionRenderTarget[R.id]),no.upload(O,mt(Ze),Un,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(no.upload(O,mt(Ze),Un,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ot.setValue(O,"center",V.center),Ot.setValue(O,"modelViewMatrix",V.modelViewMatrix),Ot.setValue(O,"normalMatrix",V.normalMatrix),Ot.setValue(O,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const gn=$.uniformsGroups;for(let ri=0,oi=gn.length;ri<oi;ri++){const Ll=gn[ri];F.update(Ll,wn),F.bind(Ll,wn)}}return wn}function tn(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function ct(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,G,j){Ie.get(R.texture).__webglTexture=G,Ie.get(R.depthTexture).__webglTexture=j;const $=Ie.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const j=Ie.get(R);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,j=0){A=R,w=G,T=j;let $=!0,V=null,xe=!1,De=!1;if(R){const qe=Ie.get(R);if(qe.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(qe.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(qe.__hasExternalTextures)L.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(qe.__boundDepthTexture!==Ye){if(Ye!==null&&Ie.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const ot=R.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(De=!0);const at=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[G])?V=at[G][j]:V=at[G],xe=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?V=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?V=at[j]:V=at,P.copy(R.viewport),N.copy(R.scissor),I=R.scissorTest}else P.copy(me).multiplyScalar(D).floor(),N.copy(ze).multiplyScalar(D).floor(),I=We;if(Le.bindFramebuffer(O.FRAMEBUFFER,V)&&$&&Le.drawBuffers(R,V),Le.viewport(P),Le.scissor(N),Le.setScissorTest(I),xe){const qe=Ie.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,qe.__webglTexture,j)}else if(De){const qe=Ie.get(R.texture),ot=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.__webglTexture,j||0,ot)}M=-1},this.readRenderTargetPixels=function(R,G,j,$,V,xe,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe){Le.bindFramebuffer(O.FRAMEBUFFER,Xe);try{const qe=R.texture,ot=qe.format,at=qe.type;if(!nt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-$&&j>=0&&j<=R.height-V&&O.readPixels(G,j,$,V,st.convert(ot),st.convert(at),xe)}finally{const qe=A!==null?Ie.get(A).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,G,j,$,V,xe,De){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe){const qe=R.texture,ot=qe.format,at=qe.type;if(!nt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-$&&j>=0&&j<=R.height-V){Le.bindFramebuffer(O.FRAMEBUFFER,Xe);const Ye=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(G,j,$,V,st.convert(ot),st.convert(at),0);const bt=A!==null?Ie.get(A).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,bt);const Dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Id(O,Dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.deleteBuffer(Ye),O.deleteSync(Dt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,j=0){R.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-j),V=Math.floor(R.image.width*$),xe=Math.floor(R.image.height*$),De=G!==null?G.x:0,Xe=G!==null?G.y:0;L.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,De,Xe,V,xe),Le.unbindTexture()},this.copyTextureToTexture=function(R,G,j=null,$=null,V=0){R.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],G=arguments[2],V=arguments[3]||0,j=null);let xe,De,Xe,qe,ot,at,Ye,bt,Dt;const Ft=R.isCompressedTexture?R.mipmaps[V]:R.image;j!==null?(xe=j.max.x-j.min.x,De=j.max.y-j.min.y,Xe=j.isBox3?j.max.z-j.min.z:1,qe=j.min.x,ot=j.min.y,at=j.isBox3?j.min.z:0):(xe=Ft.width,De=Ft.height,Xe=Ft.depth||1,qe=0,ot=0,at=0),$!==null?(Ye=$.x,bt=$.y,Dt=$.z):(Ye=0,bt=0,Dt=0);const ln=st.convert(G.format),Tt=st.convert(G.type);let Ze;G.isData3DTexture?(L.setTexture3D(G,0),Ze=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Ze=O.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Ze=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Vn=O.getParameter(O.UNPACK_ROW_LENGTH),At=O.getParameter(O.UNPACK_IMAGE_HEIGHT),wn=O.getParameter(O.UNPACK_SKIP_PIXELS),Gi=O.getParameter(O.UNPACK_SKIP_ROWS),cn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,at);const Us=R.isDataArrayTexture||R.isData3DTexture,Ot=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Un=Ie.get(R),Fs=Ie.get(G),gn=Ie.get(Un.__renderTarget),ri=Ie.get(Fs.__renderTarget);Le.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Xe;oi++)Us&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,V,at+oi),R.isDepthTexture?(Ot&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(G).__webglTexture,V,Dt+oi),O.blitFramebuffer(qe,ot,xe,De,Ye,bt,xe,De,O.DEPTH_BUFFER_BIT,O.NEAREST)):Ot?O.copyTexSubImage3D(Ze,V,Ye,bt,Dt+oi,qe,ot,xe,De):O.copyTexSubImage2D(Ze,V,Ye,bt,Dt+oi,qe,ot,xe,De);Le.bindFramebuffer(O.READ_FRAMEBUFFER,null),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ot?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ze,V,Ye,bt,Dt,xe,De,Xe,ln,Tt,Ft.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Ze,V,Ye,bt,Dt,xe,De,Xe,ln,Ft.data):O.texSubImage3D(Ze,V,Ye,bt,Dt,xe,De,Xe,ln,Tt,Ft):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,Ye,bt,xe,De,ln,Tt,Ft.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,Ye,bt,Ft.width,Ft.height,ln,Ft.data):O.texSubImage2D(O.TEXTURE_2D,V,Ye,bt,xe,De,ln,Tt,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,Vn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,cn),V===0&&G.generateMipmaps&&O.generateMipmap(Ze),Le.unbindTexture()},this.copyTextureToTexture3D=function(R,G,j=null,$=null,V=0){return R.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,R=arguments[2],G=arguments[3],V=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,j,$,V)},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,Le.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ie(e),this.density=t}clone(){return new ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wg extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new E;class cr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cu extends In{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ns;const Gs=new E,is=new E,ss=new E,rs=new Ce,Vs=new Ce,hu=new Je,Nr=new E,Hs=new E,Ur=new E,Dc=new Ce,qo=new Ce,Nc=new Ce;class Xg extends Et{constructor(e=new cu){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lu(t,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new cr(n,3,0,!1)),ns.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=ns,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Fr(Nr.set(-.5,-.5,0),ss,o,is,i,r),Fr(Hs.set(.5,-.5,0),ss,o,is,i,r),Fr(Ur.set(.5,.5,0),ss,o,is,i,r),Dc.set(0,0),qo.set(1,0),Nc.set(1,1);let a=e.ray.intersectTriangle(Nr,Hs,Ur,!1,Gs);if(a===null&&(Fr(Hs.set(-.5,.5,0),ss,o,is,i,r),qo.set(0,1),a=e.ray.intersectTriangle(Nr,Ur,Hs,!1,Gs),a===null))return;const l=e.ray.origin.distanceTo(Gs);l<e.near||l>e.far||t.push({distance:l,point:Gs.clone(),uv:Mn.getInterpolation(Gs,Nr,Hs,Ur,Dc,qo,Nc,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fr(s,e,t,n,i,r){rs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Vs.x=r*rs.x-i*rs.y,Vs.y=i*rs.x+r*rs.y):Vs.copy(rs),s.copy(e),s.x+=Vs.x,s.y+=Vs.y,s.applyMatrix4(hu)}const Uc=new E,Fc=new wt,Oc=new wt,qg=new E,Bc=new Je,Or=new E,Yo=new zn,zc=new Je,Ko=new fo;class Yg extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ul,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(i),e.ray.intersectsSphere(Yo)!==!1&&(zc.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(zc),!(this.boundingBox!==null&&Ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fc.fromBufferAttribute(i.attributes.skinIndex,e),Oc.fromBufferAttribute(i.attributes.skinWeight,e),Uc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Oc.getComponent(r);if(o!==0){const a=Fc.getComponent(r);Bc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(qg.copy(Uc).applyMatrix4(Bc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class uu extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class du extends Vt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=on,h=on,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=new Je,Kg=new Je;class gl{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Kg;kc.multiplyMatrices(a,t[r]),kc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new gl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new du(t,e,e,Sn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new uu),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ja extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Je,Gc=new Je,Br=[],Vc=new ii,jg=new Je,Ws=new dt,Xs=new zn;class gt extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ja(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Vc.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Xs.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,os),Gc.multiplyMatrices(n,os),Ws.matrixWorld=Gc,Ws.raycast(e,Br);for(let o=0,a=Br.length;o<a;o++){const l=Br[o];l.instanceId=r,l.object=this,t.push(l)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ja(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new du(new Float32Array(i*this.count),i,this.count,ll,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _l extends In{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oo=new E,ao=new E,Hc=new Je,qs=new fo,zr=new zn,jo=new E,Wc=new E;class xl extends Et{constructor(e=new St,t=new _l){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oo.fromBufferAttribute(t,i-1),ao.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oo.distanceTo(ao);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Hc.copy(i).invert(),qs.copy(e.ray).applyMatrix4(Hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),y=kr(this,e,qs,l,p,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=kr(this,e,qs,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=kr(this,e,qs,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=kr(this,e,qs,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(oo.fromBufferAttribute(o,i),ao.fromBufferAttribute(o,r),t.distanceSqToSegment(oo,ao,jo,Wc)>n)return;jo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(jo);if(!(l<e.near||l>e.far))return{distance:l,point:Wc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Xc=new E,qc=new E;class fu extends xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Xc.fromBufferAttribute(t,i),qc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xc.distanceTo(qc);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zg extends xl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mn extends In{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new Je,Za=new fo,Gr=new zn,Vr=new E;class bn extends Et{constructor(e=new St,t=new mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;Yc.copy(i).invert(),Za.copy(e.ray).applyMatrix4(Yc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Vr.fromBufferAttribute(u,m),Kc(Vr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Vr.fromBufferAttribute(u,g),Kc(Vr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kc(s,e,t,n,i,r,o){const a=Za.distanceSqToPoint(s);if(a<t){const l=new E;Za.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class an extends Vt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],r=[],o=[],a=new E,l=new Je;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(qt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pu extends si{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $g extends pu{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Hr=new E,Zo=new vl,$o=new vl,Qo=new vl;class Bi extends si{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Hr.subVectors(i[0],i[1]).add(i[0]),c=Hr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Hr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Zo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),$o.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Qo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$o.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Zo.calc(l),$o.calc(l),Qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Qg(s,e){const t=1-s;return t*t*e}function Jg(s,e){return 2*(1-s)*s*e}function e_(s,e){return s*s*e}function tr(s,e,t,n){return Qg(s,e)+Jg(s,t)+e_(s,n)}function t_(s,e){const t=1-s;return t*t*t*e}function n_(s,e){const t=1-s;return 3*t*t*s*e}function i_(s,e){return 3*(1-s)*s*s*e}function s_(s,e){return s*s*s*e}function nr(s,e,t,n,i){return t_(s,e)+n_(s,t)+i_(s,n)+s_(s,i)}class r_ extends si{constructor(e=new Ce,t=new Ce,n=new Ce,i=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ce){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,i.x,r.x,o.x,a.x),nr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class o_ extends si{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,i.x,r.x,o.x,a.x),nr(e,i.y,r.y,o.y,a.y),nr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class a_ extends si{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class l_ extends si{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c_ extends si{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,i.x,r.x,o.x),tr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends si{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,i.x,r.x,o.x),tr(e,i.y,r.y,o.y),tr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h_ extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(jc(a,l.x,c.x,h.x,u.x),jc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ce().fromArray(i))}return this}}var u_=Object.freeze({__proto__:null,ArcCurve:$g,CatmullRomCurve3:Bi,CubicBezierCurve:r_,CubicBezierCurve3:o_,EllipseCurve:pu,LineCurve:a_,LineCurve3:l_,QuadraticBezierCurve:c_,QuadraticBezierCurve3:mu,SplineCurve:h_});class jt extends St{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(f,2));function v(){const x=new E,S=new E;let w=0;const T=(t-e)/n;for(let A=0;A<=r;A++){const M=[],b=A/r,P=b*(t-e)+e;for(let N=0;N<=i;N++){const I=N/i,B=I*l+a,z=Math.sin(B),U=Math.cos(B);S.x=P*z,S.y=-b*n+m,S.z=P*U,u.push(S.x,S.y,S.z),x.set(z,T,U).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-b),M.push(g++)}_.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const b=_[M][A],P=_[M+1][A],N=_[M+1][A+1],I=_[M][A+1];(e>0||M!==0)&&(h.push(b,P,I),w+=3),(t>0||M!==r-1)&&(h.push(P,N,I),w+=3)}c.addGroup(p,w,0),p+=w}function y(x){const S=g,w=new Ce,T=new E;let A=0;const M=x===!0?e:t,b=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const B=N/i*l+a,z=Math.cos(B),U=Math.sin(B);T.x=M*U,T.y=m*b,T.z=M*z,u.push(T.x,T.y,T.z),d.push(0,b,0),w.x=z*.5+.5,w.y=U*.5*b+.5,f.push(w.x,w.y),g++}for(let N=0;N<i;N++){const I=S+N,B=P+N;x===!0?h.push(B,B+1,I):h.push(B+1,B,I),A+=3}c.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ui extends jt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ui(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class go extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ut(r,3)),this.setAttribute("normal",new Ut(r.slice(),3)),this.setAttribute("uv",new Ut(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new E,x=new E,S=new E;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],x),f(t[w+2],S),l(y,x,S,v)}function l(v,y,x,S){const w=S+1,T=[];for(let A=0;A<=w;A++){T[A]=[];const M=v.clone().lerp(x,A/w),b=y.clone().lerp(x,A/w),P=w-A;for(let N=0;N<=P;N++)N===0&&A===w?T[A][N]=M:T[A][N]=M.clone().lerp(b,N/P)}for(let A=0;A<w;A++)for(let M=0;M<2*(w-A)-1;M++){const b=Math.floor(M/2);M%2===0?(d(T[A][b+1]),d(T[A+1][b]),d(T[A][b])):(d(T[A][b+1]),d(T[A+1][b+1]),d(T[A+1][b]))}}function c(v){const y=new E;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new E;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(x,1-S)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],S=o[v+4],w=Math.max(y,x,S),T=Math.min(y,x,S);w>.9&&T<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new E,y=new E,x=new E,S=new E,w=new Ce,T=new Ce,A=new Ce;for(let M=0,b=0;M<r.length;M+=9,b+=6){v.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),w.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),A.set(o[b+4],o[b+5]),S.copy(v).add(y).add(x).divideScalar(3);const P=m(S);_(w,b+0,v,P),_(T,b+2,y,P),_(A,b+4,x,P)}}function _(v,y,x,S){S<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.vertices,e.indices,e.radius,e.details)}}class _o extends go{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _o(e.radius,e.detail)}}class Ml extends go{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ml(e.radius,e.detail)}}class Jt extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const w=S/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],S=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,w),(p!==n-1||l<Math.PI)&&f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ls extends St{constructor(e=new mu(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new Ce;let h=new E;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){h=e.getPointAt(y/t,h);const x=o.normals[y],S=o.binormals[y];for(let w=0;w<=i;w++){const T=w/i*Math.PI*2,A=Math.sin(T),M=-Math.cos(T);l.x=M*x.x+A*S.x,l.y=M*x.y+A*S.y,l.z=M*x.z+A*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=i;x++){const S=(i+1)*(y-1)+(x-1),w=(i+1)*y+(x-1),T=(i+1)*y+x,A=(i+1)*(y-1)+x;g.push(S,w,A),g.push(w,T,A)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=i;x++)c.x=y/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ls(new u_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class d_ extends Gt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class et extends In{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends et{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Wr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function f_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function p_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function gu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class m_ extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ol:r=e,a=2*t-n;break;case Bl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ol:o=e,l=2*n-t;break;case Bl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+v*o[c+S]+y*o[l+S]+x*o[u+S];return r}}class g_ extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class __ extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new __(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new g_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new m_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&f_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=or;class Is extends Gn{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=rr;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class _u extends Gn{}_u.prototype.ValueTypeName="color";class ws extends Gn{}ws.prototype.ValueTypeName="number";class x_ extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)ut.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Es extends Gn{InterpolantFactoryMethodLinear(e){return new x_(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Gn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=rr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends Gn{}Ts.prototype.ValueTypeName="vector";class v_{constructor(e="",t=-1,n=[],i=id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(y_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=p_(l);l=Zc(l,1,h),c=Zc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];gu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new ws(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ts,f+".position",d,"pos",i),n(Es,f+".quaternion",d,"rot",i),n(Ts,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function M_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return _u;case"quaternion":return Es;case"bool":case"boolean":return Is;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function y_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=M_(s.type);if(s.times===void 0){const t=[],n=[];gu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class S_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const b_=new S_;class zi{constructor(e){this.manager=e!==void 0?e:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class w_ extends Error{constructor(e,t){super(e),this.response=t}}class lo extends zi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Kn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,T=h.length;w<T;w++){const A=h[w];A.onProgress&&A.onProgress(S)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new w_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{_i.add(e,c);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class E_ extends zi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ar("img");function l(){h(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class T_ extends zi{constructor(e){super(e)}load(e,t,n,i){const r=new Vt,o=new E_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ur extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class A_ extends ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Jo=new Je,$c=new E,Qc=new E;class yl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class C_ extends yl{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class R_ extends ur{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new C_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jc=new Je,Ys=new E,ea=new E;class P_ extends yl{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),ea.copy(n.position),ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ea),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc)}}class io extends ur{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new P_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class L_ extends yl{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xu extends ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new L_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I_ extends ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ir{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class D_ extends zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}}class vu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eh(){return performance.now()}const Sl="\\[\\]\\.:\\/",N_=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",U_="[^"+Sl.replace("\\.","")+"]",F_=/((?:WC+[\/:])*)/.source.replace("WC",bl),O_=/(WCOD+)?/.source.replace("WCOD",U_),B_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),k_=new RegExp("^"+F_+O_+B_+z_+"$"),G_=["material","materials","bones","map"];class V_{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(e){const t=k_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);G_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=V_;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);const Mu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H_=new po(-1,1,1,-1,0,1);class W_ extends St{constructor(){super(),this.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ut([0,2,0,0,2,0],2))}}const X_=new W_;class wl{constructor(e){this._mesh=new dt(X_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,H_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class q_ extends Ns{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lr.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class th extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Y_ extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class K_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new q_(Mu),this.copyPass.material.blending=Jn,this.clock=new vu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}th!==void 0&&(o instanceof th?n=!0:o instanceof Y_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j_ extends Ns{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ie}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Z_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class As extends Ns{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(r,o,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Ln(r,o,{type:ei});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Ln(r,o,{type:ei});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Z_;this.highPassUniforms=lr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Mu;this.copyUniforms=lr.clone(h.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ie,this.oldClearAlpha=1,this.basic=new pn,this.fsQuad=new wl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}As.BlurDirectionX=new Ce(1,0);As.BlurDirectionY=new Ce(0,1);const $_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Q_ extends Ns{constructor(){super();const e=$_;this.uniforms=lr.clone(e.uniforms),this.material=new d_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new wl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ah?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function yu(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new an(s);return n.needsUpdate=!0,n}function J_(s=8500,e=14e3){const t=new Nt;t.name="Procedural_Starfield";const n=new Float32Array(s*3),i=new Float32Array(s*3),r=[new ie(10205439),new ie(13293823),new ie(16316415),new ie(16774378),new ie(16765601),new ie(16754795)];for(let p=0;p<s;p++){const v=Math.random(),y=Math.random(),x=v*2*Math.PI;let S=Math.acos(2*y-1);Math.random()<.35&&(S=Math.PI*.5+(Math.random()-.5)*.32);const w=e*(.55+.45*Math.random()),T=Math.sin(S);n[p*3]=w*T*Math.cos(x),n[p*3+1]=w*Math.cos(S),n[p*3+2]=w*T*Math.sin(x);const A=r[Math.floor(Math.random()*r.length)],M=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=A.r*M,i[p*3+1]=A.g*M,i[p*3+2]=A.b*M}const o=new St;o.setAttribute("position",new pt(n,3)),o.setAttribute("color",new pt(i,3));const a=yu(),l=e/14e3,c=new mn({size:28*l,map:a,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Yt,sizeAttenuation:!0}),h=new bn(o,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const v=Math.random()*2*Math.PI,y=Math.acos(2*Math.random()-1),x=e*.72;d[p*3]=x*Math.sin(y)*Math.cos(v),d[p*3+1]=x*Math.cos(y),d[p*3+2]=x*Math.sin(y)*Math.sin(v);const S=r[p%r.length];f[p*3]=S.r,f[p*3+1]=S.g,f[p*3+2]=S.b}const g=new St;g.setAttribute("position",new pt(d,3)),g.setAttribute("color",new pt(f,3));const _=new mn({size:56*l,map:a,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Yt});t.add(new bn(g,_)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const v=Q.clamp(p,0,1);c.opacity=.92*v,_.opacity=.95*v,t.visible=v>.015},t}class ex{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let r=0;r<t;r++)n[r*3]=(Math.random()-.5)*28,n[r*3+1]=(Math.random()-.5)*18,n[r*3+2]=-Math.random()*55;this.geometry=new St,this.geometry.setAttribute("position",new pt(n,3)),this.material=new mn({color:new ie(16758892),size:.42,map:yu(),transparent:!0,opacity:0,depthWrite:!1,blending:Yt}),this.points=new bn(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let r=0;r<this.streakCount;r++){const o=Math.random()*Math.PI*2,a=3.5+Math.random()*22,l=Math.cos(o)*a,c=Math.sin(o)*a*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[r*6]=l,i[r*6+1]=c,i[r*6+2]=h,i[r*6+3]=l,i[r*6+4]=c,i[r*6+5]=h-u}this.streakGeometry=new St,this.streakGeometry.setAttribute("position",new pt(i,3)),this.streakMaterial=new _l({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}),this.streakLines=new fu(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=Q.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=Q.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const r=this.geometry.attributes.position,o=r.array,a=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=o[l*3+2]+a;c>2&&(c=-52-Math.random()*12,o[l*3]=(Math.random()-.5)*28,o[l*3+1]=(Math.random()-.5)*18),o[l*3+2]=c}r.needsUpdate=!0}if(this.pulseFactor=Q.lerp(this.pulseFactor,Q.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const r=this.streakGeometry.attributes.position,o=r.array,a=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=a,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;o[c*6]=h.x,o[c*6+1]=h.y,o[c*6+2]=h.z,o[c*6+3]=h.x,o[c*6+4]=h.y,o[c*6+5]=u}r.needsUpdate=!0}}}class tx{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new E,this.angularVelocity=new E,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.altitudeContext={surfaceAltitude:9999,planetRadius:220,atmoTopAlt:320,groundFloorAlt:.9,minSpeed:8,planetCenter:new E,prevPlanetCenter:new E,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new E,planetQuatDelta:new ut},this._tmpToShip=new E,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=Q.clamp(-t*.011,-.52,.52);this.targetBankAngle=Q.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=Q.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:r,planetCenter:o,prevPlanetCenter:a,hasPlanet:l,inGravityWell:c,planetDeltaPos:h,planetQuatDelta:u}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||220,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*1.45,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=r??8,o?(this.altitudeContext.planetCenter.copy(o),this.altitudeContext.prevPlanetCenter.copy(a||o),this.altitudeContext.hasPlanet=l!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!c,h?this.altitudeContext.planetDeltaPos.copy(h):this.altitudeContext.planetDeltaPos.set(0,0,0),u?this.altitudeContext.planetQuatDelta.copy(u):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:r=!1,onComplete:o=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const a=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new E(0,1,0)}));this.autopilot={startPos:a,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:r,onComplete:o}}setPose(e,t,n=new E(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(100,this.altitudeContext.atmoTopAlt),i=Q.clamp(t/n,0,1),r=Q.smoothstep(t,n,n+1350),o=this.altitudeContext.minSpeed??8,a=Q.lerp(o,38,Math.pow(i,.78)),l=Q.lerp(a,260,Math.pow(r,1.1)),c=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&c){const _=Q.lerp(Q.lerp(.22,.56,i),1,r);this.pulseDriveCharge=Q.lerp(this.pulseDriveCharge,_,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=Q.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const h=this.keys.boost&&c?Math.min(1,this.pulseDriveCharge/Math.max(.2,Q.lerp(.22,1,r))):this.pulseDriveCharge,u=Q.lerp(2.2,3.05,i),f=Q.lerp(u,5.8,r),g=Q.lerp(1,f,Math.min(1,h));return l*this.speedMultiplier*g}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const c=this.altitudeContext.planetQuatDelta;c.x*c.x+c.y*c.y+c.z*c.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(c),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(c).normalize(),this.velocity.applyQuaternion(c),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const c=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),h=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2,{targetPos:u,lookAtPos:d,upVec:f,useCurveNow:g}=this.autopilot.poseProvider(h,c,this.autopilot.startPos),_=this.camera.position.clone();this.autopilot.useDirectCurve||g?this.camera.position.copy(u):this.camera.position.lerpVectors(this.autopilot.startPos,u,h);const m=this.camera.clone();m.position.copy(this.camera.position),m.up.copy(f||new E(0,1,0)),m.lookAt(d),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,m.quaternion,this.autopilot.useDirectCurve?Math.min(1,h*2.2):Math.min(1,h*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(_).divideScalar(t);const p=this.autopilot.useDirectCurve?Math.sin(c*Math.PI)*9:Math.sin(c*Math.PI)*18,v=this.baseFov+p;if(this.camera.fov=Q.lerp(this.camera.fov,v,.25),this.camera.updateProjectionMatrix(),c>=1){const y=this.autopilot.onComplete;this.autopilot=null,this.velocity.multiplyScalar(.15),y&&y()}return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const c=new ut().setFromAxisAngle(new E(1,0,0),this.angularVelocity.x),h=new ut().setFromAxisAngle(new E(0,1,0),this.angularVelocity.y),u=new ut().setFromAxisAngle(new E(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(h),this.shipQuaternion.multiply(c),this.shipQuaternion.multiply(u),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=Q.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const r=new ut().setFromAxisAngle(new E(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(r);const o=new E((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),a=this._computeAdaptiveSpeedLimits(t);if(o.lengthSq()>0){o.normalize(),o.applyQuaternion(this.shipQuaternion);const c=o.multiplyScalar(a),h=Q.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(c,1-Math.exp(-h*t))}else this.velocity.multiplyScalar(Math.exp(-3.4*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0);if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const c=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,h=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),u=h.length();if(u>1e-4&&u<c){const d=h.divideScalar(u);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(d,c);const f=this.velocity.dot(d);f<0&&this.velocity.addScaledVector(d,-f)}}const l=this.baseFov+this.pulseDriveCharge*18.5;Math.abs(this.camera.fov-l)>.05&&(this.camera.fov=Q.lerp(this.camera.fov,l,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function Nn(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new St;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=nh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=nh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function nh(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new pt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function ih(s,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qa||e===Hh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===qa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class nx extends zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ax(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new yx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ir.extractUrlBase(e);o=ir.resolveURL(c,this.path)}else o=ir.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Su){try{o[xt.KHR_BINARY_GLTF]=new Sx(e)}catch(u){i&&i(u);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ux(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case xt.KHR_MATERIALS_UNLIT:o[u]=new rx;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[u]=new bx(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[u]=new wx;break;case xt.KHR_MESH_QUANTIZATION:o[u]=new Ex;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ix(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sx{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],en);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new io(h),c.distance=u;break;case"spot":c=new R_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class rx{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return pn}extendParams(e,t,n){const i=[];e.color=new ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}}class ox{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ax{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}}class lx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class cx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class hx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class dx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ie().setRGB(a[0],a[1],a[2],en),Promise.all(r)}}class fx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class px{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ie().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}}class mx{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class _x{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xx{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vx{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Mx{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class yx{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Je,m=new E,p=new ut,v=new E(1,1,1),y=new gt(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const S=l[x];y.instanceColor=new ja(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Et.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Su="glTF",Ks=12,sh={JSON:1313821514,BIN:5130562};class Sx{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Su)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ks,r=new DataView(e,Ks);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===sh.JSON){const c=new Uint8Array(e,Ks+o,a);this.content=n.decode(c)}else if(l===sh.BIN){const c=Ks+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=$a[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=$a[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=fs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,en,d)})})}}class wx{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ex{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class bu extends hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+u;for(let x=0;x!==a;x++){const S=o[_+x+a],w=o[_+x+l]*h,T=o[g+x+a],A=o[g+x]*h;r[x]=v*S+y*w+m*T+p*A}return r}}const Tx=new ut;class Ax extends bu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Tx.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rh={9728:on,9729:fn,9984:Dh,9985:Zr,9986:Zs,9987:$n},oh={33071:gi,33648:so,10497:vs},ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$a={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cx={CUBICSPLINE:void 0,LINEAR:or,STEP:rr},na={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function Ri(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Px(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Lx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ix(s){let e;const t=s.extensions&&s.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ia(t.attributes):e=s.indices+":"+ia(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ia(s.targets[n]);return e}function ia(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Dx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Nx=new Je;class Ux{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ix,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new T_(this.options.manager):this.textureLoader=new D_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ri(r,a,i),Zn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ir.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ta[i.type],a=fs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new pt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ta[i.type],c=fs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(_=new c(a,p*f,i.count*f/h),y=new lu(_,f/h),t.cache.add(v,y)),m=new cr(y,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new pt(_,l,g);if(i.sparse!==void 0){const p=ta.SCALAR,v=fs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new v(o[1],y,i.sparse.count*p),w=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,A=S.length;T<A;T++){const M=S[T];if(m.setX(M,w[T*l]),l>=2&&m.setY(M,w[T*l+1]),l>=3&&m.setZ(M,w[T*l+2]),l>=4&&m.setW(M,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=rh[d.magFilter]||fn,h.minFilter=rh[d.minFilter]||$n,h.wrapS=oh[d.wrapS]||vs,h.wrapT=oh[d.wrapT]||vs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==on&&h.minFilter!==fn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Vt(_);m.needsUpdate=!0,d(m)}),t.load(ir.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Zn(u,o),u.userData.mimeType=o.mimeType||Dx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new mn,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _l,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return et}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){const u=i[xt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zt);const h=r.alphaMode||na.OPAQUE;if(h===na.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===na.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==pn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==pn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==pn){const u=r.emissiveFactor;a.emissive=new ie().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&o!==pn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ri(i,u,r),u})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ah(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Ix(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ah(new St,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Rx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=c[f];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Yg(_,v):new dt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=ih(p.geometry,Hh):m.mode===vn.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,qa));else if(m.mode===vn.LINES)p=new fu(_,v);else if(m.mode===vn.LINE_STRIP)p=new xl(_,v);else if(m.mode===vn.LINE_LOOP)p=new Zg(_,v);else if(m.mode===vn.POINTS)p=new bn(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Lx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zn(p,r),m.extensions&&Ri(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ri(i,u[0],r),u[0];const d=new Nt;r.extensions&&Ri(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Q.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new po(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],S=f[v],w=g[v],T=_[v],A=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,S,w,T,A);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new v_(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Nx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new uu:c.length>1?h=new Nt:c.length===1?h=c[0]:h=new Et,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Zn(h,r),r.extensions&&Ri(n,h,r),r.matrix!==void 0){const u=new Je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Nt;n.name&&(r.name=i.createUniqueName(n.name)),Zn(r,n),n.extensions&&Ri(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof In||d instanceof Vt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];fi[r.path]===fi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(fi[r.path]){case fi.weights:c=ws;break;case fi.rotation:c=Es;break;case fi.position:case fi.scale:c=Ts;break;default:switch(n.itemSize){case 1:c=ws;break;case 2:case 3:default:c=Ts;break}break}const h=i.interpolation!==void 0?Cx[i.interpolation]:or,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+fi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qa(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Es?Ax:bu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Fx(s,e,t){const n=e.attributes,i=new ii;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const h=Qa(fs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new E,l=new E;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Qa(fs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ah(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=$a[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return _t.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Zn(s,e),Fx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Px(s,e.targets,t):s})}const sa=new WeakMap;class Ox extends zi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new lo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ct,n).catch(n)}decodeDracoFile(e,t,n,i,r=en,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(sa.has(e)){const l=sa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),sa.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new St;e.index&&t.setIndex(new pt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new pt(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ct)return;const n=new ie;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),_t.toWorkingColorSpace(n,Ct),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new lo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Bx.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Bx(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let v,y;if(c.useUniqueIDs)y=h[m],v=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[m]]),y===-1)continue;v=a.GetAttribute(d,y)}const x=i(o,a,d,m,p,v);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,m,_,p);const v=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:v,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Ja={uSunViewPos:{value:new E}};function q(s,e,t){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Bt(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=Math.floor(t),o=s-n,a=e-i,l=t-r,c=o*o*(3-2*o),h=a*a*(3-2*a),u=l*l*(3-2*l),d=q(n,i,r),f=q(n+1,i,r),g=q(n,i+1,r),_=q(n+1,i+1,r),m=q(n,i,r+1),p=q(n+1,i,r+1),v=q(n,i+1,r+1),y=q(n+1,i+1,r+1),x=d+(f-d)*c,S=g+(_-g)*c,w=m+(p-m)*c,T=v+(y-v)*c,A=x+(S-x)*h,M=w+(T-w)*h;return(A+(M-A)*u)*2-1}function Cs(s,e,t,n=4){let i=0,r=.5,o=1;for(let a=0;a<n;a++)i+=r*Bt(s*o+a*17.31,e*o-a*9.7,t*o+a*3.3),o*=2.03,r*=.5;return i}function xn(s,e,t){const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)}function Fi(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function zx(s=[0,1,0]){return[s,[-s[0],-s[1],-s[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new E(...t).normalize(),i=Math.abs(n.y)<.9?new E(0,1,0):new E(1,0,0),r=new E().crossVectors(n,i).normalize(),o=new E().crossVectors(n,r).normalize();return{h:n,e1:r,e2:o}})}const It=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11}].map(s=>{const e=Math.sin(s.theta);return{...s,capDir:new E(e*Math.cos(s.phi),Math.cos(s.theta),e*Math.sin(s.phi)).normalize()}});function El(s=[0,1,0]){const e=new E(s[0],s[1],s[2]).normalize(),t=new ut().setFromUnitVectors(new E(0,1,0),e);return It.map(n=>({...n,sphereDir:n.capDir.clone().applyQuaternion(t).normalize()}))}function Tl(s,e,t,n){let i=Cs(s*2-7,e*2,t*2,5);const r=Bt(s*7.4+2.3,e*7.4-1.1,t*7.4+4.2);i>-.24&&i<.06&&r>.22&&(i+=(r-.22)*.62);let o=0;if(n)for(let c=0;c<n.length;c++){const h=n[c],u=h.sphereDir,d=Q.clamp(s*u.x+e*u.y+t*u.z,-1,1),f=Math.acos(d);if(f<h.landBoostRad){const g=1-f/h.landBoostRad,_=g*g*(3-2*g);if(h.elevMode==="bay"?i=Math.max(i,-.05+_*.22):i=Math.max(i,.14+_*.34),(h.elevMode==="crater"||h.elevMode==="basin")&&f<.11){const m=1-f/.11;o=Math.max(o,m*m*.0022)}}}const a=1-Math.abs(Bt(s*5.6+1.9,e*5.6-3.4,t*5.6+.7)),l=Math.max(0,i-.1)*Math.pow(Math.max(0,a),2.1);return{cont:i,ridge:a,highlandRidge:l,craterDepression:o}}function kx(s,e,t,n=[0,1,0]){const i=new E(n[0],n[1],n[2]).normalize(),r=i.x,o=i.y,a=i.z,l=s==="p1"?El([r,o,a]):null,c=Fi(e,t),h=Fi(e,t),u=Fi(e,t),d=c.getContext("2d").createImageData(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),_=d.data,m=f.data,p=g.data,v=new Float32Array(e),y=new Float32Array(e);for(let A=0;A<e;A++){const M=(A+.5)/e*Math.PI*2;v[A]=Math.cos(M),y[A]=Math.sin(M)}const x=s==="p4"?zx([r,o,a]):null;for(let A=0;A<t;A++){const M=(A+.5)/t*Math.PI,b=Math.sin(M),P=Math.cos(M);for(let N=0;N<e;N++){const I=-v[N]*b,B=y[N]*b,z=I*r+P*o+B*a,U=(A*e+N)*4;let H=0,D=0,te=0,he=0,me=0,ze=0,We=.5;if(s==="p4"){let se=-2,ge=-2,ae=0;for(let K=0;K<x.length;K++){const Z=x[K].h,Se=I*Z.x+P*Z.y+B*Z.z;Se>se?(ge=se,se=Se,ae=K):Se>ge&&(ge=Se)}const Ee=x[ae],Re=Math.acos(Math.min(1,se)),Ne=Math.atan2(I*Ee.e2.x+P*Ee.e2.y+B*Ee.e2.z,I*Ee.e1.x+P*Ee.e1.y+B*Ee.e1.z);let ke=Math.abs(Math.cos(Re*95));ke*=ke,ke*=ke,ke*=ke,ke*=ke;const Ue=xn(.008,.02,Re);let Ke=Math.abs(Math.cos(Ne*12));Ke*=Ke,Ke*=Ke,Ke*=Ke,Ke*=Ke,Ke*=Ke;const O=Ke*xn(.02,.07,Re)*(1-xn(.45,.9,Re)),Mt=1-xn(0,.014,se-ge),Ve=q(Math.floor(I*140),Math.floor(P*140),Math.floor(B*140)),nt=q(Math.floor(I*700)+3,Math.floor(P*700),Math.floor(B*700)),Le=Bt(I*6,P*6,B*6)*.5+.5,it=(nt>.6?1:0)*(.35+.65*Ve)*(.4+.6*Le),Ie=ke*.85*Ue+O*.8+Mt*1.1+it*.45;let L,C,Y;Ve<.33?(L=1,C=.74,Y=.32):Ve<.66?(L=1,C=.88,Y=.62):(L=1,C=.52,Y=.18),he=Ie*L,me=Ie*C,ze=Ie*Y;const ne=.11+.1*Ve+.05*Le+.06*ke*Ue;H=ne*1.05,D=ne,te=ne*.95,We=.4+.3*Ve+.2*ke}else if(s==="p2"){let se=Cs(I*2.2+5.1,P*2.2,B*2.2,5);z>.62&&(se=Math.max(se,.14+(z-.62)*1.4));const ge=se>.02,ae=(se-.02)/.06,Ee=Math.exp(-ae*ae),Re=q(Math.floor(I*520),Math.floor(P*520),Math.floor(B*520)),Ne=q(Math.floor(I*90)+7,Math.floor(P*90),Math.floor(B*90)),ke=Bt(I*7+2,P*7,B*7)*.5+.5;if(z>.48&&z<=.79){const Ue=xn(.48,.58,z)*(1-xn(.75,.795,z)),Ke=Bt(I*14+3,P*14,B*14)*.5+.5,O=.23+.14*Ke,Mt=.1+.06*Ke,Ve=.06+.03*Ke;H=.08*(1-Ue)+O*Ue,D=.08*(1-Ue)+Mt*Ue,te=.09*(1-Ue)+Ve*Ue,he=0,me=0,ze=0,We=.45+.25*Ke}else if(z>.79&&z<=.942){const Ue=Re>.86?.14+.12*Ne:0;he=Ue*.92,me=Ue*(Ne>.5?.48:.2),ze=Ue*.14,H=.05+.03*Ne,D=.055+.03*Ne,te=.065+.03*Ne,We=.48+.2*Ne}else if(ge){const Ue=z>.942?.85:0,Ke=(Re>.52?1:0)*(Ee*1.1+.14*ke+Ue)*(.42+.58*Ne);let O,Mt,Ve;ke>.62?(O=1,Mt=.16,Ve=.62):Ne>.5?(O=.1,Mt=.85,Ve=1):(O=.65,Mt=.8,Ve=1),he=Ke*O,me=Ke*Mt,ze=Ke*Ve,H=.07+.04*Ne,D=.08+.04*Ne,te=.1+.05*Ne,We=.55+se*.4}else{const Ue=xn(-.35,.02,se);H=.01+.02*Ue,D=.03+.04*Ue,te=.06+.06*Ue,We=.3}}else if(s==="p3"){let se=Cs(I*1.8+11,P*1.8,B*1.8,5);z>.84&&(se=Math.max(se,.08+(z-.84)*.8));const ge=1-Math.abs(Bt(I*7+3,P*7,B*7)),ae=Math.max(0,se-.12)*ge*ge*3*(z>.9?.2:1),Ee=Bt(I*14,P*14,B*14);if(se>0)We=.45+se*.6+ae*.6,P<-.9||P>.93?(H=.9,D=.93,te=.96):ae>.6?(H=.88,D=.9,te=.94):ae>.25?(H=.36,D=.31,te=.26):Ee>.3&&z<.9?(H=.07,D=.2,te=.07):(H=.15+.04*Ee,D=.34+.05*Ee,te=.11),q(Math.floor(I*300),Math.floor(P*300),Math.floor(B*300))>.996&&(he=.9,me=.62,ze=.3);else{const Re=xn(-.25,0,se);H=.02+.03*Re,D=.08+.12*Re,te=.22+.13*Re,(P<-.92||P>.94)&&(H=.88,D=.92,te=.96),We=.3+se*.3}}else{const{cont:se,highlandRidge:ge}=Tl(I,P,B,l),ae=Bt(I*11,P*11,B*11);if(se>0){const Ee=Math.min(1,ge*2.4);H=.08+.06*ae+Ee*.11,D=.34+.11*ae-Ee*.06,te=.1+.05*ae+Ee*.03;let Re=1-Math.abs(Bt(I*9+1,P*9,B*9)),Ne=1-Math.abs(Bt(I*23+5,P*23,B*23));Re=Math.pow(Re,14),Ne=Math.pow(Ne,20);const ke=Re*.9+Ne*.55;Bt(I*3+9,P*3,B*3)>0?(he=ke*.12,me=ke*.95,ze=ke*1):(he=ke*.85,me=ke*.18,ze=ke*1),We=.5+se*.65+ge*.35}else{const Ee=xn(-.32,0,se);H=.01+.05*Ee,D=.24+.38*Ee,te=.38+.34*Ee;const Re=xn(-.09,0,se)*.58;he=Re*.08,me=Re*.85,ze=Re*1,We=.3}}_[U]=H*255,_[U+1]=D*255,_[U+2]=te*255,_[U+3]=255,m[U]=he*255,m[U+1]=me*255,m[U+2]=ze*255,m[U+3]=255;const ee=We*255;p[U]=ee,p[U+1]=ee,p[U+2]=ee,p[U+3]=255}}c.getContext("2d").putImageData(d,0,0),h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0);const S=new an(c);S.colorSpace=Ct,S.anisotropy=8;const w=new an(h);w.colorSpace=Ct,w.anisotropy=8;const T=new an(u);return{map:S,emissiveMap:w,bumpMap:T}}function Gx(s,e=1024,t=512,n=[0,1,0]){const i=new E(n[0],n[1],n[2]).normalize(),r=i.x,o=i.y,a=i.z,l=Fi(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.05,hi:.38,col:[1,1,1],k:.82},p2:{lo:-.18,hi:.25,col:[.2,.22,.28],k:.9},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[s]||{lo:.1,hi:.4,col:[1,1,1],k:.7};for(let g=0;g<t;g++){const _=(g+.5)/t*Math.PI,m=Math.sin(_),p=Math.cos(_);for(let v=0;v<e;v++){const y=(v+.5)/e*Math.PI*2,x=-Math.cos(y)*m,S=Math.sin(y)*m,w=x*r+p*o+S*a,T=Bt(x*2+4,p*2,S*2)*.35,A=Cs(x*3.2+20+T,p*5,S*3.2-T,5);let M=xn(d.lo,d.hi,A)*d.k;d.clearNorth&&(M*=1-xn(.78,.9,w));const b=(g*e+v)*4;u[b]=d.col[0]*255,u[b+1]=d.col[1]*255,u[b+2]=d.col[2]*255,u[b+3]=M*255}}c.putImageData(h,0,0);const f=new an(l);return f.colorSpace=Ct,f.anisotropy=8,f}function Vx(s,e=.06){s.onBeforeCompile=t=>{t.uniforms.uSunViewPos=Ja.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},s.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function Hx(){const s=Fi(128,128),e=s.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 255, 255, 0.92)"),t.addColorStop(.35,"rgba(242, 248, 255, 0.56)"),t.addColorStop(.7,"rgba(215, 232, 255, 0.18)"),t.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new an(s);return n.needsUpdate=!0,n}function lh(s,e){return new Gt({uniforms:{uCloudMap:{value:s},uSunPosition:{value:new E(0,0,0)},uPlanetCenter:{value:new E(0,0,0)},uAmbientColor:{value:new ie(e.ambient)},uSunColor:{value:new ie(e.sunlit)},uHorizonColor:{value:new ie(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1,side:zt})}function Wx(){const s=new Jt(28e3,48,32),e=new Gt({uniforms:{uLocalUp:{value:new E(0,1,0)},uSunDir:{value:new E(0,.2,1)},uZenithColor:{value:new ie(1991880)},uMidColor:{value:new ie(5155054)},uHorizonColor:{value:new ie(16760171)},uSunGlowColor:{value:new ie(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:Qt}),t=new dt(s,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t}function Xx(s,e=157.5){const t=s.localRadius,n=new Nt;n.name=`${s.id}_Orbital_Globe`;const i=s.capLocalDir?s.capLocalDir.clone().normalize():new E(0,1,0),r=[i.x,i.y,i.z],o={p4:[2048,1024],p2:[1536,768]}[s.id]||[1024,512],{map:a,emissiveMap:l,bumpMap:c}=kx(s.id,o[0],o[1],r),h={p1:{ei:2.1,rough:.76,metal:.05,bump:1.2,floor:0},p2:{ei:1.75,rough:.55,metal:.35,bump:.6,floor:.04},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[s.id],u=new et({map:a,emissiveMap:l,emissive:new ie(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});Vx(u,h.floor);const d=new dt(new Jt(t,128,128),u);d.name=`${s.id}_Orbital_Surface`,n.add(d);const f=Gx(s.id,1024,512,r),g={p1:{ambient:1858672,sunlit:14219519,horizon:2400946},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[s.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},_=lh(f,g),m=new dt(new Jt(t*1.012,128,128),_);m.name=`${s.id}_Low_Cloud_Shell`,n.add(m);const p=lh(f,g),v=new dt(new Jt(t*1.024,128,128),p);v.name=`${s.id}_High_Cloud_Shell`,n.add(v);const y=new Nt;y.name=`${s.id}_Lower_Cloud_Puffs_Group`,y.visible=!1,n.add(y);const x=380,S=new Float32Array(x*3),w=18/e,T=45/e,A=new ut().setFromUnitVectors(new E(0,1,0),i),M=new E;for(let B=0;B<x;B++){const z=Math.acos(1-q(B,2,17)*.42),U=q(B,9,5)*Math.PI*2,H=w+q(B,4,13)*(T-w),D=t+H;M.set(D*Math.sin(z)*Math.cos(U),D*Math.cos(z),D*Math.sin(z)*Math.sin(U)),M.applyQuaternion(A),S[B*3]=M.x,S[B*3+1]=M.y,S[B*3+2]=M.z}const b=new St;b.setAttribute("position",new pt(S,3));const P=new mn({map:Hx(),color:g.sunlit,size:46,transparent:!0,opacity:0,depthWrite:!1,fog:!1,sizeAttenuation:!0}),N=new bn(b,P);y.add(N);const I=wu(s,t,s.id==="p4"?1.034:1.052);return n.add(I),{group:n,surfaceMesh:d,upperCloudMesh:v,lowerCloudGroup:y,lowerCloudMesh:m,lowerCloudPuffs:N,cloudDeckPalette:g,atmosphere:I}}function wu(s,e,t=1.045){const n=new Jt(e*t,96,96),i={p1:[6281471,11558143],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[s.id]||[6866175,16755285],r=new Gt({uniforms:{uColorDay:{value:new ie(i[0])},uColorHorizon:{value:new ie(i[1])},uSunPosition:{value:new E(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Yt,side:Bn}),o=new dt(n,r);return o.name=`${s.id}_Fresnel_Atmosphere`,o}function qx(s,e=1400){const t=s.localRadius,n=s.id==="p4",i=256,r=Fi(i,i),o=Fi(i,i),a=r.getContext("2d"),l=o.getContext("2d");a.fillStyle=n?"#2a2c31":"#111821",a.fillRect(0,0,i,i),l.fillStyle="#000000",l.fillRect(0,0,i,i);const c=n?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let v=4;v<i;v+=8)for(let y=3;y<i;y+=6)Math.random()<(n?.55:.42)&&(l.fillStyle=c[Math.random()*c.length|0],l.fillRect(y,v,3,4));const h=new an(r);h.colorSpace=Ct;const u=new an(o);u.colorSpace=Ct;const d=new Kt(1,1,1);d.translate(0,.5,0);const f=new et({map:h,emissiveMap:u,emissive:new ie(1,1,1),emissiveIntensity:n?1.6:2,roughness:.42,metalness:.7}),g=new gt(d,f,e);g.name=`${s.id}_Horizon_Tower_Band`;const _=new Et,m=new E(0,1,0),p=new E;for(let v=0;v<e;v++){const y=.118+Math.pow(q(v,3,9),.85)*.38,x=q(v,7,1)*Math.PI*2;p.set(Math.sin(y)*Math.cos(x),Math.cos(y),Math.sin(y)*Math.sin(x)),_.position.copy(p).multiplyScalar(t*.998),_.quaternion.setFromUnitVectors(m,p),_.rotateY(q(v,2,2)*Math.PI);const S=t*(.0024+.0042*q(v,5,5)),w=t*(.0024+.0042*q(v,6,8)),T=t*(.006+.025*Math.pow(q(v,9,4),1.6));_.scale.set(S,T,w),_.updateMatrix(),g.setMatrixAt(v,_.matrix)}return g.instanceMatrix.needsUpdate=!0,g}function Yx(s,e,t,n){s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrixWorld(!0);const i=n==="p2",r=new E(0,1,0),o=e/t,a=i?124:152;function l(v,y,x,S=!1){const w=Math.sqrt(v*v+x*x),T=Math.min(1.18,w/(o*.94)),A=Math.atan2(x,v),M=Math.sin(T),b=M*Math.cos(A),P=Math.cos(T),N=M*Math.sin(A);let I=y;if(S){const U=Q.smoothstep(w,a*.65,a*1);I=Q.lerp(y,i?-36:-18,U)}const B=n==="p3"?14.5:i?16.5:.4,z=Math.max(o*.9,o+I+B);return{px:z*b,py:z*P-o,pz:z*N,nx:b,ny:P,nz:N}}const c=new Je().copy(s.matrixWorld).invert(),h=[],u=new Map;s.traverse(v=>{if(v.isMesh&&v.geometry){const y=new Je().multiplyMatrices(c,v.matrixWorld);h.push({mesh:v,initRootMat:y}),u.set(v.geometry,(u.get(v.geometry)||0)+1)}});for(const{mesh:v,initRootMat:y}of h)v.parent!==s&&s.attach(v),y.decompose(v.position,v.quaternion,v.scale),v.updateMatrix();const d=new E,f=new ut,g=new E,_=new E,m=new ut,p=new E;for(const{mesh:v,initRootMat:y}of h){if(i){if(/^NC_FarHorizon/.test(v.name)){v.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(v.name)&&(d.setFromMatrixPosition(y),Math.hypot(d.x,d.z)>128)){v.visible=!1;continue}}const x=u.get(v.geometry)||1,S=/Terrain|River|Ground|Forest|Canal/.test(v.name);if(x===1||S){x>1&&(v.geometry=v.geometry.clone());const w=v.geometry.attributes.position,T=new Je().copy(y).invert();for(let A=0;A<w.count;A++){p.fromBufferAttribute(w,A).applyMatrix4(y);const M=l(p.x,p.y,p.z,S);p.set(M.px,M.py,M.pz).applyMatrix4(T),w.setXYZ(A,p.x,p.y,p.z)}w.needsUpdate=!0,v.geometry.computeVertexNormals(),v.geometry.computeBoundingBox(),v.geometry.computeBoundingSphere()}else{if(y.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(v.name)){const T=Math.hypot(d.x,d.z),A=1-Q.smoothstep(T,95,128)*.46;g.y*=A}const w=l(d.x,d.y,d.z,!1);_.set(w.nx,w.ny,w.nz).normalize(),m.setFromUnitVectors(r,_),v.position.set(w.px,w.py,w.pz),v.quaternion.copy(m).multiply(f),v.scale.copy(g),v.updateMatrix()}}s.scale.setScalar(t),s.position.set(0,e,0),s.updateMatrixWorld(!0)}const de=1/3.5,yn=new E(0,1,0),Al=new ut().setFromUnitVectors(yn,new E(0,Math.cos(Q.degToRad(68)),Math.sin(Q.degToRad(68))).normalize()),Cl=El([0,Math.cos(Q.degToRad(68)),Math.sin(Q.degToRad(68))]),ch=new E,Xr=new E;function Kx(s,e,t,n=0){const i=Math.sin(e),r=i*Math.cos(t),o=Math.cos(e),a=i*Math.sin(t),l=s+n;return{pos:new E(l*r,l*o,l*a),normal:new E(r,o,a)}}function ps(s,e,t,n=Al,i=Cl){ch.set(s,e,t).normalize(),Xr.copy(ch).applyQuaternion(n).normalize();const r=Xr.x,o=Xr.y,a=Xr.z,{cont:l,ridge:c,highlandRidge:h,craterDepression:u}=Tl(r,o,a,i);let d=0,f="ocean";if(l<=0){const g=Q.smoothstep(l,-.26,0);d=Q.lerp(-.0052,-4e-4,g),f=l>-.1?"reef":"ocean"}else{const g=Cs(r*16+3.1,o*16-1.4,a*16+2.7,3),_=Q.smoothstep(l,0,.16),m=h*.011;d=_*.0014+Math.max(0,g*.5+.35)*.0042*_+m-u,d=Math.max(5e-4,d),h>.032?f="canyon":l<.075?f="archipelago":f="forest"}return{cont:l,ridge:c,highlandRidge:h,elev:d,biome:f,sx:r,sy:o,sz:a}}function ra(s,e,t,n=0,i=null){const r=i?.qCap||Al,o=i?.sphereLandmarks||Cl;return ps(s,e,t,r,o).elev}function hh(s,e,t,n){e.copy(s).multiplyScalar(n),t.setFromUnitVectors(yn,s)}function vi(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new E(1,0,0):new E(0,0,1),n=new E().crossVectors(e,t).normalize(),i=new E().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Mi(s,e,t,n,i,r,o){const a=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=ps(a.x,a.y,a.z,r,o).elev;return{pos:a.clone().multiplyScalar(s+l+i),normal:a,elev:l}}function jx(s,e=null){const t=e?.qCap||Al,n=e?.sphereLandmarks||Cl,i=[{anchor:new E(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new E(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:It[2].capDir.clone(),span:.26,angle:.8,amp:.042,steps:36},{anchor:It[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:It[4].capDir.clone(),span:.24,angle:-.7,amp:.042,steps:36},{anchor:new E(-.75,.35,.56).normalize(),span:.24,angle:1.4,amp:.04,steps:32},{anchor:new E(.68,-.45,-.58).normalize(),span:.24,angle:-2,amp:.04,steps:32}],r=[];for(const o of i){const a=vi(o.anchor),l=Math.cos(o.angle),c=Math.sin(o.angle),h=[];for(let u=0;u<=o.steps;u++){const d=u/o.steps,f=(d-.5)*o.span,g=Math.sin(d*Math.PI*2.4)*o.amp,_=f*l-g*c,m=f*c+g*l,p=Mi(s,a,_,m,55e-5,t,n);h.push({theta:Math.acos(Q.clamp(p.normal.y,-1,1)),phi:Math.atan2(p.normal.z,p.normal.x),...p})}r.push(h)}return r}function co(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function Zx(s,e,t,n){const i=new Ml(1,2),r=i.attributes.position,o=r.count,a=new Float32Array(o*3),l=new ie(2055213),c=new ie(2783806),h=new ie(3817286),u=new ie(1974824),d=new ie;for(let f=0;f<o;f++){let g=r.getX(f),_=r.getY(f),m=r.getZ(f);const p=Bt(g*2.7+s*3.1,_*2.4-s,m*2.7+s*1.9),v=Bt(g*5.5+s*7.3,_*4.5,m*5.5);if(_>.15){const y=.25+(_-.15)*.22+.08*p,x=1+.18*p;g*=e*x,m*=t*x,_=n*y,d.copy(l).lerp(c,Math.max(0,v)*.65)}else{const y=Math.min(1,(.15-_)/1.15),x=Math.pow(1-y*.86,1.25),S=1+.34*p+.16*v;g*=e*x*S,m*=t*x*S,_=-n*y*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,y*.72+Math.max(0,-p)*.28)}r.setXYZ(f,g,_,m),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}return i.setAttribute("color",new pt(a,3)),i.computeVertexNormals(),i}function Rl(s,e,t,n,i,r,o,a,l,c,h){const u=Mi(s,e,t,n,-.0025*de,c,h).pos,d=Mi(s,e,i,r,-.0025*de,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(s+o*.74),_=f.clone().multiplyScalar(s+o),m=u.clone().lerp(d,.74).normalize().multiplyScalar(s+o*.76),p=new Bi([u,g,_,m,d]),v=new Ls(p,24,a,8,!1),y=v.attributes.position,x=v.attributes.normal,S=new Float32Array(y.count*3),w=new ie(3290942),T=new ie(2316332),A=new ie(3700796),M=new E,b=new E,P=new ie;for(let N=0;N<y.count;N++){M.fromBufferAttribute(y,N),b.fromBufferAttribute(x,N);const I=Bt(M.x*220+l*3.7,M.y*220,M.z*220-l),B=Bt(M.x*520,M.y*520,M.z*520),z=M.clone().normalize(),U=Math.max(0,b.dot(z));M.addScaledVector(b,a*(.36*I+.16*B)),y.setXYZ(N,M.x,M.y,M.z),P.copy(w).lerp(T,Math.pow(U,1.25)),U>.45&&B>.2&&P.lerp(A,.48),S[N*3]=P.r,S[N*3+1]=P.g,S[N*3+2]=P.b}return v.setAttribute("color",new pt(S,3)),v.computeVertexNormals(),{geo:v,curve:p,apex:_}}function $x(s){const e=new jt(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new ie(2764600),r=new ie(2381356),o=new ie(3568190),a=new ie;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Bt(c*3.8+s*2.1,h*4.5,u*3.8-s),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),a.copy(i).lerp(r,Q.smoothstep(h,.22,.72)),h>.72&&d>.1&&a.lerp(o,.45),n[l*3]=a.r,n[l*3+1]=a.g,n[l*3+2]=a.b}return e.setAttribute("color",new pt(n,3)),e.computeVertexNormals(),e}function Qx(s,e){const t=[],n=[],i=new E,r=new E,o=new E;s.forEach((f,g)=>{const _=f.length,m=e[g]||.008*de,p=[],v=[],y=[];for(let S=0;S<_;S++){const w=f[S],T=f[Math.max(0,S-1)],A=f[Math.min(_-1,S+1)];i.copy(A.pos).sub(T.pos).normalize(),o.copy(w.normal),r.crossVectors(i,o).normalize();const M=1+.22*Math.sin(S*.45+g),b=m*M,P=b*.24,N=w.pos.clone().addScaledVector(r,-b),I=w.pos.clone().addScaledVector(r,b),B=w.pos.clone().addScaledVector(r,-(b+P)).addScaledVector(o,14e-5),z=w.pos.clone().addScaledVector(r,b+P).addScaledVector(o,14e-5);p.push(N.x,N.y,N.z,I.x,I.y,I.z),v.push(B.x,B.y,B.z,N.x,N.y,N.z),y.push(I.x,I.y,I.z,z.x,z.y,z.z)}const x=S=>{const w=[];for(let A=0;A<_-1;A++){const M=A*2,b=M+1,P=M+2,N=M+3;w.push(M,b,P,b,N,P)}const T=new St;return T.setAttribute("position",new Ut(S,3)),T.setIndex(w),T.computeVertexNormals(),T.toNonIndexed()};t.push(x(p)),n.push(x(v),x(y))});const a=Nn(t,!1),l=Nn(n,!1),c=new et({color:953508,emissive:35e3,emissiveIntensity:0,roughness:.1,metalness:.55,transparent:!0,opacity:.9,depthWrite:!1}),h=new et({color:1994328,emissive:62975,emissiveIntensity:0,roughness:.4,transparent:!0,opacity:.88,depthWrite:!1}),u=new dt(a,c);u.name="Pandora_Global_Rivers_Water";const d=new dt(l,h);return d.name="Pandora_Global_Rivers_Banks",{waterMesh:u,bankMesh:d,waterMat:c,bankMat:h}}function Jx(){const s=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=new Si(.32,1,2,3),r=i.attributes.position;for(let o=0;o<r.count;o++){const a=Q.clamp(r.getY(o)+.5,0,1),l=r.getX(o)*(1-Math.pow(a,1.4)*.85),c=-a*a*.38;r.setXYZ(o,l,a*.52,c+a*.75)}i.rotateX(.45),i.rotateY(n),i.computeVertexNormals(),s.push(i.toNonIndexed())}const e=Nn(s,!1);return e.computeVertexNormals(),co(e,1)}function ev(){const s=[],e=new Bi([new E(0,0,0),new E(.06,.38,.03),new E(.14,.78,-.02),new E(.18,1,0)]),t=new Ls(e,6,.055,5,!1).toNonIndexed();s.push(t);for(let i=0;i<6;i++){const r=i/6*Math.PI*2,o=new Si(.24,.65,1,2);o.translate(0,.32,0),o.rotateX(1.08),o.rotateY(r),o.translate(.18,.96,0),s.push(o.toNonIndexed())}const n=Nn(s,!1);return n.computeVertexNormals(),co(n,1)}function tv(){const s=[];for(let t=0;t<5;t++){const n=new Ui(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/5*Math.PI*2),s.push(n.toNonIndexed())}const e=Nn(s,!1);return e.computeVertexNormals(),e}function nv(){const s=[],e=new Jt(1,10,6,0,Math.PI*2,0,Math.PI*.56);e.scale(1,.42,1),e.translate(0,.9,0),s.push(e.toNonIndexed());const t=new jt(.14,.25,.94,6,1);t.translate(0,.47,0),s.push(t.toNonIndexed());const n=Nn(s,!1);return n.computeVertexNormals(),n}function Eu(){const s=new Jt(1,10,5,0,Math.PI*2,0,Math.PI*.52);s.scale(1.05,.28,1.05),s.computeVertexNormals(),co(s,1);const e=new Ui(.96,.18,10,1,!0);return e.rotateX(Math.PI),e.translate(0,-.02,0),e.computeVertexNormals(),co(e,-1),{outer:s,under:e}}function iv(s,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const r=i.getContext("2d"),o=r.createImageData(1024,512),a=o.data,l=It[3].capDir,c=It[4].capDir,h=new E;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),_=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,v=-Math.cos(p)*g,y=Math.sin(p)*g;h.set(v,_,y).applyQuaternion(s);const{cont:x}=Tl(h.x,h.y,h.z,e);let S=0,w=0,T=0;if(x>0){let M=1-Math.abs(Bt(v*14+1,_*14,y*14)),b=1-Math.abs(Bt(v*36+5,_*36,y*36));M=Math.pow(Math.max(0,M),11),b=Math.pow(Math.max(0,b),14);const P=q(Math.floor(v*320),Math.floor(_*320),Math.floor(y*320))>.985?.85:0,N=Math.min(1,M*.95+b*.65+P*.55),I=Bt(v*4.5+9,_*4.5,y*4.5);I>.1?(S=N*.08,w=N*.95,T=N*1):I<-.25?(S=N*1,w=N*.42,T=N*.08):(S=N*.78,w=N*.16,T=N*1);const B=Math.acos(Q.clamp(v*l.x+_*l.y+y*l.z,-1,1));if(B<.09){const U=Math.pow(1-B/.09,1.5);S=Math.min(1,S+U*.88),w=Math.min(1,w+U*.45),T=Math.min(1,T+U*1)}const z=Math.acos(Q.clamp(v*c.x+_*c.y+y*c.z,-1,1));if(z<.09){const U=Math.pow(1-z/.09,1.6);S=Math.min(1,S+U*.95),w=Math.min(1,w+U*.22),T=Math.min(1,T+U*.78)}}else{const M=Q.smoothstep(x,-.095,-.002)*.72;S=M*.06,w=M*.88,T=M*1}const A=(d*1024+m)*4;a[A]=Math.min(255,S*255),a[A+1]=Math.min(255,w*255),a[A+2]=Math.min(255,T*255),a[A+3]=255}}r.putImageData(o,0,0);const u=new an(i);return u.colorSpace=Ct,u}function sv(s,e,t,n,i){const r=vi(e.capDir),o=Mi(s,r,0,0,-.001,t,n),a=new Nt;a.name="Pandora_Landmark_Hometree",a.position.copy(o.pos),a.quaternion.setFromUnitVectors(yn,o.normal);const l=new et({color:3877405,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:l,dayColor:3877405,nightColor:1449006,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const c=.56*de,h=new jt(.065*de,.14*de,c,14,14,!0);h.translate(0,c*.5,0);const u=h.attributes.position;for(let x=0;x<u.count;x++){const S=u.getX(x),w=u.getY(x),T=u.getZ(x),A=w/c,M=A*2.4,b=1+.24*Math.sin(Math.atan2(T,S)*6+M),P=A<.25?1+Math.pow((.25-A)/.25,1.5)*.65:1,N=(S*Math.cos(M*.35)-T*Math.sin(M*.35))*b*P,I=(S*Math.sin(M*.35)+T*Math.cos(M*.35))*b*P;u.setXYZ(x,N,w,I)}h.computeVertexNormals(),a.add(new dt(h,l));for(let x=0;x<14;x++){const S=x/14*Math.PI*2+(q(x,3,7)-.5)*.15,w=(.14+q(x,8,2)*.09)*de,T=(.12+q(x,5,4)*.18)*de,A=new Bi([new E(Math.cos(S)*.06*de,T,Math.sin(S)*.06*de),new E(Math.cos(S)*w*.62,T*.62,Math.sin(S)*w*.62),new E(Math.cos(S)*w,-.015*de,Math.sin(S)*w)]),M=new dt(new Ls(A,12,.012*de,6,!1),l);a.add(M)}const d=new et({color:1992238,emissive:407618,emissiveIntensity:0,roughness:.65});i.push({mat:d,dayColor:1992238,nightColor:537660,dayEmissive:407618,nightEmissive:416876,dayEI:0,nightEI:.72});const f=new et({color:3041336,emissive:65512,emissiveIntensity:0,roughness:.35,side:zt});i.push({mat:f,dayColor:3041336,nightColor:61695,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const g=new et({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:g,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const _=[.34*de,.28*de,.21*de,.14*de],m=[.34*de,.44*de,.53*de,.61*de],{outer:p,under:v}=Eu();for(let x=0;x<_.length;x++){const S=_[x],w=m[x],T=new dt(p,d);T.position.set(0,w,0),T.scale.set(S,S*.9,S),a.add(T);const A=new dt(v,f);A.position.set(0,w-.004*de,0),A.scale.set(S*.98,S*.9,S*.98),a.add(A)}const y=new dt(new Jt(.055*de,12,8),g);return y.position.set(0,.06*de,0),a.add(y),{group:a,anchorDir:o.normal,anchorPos:o.pos}}function rv(s,e,t,n,i){const r=vi(e.capDir),o=Mi(s,r,0,0,-5e-4,t,n),a=new Nt;a.name="Pandora_Landmark_TreeOfSouls";const l=new et({vertexColors:!0,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:l,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let S=0;S<7;S++){const w=S/7*Math.PI*2,T=w+Math.PI*.88,A=.072,{geo:M}=Rl(s,r,Math.cos(w)*A,Math.sin(w)*A,Math.cos(T)*A,Math.sin(T)*A,(.145+S%3*.025)*de,.011*de,50+S,t,n);a.add(new dt(M,l))}const c=new Nt;c.position.copy(o.pos),c.quaternion.setFromUnitVectors(yn,o.normal),a.add(c);const h=new et({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:h,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1});const u=new dt(new jt(.18*de,.2*de,.004*de,24),h);c.add(u);const d=new et({color:10392232,emissive:8409296,emissiveIntensity:.05,roughness:.7});i.push({mat:d,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:.05,nightEI:1.1});const f=.25*de,g=new jt(.024*de,.055*de,f,10,8);g.translate(0,f*.5,0),c.add(new dt(g,d));const _=new Jt(.13*de,12,8);_.scale(1.25,.35,1.25),_.translate(0,f*.96,0),c.add(new dt(_,d));const m=340,p=new jt(.0014*de,5e-4*de,1,4,1);p.translate(0,-.5,0);const v=new et({color:14076140,emissive:15120639,emissiveIntensity:.06,roughness:.28,transparent:!0,opacity:.92});i.push({mat:v,dayColor:14076140,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:.06,nightEI:2.35,pulsePhase:.2});const y=new gt(p,v,m);y.name="Pandora_TreeOfSouls_Filaments";const x=new Et;for(let S=0;S<m;S++){const w=q(S,4,17)*Math.PI*2,T=(.015+Math.sqrt(q(S,8,11))*.135)*de,A=(.08+q(S,3,19)*.13)*de;x.position.set(Math.cos(w)*T,f*.95,Math.sin(w)*T),x.rotation.set((q(S,1,5)-.5)*.14,w,(q(S,2,7)-.5)*.14),x.scale.set(1,A,1),x.updateMatrix(),y.setMatrixAt(S,x.matrix)}return y.instanceMatrix.needsUpdate=!0,c.add(y),{group:a,anchorDir:o.normal,anchorPos:o.pos}}function ov(s,e,t,n,i,r,o){const a=vi(e.capDir),l=new Nt;l.name="Pandora_Landmark_HallelujahMountains";const c=new et({vertexColors:!0,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:c,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const h=new pn({color:new ie(.85,.96,1),transparent:!0,opacity:.56,side:zt,depthWrite:!1});i.push({mat:h,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const u=[],d=32;new Et;for(let _=0;_<d;_++){const m=_===0?0:.03+Math.sqrt(q(_,4,11))*.14,p=_*2.39996+q(_,7,3)*.45,v=(_===0?.24:.078+q(_,9,2)*.21)*de,y=Mi(s,a,Math.cos(p)*m,Math.sin(p)*m,v,t,n),x=(_===0?.095:.036+q(_,2,5)*.056)*de,S=x*(.72+q(_,5,8)*.45),w=(_===0?.145:.052+q(_,6,1)*.082)*de,T=Zx(_+1,x,S,w),A=new dt(T,c);A.position.copy(y.pos),A.quaternion.setFromUnitVectors(yn,y.normal),A.rotateY(q(_,1,8)*Math.PI*2),l.add(A),u.push({pos:y.pos,normal:y.normal,rx:x,rz:S,h:w,alt:v});for(let M=0;M<7;M++){const b=q(_,M,14)*Math.PI*2,P=.25+q(_,M,2)*.55,N=new E(Math.cos(b)*x*P,-w*.34,Math.sin(b)*S*P);N.applyQuaternion(A.quaternion),o.push({pos:y.pos.clone().add(N),normal:y.normal,length:(.016+q(_,M,8)*.036)*de})}if(_<15){const M=v+.015*de,b=(.0065+q(_,12,4)*.0075)*de,P=new Si(b,M,2,10),N=P.attributes.position;for(let D=0;D<N.count;D++){const he=(N.getY(D)+M*.5)/M,me=Math.sin((1-he)*Math.PI*.5)*.014*de;N.setZ(D,me)}P.computeVertexNormals();const I=q(_,3,6)*Math.PI*2,B=new E(Math.cos(I)*x*.72,0,Math.sin(I)*S*.72),z=new ut().setFromUnitVectors(yn,y.normal);B.applyQuaternion(z);const U=y.pos.clone().add(B).addScaledVector(y.normal,-M*.5+w*.16),H=new dt(P,h);H.position.copy(U),H.quaternion.copy(z),H.rotateY(I+Math.PI*.5),l.add(H),r.push({mesh:H,material:h,phase:_*1.17})}}const f=new et({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:f,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const g=[];for(let _=0;_<d;_++){const m=u[_];let p=-1,v=.25*de;for(let y=_+1;y<d;y++){const x=u[y],S=m.pos.distanceTo(x.pos);S>(m.rx+x.rx)*.85&&S<v&&(v=S,p=y)}if(p>=0){const y=u[p],x=m.pos.clone().add(y.pos).multiplyScalar(.5),S=x.clone().normalize().multiplyScalar(-v*.18);x.add(S);const w=new Bi([m.pos.clone(),x,y.pos.clone()]);g.push(new Ls(w,12,.0014*de,5,!1).toNonIndexed())}}if(g.length>0){const _=new dt(Nn(g,!1),f);_.name="Pandora_Hallelujah_VineBridges",l.add(_)}return{group:l,islandsData:u,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(s)}}function av(s,e,t,n,i,r){const o=vi(e.capDir),a=new Nt;a.name="Pandora_Landmark_IkranRookery";const l=new et({vertexColors:!0,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:l,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const c=[];return[[-.08,-.05,.08,.05,.21*de,.015*de],[-.06,.07,.07,-.06,.24*de,.016*de],[-.1,.01,.02,.09,.17*de,.013*de],[.01,-.09,.09,.02,.18*de,.013*de],[-.09,-.02,.05,.07,.15*de,.012*de],[-.04,-.08,.08,-.02,.16*de,.011*de],[-.07,.04,.03,-.07,.19*de,.012*de],[-.03,.08,.09,.06,.14*de,.011*de]].forEach(([u,d,f,g,_,m],p)=>{const{geo:v,curve:y,apex:x}=Rl(s,o,u,d,f,g,_,m,10+p,t,n),S=new dt(v,l);S.name=`Pandora_IkranRookery_Arch_${p+1}`,a.add(S),c.push({apex:x,normal:x.clone().normalize()});for(let w=0;w<14;w++){const T=.2+w/13*.6,A=y.getPoint(T),M=A.clone().normalize();r.push({pos:A.addScaledVector(M,-m*.65),normal:M,length:(.014+q(w,p,19)*.026)*de})}}),{group:a,archCenters:c,anchorDir:o.upDir,anchorPos:o.upDir.clone().multiplyScalar(s)}}function lv(s,e,t,n,i){const r=vi(e.capDir),o=new Nt;o.name="Pandora_Landmark_MushroomGeysers";const a=new et({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:a,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new jt(.18,.95,1,9,1);c.translate(0,.5,0);const h=new gt(c,a,l);h.name="Pandora_Geyser_Vents";const u=[],d=new Et;for(let A=0;A<l;A++){const M=A/l*Math.PI*2+q(A,3,7)*.4,b=.014+q(A,9,2)*.068,P=Mi(s,r,Math.cos(M)*b,Math.sin(M)*b,-5e-4,t,n),N=(.008+q(A,2,11)*.006)*de,I=(.014+q(A,5,13)*.012)*de;d.position.copy(P.pos),d.quaternion.setFromUnitVectors(yn,P.normal),d.scale.set(N,I,N),d.updateMatrix(),h.setMatrixAt(A,d.matrix),u.push({basePos:P.pos.clone().addScaledVector(P.normal,I*.95),normal:P.normal.clone(),phase:q(A,6,4)*Math.PI*2,maxHeight:(.065+q(A,8,9)*.055)*de})}h.instanceMatrix.needsUpdate=!0,o.add(h);const f=22,g=l*f,_=new Float32Array(g*3),m=new Float32Array(g*3);for(let A=0;A<g;A++)m[A*3]=.78,m[A*3+1]=.94,m[A*3+2]=1;const p=new St;p.setAttribute("position",new pt(_,3)),p.setAttribute("color",new pt(m,3));const v=document.createElement("canvas");v.width=64,v.height=64;const y=v.getContext("2d"),x=y.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(255, 255, 255, 0.85)"),x.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),x.addColorStop(1,"rgba(0, 0, 0, 0.0)"),y.fillStyle=x,y.fillRect(0,0,64,64);const S=new an(v);S.needsUpdate=!0;const w=new mn({size:5.5,map:S,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:Yt,sizeAttenuation:!0}),T=new bn(p,w);return T.name="Pandora_Geyser_Plumes",T.frustumCulled=!1,o.add(T),{group:o,geyserEmitters:u,plumeGeo:p,plumeMat:w,puffsPerGeyser:f,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(s)}}function cv(s){const e=s.localRadius,t=s.capLocalDir?s.capLocalDir.clone().normalize():new E(0,1,0),n=new ut().setFromUnitVectors(yn,t),i=El([t.x,t.y,t.z]),r={qCap:n,sphereLandmarks:i},o=new Nt;o.name="Pandora_Global_360_World";const a=[],l=new Jt(e,144,96),c=l.attributes.position,h=c.count,u=new Float32Array(h*3),d=new ie(274500),f=new ie(1611426),g=new ie(6061128),_=new ie(1794604),m=new ie(3568683),p=new ie(4016184),v=new ie,y=new E;for(let W=0;W<h;W++){y.set(c.getX(W),c.getY(W),c.getZ(W)).normalize();const{cont:ue,highlandRidge:we,elev:$e}=ps(y.x,y.y,y.z,n,i);if(c.setXYZ(W,y.x*(e+$e),y.y*(e+$e),y.z*(e+$e)),ue<=0){const Qe=Q.smoothstep(ue,-.25,0);v.copy(d).lerp(f,Qe)}else{const Qe=Bt(y.x*18+3,y.y*18,y.z*18)*.5+.5;v.copy(g).lerp(_,Q.smoothstep(ue,0,.08)),v.lerp(m,Qe*.52),we>.02&&v.lerp(p,Math.min(.85,we*3.8))}u[W*3]=v.r,u[W*3+1]=v.g,u[W*3+2]=v.b}l.setAttribute("color",new pt(u,3)),l.computeVertexNormals();const x=iv(n,i),S=new et({vertexColors:!0,emissiveMap:x,emissive:new ie(1,1,1),emissiveIntensity:0,roughness:.86,metalness:.04});a.push({mat:S,dayColor:16777215,nightColor:3886430,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.55});const w=new dt(l,S);w.name="Pandora_Global_Terrain_360",o.add(w);const T=new et({color:753560,emissive:35512,emissiveIntensity:0,roughness:.14,metalness:.55,transparent:!0,opacity:.78,depthWrite:!1});a.push({mat:T,dayColor:753560,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const A=new dt(new Jt(e,112,72),T);A.name="Pandora_Global_Crystal_Ocean",o.add(A);const M=jx(e,r),b=[.011*de,.007*de,.008*de,.0085*de,.008*de,.0075*de,.0075*de],{waterMesh:P,bankMesh:N,waterMat:I,bankMat:B}=Qx(M,b);o.add(P,N);const z=[{waterMat:I,bankMat:B,phase:.4}],U=[],H=[],D=new Et,te=sv(e,It[0],n,i,a),he=rv(e,It[3],n,i,a),me=ov(e,It[1],n,i,a,H,U),ze=av(e,It[2],n,i,a,U),We=lv(e,It[4],n,i,a);o.add(te.group,he.group,me.group,ze.group,We.group);const ee=vi(It[0].capDir),se=[[-.02,.05,.07,-.04,.14*de,.011*de],[-.07,-.03,.03,.07,.13*de,.01*de]],ge=new et({vertexColors:!0,roughness:.88}),ae=[...ze.archCenters];se.forEach(([W,ue,we,$e,Qe,yt],ft)=>{const{geo:mt,apex:rt}=Rl(e,ee,W,ue,we,$e,Qe,yt,30+ft,n,i),Be=new dt(mt,ge);Be.name=`Pandora_Valley_Arch_${ft+1}`,o.add(Be),ae.push({apex:rt,normal:rt.clone().normalize()})}),ae.push({apex:te.anchorPos,normal:te.anchorDir}),ae.push({apex:me.anchorPos,normal:me.anchorDir});const Ee=new jt(34e-5*de,12e-5*de,1,4,1);Ee.translate(0,-.5,0);const Re=new et({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});a.push({mat:Re,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const Ne=new gt(Ee,Re,U.length);Ne.name="Pandora_Global_Hanging_Vines",Ne.frustumCulled=!1,U.forEach((W,ue)=>{D.position.copy(W.pos),D.quaternion.setFromUnitVectors(yn,W.normal),D.scale.set(1,W.length,1),D.updateMatrix(),Ne.setMatrixAt(ue,D.matrix)}),Ne.instanceMatrix.needsUpdate=!0,o.add(Ne);const ke=[],Ue=[],Ke=[],O=[],Mt=[],Ve=[],nt=[],Le=[],it=[],Ie=[],L=[],C=[],Y=(1+Math.sqrt(5))*.5,ne=13500,K=me.islandsData;for(let W=0;W<64;W++){const ue=K[W%K.length],we=q(W,2,13)*Math.PI*2,$e=Math.sqrt(q(W,5,2))*.52,Qe=new E(Math.cos(we)*ue.rx*$e,ue.h*.28,Math.sin(we)*ue.rz*$e),yt=new ut().setFromUnitVectors(yn,ue.normal);Qe.applyQuaternion(yt);const ft=ue.pos.clone().add(Qe),mt=(.018+q(W,8,4)*.022)*de,rt=mt*.65;D.position.copy(ft),D.quaternion.copy(yt),D.rotateY(q(W,9,9)*Math.PI*2),D.scale.set(mt,mt,mt),D.updateMatrix(),ke.push(D.matrix.clone()),D.position.copy(ft).addScaledVector(ue.normal,mt*.92),D.scale.set(rt,rt,rt),D.updateMatrix(),Ue.push(D.matrix.clone()),(W%2===0?Ke:O).push(D.matrix.clone())}const Z=new E,Se=new E,pe=new ut;for(let W=0;W<ne;W++){const ue=1-(W+.5)/ne*2,we=Math.sqrt(Math.max(0,1-ue*ue)),$e=2*Math.PI*W/Y+(q(W,3,17)-.5)*.04;Z.set(Math.cos($e)*we,ue,Math.sin($e)*we).normalize();const{cont:Qe,highlandRidge:yt,elev:ft,biome:mt}=ps(Z.x,Z.y,Z.z,n,i),rt=q(W,11,29),Be=q(W,19,7);if(mt==="reef"){if(Le.length<520&&rt<.28){hh(Z,Se,pe,e+ft-2e-4),D.position.copy(Se),D.quaternion.copy(pe),D.rotateY(Be*Math.PI*2);const ct=(.007+Be*.012)*de;D.scale.set(ct,ct*.45,ct*.85),D.updateMatrix(),Le.push(D.matrix.clone())}continue}if(mt==="ocean")continue;if(hh(Z,Se,pe,e+ft),mt==="canyon"&&nt.length<340&&yt>.038&&rt<.34){D.position.copy(Z).multiplyScalar(e+ft-.001*de),D.quaternion.copy(pe),D.rotateY(Be*Math.PI*2);const ct=(.008+Be*.011)*de,R=(.036+q(W,7,13)*.052)*de;D.scale.set(ct,R,ct),D.updateMatrix(),nt.push(D.matrix.clone());continue}if(!(Z.distanceTo(It[3].capDir)<.035)){if(ke.length<3164&&rt<(mt==="forest"?.56:.34)){const ct=(.022+Be*.034)*de,R=ct*(.58+rt*.2);D.position.copy(Se),D.quaternion.copy(pe),D.rotateY(Be*Math.PI*2),D.scale.set(ct,ct,ct),D.updateMatrix(),ke.push(D.matrix.clone()),D.position.copy(Se).addScaledVector(Z,ct*.92),D.scale.set(R,R,R),D.updateMatrix(),Ue.push(D.matrix.clone()),(ke.length%2===0?Ke:O).push(D.matrix.clone())}else if(Mt.length<2e3&&rt<(mt==="archipelago"?.72:.66)){const ct=(.018+Be*.022)*de;D.position.copy(Se),D.quaternion.copy(pe),D.rotateY(Be*Math.PI*2),D.scale.set(ct,ct,ct),D.updateMatrix(),Mt.push(D.matrix.clone())}else if(Ve.length<3e3&&rt<.84){const ct=(.008+Be*.011)*de;D.position.copy(Se),D.quaternion.copy(pe),D.rotateY(Be*Math.PI*2),D.scale.set(ct,ct,ct),D.updateMatrix(),Ve.push(D.matrix.clone())}else if(Qe<.065&&it.length+Ie.length<1800&&rt<.92){const ct=(.0052+Be*.0055)*de;D.position.copy(Se),D.quaternion.copy(pe),D.rotateY(Be*Math.PI*2),D.scale.set(ct,ct,ct),D.updateMatrix(),(W%2===0?it:Ie).push(D.matrix.clone())}else if(L.length+C.length<480){const ct=(.01+Be*.014)*de;D.position.copy(Se),D.quaternion.copy(pe),D.rotateY(Be*Math.PI*2),D.scale.set(ct,ct,ct),D.updateMatrix(),(W%2===0?L:C).push(D.matrix.clone())}}}const _e=vi(It[4].capDir);for(let W=0;W<240;W++){const ue=Math.floor(W/4),we=q(ue,4,17)*Math.PI*2,$e=Math.sqrt(q(ue,11,3))*.095,Qe=Math.cos(we)*$e+(q(W,2,9)-.5)*.012,yt=Math.sin(we)*$e+(q(W,7,5)-.5)*.012,ft=Mi(e,_e,Qe,yt,0,n,i),mt=(.018+q(W,9,6)*.026)*de;D.position.copy(ft.pos),D.quaternion.setFromUnitVectors(yn,ft.normal),D.rotateY(q(W,5,1)*Math.PI*2),D.scale.set(mt,mt,mt),D.updateMatrix(),(ue%2===0?L:C).push(D.matrix.clone())}for(let W=0;W<650;W++){const ue=M[W%M.length],we=ue[Math.floor(q(W,5,3)*ue.length)],$e=we.phi+(W%2===0?1:-1)*(.008+q(W,7,1)*.026)*de,Qe=Q.clamp(we.theta+(q(W,3,8)-.5)*.018*de,.001,Math.PI-.001),yt=Math.sin(Qe),ft=ps(yt*Math.cos($e),Math.cos(Qe),yt*Math.sin($e),n,i).elev,mt=Kx(e,Qe,$e,ft);if(D.position.copy(mt.pos),D.quaternion.setFromUnitVectors(yn,mt.normal),D.rotateY(q(W,1,6)*Math.PI*2),W<400){const rt=(.008+q(W,4,9)*.01)*de;D.scale.set(rt,rt,rt),D.updateMatrix(),Ve.push(D.matrix.clone())}else{const rt=(.0052+q(W,3,5)*.0055)*de;D.scale.set(rt,rt,rt),D.updateMatrix(),(W%2===0?it:Ie).push(D.matrix.clone())}}const He=(W,ue,we,$e)=>{const Qe=new gt(ue,we,Math.max(1,$e.length));return Qe.name=W,Qe.frustumCulled=!1,$e.forEach((yt,ft)=>Qe.setMatrixAt(ft,yt)),Qe.instanceMatrix.needsUpdate=!0,o.add(Qe),Qe};if(nt.length>0){const W=new et({vertexColors:!0,roughness:.88});He("Pandora_Global_Canyon_Spires",$x(7),W,nt)}if(Le.length>0){const W=new et({color:3891288,emissive:61695,emissiveIntensity:0,roughness:.72});a.push({mat:W,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),He("Pandora_Global_Coral_Reefs",new _o(1,0),W,Le)}const oe=new jt(.055,.18,1,6,1);oe.translate(0,.5,0);const ve=new et({color:4337696,roughness:.9});a.push({mat:ve,dayColor:4337696,nightColor:1446952,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.18}),He("Pandora_Global_Tree_Trunks",oe,ve,ke);const{outer:Ge,under:Pe}=Eu(),fe=new et({color:1795632,emissive:537664,emissiveIntensity:0,roughness:.68});a.push({mat:fe,dayColor:1795632,nightColor:734264,dayEmissive:667158,nightEmissive:540752,dayEI:0,nightEI:.55}),He("Pandora_Global_Canopy_Tops",Ge,fe,Ue);const je=new et({color:2777650,emissive:65512,emissiveIntensity:0,roughness:.45,side:zt});a.push({mat:je,dayColor:2777650,nightColor:62975,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),He("Pandora_Global_Canopy_Under_Turquoise",Pe,je,Ke);const st=new et({color:3303982,emissive:16720544,emissiveIntensity:0,roughness:.45,side:zt});a.push({mat:st,dayColor:3303982,nightColor:16725168,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),He("Pandora_Global_Canopy_Under_Magenta",Pe,st,O);const vt=new et({color:2911790,emissive:55464,emissiveIntensity:0,roughness:.72,side:zt});a.push({mat:vt,dayColor:2911790,nightColor:803384,dayEmissive:1194008,nightEmissive:51368,dayEI:0,nightEI:.85}),He("Pandora_Global_Alien_Palms",ev(),vt,Mt);const F=new et({color:2454578,emissive:59548,emissiveIntensity:0,roughness:.62,side:zt});a.push({mat:F,dayColor:2454578,nightColor:805946,dayEmissive:1327646,nightEmissive:57498,dayEI:0,nightEI:1.25,pulsePhase:2.4}),He("Pandora_Global_Giant_Ferns",Jx(),F,Ve);const Me=tv(),J=new et({color:8796822,emissive:12728575,emissiveIntensity:0,roughness:.45});a.push({mat:J,dayColor:8796822,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.3,pulsePhase:.8}),He("Pandora_Global_Flowers_Violet",Me,J,it);const re=new et({color:13394984,emissive:16739866,emissiveIntensity:0,roughness:.45});a.push({mat:re,dayColor:13394984,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),He("Pandora_Global_Flowers_Orange",Me,re,Ie);const be=nv(),Te=new et({color:7357048,emissive:11024639,emissiveIntensity:0,roughness:.48});a.push({mat:Te,dayColor:7357048,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.25,pulsePhase:1.5}),He("Pandora_Global_Mushrooms_Violet",be,Te,L);const X=new et({color:10767974,emissive:16725672,emissiveIntensity:0,roughness:.48});a.push({mat:X,dayColor:10767974,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.2,pulsePhase:3.1}),He("Pandora_Global_Mushrooms_NeonPink",be,X,C);const Fe=new ie,tt=new ie,k=new ie(821410),ce=new ie(280664),ye=new ie(2649668),Oe=new ie(59647);I.userData.animatedEmissive=!0,B.userData.animatedEmissive=!0;for(let W=0;W<a.length;W++)a[W].mat.userData=a[W].mat.userData||{},a[W].mat.userData.animatedEmissive=!0;return{group:o,waterfalls:H,pulsingRivers:z,archCenters:ae,riverPaths:M,landmarks:It,samplerCtx:r,updateDayNight:(W,ue)=>{const we=Q.smoothstep(-W,-.1,.04);for(let rt=0;rt<a.length;rt++){const Be=a[rt];if(Be.isWaterfall){const tn=.85+.15*Math.sin(ue*3.8+rt);Be.mat.color.setRGB(Q.lerp(Be.dayColorRGB[0],Be.nightColorRGB[0]*tn,we),Q.lerp(Be.dayColorRGB[1],Be.nightColorRGB[1]*tn,we),Q.lerp(Be.dayColorRGB[2],Be.nightColorRGB[2]*tn,we)),Be.mat.opacity=Q.lerp(.52,.72,we);continue}if(Be.dayColor!==void 0&&(Fe.setHex(Be.dayColor),tt.setHex(Be.nightColor),Be.mat.color.copy(Fe).lerp(tt,we)),Be.dayEmissive!==void 0&&(Fe.setHex(Be.dayEmissive),tt.setHex(Be.nightEmissive),Be.mat.emissive.copy(Fe).lerp(tt,we)),Be.dayEI!==void 0){const tn=Be.pulsePhase!==void 0?.9+.16*Math.sin(ue*1.7+Be.pulsePhase):1;Be.mat.emissiveIntensity=Q.lerp(Be.dayEI,Be.nightEI*tn,we)}}const $e=.85+.25*Math.sin(ue*2);I.color.copy(k).lerp(ce,we),I.emissiveIntensity=Q.lerp(0,1.15*$e,we),B.color.copy(ye).lerp(Oe,we),B.emissiveIntensity=Q.lerp(0,2.35*$e,we);const Qe=We.plumeGeo.attributes.position,yt=We.plumeGeo.attributes.color,ft=We.geyserEmitters,mt=We.puffsPerGeyser;for(let rt=0;rt<ft.length;rt++){const Be=ft[rt];for(let tn=0;tn<mt;tn++){const ct=rt*mt+tn,R=(ue*.48+Be.phase+tn/mt)%1,G=R*Be.maxHeight,j=Math.sin(R*Math.PI)*.004*de;Qe.setXYZ(ct,Be.basePos.x+Be.normal.x*G+Math.cos(ct)*j,Be.basePos.y+Be.normal.y*G,Be.basePos.z+Be.normal.z*G+Math.sin(ct)*j);const $=Q.lerp(.85,rt%2===0?.2:.95,we),V=Q.lerp(.95,rt%2===0?1.45:.45,we),xe=Q.lerp(1,1.85,we);yt.setXYZ(ct,$,V,xe)}}Qe.needsUpdate=!0,yt.needsUpdate=!0,We.plumeMat.opacity=Q.lerp(.32,.65,we)}}}function hv(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new an(s);return n.needsUpdate=!0,n}const Tu=hv();function uh(s,e,t=350){const n=e,i=1/3.5,r=s==="p2",o=new Nt;o.name=`${s}_Urban_AV_Traffic_System`;const a=(r?.0068:.0033)*i,l=new Kt(a*.55,a*.34,a*1.85),c=new et({color:1580068,roughness:.38,metalness:.85}),h=new gt(l,c,t),u=new Kt(a*.58,a*.22,a*.55);u.translate(0,0,a*.92);const d=new pn({color:s==="p4"?new ie(2.4,2.8,3.2):new ie(1.4,3.2,4)}),f=new gt(u,d,t),g=new Kt(a*.42,a*.16,a*3.8);g.translate(0,0,-a*2.55);const _=new pn({color:s==="p4"?new ie(4.2,1.4,.25):new ie(4.2,.85,.25),transparent:!0,opacity:.88}),m=new gt(g,_,t);o.add(h,f,m);const p=[],v=[new E(1,0,0),new E(0,0,1),new E(.707,0,.707),new E(-.707,0,.707)];for(let M=0;M<t;M++){const b=M%2===0,P=M%7,N=r?(.045+P*.13+q(M,3,7)*.08)*i:(.016+P*.022+q(M,3,7)*.012)*i,I=n+N;if(b){const B=r&&M%7===0,z=(M>>1)%14,U=r?B?.34+q(M,2,19)*.16:.028+z/13*.28+(q(M,1,9)-.5)*.015:(.035+z*.034+(q(M,1,9)-.5)*.014)*i*1.2,H=z%2===0?1:-1,D=H*(.085+q(M,5,2)*.11)/Math.max(.08,Math.sin(U));p.push({type:"ring",radius:I,theta:U,sinTheta:Math.sin(U),cosTheta:Math.cos(U),phi0:q(M,8,4)*Math.PI*2,omega:D,dir:H,bobAmp:(r?.006:.002+q(M,2,6)*.0025)*i,bobPhase:q(M,4,1)*Math.PI*2})}else{const B=M%v.length,z=r?.078:.042*1.15,U=(Math.floor(M/8)%11-5)*z*i,H=v[B],D=new ut().setFromAxisAngle(H,U),te=M%4===1?1:-1,he=r?.34:.52*i*1.2,me=(q(M,6,3)*2-1)*he,ze=te*(r?.13+q(M,9,5)*.16:(.09+q(M,9,5)*.13)*1.25)*i;p.push({type:"corridor",radius:I,qPlane:D,s0:me,arcSpan:he,speed:ze,dir:te,bobAmp:(r?.005:.002+q(M,7,2)*.002)*i,bobPhase:q(M,3,4)*Math.PI*2})}}const y=new E,x=new E,S=new E,w=new E,T=new Je,A=new E;return{update(M){if(!(!o.parent||!o.parent.visible)){for(let b=0;b<t;b++){const P=p[b],N=Math.sin(M*2.2+P.bobPhase)*P.bobAmp,I=P.radius+N;if(P.type==="ring"){const z=P.phi0+P.omega*M,U=Math.cos(z),H=Math.sin(z);x.set(P.sinTheta*U,P.cosTheta,P.sinTheta*H).normalize(),y.copy(x).multiplyScalar(I),S.set(-P.dir*H,0,P.dir*U).normalize(),w.crossVectors(x,S).normalize(),S.crossVectors(w,x).normalize()}else{const z=P.arcSpan*2;let U=(P.s0+P.speed*M+P.arcSpan)%z;U<0&&(U+=z);const H=U-P.arcSpan,D=Math.sin(H),te=Math.cos(H);x.set(D,te,0).applyQuaternion(P.qPlane).normalize(),y.copy(x).multiplyScalar(I),S.set(P.dir*te,-P.dir*D,0).applyQuaternion(P.qPlane).normalize(),w.crossVectors(x,S).normalize()}let B=1;if(P.type==="corridor"){const z=Math.abs(Math.acos(Q.clamp(x.y,-1,1)))/P.arcSpan;B=1-Q.smoothstep(z,.85,1)}T.makeBasis(w,x,S),T.setPosition(y),B<.99&&(A.setScalar(Math.max(.01,B)),T.scale(A)),h.setMatrixAt(b,T),f.setMatrixAt(b,T),m.setMatrixAt(b,T)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:o}}function uv(s){const e=[],t=[],n=[],i=[],r=[],o=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let a=0;s.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";a++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(o(f,a)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(o(f,a)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(o(f,a)):/NC_Neon_Sign_/.test(g)?i.push(o(f,a)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&r.push(o(f,a))});const l=f=>{if(f.length===0)return null;const g=new E;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const _=g.clone().normalize();return{parts:f,centroid:g,localUp:_}},c=[l(e),l(t)].filter(Boolean),h=new ut,u=new ut,d=new E;return{update(f,g=1){c.forEach((_,m)=>{const p=m*2.4,v=Math.sin(f*1.45+p)*1.4,y=Math.sin(f*1.15+p)*.08;for(let x=0;x<_.parts.length;x++){const S=_.parts[x],w=/Tail|Fin/i.test(S.mesh.name),T=Math.sin(f*3.1+p+x*.65)*(w?.14:.045);d.copy(S.basePos).sub(_.centroid),h.setFromAxisAngle(_.localUp,y+T),d.applyQuaternion(h),S.mesh.position.copy(_.centroid).add(d).addScaledVector(_.localUp,v),S.mesh.quaternion.copy(h).multiply(S.baseQuat),S.material&&S.material.emissiveIntensity!==void 0&&(S.material.emissiveIntensity=S.baseEmissive*(.85+.22*Math.sin(f*2.6+x*.7+p))*g)}});for(let _=0;_<n.length;_++){const m=n[_],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.88+.16*Math.sin(f*3.4+m.seed))*g)}for(let _=0;_<i.length;_++){const m=i[_];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.14*Math.sin(f*2.2+m.seed*1.7),v=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=m.baseEmissive*p*v*g}for(let _=0;_<r.length;_++){const m=r[_];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.72+.48*Math.sin(f*3.2+m.seed*.8))*g),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(_%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function dv(s){const e=[];let t=0;return s.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let r=0;r<e.length;r++){const o=e[r];if(o.material.emissiveIntensity!==void 0){const a=.78+.36*Math.sin(n*1.9-o.phase);o.material.emissiveIntensity=o.baseEmissive*a*i}}}}}function fv(s){const e=s,t=1/3.5,n=new Nt;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,r=.0022*t,o=new Kt(r*.4,r*.32,r*1.8),a=new Kt(r*1.9,r*.08,r*.72);a.translate(r*.95,0,0);const l=new Kt(r*1.9,r*.08,r*.72);l.translate(-r*.95,0,0);const c=new et({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new gt(o,c,i),u=new gt(a,c,i),d=new gt(l,c,i);n.add(h,u,d);const f=[];for(let I=0;I<i;I++){const B=e+(I<55?.145+q(I,2,7)*.09:.035+q(I,4,3)*.06)*t,z=(.025+q(I,5,1)*.24)*t*1.1,U=q(I,8,9)*Math.PI*2,H=(I%3===0?-1:1)*(.28+q(I,3,6)*.28);f.push({alt:B,theta:z,phi0:U,omega:H,dir:H>=0?1:-1,flapSpeed:5.5+q(I,1,5)*3.5,flapPhase:q(I,7,2)*Math.PI*2,scaleFactor:.75+q(I,9,4)*.8})}const g=42,_=new Float32Array(g*3),m=[];for(let I=0;I<g;I++){const B=(.16+q(I,11,2)*.24)*t*1.15,z=q(I,13,5)*Math.PI*2,U=e+(.045+q(I,4,8)*.065)*t;m.push({theta:B,phi0:z,alt:U,speed:.028+q(I,6,3)*.025})}const p=new St;p.setAttribute("position",new pt(_,3));const v=new mn({map:Tu,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),y=new bn(p,v);y.name="Medieval_Drifting_Cloud_Banks",n.add(y);const x=new E,S=new E,w=new E,T=new E,A=new Je,M=new Je,b=new ut,P=new E(0,0,1),N=new E;return{group:n,update(I,B=1){if(!n.parent||!n.parent.visible)return;for(let U=0;U<i;U++){const H=f[U],D=H.phi0+H.omega*I,te=H.theta+Math.sin(I*.6+H.flapPhase)*.008,he=H.alt+Math.sin(I*1.1+H.flapPhase)*.0018,me=Math.sin(te),ze=Math.cos(te),We=Math.cos(D),ee=Math.sin(D);S.set(me*We,ze,me*ee).normalize(),x.copy(S).multiplyScalar(he),w.set(-H.dir*ee,0,H.dir*We).normalize(),T.crossVectors(S,w).normalize(),w.crossVectors(T,S).normalize(),A.makeBasis(T,S,w),A.setPosition(x),N.setScalar(H.scaleFactor),A.scale(N),h.setMatrixAt(U,A);const ge=Math.sin(I*.45+H.flapPhase)>-.25?.55:.12,ae=Math.sin(I*H.flapSpeed+H.flapPhase)*ge;b.setFromAxisAngle(P,ae),M.makeRotationFromQuaternion(b),M.premultiply(A),u.setMatrixAt(U,M),b.setFromAxisAngle(P,-ae),M.makeRotationFromQuaternion(b),M.premultiply(A),d.setMatrixAt(U,M)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const z=p.attributes.position;for(let U=0;U<g;U++){const H=m[U],D=H.phi0+H.speed*I,te=Math.sin(H.theta);z.setXYZ(U,H.alt*te*Math.cos(D),H.alt*Math.cos(H.theta),H.alt*te*Math.sin(D))}z.needsUpdate=!0}}}function el(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function pi(s,e,t){const n=Math.max(1e-6,s),i=new Si(n,e,4,2);i.rotateX(-Math.PI*.5);const r=i.attributes.position;for(let o=0;o<r.count;o++){const a=Q.clamp((r.getX(o)+n*.5)/n,0,1),l=r.getZ(o),c=t*a*n,h=-Math.pow(a,1.35)*e*.85,u=1-Math.pow(a,1.6)*.78,d=Math.sin(a*Math.PI)*e*.14;r.setXYZ(o,c,d,l*u+h)}return i.computeVertexNormals(),el(i,1)}function dh(s){const e=[],t=new Ui(s*.34,s*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new Ui(s*.18,s*.9,4);n.rotateX(Math.PI*.42),n.translate(0,s*.2,s*1.15),e.push(n.toNonIndexed());const i=new Ui(s*.12,s*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-s*1.85),e.push(i.toNonIndexed());const r=Nn(e,!1);return r.computeVertexNormals(),r}function pv(s){const e=[],t=new Kt(s*.72,s*.68,s*1.55);t.translate(0,s*.95,0),e.push(t.toNonIndexed());const n=new Kt(s*.36,s*.58,s*.68);n.rotateX(.45),n.translate(0,s*1.32,s*.85),e.push(n.toNonIndexed());const i=new Kt(s*.92,s*.44,s*.36);i.rotateX(.28),i.translate(0,s*1.54,s*1.15),e.push(i.toNonIndexed());const r=Nn(e,!1);r.computeVertexNormals();const o=[],a=new jt(s*.1,s*.08,s*.85,5);a.translate(s*.28,-s*.42,0);const l=a.clone();l.translate(-s*.56,0,0),o.push(a.toNonIndexed(),l.toNonIndexed());const c=Nn(o,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:r,frontLegsGeo:c,backLegsGeo:h}}function mv(s){const e=new Jt(s*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),el(e,1);const t=[];for(let i=0;i<4;i++){const r=i/4*Math.PI*2,o=new jt(s*.05,s*.012,s*1.45,4);o.translate(Math.cos(r)*s*.22,-s*.72,Math.sin(r)*s*.22),t.push(o.toNonIndexed())}const n=Nn(t,!1);return n.computeVertexNormals(),el(n,-1),{bellGeo:e,tentGeo:n}}function gv(s,e){const t=s,n=1/3.5,i=new Nt;i.name="Pandora_Bioluminescent_Life";const r=e?.samplerCtx||null,o=r?.qCap,a=r?.sphereLandmarks,l=X=>{const Fe=X.clone().normalize(),tt=Math.abs(Fe.x)<.85?new E(1,0,0):new E(0,0,1),k=new E().crossVectors(Fe,tt).normalize(),ce=new E().crossVectors(Fe,k).normalize();return{normalDir:Fe,e1:k,e2:ce}},c=2200,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new ie(62975),new ie(11553023),new ie(3836159),new ie(16732856)],g=(1+Math.sqrt(5))*.5,_=[];for(let X=0;X<5e3;X++){const Fe=1-(X+.5)/5e3*2,tt=Math.sqrt(Math.max(0,1-Fe*Fe)),k=2*Math.PI*X/g,ce=Math.cos(k)*tt,ye=Math.sin(k)*tt,Oe=ps(ce,Fe,ye,o,a);Oe.cont>.02&&_.push({dir:new E(ce,Fe,ye),elev:Oe.elev,cont:Oe.cont})}_.length===0&&_.push({dir:new E(0,1,0),elev:.002,cont:.2});for(let X=0;X<c;X++){let Fe,tt=.002;if(X<550){const ye=It[X%It.length],Oe=l(ye.capDir),le=q(X,7,13)*Math.PI*2,W=Math.sqrt(q(X,3,19))*.14;Fe=Oe.normalDir.clone().addScaledVector(Oe.e1,Math.cos(le)*W).addScaledVector(Oe.e2,Math.sin(le)*W).normalize(),tt=ra(Fe.x,Fe.y,Fe.z,0,r)}else{const ye=_[(X*7+Math.floor(q(X,4,11)*19))%_.length],Oe=l(ye.dir),le=q(X,2,17)*Math.PI*2,W=q(X,9,5)*.04;Fe=Oe.normalDir.clone().addScaledVector(Oe.e1,Math.cos(le)*W).addScaledVector(Oe.e2,Math.sin(le)*W).normalize(),tt=ye.elev}const k=t+tt+(.005+q(X,5,11)*.19)*n;d.push({dir:Fe,baseAlt:k,driftSpeed:.025+q(X,2,7)*.035,risePhase:q(X,9,4)*Math.PI*2});const ce=f[X%f.length];u[X*3]=ce.r,u[X*3+1]=ce.g,u[X*3+2]=ce.b}const m=new St;m.setAttribute("position",new pt(h,3)),m.setAttribute("color",new pt(u,3));const p=new mn({size:.72,map:Tu,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:Yt,sizeAttenuation:!0}),v=new bn(m,p);v.frustumCulled=!1,i.add(v);const y=90,x=.0054*n,S=new et({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),w=new et({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:zt}),T=new et({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:zt});S.userData.animatedEmissive=!0,w.userData.animatedEmissive=!0,T.userData.animatedEmissive=!0;const A=new gt(dh(x),S,y),M=new gt(pi(x*2.75,x*1.1,1),w,y),b=new gt(pi(x*2.75,x*1.1,-1),w,y),P=new gt(pi(x*1.65,x*.75,1),T,y),N=new gt(pi(x*1.65,x*.75,-1),T,y);[A,M,b,P,N].forEach(X=>{X.frustumCulled=!1,i.add(X)});const I=[l(It[0].capDir),l(It[1].capDir),l(It[2].capDir)],B=e?.archCenters||[];for(let X=0;X<B.length;X++)B[X]?.normal&&I.push(l(B[X].normal));const z=[];for(let X=0;X<y;X++){const Fe=X<25?0:X<55?1:2,tt=X<60?I[Fe]:I[X%I.length],k=(.032+q(X,4,1)*.088)*n,ce=t+(.055+q(X,8,5)*.17)*n,ye=(X%3===0?-1:1)*(.4+q(X,6,3)*.34);z.push({frame:tt,orbitRad:k,alt:ce,phi0:q(X,4,2)*Math.PI*2,omega:ye,phase:q(X,3,9)*Math.PI*2,scale:.78+q(X,5,6)*.55})}const U=4,H=.0145*n,D=new et({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),te=new et({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:zt});D.userData.animatedEmissive=!0,te.userData.animatedEmissive=!0;const he=new gt(dh(H),D,U),me=new gt(pi(H*3.1,H*1.25,1),te,U),ze=new gt(pi(H*3.1,H*1.25,-1),te,U),We=new gt(pi(H*1.85,H*.85,1),te,U),ee=new gt(pi(H*1.85,H*.85,-1),te,U);[he,me,ze,We,ee].forEach(X=>{X.frustumCulled=!1,i.add(X)});const se=[{frame:l(It[0].capDir),alt:t+.19*n,orbitRad:.11*n,phi0:.4,omega:.22,phase:0},{frame:l(It[1].capDir),alt:t+.26*n,orbitRad:.14*n,phi0:2.1,omega:-.2,phase:1.5},{frame:l(It[2].capDir),alt:t+.21*n,orbitRad:.12*n,phi0:3.9,omega:.21,phase:2.7},{frame:l(It[3].capDir),alt:t+.18*n,orbitRad:.1*n,phi0:5.1,omega:-.23,phase:.9}],ge=48,ae=.0048*n,{bodyGeo:Ee,frontLegsGeo:Re,backLegsGeo:Ne}=pv(ae),ke=new et({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),Ue=new et({color:2499642,roughness:.75});ke.userData.animatedEmissive=!0;const Ke=new gt(Ee,ke,ge),O=new gt(Re,Ue,ge),Mt=new gt(Ne,Ue,ge);[Ke,O,Mt].forEach(X=>{X.frustumCulled=!1,i.add(X)});const Ve=_.filter(X=>X.cont>.05&&X.cont<.26),nt=Ve.length>=6?Ve:_,Le=[];for(let X=0;X<6;X++){const Fe=nt[Math.floor(X/6*nt.length)%nt.length].dir;Le.push({...l(Fe),radOffset:.022+X%3*.005,speed:(X%2===0?1:-1)*(.14+X%3*.02)})}const it=[];for(let X=0;X<ge;X++){const Fe=Le[X%Le.length],tt=Math.floor(X/Le.length);it.push({herd:Fe,offsetAng:tt*.78+q(X,2,7)*.35,radialFactor:.52+q(X,5,3)*.65,phase:q(X,9,1)*Math.PI*2,scale:.85+q(X,4,8)*.38})}const Ie=240,L=.0038*n,{bellGeo:C,tentGeo:Y}=mv(L),ne=new et({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:Yt,side:zt}),K=new pn({color:new ie(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:Yt});ne.userData.animatedEmissive=!0,K.userData.animatedEmissive=!0;const Z=new gt(C,ne,Ie),Se=new gt(Y,K,Ie);Z.frustumCulled=!1,Se.frustumCulled=!1,i.add(Z,Se);const pe=[];for(let X=0;X<Ie;X++){let Fe,tt,k;if(X<75){const ce=X<45?It[3]:It[0];Fe=l(ce.capDir);const ye=q(X,3,15)*Math.PI*2,Oe=Math.sqrt(q(X,6,11))*.075;tt=Fe.normalDir.clone().addScaledVector(Fe.e1,Math.cos(ye)*Oe).addScaledVector(Fe.e2,Math.sin(ye)*Oe).normalize(),k=ra(tt.x,tt.y,tt.z,0,r)}else{const ce=_[(X*11+Math.floor(q(X,2,13)*13))%_.length];tt=ce.dir,Fe=l(tt),k=ce.elev}pe.push({frame:Fe,alt:t+k+(.015+q(X,9,7)*.068)*n,phase:q(X,2,5)*Math.PI*2,scale:.72+q(X,8,3)*.78})}const _e=new E,He=new E,oe=new E,ve=new E,Ge=new E,Pe=new Je,fe=new Je,je=new ut,st=new ut,vt=new E(1,0,0),F=new E(0,0,1),Me=new E,J=new E(0,1,0);new E;const re=(X,Fe,tt,k,ce,ye,Oe,le,W,ue,we,$e)=>{oe.copy(Oe).normalize(),ve.copy(le).sub(Oe),ve.lengthSq()<1e-12&&ve.set(1,0,0),ve.normalize(),Ge.crossVectors(oe,ve).normalize(),ve.crossVectors(Ge,oe).normalize(),Pe.makeBasis(Ge,oe,ve),st.setFromAxisAngle(F,$e),fe.makeRotationFromQuaternion(st),Pe.multiply(fe),Pe.setPosition(Oe),Me.setScalar(we),Pe.scale(Me),Fe.setMatrixAt(X,Pe),je.setFromAxisAngle(F,W),fe.makeRotationFromQuaternion(je),fe.premultiply(Pe),tt.setMatrixAt(X,fe),je.setFromAxisAngle(F,-W),fe.makeRotationFromQuaternion(je),fe.premultiply(Pe),k.setMatrixAt(X,fe),je.setFromAxisAngle(F,ue),fe.makeRotationFromQuaternion(je),fe.setPosition(0,0,-x*.72),fe.premultiply(Pe),ce.setMatrixAt(X,fe),je.setFromAxisAngle(F,-ue),fe.makeRotationFromQuaternion(je),fe.setPosition(0,0,-x*.72),fe.premultiply(Pe),ye.setMatrixAt(X,fe)},be=(X,Fe,tt)=>{const k=X.phi0+X.omega*Fe,ce=X.orbitRad+Math.sin(Fe*.8+X.phase)*.008*n,ye=X.alt+Math.sin(Fe*1.15+X.phase)*.006*n;tt.copy(X.frame.normalDir).addScaledVector(X.frame.e1,Math.cos(k)*ce).addScaledVector(X.frame.e2,Math.sin(k)*ce).normalize().multiplyScalar(ye)};return{group:i,update(X,Fe=1,tt=.5){if(!i.parent||!i.parent.visible)return;const k=Q.smoothstep(-tt,-.1,.04);e?.updateDayNight&&e.updateDayNight(tt,X);const ce=m.attributes.position;for(let le=0;le<c;le++){const W=d[le],ue=(W.risePhase+X*W.driftSpeed*3)%1*.015,we=W.baseAlt+ue,$e=Math.sin(X*.65+W.risePhase)*.0022;ce.setXYZ(le,W.dir.x*we+$e,W.dir.y*we,W.dir.z*we+$e)}ce.needsUpdate=!0,p.opacity=Q.lerp(.14,.92,k);for(let le=0;le<y;le++){const W=z[le];be(W,X,_e),be(W,X+.05,He);const ue=Math.sin(X*.65+W.phase)>-.2?.46:.1,we=Math.sin(X*4.9+W.phase)*ue,$e=Math.sin(X*4.9+W.phase-.85)*ue*.82,Qe=W.omega>0?-.32:.32;re(le,A,M,b,P,N,_e,He,we,$e,W.scale,Qe)}A.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0,P.instanceMatrix.needsUpdate=!0,N.instanceMatrix.needsUpdate=!0,S.emissiveIntensity=Q.lerp(.06,1.45,k),w.emissiveIntensity=Q.lerp(.08,1.85,k),T.emissiveIntensity=Q.lerp(.08,1.65,k);for(let le=0;le<U;le++){const W=se[le];be(W,X,_e),be(W,X+.08,He);const ue=Math.sin(X*2.5+W.phase)*.42,we=Math.sin(X*2.5+W.phase-.9)*.35;re(le,he,me,ze,We,ee,_e,He,ue,we,1,W.omega>0?-.25:.25)}he.instanceMatrix.needsUpdate=!0,me.instanceMatrix.needsUpdate=!0,ze.instanceMatrix.needsUpdate=!0,We.instanceMatrix.needsUpdate=!0,ee.instanceMatrix.needsUpdate=!0,D.emissiveIntensity=Q.lerp(.08,1.9,k),te.emissiveIntensity=Q.lerp(.1,2.15,k);const ye=(le,W,ue,we)=>{const $e=le.offsetAng+le.herd.speed*W,Qe=le.herd.radOffset*le.radialFactor;we.copy(le.herd.normalDir).addScaledVector(le.herd.e1,Math.cos($e)*Qe).addScaledVector(le.herd.e2,Math.sin($e)*Qe).normalize();const yt=ra(we.x,we.y,we.z,0,r);ue.copy(we).multiplyScalar(t+yt)},Oe=new E;for(let le=0;le<ge;le++){const W=it[le];ye(W,X,_e,oe),ye(W,X+.08,He,Oe),ve.copy(He).sub(_e).normalize(),Ge.crossVectors(oe,ve).normalize(),ve.crossVectors(Ge,oe).normalize(),Pe.makeBasis(Ge,oe,ve),Pe.setPosition(_e),Me.setScalar(W.scale),Pe.scale(Me),Ke.setMatrixAt(le,Pe);const ue=Math.sin(X*4.5+W.phase)*.42;je.setFromAxisAngle(vt,ue),fe.makeRotationFromQuaternion(je),fe.setPosition(0,ae*.72,ae*.52),fe.premultiply(Pe),O.setMatrixAt(le,fe),je.setFromAxisAngle(vt,-ue),fe.makeRotationFromQuaternion(je),fe.setPosition(0,ae*.72,-ae*.56),fe.premultiply(Pe),Mt.setMatrixAt(le,fe)}Ke.instanceMatrix.needsUpdate=!0,O.instanceMatrix.needsUpdate=!0,Mt.instanceMatrix.needsUpdate=!0,ke.emissiveIntensity=Q.lerp(0,.95,k);for(let le=0;le<Ie;le++){const W=pe[le],ue=Math.sin(X*1.15+W.phase)*.0045*n,we=Math.cos(X*.45+W.phase)*.004*n,$e=Math.sin(X*.35+W.phase)*.004*n;oe.copy(W.frame.normalDir).addScaledVector(W.frame.e1,we).addScaledVector(W.frame.e2,$e).normalize(),_e.copy(oe).multiplyScalar(W.alt+ue);const Qe=1+Math.sin(X*2.8+W.phase)*.16;Te(Pe,_e,oe,W.scale*Qe,W.scale/Math.sqrt(Qe)),Z.setMatrixAt(le,Pe),Te(Pe,_e,oe,W.scale,W.scale*(1+Math.sin(X*2.8+W.phase)*.08)),Se.setMatrixAt(le,Pe)}Z.instanceMatrix.needsUpdate=!0,Se.instanceMatrix.needsUpdate=!0,ne.opacity=Q.lerp(.32,.82,k),ne.emissiveIntensity=Q.lerp(.08,2.35,k),K.opacity=Q.lerp(.24,.65,k),K.color.setRGB(Q.lerp(.85,1.4,k),Q.lerp(.88,.85,k),Q.lerp(.96,2.2,k))}};function Te(X,Fe,tt,k,ce){je.setFromUnitVectors(J,tt),Me.set(k,ce,k),X.compose(Fe,je,Me)}}const tl=new E(0,1,0);function nl(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function qr(s,e){const t=nl(64,64),n=t.getContext("2d"),i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,s),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new an(t);return r.needsUpdate=!0,r}function js(s,e,t,n,i){const r=Q.smoothstep(n,.63,.7),o=1-Q.smoothstep(n,1.01,1.08),a=r*o;if(a<=1e-4)return 0;const l=1-Math.abs(Bt(s*14+3.1,e*14,t*14-2.7)),c=Cs(s*7.5-4.2,e*7.5+1.1,t*7.5+5.8,4),h=Math.max(0,c+.15)*(.45+.85*Math.pow(l,2.2));return i*(-.0018+.0155*h)*a}function Fn(s,e,t,n,i,r,o){s.position.copy(e).multiplyScalar(t),s.quaternion.setFromUnitVectors(tl,e),n!==0&&s.rotateY(n),s.scale.set(i,r,o),s.updateMatrix()}function _v(){const e=nl(256,256),t=nl(256,256),n=e.getContext("2d"),i=t.getContext("2d");n.fillStyle="#14171d",n.fillRect(0,0,256,256);for(let c=0;c<256;c+=8){const h=Math.floor(q(0,c,19)*14);n.fillStyle=`rgb(${16+h}, ${18+h}, ${22+h})`,n.fillRect(0,c,256,4)}i.fillStyle="#000000",i.fillRect(0,0,256,256);const r=["#9a521e","#7c401b","#8c1e24","#6d4b2b"];let o=0;for(let c=6;c<256;c+=10)for(let h=4;h<256;h+=8)o++,q(h,c,41)<.135&&(i.fillStyle=r[o%r.length],i.fillRect(h,c,4,3));const a=new an(e);a.colorSpace=Ct;const l=new an(t);return l.colorSpace=Ct,{map:a,emissiveMap:l}}function xv(s){const e=s.localRadius,t=new Nt;t.name="NightCity_Concentric_Districts_R2_R3";const n=new Et,i=new E,{map:r,emissiveMap:o}=_v(),a=new et({map:r,emissiveMap:o,emissive:new ie(1,.9,.8),emissiveIntensity:.48,roughness:.78,metalness:.35});a.userData.animatedEmissive=!0;const l=new et({color:1580066,roughness:.72,metalness:.6}),c=new et({color:2105894,roughness:.68,metalness:.52}),h=new pn({color:new ie(1.2,.18,.12)});h.userData.animatedEmissive=!0;const u=960,d=new Kt(1,1,1);d.translate(0,.5,0);const f=new gt(d,a,u);f.name="NC_Ring2_Industrial_Slum_Blocks";for(let k=0;k<u;k++){const ce=q(k,3,19),ye=.335+Math.pow(ce,.92)*.315,Oe=q(k,7,23)*Math.PI*2;i.set(Math.sin(ye)*Math.cos(Oe),Math.cos(ye),Math.sin(ye)*Math.sin(Oe));const le=1-Q.smoothstep(ye,.35,.64),W=e*(.0055+.0085*q(k,5,11)),ue=e*(.0055+.0085*q(k,9,13)),we=e*(.008+(.044*le+.012)*Math.pow(q(k,11,29),1.45));Fn(n,i,e*.9985,q(k,2,7)*Math.PI,W,we,ue),f.setMatrixAt(k,n.matrix)}f.instanceMatrix.needsUpdate=!0,t.add(f);const g=260,_=new gt(d,l,g);_.name="NC_Ring2_Industrial_Warehouses";for(let k=0;k<g;k++){const ce=.42+q(k,17,5)*.23,ye=q(k,19,31)*Math.PI*2;i.set(Math.sin(ce)*Math.cos(ye),Math.cos(ce),Math.sin(ce)*Math.sin(ye));const Oe=e*(.014+.018*q(k,4,8)),le=e*(.018+.022*q(k,6,12)),W=e*(.008+.011*q(k,8,16));Fn(n,i,e*.9985,q(k,3,21)*Math.PI,Oe,W,le),_.setMatrixAt(k,n.matrix)}_.instanceMatrix.needsUpdate=!0,t.add(_);const m=72,p=new jt(.46,.78,1,12,1,!1);p.translate(0,.5,0);const v=new gt(p,c,m);v.name="NC_Ring2_Cooling_Towers";const y=140,x=new jt(.18,.34,1,8);x.translate(0,.5,0);const S=new gt(x,c,y);S.name="NC_Ring2_Smokestacks";const w=new Jt(.32,6,6),T=new gt(w,h,y);T.name="NC_Ring2_Stack_RedBeacons";const A=new Float32Array((m+y)*3),M=[];for(let k=0;k<m;k++){const ce=.44+q(k,21,9)*.21,ye=q(k,25,13)*Math.PI*2;i.set(Math.sin(ce)*Math.cos(ye),Math.cos(ce),Math.sin(ce)*Math.sin(ye));const Oe=e*(.008+.006*q(k,2,15)),le=e*(.022+.016*q(k,6,27));Fn(n,i,e*.9985,0,Oe,le,Oe),v.setMatrixAt(k,n.matrix);const W=e*.9985+le*1.15;M.push({dir:i.clone(),alt:W,phase:q(k,1,3)*Math.PI*2}),A[k*3]=i.x*W,A[k*3+1]=i.y*W,A[k*3+2]=i.z*W}v.instanceMatrix.needsUpdate=!0;for(let k=0;k<y;k++){const ce=.38+q(k,29,7)*.27,ye=q(k,31,17)*Math.PI*2;i.set(Math.sin(ce)*Math.cos(ye),Math.cos(ce),Math.sin(ce)*Math.sin(ye));const Oe=e*(.0045+.003*q(k,4,18)),le=e*(.028+.024*q(k,9,22));Fn(n,i,e*.9985,0,Oe,le,Oe),S.setMatrixAt(k,n.matrix);const W=e*.9985+le;Fn(n,i,W,0,Oe*.6,Oe*.6,Oe*.6),T.setMatrixAt(k,n.matrix);const ue=m+k,we=W+e*.008;M.push({dir:i.clone(),alt:we,phase:q(ue,5,9)*Math.PI*2}),A[ue*3]=i.x*we,A[ue*3+1]=i.y*we,A[ue*3+2]=i.z*we}S.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,t.add(v,S,T);const b=210,P=new gt(x,l,b);P.name="NC_Ring2_Antennas";for(let k=0;k<b;k++){const ce=.35+q(k,41,11)*.3,ye=q(k,43,19)*Math.PI*2;i.set(Math.sin(ce)*Math.cos(ye),Math.cos(ce),Math.sin(ce)*Math.sin(ye));const Oe=e*(.018+.032*q(k,8,25));Fn(n,i,e*1.005,0,e*.0014,Oe,e*.0014),P.setMatrixAt(k,n.matrix)}P.instanceMatrix.needsUpdate=!0,t.add(P);const N=240,I=new Float32Array(N*3);for(let k=0;k<N;k++){const ce=k%6,ye=.35+k/N*.3,Oe=ce*Math.PI/3+Math.sin(ye*5)*.08+(q(k,3,37)-.5)*.05;i.set(Math.sin(ye)*Math.cos(Oe),Math.cos(ye),Math.sin(ye)*Math.sin(Oe));const le=e*1.0025;I[k*3]=i.x*le,I[k*3+1]=i.y*le,I[k*3+2]=i.z*le}const B=new St;B.setAttribute("position",new pt(I,3));const z=new mn({map:qr("rgba(255, 195, 115, 0.9)","rgba(180, 90, 30, 0.32)"),color:14254136,size:1.65,transparent:!0,opacity:.78,depthWrite:!1,blending:Yt,sizeAttenuation:!0}),U=new bn(B,z);U.name="NC_Ring2_Isolated_Streetlamps",t.add(U);const H=new St;H.setAttribute("position",new pt(A,3));const D=new mn({map:qr("rgba(22, 26, 34, 0.55)","rgba(14, 18, 24, 0.25)"),color:1975340,size:15.5,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),te=new bn(H,D);te.name="NC_Ring2_Industrial_Smoke",t.add(te);const he=44,me=96,ze=(he+1)*(me+1),We=new Float32Array(ze*3),ee=new Float32Array(ze*3),se=[];for(let k=0;k<=he;k++){const ce=.62+k/he*.46,ye=Math.sin(ce),Oe=Math.cos(ce);for(let le=0;le<=me;le++){const W=le/me*Math.PI*2,ue=ye*Math.cos(W),we=Oe,$e=ye*Math.sin(W),Qe=js(ue,we,$e,ce,e),yt=e*.999+Qe,ft=k*(me+1)+le;We[ft*3]=ue*yt,We[ft*3+1]=we*yt,We[ft*3+2]=$e*yt;const mt=Bt(ue*18+2,we*18,$e*18)*.5+.5,rt=Q.clamp(Qe/(e*.012),0,1);ee[ft*3]=.24+mt*.14+rt*.12,ee[ft*3+1]=.11+mt*.055+rt*.04,ee[ft*3+2]=.07+mt*.035}}for(let k=0;k<he;k++)for(let ce=0;ce<me;ce++){const ye=k*(me+1)+ce,Oe=ye+(me+1);se.push(ye,Oe,ye+1,ye+1,Oe,Oe+1)}const ge=new St;ge.setAttribute("position",new pt(We,3)),ge.setAttribute("color",new pt(ee,3)),ge.setIndex(se),ge.computeVertexNormals();const ae=new et({vertexColors:!0,roughness:.96,metalness:.04}),Ee=new dt(ge,ae);Ee.name="NC_Ring3_Badlands_Terrain",t.add(Ee);const Re=420,Ne=new _o(1,0),ke=Ne.attributes.position;for(let k=0;k<ke.count;k++){const ce=ke.getX(k),ye=ke.getY(k),Oe=ke.getZ(k),le=.72+.42*q(Math.round(ce*100),Math.round(ye*100),Math.round(Oe*100));ke.setXYZ(k,ce*le,ye*(.55+.35*le),Oe*le)}Ne.computeVertexNormals();const Ue=new et({color:6041375,roughness:.94,metalness:.05}),Ke=new gt(Ne,Ue,Re);Ke.name="NC_Ring3_Badlands_Rocks";for(let k=0;k<Re;k++){const ce=.67+q(k,51,3)*.37,ye=q(k,53,17)*Math.PI*2;i.set(Math.sin(ce)*Math.cos(ye),Math.cos(ce),Math.sin(ce)*Math.sin(ye));const Oe=js(i.x,i.y,i.z,ce,e),le=e*(.008+.022*Math.pow(q(k,7,11),1.6)),W=le*(.45+.9*q(k,9,13)),ue=le*(.65+.6*q(k,13,5));Fn(n,i,e+Oe*.96,q(k,3,29)*Math.PI*2,le,W,ue),Ke.setMatrixAt(k,n.matrix)}Ke.instanceMatrix.needsUpdate=!0,t.add(Ke);const O=4,Mt=[.25,1.85,3.45,5.05],Ve=[],nt=[],Le=38,it=e*.0042,Ie=new E,L=new E,C=new E,Y=new et({color:1710364,roughness:.88,metalness:.1,side:zt});for(let k=0;k<O;k++){const ce=Mt[k],ye=new Float32Array((Le+1)*2*3),Oe=[];for(let ue=0;ue<=Le;ue++){const we=ue/Le,$e=.64+we*.4,Qe=ce+Math.sin(we*3.8+k)*.11,yt=Math.sin($e),ft=Math.cos($e);i.set(yt*Math.cos(Qe),ft,yt*Math.sin(Qe)),Ie.set(ft*Math.cos(Qe),-yt,ft*Math.sin(Qe)).normalize(),L.crossVectors(i,Ie).normalize();const mt=js(i.x,i.y,i.z,$e,e),rt=e+mt+e*8e-4;C.copy(i).multiplyScalar(rt);const Be=ue*2;if(ye[Be*3]=C.x-L.x*it,ye[Be*3+1]=C.y-L.y*it,ye[Be*3+2]=C.z-L.z*it,ye[(Be+1)*3]=C.x+L.x*it,ye[(Be+1)*3+1]=C.y+L.y*it,ye[(Be+1)*3+2]=C.z+L.z*it,ue<Le&&Oe.push(Be,Be+2,Be+1,Be+1,Be+2,Be+3),ue>1&&ue<Le-1&&ue%2===0){const tn=ue%4===0?1:-1,ct=C.clone().addScaledVector(L,tn*it*1.45).normalize(),R=e*.0085;Fn(n,ct,rt-e*4e-4,0,e*6e-4,R,e*6e-4),Ve.push(n.matrix.clone());const G=rt+R;nt.push(ct.x*G,ct.y*G,ct.z*G)}}const le=new St;le.setAttribute("position",new pt(ye,3)),le.setIndex(Oe),le.computeVertexNormals();const W=new dt(le,Y);W.name=`NC_Ring3_Badlands_Road_${k+1}`,t.add(W)}const ne=new jt(.4,.55,1,5);ne.translate(0,.5,0);const K=new gt(ne,l,Ve.length);K.name="NC_Ring3_Road_LightPoles",Ve.forEach((k,ce)=>K.setMatrixAt(ce,k)),K.instanceMatrix.needsUpdate=!0,t.add(K);const Z=new St;Z.setAttribute("position",new Ut(nt,3));const Se=new mn({map:qr("rgba(255, 185, 95, 0.95)","rgba(220, 100, 28, 0.35)"),color:16754250,size:2.1,transparent:!0,opacity:.85,depthWrite:!1,blending:Yt,sizeAttenuation:!0}),pe=new bn(Z,Se);pe.name="NC_Ring3_Road_LightOrbs",t.add(pe);const _e=36,He=new gt(x,new et({color:7304574,roughness:.55,metalness:.45}),_e);He.name="NC_Ring3_WindTurbine_Masts";const oe=new Kt(.11,1,.03);oe.translate(0,.5,0);const ve=new gt(oe,new et({color:9278878,roughness:.45,metalness:.35}),_e*3);ve.name="NC_Ring3_WindTurbine_Blades";const Ge=[];for(let k=0;k<_e;k++){const ce=k%4,ye=.72+ce*.072,Oe=.78+ce*1.48,le=ye+(q(k,61,7)-.5)*.075,W=Oe+(q(k,67,13)-.5)*.24;i.set(Math.sin(le)*Math.cos(W),Math.cos(le),Math.sin(le)*Math.sin(W));const ue=js(i.x,i.y,i.z,le,e),we=e*(.025+.012*q(k,3,7)),$e=e+ue-e*5e-4;Fn(n,i,$e,0,e*.0022,we,e*.0022),He.setMatrixAt(k,n.matrix);const Qe=i.clone().multiplyScalar($e+we),yt=new ut().setFromUnitVectors(tl,i),ft=new ut().setFromAxisAngle(tl,q(k,12,5)*Math.PI*2),mt=yt.multiply(ft);Ge.push({hubPos:Qe,orientQuat:mt,bladeLen:we*.58,omega:1+q(k,8,19)*.9,phase:q(k,15,2)*Math.PI*2})}He.instanceMatrix.needsUpdate=!0,t.add(He,ve);const Pe=18,fe=Pe*3,je=new gt(d,l,fe);je.name="NC_Ring3_Isolated_Outposts";const st=[];let vt=0;for(let k=0;k<Pe;k++){const ce=.74+q(k,71,9)*.27,ye=q(k,73,19)*Math.PI*2;i.set(Math.sin(ce)*Math.cos(ye),Math.cos(ce),Math.sin(ce)*Math.sin(ye));const Oe=js(i.x,i.y,i.z,ce,e),le=new E(Math.cos(ce)*Math.cos(ye),-Math.sin(ce),Math.cos(ce)*Math.sin(ye)).normalize(),W=new E().crossVectors(i,le).normalize();for(let ue=0;ue<3;ue++){const we=(q(k*3+ue,2,11)-.5)*.025,$e=(q(k*3+ue,4,17)-.5)*.025,Qe=i.clone().addScaledVector(le,we).addScaledVector(W,$e).normalize(),yt=e*(.0055+.004*q(k,ue,21)),ft=e*(.0065+.005*q(ue,k,31)),mt=e*(.0042+.003*q(k+1,ue,5));if(Fn(n,Qe,e+Oe*.95,q(k,ue,4)*Math.PI,yt,mt,ft),je.setMatrixAt(vt++,n.matrix),ue<2){const rt=e+Oe*.95+mt*1.1;st.push(Qe.x*rt,Qe.y*rt,Qe.z*rt)}}}je.instanceMatrix.needsUpdate=!0,t.add(je);const F=new St;F.setAttribute("position",new Ut(st,3));const Me=new mn({map:qr("rgba(255, 215, 145, 1.0)","rgba(255, 145, 50, 0.35)"),color:16760944,size:2,transparent:!0,opacity:.9,depthWrite:!1,blending:Yt,sizeAttenuation:!0}),J=new bn(F,Me);J.name="NC_Ring3_Outpost_WarmLights",t.add(J);const re=new ut,be=new ut,Te=new E,X=new Je,Fe=Math.PI*2/3,tt=new E(0,0,1);return{group:t,update(k,ce=1){if(!t.parent||!t.parent.visible)return;for(let le=0;le<_e;le++){const W=Ge[le],ue=k*W.omega+W.phase;Te.set(W.bladeLen*.25,W.bladeLen,W.bladeLen*.25);for(let we=0;we<3;we++){const $e=ue+we*Fe;re.setFromAxisAngle(tt,$e),be.copy(W.orientQuat).multiply(re),X.compose(W.hubPos,be,Te),ve.setMatrixAt(le*3+we,X)}}ve.instanceMatrix.needsUpdate=!0;const ye=H.attributes.position;for(let le=0;le<M.length;le++){const W=M[le],ue=1+.002*Math.sin(k*.7+W.phase);ye.setXYZ(le,W.dir.x*W.alt*ue,W.dir.y*W.alt*ue,W.dir.z*W.alt*ue)}ye.needsUpdate=!0;const Oe=Q.clamp(.45+(ce-1)*.28,.35,.85);a.emissiveIntensity=.48*Oe,z.opacity=Q.clamp(.45+(ce-.8)*.25,.38,.82),Se.opacity=Q.clamp(.45+(ce-.8)*.3,.4,.88),Me.opacity=Q.clamp(.5+(ce-.8)*.32,.45,.92)}}}const as=157.5,ls=1.45,oa=1/3.5,fh=Q.degToRad(68),Yr=new E(0,Math.cos(fh),Math.sin(fh)).normalize(),vv={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:11.5,eccentricity:.045,orbitOmega:.0295,localRadius:1.32,groundFloorAlt:1.65,kmScale:5800,rotationSpeed:.014,axialOmega:.015,axialTiltX:Q.degToRad(6),axialTiltZ:Q.degToRad(21),initialSpinAngle:-.95,capLocalDir:Yr,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new E(0,1.32*2.58,1.32*.92),lowOrbitLookAt:new E(0,1.32,0),highCloudOffset:new E(-.08,1.32*2.24,1.32*.56),aerialOffset:new E(-.025,1.32+.072,.095),aerialLookAt:new E(.028,1.32+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:18.5,eccentricity:.035,orbitOmega:.0144,localRadius:1.42,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*oa*3.8,kmScale:6200,rotationSpeed:.011,axialOmega:.012,axialTiltX:Q.degToRad(-5),axialTiltZ:Q.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:Yr,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new E(0,1.42*2.58,1.42*.92),lowOrbitLookAt:new E(0,1.42,0),highCloudOffset:new E(-.06,1.42*2.24,1.42*.56),aerialOffset:new E(-.012,1.42+.145,.195),aerialLookAt:new E(.005,1.42+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.56,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:26.5,eccentricity:.05,orbitOmega:.0084,localRadius:1.52,groundFloorAlt:.95,glbLocalScale:.004*oa,kmScale:6800,rotationSpeed:.01,axialOmega:.011,axialTiltX:Q.degToRad(8),axialTiltZ:Q.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:Yr,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new E(-.32,1.52*2.58,1.52*.92),lowOrbitLookAt:new E(0,1.52,0),highCloudOffset:new E(-.18,1.52*2.24,1.52*.58),aerialOffset:new E(-.025,1.52+.08,.092),aerialLookAt:new E(.003,1.52+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:35.5,eccentricity:.04,orbitOmega:.0054,localRadius:1.62,groundFloorAlt:.95,glbLocalScale:.0039*oa,kmScale:7500,rotationSpeed:.009,axialOmega:.01,axialTiltX:Q.degToRad(-6),axialTiltZ:Q.degToRad(24),initialSpinAngle:-.88,capLocalDir:Yr,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new E(0,1.62*2.58,1.62*.92),lowOrbitLookAt:new E(0,1.62,0),highCloudOffset:new E(.08,1.62*2.24,1.62*.58),aerialOffset:new E(0,1.62+.042,.102),aerialLookAt:new E(0,1.62+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:46,eccentricity:.06,orbitOmega:.0037,localRadius:1.85,groundFloorAlt:2,kmScale:11800,rotationSpeed:.05,axialOmega:.024,axialTiltX:Q.degToRad(7),axialTiltZ:Q.degToRad(26),initialSpinAngle:0,landable:!1}};class Mv{constructor({scene:e,camera:t,controls:n,starfield:i,cockpitParticles:r,bloomPass:o,onStatusUpdate:a}){this.scene=e,this.camera=t,this.controls=n,this.starfield=i,this.cockpitParticles=r,this.bloomPass=o,this.onStatusUpdate=a||(()=>{}),this.dracoLoader=new Ox,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new nx,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Nt,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(as),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new ut,this._tmpRadial=new E,this._tmpSunDir=new E,this._tmpPlanetToSun=new E,this._tmpUp=new E(0,1,0),this._tmpStationPos=new E,this._tmpColorA=new ie,this._tmpColorB=new ie,this._tmpColorC=new ie,this._tmpSkyColor=new ie,this._tmpFogColor=new ie,this._identityQuat=new ut,this.skyDome=Wx(),this.scene.add(this.skyDome),this._setupLighting()}_setupLighting(){this.ambientLight=new I_(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new A_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new io(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new xu(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.scene.add(this.planetaryDirLight),this.localAtmoLight=new io(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new io(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(.85),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new E(3.4,2.35,.72)},uHotColor:{value:new E(4,3.1,1.45)},uLimbColor:{value:new E(2.2,.85,.14)}};const n=new Gt({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(_=>{_.isMesh&&(_.material=n)});const i=new Gt({uniforms:{uColor:{value:new E(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:Yt,side:Qt}),r=new dt(new Jt(2.52,48,48),i);r.name="Solar_Tight_Corona";const o=document.createElement("canvas");o.width=512,o.height=512;const a=o.getContext("2d");a.clearRect(0,0,512,512);const l=256,c=256,h=a.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),a.fillStyle=h,a.beginPath(),a.arc(l,c,130,0,Math.PI*2),a.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((_,m)=>{a.save(),a.translate(l,c),a.rotate(_+.18);const p=m===0?242:210,v=a.createLinearGradient(-p,0,p,0);v.addColorStop(0,"rgba(255, 210, 120, 0.0)"),v.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),v.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),v.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),v.addColorStop(1,"rgba(255, 210, 120, 0.0)"),a.fillStyle=v,a.beginPath(),a.ellipse(0,0,p,3.2,0,0,Math.PI*2),a.fill(),a.restore()});const d=new an(o);d.colorSpace=Ct;const f=new cu({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:Yt}),g=new Xg(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8,10.8,1),t&&(t.add(r),t.add(g))}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),Ja.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,r)=>{this.gltfLoader.load(e,o=>i(o),void 0,o=>r(o))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const r=Array.isArray(i.material)?i.material:[i.material];for(const o of r)o&&o.emissiveIntensity!==void 0&&o.emissiveIntensity>3.2&&(o.emissiveIntensity=2.2+Math.log10(o.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(vv)){const r=t.getObjectByName(i.spinnerName),o=t.getObjectByName(i.rootName),a=t.getObjectByName(i.bodyName);if(!o)continue;const c=new Dn().setFromQuaternion(r?r.quaternion:new ut,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));o.position.set(d,0,0);const f=[];let g=0;o.children.forEach(T=>{if(T.name.includes("Moon")&&!T.name.endsWith("_Orbit")){if(T.traverse(A=>{A.isMesh&&A.material&&(A.material.fog=!1)}),n==="p1"){const A=i.localRadius*(1.95+g*.65),M=A*(.22+g*.14),b=g===0?-1.85:-.78;T.position.set(Math.cos(b)*A,M,Math.sin(b)*A),f.push({node:T,baseRadius:A,angle:b,yOffset:M,speed:.014+g*.008})}else T.position.multiplyScalar(1.65),T.position.length()<i.localRadius*1.6&&T.position.normalize().multiplyScalar(i.localRadius*1.65),f.push({node:T,baseRadius:T.position.length(),angle:Math.atan2(T.position.z,T.position.x),yOffset:T.position.y,speed:.06+Math.random()*.08});g++}});const _=new Nt;_.name=`${i.id}_Axial_Tilt`,_.rotation.order="XZY",_.rotation.x=i.axialTiltX||0,_.rotation.z=i.axialTiltZ||0,o.add(_);const m=new Nt;m.name=`${i.id}_Axial_Spin`,m.rotation.y=i.initialSpinAngle||0,_.add(m);let p=null,v=null,y=null;if(i.landable){o.traverse(A=>{A!==o&&A.isMesh&&(A.name.includes("_Body")||A.name.includes("_Atmosphere")||A.name.includes("_Clouds")||A.name.includes("_DarkClouds")||/^Planet_01/i.test(A.name))&&(A.visible=!1)}),p=Xx(i,as),p.userBaseColors={sunlit:new ie(p.cloudDeckPalette.sunlit),ambient:new ie(p.cloudDeckPalette.ambient),horizon:new ie(p.cloudDeckPalette.horizon)},m.add(p.group),v=p.atmosphere,y=new Nt,y.name=`${i.id}_Cap_Frame`;const T=i.capLocalDir?i.capLocalDir.clone().normalize():new E(0,1,0);y.quaternion.setFromUnitVectors(new E(0,1,0),T),m.add(y)}else{const T=o.children.filter(A=>A!==_&&!A.name.includes("Moon")&&!A.name.includes("_Orbit"));for(const A of T)m.add(A);v=wu(i,i.localRadius,1.05),m.add(v)}const x=new Nt;x.name=`${i.id}_Atmosphere_Surface_Detail`,x.visible=!1,(y||m).add(x),this.orbitalGroup.updateMatrixWorld(!0);const S=new E;o.getWorldPosition(S);const w=new ut;m.getWorldQuaternion(w),this.planetNodes.set(n,{config:i,spinner:r,root:o,tiltGroup:_,spinGroup:m,capFrame:y,body:a,orbitalBundle:p,atmosphereShell:v,surfaceCapGroup:x,surfaceLoaded:!1,surfaceLoading:!1,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:S.clone(),currWorldPos:S.clone(),planetDeltaPos:new E,prevSpinWorldQuat:w.clone(),currSpinWorldQuat:w.clone(),spinQuatDelta:new ut,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95,2.15,2.35),this.controls.setPose(new E(0,1190,4270),new E(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded||t.surfaceLoading)return;t.surfaceLoading=!0;const n=t.config;try{if(n.hasProceduralWorld){const r=cv(n);t.surfaceCapGroup.add(r.group),t.pandoraWorld=r;const o=gv(n.localRadius,r);t.surfaceCapGroup.add(o.group),t.animators.push(o)}else if(n.surfaceUrl){const r=await this._loadGLB(n.surfaceUrl);if(Yx(r,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(r),n.id==="p2"){this._calibrateNightCityMaterials(r);const o=xv(n);t.surfaceCapGroup.add(o.group),t.animators.push(o);const a=uh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(uv(r))}else if(n.id==="p4"){const o=qx(n,1400);t.surfaceCapGroup.add(o);const a=uh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(dv(r))}else if(n.id==="p3"){const o=fv(n.localRadius);t.surfaceCapGroup.add(o.group),t.animators.push(o)}}const i=new Set;t.surfaceCapGroup.traverse(r=>{if(!r.isMesh&&!r.isInstancedMesh)return;const o=Array.isArray(r.material)?r.material:[r.material];for(const a of o){if(!a||i.has(a)||a.userData?.animatedEmissive)continue;i.add(a),a.emissive&&a.emissiveIntensity!==void 0&&(a.emissiveMap||a.emissive.r>.008||a.emissive.g>.008||a.emissive.b>.008)&&t.nightMaterials.push({material:a,baseEmissive:a.emissiveIntensity,tier:a.userData?.nightTier||"default"})}}),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(!n.isMesh)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i){if(!r||t.has(r)||r.emissiveIntensity===void 0)continue;t.add(r),r.userData=r.userData||{};const o=r.name||"";/Windows_Dense|Windows_Brutal|Windows_High/i.test(o)?(r.emissive.setHex(12113130),r.emissiveIntensity=.44,r.userData.nightTier="window"):/rib_warm_white/i.test(o)?(r.emissiveIntensity=1.05,r.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber|chimney_flare/i.test(o)?(r.emissiveIntensity=1.55,r.userData.nightTier="accent"):/backboard/i.test(o)?(r.emissiveIntensity=.42,r.userData.nightTier="window"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(o)&&(r.emissiveIntensity=/Koi|Geisha|Banner/i.test(o)?2.15:2.35,r.userData.nightTier="hero")}})}_showTransitionBanner(e,t,n,i=1500){const r=document.getElementById("hud-transition-banner"),o=document.getElementById("banner-subtitle"),a=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");o&&(o.textContent=e),a&&(a.textContent=t),r&&r.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{r&&r.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){document.querySelectorAll(".nav-btn").forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){const t=String(e);if(this._highlightActiveNavButton(t),t==="1"){this.controls.engageAutopilot({getTargetPose:()=>({targetPos:new E(0,1280,4380),lookAtPos:new E(0,0,0),upVec:new E(0,1,0)}),duration:3.4});return}if(t==="2"){if(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor)return;this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const f=new E;return this.crystalPalaceAnchor.getWorldPosition(f),{targetPos:f.clone().add(new E(0,18,74)),lookAtPos:f,upVec:new E(0,1,0)}},duration:3.6});return}const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const r=this.planetNodes.get(i);if(!r)return;await this.ensurePlanetSurfaceLoaded(i);const o=r.config,a=r.capFrame||r.spinGroup||r.root;this.orbitalGroup.updateMatrixWorld(!0);const l=new E;r.root.getWorldPosition(l);const c=this.camera.position.distanceTo(l),h=o.localRadius*as,u=h*ls,d=c-h;if(d>u*1.1){const f=Q.clamp(c/820,3,5.2);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.lowOrbitOffset.clone().applyMatrix4(a.matrixWorld),lookAtPos:o.lowOrbitLookAt.clone().applyMatrix4(a.matrixWorld),upVec:new E(0,1,0).transformDirection(a.matrixWorld).normalize()}),duration:f});return}if(d>u*.24){const f=this.camera.position.clone();this.orbitalGroup.updateMatrixWorld(!0);const g=new Je().copy(a.matrixWorld).invert();f.applyMatrix4(g);const _=[f];f.distanceTo(o.highCloudOffset)>o.localRadius*.25&&d>u*.85&&_.push(o.highCloudOffset.clone());const m=o.highCloudOffset.clone().lerp(o.aerialOffset,.55).normalize().multiplyScalar(o.localRadius*(1+ls*.42)),p=o.highCloudOffset.clone().lerp(o.aerialOffset,.82).normalize().multiplyScalar(o.localRadius*(1+ls*.16));_.push(m,p,o.aerialOffset.clone());const v=new Bi(_);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.6,getTargetPose:y=>{this.orbitalGroup.updateMatrixWorld(!0);const x=v.getPoint(y),S=o.aerialLookAt.clone().lerp(o.lowOrbitLookAt,Math.pow(1-y,1.8)*.45),T=v.getPoint(Math.min(1,y+.08)).lerp(S,Math.min(1,y*1.15+.2));return{targetPos:x.applyMatrix4(a.matrixWorld),lookAtPos:T.applyMatrix4(a.matrixWorld),upVec:new E(0,1,0).transformDirection(a.matrixWorld).normalize()}}});return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.aerialOffset.clone().applyMatrix4(a.matrixWorld),lookAtPos:o.aerialLookAt.clone().applyMatrix4(a.matrixWorld),upVec:new E(0,1,0).transformDirection(a.matrixWorld).normalize()}),duration:2.6})}async navigateToPandoraLandmark(e){const t=It.find(M=>M.id===e),n=this.planetNodes.get("p1");if(!t||!n)return;await this.ensurePlanetSurfaceLoaded("p1");const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const r=n.config.localRadius,o=new Je().copy(i.matrixWorld).invert(),a=this.camera.position.clone().applyMatrix4(o),l=a.clone().normalize(),c=t.capDir.clone().normalize(),h=Math.abs(c.y)<.85?new E(0,1,0):new E(1,0,0),u=new E().crossVectors(c,h).normalize(),d=c.clone().multiplyScalar(r+t.viewAlt).addScaledVector(u,-t.viewBack).normalize().multiplyScalar(r+t.viewAlt),f=c.clone().multiplyScalar(r+t.viewAlt*.25),g=l.angleTo(c),_=Math.min(.45,g*.22),m=Math.max(3,Math.ceil(g/.35)),p=new ut,v=new ut().setFromUnitVectors(l,c),y=new ut,x=Math.max(r+.05,Math.min(a.length(),r*1.48)),S=r+t.viewAlt,w=[a.clone()];for(let M=1;M<m;M++){const b=M/m;p.copy(y).slerp(v,b);const P=l.clone().applyQuaternion(p).normalize(),N=Q.lerp(x,S,b)+Math.sin(b*Math.PI)*_;w.push(P.multiplyScalar(N))}w.push(d);const T=new Bi(w),A=Q.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:A,getTargetPose:M=>{this.orbitalGroup.updateMatrixWorld(!0);const b=T.getPoint(M),N=T.getPoint(Math.min(1,M+.08)).lerp(f,Math.min(1,M*1.35)),I=b.clone().normalize();return{targetPos:b.applyMatrix4(i.matrixWorld),lookAtPos:N.applyMatrix4(i.matrixWorld),upVec:I.transformDirection(i.matrixWorld).normalize()}}})}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),Ja.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,S]of this.planetNodes){const w=S.config;S.prevWorldPos.copy(S.currWorldPos),S.spinGroup&&S.prevSpinWorldQuat.copy(S.currSpinWorldQuat),S.orbitAngle+=n*w.orbitOmega;const T=w.semiMajorAxis,A=w.eccentricity||.04,M=T*(1-A*A)/(1+A*Math.cos(S.orbitAngle));S.spinner&&(S.spinner.rotation.y=S.orbitAngle),S.root.position.set(M,0,0);for(const b of S.moonOrbits)b.angle+=n*b.speed,b.node.position.set(Math.cos(b.angle)*b.baseRadius,b.yOffset,Math.sin(b.angle)*b.baseRadius);S.spinAngle+=n*(w.axialOmega??w.rotationSpeed??.012),S.spinGroup&&(S.spinGroup.rotation.y=S.spinAngle),S.orbitalBundle&&(S.orbitalBundle.lowerCloudMesh.rotation.y+=n*w.rotationSpeed*.45,S.orbitalBundle.upperCloudMesh.rotation.y+=n*w.rotationSpeed*.85,S.orbitalBundle.lowerCloudGroup.rotation.y+=n*w.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",r=Math.max(0,this.camera.position.length()-2.21*as),o=12e3,a=null,l=null,c=99999;for(const[S,w]of this.planetNodes){w.root.getWorldPosition(w.currWorldPos),w.planetDeltaPos.copy(w.currWorldPos).sub(w.prevWorldPos),w.spinGroup&&(w.spinGroup.getWorldQuaternion(w.currSpinWorldQuat),this._tmpInvQuat.copy(w.prevSpinWorldQuat).invert(),w.spinQuatDelta.copy(w.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const T=w.config.localRadius*as,A=T*ls,M=this.camera.position.distanceTo(w.currWorldPos),b=M-T,P=b/A;if(w.atmosphereShell&&w.atmosphereShell.material.uniforms){const N=w.atmosphereShell.material.uniforms;N.uSunPosition.value.set(0,0,0);const I=Q.smoothstep(P,0,.85);N.uAltitudeFade.value=Q.lerp(.18,1,I)}if(w.config.landable){!w.surfaceLoaded&&!w.surfaceLoading&&M<T*4.5&&this.ensurePlanetSurfaceLoaded(S),w.surfaceCapGroup.scale.setScalar(1);const N=P<(w.config.id==="p2"?.54:.56);if(w.surfaceCapGroup.visible=N,w.config.hasProceduralWorld&&w.orbitalBundle&&(w.orbitalBundle.surfaceMesh.visible=!N),w.orbitalBundle){const I=w.orbitalBundle;I.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(w.currWorldPos),I.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(w.currWorldPos);const B=Q.smoothstep(P,.16,.46),z=B*.64,U=B*.86;if(I.lowerCloudMesh.material.uniforms.uOpacity.value=z,I.lowerCloudMesh.visible=z>.008,I.upperCloudMesh.material.uniforms.uOpacity.value=U,I.upperCloudMesh.visible=U>.008,P<.98){const H=1-Q.smoothstep(P,.56,.98),D=Math.exp(-Math.pow((P-.36)/.16,2))*.82,te=Math.max(H*.36,D);I.lowerCloudPuffs.material.opacity=te,I.lowerCloudGroup.visible=te>.008}else I.lowerCloudGroup.visible=!1}}b<r&&(r=Math.max(0,b),i=w.config.name,o=w.config.kmScale),b<c&&(c=b,l=w,a=S)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const S=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);S<r&&(r=S,i="Estación Crystal Palace",o=850)}let h=!1,u=!1,d=null,f=null,g=null,_=this._identityQuat,m=220,p=220*ls,v=.95,y=8,x="ESPACIO";if(l){const S=l.config;m=S.localRadius*as,p=m*ls,v=S.groundFloorAlt??.95,y=S.minSpeed??8;const w=p*1.25,T=c/p;if(c<w)u=!0,d=l.planetDeltaPos,f=l.currWorldPos,g=l.prevWorldPos,_=l.spinQuatDelta;else if(this.crystalPalaceAnchor){const A=this.planetNodes.get("p2");A&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,d=A.planetDeltaPos,f=A.currWorldPos,g=A.prevWorldPos,_=this._identityQuat))}if(S.landable&&T<1.06){h=T<=1,this.currentDominantPlanet=h?S:null,h&&this.lastBannerPlanetId!==S.id&&(this.lastBannerPlanetId=S.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${S.name.toUpperCase()}`,S.glowCss,1700),S.navKey&&this._highlightActiveNavButton(S.navKey));const A=Q.clamp(1-T,0,1),M=1-Q.smoothstep(T,.92,1.06),b=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),P=this._tmpSunDir.copy(this.camera.position).negate().normalize(),N=Q.clamp(b.dot(P),-1,1),I=Q.smoothstep(-N,-.02,.24),B=Q.smoothstep(N,-.02,.28),z=Math.exp(-Math.pow((N-.02)/.14,2))*(1-I*.55);N>.14?x="DÍA":N>=-.08?x="ATARDECER":x="NOCHE";const U=1-Q.smoothstep(A,.04,.25);for(const K of this.orbitLines)K.material.opacity=K.baseOpacity*U,K.mesh.visible=U>.01;const H=-Math.sqrt(Math.max(0,1-Math.pow(m/Math.max(m,m+c),2))),D=Q.smoothstep(A,.01,.36),te=this.skyDome.material.uniforms;if(S.skyDome){const K=S.id==="p2"?1444388:1841212,Z=S.id==="p2"?7085388:S.id==="p1"?6039150:10174e3,Se=S.id==="p2"?16726909:16743220,pe=S.id==="p2"?331292:198678,_e=S.id==="p2"?1058888:S.id==="p1"?404536:S.id==="p4"?2494984:529190;this._tmpColorA.setHex(S.skyDome.zenith),this._tmpColorA.lerp(this._tmpColorB.setHex(K),z*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),I*.94),te.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(S.skyDome.mid),this._tmpColorA.lerp(this._tmpColorB.setHex(Z),z*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(pe),I*.92),te.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(S.skyDome.horizon),this._tmpColorA.lerp(this._tmpColorB.setHex(Se),z*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(_e),I*.92),te.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(S.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),z*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),I*.9),te.uSunGlowColor.value.copy(this._tmpColorA);const He=S.skyDome.zenithAlpha;if(te.uZenithAlpha.value=Q.lerp(He,Math.max(.16,He*.24),I),te.uLocalUp.value.copy(b),te.uSunDir.value.copy(P),te.uHorizonDot.value=H,te.uAtmoOpacity.value=D,this.skyDome.visible=D>.005,this.starfield.userData.setStarVisibility){const oe=Q.lerp(S.skyDome.starFloor,Math.max(S.skyDome.starFloor,.45),z*(1-B*.7)),ve=Q.lerp(oe,.96,I),Ge=Q.lerp(1,ve,Q.smoothstep(A,.06,.42));this.starfield.userData.setStarVisibility(Ge)}}if(l.orbitalBundle){const K=l.orbitalBundle,Z=S.id==="p2"?14239882:16749142,Se=S.id==="p2"?16726909:16740396;if(K.userBaseColors){this._tmpColorA.copy(K.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(Z),z*.72),this._tmpColorC.copy(K.userBaseColors.horizon).lerp(this._tmpColorB.setHex(Se),z*.85);for(const _e of[K.upperCloudMesh,K.lowerCloudMesh])_e.material.uniforms.uSunColor.value.copy(this._tmpColorA),_e.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const pe=S.id==="p2"?1452616:1319480;this._tmpColorA.copy(K.userBaseColors?K.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(Z),z*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(pe),I*.88),K.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const he=A>.32;for(const[K,Z]of this.planetNodes)Z.root.visible=he?K===a:!0;const me=1-Q.smoothstep(T,.45,.98),ze=198156,We=S.id==="p2"?3871275:8139812;this._tmpSkyColor.setHex(S.skyColor).lerp(this._tmpColorB.setHex(We),z*.72).lerp(this._tmpColorB.setHex(ze),I*.92),this.scene.background=this._tmpColorA.setHex(ze).clone().lerp(this._tmpSkyColor,me*.9);const ee=S.maxFogDensity*(1-Q.smoothstep(T,.16,.85)),se=.02*Math.exp(-Math.pow((T-.43)/.11,2)),ge=.0028*Math.exp(-Math.pow((T-.94)/.12,2)),ae=S.id==="p1"?.0024*(1-Q.smoothstep(T,0,.09)):0,Ee=(ee+se+ge+ae)*M,Re=S.id==="p2"?6428730:13920826,Ne=S.id==="p1"?268836:S.id==="p2"?265496:329744;this._tmpFogColor.setHex(S.fogColor).lerp(this._tmpColorB.setHex(Re),z*.78).lerp(this._tmpColorB.setHex(Ne),I*.9),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=Ee):this.scene.fog=new ml(this._tmpFogColor.getHex(),Ee);const ke=S.id==="p1"?1-.34*(1-Q.smoothstep(T,0,.12)):1,Ue=S.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,Ke=Q.lerp(.05,1,Q.smoothstep(N,-.06,.24));this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize(),this.planetaryDirLight.position.copy(this._tmpPlanetToSun).multiplyScalar(1200),this.planetaryDirLight.color.setHex(S.sunColor).lerp(this._tmpColorB.setHex(16741424),z*.72).lerp(this._tmpColorB.setHex(5008280),I*.85),this.planetaryDirLight.intensity=Q.lerp(.25,S.sunIntensity,A)*ke*Ke,this.hemiLight.position.copy(b).multiplyScalar(100);const O=S.id==="p2"?16726909:16743220,Mt=S.id==="p1"?537668:S.id==="p2"?926272:792108,Ve=S.id==="p1"?401448:527380;this._tmpColorA.setHex(S.hemiSkyColor).lerp(this._tmpColorB.setHex(O),z*.55).lerp(this._tmpColorB.setHex(Mt),I*.9),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this._tmpColorA.setHex(S.hemiGroundColor).lerp(this._tmpColorB.setHex(Ve),I*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this.hemiLight.intensity=Q.lerp(.42,S.hemiIntensity,A)*Q.lerp(1,.36,I),this._tmpColorA.setHex(S.ambientColor).lerp(this._tmpColorB.setHex(1054760),I*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this.ambientLight.intensity=Q.lerp(.55,S.ambientIntensity,A)*ke*Q.lerp(1,.45,I);const nt=S.id==="p1"?.74:S.id==="p3"?.85:.9,Le=S.id==="p1"?2.45*Ue:S.id==="p2"?2.15:S.id==="p3"?2.25:1.95,it=Math.min(1,Math.max(I,z*.45)),Ie=Q.lerp(nt,Le,it);if(l.surfaceCapGroup.visible){for(const K of l.animators)K.update(this.elapsedTime,Ie,N);for(const K of l.nightMaterials)S.id==="p2"?K.tier==="window"?K.material.emissiveIntensity=K.baseEmissive*Q.lerp(.65,1.45,it):K.tier==="hero"?K.material.emissiveIntensity=K.baseEmissive*Q.lerp(.95,1.32,it):K.material.emissiveIntensity=K.baseEmissive*Q.lerp(.78,1.18,it):K.material.emissiveIntensity=K.baseEmissive*Ie}const L=1-Q.smoothstep(T,.05,.45),C=S.id==="p1"?Q.smoothstep(-N,-.1,.04):1;if(this.localAtmoLight.color.setHex(S.localLightColor),this.localAtmoLight.intensity=L*5.2*Ue*Q.lerp(.85,1.38,it)*C,this.localAtmoLight.position.copy(this.camera.position).addScaledVector(b,18),this.localBounceLight.color.setHex(S.localBounceColor),this.localBounceLight.intensity=L*4.8*Ue*Q.lerp(.85,1.35,it)*C,this.localBounceLight.position.copy(this.camera.position).addScaledVector(b,-8),this.bloomPass){const K=S.id==="p2"?1.08:1.18,Z=S.bloomStrength*Ue*Q.lerp(.92,K,I);this.bloomPass.strength=Q.lerp(.55,Math.min(.76,Z),L)}const Y=Math.exp(-Math.pow((T-.78)/.2,2))*.85,ne=Math.exp(-Math.pow((T-.4)/.14,2))*.55;this.cockpitParticles.setAtmosphereStyle(S.particleColor,Math.max(Y,ne))}}if(l&&c/p>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/p>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const S of this.orbitLines)S.material.opacity=S.baseOpacity,S.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,S]of this.planetNodes)S.root.visible=!0,S.config.hasProceduralWorld&&S.orbitalBundle&&(S.orbitalBundle.surfaceMesh.visible=!0);this.scene.background.lerp(new ie(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.intensity=Q.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new ie(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new ie(1053724),Math.min(1,t*3)),this.hemiLight.intensity=Q.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new ie(1844790),Math.min(1,t*3)),this.ambientLight.intensity=Q.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=Q.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=Q.lerp(this.localBounceLight.intensity,0,.15),this.bloomPass&&(this.bloomPass.strength=Q.lerp(this.bloomPass.strength,.55,.1)),this.cockpitParticles.setAtmosphereStyle(8965375,0)}if(this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:m,atmoTopAlt:p,groundFloorAlt:v,minSpeed:y,planetCenter:f||(l?l.currWorldPos:null),prevPlanetCenter:g||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:_}),h&&this.currentDominantPlanet){const S=Math.max(0,Math.round((c-v)*115));let w=null;if(this.currentDominantPlanet.id==="p1"){const T=this.planetNodes.get("p1"),A=T?.capFrame||T?.spinGroup||T?.root;A&&(w=It.map(M=>{this._tmpStationPos.copy(M.capDir).multiplyScalar(T.config.localRadius).applyMatrix4(A.matrixWorld);const b=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(T.config.kmScale/620));return{id:M.id,shortName:M.shortName,distKm:b}}))}this.onStatusUpdate({modeText:"ATMOSFÉRICO",isSurface:!0,sectorName:this.currentDominantPlanet.name.toUpperCase(),nearestText:`${this.currentDominantPlanet.name}`,altitudeText:`${S.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:x,pandoraLandmarks:w})}else{const S=Math.max(1,Math.round(r*(o/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${S.toLocaleString("es-ES")} km`,altitudeText:`${S.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}}const Au=document.getElementById("app-canvas"),ph=document.getElementById("loading-screen"),Kr=document.getElementById("loading-status"),mh=document.getElementById("loading-bar-fill"),aa=document.getElementById("hud-mode"),gh=document.getElementById("hud-sector"),_h=document.getElementById("hud-nearest"),xh=document.getElementById("hud-altitude"),vh=document.getElementById("hud-time-btn"),ms=document.getElementById("hud-time"),jr=document.getElementById("pandora-landmarks-bar"),Mh=document.getElementById("hud-speed"),yh=document.getElementById("hud-speed-unit"),Sh=document.getElementById("hud-speed-bar"),bh=document.getElementById("hud-mult"),la=document.getElementById("hud-boost"),wh=document.getElementById("hud-coords"),dr=new Wg;dr.background=new ie(198156);const yi=new rn(62,window.innerWidth/window.innerHeight,.05,12e4);dr.add(yi);const ki=new Hg({canvas:Au,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});ki.setSize(window.innerWidth,window.innerHeight);ki.setPixelRatio(Math.min(window.devicePixelRatio,2));ki.outputColorSpace=Ct;ki.toneMapping=sl;ki.toneMappingExposure=1.08;const fr=new K_(ki),yv=new j_(dr,yi);fr.addPass(yv);const Pl=new As(new Ce(window.innerWidth,window.innerHeight),.55,.35,.95);fr.addPass(Pl);const Sv=new Q_;fr.addPass(Sv);const Cu=J_(8500,52e3);dr.add(Cu);const Ru=new ex(yi,420),Ii=new tx(yi,Au),dn=new Mv({scene:dr,camera:yi,controls:Ii,starfield:Cu,cockpitParticles:Ru,bloomPass:Pl,onStatusUpdate:s=>{if(aa&&(aa.textContent=s.modeText,aa.className=`hud-value ${s.isSurface?"mode-atmo":"mode-orbit"}`),gh&&(gh.textContent=s.sectorName),_h&&(_h.textContent=s.nearestText),xh&&(xh.textContent=s.altitudeText),ms&&(ms.textContent=`${s.timeScale}x · ${s.solarPhaseName}`,ms.className=`hud-value ${s.solarPhaseName==="DÍA"?"phase-day":s.solarPhaseName==="ATARDECER"?"phase-dusk":s.solarPhaseName==="NOCHE"?"phase-night":""}`),jr)if(s.pandoraLandmarks){jr.classList.remove("hidden");for(const e of s.pandoraLandmarks){const t=jr.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else jr.classList.add("hidden")}}),Pu=()=>{const s=dn.cycleTimeScale();if(ms){const e=ms.textContent.split("·")[1]?.trim()||"ESPACIO";ms.textContent=`${s}x · ${e}`}};vh&&vh.addEventListener("click",s=>{s.stopPropagation(),Pu()});document.querySelectorAll(".nav-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.target;t&&dn.navigateToTarget(t)})});document.querySelectorAll(".pandora-lm-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.landmark;t&&dn.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",s=>{["Digit1","Numpad1"].includes(s.code)&&dn.navigateToTarget("1"),["Digit2","Numpad2"].includes(s.code)&&dn.navigateToTarget("2"),["Digit3","Numpad3"].includes(s.code)&&dn.navigateToTarget("3"),["Digit4","Numpad4"].includes(s.code)&&dn.navigateToTarget("4"),["Digit5","Numpad5"].includes(s.code)&&dn.navigateToTarget("5"),["Digit6","Numpad6"].includes(s.code)&&dn.navigateToTarget("6"),s.code==="KeyT"&&!s.repeat&&Pu()});window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;yi.aspect=s/e,yi.updateProjectionMatrix(),ki.setSize(s,e),fr.setSize(s,e),Pl.resolution.set(s,e)});async function bv(){try{await dn.init((s,e)=>{mh&&(mh.style.width=`${s}%`),Kr&&(Kr.textContent=e)})}catch(s){console.error("Error inicializando simulador:",s),Kr&&(Kr.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{ph&&ph.classList.add("hidden")},300)}}const wv=new vu;function Lu(){requestAnimationFrame(Lu);const s=wv.getDelta();dn.update(s),Ii.update(s),dn.syncCameraPostFlight();const e=Ii.getCurrentSpeed(),t=Ii.getPulseRatio();Ru.update(s,e,t);const n=dn.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(Mh&&(Mh.textContent=i),yh&&(yh.textContent=n?"km/s":"m/s"),Sh){const r=(n?1400:120)*Ii.speedMultiplier,o=Math.min(100,e/Math.max(1,r)*100);Sh.style.width=`${o}%`}if(bh&&(bh.textContent=`x${Ii.speedMultiplier.toFixed(1)}`),la){const r=t>.1;la.textContent=Ii.autopilot?"PILOTO AUTO":r?"MOTOR PULSE":"EN ESPERA",la.className=r?"status-active":"status-standby"}if(wh){const r=yi.position;wh.textContent=`${r.x.toFixed(0)}, ${r.y.toFixed(0)}, ${r.z.toFixed(0)}`}fr.render()}bv();Lu();
