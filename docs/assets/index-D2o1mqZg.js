(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Is="162",Vn={ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,js=1,Pl=2,zo=1,Dl=2,en=3,Mn=0,bt=1,Nt=2,_n=0,ui=1,Zs=2,Ks=3,Js=4,Il=5,Dn=100,Ul=101,Nl=102,$s=103,Qs=104,Fl=200,Ol=201,Bl=202,zl=203,vs=204,xs=205,Hl=206,Gl=207,Vl=208,kl=209,Wl=210,Xl=211,ql=212,Yl=213,jl=214,Zl=0,Kl=1,Jl=2,mr=3,$l=4,Ql=5,ec=6,tc=7,Ho=0,nc=1,ic=2,vn=0,rc=1,sc=2,ac=3,Go=4,oc=5,lc=6,cc=7,Vo=300,pi=301,mi=302,gr=303,Ms=304,Sr=306,ys=1e3,Pt=1001,Ss=1002,mt=1003,ea=1004,Ei=1005,lt=1006,Ir=1007,mn=1008,xn=1009,hc=1010,uc=1011,Us=1012,ko=1013,gn=1014,Ft=1015,nn=1016,Wo=1017,Xo=1018,Un=1020,dc=1021,Ht=1023,fc=1024,pc=1025,Nn=1026,gi=1027,mc=1028,qo=1029,gc=1030,Yo=1031,jo=1033,Ur=33776,Nr=33777,Fr=33778,Or=33779,ta=35840,na=35841,ia=35842,ra=35843,Zo=36196,sa=37492,aa=37496,oa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,Ma=37821,Br=36492,ya=36494,Sa=36495,_c=36283,Ea=36284,Ta=36285,ba=36286,vc=3200,xc=3201,Ko=0,Mc=1,pn="",Gt="srgb",sn="srgb-linear",Ns="display-p3",Er="display-p3-linear",_r="linear",Qe="srgb",vr="rec709",xr="p3",Wn=7680,Aa=519,yc=512,Sc=513,Ec=514,Jo=515,Tc=516,bc=517,Ac=518,wc=519,wa=35044,Ra="300 es",Es=1035,rn=2e3,Mr=2001;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,Ts=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Rc(i,e){return(i%e+e)%e}function zr(i,e,t){return(1-t)*i+t*e}function Ca(i){return(i&i-1)===0&&i!==0}function bs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cc={DEG2RAD:dr};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],v=n[8],M=r[0],p=r[3],d=r[6],b=r[1],x=r[4],y=r[7],P=r[2],R=r[5],T=r[8];return s[0]=a*M+o*b+l*P,s[3]=a*p+o*x+l*R,s[6]=a*d+o*y+l*T,s[1]=c*M+h*b+u*P,s[4]=c*p+h*x+u*R,s[7]=c*d+h*y+u*T,s[2]=f*M+m*b+v*P,s[5]=f*p+m*x+v*R,s[8]=f*d+m*y+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,m=c*s-a*l,v=t*u+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=u*M,e[1]=(r*c-h*n)*M,e[2]=(o*n-r*a)*M,e[3]=f*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new We;function $o(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){const i=yr("canvas");return i.style.display="block",i}const La={};function Pc(i){i in La||(La[i]=!0,console.warn(i))}const Pa=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Da=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bi={[sn]:{transfer:_r,primaries:vr,toReference:i=>i,fromReference:i=>i},[Gt]:{transfer:Qe,primaries:vr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Er]:{transfer:_r,primaries:xr,toReference:i=>i.applyMatrix3(Da),fromReference:i=>i.applyMatrix3(Pa)},[Ns]:{transfer:Qe,primaries:xr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Da),fromReference:i=>i.applyMatrix3(Pa).convertLinearToSRGB()}},Dc=new Set([sn,Er]),Ke={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Dc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Bi[e].toReference,r=Bi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Bi[i].primaries},getTransfer:function(i){return i===pn?_r:Bi[i].transfer}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class Qo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=yr("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ic=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vr(r[a].image)):s.push(Vr(r[a]))}else s=Vr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uc=0;class yt extends Gn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Pt,r=Pt,s=lt,a=mn,o=Ht,l=xn,c=yt.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=vi(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case Ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case Ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Vo;yt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],v=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,P=(d+1)/2,R=(h+f)/4,T=(u+M)/4,D=(v+p)/4;return x>y&&x>P?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=T/n):y>P?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=R/r,s=D/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=T/s,r=D/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(u-M)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nc extends Gn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new yt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new el(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Nc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tl extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fc extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(u!==M||l!==f||c!==m||h!==v){let p=1-o;const d=l*f+c*m+h*v+u*M,b=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,d*b);p=Math.sin(p*R)/P,o=Math.sin(o*R)/P}const y=o*b;if(l=l*p+f*y,c=c*p+m*y,h=h*p+v*y,u=u*p+M*y,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+h*u+l*m-c*f,e[t+1]=l*v+h*f+c*u-o*m,e[t+2]=c*v+h*m+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),f=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u-f*m*v;break;case"YXZ":this._x=f*h*u+c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u+f*m*v;break;case"ZXY":this._x=f*h*u-c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u-f*m*v;break;case"ZYX":this._x=f*h*u-c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u+f*m*v;break;case"YZX":this._x=f*h*u+c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u-f*m*v;break;case"XZY":this._x=f*h*u-c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new U,Ia=new Bn;class zn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ot):Ot.fromBufferAttribute(s,a),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Hi.subVectors(this.max,bi),qn.subVectors(e.a,bi),Yn.subVectors(e.b,bi),jn.subVectors(e.c,bi),an.subVectors(Yn,qn),on.subVectors(jn,Yn),bn.subVectors(qn,jn);let t=[0,-an.z,an.y,0,-on.z,on.y,0,-bn.z,bn.y,an.z,0,-an.x,on.z,0,-on.x,bn.z,0,-bn.x,-an.y,an.x,0,-on.y,on.x,0,-bn.y,bn.x,0];return!Wr(t,qn,Yn,jn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,qn,Yn,jn,Hi))?!1:(Gi.crossVectors(an,on),t=[Gi.x,Gi.y,Gi.z],Wr(t,qn,Yn,jn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new U,new U,new U,new U,new U,new U,new U,new U],Ot=new U,zi=new zn,qn=new U,Yn=new U,jn=new U,an=new U,on=new U,bn=new U,bi=new U,Hi=new U,Gi=new U,An=new U;function Wr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){An.fromArray(i,s);const o=r.x*Math.abs(An.x)+r.y*Math.abs(An.y)+r.z*Math.abs(An.z),l=e.dot(An),c=t.dot(An),h=n.dot(An);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Oc=new zn,Ai=new U,Xr=new U;class Tr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ai,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Xr)),this.expandByPoint(Ai.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new U,qr=new U,Vi=new U,ln=new U,Yr=new U,ki=new U,jr=new U;class br{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vi),o=ln.dot(this.direction),l=-ln.dot(Vi),c=ln.lengthSq(),h=Math.abs(1-a*a);let u,f,m,v;if(h>0)if(u=a*l-o,f=a*o-l,v=s*h,u>=0)if(f>=-v)if(f<=v){const M=1/h;u*=M,f*=M,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qr).addScaledVector(Vi,f),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),r=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,r,s){Yr.subVectors(t,e),ki.subVectors(n,e),jr.crossVectors(Yr,ki);let a=this.direction.dot(jr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ln.subVectors(this.origin,e);const l=o*this.direction.dot(ki.crossVectors(ln,ki));if(l<0)return null;const c=o*this.direction.dot(Yr.cross(ln));if(c<0||l+c>a)return null;const h=-o*ln.dot(jr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,r,s,a,o,l,c,h,u,f,m,v,M,p){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,f,m,v,M,p)}set(e,t,n,r,s,a,o,l,c,h,u,f,m,v,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=v,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*u,v=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,v=c*h,M=c*u;t[0]=f+M*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,v=c*h,M=c*u;t[0]=f-M*o,t[4]=-a*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=M-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*u,v=o*h,M=o*u;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+M,t[1]=l*u,t[5]=M*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=M-f*u,t[8]=v*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+v,t[10]=f-M*u}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+M,t[5]=a*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,zc)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),cn.crossVectors(n,wt),cn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),cn.crossVectors(n,wt)),cn.normalize(),Wi.crossVectors(wt,cn),r[0]=cn.x,r[4]=Wi.x,r[8]=wt.x,r[1]=cn.y,r[5]=Wi.y,r[9]=wt.y,r[2]=cn.z,r[6]=Wi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],v=n[2],M=n[6],p=n[10],d=n[14],b=n[3],x=n[7],y=n[11],P=n[15],R=r[0],T=r[4],D=r[8],X=r[12],_=r[1],S=r[5],Z=r[9],z=r[13],C=r[2],k=r[6],F=r[10],O=r[14],G=r[3],J=r[7],K=r[11],re=r[15];return s[0]=a*R+o*_+l*C+c*G,s[4]=a*T+o*S+l*k+c*J,s[8]=a*D+o*Z+l*F+c*K,s[12]=a*X+o*z+l*O+c*re,s[1]=h*R+u*_+f*C+m*G,s[5]=h*T+u*S+f*k+m*J,s[9]=h*D+u*Z+f*F+m*K,s[13]=h*X+u*z+f*O+m*re,s[2]=v*R+M*_+p*C+d*G,s[6]=v*T+M*S+p*k+d*J,s[10]=v*D+M*Z+p*F+d*K,s[14]=v*X+M*z+p*O+d*re,s[3]=b*R+x*_+y*C+P*G,s[7]=b*T+x*S+y*k+P*J,s[11]=b*D+x*Z+y*F+P*K,s[15]=b*X+x*z+y*O+P*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],v=e[3],M=e[7],p=e[11],d=e[15];return v*(+s*l*u-r*c*u-s*o*f+n*c*f+r*o*m-n*l*m)+M*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+d*(-r*o*h-t*l*u+t*o*f+r*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],v=e[12],M=e[13],p=e[14],d=e[15],b=u*p*c-M*f*c+M*l*m-o*p*m-u*l*d+o*f*d,x=v*f*c-h*p*c-v*l*m+a*p*m+h*l*d-a*f*d,y=h*M*c-v*u*c+v*o*m-a*M*m-h*o*d+a*u*d,P=v*u*l-h*M*l-v*o*f+a*M*f+h*o*p-a*u*p,R=t*b+n*x+r*y+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=b*T,e[1]=(M*f*s-u*p*s-M*r*m+n*p*m+u*r*d-n*f*d)*T,e[2]=(o*p*s-M*l*s+M*r*c-n*p*c-o*r*d+n*l*d)*T,e[3]=(u*l*s-o*f*s-u*r*c+n*f*c+o*r*m-n*l*m)*T,e[4]=x*T,e[5]=(h*p*s-v*f*s+v*r*m-t*p*m-h*r*d+t*f*d)*T,e[6]=(v*l*s-a*p*s-v*r*c+t*p*c+a*r*d-t*l*d)*T,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*m+t*l*m)*T,e[8]=y*T,e[9]=(v*u*s-h*M*s-v*n*m+t*M*m+h*n*d-t*u*d)*T,e[10]=(a*M*s-v*o*s+v*n*c-t*M*c-a*n*d+t*o*d)*T,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*m-t*o*m)*T,e[12]=P*T,e[13]=(h*M*r-v*u*r+v*n*f-t*M*f-h*n*p+t*u*p)*T,e[14]=(v*o*r-a*M*r-v*n*l+t*M*l+a*n*p-t*o*p)*T,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,m=s*h,v=s*u,M=a*h,p=a*u,d=o*u,b=l*c,x=l*h,y=l*u,P=n.x,R=n.y,T=n.z;return r[0]=(1-(M+d))*P,r[1]=(m+y)*P,r[2]=(v-x)*P,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(f+d))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(v+x)*T,r[9]=(p-b)*T,r[10]=(1-(f+M))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zn.set(r[0],r[1],r[2]).length();const a=Zn.set(r[4],r[5],r[6]).length(),o=Zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const c=1/s,h=1/a,u=1/o;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=rn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(o===rn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Mr)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=rn){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),f=(t+e)*c,m=(n+r)*h;let v,M;if(o===rn)v=(a+s)*u,M=-2*u;else if(o===Mr)v=s*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new U,Bt=new et,Bc=new U(0,0,0),zc=new U(1,1,1),cn=new U,Wi=new U,wt=new U,Ua=new et,Na=new Bn;class Xt{constructor(e=0,t=0,n=0,r=Xt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Na.setFromEuler(this),this.setFromQuaternion(Na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xt.DEFAULT_ORDER="XYZ";class Fs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hc=0;const Fa=new U,Kn=new Bn,Kt=new et,Xi=new U,wi=new U,Gc=new U,Vc=new Bn,Oa=new U(1,0,0),Ba=new U(0,1,0),za=new U(0,0,1),kc={type:"added"},Wc={type:"removed"},Zr={type:"childadded",child:null},Kr={type:"childremoved",child:null};class gt extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new U,t=new Xt,n=new Bn,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new We}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Oa,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(za,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oa,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(wi,Xi,this.up):Kt.lookAt(Xi,wi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kc),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wc),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Gc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new U(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new U,Jt=new U,Jr=new U,$t=new U,Jn=new U,$n=new U,Ha=new U,$r=new U,Qr=new U,es=new U;class kt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zt.subVectors(e,t),r.cross(zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zt.subVectors(r,t),Jt.subVectors(n,t),Jr.subVectors(e,t);const a=zt.dot(zt),o=zt.dot(Jt),l=zt.dot(Jr),c=Jt.dot(Jt),h=Jt.dot(Jr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$t)===null?!1:$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,$t)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$t.x),l.addScaledVector(a,$t.y),l.addScaledVector(o,$t.z),l)}static isFrontFacing(e,t,n,r){return zt.subVectors(n,t),Jt.subVectors(e,t),zt.cross(Jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),zt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Jn.subVectors(r,n),$n.subVectors(s,n),$r.subVectors(e,n);const l=Jn.dot($r),c=$n.dot($r);if(l<=0&&c<=0)return t.copy(n);Qr.subVectors(e,r);const h=Jn.dot(Qr),u=$n.dot(Qr);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Jn,a);es.subVectors(e,s);const m=Jn.dot(es),v=$n.dot(es);if(v>=0&&m<=v)return t.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector($n,o);const p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return Ha.subVectors(s,r),o=(u-h)/(u-h+(m-v)),t.copy(r).addScaledVector(Ha,o);const d=1/(p+M+f);return a=M*d,o=f*d,t.copy(n).addScaledVector(Jn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function ts(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=Rc(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ts(a,s,e+1/3),this.g=ts(a,s,e),this.b=ts(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ke.fromWorkingColorSpace(Mt.copy(this),e),Math.round(ft(Mt.r*255,0,255))*65536+Math.round(ft(Mt.g*255,0,255))*256+Math.round(ft(Mt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Gt){Ke.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(qi);const n=zr(hn.h,qi.h,t),r=zr(hn.s,qi.s,t),s=zr(hn.l,qi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ye;Ye.NAMES=nl;let Xc=0;class xi extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ui,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vs,this.blendDst=xs,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vs&&(n.blendSrc=this.blendSrc),this.blendDst!==xs&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=qc();function qc(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Yc(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=ft(i,-65504,65504),tn.floatView[0]=i;const e=tn.uint32View[0],t=e>>23&511;return tn.baseTable[t]+((e&8388607)>>tn.shiftTable[t])}function jc(i){const e=i>>10;return tn.uint32View[0]=tn.mantissaTable[tn.offsetTable[e]+(i&1023)]+tn.exponentTable[e],tn.floatView[0]}const Yi={toHalfFloat:Yc,fromHalfFloat:jc},ot=new U,ji=new ue;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ft,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),e}}class il extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rl extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zc=0;const Ut=new et,ns=new gt,Qn=new U,Rt=new zn,Ri=new zn,dt=new U;class Dt extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($o(e)?rl:il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return ns.lookAt(e),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Rt.min,Ri.min),Rt.expandByPoint(dt),dt.addVectors(Rt.max,Ri.max),Rt.expandByPoint(dt)):(Rt.expandByPoint(Ri.min),Rt.expandByPoint(Ri.max))}Rt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dt.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(e,c),dt.add(Qn)),r=Math.max(r,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new U,l[D]=new U;const c=new U,h=new U,u=new U,f=new ue,m=new ue,v=new ue,M=new U,p=new U;function d(D,X,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,X),u.fromBufferAttribute(n,_),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,X),v.fromBufferAttribute(s,_),h.sub(c),u.sub(c),m.sub(f),v.sub(f);const S=1/(m.x*v.y-v.x*m.y);isFinite(S)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(S),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(S),o[D].add(M),o[X].add(M),o[_].add(M),l[D].add(p),l[X].add(p),l[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,X=b.length;D<X;++D){const _=b[D],S=_.start,Z=_.count;for(let z=S,C=S+Z;z<C;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new U,y=new U,P=new U,R=new U;function T(D){P.fromBufferAttribute(r,D),R.copy(P);const X=o[D];x.copy(X),x.sub(P.multiplyScalar(P.dot(X))).normalize(),y.crossVectors(R,X);const S=y.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,S)}for(let D=0,X=b.length;D<X;++D){const _=b[D],S=_.start,Z=_.count;for(let z=S,C=S+Z;z<C;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let d=0;d<h;d++)f[v++]=c[m++]}return new Wt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new et,wn=new br,Zi=new Tr,Va=new U,ei=new U,ti=new U,ni=new U,is=new U,Ki=new U,Ji=new ue,$i=new ue,Qi=new ue,ka=new U,Wa=new U,Xa=new U,er=new U,tr=new U;class Et extends gt{constructor(e=new Dt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ki.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(is.fromBufferAttribute(u,e),a?Ki.addScaledVector(is,h):Ki.addScaledVector(is.sub(t),h))}t.add(Ki)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(s),wn.copy(e.ray).recast(e.near),!(Zi.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Zi,Va)===null||wn.origin.distanceToSquared(Va)>(e.far-e.near)**2))&&(Ga.copy(s).invert(),wn.copy(e.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=a[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,P=x;y<P;y+=3){const R=o.getX(y),T=o.getX(y+1),D=o.getX(y+2);r=nr(this,d,e,n,c,h,u,R,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const b=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);r=nr(this,a,e,n,c,h,u,b,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=a[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,P=x;y<P;y+=3){const R=y,T=y+1,D=y+2;r=nr(this,d,e,n,c,h,u,R,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const b=p,x=p+1,y=p+2;r=nr(this,a,e,n,c,h,u,b,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Kc(i,e,t,n,r,s,a,o){let l;if(e.side===bt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Mn,o),l===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(tr);return c<t.near||c>t.far?null:{distance:c,point:tr.clone(),object:i}}function nr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ei),i.getVertexPosition(l,ti),i.getVertexPosition(c,ni);const h=Kc(i,e,t,n,ei,ti,ni,er);if(h){r&&(Ji.fromBufferAttribute(r,o),$i.fromBufferAttribute(r,l),Qi.fromBufferAttribute(r,c),h.uv=kt.getInterpolation(er,ei,ti,ni,Ji,$i,Qi,new ue)),s&&(Ji.fromBufferAttribute(s,o),$i.fromBufferAttribute(s,l),Qi.fromBufferAttribute(s,c),h.uv1=kt.getInterpolation(er,ei,ti,ni,Ji,$i,Qi,new ue)),a&&(ka.fromBufferAttribute(a,o),Wa.fromBufferAttribute(a,l),Xa.fromBufferAttribute(a,c),h.normal=kt.getInterpolation(er,ei,ti,ni,ka,Wa,Xa,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};kt.getNormal(ei,ti,ni,u.normal),h.face=u}return h}class Mi extends Dt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function v(M,p,d,b,x,y,P,R,T,D,X){const _=y/T,S=P/D,Z=y/2,z=P/2,C=R/2,k=T+1,F=D+1;let O=0,G=0;const J=new U;for(let K=0;K<F;K++){const re=K*S-z;for(let fe=0;fe<k;fe++){const Ce=fe*_-Z;J[M]=Ce*b,J[p]=re*x,J[d]=C,c.push(J.x,J.y,J.z),J[M]=0,J[p]=0,J[d]=R>0?1:-1,h.push(J.x,J.y,J.z),u.push(fe/T),u.push(1-K/D),O+=1}}for(let K=0;K<D;K++)for(let re=0;re<T;re++){const fe=f+re+k*K,Ce=f+re+k*(K+1),q=f+(re+1)+k*(K+1),ie=f+(re+1)+k*K;l.push(fe,Ce,ie),l.push(Ce,q,ie),G+=6}o.addGroup(m,G,X),m+=G,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=_i(i[t]);for(const r in n)e[r]=n[r]}return e}function Jc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sl(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}const $c={clone:_i,merge:St};var Qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qc,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Jc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class al extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new U,qa=new ue,Ya=new ue;class Lt extends al{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,qa,Ya),t.subVectors(Ya,qa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=-90,ri=1;class th extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Lt(ii,ri,e,t);r.layers=this.layers,this.add(r);const s=new Lt(ii,ri,e,t);s.layers=this.layers,this.add(s);const a=new Lt(ii,ri,e,t);a.layers=this.layers,this.add(a);const o=new Lt(ii,ri,e,t);o.layers=this.layers,this.add(o);const l=new Lt(ii,ri,e,t);l.layers=this.layers,this.add(l);const c=new Lt(ii,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ol extends yt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nh extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ol(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mi(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:_n});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=lt),new th(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const rs=new U,ih=new U,rh=new We;class fn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=rs.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rh.getNormalMatrix(e),r=this.coplanarPoint(rs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Tr,ir=new U;class Os{constructor(e=new fn,t=new fn,n=new fn,r=new fn,s=new fn,a=new fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],v=r[9],M=r[10],p=r[11],d=r[12],b=r[13],x=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,p-m,y-d).normalize(),n[1].setComponents(l+s,f+c,p+m,y+d).normalize(),n[2].setComponents(l+a,f+h,p+v,y+b).normalize(),n[3].setComponents(l-a,f-h,p-v,y-b).normalize(),n[4].setComponents(l-o,f-u,p-M,y-x).normalize(),t===rn)n[5].setComponents(l+o,f+u,p+M,y+x).normalize();else if(t===Mr)n[5].setComponents(o,u,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ir.x=r.normal.x>0?e.max.x:e.min.x,ir.y=r.normal.y>0?e.max.y:e.min.y,ir.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ll(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function sh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,f=c.usage,m=u.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,u,f),c.onUploadCallback();let M;if(u instanceof Float32Array)M=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)M=i.SHORT;else if(u instanceof Uint32Array)M=i.UNSIGNED_INT;else if(u instanceof Int32Array)M=i.INT;else if(u instanceof Int8Array)M=i.BYTE;else if(u instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:M,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const f=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&v.length===0&&i.bufferSubData(u,0,f),v.length!==0){for(let M=0,p=v.length;M<p;M++){const d=v[M];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Fn extends Dt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,m=[],v=[],M=[],p=[];for(let d=0;d<h;d++){const b=d*f-a;for(let x=0;x<c;x++){const y=x*u-s;v.push(y,-b,0),M.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const x=b+c*d,y=b+c*(d+1),P=b+1+c*(d+1),R=b+1+c*d;m.push(x,y,R),m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(M,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oh=`#ifdef USE_ALPHAHASH
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
#endif`,lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
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
#endif`,fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ph=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xh=`#ifdef USE_IRIDESCENCE
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
#endif`,Mh=`#ifdef USE_BUMPMAP
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
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ch=`#define PI 3.141592653589793
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
} // validated`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ph=`vec3 transformedNormal = objectNormal;
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
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oh=`
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
}`,Bh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
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
#endif`,kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yh=`#ifdef USE_GRADIENTMAP
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
}`,jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$h=`uniform bool receiveShadow;
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
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ru=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,su=`struct PhysicalMaterial {
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
}`,au=`
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
#endif`,ou=`#if defined( RE_IndirectDiffuse )
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
#endif`,lu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gu=`#if defined( USE_POINTS_UV )
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
#endif`,_u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yu=`#ifdef USE_MORPHNORMALS
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
#endif`,Su=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Eu=`#ifdef USE_MORPHTARGETS
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
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cu=`#ifdef USE_NORMALMAP
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
#endif`,Lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ou=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xu=`float getShadowMask() {
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
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yu=`#ifdef USE_SKINNING
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
#endif`,ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zu=`#ifdef USE_SKINNING
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
#endif`,Ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$u=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qu=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ed=`#ifdef USE_TRANSMISSION
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
#endif`,td=`#ifdef USE_TRANSMISSION
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
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,od=`uniform sampler2D t2D;
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
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`#include <common>
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
}`,fd=`#if DEPTH_PACKING == 3200
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
	#endif
}`,pd=`#define DISTANCE
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
}`,md=`#define DISTANCE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`uniform float scale;
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
}`,xd=`uniform vec3 diffuse;
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
}`,Md=`#include <common>
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
}`,yd=`uniform vec3 diffuse;
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
}`,Sd=`#define LAMBERT
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
}`,Ed=`#define LAMBERT
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
}`,Td=`#define MATCAP
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
}`,bd=`#define MATCAP
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
}`,Ad=`#define NORMAL
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
}`,wd=`#define NORMAL
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
}`,Rd=`#define PHONG
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
}`,Cd=`#define PHONG
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
}`,Ld=`#define STANDARD
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
}`,Pd=`#define STANDARD
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
}`,Dd=`#define TOON
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
}`,Id=`#define TOON
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
}`,Ud=`uniform float size;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Od=`uniform vec3 color;
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
}`,Bd=`uniform float rotation;
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
}`,zd=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:ah,alphahash_pars_fragment:oh,alphamap_fragment:lh,alphamap_pars_fragment:ch,alphatest_fragment:hh,alphatest_pars_fragment:uh,aomap_fragment:dh,aomap_pars_fragment:fh,batching_pars_vertex:ph,batching_vertex:mh,begin_vertex:gh,beginnormal_vertex:_h,bsdfs:vh,iridescence_fragment:xh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:yh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:Eh,clipping_planes_vertex:Th,color_fragment:bh,color_pars_fragment:Ah,color_pars_vertex:wh,color_vertex:Rh,common:Ch,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Dh,displacementmap_vertex:Ih,emissivemap_fragment:Uh,emissivemap_pars_fragment:Nh,colorspace_fragment:Fh,colorspace_pars_fragment:Oh,envmap_fragment:Bh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Hh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:Qh,envmap_vertex:Vh,fog_vertex:kh,fog_pars_vertex:Wh,fog_fragment:Xh,fog_pars_fragment:qh,gradientmap_pars_fragment:Yh,lightmap_fragment:jh,lightmap_pars_fragment:Zh,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:Jh,lights_pars_begin:$h,lights_toon_fragment:eu,lights_toon_pars_fragment:tu,lights_phong_fragment:nu,lights_phong_pars_fragment:iu,lights_physical_fragment:ru,lights_physical_pars_fragment:su,lights_fragment_begin:au,lights_fragment_maps:ou,lights_fragment_end:lu,logdepthbuf_fragment:cu,logdepthbuf_pars_fragment:hu,logdepthbuf_pars_vertex:uu,logdepthbuf_vertex:du,map_fragment:fu,map_pars_fragment:pu,map_particle_fragment:mu,map_particle_pars_fragment:gu,metalnessmap_fragment:_u,metalnessmap_pars_fragment:vu,morphinstance_vertex:xu,morphcolor_vertex:Mu,morphnormal_vertex:yu,morphtarget_pars_vertex:Su,morphtarget_vertex:Eu,normal_fragment_begin:Tu,normal_fragment_maps:bu,normal_pars_fragment:Au,normal_pars_vertex:wu,normal_vertex:Ru,normalmap_pars_fragment:Cu,clearcoat_normal_fragment_begin:Lu,clearcoat_normal_fragment_maps:Pu,clearcoat_pars_fragment:Du,iridescence_pars_fragment:Iu,opaque_fragment:Uu,packing:Nu,premultiplied_alpha_fragment:Fu,project_vertex:Ou,dithering_fragment:Bu,dithering_pars_fragment:zu,roughnessmap_fragment:Hu,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:ku,shadowmap_vertex:Wu,shadowmask_pars_fragment:Xu,skinbase_vertex:qu,skinning_pars_vertex:Yu,skinning_vertex:ju,skinnormal_vertex:Zu,specularmap_fragment:Ku,specularmap_pars_fragment:Ju,tonemapping_fragment:$u,tonemapping_pars_fragment:Qu,transmission_fragment:ed,transmission_pars_fragment:td,uv_pars_fragment:nd,uv_pars_vertex:id,uv_vertex:rd,worldpos_vertex:sd,background_vert:ad,background_frag:od,backgroundCube_vert:ld,backgroundCube_frag:cd,cube_vert:hd,cube_frag:ud,depth_vert:dd,depth_frag:fd,distanceRGBA_vert:pd,distanceRGBA_frag:md,equirect_vert:gd,equirect_frag:_d,linedashed_vert:vd,linedashed_frag:xd,meshbasic_vert:Md,meshbasic_frag:yd,meshlambert_vert:Sd,meshlambert_frag:Ed,meshmatcap_vert:Td,meshmatcap_frag:bd,meshnormal_vert:Ad,meshnormal_frag:wd,meshphong_vert:Rd,meshphong_frag:Cd,meshphysical_vert:Ld,meshphysical_frag:Pd,meshtoon_vert:Dd,meshtoon_frag:Id,points_vert:Ud,points_frag:Nd,shadow_vert:Fd,shadow_frag:Od,sprite_vert:Bd,sprite_frag:zd},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Vt={basic:{uniforms:St([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:St([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:St([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:St([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:St([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:St([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:St([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:St([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:St([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:St([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:St([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:St([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:St([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Vt.physical={uniforms:St([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const rr={r:0,b:0,g:0},Cn=new Xt,Hd=new et;function Gd(i,e,t,n,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function v(p,d){let b=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?M(o,l):x&&x.isColor&&(M(x,1),b=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Sr)?(h===void 0&&(h=new Et(new Mi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:_i(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Cn.copy(d.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hd.makeRotationFromEuler(Cn)),h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Qe,(u!==x||f!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Et(new Fn(2,2),new yn({name:"BackgroundMaterial",uniforms:_i(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function M(p,d){p.getRGB(rr,sl(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(o,l)},render:v}}function Vd(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function u(C,k,F,O,G){let J=!1;if(a){const K=M(O,F,k);c!==K&&(c=K,m(c.object)),J=d(C,O,F,G),J&&b(C,O,F,G)}else{const K=k.wireframe===!0;(c.geometry!==O.id||c.program!==F.id||c.wireframe!==K)&&(c.geometry=O.id,c.program=F.id,c.wireframe=K,J=!0)}G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,D(C,k,F,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function v(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function M(C,k,F){const O=F.wireframe===!0;let G=o[C.id];G===void 0&&(G={},o[C.id]=G);let J=G[k.id];J===void 0&&(J={},G[k.id]=J);let K=J[O];return K===void 0&&(K=p(f()),J[O]=K),K}function p(C){const k=[],F=[],O=[];for(let G=0;G<r;G++)k[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:O,object:C,attributes:{},index:null}}function d(C,k,F,O){const G=c.attributes,J=k.attributes;let K=0;const re=F.getAttributes();for(const fe in re)if(re[fe].location>=0){const q=G[fe];let ie=J[fe];if(ie===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;K++}return c.attributesNum!==K||c.index!==O}function b(C,k,F,O){const G={},J=k.attributes;let K=0;const re=F.getAttributes();for(const fe in re)if(re[fe].location>=0){let q=J[fe];q===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),G[fe]=ie,K++}c.attributes=G,c.attributesNum=K,c.index=O}function x(){const C=c.newAttributes;for(let k=0,F=C.length;k<F;k++)C[k]=0}function y(C){P(C,0)}function P(C,k){const F=c.newAttributes,O=c.enabledAttributes,G=c.attributeDivisors;F[C]=1,O[C]===0&&(i.enableVertexAttribArray(C),O[C]=1),G[C]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,k),G[C]=k)}function R(){const C=c.newAttributes,k=c.enabledAttributes;for(let F=0,O=k.length;F<O;F++)k[F]!==C[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function T(C,k,F,O,G,J,K){K===!0?i.vertexAttribIPointer(C,k,F,G,J):i.vertexAttribPointer(C,k,F,O,G,J)}function D(C,k,F,O){if(n.isWebGL2===!1&&(C.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=O.attributes,J=F.getAttributes(),K=k.defaultAttributeValues;for(const re in J){const fe=J[re];if(fe.location>=0){let Ce=G[re];if(Ce===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(Ce=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(Ce=C.instanceColor)),Ce!==void 0){const q=Ce.normalized,ie=Ce.itemSize,me=t.get(Ce);if(me===void 0)continue;const be=me.buffer,Ee=me.type,Me=me.bytesPerElement,Fe=n.isWebGL2===!0&&(Ee===i.INT||Ee===i.UNSIGNED_INT||Ce.gpuType===ko);if(Ce.isInterleavedBufferAttribute){const Le=Ce.data,L=Le.stride,he=Ce.offset;if(Le.isInstancedInterleavedBuffer){for(let Q=0;Q<fe.locationSize;Q++)P(fe.location+Q,Le.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Q=0;Q<fe.locationSize;Q++)y(fe.location+Q);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Q=0;Q<fe.locationSize;Q++)T(fe.location+Q,ie/fe.locationSize,Ee,q,L*Me,(he+ie/fe.locationSize*Q)*Me,Fe)}else{if(Ce.isInstancedBufferAttribute){for(let Le=0;Le<fe.locationSize;Le++)P(fe.location+Le,Ce.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Le=0;Le<fe.locationSize;Le++)y(fe.location+Le);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Le=0;Le<fe.locationSize;Le++)T(fe.location+Le,ie/fe.locationSize,Ee,q,ie*Me,ie/fe.locationSize*Le*Me,Fe)}}else if(K!==void 0){const q=K[re];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(fe.location,q);break;case 3:i.vertexAttrib3fv(fe.location,q);break;case 4:i.vertexAttrib4fv(fe.location,q);break;default:i.vertexAttrib1fv(fe.location,q)}}}}R()}function X(){Z();for(const C in o){const k=o[C];for(const F in k){const O=k[F];for(const G in O)v(O[G].object),delete O[G];delete k[F]}delete o[C]}}function _(C){if(o[C.id]===void 0)return;const k=o[C.id];for(const F in k){const O=k[F];for(const G in O)v(O[G].object),delete O[G];delete k[F]}delete o[C.id]}function S(C){for(const k in o){const F=o[k];if(F[C.id]===void 0)continue;const O=F[C.id];for(const G in O)v(O[G].object),delete O[G];delete F[C.id]}}function Z(){z(),h=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:z,dispose:X,releaseStatesOfGeometry:_,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:y,disableUnusedAttributes:R}}function kd(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function o(h,u){i.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,f){if(f===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,h,u,f),t.update(u,s,f)}function c(h,u,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(h[v],u[v]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,f);let v=0;for(let M=0;M<f;M++)v+=u[M];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Wd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=a||e.has("OES_texture_float"),P=x&&y,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:R}}function Xd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new fn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const v=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,x=b*4;let y=d.clippingState||null;l.value=y,y=h(v,f,x,m);for(let P=0;P!==x;++P)y[P]=t[P];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,v){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const d=m+M*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,y=m;x!==M;++x,y+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function qd(i){let e=new WeakMap;function t(a,o){return o===gr?a.mapping=pi:o===Ms&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===gr||o===Ms)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class cl extends al{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oi=4,ja=[.125,.215,.35,.446,.526,.582],In=20,ss=new cl,Za=new Ye;let as=null,os=0,ls=0;const Pn=(1+Math.sqrt(5))/2,si=1/Pn,Ka=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Pn,si),new U(0,Pn,-si),new U(si,0,Pn),new U(-si,0,Pn),new U(Pn,si,0),new U(-Pn,si,0)];class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(as,os,ls),e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:lt,minFilter:lt,generateMipmaps:!1,type:nn,format:Ht,colorSpace:sn,depthBuffer:!1},r=$a(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yd(s)),this._blurMaterial=jd(s,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,ss)}_sceneToCubeUV(e,t,n,r){const o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Za),h.toneMapping=vn,h.autoClear=!1;const m=new dn({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),v=new Et(new Mi,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(Za),M=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;sr(r,b*x,d>2?x:0,x,x),h.setRenderTarget(r),M&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pi||e.mapping===mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ss)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ka[(r-1)%Ka.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),M=s/v,p=isFinite(s)?1+Math.floor(h*M):In;p>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);const d=[];let b=0;for(let T=0;T<In;++T){const D=T/M,X=Math.exp(-D*D/2);d.push(X),T===0?b+=X:T<p&&(b+=2*X)}for(let T=0;T<d.length;T++)d[T]=d[T]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const y=this._sizeLods[r],P=3*y*(r>x-oi?r-x+oi:0),R=4*(this._cubeSize-y);sr(t,P,R,3*y,2*y),l.setRenderTarget(t),l.render(u,ss)}}function Yd(i){const e=[],t=[],n=[];let r=i;const s=i-oi+1+ja.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-oi?l=ja[a-i+oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,M=3,p=2,d=1,b=new Float32Array(M*v*m),x=new Float32Array(p*v*m),y=new Float32Array(d*v*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,D=R>2?0:-1,X=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];b.set(X,M*v*R),x.set(f,p*v*R);const _=[R,R,R,R,R,R];y.set(_,d*v*R)}const P=new Dt;P.setAttribute("position",new Wt(b,M)),P.setAttribute("uv",new Wt(x,p)),P.setAttribute("faceIndex",new Wt(y,d)),e.push(P),r>oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $a(i,e,t){const n=new On(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jd(i,e,t){const n=new Float32Array(In),r=new U(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Qa(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function eo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Bs(){return`

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
	`}function Zd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===gr||l===Ms,h=l===pi||l===mi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ja(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Ja(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jd(i,e,t,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let p=0,d=M.length;p<d;p++)e.remove(M[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const M=m[v];for(let p=0,d=M.length;p<d;p++)e.update(M[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,v=u.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let x=0,y=b.length;x<y;x+=3){const P=b[x+0],R=b[x+1],T=b[x+2];f.push(P,R,R,T,T,P)}}else if(v!==void 0){const b=v.array;M=v.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const P=x+0,R=x+1,T=x+2;f.push(P,R,R,T,T,P)}}else return;const p=new($o(f)?rl:il)(f,1);p.version=M;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function $d(i,e,t,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,v){i.drawElements(s,v,o,m*l),t.update(v,s,1)}function u(m,v,M){if(M===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,v,o,m*l,M),t.update(v,s,M)}function f(m,v,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<M;d++)this.render(m[d]/l,v[d]);else{p.multiDrawElementsWEBGL(s,v,0,o,m,0,M);let d=0;for(let b=0;b<M;b++)d+=v[b];t.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Qd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ef(i,e){return i[0]-e[0]}function tf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function nf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=v!==void 0?v.length:0;let p=s.get(h);if(p===void 0||p.count!==M){let z=function(){S.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();const d=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let T=0;d===!0&&(T=1),b===!0&&(T=2),x===!0&&(T=3);let D=h.attributes.position.count*T,X=1;D>e.maxTextureSize&&(X=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const _=new Float32Array(D*X*4*M),S=new tl(_,D,X,M);S.type=Ft,S.needsUpdate=!0;const Z=T*4;for(let C=0;C<M;C++){const k=y[C],F=P[C],O=R[C],G=D*X*4*C;for(let J=0;J<k.count;J++){const K=J*Z;d===!0&&(a.fromBufferAttribute(k,J),_[G+K+0]=a.x,_[G+K+1]=a.y,_[G+K+2]=a.z,_[G+K+3]=0),b===!0&&(a.fromBufferAttribute(F,J),_[G+K+4]=a.x,_[G+K+5]=a.y,_[G+K+6]=a.z,_[G+K+7]=0),x===!0&&(a.fromBufferAttribute(O,J),_[G+K+8]=a.x,_[G+K+9]=a.y,_[G+K+10]=a.z,_[G+K+11]=O.itemSize===4?a.w:1)}}p={count:M,texture:S,size:new ue(D,X)},s.set(h,p),h.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let d=0;for(let x=0;x<f.length;x++)d+=f[x];const b=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=f===void 0?0:f.length;let M=n[h.id];if(M===void 0||M.length!==v){M=[];for(let y=0;y<v;y++)M[y]=[y,0];n[h.id]=M}for(let y=0;y<v;y++){const P=M[y];P[0]=y,P[1]=f[y]}M.sort(tf);for(let y=0;y<8;y++)y<v&&M[y][1]?(o[y][0]=M[y][0],o[y][1]=M[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(ef);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const P=o[y],R=P[0],T=P[1];R!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+y)!==p[R]&&h.setAttribute("morphTarget"+y,p[R]),d&&h.getAttribute("morphNormal"+y)!==d[R]&&h.setAttribute("morphNormal"+y,d[R]),r[y]=T,b+=T):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const x=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function rf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class hl extends yt{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:Nn,h!==Nn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Nn&&(n=gn),n===void 0&&h===gi&&(n=Un),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ul=new yt,dl=new hl(1,1);dl.compareFunction=Jo;const fl=new tl,pl=new Fc,ml=new ol,to=[],no=[],io=new Float32Array(16),ro=new Float32Array(9),so=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=to[r];if(s===void 0&&(s=new Float32Array(r),to[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ar(i,e){let t=no[e];t===void 0&&(t=new Int32Array(e),no[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;so.set(n),i.uniformMatrix2fv(this.addr,!1,so),ht(t,n)}}function hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;ro.set(n),i.uniformMatrix3fv(this.addr,!1,ro),ht(t,n)}}function uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;io.set(n),i.uniformMatrix4fv(this.addr,!1,io),ht(t,n)}}function df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function gf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function Mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?dl:ul;t.setTexture2D(e||s,r)}function yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pl,r)}function Sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ml,r)}function Ef(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fl,r)}function Tf(i){switch(i){case 5126:return sf;case 35664:return af;case 35665:return of;case 35666:return lf;case 35674:return cf;case 35675:return hf;case 35676:return uf;case 5124:case 35670:return df;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return _f;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Ef}}function bf(i,e){i.uniform1fv(this.addr,e)}function Af(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function wf(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Rf(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Cf(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lf(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pf(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Df(i,e){i.uniform1iv(this.addr,e)}function If(i,e){i.uniform2iv(this.addr,e)}function Uf(i,e){i.uniform3iv(this.addr,e)}function Nf(i,e){i.uniform4iv(this.addr,e)}function Ff(i,e){i.uniform1uiv(this.addr,e)}function Of(i,e){i.uniform2uiv(this.addr,e)}function Bf(i,e){i.uniform3uiv(this.addr,e)}function zf(i,e){i.uniform4uiv(this.addr,e)}function Hf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ul,s[a])}function Gf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pl,s[a])}function Vf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ml,s[a])}function kf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fl,s[a])}function Wf(i){switch(i){case 5126:return bf;case 35664:return Af;case 35665:return wf;case 35666:return Rf;case 35674:return Cf;case 35675:return Lf;case 35676:return Pf;case 5124:case 35670:return Df;case 35667:case 35671:return If;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return kf}}class Xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tf(t.type)}}class qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wf(t.type)}}class Yf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const cs=/(\w+)(\])?(\[|\.)?/g;function ao(i,e){i.seq.push(e),i.map[e.id]=e}function jf(i,e,t){const n=i.name,r=n.length;for(cs.lastIndex=0;;){const s=cs.exec(n),a=cs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ao(t,c===void 0?new Xf(o,i,e):new qf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Yf(o),ao(t,u)),t=u}}}class fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);jf(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function oo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zf=37297;let Kf=0;function Jf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function $f(i){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i);let n;switch(e===t?n="":e===xr&&t===vr?n="LinearDisplayP3ToLinearSRGB":e===vr&&t===xr&&(n="LinearSRGBToLinearDisplayP3"),i){case sn:case Er:return[n,"LinearTransferOETF"];case Gt:case Ns:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function lo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jf(i.getShaderSource(e),a)}else return r}function Qf(i,e){const t=$f(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ep(i,e){let t;switch(e){case rc:t="Linear";break;case sc:t="Reinhard";break;case ac:t="OptimizedCineon";break;case Go:t="ACESFilmic";break;case lc:t="AgX";break;case cc:t="Neutral";break;case oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(li).join(`
`)}function ip(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function li(i){return i!==""}function co(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ho(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function As(i){return i.replace(sp,op)}const ap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function op(i,e){let t=ke[e];if(t===void 0){const n=ap.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return As(t)}const lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uo(i){return i.replace(lp,cp)}function cp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function up(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function fp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case nc:e="ENVMAP_BLENDING_MIX";break;case ic:e="ENVMAP_BLENDING_ADD";break}return e}function pp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function mp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hp(t),c=up(t),h=dp(t),u=fp(t),f=pp(t),m=t.isWebGL2?"":tp(t),v=np(t),M=ip(s),p=r.createProgram();let d,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(li).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(li).join(`
`),b.length>0&&(b+=`
`)):(d=[fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),b=[m,fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?ke.tonemapping_pars_fragment:"",t.toneMapping!==vn?ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Qf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(li).join(`
`)),a=As(a),a=co(a,t),a=ho(a,t),o=As(o),o=co(o,t),o=ho(o,t),a=uo(a),o=uo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const y=x+d+a,P=x+b+o,R=oo(r,r.VERTEX_SHADER,y),T=oo(r,r.FRAGMENT_SHADER,P);r.attachShader(p,R),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(Z){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(T).trim();let F=!0,O=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,R,T);else{const G=lo(r,R,"vertex"),J=lo(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+z+`
`+G+`
`+J)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(C===""||k==="")&&(O=!1);O&&(Z.diagnostics={runnable:F,programLog:z,vertexShader:{log:C,prefix:d},fragmentShader:{log:k,prefix:b}})}r.deleteShader(R),r.deleteShader(T),X=new fr(r,p),_=rp(r,p)}let X;this.getUniforms=function(){return X===void 0&&D(this),X};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(p,Zf)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=T,this}let gp=0;class _p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vp(e),t.set(e,n)),n}}class vp{constructor(e){this.id=gp++,this.code=e,this.usedTimes=0}}function xp(i,e,t,n,r,s,a){const o=new Fs,l=new _p,c=new Set,h=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function d(_,S,Z,z,C){const k=z.fog,F=C.geometry,O=_.isMeshStandardMaterial?z.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||O),J=G&&G.mapping===Sr?G.image.height:null,K=M[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=re!==void 0?re.length:0;let Ce=0;F.morphAttributes.position!==void 0&&(Ce=1),F.morphAttributes.normal!==void 0&&(Ce=2),F.morphAttributes.color!==void 0&&(Ce=3);let q,ie,me,be;if(K){const Ze=Vt[K];q=Ze.vertexShader,ie=Ze.fragmentShader}else q=_.vertexShader,ie=_.fragmentShader,l.update(_),me=l.getVertexShaderID(_),be=l.getFragmentShaderID(_);const Ee=i.getRenderTarget(),Me=C.isInstancedMesh===!0,Fe=C.isBatchedMesh===!0,Le=!!_.map,L=!!_.matcap,he=!!G,Q=!!_.aoMap,le=!!_.lightMap,te=!!_.bumpMap,ve=!!_.normalMap,ge=!!_.displacementMap,ye=!!_.emissiveMap,Be=!!_.metalnessMap,A=!!_.roughnessMap,g=_.anisotropy>0,N=_.clearcoat>0,H=_.iridescence>0,$=_.sheen>0,ee=_.transmission>0,Re=g&&!!_.anisotropyMap,Ae=N&&!!_.clearcoatMap,oe=N&&!!_.clearcoatNormalMap,de=N&&!!_.clearcoatRoughnessMap,Ie=H&&!!_.iridescenceMap,se=H&&!!_.iridescenceThicknessMap,Ue=$&&!!_.sheenColorMap,ze=$&&!!_.sheenRoughnessMap,Te=!!_.specularMap,xe=!!_.specularColorMap,Pe=!!_.specularIntensityMap,w=ee&&!!_.transmissionMap,ne=ee&&!!_.thicknessMap,we=!!_.gradientMap,I=!!_.alphaMap,ce=_.alphaTest>0,V=!!_.alphaHash,ae=!!_.extensions;let _e=vn;_.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(_e=i.toneMapping);const qe={isWebGL2:u,shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:ie,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:Fe,instancing:Me,instancingColor:Me&&C.instanceColor!==null,instancingMorph:Me&&C.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:sn,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:L,envMap:he,envMapMode:he&&G.mapping,envMapCubeUVHeight:J,aoMap:Q,lightMap:le,bumpMap:te,normalMap:ve,displacementMap:m&&ge,emissiveMap:ye,normalMapObjectSpace:ve&&_.normalMapType===Mc,normalMapTangentSpace:ve&&_.normalMapType===Ko,metalnessMap:Be,roughnessMap:A,anisotropy:g,anisotropyMap:Re,clearcoat:N,clearcoatMap:Ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:de,iridescence:H,iridescenceMap:Ie,iridescenceThicknessMap:se,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:ze,specularMap:Te,specularColorMap:xe,specularIntensityMap:Pe,transmission:ee,transmissionMap:w,thicknessMap:ne,gradientMap:we,opaque:_.transparent===!1&&_.blending===ui&&_.alphaToCoverage===!1,alphaMap:I,alphaTest:ce,alphaHash:V,combine:_.combine,mapUv:Le&&p(_.map.channel),aoMapUv:Q&&p(_.aoMap.channel),lightMapUv:le&&p(_.lightMap.channel),bumpMapUv:te&&p(_.bumpMap.channel),normalMapUv:ve&&p(_.normalMap.channel),displacementMapUv:ge&&p(_.displacementMap.channel),emissiveMapUv:ye&&p(_.emissiveMap.channel),metalnessMapUv:Be&&p(_.metalnessMap.channel),roughnessMapUv:A&&p(_.roughnessMap.channel),anisotropyMapUv:Re&&p(_.anisotropyMap.channel),clearcoatMapUv:Ae&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(_.sheenRoughnessMap.channel),specularMapUv:Te&&p(_.specularMap.channel),specularColorMapUv:xe&&p(_.specularColorMap.channel),specularIntensityMapUv:Pe&&p(_.specularIntensityMap.channel),transmissionMapUv:w&&p(_.transmissionMap.channel),thicknessMapUv:ne&&p(_.thicknessMap.channel),alphaMapUv:I&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ve||g),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(Le||I),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:C.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nt,flipSided:_.side===bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ae&&_.extensions.derivatives===!0,extensionFragDepth:ae&&_.extensions.fragDepth===!0,extensionDrawBuffers:ae&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function b(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const Z in _.defines)S.push(Z),S.push(_.defines[Z]);return _.isRawShaderMaterial===!1&&(x(S,_),y(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.instancingMorph&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.normalMapObjectSpace&&o.enable(7),S.normalMapTangentSpace&&o.enable(8),S.clearcoat&&o.enable(9),S.iridescence&&o.enable(10),S.alphaTest&&o.enable(11),S.vertexColors&&o.enable(12),S.vertexAlphas&&o.enable(13),S.vertexUv1s&&o.enable(14),S.vertexUv2s&&o.enable(15),S.vertexUv3s&&o.enable(16),S.vertexTangents&&o.enable(17),S.anisotropy&&o.enable(18),S.alphaHash&&o.enable(19),S.batching&&o.enable(20),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function P(_){const S=M[_.type];let Z;if(S){const z=Vt[S];Z=$c.clone(z.uniforms)}else Z=_.uniforms;return Z}function R(_,S){let Z;for(let z=0,C=h.length;z<C;z++){const k=h[z];if(k.cacheKey===S){Z=k,++Z.usedTimes;break}}return Z===void 0&&(Z=new mp(i,S,_,s),h.push(Z)),Z}function T(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function D(_){l.remove(_)}function X(){l.dispose()}return{getParameters:d,getProgramCacheKey:b,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:D,programs:h,dispose:X}}function Mp(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function po(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,m,v,M,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:M,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=M,d.group=p),e++,d}function o(u,f,m,v,M,p){const d=a(u,f,m,v,M,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,f,m,v,M,p){const d=a(u,f,m,v,M,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||yp),n.length>1&&n.sort(f||po),r.length>1&&r.sort(f||po)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Sp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new mo,i.set(n,[a])):r>=s.length?(a=new mo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Tp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bp=0;function Ap(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wp(i,e){const t=new Ep,n=Tp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,a=new et,o=new et;function l(h,u){let f=0,m=0,v=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let M=0,p=0,d=0,b=0,x=0,y=0,P=0,R=0,T=0,D=0,X=0;h.sort(Ap);const _=u===!0?Math.PI:1;for(let Z=0,z=h.length;Z<z;Z++){const C=h[Z],k=C.color,F=C.intensity,O=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=k.r*F*_,m+=k.g*F*_,v+=k.b*F*_;else if(C.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(C.sh.coefficients[J],F);X++}else if(C.isDirectionalLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity*_),C.castShadow){const K=C.shadow,re=n.get(C);re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,r.directionalShadow[M]=re,r.directionalShadowMap[M]=G,r.directionalShadowMatrix[M]=C.shadow.matrix,y++}r.directional[M]=J,M++}else if(C.isSpotLight){const J=t.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(k).multiplyScalar(F*_),J.distance=O,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,r.spot[d]=J;const K=C.shadow;if(C.map&&(r.spotLightMap[T]=C.map,T++,K.updateMatrices(C),C.castShadow&&D++),r.spotLightMatrix[d]=K.matrix,C.castShadow){const re=n.get(C);re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,r.spotShadow[d]=re,r.spotShadowMap[d]=G,R++}d++}else if(C.isRectAreaLight){const J=t.get(C);J.color.copy(k).multiplyScalar(F),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),r.rectArea[b]=J,b++}else if(C.isPointLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity*_),J.distance=C.distance,J.decay=C.decay,C.castShadow){const K=C.shadow,re=n.get(C);re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,re.shadowCameraNear=K.camera.near,re.shadowCameraFar=K.camera.far,r.pointShadow[p]=re,r.pointShadowMap[p]=G,r.pointShadowMatrix[p]=C.shadow.matrix,P++}r.point[p]=J,p++}else if(C.isHemisphereLight){const J=t.get(C);J.skyColor.copy(C.color).multiplyScalar(F*_),J.groundColor.copy(C.groundColor).multiplyScalar(F*_),r.hemi[x]=J,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;const S=r.hash;(S.directionalLength!==M||S.pointLength!==p||S.spotLength!==d||S.rectAreaLength!==b||S.hemiLength!==x||S.numDirectionalShadows!==y||S.numPointShadows!==P||S.numSpotShadows!==R||S.numSpotMaps!==T||S.numLightProbes!==X)&&(r.directional.length=M,r.spot.length=d,r.rectArea.length=b,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=X,S.directionalLength=M,S.pointLength=p,S.spotLength=d,S.rectAreaLength=b,S.hemiLength=x,S.numDirectionalShadows=y,S.numPointShadows=P,S.numSpotShadows=R,S.numSpotMaps=T,S.numLightProbes=X,r.version=bp++)}function c(h,u){let f=0,m=0,v=0,M=0,p=0;const d=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const y=h[b];if(y.isDirectionalLight){const P=r.directional[f];P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),f++}else if(y.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),M++}else if(y.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function go(i,e){const t=new wp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(u){n.push(u)}function o(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Rp(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new go(i,e),t.set(s,[l])):a>=o.length?(l=new go(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cp extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dp=`uniform sampler2D shadow_pass;
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
}`;function Ip(i,e,t){let n=new Os;const r=new ue,s=new ue,a=new pt,o=new Cp({depthPacking:xc}),l=new Lp,c={},h=t.maxTextureSize,u={[Mn]:bt,[bt]:Mn,[Nt]:Nt},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Pp,fragmentShader:Dp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Dt;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Et(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let d=this.type;this.render=function(R,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const X=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(_n),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const z=d!==en&&this.type===en,C=d===en&&this.type!==en;for(let k=0,F=R.length;k<F;k++){const O=R[k],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const J=G.getFrameExtents();if(r.multiply(J),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||z===!0||C===!0){const re=this.type!==en?{minFilter:mt,magFilter:mt}:{};G.map!==null&&G.map.dispose(),G.map=new On(r.x,r.y,re),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const K=G.getViewportCount();for(let re=0;re<K;re++){const fe=G.getViewport(re);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),Z.viewport(a),G.updateMatrices(O,re),n=G.getFrustum(),y(T,D,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===en&&b(G,D),G.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(X,_,S)};function b(R,T){const D=e.update(M);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new On(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,D,f,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,D,m,M,null)}function x(R,T,D,X){let _=null;const S=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)_=S;else if(_=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=_.uuid,z=T.uuid;let C=c[Z];C===void 0&&(C={},c[Z]=C);let k=C[z];k===void 0&&(k=_.clone(),C[z]=k,T.addEventListener("dispose",P)),_=k}if(_.visible=T.visible,_.wireframe=T.wireframe,X===en?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const Z=i.properties.get(_);Z.light=D}return _}function y(R,T,D,X,_){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===en)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const z=e.update(R),C=R.material;if(Array.isArray(C)){const k=z.groups;for(let F=0,O=k.length;F<O;F++){const G=k[F],J=C[G.materialIndex];if(J&&J.visible){const K=x(R,J,X,_);R.onBeforeShadow(i,R,T,D,z,K,G),i.renderBufferDirect(D,null,z,K,R,G),R.onAfterShadow(i,R,T,D,z,K,G)}}}else if(C.visible){const k=x(R,C,X,_);R.onBeforeShadow(i,R,T,D,z,k,null),i.renderBufferDirect(D,null,z,k,R,null),R.onAfterShadow(i,R,T,D,z,k,null)}}const Z=R.children;for(let z=0,C=Z.length;z<C;z++)y(Z[z],T,D,X,_)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const X=c[D],_=R.target.uuid;_ in X&&(X[_].dispose(),delete X[_])}}}function Up(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const ce=new pt;let V=null;const ae=new pt(0,0,0,0);return{setMask:function(_e){V!==_e&&!I&&(i.colorMask(_e,_e,_e,_e),V=_e)},setLocked:function(_e){I=_e},setClear:function(_e,qe,Ze,Je,rt){rt===!0&&(_e*=Je,qe*=Je,Ze*=Je),ce.set(_e,qe,Ze,Je),ae.equals(ce)===!1&&(i.clearColor(_e,qe,Ze,Je),ae.copy(ce))},reset:function(){I=!1,V=null,ae.set(-1,0,0,0)}}}function s(){let I=!1,ce=null,V=null,ae=null;return{setTest:function(_e){_e?Me(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(_e){ce!==_e&&!I&&(i.depthMask(_e),ce=_e)},setFunc:function(_e){if(V!==_e){switch(_e){case Zl:i.depthFunc(i.NEVER);break;case Kl:i.depthFunc(i.ALWAYS);break;case Jl:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case $l:i.depthFunc(i.EQUAL);break;case Ql:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=_e}},setLocked:function(_e){I=_e},setClear:function(_e){ae!==_e&&(i.clearDepth(_e),ae=_e)},reset:function(){I=!1,ce=null,V=null,ae=null}}}function a(){let I=!1,ce=null,V=null,ae=null,_e=null,qe=null,Ze=null,Je=null,rt=null;return{setTest:function(je){I||(je?Me(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(je){ce!==je&&!I&&(i.stencilMask(je),ce=je)},setFunc:function(je,$e,_t){(V!==je||ae!==$e||_e!==_t)&&(i.stencilFunc(je,$e,_t),V=je,ae=$e,_e=_t)},setOp:function(je,$e,_t){(qe!==je||Ze!==$e||Je!==_t)&&(i.stencilOp(je,$e,_t),qe=je,Ze=$e,Je=_t)},setLocked:function(je){I=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){I=!1,ce=null,V=null,ae=null,_e=null,qe=null,Ze=null,Je=null,rt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let f={},m={},v=new WeakMap,M=[],p=null,d=!1,b=null,x=null,y=null,P=null,R=null,T=null,D=null,X=new Ye(0,0,0),_=0,S=!1,Z=null,z=null,C=null,k=null,F=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=J>=2);let re=null,fe={};const Ce=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ie=new pt().fromArray(Ce),me=new pt().fromArray(q);function be(I,ce,V,ae){const _e=new Uint8Array(4),qe=i.createTexture();i.bindTexture(I,qe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<V;Ze++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ce+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return qe}const Ee={};Ee[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ee[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(i.DEPTH_TEST),l.setFunc(mr),ge(!1),ye(js),Me(i.CULL_FACE),te(_n);function Me(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function Fe(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Le(I,ce){return m[I]!==ce?(i.bindFramebuffer(I,ce),m[I]=ce,n&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function L(I,ce){let V=M,ae=!1;if(I){V=v.get(ce),V===void 0&&(V=[],v.set(ce,V));const _e=I.textures;if(V.length!==_e.length||V[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Ze=_e.length;qe<Ze;qe++)V[qe]=i.COLOR_ATTACHMENT0+qe;V.length=_e.length,ae=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,ae=!0);if(ae)if(t.isWebGL2)i.drawBuffers(V);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function he(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const Q={[Dn]:i.FUNC_ADD,[Ul]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[$s]=i.MIN,Q[Qs]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Q[$s]=I.MIN_EXT,Q[Qs]=I.MAX_EXT)}const le={[Fl]:i.ZERO,[Ol]:i.ONE,[Bl]:i.SRC_COLOR,[vs]:i.SRC_ALPHA,[Wl]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[Hl]:i.DST_ALPHA,[zl]:i.ONE_MINUS_SRC_COLOR,[xs]:i.ONE_MINUS_SRC_ALPHA,[kl]:i.ONE_MINUS_DST_COLOR,[Gl]:i.ONE_MINUS_DST_ALPHA,[Xl]:i.CONSTANT_COLOR,[ql]:i.ONE_MINUS_CONSTANT_COLOR,[Yl]:i.CONSTANT_ALPHA,[jl]:i.ONE_MINUS_CONSTANT_ALPHA};function te(I,ce,V,ae,_e,qe,Ze,Je,rt,je){if(I===_n){d===!0&&(Fe(i.BLEND),d=!1);return}if(d===!1&&(Me(i.BLEND),d=!0),I!==Il){if(I!==b||je!==S){if((x!==Dn||R!==Dn)&&(i.blendEquation(i.FUNC_ADD),x=Dn,R=Dn),je)switch(I){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case Ks:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Js:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ks:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Js:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,P=null,T=null,D=null,X.set(0,0,0),_=0,b=I,S=je}return}_e=_e||ce,qe=qe||V,Ze=Ze||ae,(ce!==x||_e!==R)&&(i.blendEquationSeparate(Q[ce],Q[_e]),x=ce,R=_e),(V!==y||ae!==P||qe!==T||Ze!==D)&&(i.blendFuncSeparate(le[V],le[ae],le[qe],le[Ze]),y=V,P=ae,T=qe,D=Ze),(Je.equals(X)===!1||rt!==_)&&(i.blendColor(Je.r,Je.g,Je.b,rt),X.copy(Je),_=rt),b=I,S=!1}function ve(I,ce){I.side===Nt?Fe(i.CULL_FACE):Me(i.CULL_FACE);let V=I.side===bt;ce&&(V=!V),ge(V),I.blending===ui&&I.transparent===!1?te(_n):te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const ae=I.stencilWrite;c.setTest(ae),ae&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),A(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(I){Z!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),Z=I)}function ye(I){I!==Ll?(Me(i.CULL_FACE),I!==z&&(I===js?i.cullFace(i.BACK):I===Pl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),z=I}function Be(I){I!==C&&(G&&i.lineWidth(I),C=I)}function A(I,ce,V){I?(Me(i.POLYGON_OFFSET_FILL),(k!==ce||F!==V)&&(i.polygonOffset(ce,V),k=ce,F=V)):Fe(i.POLYGON_OFFSET_FILL)}function g(I){I?Me(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function N(I){I===void 0&&(I=i.TEXTURE0+O-1),re!==I&&(i.activeTexture(I),re=I)}function H(I,ce,V){V===void 0&&(re===null?V=i.TEXTURE0+O-1:V=re);let ae=fe[V];ae===void 0&&(ae={type:void 0,texture:void 0},fe[V]=ae),(ae.type!==I||ae.texture!==ce)&&(re!==V&&(i.activeTexture(V),re=V),i.bindTexture(I,ce||Ee[I]),ae.type=I,ae.texture=ce)}function $(){const I=fe[re];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(I){ie.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function Pe(I){me.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),me.copy(I))}function w(I,ce){let V=u.get(ce);V===void 0&&(V=new WeakMap,u.set(ce,V));let ae=V.get(I);ae===void 0&&(ae=i.getUniformBlockIndex(ce,I.name),V.set(I,ae))}function ne(I,ce){const ae=u.get(ce).get(I);h.get(ce)!==ae&&(i.uniformBlockBinding(ce,ae,I.__bindingPointIndex),h.set(ce,ae))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,fe={},m={},v=new WeakMap,M=[],p=null,d=!1,b=null,x=null,y=null,P=null,R=null,T=null,D=null,X=new Ye(0,0,0),_=0,S=!1,Z=null,z=null,C=null,k=null,F=null,ie.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:Fe,bindFramebuffer:Le,drawBuffers:L,useProgram:he,setBlending:te,setMaterial:ve,setFlipSided:ge,setCullFace:ye,setLineWidth:Be,setPolygonOffset:A,setScissorTest:g,activeTexture:N,bindTexture:H,unbindTexture:$,compressedTexImage2D:ee,compressedTexImage3D:Re,texImage2D:ze,texImage3D:Te,updateUBOMapping:w,uniformBlockBinding:ne,texStorage2D:se,texStorage3D:Ue,texSubImage2D:Ae,texSubImage3D:oe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ie,scissor:xe,viewport:Pe,reset:we}}function Np(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ue,u=new WeakMap;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return v?new OffscreenCanvas(A,g):yr("canvas")}function p(A,g,N,H){let $=1;const ee=Be(A);if((ee.width>H||ee.height>H)&&($=H/Math.max(ee.width,ee.height)),$<1||g===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Re=g?bs:Math.floor,Ae=Re($*ee.width),oe=Re($*ee.height);f===void 0&&(f=M(Ae,oe));const de=N?M(Ae,oe):f;return de.width=Ae,de.height=oe,de.getContext("2d").drawImage(A,0,0,Ae,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Ae+"x"+oe+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function d(A){const g=Be(A);return Ca(g.width)&&Ca(g.height)}function b(A){return o?!1:A.wrapS!==Pt||A.wrapT!==Pt||A.minFilter!==mt&&A.minFilter!==lt}function x(A,g){return A.generateMipmaps&&g&&A.minFilter!==mt&&A.minFilter!==lt}function y(A){i.generateMipmap(A)}function P(A,g,N,H,$=!1){if(o===!1)return g;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=g;if(g===i.RED&&(N===i.FLOAT&&(ee=i.R32F),N===i.HALF_FLOAT&&(ee=i.R16F),N===i.UNSIGNED_BYTE&&(ee=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.R8UI),N===i.UNSIGNED_SHORT&&(ee=i.R16UI),N===i.UNSIGNED_INT&&(ee=i.R32UI),N===i.BYTE&&(ee=i.R8I),N===i.SHORT&&(ee=i.R16I),N===i.INT&&(ee=i.R32I)),g===i.RG&&(N===i.FLOAT&&(ee=i.RG32F),N===i.HALF_FLOAT&&(ee=i.RG16F),N===i.UNSIGNED_BYTE&&(ee=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RG8UI),N===i.UNSIGNED_SHORT&&(ee=i.RG16UI),N===i.UNSIGNED_INT&&(ee=i.RG32UI),N===i.BYTE&&(ee=i.RG8I),N===i.SHORT&&(ee=i.RG16I),N===i.INT&&(ee=i.RG32I)),g===i.RGBA){const Re=$?_r:Ke.getTransfer(H);N===i.FLOAT&&(ee=i.RGBA32F),N===i.HALF_FLOAT&&(ee=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ee=Re===Qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(A,g,N){return x(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==mt&&A.minFilter!==lt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function T(A){return A===mt||A===ea||A===Ei?i.NEAREST:i.LINEAR}function D(A){const g=A.target;g.removeEventListener("dispose",D),_(g),g.isVideoTexture&&u.delete(g)}function X(A){const g=A.target;g.removeEventListener("dispose",X),Z(g)}function _(A){const g=n.get(A);if(g.__webglInit===void 0)return;const N=A.source,H=m.get(N);if(H){const $=H[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(A),Object.keys(H).length===0&&m.delete(N)}n.remove(A)}function S(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const N=A.source,H=m.get(N);delete H[g.__cacheKey],a.memory.textures--}function Z(A){const g=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let $=0;$<g.__webglFramebuffer[H].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[H][$]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=A.textures;for(let H=0,$=N.length;H<$;H++){const ee=n.get(N[H]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(A)}let z=0;function C(){z=0}function k(){const A=z;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),z+=1,A}function F(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function O(A,g){const N=n.get(A);if(A.isVideoTexture&&ge(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const H=A.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(N,A,g);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function G(A,g){const N=n.get(A);if(A.version>0&&N.__version!==A.version){me(N,A,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function J(A,g){const N=n.get(A);if(A.version>0&&N.__version!==A.version){me(N,A,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function K(A,g){const N=n.get(A);if(A.version>0&&N.__version!==A.version){be(N,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const re={[ys]:i.REPEAT,[Pt]:i.CLAMP_TO_EDGE,[Ss]:i.MIRRORED_REPEAT},fe={[mt]:i.NEAREST,[ea]:i.NEAREST_MIPMAP_NEAREST,[Ei]:i.NEAREST_MIPMAP_LINEAR,[lt]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[mn]:i.LINEAR_MIPMAP_LINEAR},Ce={[yc]:i.NEVER,[wc]:i.ALWAYS,[Sc]:i.LESS,[Jo]:i.LEQUAL,[Ec]:i.EQUAL,[Ac]:i.GEQUAL,[Tc]:i.GREATER,[bc]:i.NOTEQUAL};function q(A,g,N){if(g.type===Ft&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===lt||g.magFilter===Ir||g.magFilter===Ei||g.magFilter===mn||g.minFilter===lt||g.minFilter===Ir||g.minFilter===Ei||g.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),N?(i.texParameteri(A,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,re[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[g.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Pt||g.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(g.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(g.minFilter)),g.minFilter!==mt&&g.minFilter!==lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===mt||g.minFilter!==Ei&&g.minFilter!==mn||g.type===Ft&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===nn&&e.has("OES_texture_half_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ie(A,g){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",D));const H=g.source;let $=m.get(H);$===void 0&&($={},m.set(H,$));const ee=F(g);if(ee!==A.__cacheKey){$[ee]===void 0&&($[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[ee].usedTimes++;const Re=$[A.__cacheKey];Re!==void 0&&($[A.__cacheKey].usedTimes--,Re.usedTimes===0&&S(g)),A.__cacheKey=ee,A.__webglTexture=$[ee].texture}return N}function me(A,g,N){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const $=ie(A,g),ee=g.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+N);const Re=n.get(ee);if(ee.version!==Re.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const Ae=Ke.getPrimaries(Ke.workingColorSpace),oe=g.colorSpace===pn?null:Ke.getPrimaries(g.colorSpace),de=g.colorSpace===pn||Ae===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ie=b(g)&&d(g.image)===!1;let se=p(g.image,Ie,!1,r.maxTextureSize);se=ye(g,se);const Ue=d(se)||o,ze=s.convert(g.format,g.colorSpace);let Te=s.convert(g.type),xe=P(g.internalFormat,ze,Te,g.colorSpace,g.isVideoTexture);q(H,g,Ue);let Pe;const w=g.mipmaps,ne=o&&g.isVideoTexture!==!0&&xe!==Zo,we=Re.__version===void 0||$===!0,I=ee.dataReady,ce=R(g,se,Ue);if(g.isDepthTexture)xe=i.DEPTH_COMPONENT,o?g.type===Ft?xe=i.DEPTH_COMPONENT32F:g.type===gn?xe=i.DEPTH_COMPONENT24:g.type===Un?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:g.type===Ft&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Nn&&xe===i.DEPTH_COMPONENT&&g.type!==Us&&g.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=gn,Te=s.convert(g.type)),g.format===gi&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,g.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Un,Te=s.convert(g.type))),we&&(ne?t.texStorage2D(i.TEXTURE_2D,1,xe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,xe,se.width,se.height,0,ze,Te,null));else if(g.isDataTexture)if(w.length>0&&Ue){ne&&we&&t.texStorage2D(i.TEXTURE_2D,ce,xe,w[0].width,w[0].height);for(let V=0,ae=w.length;V<ae;V++)Pe=w[V],ne?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Pe.width,Pe.height,ze,Te,Pe.data):t.texImage2D(i.TEXTURE_2D,V,xe,Pe.width,Pe.height,0,ze,Te,Pe.data);g.generateMipmaps=!1}else ne?(we&&t.texStorage2D(i.TEXTURE_2D,ce,xe,se.width,se.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,ze,Te,se.data)):t.texImage2D(i.TEXTURE_2D,0,xe,se.width,se.height,0,ze,Te,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ne&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,xe,w[0].width,w[0].height,se.depth);for(let V=0,ae=w.length;V<ae;V++)Pe=w[V],g.format!==Ht?ze!==null?ne?I&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Pe.width,Pe.height,se.depth,ze,Pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,xe,Pe.width,Pe.height,se.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Pe.width,Pe.height,se.depth,ze,Te,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,xe,Pe.width,Pe.height,se.depth,0,ze,Te,Pe.data)}else{ne&&we&&t.texStorage2D(i.TEXTURE_2D,ce,xe,w[0].width,w[0].height);for(let V=0,ae=w.length;V<ae;V++)Pe=w[V],g.format!==Ht?ze!==null?ne?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Pe.width,Pe.height,ze,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,V,xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Pe.width,Pe.height,ze,Te,Pe.data):t.texImage2D(i.TEXTURE_2D,V,xe,Pe.width,Pe.height,0,ze,Te,Pe.data)}else if(g.isDataArrayTexture)ne?(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,xe,se.width,se.height,se.depth),I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ze,Te,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,se.width,se.height,se.depth,0,ze,Te,se.data);else if(g.isData3DTexture)ne?(we&&t.texStorage3D(i.TEXTURE_3D,ce,xe,se.width,se.height,se.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ze,Te,se.data)):t.texImage3D(i.TEXTURE_3D,0,xe,se.width,se.height,se.depth,0,ze,Te,se.data);else if(g.isFramebufferTexture){if(we)if(ne)t.texStorage2D(i.TEXTURE_2D,ce,xe,se.width,se.height);else{let V=se.width,ae=se.height;for(let _e=0;_e<ce;_e++)t.texImage2D(i.TEXTURE_2D,_e,xe,V,ae,0,ze,Te,null),V>>=1,ae>>=1}}else if(w.length>0&&Ue){if(ne&&we){const V=Be(w[0]);t.texStorage2D(i.TEXTURE_2D,ce,xe,V.width,V.height)}for(let V=0,ae=w.length;V<ae;V++)Pe=w[V],ne?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ze,Te,Pe):t.texImage2D(i.TEXTURE_2D,V,xe,ze,Te,Pe);g.generateMipmaps=!1}else if(ne){if(we){const V=Be(se);t.texStorage2D(i.TEXTURE_2D,ce,xe,V.width,V.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Te,se)}else t.texImage2D(i.TEXTURE_2D,0,xe,ze,Te,se);x(g,Ue)&&y(H),Re.__version=ee.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function be(A,g,N){if(g.image.length!==6)return;const H=ie(A,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const ee=n.get($);if($.version!==ee.__version||H===!0){t.activeTexture(i.TEXTURE0+N);const Re=Ke.getPrimaries(Ke.workingColorSpace),Ae=g.colorSpace===pn?null:Ke.getPrimaries(g.colorSpace),oe=g.colorSpace===pn||Re===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const de=g.isCompressedTexture||g.image[0].isCompressedTexture,Ie=g.image[0]&&g.image[0].isDataTexture,se=[];for(let V=0;V<6;V++)!de&&!Ie?se[V]=p(g.image[V],!1,!0,r.maxCubemapSize):se[V]=Ie?g.image[V].image:g.image[V],se[V]=ye(g,se[V]);const Ue=se[0],ze=d(Ue)||o,Te=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),Pe=P(g.internalFormat,Te,xe,g.colorSpace),w=o&&g.isVideoTexture!==!0,ne=ee.__version===void 0||H===!0,we=$.dataReady;let I=R(g,Ue,ze);q(i.TEXTURE_CUBE_MAP,g,ze);let ce;if(de){w&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,I,Pe,Ue.width,Ue.height);for(let V=0;V<6;V++){ce=se[V].mipmaps;for(let ae=0;ae<ce.length;ae++){const _e=ce[ae];g.format!==Ht?Te!==null?w?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,0,0,_e.width,_e.height,Te,xe,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae,Pe,_e.width,_e.height,0,Te,xe,_e.data)}}}else{if(ce=g.mipmaps,w&&ne){ce.length>0&&I++;const V=Be(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,I,Pe,V.width,V.height)}for(let V=0;V<6;V++)if(Ie){w?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,se[V].width,se[V].height,Te,xe,se[V].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Pe,se[V].width,se[V].height,0,Te,xe,se[V].data);for(let ae=0;ae<ce.length;ae++){const qe=ce[ae].image[V].image;w?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,0,0,qe.width,qe.height,Te,xe,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,Pe,qe.width,qe.height,0,Te,xe,qe.data)}}else{w?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Te,xe,se[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Pe,Te,xe,se[V]);for(let ae=0;ae<ce.length;ae++){const _e=ce[ae];w?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,0,0,Te,xe,_e.image[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae+1,Pe,Te,xe,_e.image[V])}}}x(g,ze)&&y(i.TEXTURE_CUBE_MAP),ee.__version=$.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ee(A,g,N,H,$,ee){const Re=s.convert(N.format,N.colorSpace),Ae=s.convert(N.type),oe=P(N.internalFormat,Re,Ae,N.colorSpace);if(!n.get(g).__hasExternalTextures){const Ie=Math.max(1,g.width>>ee),se=Math.max(1,g.height>>ee);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ee,oe,Ie,se,g.depth,0,Re,Ae,null):t.texImage2D($,ee,oe,Ie,se,0,Re,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ve(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,$,n.get(N).__webglTexture,0,te(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,$,n.get(N).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer&&!g.stencilBuffer){let H=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||ve(g)){const $=g.depthTexture;$&&$.isDepthTexture&&($.type===Ft?H=i.DEPTH_COMPONENT32F:$.type===gn&&(H=i.DEPTH_COMPONENT24));const ee=te(g);ve(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,H,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,H,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,H,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(g.depthBuffer&&g.stencilBuffer){const H=te(g);N&&ve(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,i.DEPTH24_STENCIL8,g.width,g.height):ve(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const H=g.textures;for(let $=0;$<H.length;$++){const ee=H[$],Re=s.convert(ee.format,ee.colorSpace),Ae=s.convert(ee.type),oe=P(ee.internalFormat,Re,Ae,ee.colorSpace),de=te(g);N&&ve(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,oe,g.width,g.height):ve(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,oe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,oe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),O(g.depthTexture,0);const H=n.get(g.depthTexture).__webglTexture,$=te(g);if(g.depthTexture.format===Nn)ve(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(g.depthTexture.format===gi)ve(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Le(A){const g=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Fe(g.__webglFramebuffer,A)}else if(N){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]=i.createRenderbuffer(),Me(g.__webglDepthbuffer[H],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),Me(g.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function L(A,g,N){const H=n.get(A);g!==void 0&&Ee(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Le(A)}function he(A){const g=A.texture,N=n.get(A),H=n.get(g);A.addEventListener("dispose",X);const $=A.textures,ee=A.isWebGLCubeRenderTarget===!0,Re=$.length>1,Ae=d(A)||o;if(Re||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),ee){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let de=0;de<g.mipmaps.length;de++)N.__webglFramebuffer[oe][de]=i.createFramebuffer()}else N.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)N.__webglFramebuffer[oe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Re)if(r.drawBuffers)for(let oe=0,de=$.length;oe<de;oe++){const Ie=n.get($[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ve(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const de=$[oe];N.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const Ie=s.convert(de.format,de.colorSpace),se=s.convert(de.type),Ue=P(de.internalFormat,Ie,se,de.colorSpace,A.isXRRenderTarget===!0),ze=te(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),q(i.TEXTURE_CUBE_MAP,g,Ae);for(let oe=0;oe<6;oe++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)Ee(N.__webglFramebuffer[oe][de],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else Ee(N.__webglFramebuffer[oe],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(g,Ae)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let oe=0,de=$.length;oe<de;oe++){const Ie=$[oe],se=n.get(Ie);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),q(i.TEXTURE_2D,Ie,Ae),Ee(N.__webglFramebuffer,A,Ie,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),x(Ie,Ae)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,H.__webglTexture),q(oe,g,Ae),o&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)Ee(N.__webglFramebuffer[de],A,g,i.COLOR_ATTACHMENT0,oe,de);else Ee(N.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,oe,0);x(g,Ae)&&y(oe),t.unbindTexture()}A.depthBuffer&&Le(A)}function Q(A){const g=d(A)||o,N=A.textures;for(let H=0,$=N.length;H<$;H++){const ee=N[H];if(x(ee,g)){const Re=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(ee).__webglTexture;t.bindTexture(Re,Ae),y(Re),t.unbindTexture()}}}function le(A){if(o&&A.samples>0&&ve(A)===!1){const g=A.textures,N=A.width,H=A.height;let $=i.COLOR_BUFFER_BIT;const ee=[],Re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(A),oe=g.length>1;if(oe)for(let de=0;de<g.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let de=0;de<g.length;de++){ee.push(i.COLOR_ATTACHMENT0+de),A.depthBuffer&&ee.push(Re);const Ie=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(Ie===!1&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),oe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[de]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Re])),oe){const se=n.get(g[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<g.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[de]);const Ie=n.get(g[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function te(A){return Math.min(r.maxSamples,A.samples)}function ve(A){const g=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ge(A){const g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function ye(A,g){const N=A.colorSpace,H=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Es||N!==sn&&N!==pn&&(Ke.getTransfer(N)===Qe?o===!1?e.has("EXT_sRGB")===!0&&H===Ht?(A.format=Es,A.minFilter=lt,A.generateMipmaps=!1):g=Qo.sRGBToLinear(g):(H!==Ht||$!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function Be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=C,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=L,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ve}function Fp(i,e,t){const n=t.isWebGL2;function r(s,a=pn){let o;const l=Ke.getTransfer(a);if(s===xn)return i.UNSIGNED_BYTE;if(s===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(s===hc)return i.BYTE;if(s===uc)return i.SHORT;if(s===Us)return i.UNSIGNED_SHORT;if(s===ko)return i.INT;if(s===gn)return i.UNSIGNED_INT;if(s===Ft)return i.FLOAT;if(s===nn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===dc)return i.ALPHA;if(s===Ht)return i.RGBA;if(s===fc)return i.LUMINANCE;if(s===pc)return i.LUMINANCE_ALPHA;if(s===Nn)return i.DEPTH_COMPONENT;if(s===gi)return i.DEPTH_STENCIL;if(s===Es)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===mc)return i.RED;if(s===qo)return i.RED_INTEGER;if(s===gc)return i.RG;if(s===Yo)return i.RG_INTEGER;if(s===jo)return i.RGBA_INTEGER;if(s===Ur||s===Nr||s===Fr||s===Or)if(l===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Or)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ta||s===na||s===ia||s===ra)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ta)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===na)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ia)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ra)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zo)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sa||s===aa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===sa)return l===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===aa)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===va||s===xa||s===Ma)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===oa)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===la)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ca)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ha)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ua)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===da)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fa)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pa)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ma)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ga)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_a)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===va)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xa)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ma)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Br||s===ya||s===Sa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Br)return l===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ya)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_c||s===Ea||s===Ta||s===ba)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Br)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ea)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ta)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ba)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Un?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Op extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ci extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bp={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),d=this._getHandJoint(c,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new yn({extensions:{fragDepth:!0},vertexShader:zp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Et(new Fn(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Vp extends Gn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,v=null;const M=new Gp,p=t.getContextAttributes();let d=null,b=null;const x=[],y=[],P=new ue;let R=null;const T=new Lt;T.layers.enable(1),T.viewport=new pt;const D=new Lt;D.layers.enable(2),D.viewport=new pt;const X=[T,D],_=new Op;_.layers.enable(1),_.layers.enable(2);let S=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=x[q];return ie===void 0&&(ie=new hs,x[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=x[q];return ie===void 0&&(ie=new hs,x[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=x[q];return ie===void 0&&(ie=new hs,x[q]=ie),ie.getHandSpace()};function z(q){const ie=y.indexOf(q.inputSource);if(ie===-1)return;const me=x[ie];me!==void 0&&(me.update(q.inputSource,q.frame,c||a),me.dispatchEvent({type:q.type,data:q.inputSource}))}function C(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",k);for(let q=0;q<x.length;q++){const ie=y[q];ie!==null&&(y[q]=null,x[q].disconnect(ie))}S=null,Z=null,M.reset(),e.setRenderTarget(d),m=null,f=null,u=null,r=null,b=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",C),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new On(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,me=null,be=null;p.depth&&(be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?gi:Nn,me=p.stencil?Un:gn);const Ee={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new On(f.textureWidth,f.textureHeight,{format:Ht,type:xn,depthTexture:new hl(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Me=e.properties.get(b);Me.__ignoreDepthValues=f.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(q){for(let ie=0;ie<q.removed.length;ie++){const me=q.removed[ie],be=y.indexOf(me);be>=0&&(y[be]=null,x[be].disconnect(me))}for(let ie=0;ie<q.added.length;ie++){const me=q.added[ie];let be=y.indexOf(me);if(be===-1){for(let Me=0;Me<x.length;Me++)if(Me>=y.length){y.push(me),be=Me;break}else if(y[Me]===null){y[Me]=me,be=Me;break}if(be===-1)break}const Ee=x[be];Ee&&Ee.connect(me)}}const F=new U,O=new U;function G(q,ie,me){F.setFromMatrixPosition(ie.matrixWorld),O.setFromMatrixPosition(me.matrixWorld);const be=F.distanceTo(O),Ee=ie.projectionMatrix.elements,Me=me.projectionMatrix.elements,Fe=Ee[14]/(Ee[10]-1),Le=Ee[14]/(Ee[10]+1),L=(Ee[9]+1)/Ee[5],he=(Ee[9]-1)/Ee[5],Q=(Ee[8]-1)/Ee[0],le=(Me[8]+1)/Me[0],te=Fe*Q,ve=Fe*le,ge=be/(-Q+le),ye=ge*-Q;ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ye),q.translateZ(ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Be=Fe+ge,A=Le+ge,g=te-ye,N=ve+(be-ye),H=L*Le/A*Be,$=he*Le/A*Be;q.projectionMatrix.makePerspective(g,N,H,$,Be,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;M.texture!==null&&(q.near=M.depthNear,q.far=M.depthFar),_.near=D.near=T.near=q.near,_.far=D.far=T.far=q.far,(S!==_.near||Z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,Z=_.far,T.near=S,T.far=Z,D.near=S,D.far=Z,T.updateProjectionMatrix(),D.updateProjectionMatrix(),q.updateProjectionMatrix());const ie=q.parent,me=_.cameras;J(_,ie);for(let be=0;be<me.length;be++)J(me[be],ie);me.length===2?G(_,T,D):_.projectionMatrix.copy(T.projectionMatrix),K(q,_,ie)};function K(q,ie,me){me===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ts*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null};let re=null;function fe(q,ie){if(h=ie.getViewerPose(c||a),v=ie,h!==null){const me=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let be=!1;me.length!==_.cameras.length&&(_.cameras.length=0,be=!0);for(let Me=0;Me<me.length;Me++){const Fe=me[Me];let Le=null;if(m!==null)Le=m.getViewport(Fe);else{const he=u.getViewSubImage(f,Fe);Le=he.viewport,Me===0&&(e.setRenderTargetTextures(b,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(b))}let L=X[Me];L===void 0&&(L=new Lt,L.layers.enable(Me),L.viewport=new pt,X[Me]=L),L.matrix.fromArray(Fe.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Fe.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Le.x,Le.y,Le.width,Le.height),Me===0&&(_.matrix.copy(L.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),be===!0&&_.cameras.push(L)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Me=u.getDepthInformation(me[0]);Me&&Me.isValid&&Me.texture&&M.init(e,Me,r.renderState)}}for(let me=0;me<x.length;me++){const be=y[me],Ee=x[me];be!==null&&Ee!==void 0&&Ee.update(be,ie,c||a)}M.render(e,_),re&&re(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ce=new ll;Ce.setAnimationLoop(fe),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}}const Ln=new Xt,kp=new et;function Wp(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,sl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===bt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===bt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),x=b.envMap,y=b.envMapRotation;if(x&&(p.envMap.value=x,Ln.copy(y),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),p.envMapRotation.value.setFromMatrix4(kp.makeRotationFromEuler(Ln)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*P,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xp(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=r[b.id];y===void 0&&(v(b),y=h(b),r[b.id]=y,b.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(b,P);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function h(b){const x=u();b.__bindingPointIndex=x;const y=i.createBuffer(),P=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],y=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,T=y.length;R<T;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let X=0,_=D.length;X<_;X++){const S=D[X];if(m(S,R,X,P)===!0){const Z=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let C=0;for(let k=0;k<z.length;k++){const F=z[k],O=M(F);typeof F=="number"||typeof F=="boolean"?(S.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,Z+C,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=0,S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=0,S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=0):(F.toArray(S.__data,C),C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,x,y,P){const R=b.value,T=x+"_"+y;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const D=P[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function v(b){const x=b.uniforms;let y=0;const P=16;for(let T=0,D=x.length;T<D;T++){const X=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,S=X.length;_<S;_++){const Z=X[_],z=Array.isArray(Z.value)?Z.value:[Z.value];for(let C=0,k=z.length;C<k;C++){const F=z[C],O=M(F),G=y%P;G!==0&&P-G<O.boundary&&(y+=P-G),Z.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=O.storage}}}const R=y%P;return R>0&&(y+=P-R),b.__size=y,b.__cache={},this}function M(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class ws{constructor(e={}){const{canvas:t=Lc(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const x=this;let y=!1,P=0,R=0,T=null,D=-1,X=null;const _=new pt,S=new pt;let Z=null;const z=new Ye(0);let C=0,k=t.width,F=t.height,O=1,G=null,J=null;const K=new pt(0,0,k,F),re=new pt(0,0,k,F);let fe=!1;const Ce=new Os;let q=!1,ie=!1,me=null;const be=new et,Ee=new ue,Me=new U,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return T===null?O:1}let L=n;function he(E,B){for(let Y=0;Y<E.length;Y++){const j=E[Y],W=t.getContext(j,B);if(W!==null)return W}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Is}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),L=he(B,E),L===null)throw he(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,le,te,ve,ge,ye,Be,A,g,N,H,$,ee,Re,Ae,oe,de,Ie,se,Ue,ze,Te,xe,Pe;function w(){Q=new Kd(L),le=new Wd(L,Q,e),Q.init(le),Te=new Fp(L,Q,le),te=new Up(L,Q,le),ve=new Qd(L),ge=new Mp,ye=new Np(L,Q,te,ge,le,Te,ve),Be=new qd(x),A=new Zd(x),g=new sh(L,le),xe=new Vd(L,Q,g,le),N=new Jd(L,g,ve,xe),H=new rf(L,N,g,ve),se=new nf(L,le,ye),oe=new Xd(ge),$=new xp(x,Be,A,Q,le,xe,oe),ee=new Wp(x,ge),Re=new Sp,Ae=new Rp(Q,le),Ie=new Gd(x,Be,A,te,H,f,l),de=new Ip(x,H,le),Pe=new Xp(L,ve,le,te),Ue=new kd(L,Q,ve,le),ze=new $d(L,Q,ve,le),ve.programs=$.programs,x.capabilities=le,x.extensions=Q,x.properties=ge,x.renderLists=Re,x.shadowMap=de,x.state=te,x.info=ve}w();const ne=new Vp(x,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(k,F,!1))},this.getSize=function(E){return E.set(k,F)},this.setSize=function(E,B,Y=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,F=B,t.width=Math.floor(E*O),t.height=Math.floor(B*O),Y===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(k*O,F*O).floor()},this.setDrawingBufferSize=function(E,B,Y){k=E,F=B,O=Y,t.width=Math.floor(E*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,B,Y,j){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,B,Y,j),te.viewport(_.copy(K).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,B,Y,j){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,B,Y,j),te.scissor(S.copy(re).multiplyScalar(O).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){te.setScissorTest(fe=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,B=!0,Y=!0){let j=0;if(E){let W=!1;if(T!==null){const Se=T.texture.format;W=Se===jo||Se===Yo||Se===qo}if(W){const Se=T.texture.type,De=Se===xn||Se===gn||Se===Us||Se===Un||Se===Wo||Se===Xo,Ne=Ie.getClearColor(),Oe=Ie.getClearAlpha(),Xe=Ne.r,He=Ne.g,Ge=Ne.b;De?(m[0]=Xe,m[1]=He,m[2]=Ge,m[3]=Oe,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Xe,v[1]=He,v[2]=Ge,v[3]=Oe,L.clearBufferiv(L.COLOR,0,v))}else j|=L.COLOR_BUFFER_BIT}B&&(j|=L.DEPTH_BUFFER_BIT),Y&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Re.dispose(),Ae.dispose(),ge.dispose(),Be.dispose(),A.dispose(),H.dispose(),xe.dispose(),Pe.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",rt),ne.removeEventListener("sessionend",je),me&&(me.dispose(),me=null),$e.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=ve.autoReset,B=de.enabled,Y=de.autoUpdate,j=de.needsUpdate,W=de.type;w(),ve.autoReset=E,de.enabled=B,de.autoUpdate=Y,de.needsUpdate=j,de.type=W}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function V(E){const B=E.target;B.removeEventListener("dispose",V),ae(B)}function ae(E){_e(E),ge.remove(E)}function _e(E){const B=ge.get(E).programs;B!==void 0&&(B.forEach(function(Y){$.releaseProgram(Y)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,j,W,Se){B===null&&(B=Fe);const De=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Al(E,B,Y,j,W);te.setMaterial(j,De);let Oe=Y.index,Xe=1;if(j.wireframe===!0){if(Oe=N.getWireframeAttribute(Y),Oe===void 0)return;Xe=2}const He=Y.drawRange,Ge=Y.attributes.position;let st=He.start*Xe,At=(He.start+He.count)*Xe;Se!==null&&(st=Math.max(st,Se.start*Xe),At=Math.min(At,(Se.start+Se.count)*Xe)),Oe!==null?(st=Math.max(st,0),At=Math.min(At,Oe.count)):Ge!=null&&(st=Math.max(st,0),At=Math.min(At,Ge.count));const ut=At-st;if(ut<0||ut===1/0)return;xe.setup(W,j,Ne,Y,Oe);let Yt,nt=Ue;if(Oe!==null&&(Yt=g.get(Oe),nt=ze,nt.setIndex(Yt)),W.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*Le()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(W.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),te.setLineWidth(Ve*Le()),W.isLineSegments?nt.setMode(L.LINES):W.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else W.isPoints?nt.setMode(L.POINTS):W.isSprite&&nt.setMode(L.TRIANGLES);if(W.isBatchedMesh)nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)nt.renderInstances(st,ut,W.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Cr=Math.min(Y.instanceCount,Ve);nt.renderInstances(st,ut,Cr)}else nt.render(st,ut)};function qe(E,B,Y){E.transparent===!0&&E.side===Nt&&E.forceSinglePass===!1?(E.side=bt,E.needsUpdate=!0,Oi(E,B,Y),E.side=Mn,E.needsUpdate=!0,Oi(E,B,Y),E.side=Nt):Oi(E,B,Y)}this.compile=function(E,B,Y=null){Y===null&&(Y=E),p=Ae.get(Y),p.init(),b.push(p),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(x._useLegacyLights);const j=new Set;return E.traverse(function(W){const Se=W.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){const Ne=Se[De];qe(Ne,Y,W),j.add(Ne)}else qe(Se,Y,W),j.add(Se)}),b.pop(),p=null,j},this.compileAsync=function(E,B,Y=null){const j=this.compile(E,B,Y);return new Promise(W=>{function Se(){if(j.forEach(function(De){ge.get(De).currentProgram.isReady()&&j.delete(De)}),j.size===0){W(E);return}setTimeout(Se,10)}Q.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ze=null;function Je(E){Ze&&Ze(E)}function rt(){$e.stop()}function je(){$e.start()}const $e=new ll;$e.setAnimationLoop(Je),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(E){Ze=E,ne.setAnimationLoop(E),E===null?$e.stop():$e.start()},ne.addEventListener("sessionstart",rt),ne.addEventListener("sessionend",je),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(B),B=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,T),p=Ae.get(E,b.length),p.init(),b.push(p),be.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ce.setFromProjectionMatrix(be),ie=this.localClippingEnabled,q=oe.init(this.clippingPlanes,ie),M=Re.get(E,d.length),M.init(),d.push(M),_t(E,B,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(G,J),this.info.render.frame++,q===!0&&oe.beginShadows();const Y=p.state.shadowsArray;if(de.render(Y,E,B),q===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1)&&Ie.render(M,E),p.setupLights(x._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let W=0,Se=j.length;W<Se;W++){const De=j[W];Sn(M,E,De,De.viewport)}}else Sn(M,E,B);T!==null&&(ye.updateMultisampleRenderTarget(T),ye.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,B),xe.resetDefaultState(),D=-1,X=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function _t(E,B,Y,j){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ce.intersectsSprite(E)){j&&Me.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const De=H.update(E),Ne=E.material;Ne.visible&&M.push(E,De,Ne,Y,Me.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ce.intersectsObject(E))){const De=H.update(E),Ne=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Me.copy(E.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Me.copy(De.boundingSphere.center)),Me.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(Ne)){const Oe=De.groups;for(let Xe=0,He=Oe.length;Xe<He;Xe++){const Ge=Oe[Xe],st=Ne[Ge.materialIndex];st&&st.visible&&M.push(E,De,st,Y,Me.z,Ge)}}else Ne.visible&&M.push(E,De,Ne,Y,Me.z,null)}}const Se=E.children;for(let De=0,Ne=Se.length;De<Ne;De++)_t(Se[De],B,Y,j)}function Sn(E,B,Y,j){const W=E.opaque,Se=E.transmissive,De=E.transparent;p.setupLightsView(Y),q===!0&&oe.setGlobalState(x.clippingPlanes,Y),Se.length>0&&Ni(W,Se,B,Y),j&&te.viewport(_.copy(j)),W.length>0&&Fi(W,B,Y),Se.length>0&&Fi(Se,B,Y),De.length>0&&Fi(De,B,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Ni(E,B,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const Se=le.isWebGL2;me===null&&(me=new On(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?nn:xn,minFilter:mn,samples:Se?4:0})),x.getDrawingBufferSize(Ee),Se?me.setSize(Ee.x,Ee.y):me.setSize(bs(Ee.x),bs(Ee.y));const De=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(z),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=vn,Fi(E,Y,j),ye.updateMultisampleRenderTarget(me),ye.updateRenderTargetMipmap(me);let Oe=!1;for(let Xe=0,He=B.length;Xe<He;Xe++){const Ge=B[Xe],st=Ge.object,At=Ge.geometry,ut=Ge.material,Yt=Ge.group;if(ut.side===Nt&&st.layers.test(j.layers)){const nt=ut.side;ut.side=bt,ut.needsUpdate=!0,ks(st,Y,j,At,ut,Yt),ut.side=nt,ut.needsUpdate=!0,Oe=!0}}Oe===!0&&(ye.updateMultisampleRenderTarget(me),ye.updateRenderTargetMipmap(me)),x.setRenderTarget(De),x.setClearColor(z,C),x.toneMapping=Ne}function Fi(E,B,Y){const j=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Se=E.length;W<Se;W++){const De=E[W],Ne=De.object,Oe=De.geometry,Xe=j===null?De.material:j,He=De.group;Ne.layers.test(Y.layers)&&ks(Ne,B,Y,Oe,Xe,He)}}function ks(E,B,Y,j,W,Se){E.onBeforeRender(x,B,Y,j,W,Se),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(x,B,Y,j,E,Se),W.transparent===!0&&W.side===Nt&&W.forceSinglePass===!1?(W.side=bt,W.needsUpdate=!0,x.renderBufferDirect(Y,B,j,W,E,Se),W.side=Mn,W.needsUpdate=!0,x.renderBufferDirect(Y,B,j,W,E,Se),W.side=Nt):x.renderBufferDirect(Y,B,j,W,E,Se),E.onAfterRender(x,B,Y,j,W,Se)}function Oi(E,B,Y){B.isScene!==!0&&(B=Fe);const j=ge.get(E),W=p.state.lights,Se=p.state.shadowsArray,De=W.state.version,Ne=$.getParameters(E,W.state,Se,B,Y),Oe=$.getProgramCacheKey(Ne);let Xe=j.programs;j.environment=E.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(E.isMeshStandardMaterial?A:Be).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",V),Xe=new Map,j.programs=Xe);let He=Xe.get(Oe);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===De)return Xs(E,Ne),He}else Ne.uniforms=$.getUniforms(E),E.onBuild(Y,Ne,x),E.onBeforeCompile(Ne,x),He=$.acquireProgram(Ne,Oe),Xe.set(Oe,He),j.uniforms=Ne.uniforms;const Ge=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=oe.uniform),Xs(E,Ne),j.needsLights=Rl(E),j.lightsStateVersion=De,j.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function Ws(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=fr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Xs(E,B){const Y=ge.get(E);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Al(E,B,Y,j,W){B.isScene!==!0&&(B=Fe),ye.resetTextureUnits();const Se=B.fog,De=j.isMeshStandardMaterial?B.environment:null,Ne=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sn,Oe=(j.isMeshStandardMaterial?A:Be).get(j.envMap||De),Xe=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,At=!!Y.morphAttributes.color;let ut=vn;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=Yt!==void 0?Yt.length:0,Ve=ge.get(j),Cr=p.state.lights;if(q===!0&&(ie===!0||E!==X)){const It=E===X&&j.id===D;oe.setState(j,E,It)}let tt=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Cr.state.version||Ve.outputColorSpace!==Ne||W.isBatchedMesh&&Ve.batching===!1||!W.isBatchedMesh&&Ve.batching===!0||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||W.isInstancedMesh&&Ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ve.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ve.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ve.instancingMorph===!1&&W.morphTexture!==null||Ve.envMap!==Oe||j.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==oe.numPlanes||Ve.numIntersection!==oe.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==He||Ve.morphTargets!==Ge||Ve.morphNormals!==st||Ve.morphColors!==At||Ve.toneMapping!==ut||le.isWebGL2===!0&&Ve.morphTargetsCount!==nt)&&(tt=!0):(tt=!0,Ve.__version=j.version);let En=Ve.currentProgram;tt===!0&&(En=Oi(j,B,W));let qs=!1,Si=!1,Lr=!1;const vt=En.getUniforms(),Tn=Ve.uniforms;if(te.useProgram(En.program)&&(qs=!0,Si=!0,Lr=!0),j.id!==D&&(D=j.id,Si=!0),qs||X!==E){vt.setValue(L,"projectionMatrix",E.projectionMatrix),vt.setValue(L,"viewMatrix",E.matrixWorldInverse);const It=vt.map.cameraPosition;It!==void 0&&It.setValue(L,Me.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,Si=!0,Lr=!0)}if(W.isSkinnedMesh){vt.setOptional(L,W,"bindMatrix"),vt.setOptional(L,W,"bindMatrixInverse");const It=W.skeleton;It&&(le.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),vt.setValue(L,"boneTexture",It.boneTexture,ye)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(vt.setOptional(L,W,"batchingTexture"),vt.setValue(L,"batchingTexture",W._matricesTexture,ye));const Pr=Y.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0&&le.isWebGL2===!0)&&se.update(W,Y,En),(Si||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,vt.setValue(L,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Tn.envMap.value=Oe,Tn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Si&&(vt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&wl(Tn,Lr),Se&&j.fog===!0&&ee.refreshFogUniforms(Tn,Se),ee.refreshMaterialUniforms(Tn,j,O,F,me),fr.upload(L,Ws(Ve),Tn,ye)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(fr.upload(L,Ws(Ve),Tn,ye),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(L,"center",W.center),vt.setValue(L,"modelViewMatrix",W.modelViewMatrix),vt.setValue(L,"normalMatrix",W.normalMatrix),vt.setValue(L,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const It=j.uniformsGroups;for(let Dr=0,Cl=It.length;Dr<Cl;Dr++)if(le.isWebGL2){const Ys=It[Dr];Pe.update(Ys,En),Pe.bind(Ys,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function wl(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Rl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,B,Y){ge.get(E.texture).__webglTexture=B,ge.get(E.depthTexture).__webglTexture=Y;const j=ge.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const Y=ge.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Y=0){T=E,P=B,R=Y;let j=!0,W=null,Se=!1,De=!1;if(E){const Oe=ge.get(E);Oe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(L.FRAMEBUFFER,null),j=!1):Oe.__webglFramebuffer===void 0?ye.setupRenderTarget(E):Oe.__hasExternalTextures&&ye.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const He=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[B])?W=He[B][Y]:W=He[B],Se=!0):le.isWebGL2&&E.samples>0&&ye.useMultisampledRTT(E)===!1?W=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?W=He[Y]:W=He,_.copy(E.viewport),S.copy(E.scissor),Z=E.scissorTest}else _.copy(K).multiplyScalar(O).floor(),S.copy(re).multiplyScalar(O).floor(),Z=fe;if(te.bindFramebuffer(L.FRAMEBUFFER,W)&&le.drawBuffers&&j&&te.drawBuffers(E,W),te.viewport(_),te.scissor(S),te.setScissorTest(Z),Se){const Oe=ge.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,Y)}else if(De){const Oe=ge.get(E.texture),Xe=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,Xe)}D=-1},this.readRenderTargetPixels=function(E,B,Y,j,W,Se,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){te.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Oe=E.texture,Xe=Oe.format,He=Oe.type;if(Xe!==Ht&&Te.convert(Xe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===nn&&(Q.has("EXT_color_buffer_half_float")||le.isWebGL2&&Q.has("EXT_color_buffer_float"));if(He!==xn&&Te.convert(He)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Ft&&(le.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-j&&Y>=0&&Y<=E.height-W&&L.readPixels(B,Y,j,W,Te.convert(Xe),Te.convert(He),Se)}finally{const Oe=T!==null?ge.get(T).__webglFramebuffer:null;te.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(E,B,Y=0){const j=Math.pow(2,-Y),W=Math.floor(B.image.width*j),Se=Math.floor(B.image.height*j);ye.setTexture2D(B,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,E.x,E.y,W,Se),te.unbindTexture()},this.copyTextureToTexture=function(E,B,Y,j=0){const W=B.image.width,Se=B.image.height,De=Te.convert(Y.format),Ne=Te.convert(Y.type);ye.setTexture2D(Y,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,E.x,E.y,W,Se,De,Ne,B.image.data):B.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,De,B.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,j,E.x,E.y,De,Ne,B.image),j===0&&Y.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(E,B,Y,j,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=Math.round(E.max.x-E.min.x),De=Math.round(E.max.y-E.min.y),Ne=E.max.z-E.min.z+1,Oe=Te.convert(j.format),Xe=Te.convert(j.type);let He;if(j.isData3DTexture)ye.setTexture3D(j,0),He=L.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)ye.setTexture2DArray(j,0),He=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const Ge=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),At=L.getParameter(L.UNPACK_SKIP_PIXELS),ut=L.getParameter(L.UNPACK_SKIP_ROWS),Yt=L.getParameter(L.UNPACK_SKIP_IMAGES),nt=Y.isCompressedTexture?Y.mipmaps[W]:Y.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,E.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,E.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,E.min.z),Y.isDataTexture||Y.isData3DTexture?L.texSubImage3D(He,W,B.x,B.y,B.z,Se,De,Ne,Oe,Xe,nt.data):j.isCompressedArrayTexture?L.compressedTexSubImage3D(He,W,B.x,B.y,B.z,Se,De,Ne,Oe,nt.data):L.texSubImage3D(He,W,B.x,B.y,B.z,Se,De,Ne,Oe,Xe,nt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Yt),W===0&&j.generateMipmaps&&L.generateMipmap(He),te.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ye.setTextureCube(E,0):E.isData3DTexture?ye.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ye.setTexture2DArray(E,0):ye.setTexture2D(E,0),te.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,te.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ns?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Er?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qp extends ws{}qp.prototype.isWebGL1Renderer=!0;class _o extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yp extends yt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=mt,h=mt,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new U,xo=new U,Mo=new et,us=new br,ar=new Tr;class jp extends gt{constructor(e=new Dt,t=new gl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)vo.fromBufferAttribute(t,r-1),xo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=vo.distanceTo(xo);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),ar.radius+=s,e.ray.intersectsSphere(ar)===!1)return;Mo.copy(r).invert(),us.copy(e.ray).applyMatrix4(Mo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,f=new U,m=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const d=Math.max(0,a.start),b=Math.min(v.count,a.start+a.count);for(let x=d,y=b-1;x<y;x+=m){const P=v.getX(x),R=v.getX(x+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,R),us.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let x=d,y=b-1;x<y;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),us.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const yo=new U,So=new U;class Zp extends jp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yo.fromBufferAttribute(t,r),So.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yo.distanceTo(So);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kp extends yt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],f=n[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ue:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,r=[],s=[],a=[],o=new U,l=new et;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(ft(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(ft(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zs extends qt{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jp extends zs{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hs(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,m*=h,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const or=new U,ds=new Hs,fs=new Hs,ps=new Hs;class $p extends qt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(or.subVectors(r[0],r[1]).add(r[0]),c=or);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(or.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),m),M=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);M<1e-4&&(M=1),v<1e-4&&(v=M),p<1e-4&&(p=M),ds.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,M,p),fs.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,M,p),ps.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,M,p)}else this.curveType==="catmullrom"&&(ds.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),fs.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ps.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ds.calc(l),fs.calc(l),ps.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Qp(i,e){const t=1-i;return t*t*e}function em(i,e){return 2*(1-i)*i*e}function tm(i,e){return i*i*e}function Li(i,e,t,n){return Qp(i,e)+em(i,t)+tm(i,n)}function nm(i,e){const t=1-i;return t*t*t*e}function im(i,e){const t=1-i;return 3*t*t*i*e}function rm(i,e){return 3*(1-i)*i*i*e}function sm(i,e){return i*i*i*e}function Pi(i,e,t,n,r){return nm(i,e)+im(i,t)+rm(i,n)+sm(i,r)}class _l extends qt{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Pi(e,r.x,s.x,a.x,o.x),Pi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class am extends qt{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Pi(e,r.x,s.x,a.x,o.x),Pi(e,r.y,s.y,a.y,o.y),Pi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vl extends qt{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends qt{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xl extends qt{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Li(e,r.x,s.x,a.x),Li(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lm extends qt{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Li(e,r.x,s.x,a.x),Li(e,r.y,s.y,a.y),Li(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ml extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Eo(o,l.x,c.x,h.x,u.x),Eo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var Rs=Object.freeze({__proto__:null,ArcCurve:Jp,CatmullRomCurve3:$p,CubicBezierCurve:_l,CubicBezierCurve3:am,EllipseCurve:zs,LineCurve:vl,LineCurve3:om,QuadraticBezierCurve:xl,QuadraticBezierCurve3:lm,SplineCurve:Ml});class cm extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Rs[r.type]().fromJSON(r))}return this}}class Cs extends cm{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vl(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new xl(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new _l(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ml(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new zs(e,t,n,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pr extends Cs{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Cs().fromJSON(r))}return this}}const hm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=yl(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,f,m;if(n&&(s=mm(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let v=t;v<r;v+=t)u=i[v],f=i[v+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Di(s,a,t,o,l,m,0),a}};function yl(i,e,t,n,r){let s,a;if(r===Am(i,e,t,n)>0)for(s=e;s<t;s+=n)a=To(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=To(s,i[s],i[s+1],a);return a&&wr(a,a.next)&&(Ui(a),a=a.next),a}function Hn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wr(t,t.next)||it(t.prev,t,t.next)===0)){if(Ui(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Di(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Mm(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?dm(i,n,r,s):um(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ui(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=fm(Hn(i),e,t),Di(i,e,t,n,r,s,2)):a===2&&pm(i,e,t,n,r,s):Di(Hn(i),e,t,n,r,s,1);break}}}function um(i){const e=i.prev,t=i,n=i.next;if(it(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=m&&hi(r,o,s,l,a,c,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function dm(i,e,t,n){const r=i.prev,s=i,a=i.next;if(it(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,v=h<u?h<f?h:f:u<f?u:f,M=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,d=Ls(m,v,e,t,n),b=Ls(M,p,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=d&&y&&y.z<=b;){if(x.x>=m&&x.x<=M&&x.y>=v&&x.y<=p&&x!==r&&x!==a&&hi(o,h,l,u,c,f,x.x,x.y)&&it(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=m&&y.x<=M&&y.y>=v&&y.y<=p&&y!==r&&y!==a&&hi(o,h,l,u,c,f,y.x,y.y)&&it(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=M&&x.y>=v&&x.y<=p&&x!==r&&x!==a&&hi(o,h,l,u,c,f,x.x,x.y)&&it(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=b;){if(y.x>=m&&y.x<=M&&y.y>=v&&y.y<=p&&y!==r&&y!==a&&hi(o,h,l,u,c,f,y.x,y.y)&&it(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function fm(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!wr(r,s)&&Sl(r,n,n.next,s)&&Ii(r,s)&&Ii(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ui(n),Ui(n.next),n=i=s),n=n.next}while(n!==i);return Hn(n)}function pm(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Em(a,o)){let l=El(a,o);a=Hn(a,a.next),l=Hn(l,l.next),Di(a,e,t,n,r,s,0),Di(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function mm(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=yl(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Sm(c));for(r.sort(gm),s=0;s<r.length;s++)t=_m(r[s],t);return t}function gm(i,e){return i.x-e.x}function _m(i,e){const t=vm(i,e);if(!t)return e;const n=El(t,i);return Hn(n,n.next),Hn(t,t.next)}function vm(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&hi(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Ii(t,i)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&xm(r,t)))&&(r=t,h=u)),t=t.next;while(t!==o);return r}function xm(i,e){return it(i.prev,i,e.prev)<0&&it(e.next,i,i.next)<0}function Mm(i,e,t,n){let r=i;do r.z===0&&(r.z=Ls(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ym(r)}function ym(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Ls(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Em(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Tm(i,e)&&(Ii(i,e)&&Ii(e,i)&&bm(i,e)&&(it(i.prev,i,e.prev)||it(i,e.prev,e))||wr(i,e)&&it(i.prev,i,i.next)>0&&it(e.prev,e,e.next)>0)}function it(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wr(i,e){return i.x===e.x&&i.y===e.y}function Sl(i,e,t,n){const r=cr(it(i,e,t)),s=cr(it(i,e,n)),a=cr(it(t,n,i)),o=cr(it(t,n,e));return!!(r!==s&&a!==o||r===0&&lr(i,t,e)||s===0&&lr(i,n,e)||a===0&&lr(t,i,n)||o===0&&lr(t,e,n))}function lr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function cr(i){return i>0?1:i<0?-1:0}function Tm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ii(i,e){return it(i.prev,i,i.next)<0?it(i,e,i.next)>=0&&it(i,i.prev,e)>=0:it(i,e,i.prev)<0||it(i,i.next,e)<0}function bm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function El(i,e){const t=new Ps(i.i,i.x,i.y),n=new Ps(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function To(i,e,t,n){const r=new Ps(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ui(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ps(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Am(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class fi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];bo(e),Ao(n,e);let a=e.length;t.forEach(bo);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Ao(n,t[l]);const o=hm.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function bo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ao(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Gs extends Dt{constructor(e=new pr([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new at(r,3)),this.setAttribute("uv",new at(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:m-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:wm;let x,y=!1,P,R,T,D;d&&(x=d.getSpacedPoints(h),y=!0,f=!1,P=d.computeFrenetFrames(h,!1),R=new U,T=new U,D=new U),f||(p=0,m=0,v=0,M=0);const X=o.extractPoints(c);let _=X.shape;const S=X.holes;if(!fi.isClockWise(_)){_=_.reverse();for(let L=0,he=S.length;L<he;L++){const Q=S[L];fi.isClockWise(Q)&&(S[L]=Q.reverse())}}const z=fi.triangulateShape(_,S),C=_;for(let L=0,he=S.length;L<he;L++){const Q=S[L];_=_.concat(Q)}function k(L,he,Q){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(he,Q)}const F=_.length,O=z.length;function G(L,he,Q){let le,te,ve;const ge=L.x-he.x,ye=L.y-he.y,Be=Q.x-L.x,A=Q.y-L.y,g=ge*ge+ye*ye,N=ge*A-ye*Be;if(Math.abs(N)>Number.EPSILON){const H=Math.sqrt(g),$=Math.sqrt(Be*Be+A*A),ee=he.x-ye/H,Re=he.y+ge/H,Ae=Q.x-A/$,oe=Q.y+Be/$,de=((Ae-ee)*A-(oe-Re)*Be)/(ge*A-ye*Be);le=ee+ge*de-L.x,te=Re+ye*de-L.y;const Ie=le*le+te*te;if(Ie<=2)return new ue(le,te);ve=Math.sqrt(Ie/2)}else{let H=!1;ge>Number.EPSILON?Be>Number.EPSILON&&(H=!0):ge<-Number.EPSILON?Be<-Number.EPSILON&&(H=!0):Math.sign(ye)===Math.sign(A)&&(H=!0),H?(le=-ye,te=ge,ve=Math.sqrt(g)):(le=ge,te=ye,ve=Math.sqrt(g/2))}return new ue(le/ve,te/ve)}const J=[];for(let L=0,he=C.length,Q=he-1,le=L+1;L<he;L++,Q++,le++)Q===he&&(Q=0),le===he&&(le=0),J[L]=G(C[L],C[Q],C[le]);const K=[];let re,fe=J.concat();for(let L=0,he=S.length;L<he;L++){const Q=S[L];re=[];for(let le=0,te=Q.length,ve=te-1,ge=le+1;le<te;le++,ve++,ge++)ve===te&&(ve=0),ge===te&&(ge=0),re[le]=G(Q[le],Q[ve],Q[ge]);K.push(re),fe=fe.concat(re)}for(let L=0;L<p;L++){const he=L/p,Q=m*Math.cos(he*Math.PI/2),le=v*Math.sin(he*Math.PI/2)+M;for(let te=0,ve=C.length;te<ve;te++){const ge=k(C[te],J[te],le);be(ge.x,ge.y,-Q)}for(let te=0,ve=S.length;te<ve;te++){const ge=S[te];re=K[te];for(let ye=0,Be=ge.length;ye<Be;ye++){const A=k(ge[ye],re[ye],le);be(A.x,A.y,-Q)}}}const Ce=v+M;for(let L=0;L<F;L++){const he=f?k(_[L],fe[L],Ce):_[L];y?(T.copy(P.normals[0]).multiplyScalar(he.x),R.copy(P.binormals[0]).multiplyScalar(he.y),D.copy(x[0]).add(T).add(R),be(D.x,D.y,D.z)):be(he.x,he.y,0)}for(let L=1;L<=h;L++)for(let he=0;he<F;he++){const Q=f?k(_[he],fe[he],Ce):_[he];y?(T.copy(P.normals[L]).multiplyScalar(Q.x),R.copy(P.binormals[L]).multiplyScalar(Q.y),D.copy(x[L]).add(T).add(R),be(D.x,D.y,D.z)):be(Q.x,Q.y,u/h*L)}for(let L=p-1;L>=0;L--){const he=L/p,Q=m*Math.cos(he*Math.PI/2),le=v*Math.sin(he*Math.PI/2)+M;for(let te=0,ve=C.length;te<ve;te++){const ge=k(C[te],J[te],le);be(ge.x,ge.y,u+Q)}for(let te=0,ve=S.length;te<ve;te++){const ge=S[te];re=K[te];for(let ye=0,Be=ge.length;ye<Be;ye++){const A=k(ge[ye],re[ye],le);y?be(A.x,A.y+x[h-1].y,x[h-1].x+Q):be(A.x,A.y,u+Q)}}}q(),ie();function q(){const L=r.length/3;if(f){let he=0,Q=F*he;for(let le=0;le<O;le++){const te=z[le];Ee(te[2]+Q,te[1]+Q,te[0]+Q)}he=h+p*2,Q=F*he;for(let le=0;le<O;le++){const te=z[le];Ee(te[0]+Q,te[1]+Q,te[2]+Q)}}else{for(let he=0;he<O;he++){const Q=z[he];Ee(Q[2],Q[1],Q[0])}for(let he=0;he<O;he++){const Q=z[he];Ee(Q[0]+F*h,Q[1]+F*h,Q[2]+F*h)}}n.addGroup(L,r.length/3-L,0)}function ie(){const L=r.length/3;let he=0;me(C,he),he+=C.length;for(let Q=0,le=S.length;Q<le;Q++){const te=S[Q];me(te,he),he+=te.length}n.addGroup(L,r.length/3-L,1)}function me(L,he){let Q=L.length;for(;--Q>=0;){const le=Q;let te=Q-1;te<0&&(te=L.length-1);for(let ve=0,ge=h+p*2;ve<ge;ve++){const ye=F*ve,Be=F*(ve+1),A=he+le+ye,g=he+te+ye,N=he+te+Be,H=he+le+Be;Me(A,g,N,H)}}}function be(L,he,Q){l.push(L),l.push(he),l.push(Q)}function Ee(L,he,Q){Fe(L),Fe(he),Fe(Q);const le=r.length/3,te=b.generateTopUV(n,r,le-3,le-2,le-1);Le(te[0]),Le(te[1]),Le(te[2])}function Me(L,he,Q,le){Fe(L),Fe(he),Fe(le),Fe(he),Fe(Q),Fe(le);const te=r.length/3,ve=b.generateSideWallUV(n,r,te-6,te-3,te-2,te-1);Le(ve[0]),Le(ve[1]),Le(ve[3]),Le(ve[1]),Le(ve[2]),Le(ve[3])}function Fe(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Le(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rm(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Rs[r.type]().fromJSON(r)),new Gs(n,e.options)}}const wm={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new ue(s,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[r*3],m=e[r*3+1],v=e[r*3+2],M=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-u),new ue(f,1-v),new ue(M,1-d)]:[new ue(o,1-l),new ue(h,1-u),new ue(m,1-v),new ue(p,1-d)]}};function Rm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vs extends Dt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new U,u=new U,f=new U;for(let m=0;m<=n;m++)for(let v=0;v<=r;v++){const M=v/r*s,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(M),u.y=(e+t*Math.cos(p))*Math.sin(M),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){const M=(r+1)*m+v-1,p=(r+1)*(m-1)+v-1,d=(r+1)*(m-1)+v,b=(r+1)*m+v;a.push(M,p,b),a.push(p,d,b)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ci extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const wo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cm{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const Lm=new Cm;class Rr{constructor(e){this.manager=e!==void 0?e:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qt={};class Pm extends Error{constructor(e,t){super(e),this.response=t}}class Tl extends Rr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qt[e]!==void 0){Qt[e].push({onLoad:t,onProgress:n,onError:r});return}Qt[e]=[],Qt[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Qt[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,v=m!==0;let M=0;const p=new ReadableStream({start(d){b();function b(){u.read().then(({done:x,value:y})=>{if(x)d.close();else{M+=y.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:m});for(let R=0,T=h.length;R<T;R++){const D=h[R];D.onProgress&&D.onProgress(P)}d.enqueue(y),b()}})}}});return new Response(p)}else throw new Pm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{wo.add(e,c);const h=Qt[e];delete Qt[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Qt[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qt[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dm extends Rr{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Yp,o=new Tl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Pt,a.wrapT=c.wrapT!==void 0?c.wrapT:Pt,a.magFilter=c.magFilter!==void 0?c.magFilter:lt,a.minFilter=c.minFilter!==void 0?c.minFilter:lt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=mn),c.mipmapCount===1&&(a.minFilter=lt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class bl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ms=new et,Ro=new U,Co=new U;class Im{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ro),Co.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Co),t.updateMatrixWorld(),ms.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ms),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ms)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Um extends Im{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fm extends bl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Lo=new et;class Om{constructor(e,t,n=0,r=1/0){this.ray=new br(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lo),this}intersectObject(e,t=!0,n=[]){return Ds(e,this,n,t),n.sort(Po),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ds(e[r],this,n,t);return n.sort(Po),n}}function Po(i,e){return i.distance-e.distance}function Ds(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)Ds(r[s],e,t,!0)}}class Do{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bm extends Zp{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ye(n),r=new Ye(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,v=-o;f<=t;f++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const M=f===s?n:r;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const h=new Dt;h.setAttribute("position",new at(l,3)),h.setAttribute("color",new at(c,3));const u=new gl({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zm{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Cs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const b=[];for(let x=0,y=d.length;x<y;x++){const P=d[x],R=new pr;R.curves=P.curves,b.push(R)}return b}function n(d,b){const x=b.length;let y=!1;for(let P=x-1,R=0;R<x;P=R++){let T=b[P],D=b[R],X=D.x-T.x,_=D.y-T.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(T=b[R],X=-X,D=b[P],_=-_),d.y<T.y||d.y>D.y)continue;if(d.y===T.y){if(d.x===T.x)return!0}else{const S=_*(d.x-T.x)-X*(d.y-T.y);if(S===0)return!0;if(S<0)continue;y=!y}}else{if(d.y!==T.y)continue;if(D.x<=d.x&&d.x<=T.x||T.x<=d.x&&d.x<=D.x)return!0}}return y}const r=fi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new pr,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const u=[],f=[];let m=[],v=0,M;f[v]=void 0,m[v]=[];for(let d=0,b=s.length;d<b;d++)o=s[d],M=o.getPoints(),a=r(M),a=e?!a:a,a?(!h&&f[v]&&v++,f[v]={s:new pr,p:M},f[v].s.curves=o.curves,h&&v++,m[v]=[]):m[v].push({h:o,p:M[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,b=0;for(let x=0,y=f.length;x<y;x++)u[x]=[];for(let x=0,y=f.length;x<y;x++){const P=m[x];for(let R=0;R<P.length;R++){const T=P[R];let D=!0;for(let X=0;X<f.length;X++)n(T.p,f[X].p)&&(x!==X&&b++,D?(D=!1,u[X].push(T)):d=!0);D&&u[x].push(T)}}b>0&&d===!1&&(m=u)}let p;for(let d=0,b=f.length;d<b;d++){l=f[d].s,c.push(l),p=m[d];for(let x=0,y=p.length;x<y;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Is}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Is);const Io={type:"change"},gs={type:"start"},Uo={type:"end"},hr=new br,No=new fn,Hm=Math.cos(70*Cc.DEG2RAD);class Gm extends Gn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",Ae),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Io),n.update(),s=r.NONE},this.update=function(){const w=new U,ne=new Bn().setFromUnitVectors(e.up,new U(0,1,0)),we=ne.clone().invert(),I=new U,ce=new Bn,V=new U,ae=2*Math.PI;return function(qe=null){const Ze=n.object.position;w.copy(Ze).sub(n.target),w.applyQuaternion(ne),o.setFromVector3(w),n.autoRotate&&s===r.NONE&&Z(_(qe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Je=n.minAzimuthAngle,rt=n.maxAzimuthAngle;isFinite(Je)&&isFinite(rt)&&(Je<-Math.PI?Je+=ae:Je>Math.PI&&(Je-=ae),rt<-Math.PI?rt+=ae:rt>Math.PI&&(rt-=ae),Je<=rt?o.theta=Math.max(Je,Math.min(rt,o.theta)):o.theta=o.theta>(Je+rt)/2?Math.max(Je,o.theta):Math.min(rt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let je=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)o.radius=K(o.radius);else{const $e=o.radius;o.radius=K(o.radius*c),je=$e!=o.radius}if(w.setFromSpherical(o),w.applyQuaternion(we),Ze.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let $e=null;if(n.object.isPerspectiveCamera){const _t=w.length();$e=K(_t*c);const Sn=_t-$e;n.object.position.addScaledVector(y,Sn),n.object.updateMatrixWorld(),je=!!Sn}else if(n.object.isOrthographicCamera){const _t=new U(P.x,P.y,0);_t.unproject(n.object);const Sn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),je=Sn!==n.object.zoom;const Ni=new U(P.x,P.y,0);Ni.unproject(n.object),n.object.position.sub(Ni).add(_t),n.object.updateMatrixWorld(),$e=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$e!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($e).add(n.object.position):(hr.origin.copy(n.object.position),hr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(hr.direction))<Hm?e.lookAt(n.target):(No.setFromNormalAndCoplanarPoint(n.object.up,n.target),hr.intersectPlane(No,n.target))))}else if(n.object.isOrthographicCamera){const $e=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),$e!==n.object.zoom&&(n.object.updateProjectionMatrix(),je=!0)}return c=1,R=!1,je||I.distanceToSquared(n.object.position)>a||8*(1-ce.dot(n.object.quaternion))>a||V.distanceToSquared(n.target)>a?(n.dispatchEvent(Io),I.copy(n.object.position),ce.copy(n.object.quaternion),V.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ie),n.domElement.removeEventListener("pointerdown",ye),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",H),n.domElement.removeEventListener("pointermove",Be),n.domElement.removeEventListener("pointerup",A),n.domElement.getRootNode().removeEventListener("keydown",ee,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ae),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Do,l=new Do;let c=1;const h=new U,u=new ue,f=new ue,m=new ue,v=new ue,M=new ue,p=new ue,d=new ue,b=new ue,x=new ue,y=new U,P=new ue;let R=!1;const T=[],D={};let X=!1;function _(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function S(w){const ne=Math.abs(w*.01);return Math.pow(.95,n.zoomSpeed*ne)}function Z(w){l.theta-=w}function z(w){l.phi-=w}const C=function(){const w=new U;return function(we,I){w.setFromMatrixColumn(I,0),w.multiplyScalar(-we),h.add(w)}}(),k=function(){const w=new U;return function(we,I){n.screenSpacePanning===!0?w.setFromMatrixColumn(I,1):(w.setFromMatrixColumn(I,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(we),h.add(w)}}(),F=function(){const w=new U;return function(we,I){const ce=n.domElement;if(n.object.isPerspectiveCamera){const V=n.object.position;w.copy(V).sub(n.target);let ae=w.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),C(2*we*ae/ce.clientHeight,n.object.matrix),k(2*I*ae/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(we*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),k(I*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(w,ne){if(!n.zoomToCursor)return;R=!0;const we=n.domElement.getBoundingClientRect(),I=w-we.left,ce=ne-we.top,V=we.width,ae=we.height;P.x=I/V*2-1,P.y=-(ce/ae)*2+1,y.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function re(w){u.set(w.clientX,w.clientY)}function fe(w){J(w.clientX,w.clientX),d.set(w.clientX,w.clientY)}function Ce(w){v.set(w.clientX,w.clientY)}function q(w){f.set(w.clientX,w.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;Z(2*Math.PI*m.x/ne.clientHeight),z(2*Math.PI*m.y/ne.clientHeight),u.copy(f),n.update()}function ie(w){b.set(w.clientX,w.clientY),x.subVectors(b,d),x.y>0?O(S(x.y)):x.y<0&&G(S(x.y)),d.copy(b),n.update()}function me(w){M.set(w.clientX,w.clientY),p.subVectors(M,v).multiplyScalar(n.panSpeed),F(p.x,p.y),v.copy(M),n.update()}function be(w){J(w.clientX,w.clientY),w.deltaY<0?G(S(w.deltaY)):w.deltaY>0&&O(S(w.deltaY)),n.update()}function Ee(w){let ne=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),ne=!0;break}ne&&(w.preventDefault(),n.update())}function Me(w){if(T.length===1)u.set(w.pageX,w.pageY);else{const ne=xe(w),we=.5*(w.pageX+ne.x),I=.5*(w.pageY+ne.y);u.set(we,I)}}function Fe(w){if(T.length===1)v.set(w.pageX,w.pageY);else{const ne=xe(w),we=.5*(w.pageX+ne.x),I=.5*(w.pageY+ne.y);v.set(we,I)}}function Le(w){const ne=xe(w),we=w.pageX-ne.x,I=w.pageY-ne.y,ce=Math.sqrt(we*we+I*I);d.set(0,ce)}function L(w){n.enableZoom&&Le(w),n.enablePan&&Fe(w)}function he(w){n.enableZoom&&Le(w),n.enableRotate&&Me(w)}function Q(w){if(T.length==1)f.set(w.pageX,w.pageY);else{const we=xe(w),I=.5*(w.pageX+we.x),ce=.5*(w.pageY+we.y);f.set(I,ce)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;Z(2*Math.PI*m.x/ne.clientHeight),z(2*Math.PI*m.y/ne.clientHeight),u.copy(f)}function le(w){if(T.length===1)M.set(w.pageX,w.pageY);else{const ne=xe(w),we=.5*(w.pageX+ne.x),I=.5*(w.pageY+ne.y);M.set(we,I)}p.subVectors(M,v).multiplyScalar(n.panSpeed),F(p.x,p.y),v.copy(M)}function te(w){const ne=xe(w),we=w.pageX-ne.x,I=w.pageY-ne.y,ce=Math.sqrt(we*we+I*I);b.set(0,ce),x.set(0,Math.pow(b.y/d.y,n.zoomSpeed)),O(x.y),d.copy(b);const V=(w.pageX+ne.x)*.5,ae=(w.pageY+ne.y)*.5;J(V,ae)}function ve(w){n.enableZoom&&te(w),n.enablePan&&le(w)}function ge(w){n.enableZoom&&te(w),n.enableRotate&&Q(w)}function ye(w){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",Be),n.domElement.addEventListener("pointerup",A)),!ze(w)&&(se(w),w.pointerType==="touch"?oe(w):g(w)))}function Be(w){n.enabled!==!1&&(w.pointerType==="touch"?de(w):N(w))}function A(w){switch(Ue(w),T.length){case 0:n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",Be),n.domElement.removeEventListener("pointerup",A),n.dispatchEvent(Uo),s=r.NONE;break;case 1:const ne=T[0],we=D[ne];oe({pointerId:ne,pageX:we.x,pageY:we.y});break}}function g(w){let ne;switch(w.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Vn.DOLLY:if(n.enableZoom===!1)return;fe(w),s=r.DOLLY;break;case Vn.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;Ce(w),s=r.PAN}else{if(n.enableRotate===!1)return;re(w),s=r.ROTATE}break;case Vn.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;re(w),s=r.ROTATE}else{if(n.enablePan===!1)return;Ce(w),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(gs)}function N(w){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;q(w);break;case r.DOLLY:if(n.enableZoom===!1)return;ie(w);break;case r.PAN:if(n.enablePan===!1)return;me(w);break}}function H(w){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(w.preventDefault(),n.dispatchEvent(gs),be($(w)),n.dispatchEvent(Uo))}function $(w){const ne=w.deltaMode,we={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(ne){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return w.ctrlKey&&!X&&(we.deltaY*=10),we}function ee(w){w.key==="Control"&&(X=!0,n.domElement.getRootNode().addEventListener("keyup",Re,{passive:!0,capture:!0}))}function Re(w){w.key==="Control"&&(X=!1,n.domElement.getRootNode().removeEventListener("keyup",Re,{passive:!0,capture:!0}))}function Ae(w){n.enabled===!1||n.enablePan===!1||Ee(w)}function oe(w){switch(Te(w),T.length){case 1:switch(n.touches.ONE){case kn.ROTATE:if(n.enableRotate===!1)return;Me(w),s=r.TOUCH_ROTATE;break;case kn.PAN:if(n.enablePan===!1)return;Fe(w),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(w),s=r.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(w),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(gs)}function de(w){switch(Te(w),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(w),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;le(w),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(w),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(w),n.update();break;default:s=r.NONE}}function Ie(w){n.enabled!==!1&&w.preventDefault()}function se(w){T.push(w.pointerId)}function Ue(w){delete D[w.pointerId];for(let ne=0;ne<T.length;ne++)if(T[ne]==w.pointerId){T.splice(ne,1);return}}function ze(w){for(let ne=0;ne<T.length;ne++)if(T[ne]==w.pointerId)return!0;return!1}function Te(w){let ne=D[w.pointerId];ne===void 0&&(ne=new ue,D[w.pointerId]=ne),ne.set(w.pageX,w.pageY)}function xe(w){const ne=w.pointerId===T[0]?T[1]:T[0];return D[ne]}n.domElement.addEventListener("contextmenu",Ie),n.domElement.addEventListener("pointerdown",ye),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",H,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ee,{passive:!0,capture:!0}),this.update()}}class Vm extends Dm{constructor(e){super(e),this.type=nn}parse(e){const a=function(D,X){switch(D){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(X||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(X||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(X||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(X||""))}},h=`
`,u=function(D,X,_){X=X||1024;let Z=D.pos,z=-1,C=0,k="",F=String.fromCharCode.apply(null,new Uint16Array(D.subarray(Z,Z+128)));for(;0>(z=F.indexOf(h))&&C<X&&Z<D.byteLength;)k+=F,C+=F.length,Z+=128,F+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(Z,Z+128)));return-1<z?(D.pos+=C+z+1,k+F.slice(0,z)):!1},f=function(D){const X=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,Z=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,F;for((D.pos>=D.byteLength||!(k=u(D)))&&a(1,"no header found"),(F=k.match(X))||a(3,"bad initial token"),C.valid|=1,C.programtype=F[1],C.string+=k+`
`;k=u(D),k!==!1;){if(C.string+=k+`
`,k.charAt(0)==="#"){C.comments+=k+`
`;continue}if((F=k.match(_))&&(C.gamma=parseFloat(F[1])),(F=k.match(S))&&(C.exposure=parseFloat(F[1])),(F=k.match(Z))&&(C.valid|=2,C.format=F[1]),(F=k.match(z))&&(C.valid|=4,C.height=parseInt(F[1],10),C.width=parseInt(F[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},m=function(D,X,_){const S=X;if(S<8||S>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);S!==(D[2]<<8|D[3])&&a(3,"wrong scanline width");const Z=new Uint8Array(4*X*_);Z.length||a(4,"unable to allocate buffer space");let z=0,C=0;const k=4*S,F=new Uint8Array(4),O=new Uint8Array(k);let G=_;for(;G>0&&C<D.byteLength;){C+4>D.byteLength&&a(1),F[0]=D[C++],F[1]=D[C++],F[2]=D[C++],F[3]=D[C++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=S)&&a(3,"bad rgbe scanline format");let J=0,K;for(;J<k&&C<D.byteLength;){K=D[C++];const fe=K>128;if(fe&&(K-=128),(K===0||J+K>k)&&a(3,"bad scanline data"),fe){const Ce=D[C++];for(let q=0;q<K;q++)O[J++]=Ce}else O.set(D.subarray(C,C+K),J),J+=K,C+=K}const re=S;for(let fe=0;fe<re;fe++){let Ce=0;Z[z]=O[fe+Ce],Ce+=S,Z[z+1]=O[fe+Ce],Ce+=S,Z[z+2]=O[fe+Ce],Ce+=S,Z[z+3]=O[fe+Ce],z+=4}G--}return Z},v=function(D,X,_,S){const Z=D[X+3],z=Math.pow(2,Z-128)/255;_[S+0]=D[X+0]*z,_[S+1]=D[X+1]*z,_[S+2]=D[X+2]*z,_[S+3]=1},M=function(D,X,_,S){const Z=D[X+3],z=Math.pow(2,Z-128)/255;_[S+0]=Yi.toHalfFloat(Math.min(D[X+0]*z,65504)),_[S+1]=Yi.toHalfFloat(Math.min(D[X+1]*z,65504)),_[S+2]=Yi.toHalfFloat(Math.min(D[X+2]*z,65504)),_[S+3]=Yi.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const d=f(p),b=d.width,x=d.height,y=m(p.subarray(p.pos),b,x);let P,R,T;switch(this.type){case Ft:T=y.length/4;const D=new Float32Array(T*4);for(let _=0;_<T;_++)v(y,_*4,D,_*4);P=D,R=Ft;break;case nn:T=y.length/4;const X=new Uint16Array(T*4);for(let _=0;_<T;_++)M(y,_*4,X,_*4);P=X,R=nn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:x,data:P,header:d.string,gamma:d.gamma,exposure:d.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case Ft:case nn:a.colorSpace=sn,a.minFilter=lt,a.magFilter=lt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}class Fo{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,r=[];let s=0;e.traverse(function(d){if(d.isMesh){const b=d.geometry,x=b.index,y=b.getAttribute("position");s+=x!==null?x.count/3:y.count/3,r.push({object3d:d,geometry:b})}});let a,o=80;if(n===!0){const d=s*2+s*3*4*4+80+4,b=new ArrayBuffer(d);a=new DataView(b),a.setUint32(o,s,!0),o+=4}else a="",a+=`solid exported
`;const l=new U,c=new U,h=new U,u=new U,f=new U,m=new U;for(let d=0,b=r.length;d<b;d++){const x=r[d].object3d,y=r[d].geometry,P=y.index,R=y.getAttribute("position");if(P!==null)for(let T=0;T<P.count;T+=3){const D=P.getX(T+0),X=P.getX(T+1),_=P.getX(T+2);v(D,X,_,R,x)}else for(let T=0;T<R.count;T+=3){const D=T+0,X=T+1,_=T+2;v(D,X,_,R,x)}}return n===!1&&(a+=`endsolid exported
`),a;function v(d,b,x,y,P){l.fromBufferAttribute(y,d),c.fromBufferAttribute(y,b),h.fromBufferAttribute(y,x),P.isSkinnedMesh===!0&&(P.applyBoneTransform(d,l),P.applyBoneTransform(b,c),P.applyBoneTransform(x,h)),l.applyMatrix4(P.matrixWorld),c.applyMatrix4(P.matrixWorld),h.applyMatrix4(P.matrixWorld),M(l,c,h),p(l),p(c),p(h),n===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function M(d,b,x){u.subVectors(x,b),f.subVectors(d,b),u.cross(f).normalize(),m.copy(u).normalize(),n===!0?(a.setFloat32(o,m.x,!0),o+=4,a.setFloat32(o,m.y,!0),o+=4,a.setFloat32(o,m.z,!0),o+=4):(a+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,a+=`		outer loop
`)}function p(d){n===!0?(a.setFloat32(o,d.x,!0),o+=4,a.setFloat32(o,d.y,!0),o+=4,a.setFloat32(o,d.z,!0),o+=4):a+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}class km extends Rr{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Tl(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,r)}parse(e){return new Wm(e)}}class Wm{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=Xm(e,t,this.data);for(let s=0,a=r.length;s<a;s++)n.push(...r[s].toShapes());return n}}function Xm(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const u=qm(h,r,o,l,t);o+=u.offsetX,a.push(u.path)}}return a}function qm(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const a=new zm;let o,l,c,h,u,f,m,v;if(s.o){const M=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,d=M.length;p<d;)switch(M[p++]){case"m":o=M[p++]*e+t,l=M[p++]*e+n,a.moveTo(o,l);break;case"l":o=M[p++]*e+t,l=M[p++]*e+n,a.lineTo(o,l);break;case"q":c=M[p++]*e+t,h=M[p++]*e+n,u=M[p++]*e+t,f=M[p++]*e+n,a.quadraticCurveTo(u,f,c,h);break;case"b":c=M[p++]*e+t,h=M[p++]*e+n,u=M[p++]*e+t,f=M[p++]*e+n,m=M[p++]*e+t,v=M[p++]*e+n,a.bezierCurveTo(u,f,m,v,c,h);break}}return{offsetX:s.ha*e,path:a}}class Ym extends Gs{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const Oo=1.3,jm=1e3,ur={"sterling-silver":{color:15263976,metalness:1,roughness:.1,envMapIntensity:1},"gold-18k":{color:16766720,metalness:1,roughness:.1,envMapIntensity:1}},Zm={polished:{roughness:.1},brushed:{roughness:.3},matte:{roughness:.7}};let Ct=null;function ai(i,e="success"){const t=document.getElementById("notification"),n=document.getElementById("notification-content"),r=document.getElementById("notification-close");n.innerHTML=i,t.style.background=e==="success"?"#4CAF50":"#f44336",t.style.display="block",setTimeout(()=>{t.style.display="none"},e==="success"?1e4:5e3),r.onclick=()=>{t.style.display="none"}}async function Bo(i){try{const e=new FormData;e.append("image",i);const t=await fetch("http://localhost:3001/api/upload-image",{method:"POST",body:e});if(t.ok){const n=await t.json();return console.log("Image uploaded successfully:",n),n}else throw new Error("Failed to upload image")}catch(e){return console.error("Error uploading image:",e),ai("Failed to upload image to server","error"),null}}function Km(i){let e=null;function t(){const s=i.cropper.querySelector(".cropper-crop-box");if(!s)return;let a=s.querySelector(".circle-crop-overlay");a&&a.remove();const o=s.offsetWidth,l=s.offsetHeight;a=document.createElementNS("http://www.w3.org/2000/svg","svg"),a.classList.add("circle-crop-overlay"),a.setAttribute("width",o),a.setAttribute("height",l),a.style.position="absolute",a.style.left="0",a.style.top="0",a.style.width="100%",a.style.height="100%",a.style.pointerEvents="none",a.style.zIndex="20";const c=document.createElementNS("http://www.w3.org/2000/svg","ellipse");c.setAttribute("cx",o/2),c.setAttribute("cy",l/2),c.setAttribute("rx",o/2-3),c.setAttribute("ry",l/2-3),c.setAttribute("fill","none"),c.setAttribute("stroke","white"),c.setAttribute("stroke-width","7"),c.setAttribute("stroke-dasharray","0"),c.setAttribute("opacity","0.8"),a.appendChild(c);const h=document.createElementNS("http://www.w3.org/2000/svg","ellipse");h.setAttribute("cx",o/2),h.setAttribute("cy",l/2),h.setAttribute("rx",o/2-3),h.setAttribute("ry",l/2-3),h.setAttribute("fill","none"),h.setAttribute("stroke","#4af"),h.setAttribute("stroke-width","5"),h.setAttribute("stroke-dasharray","10,8"),h.setAttribute("opacity","1"),a.appendChild(h),s.appendChild(a)}t();const n=i.cropper;n.addEventListener("crop",t),n.addEventListener("cropmove",t),n.addEventListener("cropend",t),n._ellipseUpdateEllipse=t;const r=i.cropper.querySelector(".cropper-crop-box");r&&(e=new MutationObserver(()=>{t()}),e.observe(r,{attributes:!0,attributeFilter:["style","class"]}),r._ellipseObserver=e)}function _s(i,e,t,n){const r=document.getElementById("cropper-modal"),s=document.getElementById("cropper-image"),a=document.getElementById("cropper-confirm"),o=document.getElementById("cropper-cancel");s.src=i,r.style.display="flex",Ct&&(Ct.destroy(),Ct=null),Ct=new Cropper(s,{viewMode:1,aspectRatio:n==="circle"?1:NaN,autoCropArea:1,movable:!0,zoomable:!0,scalable:!0,rotatable:!1,ready(){n==="circle"&&Km(Ct)}}),a.onclick=()=>{if(n==="circle"){const l=Ct.getCroppedCanvas(),c=Math.min(l.width,l.height),h=document.createElement("canvas");h.width=c,h.height=c;const u=h.getContext("2d");u.save(),u.beginPath(),u.arc(c/2,c/2,c/2,0,2*Math.PI),u.closePath(),u.clip(),u.drawImage(l,0,0,c,c,0,0,c,c),u.restore(),h.toBlob(f=>{r.style.display="none",Ct.destroy(),Ct=null,e(f)})}else Ct.getCroppedCanvas().toBlob(l=>{r.style.display="none",Ct.destroy(),Ct=null,e(l)})},o.onclick=()=>{r.style.display="none",Ct.destroy(),Ct=null}}function Jm(){const i=document.getElementById("loading-overlay"),e=document.getElementById("loading-status"),t=document.getElementById("loading-progress-bar");i.style.display="flex",e.textContent="Analyzing image...",t.style.width="0%",[{t:0,text:"Analyzing image...",pct:10},{t:1200,text:"Detecting features...",pct:30},{t:2500,text:"Processing image...",pct:55},{t:4e3,text:"Generating 3D Geometries...",pct:80},{t:6e3,text:"Finalizing model...",pct:100}].forEach(r=>{setTimeout(()=>{e.textContent=r.text,t.style.width=r.pct+"%"},r.t)})}function $m(){document.getElementById("loading-overlay").style.display="none"}const Qm={helvetiker:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/helvetiker_regular.typeface.json",optimer:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/optimer_regular.typeface.json",gentilis:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/gentilis_regular.typeface.json",droid_sans:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/droid_sans_regular.typeface.json",droid_serif:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/droid_serif_regular.typeface.json"};class eg{constructor(){this.scene=new _o,this.camera=new Lt(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new ws({antialias:!0}),this.controls=null,this.heightfield=null,this.jumpring=null,this.directionalLight=null,this.currentObjectType="circular-pendant",this.imageTransform={offsetX:0,offsetY:0,scale:1,rotation:0},this.pendantDiameter=25,this.pendantWidth=25,this.pendantHeight=25,this.aspectLocked=!0,this.grid=null,this.envMapLoaded=!1,this.defaultCameraPosition=new U(0,0,50),this.jumpringOffset={x:0,y:-3.5,z:-15},this.pendantThickness=1.5,this.borderThickness=1,this.engravingMesh=null,this.engravingFont=null,this.engravingFontName="helvetiker",this.engravingFontCache={},this.init(),this.setupEventListeners(),this.setupUIControls(),this.addViewCube(),this.loadEngravingFont(this.engravingFontName)}init(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(3355443),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.toneMapping=Go,this.renderer.toneMappingExposure=1,document.getElementById("canvas-container").appendChild(this.renderer.domElement),this.camera.position.set(0,0,50),this.camera.lookAt(0,0,0),this.controls=new Gm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,new Vm().load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr",n=>{n.mapping=gr,this.scene.environment=n,this.envMapLoaded=!0,this.updateEnvMapStatus(),this.heightfield&&(this.heightfield.material.metalness=1,this.heightfield.material.roughness=.1,this.heightfield.material.envMapIntensity=1)},void 0,n=>{this.envMapLoaded=!1,this.updateEnvMapStatus(),this.heightfield&&(this.heightfield.material.metalness=.2,this.heightfield.material.roughness=.7,this.heightfield.material.envMapIntensity=0),console.warn("HDRI environment map failed to load. Falling back to non-metallic material.")});const t=new Fm(16777215,.5);this.scene.add(t),this.directionalLight=new Nm(16777215,.8),this.directionalLight.position.set(1,1,1),this.scene.add(this.directionalLight),this.animate()}setupEventListeners(){const e=document.getElementById("drop-zone"),t=document.getElementById("file-input");e.addEventListener("dragover",n=>{n.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",n=>{n.preventDefault(),e.classList.remove("dragover");const r=n.dataTransfer.files[0];if(r&&r.type.startsWith("image/")){Bo(r);const s=new FileReader;s.onload=a=>{this.originalImageDataUrl=a.target.result,_s(a.target.result,o=>{this.processImage(o)},null,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?"circle":"rect")},s.readAsDataURL(r)}}),t.addEventListener("change",n=>{const r=n.target.files[0];if(r){Bo(r);const s=new FileReader;s.onload=a=>{this.originalImageDataUrl=a.target.result,_s(a.target.result,o=>{this.processImage(o)},null,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?"circle":"rect")},s.readAsDataURL(r)}}),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}setupUIControls(){document.querySelectorAll(".menu-header").forEach(_=>{_.addEventListener("click",()=>{const S=_.nextElementSibling;S.classList.toggle("active");const Z=_.querySelector(".toggle-button");Z.textContent=S.classList.contains("active")?"▼":"▶"})}),document.getElementById("object-type").addEventListener("change",_=>{this.currentObjectType=_.target.value,this.originalImageDataUrl?_s(this.originalImageDataUrl,S=>{this.processImage(S)},null,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?"circle":"rect"):this.heightfield&&this.updateObjectShape()}),document.getElementById("fov").addEventListener("input",_=>{this.camera.fov=parseFloat(_.target.value),this.camera.updateProjectionMatrix()}),document.getElementById("camera-distance").addEventListener("input",_=>{const S=parseFloat(_.target.value),Z=new U;this.camera.getWorldDirection(Z),this.camera.position.copy(this.controls.target).add(Z.multiplyScalar(-S))});const e=document.getElementById("rotate-toggle");this.isRotating=!1,e&&e.addEventListener("change",_=>{this.isRotating=e.checked}),document.getElementById("light-intensity").addEventListener("input",_=>{this.directionalLight.intensity=parseFloat(_.target.value)}),document.getElementById("material-color").addEventListener("input",_=>{this.heightfield&&this.heightfield.material.color.set(_.target.value)}),document.getElementById("material-shine").addEventListener("input",_=>{this.heightfield&&(this.heightfield.material.shininess=parseFloat(_.target.value))}),document.getElementById("image-offset-x").addEventListener("input",_=>{this.imageTransform.offsetX=parseFloat(_.target.value),this.updateImagePosition()}),document.getElementById("image-offset-y").addEventListener("input",_=>{this.imageTransform.offsetY=parseFloat(_.target.value),this.updateImagePosition()}),document.getElementById("image-scale").addEventListener("input",_=>{this.imageTransform.scale=parseFloat(_.target.value),this.updateImagePosition()}),document.getElementById("image-rotation").addEventListener("input",_=>{this.imageTransform.rotation=parseFloat(_.target.value),this.updateImagePosition()}),document.getElementById("metal-type").addEventListener("change",_=>{this.updateMetalMaterial(_.target.value)}),document.getElementById("metal-finish").addEventListener("change",_=>{this.updateMetalFinish(_.target.value)}),document.getElementById("jumpring-size").addEventListener("change",_=>{this.updateJumpring(_.target.value)}),document.getElementById("jumpring-position").addEventListener("change",_=>{this.updateJumpringPosition(_.target.value)}),document.getElementById("ambient-intensity").addEventListener("input",_=>{this.scene&&this.scene.children&&this.scene.children.forEach(S=>{S.isAmbientLight&&(S.intensity=parseFloat(_.target.value))})}),document.getElementById("directional-intensity").addEventListener("input",_=>{this.directionalLight&&(this.directionalLight.intensity=parseFloat(_.target.value))});const t=document.getElementById("pendant-diameter"),n=document.getElementById("pendant-width"),r=document.getElementById("pendant-height"),s=document.getElementById("aspect-lock"),a=document.getElementById("aspect-lock-icon"),o=document.getElementById("pendant-diameter-value"),l=document.getElementById("pendant-width-value"),c=document.getElementById("pendant-height-value"),h=()=>{o.textContent=t.value+" mm",l.textContent=n.value+" mm",c.textContent=r.value+" mm"};t.addEventListener("input",_=>{if(this.pendantDiameter=parseFloat(_.target.value),this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"){const S=-.6*this.pendantDiameter;document.getElementById("jumpring-z").value=S,document.getElementById("jumpring-z-value").textContent=S,this.jumpringOffset.z=S,this.createHeightfieldMesh(this.heightfieldData)}h()}),n.addEventListener("input",h),r.addEventListener("input",h),h(),s.addEventListener("click",()=>{this.aspectLocked=!this.aspectLocked,a.textContent=this.aspectLocked?"🔒":"🔓"}),document.getElementById("reset-view").addEventListener("click",()=>{this.camera.position.copy(this.defaultCameraPosition),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}),document.getElementById("screenshot").addEventListener("click",()=>{this.renderer.render(this.scene,this.camera);const _=this.renderer.domElement.toDataURL("image/png"),S=document.createElement("a");S.href=_,S.download="pendant.png",S.click()});const u=document.getElementById("border-thickness"),f=document.getElementById("border-thickness-value"),m=()=>{f.textContent=u.value};u.addEventListener("input",_=>{this.borderThickness=parseFloat(_.target.value),m(),this.heightfieldData&&this.currentObjectType==="circular-pendant"&&this.createHeightfieldMesh(this.heightfieldData)}),m();const v=document.getElementById("export-stl");v&&(v.textContent="Submit Order",v.removeEventListener("click",this.exportSTL),v.addEventListener("click",async()=>{const _=prompt("Enter your name:");if(!_)return ai("Name is required.","error");const S=prompt("Enter your email:");if(!S)return ai("Email is required.","error");const Z=new Fo,z=new ci;this.heightfield&&z.add(this.heightfield.clone()),this.jumpring&&z.add(this.jumpring.clone());const C=Z.parse(z);try{const k=await fetch("http://localhost:3001/api/submit-order",{method:"POST",headers:{},body:(()=>{const F=new FormData;return F.append("name",_),F.append("email",S),F.append("file",new Blob([C],{type:"text/plain"}),"pendant.stl"),F})()});if(k.ok){const O=(await k.json()).guid;ai(`<h3>🎉 Model uploaded successfully!</h3>
                            <p>Your order has been submitted and saved to the repository.</p>
                            <p><strong>Confirmation Number:</strong> <code style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:3px;">${O}</code></p>
                            <p>Please save this confirmation number for your records.</p>`,"success")}else{const F=await k.json();ai(`Failed to submit order: ${F.error||"Unknown error"}`,"error")}}catch(k){console.error("Submit order error:",k),ai("Error submitting order. Please check your connection and try again.","error")}})),document.getElementById("highlight-layer-color").addEventListener("input",_=>{this.redLayer&&this.redLayer.material.color.set(_.target.value)});const p=document.getElementById("antiquing-amount"),d=document.getElementById("antiquing-amount-value");p.addEventListener("input",_=>{d.textContent=_.target.value,this.heightfieldData&&this.createHeightfieldMesh(this.heightfieldData)});const b=document.getElementById("engraving-text"),x=document.getElementById("engraving-char-count");b.addEventListener("input",_=>{x.textContent=_.target.value.length,this.updateEngraving(_.target.value)});const y=document.getElementById("engraving-font"),P=document.getElementById("engraving-size"),R=document.getElementById("engraving-size-value"),T=document.getElementById("engraving-bold"),D=document.getElementById("engraving-italic"),X=document.getElementById("engraving-justify");y.addEventListener("change",_=>{this.engravingFontName=_.target.value,this.loadEngravingFont(this.engravingFontName,()=>{this.updateEngraving(b.value)})}),P.addEventListener("input",_=>{R.textContent=_.target.value,this.updateEngraving(b.value)}),T.addEventListener("change",()=>this.updateEngraving(b.value)),D.addEventListener("change",()=>this.updateEngraving(b.value)),X.addEventListener("change",()=>this.updateEngraving(b.value))}async processImage(e){Jm(),setTimeout(async()=>{const t=await this.loadImage(e),n=this.generateHeightfieldData(t);this.createHeightfieldMesh(n),document.getElementById("drop-zone").classList.add("hidden"),$m()},7e3)}loadImage(e){return new Promise(t=>{const n=new FileReader;n.onload=r=>{const s=new Image;s.onload=()=>t(s),s.src=r.target.result},n.readAsDataURL(e)})}generateHeightfieldData(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=e.height/e.width,s=jm,a=Math.round(s*r);t.width=s,t.height=a,n.drawImage(e,0,0,s,a);const o=n.getImageData(0,0,s,a);return{width:s,height:a,data:o.data,aspectRatio:r}}createHeightfieldMesh(e){var v,M,p,d,b,x,y;let t=null,n=null;switch(this.redLayer&&(console.log("Removing red layer"),this.scene.remove(this.redLayer),this.redLayer.geometry.dispose(),this.redLayer.material.dispose(),this.redLayer=null),this.heightfieldData=e,this.heightfield&&this.scene.remove(this.heightfield),this.grid&&this.scene.remove(this.grid),e.aspectRatio,this.currentObjectType){case"circular-pendant":this.heightfield&&this.scene.remove(this.heightfield),this.bottomDisc&&this.scene.remove(this.bottomDisc),this.sideWall&&this.scene.remove(this.sideWall),this.heightfield=null,this.bottomDisc=null,this.sideWall=null;const P=this.pendantDiameter,R=P/2,T=e.width-1,D=e.height-1,X=this.pendantThickness,_=[],S=[],Z=(g,N)=>N*(T+1)+g,z=[];for(let g=0;g<=D;++g)for(let N=0;N<=T;++N){const H=(N/T-.5)*P,$=(g/D-.5)*P,ee=Math.sqrt(H*H+$*$);let Re=0,Ae=(H/R+1)/2,oe=($/R+1)/2;if(ee<=R){const de=Math.floor(Ae*(e.width-1)),se=((e.height-1-Math.floor(oe*(e.height-1)))*e.width+de)*4;Re=(e.data[se]*.299+e.data[se+1]*.587+e.data[se+2]*.114)/255*Oo}z.push({px:H,py:$,z:Re,u:Ae,v:oe,inCircle:ee<=R})}const C=new Array(z.length).fill(-1);let k=0;for(let g=0;g<z.length;++g)z[g].inCircle&&(_.push(z[g].px,z[g].py,z[g].z),S.push(z[g].u,z[g].v),C[g]=k++);const F=[];for(let g=0;g<D;++g)for(let N=0;N<T;++N){const H=Z(N,g),$=Z(N+1,g),ee=Z(N,g+1),Re=Z(N+1,g+1);z[H].inCircle&&z[$].inCircle&&z[ee].inCircle&&F.push(C[H],C[$],C[ee]),z[$].inCircle&&z[Re].inCircle&&z[ee].inCircle&&F.push(C[$],C[Re],C[ee])}const O=[];for(let g=0;g<=D;++g)for(let N=0;N<=T;++N){const H=g*(T+1)+N;z[H].inCircle&&[Z(N-1,g),Z(N+1,g),Z(N,g-1),Z(N,g+1)].some(ee=>ee<0||ee>=z.length||!z[ee]||!z[ee].inCircle)&&O.push({x:z[H].px,y:z[H].py,z:z[H].z})}O.sort((g,N)=>{const H=Math.atan2(g.y,g.x),$=Math.atan2(N.y,N.x);return H-$});const G=[..._],J=[...S],K=[...F],re=G.length/3;G.push(0,0,-X),J.push(.5,.5);for(let g=0;g<O.length;++g)G.push(O[g].x,O[g].y,-X),J.push((O[g].x/R+1)/2,(O[g].y/R+1)/2);for(let g=1;g<=O.length;++g){const N=re,H=re+g,$=re+(g<O.length?g+1:1);K.push(N,H,$)}const fe=G.length/3;for(let g=0;g<O.length;++g){const N=O[g].x,H=O[g].y,$=O[g].z,ee=O[(g+1)%O.length].x,Re=O[(g+1)%O.length].y,Ae=O[(g+1)%O.length].z,oe=N,de=H,Ie=-X,se=ee,Ue=Re,ze=-X;G.push(N,H,$),G.push(ee,Re,Ae),G.push(oe,de,Ie),G.push(se,Ue,ze),J.push(0,0,0,0,0,0,0,0);const Te=fe+g*4;K.push(Te,Te+2,Te+1),K.push(Te+1,Te+2,Te+3)}const Ce=G.length/3,q=this.borderThickness;let ie=-1/0;for(let g=0;g<z.length;++g)z[g].inCircle&&z[g].z>ie&&(ie=z[g].z);const me=ie+.6;for(let g=0;g<O.length;++g){const N=(g+1)%O.length,H=O[g].x,$=O[g].y,ee=Math.sqrt(H*H+$*$),Re=H/ee,Ae=$/ee,oe=O[g].x+Re*q,de=O[g].y+Ae*q,Ie=O[N].x+O[N].x/Math.sqrt(O[N].x**2+O[N].y**2)*q,se=O[N].y+O[N].y/Math.sqrt(O[N].x**2+O[N].y**2)*q;G.push(O[g].x,O[g].y,me),G.push(O[N].x,O[N].y,me),G.push(oe,de,me),G.push(Ie,se,me),G.push(O[g].x,O[g].y,-X),G.push(O[N].x,O[N].y,-X),G.push(oe,de,-X),G.push(Ie,se,-X),J.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Ue=Ce+g*8;K.push(Ue+2,Ue+3,Ue+0),K.push(Ue+3,Ue+1,Ue+0),K.push(Ue+4,Ue+6,Ue+5),K.push(Ue+5,Ue+6,Ue+7),K.push(Ue+2,Ue+6,Ue+3),K.push(Ue+3,Ue+6,Ue+7),K.push(Ue+0,Ue+1,Ue+4),K.push(Ue+1,Ue+5,Ue+4)}const be=[],Ee=[];for(let g=0;g<O.length;++g){const N=(g+1)%O.length,H=O[g].x,$=O[g].y,ee=O[g].z,Re=O[N].x,Ae=O[N].y,oe=O[N].z,de=H,Ie=$,se=me,Ue=Re,ze=Ae,Te=me,xe=be.length/3;be.push(H,$,ee,Re,Ae,oe,de,Ie,se,Ue,ze,Te),Ee.push(xe,xe+1,xe+2,xe+1,xe+3,xe+2)}const Me=be.length/3;be.push(0,0,me);for(let g=0;g<O.length;++g)be.push(O[g].x,O[g].y,me);for(let g=1;g<=O.length;++g){const N=Me,H=Me+g,$=Me+(g<O.length?g+1:1);Ee.push(N,H,$)}const Fe=new Dt;Fe.setAttribute("position",new at(be,3)),Fe.setIndex(Ee),Fe.computeVertexNormals();const Le=((v=document.getElementById("highlight-layer-color"))==null?void 0:v.value)||"#ff0000",L=new Ci({color:Le,transparent:!0,opacity:.35,metalness:0,roughness:.7,side:Nt,depthWrite:!1}),he=new Et(Fe,L);he.rotation.x=-Math.PI/2,this.scene.add(he),this.redLayer=he;let Q=1/0,le=-1/0,te=[];for(let g=2;g<G.length;g+=3)G[g]<Q&&(Q=G[g]),G[g]>le&&(le=G[g]);const ve=parseFloat(((M=document.getElementById("antiquing-amount"))==null?void 0:M.value)||.5);for(let g=2;g<G.length;g+=3){const H=(G[g]-Q)/(le-Q+1e-6),$=.15+(1-.15)*((1-ve)*H+ve*(1-H));te.push($,$,$)}n=new Dt,n.setAttribute("position",new at(G,3)),n.setAttribute("uv",new at(J,2)),n.setAttribute("color",new at(te,3)),n.setIndex(K),n.computeVertexNormals();const ge=new Ci({color:ur["sterling-silver"].color,metalness:this.envMapLoaded?1:.2,roughness:this.envMapLoaded?.1:.7,side:Nt,envMapIntensity:this.envMapLoaded?1:0,transparent:!!t,alphaMap:t,alphaTest:t?.5:0,vertexColors:!0}),ye=new Et(n,ge);ye.rotation.x=-Math.PI/2,this.scene.add(ye),this.heightfield=ye,this.createJumpring("small"),this.updateJumpringPosition();const Be=((p=document.getElementById("metal-type"))==null?void 0:p.value)||"sterling-silver";this.updateMetalMaterial(Be),console.log("Adding red layer"),console.log("Scene children:",this.scene.children.length);const A=((d=document.getElementById("engraving-text"))==null?void 0:d.value)||"";this.updateEngraving(A),this.heightfield.material.transparent=!0,this.heightfield.material.opacity=.5;return;case"rectangular-pendant":n=new Fn(this.pendantWidth,this.pendantHeight,e.width-1,e.height-1);break;case"circular-stud":n=new Fn(this.pendantDiameter/2,this.pendantDiameter/2,e.width-1,e.height-1);break;case"bracelet":n=new Fn(this.pendantWidth*.8,this.pendantHeight,e.width-1,e.height-1);break}if(!n)return;const r=n.attributes.position.array,s=n.attributes.uv.array;for(let P=0;P<r.length;P+=3){let R,T;if(this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"){const Z=r[P],z=r[P+1],C=this.currentObjectType==="circular-pendant"?this.pendantDiameter/2:this.pendantDiameter/4;if(R=(Z/(this.pendantDiameter/2)+1)/2,T=(z/(this.pendantDiameter/2)+1)/2,Math.sqrt(Z*Z+z*z)>C){r[P+2]=0;continue}}else R=s[P/3*2],T=s[P/3*2+1];const D=Math.floor(R*(e.width-1)),_=((e.height-1-Math.floor(T*(e.height-1)))*e.width+D)*4,S=(e.data[_]*.299+e.data[_+1]*.587+e.data[_+2]*.114)/255;r[P+2]=S*Oo}if(n.computeVertexNormals(),this.currentObjectType==="circular-pendant"){const R=document.createElement("canvas");R.width=512,R.height=512;const T=R.getContext("2d");T.fillStyle="black",T.fillRect(0,0,512,512),T.beginPath(),T.arc(512/2,512/2,512/2,0,Math.PI*2),T.closePath(),T.fillStyle="white",T.fill(),t=new Kp(R)}let a=1/0,o=-1/0,l=[];for(let P=2;P<r.length;P+=3)r[P]<a&&(a=r[P]),r[P]>o&&(o=r[P]);const c=parseFloat(((b=document.getElementById("antiquing-amount"))==null?void 0:b.value)||.5);for(let P=2;P<r.length;P+=3){const T=(r[P]-a)/(o-a+1e-6),D=.15+(1-.15)*((1-c)*T+c*(1-T));l.push(D,D,D)}n.setAttribute("color",new at(l,3));const h=new Ci({color:ur["sterling-silver"].color,metalness:this.envMapLoaded?1:.2,roughness:this.envMapLoaded?.1:.7,side:Nt,envMapIntensity:this.envMapLoaded?1:0,transparent:!!t,alphaMap:t,alphaTest:t?.5:0,vertexColors:!0}),u=new Et(n,h);u.rotation.x=-Math.PI/2,this.scene.add(u),this.heightfield=u,this.createJumpring("small"),this.updateJumpringPosition();const f=((x=document.getElementById("metal-type"))==null?void 0:x.value)||"sterling-silver";this.updateMetalMaterial(f),console.log("Adding red layer"),console.log("Scene children:",this.scene.children.length);const m=((y=document.getElementById("engraving-text"))==null?void 0:y.value)||"";this.updateEngraving(m),this.heightfield.material.transparent=!0,this.heightfield.material.opacity=.5}updateObjectShape(){this.heightfield&&this.createHeightfieldMesh(this.heightfieldData)}fitCameraToObject(e){const t=new zn().setFromObject(e),n=t.getCenter(new U),r=t.getSize(new U),s=Math.max(r.x,r.y,r.z),a=this.camera.fov*(Math.PI/180);let o=Math.abs(s/Math.sin(a/2));this.camera.position.set(n.x,n.y,n.z+o*1.5),this.camera.lookAt(n),this.controls.target.copy(n),this.controls.update()}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.isRotating&&this.heightfield){let e=0,t=0;this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?(e=-this.pendantDiameter/2,t=0):(e=-this.pendantHeight/2,t=0);const n=.01;this.heightfield.position.y=-e,this.heightfield.position.z=-t,this.heightfield.rotateY(n),this.heightfield.position.y=0,this.heightfield.position.z=0,this.jumpring&&(this.jumpring.position.y-=e,this.jumpring.position.z-=t,this.jumpring.rotation.y=this.heightfield.rotation.y,this.jumpring.position.y+=e,this.jumpring.position.z+=t),this.engravingMesh&&(this.engravingMesh.position.y-=e,this.engravingMesh.position.z-=t,this.engravingMesh.rotation.y=this.heightfield.rotation.y,this.engravingMesh.position.y+=e,this.engravingMesh.position.z+=t),this.redLayer&&(this.redLayer.position.y=0,this.redLayer.position.z=0,this.redLayer.rotation.y=this.heightfield.rotation.y)}this.controls.update(),this.renderer.render(this.scene,this.camera),this.cube&&this.cubeRenderer&&this.cubeScene&&this.cubeCamera&&(this.cube.quaternion.copy(this.camera.quaternion),this.cubeRenderer.render(this.cubeScene,this.cubeCamera))}updateImagePosition(){if(!this.heightfield)return;const e=this.heightfield.geometry,t=e.attributes.position.array,n=e.attributes.uv.array;this.heightfieldData.aspectRatio;for(let r=0;r<t.length;r+=3){let s=t[r],a=t[r+1];const o=this.imageTransform.rotation*Math.PI/180,l=Math.cos(o),c=Math.sin(o);s*=this.imageTransform.scale,a*=this.imageTransform.scale;const h=s*l-a*c,u=s*c+a*l;if(s=h,a=u,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"){const f=this.currentObjectType==="circular-pendant"?this.pendantDiameter/2:this.pendantDiameter/4;s+=this.imageTransform.offsetX*f,a+=this.imageTransform.offsetY*f}else s+=this.imageTransform.offsetX*this.pendantWidth,a+=this.imageTransform.offsetY*this.pendantHeight;if(t[r]=s,t[r+1]=a,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"){const f=this.currentObjectType==="circular-pendant"?this.pendantDiameter/2:this.pendantDiameter/4;n[r/3*2]=(s/f+1)/2,n[r/3*2+1]=(a/f+1)/2}}e.attributes.position.needsUpdate=!0,e.attributes.uv.needsUpdate=!0,e.computeVertexNormals()}updateMetalMaterial(e){if(!this.heightfield)return;const t=ur[e];this.heightfield.material.color.set(t.color),this.heightfield.material.metalness=t.metalness,this.heightfield.material.roughness=t.roughness,this.heightfield.material.envMapIntensity=t.envMapIntensity,this.jumpring&&(this.jumpring.material.color.set(t.color),this.jumpring.material.metalness=t.metalness,this.jumpring.material.roughness=t.roughness,this.jumpring.material.envMapIntensity=t.envMapIntensity)}updateMetalFinish(e){if(!this.heightfield)return;const t=Zm[e];this.heightfield.material.roughness=t.roughness,this.jumpring&&(this.jumpring.material.roughness=t.roughness)}createJumpring(e){this.jumpring&&this.scene.remove(this.jumpring);const t={small:2,medium:3,large:4}[e],n=new Vs(t,.5,16,32),r=new Ci({color:ur["sterling-silver"].color,metalness:1,roughness:.1,envMapIntensity:1});this.jumpring=new Et(n,r),this.scene.add(this.jumpring),console.log("Creating jumpring")}updateJumpring(e){this.createJumpring(e)}updateJumpringPosition(){if(!this.jumpring||!this.heightfield)return;const e=new zn().setFromObject(this.heightfield),t=e.getSize(new U),n=e.getCenter(new U);let r=n.x,s=n.y+t.y/2+2-3.5,a=n.z+-.6*this.pendantDiameter;this.jumpring.position.set(r,s,a),this.jumpring.rotation.set(Math.PI/2,0,0)}addScaleGrid(){this.grid&&this.scene.remove(this.grid);let e=60,t=60;this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?(e=Math.ceil(this.pendantDiameter*1.2),t=e):(e=Math.ceil(Math.max(this.pendantWidth,this.pendantHeight)*1.2),t=e);const n=new Bm(e,t,16777215,8947848);n.position.y=-.7,n.material.opacity=.5,n.material.transparent=!0,this.grid=n,this.scene.add(this.grid)}updateEnvMapStatus(){const e=document.getElementById("envmap-status");e&&(this.envMapLoaded?(e.textContent="Environment map loaded: metals will look realistic.",e.style.background="rgba(40,180,40,0.9)"):(e.textContent="Environment map missing: metals will look dull. Place px.jpg, nx.jpg, ... in /public.",e.style.background="rgba(200,60,60,0.9)"),e.style.display="block")}addViewCube(){this.cubeScene=new _o,this.cubeCamera=new Lt(50,1,.1,10),this.cubeCamera.position.set(2,2,2),this.cubeCamera.lookAt(0,0,0);const e=new Et(new Mi(1,1,1),[new dn({color:16729156}),new dn({color:4474111}),new dn({color:4521796}),new dn({color:16729343}),new dn({color:16777028}),new dn({color:4521983})]);this.cube=e,this.cubeScene.add(e),this.cubeRenderer=new ws({alpha:!0}),this.cubeRenderer.setSize(240,240),this.cubeRenderer.setClearColor(0,0),this.cubeRenderer.domElement.style.position="absolute",this.cubeRenderer.domElement.style.top="20px",this.cubeRenderer.domElement.style.left="20px",this.cubeRenderer.domElement.style.zIndex="2001",document.body.appendChild(this.cubeRenderer.domElement),this.cubeRaycaster=new Om,this.cubePointer=new ue,this.cubeRenderer.domElement.addEventListener("pointerdown",t=>{const n=this.cubeRenderer.domElement.getBoundingClientRect();this.cubePointer.x=(t.clientX-n.left)/n.width*2-1,this.cubePointer.y=-((t.clientY-n.top)/n.height)*2+1,this.cubeRaycaster.setFromCamera(this.cubePointer,this.cubeCamera);const r=this.cubeRaycaster.intersectObject(this.cube,!0);if(r.length>0){const s=Math.floor(r[0].faceIndex/2);this.setCameraToCubeFace(s)}})}setCameraToCubeFace(e){let n={x:0,y:0,z:0};switch(e){case 0:n={x:50,y:0,z:0};break;case 1:n={x:-50,y:0,z:0};break;case 2:n={x:0,y:50,z:0};break;case 3:n={x:0,y:-50,z:0};break;case 4:n={x:0,y:0,z:50};break;case 5:n={x:0,y:0,z:-50};break;default:n={x:50,y:50,z:50};break}this.camera.position.set(n.x,n.y,n.z),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}exportSTL(){const e=new Fo,t=new ci;this.heightfield&&t.add(this.heightfield.clone()),this.jumpring&&t.add(this.jumpring.clone());const n=e.parse(t),r=new Blob([n],{type:"text/plain"}),s=document.createElement("a");s.style.display="none",document.body.appendChild(s),s.href=URL.createObjectURL(r),s.download="pendant.stl",s.click(),document.body.removeChild(s)}loadEngravingFont(e,t){if(this.engravingFontCache[e]){this.engravingFont=this.engravingFontCache[e],t&&t();return}new km().load(Qm[e],r=>{this.engravingFontCache[e]=r,this.engravingFont=r,t&&t()})}updateEngraving(e){var m,v,M,p;if(this.engravingMesh&&(this.scene.remove(this.engravingMesh),this.engravingMesh.geometry.dispose(),this.engravingMesh.material.dispose(),this.engravingMesh=null),!this.engravingFont||!e.trim())return;const t=parseFloat(((m=document.getElementById("engraving-size"))==null?void 0:m.value)||5),n=(v=document.getElementById("engraving-bold"))==null?void 0:v.checked,r=(M=document.getElementById("engraving-italic"))==null?void 0:M.checked,s=((p=document.getElementById("engraving-justify"))==null?void 0:p.value)||"center",a=n?1:.5,o=new Ym(e,{font:this.engravingFont,size:t,height:a,curveSegments:8,bevelEnabled:!1});o.computeBoundingBox();const l=o.boundingBox;let c=0;s==="center"?c=-.5*(l.max.x-l.min.x):s==="right"&&(c=-(l.max.x-l.min.x));const h=-.5*(l.max.y-l.min.y);o.translate(c,h,0),r&&o.applyMatrix4(new et().set(1,.3,0,0,0,1,0,0,0,0,1,0,0,0,0,1));const u=new Ci({color:1118481,metalness:.3,roughness:.7}),f=new Et(o,u);f.position.set(0,0,-this.pendantThickness-.1),f.rotation.x=Math.PI/2,f.rotation.z=Math.PI,this.scene.add(f),this.engravingMesh=f,console.log("Engraving mesh created and added to scene"),console.log("Engraving mesh position:",f.position,"rotation:",f.rotation)}}new eg;
