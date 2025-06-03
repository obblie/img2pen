(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="162",MOUSE={ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",LinearDisplayP3ColorSpace="display-p3-linear",LinearTransfer="linear",SRGBTransfer="srgb",Rec709Primaries="rec709",P3Primaries="p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035,WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]).toLowerCase()}function clamp(i,e,t){return Math.max(e,Math.min(t,i))}function euclideanModulo(i,e){return(i%e+e)%e}function lerp(i,e,t){return(1-t)*i+t*e}function isPowerOfTwo(i){return(i&i-1)===0&&i!==0}function floorPowerOfTwo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function denormalize(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function normalize(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD};class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,t,n,r,s,a,o,l,c){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],y=r[0],p=r[3],f=r[6],E=r[1],v=r[4],M=r[7],P=r[2],R=r[5],w=r[8];return s[0]=a*y+o*E+l*P,s[3]=a*p+o*v+l*R,s[6]=a*f+o*M+l*w,s[1]=c*y+h*E+d*P,s[4]=c*p+h*v+d*R,s[7]=c*f+h*M+d*w,s[2]=u*y+m*E+g*P,s[5]=u*p+m*v+g*R,s[8]=u*f+m*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,m=c*s-a*l,g=t*d+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function createElementNS(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function createCanvasElement(){const i=createElementNS("canvas");return i.style.display="block",i}const _cache={};function warnOnce(i){i in _cache||(_cache[i]=!0,console.warn(i))}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),COLOR_SPACES={[LinearSRGBColorSpace]:{transfer:LinearTransfer,primaries:Rec709Primaries,toReference:i=>i,fromReference:i=>i},[SRGBColorSpace]:{transfer:SRGBTransfer,primaries:Rec709Primaries,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[LinearDisplayP3ColorSpace]:{transfer:LinearTransfer,primaries:P3Primaries,toReference:i=>i.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:i=>i.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)},[DisplayP3ColorSpace]:{transfer:SRGBTransfer,primaries:P3Primaries,toReference:i=>i.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:i=>i.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}},SUPPORTED_WORKING_COLOR_SPACES=new Set([LinearSRGBColorSpace,LinearDisplayP3ColorSpace]),ColorManagement={enabled:!0,_workingColorSpace:LinearSRGBColorSpace,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!SUPPORTED_WORKING_COLOR_SPACES.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=COLOR_SPACES[e].toReference,r=COLOR_SPACES[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return COLOR_SPACES[i].primaries},getTransfer:function(i){return i===NoColorSpace?LinearTransfer:COLOR_SPACES[i].transfer}};function SRGBToLinear(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function LinearToSRGB(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const n=_canvas.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=SRGBToLinear(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(SRGBToLinear(t[n]/255)*255):t[n]=SRGBToLinear(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(serializeImage(r[a].image)):s.push(serializeImage(r[a]))}else s=serializeImage(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function serializeImage(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ImageUtils.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=ClampToEdgeWrapping,r=ClampToEdgeWrapping,s=LinearFilter,a=LinearMipmapLinearFilter,o=RGBAFormat,l=UnsignedByteType,c=Texture.DEFAULT_ANISOTROPY,h=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,n=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,P=(f+1)/2,R=(h+u)/4,w=(d+y)/4,I=(g+p)/4;return v>M&&v>P?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=R/n,s=w/n):M>P?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=R/r,s=I/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=w/s,r=I/s),this.set(n,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Texture(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const u=s[a+0],m=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==u||c!==m||h!==g){let p=1-o;const f=l*u+c*m+h*g+d*y,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,f*E);p=Math.sin(p*R)/P,o=Math.sin(o*R)/P}const M=o*E;if(l=l*p+u*M,c=c*p+m*M,h=h*p+g*M,d=d*p+y*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*m-c*u,e[t+1]=l*g+h*u+c*d-o*m,e[t+2]=c*g+h*m+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),u=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_vector$b):_vector$b.fromBufferAttribute(s,a),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_box$4.copy(n.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){_testAxis.fromArray(i,s);const o=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),l=e.dot(_testAxis),c=t.dot(_testAxis),h=n.dot(_testAxis);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_box$3.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_v1$6,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_segDir),o=_diff.dot(this.direction),l=-_diff.dot(_segDir),c=_diff.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const y=1/h;d*=y,u*=y,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_segCenter).addScaledVector(_segDir,u),m}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const n=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,n,r,s){_edge1.subVectors(t,e),_edge2.subVectors(n,e),_normal$1.crossVectors(_edge1,_edge2);let a=this.direction.dot(_normal$1),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_diff.subVectors(this.origin,e);const l=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(l<0)return null;const c=o*this.direction.dot(_edge1.cross(_diff));if(c<0||l+c>a)return null;const h=-o*_diff.dot(_normal$1);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,n,r,s,a,o,l,c,h,d,u,m,g,y,p){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,u,m,g,y,p)}set(e,t,n,r,s,a,o,l,c,h,d,u,m,g,y,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),s=1/_v1$5.setFromMatrixColumn(e,1).length(),a=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=u-y*d}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,n){const r=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(n,_z),_x.lengthSq()===0&&(Math.abs(n.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(n,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],y=n[6],p=n[10],f=n[14],E=n[3],v=n[7],M=n[11],P=n[15],R=r[0],w=r[4],I=r[8],z=r[12],_=r[1],A=r[5],Q=r[9],j=r[13],T=r[2],O=r[6],F=r[10],Y=r[14],X=r[3],Z=r[7],J=r[11],ae=r[15];return s[0]=a*R+o*_+l*T+c*X,s[4]=a*w+o*A+l*O+c*Z,s[8]=a*I+o*Q+l*F+c*J,s[12]=a*z+o*j+l*Y+c*ae,s[1]=h*R+d*_+u*T+m*X,s[5]=h*w+d*A+u*O+m*Z,s[9]=h*I+d*Q+u*F+m*J,s[13]=h*z+d*j+u*Y+m*ae,s[2]=g*R+y*_+p*T+f*X,s[6]=g*w+y*A+p*O+f*Z,s[10]=g*I+y*Q+p*F+f*J,s[14]=g*z+y*j+p*Y+f*ae,s[3]=E*R+v*_+M*T+P*X,s[7]=E*w+v*A+M*O+P*Z,s[11]=E*I+v*Q+M*F+P*J,s[15]=E*z+v*j+M*Y+P*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*o*u+n*c*u+r*o*m-n*l*m)+y*(+t*l*m-t*c*u+s*a*u-r*a*m+r*c*h-s*l*h)+p*(+t*c*d-t*o*m-s*a*d+n*a*m+s*o*h-n*c*h)+f*(-r*o*h-t*l*d+t*o*u+r*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],E=d*p*c-y*u*c+y*l*m-o*p*m-d*l*f+o*u*f,v=g*u*c-h*p*c-g*l*m+a*p*m+h*l*f-a*u*f,M=h*y*c-g*d*c+g*o*m-a*y*m-h*o*f+a*d*f,P=g*d*l-h*y*l-g*o*u+a*y*u+h*o*p-a*d*p,R=t*E+n*v+r*M+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(y*u*s-d*p*s-y*r*m+n*p*m+d*r*f-n*u*f)*w,e[2]=(o*p*s-y*l*s+y*r*c-n*p*c-o*r*f+n*l*f)*w,e[3]=(d*l*s-o*u*s-d*r*c+n*u*c+o*r*m-n*l*m)*w,e[4]=v*w,e[5]=(h*p*s-g*u*s+g*r*m-t*p*m-h*r*f+t*u*f)*w,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*f-t*l*f)*w,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*m+t*l*m)*w,e[8]=M*w,e[9]=(g*d*s-h*y*s-g*n*m+t*y*m+h*n*f-t*d*f)*w,e[10]=(a*y*s-g*o*s+g*n*c-t*y*c-a*n*f+t*o*f)*w,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*m-t*o*m)*w,e[12]=P*w,e[13]=(h*y*r-g*d*r+g*n*u-t*y*u-h*n*p+t*d*p)*w,e[14]=(g*o*r-a*y*r-g*n*l+t*y*l+a*n*p-t*o*p)*w,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,m=s*h,g=s*d,y=a*h,p=a*d,f=o*d,E=l*c,v=l*h,M=l*d,P=n.x,R=n.y,w=n.z;return r[0]=(1-(y+f))*P,r[1]=(m+M)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(u+f))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(g+v)*w,r[9]=(p-E)*w,r[10]=(1-(u+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_v1$5.set(r[0],r[1],r[2]).length();const a=_v1$5.set(r[4],r[5],r[6]).length(),o=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_m1$4.copy(this);const c=1/s,h=1/a,d=1/o;return _m1$4.elements[0]*=c,_m1$4.elements[1]*=c,_m1$4.elements[2]*=c,_m1$4.elements[4]*=h,_m1$4.elements[5]*=h,_m1$4.elements[6]*=h,_m1$4.elements[8]*=d,_m1$4.elements[9]*=d,_m1$4.elements[10]*=d,t.setFromRotationMatrix(_m1$4),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=WebGLCoordinateSystem){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r);let m,g;if(o===WebGLCoordinateSystem)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===WebGPUCoordinateSystem)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=WebGLCoordinateSystem){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),u=(t+e)*c,m=(n+r)*h;let g,y;if(o===WebGLCoordinateSystem)g=(a+s)*d,y=-2*d;else if(o===WebGPUCoordinateSystem)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _v1$5=new Vector3,_m1$4=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,n=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-clamp(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$3=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,n=new Quaternion,r=new Vector3(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$3.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_target.copy(e):_target.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$3.lookAt(_position$3,_target,this.up):_m1$3.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$3),r&&(_m1$3.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$3),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$3.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$3.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$3),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,n=new Vector3){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_v0$1.subVectors(e,t),r.cross(_v0$1);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){_v0$1.subVectors(r,t),_v1$3.subVectors(n,t),_v2$2.subVectors(e,t);const a=_v0$1.dot(_v0$1),o=_v0$1.dot(_v1$3),l=_v0$1.dot(_v2$2),c=_v1$3.dot(_v1$3),h=_v1$3.dot(_v2$2),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,_v3$2)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_v3$2.x),l.addScaledVector(a,_v3$2.y),l.addScaledVector(o,_v3$2.z),l)}static isFrontFacing(e,t,n,r){return _v0$1.subVectors(n,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;_vab.subVectors(r,n),_vac.subVectors(s,n),_vap.subVectors(e,n);const l=_vab.dot(_vap),c=_vac.dot(_vap);if(l<=0&&c<=0)return t.copy(n);_vbp.subVectors(e,r);const h=_vab.dot(_vbp),d=_vac.dot(_vbp);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(_vab,a);_vcp.subVectors(e,s);const m=_vab.dot(_vcp),g=_vac.dot(_vcp);if(g>=0&&m<=g)return t.copy(s);const y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(_vac,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return _vbc.subVectors(s,r),o=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(_vbc,o);const f=1/(p+y+u);return a=y*f,o=u*f,t.copy(n).addScaledVector(_vab,a).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Color{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=n,ColorManagement.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),n=clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=hue2rgb(a,s,e+1/3),this.g=hue2rgb(a,s,e),this.b=hue2rgb(a,s,e-1/3)}return ColorManagement.toWorkingColorSpace(this,r),this}setStyle(e,t=SRGBColorSpace){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const n=_colorKeywords[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const n=_color.r,r=_color.g,s=_color.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,n=_color.g,r=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const n=lerp(_hslA.h,_hslB.h,t),r=lerp(_hslA.s,_hslB.s,t),s=lerp(_hslA.l,_hslB.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(n.blending=this.blending),this.side!==FrontSide&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(n.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(n.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(n.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _tables=_generateTables();function _generateTables(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function toHalfFloat(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=clamp(i,-65504,65504),_tables.floatView[0]=i;const e=_tables.uint32View[0],t=e>>23&511;return _tables.baseTable[t]+((e&8388607)>>_tables.shiftTable[t])}function fromHalfFloat(i){const e=i>>10;return _tables.uint32View[0]=_tables.mantissaTable[_tables.offsetTable[e]+(i&1023)]+_tables.exponentTable[e],_tables.floatView[0]}const DataUtils={toHalfFloat,fromHalfFloat},_vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return warnOnce("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _id$2=0;const _m1$2=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Matrix3().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$2.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$2),this}rotateX(e){return _m1$2.makeRotationX(e),this.applyMatrix4(_m1$2),this}rotateY(e){return _m1$2.makeRotationY(e),this.applyMatrix4(_m1$2),this}rotateZ(e){return _m1$2.makeRotationZ(e),this.applyMatrix4(_m1$2),this}translate(e,t,n){return _m1$2.makeTranslation(e,t,n),this.applyMatrix4(_m1$2),this}scale(e,t,n){return _m1$2.makeScale(e,t,n),this.applyMatrix4(_m1$2),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const n=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_vector$8.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_vector$8));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_vector$8.fromBufferAttribute(o,c),l&&(_offset.fromBufferAttribute(e,c),_vector$8.add(_offset)),r=Math.max(r,n.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new Vector3,l[I]=new Vector3;const c=new Vector3,h=new Vector3,d=new Vector3,u=new Vector2,m=new Vector2,g=new Vector2,y=new Vector3,p=new Vector3;function f(I,z,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,z),d.fromBufferAttribute(n,_),u.fromBufferAttribute(s,I),m.fromBufferAttribute(s,z),g.fromBufferAttribute(s,_),h.sub(c),d.sub(c),m.sub(u),g.sub(u);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(A),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),o[I].add(y),o[z].add(y),o[_].add(y),l[I].add(p),l[z].add(p),l[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,z=E.length;I<z;++I){const _=E[I],A=_.start,Q=_.count;for(let j=A,T=A+Q;j<T;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new Vector3,M=new Vector3,P=new Vector3,R=new Vector3;function w(I){P.fromBufferAttribute(r,I),R.copy(P);const z=o[I];v.copy(z),v.sub(P.multiplyScalar(P.dot(z))).normalize(),M.crossVectors(R,z);const A=M.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,A)}for(let I=0,z=E.length;I<z;++I){const _=E[I],A=_.start,Q=_.count;for(let j=A,T=A+Q;j<T;j+=3)w(e.getX(j+0)),w(e.getX(j+1)),w(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new Vector3,s=new Vector3,a=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,h=new Vector3,d=new Vector3;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new BufferAttribute(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){_morphA.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(_tempA.fromBufferAttribute(d,e),a?_morphA.addScaledVector(_tempA,h):_morphA.addScaledVector(_tempA.sub(t),h))}t.add(_morphA)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$6.copy(n.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(n.boundingBox!==null&&_ray$3.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const p=u[g],f=a[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,P=v;M<P;M+=3){const R=o.getX(M),w=o.getX(M+1),I=o.getX(M+2);r=checkGeometryIntersection(this,f,e,n,c,h,d,R,w,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){const E=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);r=checkGeometryIntersection(this,a,e,n,c,h,d,E,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const p=u[g],f=a[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,P=v;M<P;M+=3){const R=M,w=M+1,I=M+2;r=checkGeometryIntersection(this,f,e,n,c,h,d,R,w,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){const E=p,v=p+1,M=p+2;r=checkGeometryIntersection(this,a,e,n,c,h,d,E,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function checkIntersection(i,e,t,n,r,s,a,o){let l;if(e.side===BackSide?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===FrontSide,o),l===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_intersectionPointWorld);return c<t.near||c>t.far?null:{distance:c,point:_intersectionPointWorld.clone(),object:i}}function checkGeometryIntersection(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,_vA$1),i.getVertexPosition(l,_vB$1),i.getVertexPosition(c,_vC$1);const h=checkIntersection(i,e,t,n,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(h){r&&(_uvA$1.fromBufferAttribute(r,o),_uvB$1.fromBufferAttribute(r,l),_uvC$1.fromBufferAttribute(r,c),h.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),s&&(_uvA$1.fromBufferAttribute(s,o),_uvB$1.fromBufferAttribute(s,l),_uvC$1.fromBufferAttribute(s,c),h.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),a&&(_normalA.fromBufferAttribute(a,o),_normalB.fromBufferAttribute(a,l),_normalC.fromBufferAttribute(a,c),h.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,d.normal),h.face=d}return h}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(h,3)),this.setAttribute("uv",new Float32BufferAttribute(d,2));function g(y,p,f,E,v,M,P,R,w,I,z){const _=M/w,A=P/I,Q=M/2,j=P/2,T=R/2,O=w+1,F=I+1;let Y=0,X=0;const Z=new Vector3;for(let J=0;J<F;J++){const ae=J*A-j;for(let fe=0;fe<O;fe++){const ve=fe*_-Q;Z[y]=ve*E,Z[p]=ae*v,Z[f]=T,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[p]=0,Z[f]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(fe/w),d.push(1-J/I),Y+=1}}for(let J=0;J<I;J++)for(let ae=0;ae<w;ae++){const fe=u+ae+O*J,ve=u+ae+O*(J+1),U=u+(ae+1)+O*(J+1),H=u+(ae+1)+O*J;l.push(fe,ve,H),l.push(ve,U,H),X+=6}o.addGroup(m,X,z),m+=X,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mergeUniforms(i){const e={};for(let t=0;t<i.length;t++){const n=cloneUniforms(i[t]);for(const r in n)e[r]=n[r]}return e}function cloneUniformsGroups(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function getUnlitUniformColorSpace(i){return i.getRenderTarget()===null?i.outputColorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,this.add(r);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,this.add(a);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===WebGLCoordinateSystem)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new CubeTexture(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const a=new Mesh(r,s),o=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_vector1.subVectors(n,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_vector1),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$5=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,n=new Plane,r=new Plane,s=new Plane,a=new Plane){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],m=r[8],g=r[9],y=r[10],p=r[11],f=r[12],E=r[13],v=r[14],M=r[15];if(n[0].setComponents(l-s,u-c,p-m,M-f).normalize(),n[1].setComponents(l+s,u+c,p+m,M+f).normalize(),n[2].setComponents(l+a,u+h,p+g,M+E).normalize(),n[3].setComponents(l-a,u-h,p-g,M-E).normalize(),n[4].setComponents(l-o,u-d,p-y,M-v).normalize(),t===WebGLCoordinateSystem)n[5].setComponents(l+o,u+d,p+y,M+v).normalize();else if(t===WebGPUCoordinateSystem)n[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$5.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$5.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$5)}intersectsSprite(e){return _sphere$5.center.set(0,0,0),_sphere$5.radius=.7071067811865476,_sphere$5.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$5)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_vector$7.x=r.normal.x>0?e.max.x:e.min.x,_vector$7.y=r.normal.y>0?e.max.y:e.min.y,_vector$7.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function WebGLAttributes(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const d=c.array,u=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),c.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const u=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let y=0,p=g.length;y<p;y++){const f=g[y];t?i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):i.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,m=[],g=[],y=[],p=[];for(let f=0;f<h;f++){const E=f*u-a;for(let v=0;v<c;v++){const M=v*d-s;g.push(M,-E,0),y.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const v=E+c*f,M=E+c*(f+1),P=E+1+c*(f+1),R=E+1+c*f;m.push(v,M,R),m.push(M,P,R)}this.setIndex(m),this.setAttribute("position",new Float32BufferAttribute(g,3)),this.setAttribute("normal",new Float32BufferAttribute(y,3)),this.setAttribute("uv",new Float32BufferAttribute(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
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
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`
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
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
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
}`,lights_fragment_begin=`
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
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
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
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
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
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
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
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
}`,fragment$b=`uniform vec3 diffuse;
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
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
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
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
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
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
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
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
}`,vertex$2=`#include <common>
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
}`,fragment$2=`uniform vec3 color;
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
}`,vertex$1=`uniform float rotation;
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
}`,fragment$1=`uniform vec3 diffuse;
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(i,e,t,n,r,s,a){const o=new Color(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,f){let E=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),E=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===CubeUVReflectionMapping)?(h===void 0&&(h=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),_e1$1.copy(f.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),h.material.toneMapped=ColorManagement.getTransfer(v.colorSpace)!==SRGBTransfer,(d!==v||u!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ColorManagement.getTransfer(v.colorSpace)!==SRGBTransfer,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,f){p.getRGB(_rgb,getUnlitUniformColorSpace(i)),n.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:g}}function WebGLBindingStates(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(T,O,F,Y,X){let Z=!1;if(a){const J=y(Y,F,O);c!==J&&(c=J,m(c.object)),Z=f(T,Y,F,X),Z&&E(T,Y,F,X)}else{const J=O.wireframe===!0;(c.geometry!==Y.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=F.id,c.wireframe=J,Z=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,I(T,O,F,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(T){return n.isWebGL2?i.bindVertexArray(T):s.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?i.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function y(T,O,F){const Y=F.wireframe===!0;let X=o[T.id];X===void 0&&(X={},o[T.id]=X);let Z=X[O.id];Z===void 0&&(Z={},X[O.id]=Z);let J=Z[Y];return J===void 0&&(J=p(u()),Z[Y]=J),J}function p(T){const O=[],F=[],Y=[];for(let X=0;X<r;X++)O[X]=0,F[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:Y,object:T,attributes:{},index:null}}function f(T,O,F,Y){const X=c.attributes,Z=O.attributes;let J=0;const ae=F.getAttributes();for(const fe in ae)if(ae[fe].location>=0){const U=X[fe];let H=Z[fe];if(H===void 0&&(fe==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),fe==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),U===void 0||U.attribute!==H||H&&U.data!==H.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function E(T,O,F,Y){const X={},Z=O.attributes;let J=0;const ae=F.getAttributes();for(const fe in ae)if(ae[fe].location>=0){let U=Z[fe];U===void 0&&(fe==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),fe==="instanceColor"&&T.instanceColor&&(U=T.instanceColor));const H={};H.attribute=U,U&&U.data&&(H.data=U.data),X[fe]=H,J++}c.attributes=X,c.attributesNum=J,c.index=Y}function v(){const T=c.newAttributes;for(let O=0,F=T.length;O<F;O++)T[O]=0}function M(T){P(T,0)}function P(T,O){const F=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;F[T]=1,Y[T]===0&&(i.enableVertexAttribArray(T),Y[T]=1),X[T]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,O),X[T]=O)}function R(){const T=c.newAttributes,O=c.enabledAttributes;for(let F=0,Y=O.length;F<Y;F++)O[F]!==T[F]&&(i.disableVertexAttribArray(F),O[F]=0)}function w(T,O,F,Y,X,Z,J){J===!0?i.vertexAttribIPointer(T,O,F,X,Z):i.vertexAttribPointer(T,O,F,Y,X,Z)}function I(T,O,F,Y){if(n.isWebGL2===!1&&(T.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=Y.attributes,Z=F.getAttributes(),J=O.defaultAttributeValues;for(const ae in Z){const fe=Z[ae];if(fe.location>=0){let ve=X[ae];if(ve===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor)),ve!==void 0){const U=ve.normalized,H=ve.itemSize,oe=t.get(ve);if(oe===void 0)continue;const Me=oe.buffer,Se=oe.type,xe=oe.bytesPerElement,Ie=n.isWebGL2===!0&&(Se===i.INT||Se===i.UNSIGNED_INT||ve.gpuType===IntType);if(ve.isInterleavedBufferAttribute){const Te=ve.data,L=Te.stride,de=ve.offset;if(Te.isInstancedInterleavedBuffer){for(let K=0;K<fe.locationSize;K++)P(fe.location+K,Te.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let K=0;K<fe.locationSize;K++)M(fe.location+K);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let K=0;K<fe.locationSize;K++)w(fe.location+K,H/fe.locationSize,Se,U,L*xe,(de+H/fe.locationSize*K)*xe,Ie)}else{if(ve.isInstancedBufferAttribute){for(let Te=0;Te<fe.locationSize;Te++)P(fe.location+Te,ve.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Te=0;Te<fe.locationSize;Te++)M(fe.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Te=0;Te<fe.locationSize;Te++)w(fe.location+Te,H/fe.locationSize,Se,U,H*xe,H/fe.locationSize*Te*xe,Ie)}}else if(J!==void 0){const U=J[ae];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(fe.location,U);break;case 3:i.vertexAttrib3fv(fe.location,U);break;case 4:i.vertexAttrib4fv(fe.location,U);break;default:i.vertexAttrib1fv(fe.location,U)}}}}R()}function z(){Q();for(const T in o){const O=o[T];for(const F in O){const Y=O[F];for(const X in Y)g(Y[X].object),delete Y[X];delete O[F]}delete o[T]}}function _(T){if(o[T.id]===void 0)return;const O=o[T.id];for(const F in O){const Y=O[F];for(const X in Y)g(Y[X].object),delete Y[X];delete O[F]}delete o[T.id]}function A(T){for(const O in o){const F=o[O];if(F[T.id]===void 0)continue;const Y=F[T.id];for(const X in Y)g(Y[X].object),delete Y[X];delete F[T.id]}}function Q(){j(),h=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:j,dispose:z,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:M,disableUnusedAttributes:R}}function WebGLBufferRenderer(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function o(h,d){i.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,u){if(u===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,u),t.update(d,s,u)}function c(h,d,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=d[y];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function WebGLCapabilities(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,M=a||e.has("OES_texture_float"),P=v&&M,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:R}}function WebGLClipping(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Plane,o=new Matrix3,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||r;return r=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const E=s?0:n,v=E*4;let M=f.clippingState||null;l.value=M,M=h(g,u,v,m);for(let P=0;P!==v;++P)M[P]=t[P];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const f=m+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,M=m;v!==y;++v,M+=4)a.copy(d[v]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function WebGLCubeMaps(i){let e=new WeakMap;function t(a,o){return o===EquirectangularReflectionMapping?a.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(a.mapping=CubeRefractionMapping),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new WebGLCubeRenderTarget(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},r=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t)}return r}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,n,r){const o=new PerspectiveCamera(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_clearColor),h.toneMapping=NoToneMapping,h.autoClear=!1;const m=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),g=new Mesh(new BoxGeometry,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(_clearColor),y=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;_setViewport(r,E*v,f>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mesh(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_setViewport(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_flatCamera)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_axisDirections[(r-1)%_axisDirections.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Mesh(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*MAX_SAMPLES-1),y=s/g,p=isFinite(s)?1+Math.floor(h*y):MAX_SAMPLES;p>MAX_SAMPLES&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${MAX_SAMPLES}`);const f=[];let E=0;for(let w=0;w<MAX_SAMPLES;++w){const I=w/y,z=Math.exp(-I*I/2);f.push(z),w===0?E+=z:w<p&&(E+=2*z)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const M=this._sizeLods[r],P=3*M*(r>v-LOD_MIN?r-v+LOD_MIN:0),R=4*(this._cubeSize-M);_setViewport(t,P,R,3*M,2*M),l.setRenderTarget(t),l.render(d,_flatCamera)}}function _createPlanes(i){const e=[],t=[],n=[];let r=i;const s=i-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-LOD_MIN?l=EXTRA_LOD_SIGMA[a-i+LOD_MIN-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,y=3,p=2,f=1,E=new Float32Array(y*g*m),v=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,I=R>2?0:-1,z=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];E.set(z,y*g*R),v.set(u,p*g*R);const _=[R,R,R,R,R,R];M.set(_,f*g*R)}const P=new BufferGeometry;P.setAttribute("position",new BufferAttribute(E,y)),P.setAttribute("uv",new BufferAttribute(v,p)),P.setAttribute("faceIndex",new BufferAttribute(M,f)),e.push(P),r>LOD_MIN&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _createRenderTarget(i,e,t){const n=new WebGLRenderTarget(i,e,t);return n.texture.mapping=CubeUVReflectionMapping,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _setViewport(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _getBlurShader(i,e,t){const n=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping,h=l===CubeReflectionMapping||l===CubeRefractionMapping;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new PMREMGenerator(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new PMREMGenerator(i));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function WebGLExtensions(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function WebGLGeometries(i,e,t,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const y=u.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const y=m[g];for(let p=0,f=y.length;p<f;p++)e.update(y[p],i.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let y=0;if(m!==null){const E=m.array;y=m.version;for(let v=0,M=E.length;v<M;v+=3){const P=E[v+0],R=E[v+1],w=E[v+2];u.push(P,R,R,w,w,P)}}else if(g!==void 0){const E=g.array;y=g.version;for(let v=0,M=E.length/3-1;v<M;v+=3){const P=v+0,R=v+1,w=v+2;u.push(P,R,R,w,w,P)}}else return;const p=new(arrayNeedsUint32(u)?Uint32BufferAttribute:Uint16BufferAttribute)(u,1);p.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function WebGLIndexedBufferRenderer(i,e,t,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(s,g,o,m*l),t.update(g,s,1)}function d(m,g,y){if(y===0)return;let p,f;if(r)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,o,m*l,y),t.update(g,s,y)}function u(m,g,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,o,m,0,y);let f=0;for(let E=0;E<y;E++)f+=g[E];t.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function WebGLInfo(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function numericalSort(i,e){return i[0]-e[0]}function absNumericalSort(i,e){return Math.abs(e[1])-Math.abs(i[1])}function WebGLMorphtargets(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Vector4,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==y){let j=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",j)};var m=j;p!==void 0&&p.texture.dispose();const f=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let w=0;f===!0&&(w=1),E===!0&&(w=2),v===!0&&(w=3);let I=h.attributes.position.count*w,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const _=new Float32Array(I*z*4*y),A=new DataArrayTexture(_,I,z,y);A.type=FloatType,A.needsUpdate=!0;const Q=w*4;for(let T=0;T<y;T++){const O=M[T],F=P[T],Y=R[T],X=I*z*4*T;for(let Z=0;Z<O.count;Z++){const J=Z*Q;f===!0&&(a.fromBufferAttribute(O,Z),_[X+J+0]=a.x,_[X+J+1]=a.y,_[X+J+2]=a.z,_[X+J+3]=0),E===!0&&(a.fromBufferAttribute(F,Z),_[X+J+4]=a.x,_[X+J+5]=a.y,_[X+J+6]=a.z,_[X+J+7]=0),v===!0&&(a.fromBufferAttribute(Y,Z),_[X+J+8]=a.x,_[X+J+9]=a.y,_[X+J+10]=a.z,_[X+J+11]=Y.itemSize===4?a.w:1)}}p={count:y,texture:A,size:new Vector2(I,z)},s.set(h,p),h.addEventListener("dispose",j)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let f=0;for(let v=0;v<u.length;v++)f+=u[v];const E=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",u)}d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let y=n[h.id];if(y===void 0||y.length!==g){y=[];for(let M=0;M<g;M++)y[M]=[M,0];n[h.id]=y}for(let M=0;M<g;M++){const P=y[M];P[0]=M,P[1]=u[M]}y.sort(absNumericalSort);for(let M=0;M<8;M++)M<g&&y[M][1]?(o[M][0]=y[M][0],o[M][1]=y[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(numericalSort);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const P=o[M],R=P[0],w=P[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+M)!==p[R]&&h.setAttribute("morphTarget"+M,p[R]),f&&h.getAttribute("morphNormal"+M)!==f[R]&&h.setAttribute("morphNormal"+M,f[R]),r[M]=w,E+=w):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const v=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function WebGLObjects(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class DepthTexture extends Texture{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:DepthFormat,h!==DepthFormat&&h!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===DepthFormat&&(n=UnsignedIntType),n===void 0&&h===DepthStencilFormat&&(n=UnsignedInt248Type),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:NearestFilter,this.minFilter=l!==void 0?l:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1);emptyShadowTexture.compareFunction=LessEqualCompare;const emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=arrayCacheF32[r];if(s===void 0&&(s=new Float32Array(r),arrayCacheF32[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function arraysEqual(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function copyArray(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function allocTexUnits(i,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function setValueV1f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;i.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat2array.set(n),i.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,n)}}function setValueM3(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat3array.set(n),i.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,n)}}function setValueM4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat4array.set(n),i.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,n)}}function setValueV1i(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;i.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;i.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?emptyShadowTexture:emptyTexture;t.setTexture2D(e||s,r)}function setValueT3D1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||empty3dTexture,r)}function setValueT6(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(i){switch(i){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(i,e){i.uniform1fv(this.addr,e)}function setValueV2fArray(i,e){const t=flatten(e,this.size,2);i.uniform2fv(this.addr,t)}function setValueV3fArray(i,e){const t=flatten(e,this.size,3);i.uniform3fv(this.addr,t)}function setValueV4fArray(i,e){const t=flatten(e,this.size,4);i.uniform4fv(this.addr,t)}function setValueM2Array(i,e){const t=flatten(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(i,e){const t=flatten(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(i,e){const t=flatten(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(i,e){i.uniform1iv(this.addr,e)}function setValueV2iArray(i,e){i.uniform2iv(this.addr,e)}function setValueV3iArray(i,e){i.uniform3iv(this.addr,e)}function setValueV4iArray(i,e){i.uniform4iv(this.addr,e)}function setValueV1uiArray(i,e){i.uniform1uiv(this.addr,e)}function setValueV2uiArray(i,e){i.uniform2uiv(this.addr,e)}function setValueV3uiArray(i,e){i.uniform3uiv(this.addr,e)}function setValueV4uiArray(i,e){i.uniform4uiv(this.addr,e)}function setValueT1Array(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||emptyTexture,s[a])}function setValueT3DArray(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||empty3dTexture,s[a])}function setValueT6Array(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||emptyCubeTexture,s[a])}function setValueT2DArrayArray(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||emptyArrayTexture,s[a])}function getPureArraySetter(i){switch(i){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(i,e){i.seq.push(e),i.map[e.id]=e}function parseUniform(i,e,t){const n=i.name,r=n.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(n),a=RePathPart.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){addUniform(t,c===void 0?new SingleUniform(o,i,e):new PureArrayUniform(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new StructuredUniform(o),addUniform(t,d)),t=d}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);parseUniform(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function WebGLShader(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function getEncodingComponents(i){const e=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),t=ColorManagement.getPrimaries(i);let n;switch(e===t?n="":e===P3Primaries&&t===Rec709Primaries?n="LinearDisplayP3ToLinearSRGB":e===Rec709Primaries&&t===P3Primaries&&(n="LinearSRGBToLinearDisplayP3"),i){case LinearSRGBColorSpace:case LinearDisplayP3ColorSpace:return[n,"LinearTransferOETF"];case SRGBColorSpace:case DisplayP3ColorSpace:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function getShaderErrors(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+handleSource(i.getShaderSource(e),a)}else return r}function getTexelEncodingFunction(i,e){const t=getEncodingComponents(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function getToneMappingFunction(i,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case AgXToneMapping:t="AgX";break;case NeutralToneMapping:t="Neutral";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateVertexExtensions(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fetchAttributeLocations(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function filterEmptyLine(i){return i!==""}function replaceLightNums(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(i){return i.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function includeReplacer(i,e){let t=ShaderChunk[e];if(t===void 0){const n=shaderChunkMap.get(e);if(n!==void 0)t=ShaderChunk[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(i){return i.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function generatePrecision(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WebGLProgram(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=generateShadowMapTypeDefine(t),c=generateEnvMapTypeDefine(t),h=generateEnvMapModeDefine(t),d=generateEnvMapBlendingDefine(t),u=generateCubeUVSize(t),m=t.isWebGL2?"":generateExtensions(t),g=generateVertexExtensions(t),y=generateDefines(s),p=r.createProgram();let f,E,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(filterEmptyLine).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(filterEmptyLine).join(`
`),E.length>0&&(E+=`
`)):(f=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),E=[m,generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),a=resolveIncludes(a),a=replaceLightNums(a,t),a=replaceClippingPlaneNums(a,t),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),a=unrollLoops(a),o=unrollLoops(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const M=v+f+a,P=v+E+o,R=WebGLShader(r,r.VERTEX_SHADER,M),w=WebGLShader(r,r.FRAGMENT_SHADER,P);r.attachShader(p,R),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function I(Q){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(p).trim(),T=r.getShaderInfoLog(R).trim(),O=r.getShaderInfoLog(w).trim();let F=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,R,w);else{const X=getShaderErrors(r,R,"vertex"),Z=getShaderErrors(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+j+`
`+X+`
`+Z)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(T===""||O==="")&&(Y=!1);Y&&(Q.diagnostics={runnable:F,programLog:j,vertexShader:{log:T,prefix:f},fragmentShader:{log:O,prefix:E}})}r.deleteShader(R),r.deleteShader(w),z=new WebGLUniforms(r,p),_=fetchAttributeLocations(r,p)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let _;this.getAttributes=function(){return _===void 0&&I(this),_};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,COMPLETION_STATUS_KHR)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WebGLShaderStage(e),t.set(e,n)),n}}class WebGLShaderStage{constructor(e){this.id=_id$1++,this.code=e,this.usedTimes=0}}function WebGLPrograms(i,e,t,n,r,s,a){const o=new Layers,l=new WebGLShaderCache,c=new Set,h=[],d=r.isWebGL2,u=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,A,Q,j,T){const O=j.fog,F=T.geometry,Y=_.isMeshStandardMaterial?j.environment:null,X=(_.isMeshStandardMaterial?t:e).get(_.envMap||Y),Z=X&&X.mapping===CubeUVReflectionMapping?X.image.height:null,J=y[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=ae!==void 0?ae.length:0;let ve=0;F.morphAttributes.position!==void 0&&(ve=1),F.morphAttributes.normal!==void 0&&(ve=2),F.morphAttributes.color!==void 0&&(ve=3);let U,H,oe,Me;if(J){const ke=ShaderLib[J];U=ke.vertexShader,H=ke.fragmentShader}else U=_.vertexShader,H=_.fragmentShader,l.update(_),oe=l.getVertexShaderID(_),Me=l.getFragmentShaderID(_);const Se=i.getRenderTarget(),xe=T.isInstancedMesh===!0,Ie=T.isBatchedMesh===!0,Te=!!_.map,L=!!_.matcap,de=!!X,K=!!_.aoMap,ue=!!_.lightMap,ee=!!_.bumpMap,_e=!!_.normalMap,N=!!_.displacementMap,ne=!!_.emissiveMap,me=!!_.metalnessMap,S=!!_.roughnessMap,x=_.anisotropy>0,G=_.clearcoat>0,q=_.iridescence>0,se=_.sheen>0,ie=_.transmission>0,Le=x&&!!_.anisotropyMap,Ee=G&&!!_.clearcoatMap,te=G&&!!_.clearcoatNormalMap,pe=G&&!!_.clearcoatRoughnessMap,Ce=q&&!!_.iridescenceMap,ce=q&&!!_.iridescenceThicknessMap,qe=se&&!!_.sheenColorMap,Be=se&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,be=!!_.specularColorMap,we=!!_.specularIntensityMap,C=ie&&!!_.transmissionMap,re=ie&&!!_.thicknessMap,Ae=!!_.gradientMap,D=!!_.alphaMap,he=_.alphaTest>0,V=!!_.alphaHash,le=!!_.extensions;let ge=NoToneMapping;_.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ge=i.toneMapping);const ze={isWebGL2:d,shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:U,fragmentShader:H,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ie,instancing:xe,instancingColor:xe&&T.instanceColor!==null,instancingMorph:xe&&T.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Te,matcap:L,envMap:de,envMapMode:de&&X.mapping,envMapCubeUVHeight:Z,aoMap:K,lightMap:ue,bumpMap:ee,normalMap:_e,displacementMap:m&&N,emissiveMap:ne,normalMapObjectSpace:_e&&_.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:_e&&_.normalMapType===TangentSpaceNormalMap,metalnessMap:me,roughnessMap:S,anisotropy:x,anisotropyMap:Le,clearcoat:G,clearcoatMap:Ee,clearcoatNormalMap:te,clearcoatRoughnessMap:pe,iridescence:q,iridescenceMap:Ce,iridescenceThicknessMap:ce,sheen:se,sheenColorMap:qe,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:be,specularIntensityMap:we,transmission:ie,transmissionMap:C,thicknessMap:re,gradientMap:Ae,opaque:_.transparent===!1&&_.blending===NormalBlending&&_.alphaToCoverage===!1,alphaMap:D,alphaTest:he,alphaHash:V,combine:_.combine,mapUv:Te&&p(_.map.channel),aoMapUv:K&&p(_.aoMap.channel),lightMapUv:ue&&p(_.lightMap.channel),bumpMapUv:ee&&p(_.bumpMap.channel),normalMapUv:_e&&p(_.normalMap.channel),displacementMapUv:N&&p(_.displacementMap.channel),emissiveMapUv:ne&&p(_.emissiveMap.channel),metalnessMapUv:me&&p(_.metalnessMap.channel),roughnessMapUv:S&&p(_.roughnessMap.channel),anisotropyMapUv:Le&&p(_.anisotropyMap.channel),clearcoatMapUv:Ee&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Be&&p(_.sheenRoughnessMap.channel),specularMapUv:Pe&&p(_.specularMap.channel),specularColorMapUv:be&&p(_.specularColorMap.channel),specularIntensityMapUv:we&&p(_.specularIntensityMap.channel),transmissionMapUv:C&&p(_.transmissionMap.channel),thicknessMapUv:re&&p(_.thicknessMap.channel),alphaMapUv:D&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||x),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!F.attributes.uv&&(Te||D),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:T.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&_.map.isVideoTexture===!0&&ColorManagement.getTransfer(_.map.colorSpace)===SRGBTransfer,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===DoubleSide,flipSided:_.side===BackSide,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:le&&_.extensions.derivatives===!0,extensionFragDepth:le&&_.extensions.fragDepth===!0,extensionDrawBuffers:le&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function E(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const Q in _.defines)A.push(Q),A.push(_.defines[Q]);return _.isRawShaderMaterial===!1&&(v(A,_),M(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function v(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),_.push(o.mask)}function P(_){const A=y[_.type];let Q;if(A){const j=ShaderLib[A];Q=UniformsUtils.clone(j.uniforms)}else Q=_.uniforms;return Q}function R(_,A){let Q;for(let j=0,T=h.length;j<T;j++){const O=h[j];if(O.cacheKey===A){Q=O,++Q.usedTimes;break}}return Q===void 0&&(Q=new WebGLProgram(i,A,_,s),h.push(Q)),Q}function w(_){if(--_.usedTimes===0){const A=h.indexOf(_);h[A]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function z(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:P,acquireProgram:R,releaseProgram:w,releaseShaderCache:I,programs:h,dispose:z}}function WebGLProperties(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function painterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function reversePainterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function WebGLRenderList(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,u,m,g,y,p){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function o(d,u,m,g,y,p){const f=a(d,u,m,g,y,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(d,u,m,g,y,p){const f=a(d,u,m,g,y,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||painterSortStable),n.length>1&&n.sort(u||reversePainterSortStable),r.length>1&&r.sort(u||reversePainterSortStable)}function h(){for(let d=e,u=i.length;d<u;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function WebGLRenderLists(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new WebGLRenderList,i.set(n,[a])):r>=s.length?(a=new WebGLRenderList,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return i[e.id]=t,t}}}function ShadowUniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WebGLLights(i,e){const t=new UniformsCache,n=ShadowUniformsCache(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Vector3);const s=new Vector3,a=new Matrix4,o=new Matrix4;function l(h,d){let u=0,m=0,g=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let y=0,p=0,f=0,E=0,v=0,M=0,P=0,R=0,w=0,I=0,z=0;h.sort(shadowCastingAndTexturingLightsFirst);const _=d===!0?Math.PI:1;for(let Q=0,j=h.length;Q<j;Q++){const T=h[Q],O=T.color,F=T.intensity,Y=T.distance,X=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=O.r*F*_,m+=O.g*F*_,g+=O.b*F*_;else if(T.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(T.sh.coefficients[Z],F);z++}else if(T.isDirectionalLight){const Z=t.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity*_),T.castShadow){const J=T.shadow,ae=n.get(T);ae.shadowBias=J.bias,ae.shadowNormalBias=J.normalBias,ae.shadowRadius=J.radius,ae.shadowMapSize=J.mapSize,r.directionalShadow[y]=ae,r.directionalShadowMap[y]=X,r.directionalShadowMatrix[y]=T.shadow.matrix,M++}r.directional[y]=Z,y++}else if(T.isSpotLight){const Z=t.get(T);Z.position.setFromMatrixPosition(T.matrixWorld),Z.color.copy(O).multiplyScalar(F*_),Z.distance=Y,Z.coneCos=Math.cos(T.angle),Z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Z.decay=T.decay,r.spot[f]=Z;const J=T.shadow;if(T.map&&(r.spotLightMap[w]=T.map,w++,J.updateMatrices(T),T.castShadow&&I++),r.spotLightMatrix[f]=J.matrix,T.castShadow){const ae=n.get(T);ae.shadowBias=J.bias,ae.shadowNormalBias=J.normalBias,ae.shadowRadius=J.radius,ae.shadowMapSize=J.mapSize,r.spotShadow[f]=ae,r.spotShadowMap[f]=X,R++}f++}else if(T.isRectAreaLight){const Z=t.get(T);Z.color.copy(O).multiplyScalar(F),Z.halfWidth.set(T.width*.5,0,0),Z.halfHeight.set(0,T.height*.5,0),r.rectArea[E]=Z,E++}else if(T.isPointLight){const Z=t.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity*_),Z.distance=T.distance,Z.decay=T.decay,T.castShadow){const J=T.shadow,ae=n.get(T);ae.shadowBias=J.bias,ae.shadowNormalBias=J.normalBias,ae.shadowRadius=J.radius,ae.shadowMapSize=J.mapSize,ae.shadowCameraNear=J.camera.near,ae.shadowCameraFar=J.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=T.shadow.matrix,P++}r.point[p]=Z,p++}else if(T.isHemisphereLight){const Z=t.get(T);Z.skyColor.copy(T.color).multiplyScalar(F*_),Z.groundColor.copy(T.groundColor).multiplyScalar(F*_),r.hemi[v]=Z,v++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,r.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(r.rectAreaLTC1=UniformsLib.LTC_HALF_1,r.rectAreaLTC2=UniformsLib.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,r.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_HALF_1,r.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==y||A.pointLength!==p||A.spotLength!==f||A.rectAreaLength!==E||A.hemiLength!==v||A.numDirectionalShadows!==M||A.numPointShadows!==P||A.numSpotShadows!==R||A.numSpotMaps!==w||A.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=E,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+w-I,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,A.directionalLength=y,A.pointLength=p,A.spotLength=f,A.rectAreaLength=E,A.hemiLength=v,A.numDirectionalShadows=M,A.numPointShadows=P,A.numSpotShadows=R,A.numSpotMaps=w,A.numLightProbes=z,r.version=nextVersion++)}function c(h,d){let u=0,m=0,g=0,y=0,p=0;const f=d.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){const M=h[E];if(M.isDirectionalLight){const P=r.directional[u];P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),u++}else if(M.isSpotLight){const P=r.spot[g];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function WebGLRenderState(i,e){const t=new WebGLLights(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(d){n.push(d)}function o(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function WebGLRenderStates(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new WebGLRenderState(i,e),t.set(s,[l])):a>=o.length?(l=new WebGLRenderState(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
}`;function WebGLShadowMap(i,e,t){let n=new Frustum;const r=new Vector2,s=new Vector2,a=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),l=new MeshDistanceMaterial,c={},h=t.maxTextureSize,d={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},u=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new BufferGeometry;g.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mesh(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let f=this.type;this.render=function(R,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const z=i.getRenderTarget(),_=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(NoBlending),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const j=f!==VSMShadowMap&&this.type===VSMShadowMap,T=f===VSMShadowMap&&this.type!==VSMShadowMap;for(let O=0,F=R.length;O<F;O++){const Y=R[O],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Z=X.getFrameExtents();if(r.multiply(Z),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,X.mapSize.y=s.y)),X.map===null||j===!0||T===!0){const ae=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};X.map!==null&&X.map.dispose(),X.map=new WebGLRenderTarget(r.x,r.y,ae),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const J=X.getViewportCount();for(let ae=0;ae<J;ae++){const fe=X.getViewport(ae);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),Q.viewport(a),X.updateMatrices(Y,ae),n=X.getFrustum(),M(w,I,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===VSMShadowMap&&E(X,I),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(z,_,A)};function E(R,w){const I=e.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new WebGLRenderTarget(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,I,u,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,I,m,y,null)}function v(R,w,I,z){let _=null;const A=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)_=A;else if(_=I.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=_.uuid,j=w.uuid;let T=c[Q];T===void 0&&(T={},c[Q]=T);let O=T[j];O===void 0&&(O=_.clone(),T[j]=O,w.addEventListener("dispose",P)),_=O}if(_.visible=w.visible,_.wireframe=w.wireframe,z===VSMShadowMap?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:d[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const Q=i.properties.get(_);Q.light=I}return _}function M(R,w,I,z,_){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===VSMShadowMap)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const j=e.update(R),T=R.material;if(Array.isArray(T)){const O=j.groups;for(let F=0,Y=O.length;F<Y;F++){const X=O[F],Z=T[X.materialIndex];if(Z&&Z.visible){const J=v(R,Z,z,_);R.onBeforeShadow(i,R,w,I,j,J,X),i.renderBufferDirect(I,null,j,J,R,X),R.onAfterShadow(i,R,w,I,j,J,X)}}}else if(T.visible){const O=v(R,T,z,_);R.onBeforeShadow(i,R,w,I,j,O,null),i.renderBufferDirect(I,null,j,O,R,null),R.onAfterShadow(i,R,w,I,j,O,null)}}const Q=R.children;for(let j=0,T=Q.length;j<T;j++)M(Q[j],w,I,z,_)}function P(R){R.target.removeEventListener("dispose",P);for(const I in c){const z=c[I],_=R.target.uuid;_ in z&&(z[_].dispose(),delete z[_])}}}function WebGLState(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const he=new Vector4;let V=null;const le=new Vector4(0,0,0,0);return{setMask:function(ge){V!==ge&&!D&&(i.colorMask(ge,ge,ge,ge),V=ge)},setLocked:function(ge){D=ge},setClear:function(ge,ze,ke,He,Ye){Ye===!0&&(ge*=He,ze*=He,ke*=He),he.set(ge,ze,ke,He),le.equals(he)===!1&&(i.clearColor(ge,ze,ke,He),le.copy(he))},reset:function(){D=!1,V=null,le.set(-1,0,0,0)}}}function s(){let D=!1,he=null,V=null,le=null;return{setTest:function(ge){ge?xe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(ge){he!==ge&&!D&&(i.depthMask(ge),he=ge)},setFunc:function(ge){if(V!==ge){switch(ge){case NeverDepth:i.depthFunc(i.NEVER);break;case AlwaysDepth:i.depthFunc(i.ALWAYS);break;case LessDepth:i.depthFunc(i.LESS);break;case LessEqualDepth:i.depthFunc(i.LEQUAL);break;case EqualDepth:i.depthFunc(i.EQUAL);break;case GreaterEqualDepth:i.depthFunc(i.GEQUAL);break;case GreaterDepth:i.depthFunc(i.GREATER);break;case NotEqualDepth:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=ge}},setLocked:function(ge){D=ge},setClear:function(ge){le!==ge&&(i.clearDepth(ge),le=ge)},reset:function(){D=!1,he=null,V=null,le=null}}}function a(){let D=!1,he=null,V=null,le=null,ge=null,ze=null,ke=null,He=null,Ye=null;return{setTest:function(Ge){D||(Ge?xe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Ge){he!==Ge&&!D&&(i.stencilMask(Ge),he=Ge)},setFunc:function(Ge,We,Ke){(V!==Ge||le!==We||ge!==Ke)&&(i.stencilFunc(Ge,We,Ke),V=Ge,le=We,ge=Ke)},setOp:function(Ge,We,Ke){(ze!==Ge||ke!==We||He!==Ke)&&(i.stencilOp(Ge,We,Ke),ze=Ge,ke=We,He=Ke)},setLocked:function(Ge){D=Ge},setClear:function(Ge){Ye!==Ge&&(i.clearStencil(Ge),Ye=Ge)},reset:function(){D=!1,he=null,V=null,le=null,ge=null,ze=null,ke=null,He=null,Ye=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,y=[],p=null,f=!1,E=null,v=null,M=null,P=null,R=null,w=null,I=null,z=new Color(0,0,0),_=0,A=!1,Q=null,j=null,T=null,O=null,F=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=Z>=2);let ae=null,fe={};const ve=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),H=new Vector4().fromArray(ve),oe=new Vector4().fromArray(U);function Me(D,he,V,le){const ge=new Uint8Array(4),ze=i.createTexture();i.bindTexture(D,ze),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<V;ke++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ze}const Se={};Se[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Se[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(i.DEPTH_TEST),l.setFunc(LessEqualDepth),N(!1),ne(CullFaceBack),xe(i.CULL_FACE),ee(NoBlending);function xe(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ie(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Te(D,he){return m[D]!==he?(i.bindFramebuffer(D,he),m[D]=he,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function L(D,he){let V=y,le=!1;if(D){V=g.get(he),V===void 0&&(V=[],g.set(he,V));const ge=D.textures;if(V.length!==ge.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,ke=ge.length;ze<ke;ze++)V[ze]=i.COLOR_ATTACHMENT0+ze;V.length=ge.length,le=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,le=!0);if(le)if(t.isWebGL2)i.drawBuffers(V);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function de(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const K={[AddEquation]:i.FUNC_ADD,[SubtractEquation]:i.FUNC_SUBTRACT,[ReverseSubtractEquation]:i.FUNC_REVERSE_SUBTRACT};if(n)K[MinEquation]=i.MIN,K[MaxEquation]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(K[MinEquation]=D.MIN_EXT,K[MaxEquation]=D.MAX_EXT)}const ue={[ZeroFactor]:i.ZERO,[OneFactor]:i.ONE,[SrcColorFactor]:i.SRC_COLOR,[SrcAlphaFactor]:i.SRC_ALPHA,[SrcAlphaSaturateFactor]:i.SRC_ALPHA_SATURATE,[DstColorFactor]:i.DST_COLOR,[DstAlphaFactor]:i.DST_ALPHA,[OneMinusSrcColorFactor]:i.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:i.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:i.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:i.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:i.CONSTANT_COLOR,[OneMinusConstantColorFactor]:i.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:i.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(D,he,V,le,ge,ze,ke,He,Ye,Ge){if(D===NoBlending){f===!0&&(Ie(i.BLEND),f=!1);return}if(f===!1&&(xe(i.BLEND),f=!0),D!==CustomBlending){if(D!==E||Ge!==A){if((v!==AddEquation||R!==AddEquation)&&(i.blendEquation(i.FUNC_ADD),v=AddEquation,R=AddEquation),Ge)switch(D){case NormalBlending:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:i.blendFunc(i.ONE,i.ONE);break;case SubtractiveBlending:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case MultiplyBlending:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case NormalBlending:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case SubtractiveBlending:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case MultiplyBlending:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,P=null,w=null,I=null,z.set(0,0,0),_=0,E=D,A=Ge}return}ge=ge||he,ze=ze||V,ke=ke||le,(he!==v||ge!==R)&&(i.blendEquationSeparate(K[he],K[ge]),v=he,R=ge),(V!==M||le!==P||ze!==w||ke!==I)&&(i.blendFuncSeparate(ue[V],ue[le],ue[ze],ue[ke]),M=V,P=le,w=ze,I=ke),(He.equals(z)===!1||Ye!==_)&&(i.blendColor(He.r,He.g,He.b,Ye),z.copy(He),_=Ye),E=D,A=!1}function _e(D,he){D.side===DoubleSide?Ie(i.CULL_FACE):xe(i.CULL_FACE);let V=D.side===BackSide;he&&(V=!V),N(V),D.blending===NormalBlending&&D.transparent===!1?ee(NoBlending):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const le=D.stencilWrite;c.setTest(le),le&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),S(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function N(D){Q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Q=D)}function ne(D){D!==CullFaceNone?(xe(i.CULL_FACE),D!==j&&(D===CullFaceBack?i.cullFace(i.BACK):D===CullFaceFront?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),j=D}function me(D){D!==T&&(X&&i.lineWidth(D),T=D)}function S(D,he,V){D?(xe(i.POLYGON_OFFSET_FILL),(O!==he||F!==V)&&(i.polygonOffset(he,V),O=he,F=V)):Ie(i.POLYGON_OFFSET_FILL)}function x(D){D?xe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function G(D){D===void 0&&(D=i.TEXTURE0+Y-1),ae!==D&&(i.activeTexture(D),ae=D)}function q(D,he,V){V===void 0&&(ae===null?V=i.TEXTURE0+Y-1:V=ae);let le=fe[V];le===void 0&&(le={type:void 0,texture:void 0},fe[V]=le),(le.type!==D||le.texture!==he)&&(ae!==V&&(i.activeTexture(V),ae=V),i.bindTexture(D,he||Se[D]),le.type=D,le.texture=he)}function se(){const D=fe[ae];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){H.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),H.copy(D))}function we(D){oe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function C(D,he){let V=d.get(he);V===void 0&&(V=new WeakMap,d.set(he,V));let le=V.get(D);le===void 0&&(le=i.getUniformBlockIndex(he,D.name),V.set(D,le))}function re(D,he){const le=d.get(he).get(D);h.get(he)!==le&&(i.uniformBlockBinding(he,le,D.__bindingPointIndex),h.set(he,le))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ae=null,fe={},m={},g=new WeakMap,y=[],p=null,f=!1,E=null,v=null,M=null,P=null,R=null,w=null,I=null,z=new Color(0,0,0),_=0,A=!1,Q=null,j=null,T=null,O=null,F=null,H.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xe,disable:Ie,bindFramebuffer:Te,drawBuffers:L,useProgram:de,setBlending:ee,setMaterial:_e,setFlipSided:N,setCullFace:ne,setLineWidth:me,setPolygonOffset:S,setScissorTest:x,activeTexture:G,bindTexture:q,unbindTexture:se,compressedTexImage2D:ie,compressedTexImage3D:Le,texImage2D:Be,texImage3D:Pe,updateUBOMapping:C,uniformBlockBinding:re,texStorage2D:ce,texStorage3D:qe,texSubImage2D:Ee,texSubImage3D:te,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ce,scissor:be,viewport:we,reset:Ae}}function WebGLTextures(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vector2,d=new WeakMap;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,x){return g?new OffscreenCanvas(S,x):createElementNS("canvas")}function p(S,x,G,q){let se=1;const ie=me(S);if((ie.width>q||ie.height>q)&&(se=q/Math.max(ie.width,ie.height)),se<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Le=x?floorPowerOfTwo:Math.floor,Ee=Le(se*ie.width),te=Le(se*ie.height);u===void 0&&(u=y(Ee,te));const pe=G?y(Ee,te):u;return pe.width=Ee,pe.height=te,pe.getContext("2d").drawImage(S,0,0,Ee,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Ee+"x"+te+")."),pe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),S;return S}function f(S){const x=me(S);return isPowerOfTwo(x.width)&&isPowerOfTwo(x.height)}function E(S){return o?!1:S.wrapS!==ClampToEdgeWrapping||S.wrapT!==ClampToEdgeWrapping||S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter}function v(S,x){return S.generateMipmaps&&x&&S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter}function M(S){i.generateMipmap(S)}function P(S,x,G,q,se=!1){if(o===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ie=x;if(x===i.RED&&(G===i.FLOAT&&(ie=i.R32F),G===i.HALF_FLOAT&&(ie=i.R16F),G===i.UNSIGNED_BYTE&&(ie=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ie=i.R8UI),G===i.UNSIGNED_SHORT&&(ie=i.R16UI),G===i.UNSIGNED_INT&&(ie=i.R32UI),G===i.BYTE&&(ie=i.R8I),G===i.SHORT&&(ie=i.R16I),G===i.INT&&(ie=i.R32I)),x===i.RG&&(G===i.FLOAT&&(ie=i.RG32F),G===i.HALF_FLOAT&&(ie=i.RG16F),G===i.UNSIGNED_BYTE&&(ie=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ie=i.RG8UI),G===i.UNSIGNED_SHORT&&(ie=i.RG16UI),G===i.UNSIGNED_INT&&(ie=i.RG32UI),G===i.BYTE&&(ie=i.RG8I),G===i.SHORT&&(ie=i.RG16I),G===i.INT&&(ie=i.RG32I)),x===i.RGBA){const Le=se?LinearTransfer:ColorManagement.getTransfer(q);G===i.FLOAT&&(ie=i.RGBA32F),G===i.HALF_FLOAT&&(ie=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ie=Le===SRGBTransfer?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(S,x,G){return v(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function w(S){return S===NearestFilter||S===NearestMipmapNearestFilter||S===NearestMipmapLinearFilter?i.NEAREST:i.LINEAR}function I(S){const x=S.target;x.removeEventListener("dispose",I),_(x),x.isVideoTexture&&d.delete(x)}function z(S){const x=S.target;x.removeEventListener("dispose",z),Q(x)}function _(S){const x=n.get(S);if(x.__webglInit===void 0)return;const G=S.source,q=m.get(G);if(q){const se=q[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&A(S),Object.keys(q).length===0&&m.delete(G)}n.remove(S)}function A(S){const x=n.get(S);i.deleteTexture(x.__webglTexture);const G=S.source,q=m.get(G);delete q[x.__cacheKey],a.memory.textures--}function Q(S){const x=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let se=0;se<x.__webglFramebuffer[q].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[q][se]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=S.textures;for(let q=0,se=G.length;q<se;q++){const ie=n.get(G[q]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(G[q])}n.remove(S)}let j=0;function T(){j=0}function O(){const S=j;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),j+=1,S}function F(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function Y(S,x){const G=n.get(S);if(S.isVideoTexture&&N(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){const q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,S,x);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function X(S,x){const G=n.get(S);if(S.version>0&&G.__version!==S.version){oe(G,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function Z(S,x){const G=n.get(S);if(S.version>0&&G.__version!==S.version){oe(G,S,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function J(S,x){const G=n.get(S);if(S.version>0&&G.__version!==S.version){Me(G,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const ae={[RepeatWrapping]:i.REPEAT,[ClampToEdgeWrapping]:i.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:i.MIRRORED_REPEAT},fe={[NearestFilter]:i.NEAREST,[NearestMipmapNearestFilter]:i.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:i.NEAREST_MIPMAP_LINEAR,[LinearFilter]:i.LINEAR,[LinearMipmapNearestFilter]:i.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:i.LINEAR_MIPMAP_LINEAR},ve={[NeverCompare]:i.NEVER,[AlwaysCompare]:i.ALWAYS,[LessCompare]:i.LESS,[LessEqualCompare]:i.LEQUAL,[EqualCompare]:i.EQUAL,[GreaterEqualCompare]:i.GEQUAL,[GreaterCompare]:i.GREATER,[NotEqualCompare]:i.NOTEQUAL};function U(S,x,G){if(x.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===LinearFilter||x.magFilter===LinearMipmapNearestFilter||x.magFilter===NearestMipmapLinearFilter||x.magFilter===LinearMipmapLinearFilter||x.minFilter===LinearFilter||x.minFilter===LinearMipmapNearestFilter||x.minFilter===NearestMipmapLinearFilter||x.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(i.texParameteri(S,i.TEXTURE_WRAP_S,ae[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ae[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ae[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,fe[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,fe[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==ClampToEdgeWrapping||x.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,w(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==NearestFilter&&x.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===NearestFilter||x.minFilter!==NearestMipmapLinearFilter&&x.minFilter!==LinearMipmapLinearFilter||x.type===FloatType&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function H(S,x){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",I));const q=x.source;let se=m.get(q);se===void 0&&(se={},m.set(q,se));const ie=F(x);if(ie!==S.__cacheKey){se[ie]===void 0&&(se[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),se[ie].usedTimes++;const Le=se[S.__cacheKey];Le!==void 0&&(se[S.__cacheKey].usedTimes--,Le.usedTimes===0&&A(x)),S.__cacheKey=ie,S.__webglTexture=se[ie].texture}return G}function oe(S,x,G){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const se=H(S,x),ie=x.source;t.bindTexture(q,S.__webglTexture,i.TEXTURE0+G);const Le=n.get(ie);if(ie.version!==Le.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const Ee=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),te=x.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(x.colorSpace),pe=x.colorSpace===NoColorSpace||Ee===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ce=E(x)&&f(x.image)===!1;let ce=p(x.image,Ce,!1,r.maxTextureSize);ce=ne(x,ce);const qe=f(ce)||o,Be=s.convert(x.format,x.colorSpace);let Pe=s.convert(x.type),be=P(x.internalFormat,Be,Pe,x.colorSpace,x.isVideoTexture);U(q,x,qe);let we;const C=x.mipmaps,re=o&&x.isVideoTexture!==!0&&be!==RGB_ETC1_Format,Ae=Le.__version===void 0||se===!0,D=ie.dataReady,he=R(x,ce,qe);if(x.isDepthTexture)be=i.DEPTH_COMPONENT,o?x.type===FloatType?be=i.DEPTH_COMPONENT32F:x.type===UnsignedIntType?be=i.DEPTH_COMPONENT24:x.type===UnsignedInt248Type?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:x.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===DepthFormat&&be===i.DEPTH_COMPONENT&&x.type!==UnsignedShortType&&x.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=UnsignedIntType,Pe=s.convert(x.type)),x.format===DepthStencilFormat&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,x.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=UnsignedInt248Type,Pe=s.convert(x.type))),Ae&&(re?t.texStorage2D(i.TEXTURE_2D,1,be,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,be,ce.width,ce.height,0,Be,Pe,null));else if(x.isDataTexture)if(C.length>0&&qe){re&&Ae&&t.texStorage2D(i.TEXTURE_2D,he,be,C[0].width,C[0].height);for(let V=0,le=C.length;V<le;V++)we=C[V],re?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,we.width,we.height,Be,Pe,we.data):t.texImage2D(i.TEXTURE_2D,V,be,we.width,we.height,0,Be,Pe,we.data);x.generateMipmaps=!1}else re?(Ae&&t.texStorage2D(i.TEXTURE_2D,he,be,ce.width,ce.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,Be,Pe,ce.data)):t.texImage2D(i.TEXTURE_2D,0,be,ce.width,ce.height,0,Be,Pe,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,be,C[0].width,C[0].height,ce.depth);for(let V=0,le=C.length;V<le;V++)we=C[V],x.format!==RGBAFormat?Be!==null?re?D&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,we.width,we.height,ce.depth,Be,we.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,be,we.width,we.height,ce.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,we.width,we.height,ce.depth,Be,Pe,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,be,we.width,we.height,ce.depth,0,Be,Pe,we.data)}else{re&&Ae&&t.texStorage2D(i.TEXTURE_2D,he,be,C[0].width,C[0].height);for(let V=0,le=C.length;V<le;V++)we=C[V],x.format!==RGBAFormat?Be!==null?re?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,we.width,we.height,Be,we.data):t.compressedTexImage2D(i.TEXTURE_2D,V,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,we.width,we.height,Be,Pe,we.data):t.texImage2D(i.TEXTURE_2D,V,be,we.width,we.height,0,Be,Pe,we.data)}else if(x.isDataArrayTexture)re?(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,be,ce.width,ce.height,ce.depth),D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Be,Pe,ce.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,Be,Pe,ce.data);else if(x.isData3DTexture)re?(Ae&&t.texStorage3D(i.TEXTURE_3D,he,be,ce.width,ce.height,ce.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Be,Pe,ce.data)):t.texImage3D(i.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,Be,Pe,ce.data);else if(x.isFramebufferTexture){if(Ae)if(re)t.texStorage2D(i.TEXTURE_2D,he,be,ce.width,ce.height);else{let V=ce.width,le=ce.height;for(let ge=0;ge<he;ge++)t.texImage2D(i.TEXTURE_2D,ge,be,V,le,0,Be,Pe,null),V>>=1,le>>=1}}else if(C.length>0&&qe){if(re&&Ae){const V=me(C[0]);t.texStorage2D(i.TEXTURE_2D,he,be,V.width,V.height)}for(let V=0,le=C.length;V<le;V++)we=C[V],re?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Be,Pe,we):t.texImage2D(i.TEXTURE_2D,V,be,Be,Pe,we);x.generateMipmaps=!1}else if(re){if(Ae){const V=me(ce);t.texStorage2D(i.TEXTURE_2D,he,be,V.width,V.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Pe,ce)}else t.texImage2D(i.TEXTURE_2D,0,be,Be,Pe,ce);v(x,qe)&&M(q),Le.__version=ie.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Me(S,x,G){if(x.image.length!==6)return;const q=H(S,x),se=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+G);const ie=n.get(se);if(se.version!==ie.__version||q===!0){t.activeTexture(i.TEXTURE0+G);const Le=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),Ee=x.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(x.colorSpace),te=x.colorSpace===NoColorSpace||Le===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let V=0;V<6;V++)!pe&&!Ce?ce[V]=p(x.image[V],!1,!0,r.maxCubemapSize):ce[V]=Ce?x.image[V].image:x.image[V],ce[V]=ne(x,ce[V]);const qe=ce[0],Be=f(qe)||o,Pe=s.convert(x.format,x.colorSpace),be=s.convert(x.type),we=P(x.internalFormat,Pe,be,x.colorSpace),C=o&&x.isVideoTexture!==!0,re=ie.__version===void 0||q===!0,Ae=se.dataReady;let D=R(x,qe,Be);U(i.TEXTURE_CUBE_MAP,x,Be);let he;if(pe){C&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,D,we,qe.width,qe.height);for(let V=0;V<6;V++){he=ce[V].mipmaps;for(let le=0;le<he.length;le++){const ge=he[le];x.format!==RGBAFormat?Pe!==null?C?Ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,0,0,ge.width,ge.height,Pe,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,we,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,0,0,ge.width,ge.height,Pe,be,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le,we,ge.width,ge.height,0,Pe,be,ge.data)}}}else{if(he=x.mipmaps,C&&re){he.length>0&&D++;const V=me(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,D,we,V.width,V.height)}for(let V=0;V<6;V++)if(Ce){C?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ce[V].width,ce[V].height,Pe,be,ce[V].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,we,ce[V].width,ce[V].height,0,Pe,be,ce[V].data);for(let le=0;le<he.length;le++){const ze=he[le].image[V].image;C?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,0,0,ze.width,ze.height,Pe,be,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,we,ze.width,ze.height,0,Pe,be,ze.data)}}else{C?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Pe,be,ce[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,we,Pe,be,ce[V]);for(let le=0;le<he.length;le++){const ge=he[le];C?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,0,0,Pe,be,ge.image[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,le+1,we,Pe,be,ge.image[V])}}}v(x,Be)&&M(i.TEXTURE_CUBE_MAP),ie.__version=se.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Se(S,x,G,q,se,ie){const Le=s.convert(G.format,G.colorSpace),Ee=s.convert(G.type),te=P(G.internalFormat,Le,Ee,G.colorSpace);if(!n.get(x).__hasExternalTextures){const Ce=Math.max(1,x.width>>ie),ce=Math.max(1,x.height>>ie);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ie,te,Ce,ce,x.depth,0,Le,Ee,null):t.texImage2D(se,ie,te,Ce,ce,0,Le,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),_e(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,se,n.get(G).__webglTexture,0,ee(x)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,se,n.get(G).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(S,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let q=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||_e(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===FloatType?q=i.DEPTH_COMPONENT32F:se.type===UnsignedIntType&&(q=i.DEPTH_COMPONENT24));const ie=ee(x);_e(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,q,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,q,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const q=ee(x);G&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,x.width,x.height):_e(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const q=x.textures;for(let se=0;se<q.length;se++){const ie=q[se],Le=s.convert(ie.format,ie.colorSpace),Ee=s.convert(ie.type),te=P(ie.internalFormat,Le,Ee,ie.colorSpace),pe=ee(x);G&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,te,x.width,x.height):_e(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,se=ee(x);if(x.depthTexture.format===DepthFormat)_e(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===DepthStencilFormat)_e(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Te(S){const x=n.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,S)}else if(G){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]=i.createRenderbuffer(),xe(x.__webglDepthbuffer[q],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),xe(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function L(S,x,G){const q=n.get(S);x!==void 0&&Se(q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Te(S)}function de(S){const x=S.texture,G=n.get(S),q=n.get(x);S.addEventListener("dispose",z);const se=S.textures,ie=S.isWebGLCubeRenderTarget===!0,Le=se.length>1,Ee=f(S)||o;if(Le||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),ie){G.__webglFramebuffer=[];for(let te=0;te<6;te++)if(o&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[te]=[];for(let pe=0;pe<x.mipmaps.length;pe++)G.__webglFramebuffer[te][pe]=i.createFramebuffer()}else G.__webglFramebuffer[te]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let te=0;te<x.mipmaps.length;te++)G.__webglFramebuffer[te]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Le)if(r.drawBuffers)for(let te=0,pe=se.length;te<pe;te++){const Ce=n.get(se[te]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&_e(S)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let te=0;te<se.length;te++){const pe=se[te];G.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[te]);const Ce=s.convert(pe.format,pe.colorSpace),ce=s.convert(pe.type),qe=P(pe.internalFormat,Ce,ce,pe.colorSpace,S.isXRRenderTarget===!0),Be=ee(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,qe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,G.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),U(i.TEXTURE_CUBE_MAP,x,Ee);for(let te=0;te<6;te++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Se(G.__webglFramebuffer[te][pe],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe);else Se(G.__webglFramebuffer[te],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);v(x,Ee)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let te=0,pe=se.length;te<pe;te++){const Ce=se[te],ce=n.get(Ce);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),U(i.TEXTURE_2D,Ce,Ee),Se(G.__webglFramebuffer,S,Ce,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,0),v(Ce,Ee)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?te=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,q.__webglTexture),U(te,x,Ee),o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Se(G.__webglFramebuffer[pe],S,x,i.COLOR_ATTACHMENT0,te,pe);else Se(G.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,te,0);v(x,Ee)&&M(te),t.unbindTexture()}S.depthBuffer&&Te(S)}function K(S){const x=f(S)||o,G=S.textures;for(let q=0,se=G.length;q<se;q++){const ie=G[q];if(v(ie,x)){const Le=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(ie).__webglTexture;t.bindTexture(Le,Ee),M(Le),t.unbindTexture()}}}function ue(S){if(o&&S.samples>0&&_e(S)===!1){const x=S.textures,G=S.width,q=S.height;let se=i.COLOR_BUFFER_BIT;const ie=[],Le=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(S),te=x.length>1;if(te)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){ie.push(i.COLOR_ATTACHMENT0+pe),S.depthBuffer&&ie.push(Le);const Ce=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Ce===!1&&(S.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),te&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]),Ce===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Le]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Le])),te){const ce=n.get(x[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,se,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const Ce=n.get(x[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function ee(S){return Math.min(r.maxSamples,S.samples)}function _e(S){const x=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(S){const x=a.render.frame;d.get(S)!==x&&(d.set(S,x),S.update())}function ne(S,x){const G=S.colorSpace,q=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===_SRGBAFormat||G!==LinearSRGBColorSpace&&G!==NoColorSpace&&(ColorManagement.getTransfer(G)===SRGBTransfer?o===!1?e.has("EXT_sRGB")===!0&&q===RGBAFormat?(S.format=_SRGBAFormat,S.minFilter=LinearFilter,S.generateMipmaps=!1):x=ImageUtils.sRGBToLinear(x):(q!==RGBAFormat||se!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function me(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(h.width=S.naturalWidth||S.width,h.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(h.width=S.displayWidth,h.height=S.displayHeight):(h.width=S.width,h.height=S.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=T,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=L,this.setupRenderTarget=de,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_e}function WebGLUtils(i,e,t){const n=t.isWebGL2;function r(s,a=NoColorSpace){let o;const l=ColorManagement.getTransfer(a);if(s===UnsignedByteType)return i.UNSIGNED_BYTE;if(s===UnsignedShort4444Type)return i.UNSIGNED_SHORT_4_4_4_4;if(s===UnsignedShort5551Type)return i.UNSIGNED_SHORT_5_5_5_1;if(s===ByteType)return i.BYTE;if(s===ShortType)return i.SHORT;if(s===UnsignedShortType)return i.UNSIGNED_SHORT;if(s===IntType)return i.INT;if(s===UnsignedIntType)return i.UNSIGNED_INT;if(s===FloatType)return i.FLOAT;if(s===HalfFloatType)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===AlphaFormat)return i.ALPHA;if(s===RGBAFormat)return i.RGBA;if(s===LuminanceFormat)return i.LUMINANCE;if(s===LuminanceAlphaFormat)return i.LUMINANCE_ALPHA;if(s===DepthFormat)return i.DEPTH_COMPONENT;if(s===DepthStencilFormat)return i.DEPTH_STENCIL;if(s===_SRGBAFormat)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===RedFormat)return i.RED;if(s===RedIntegerFormat)return i.RED_INTEGER;if(s===RGFormat)return i.RG;if(s===RGIntegerFormat)return i.RG_INTEGER;if(s===RGBAIntegerFormat)return i.RGBA_INTEGER;if(s===RGB_S3TC_DXT1_Format||s===RGBA_S3TC_DXT1_Format||s===RGBA_S3TC_DXT3_Format||s===RGBA_S3TC_DXT5_Format)if(l===SRGBTransfer)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===RGB_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===RGB_S3TC_DXT1_Format)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===RGB_PVRTC_4BPPV1_Format||s===RGB_PVRTC_2BPPV1_Format||s===RGBA_PVRTC_4BPPV1_Format||s===RGBA_PVRTC_2BPPV1_Format)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===RGB_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===RGB_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===RGBA_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===RGBA_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===RGB_ETC1_Format)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===RGB_ETC2_Format||s===RGBA_ETC2_EAC_Format)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===RGB_ETC2_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===RGBA_ETC2_EAC_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===RGBA_ASTC_4x4_Format||s===RGBA_ASTC_5x4_Format||s===RGBA_ASTC_5x5_Format||s===RGBA_ASTC_6x5_Format||s===RGBA_ASTC_6x6_Format||s===RGBA_ASTC_8x5_Format||s===RGBA_ASTC_8x6_Format||s===RGBA_ASTC_8x8_Format||s===RGBA_ASTC_10x5_Format||s===RGBA_ASTC_10x6_Format||s===RGBA_ASTC_10x8_Format||s===RGBA_ASTC_10x10_Format||s===RGBA_ASTC_12x10_Format||s===RGBA_ASTC_12x12_Format)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===RGBA_ASTC_4x4_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===RGBA_ASTC_5x4_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===RGBA_ASTC_5x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===RGBA_ASTC_6x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===RGBA_ASTC_6x6_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===RGBA_ASTC_8x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===RGBA_ASTC_8x6_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===RGBA_ASTC_8x8_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===RGBA_ASTC_10x5_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===RGBA_ASTC_10x6_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===RGBA_ASTC_10x8_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===RGBA_ASTC_10x10_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===RGBA_ASTC_12x10_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===RGBA_ASTC_12x12_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===RGBA_BPTC_Format||s===RGB_BPTC_SIGNED_Format||s===RGB_BPTC_UNSIGNED_Format)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===RGBA_BPTC_Format)return l===SRGBTransfer?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===RGB_BPTC_SIGNED_Format)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===RGB_BPTC_UNSIGNED_Format)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===RED_RGTC1_Format||s===SIGNED_RED_RGTC1_Format||s===RED_GREEN_RGTC2_Format||s===SIGNED_RED_GREEN_RGTC2_Format)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===RGBA_BPTC_Format)return o.COMPRESSED_RED_RGTC1_EXT;if(s===SIGNED_RED_RGTC1_Format)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===RED_GREEN_RGTC2_Format)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===SIGNED_RED_GREEN_RGTC2_Format)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===UnsignedInt248Type?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Group;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Texture,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new ShaderMaterial({extensions:{fragDepth:!0},vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const y=new WebXRDepthSensing,p=t.getContextAttributes();let f=null,E=null;const v=[],M=[],P=new Vector2;let R=null;const w=new PerspectiveCamera;w.layers.enable(1),w.viewport=new Vector4;const I=new PerspectiveCamera;I.layers.enable(2),I.viewport=new Vector4;const z=[w,I],_=new ArrayCamera;_.layers.enable(1),_.layers.enable(2);let A=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=v[U];return H===void 0&&(H=new WebXRController,v[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=v[U];return H===void 0&&(H=new WebXRController,v[U]=H),H.getGripSpace()},this.getHand=function(U){let H=v[U];return H===void 0&&(H=new WebXRController,v[U]=H),H.getHandSpace()};function j(U){const H=M.indexOf(U.inputSource);if(H===-1)return;const oe=v[H];oe!==void 0&&(oe.update(U.inputSource,U.frame,c||a),oe.dispatchEvent({type:U.type,data:U.inputSource}))}function T(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",T),r.removeEventListener("inputsourceschange",O);for(let U=0;U<v.length;U++){const H=M[U];H!==null&&(M[U]=null,v[U].disconnect(H))}A=null,Q=null,y.reset(),e.setRenderTarget(f),m=null,u=null,d=null,r=null,E=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",T),r.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new WebGLRenderTarget(m.framebufferWidth,m.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let H=null,oe=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=p.stencil?DepthStencilFormat:DepthFormat,oe=p.stencil?UnsignedInt248Type:UnsignedIntType);const Se={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(Se),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new WebGLRenderTarget(u.textureWidth,u.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(u.textureWidth,u.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const xe=e.properties.get(E);xe.__ignoreDepthValues=u.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(U){for(let H=0;H<U.removed.length;H++){const oe=U.removed[H],Me=M.indexOf(oe);Me>=0&&(M[Me]=null,v[Me].disconnect(oe))}for(let H=0;H<U.added.length;H++){const oe=U.added[H];let Me=M.indexOf(oe);if(Me===-1){for(let xe=0;xe<v.length;xe++)if(xe>=M.length){M.push(oe),Me=xe;break}else if(M[xe]===null){M[xe]=oe,Me=xe;break}if(Me===-1)break}const Se=v[Me];Se&&Se.connect(oe)}}const F=new Vector3,Y=new Vector3;function X(U,H,oe){F.setFromMatrixPosition(H.matrixWorld),Y.setFromMatrixPosition(oe.matrixWorld);const Me=F.distanceTo(Y),Se=H.projectionMatrix.elements,xe=oe.projectionMatrix.elements,Ie=Se[14]/(Se[10]-1),Te=Se[14]/(Se[10]+1),L=(Se[9]+1)/Se[5],de=(Se[9]-1)/Se[5],K=(Se[8]-1)/Se[0],ue=(xe[8]+1)/xe[0],ee=Ie*K,_e=Ie*ue,N=Me/(-K+ue),ne=N*-K;H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ne),U.translateZ(N),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const me=Ie+N,S=Te+N,x=ee-ne,G=_e+(Me-ne),q=L*Te/S*me,se=de*Te/S*me;U.projectionMatrix.makePerspective(x,G,q,se,me,S),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Z(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;y.texture!==null&&(U.near=y.depthNear,U.far=y.depthFar),_.near=I.near=w.near=U.near,_.far=I.far=w.far=U.far,(A!==_.near||Q!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,Q=_.far,w.near=A,w.far=Q,I.near=A,I.far=Q,w.updateProjectionMatrix(),I.updateProjectionMatrix(),U.updateProjectionMatrix());const H=U.parent,oe=_.cameras;Z(_,H);for(let Me=0;Me<oe.length;Me++)Z(oe[Me],H);oe.length===2?X(_,w,I):_.projectionMatrix.copy(w.projectionMatrix),J(U,_,H)};function J(U,H,oe){oe===null?U.matrix.copy(H.matrixWorld):(U.matrix.copy(oe.matrixWorld),U.matrix.invert(),U.matrix.multiply(H.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(H.projectionMatrix),U.projectionMatrixInverse.copy(H.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=RAD2DEG*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.hasDepthSensing=function(){return y.texture!==null};let ae=null;function fe(U,H){if(h=H.getViewerPose(c||a),g=H,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Me=!1;oe.length!==_.cameras.length&&(_.cameras.length=0,Me=!0);for(let xe=0;xe<oe.length;xe++){const Ie=oe[xe];let Te=null;if(m!==null)Te=m.getViewport(Ie);else{const de=d.getViewSubImage(u,Ie);Te=de.viewport,xe===0&&(e.setRenderTargetTextures(E,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(E))}let L=z[xe];L===void 0&&(L=new PerspectiveCamera,L.layers.enable(xe),L.viewport=new Vector4,z[xe]=L),L.matrix.fromArray(Ie.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ie.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Te.x,Te.y,Te.width,Te.height),xe===0&&(_.matrix.copy(L.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Me===!0&&_.cameras.push(L)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const xe=d.getDepthInformation(oe[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,r.renderState)}}for(let oe=0;oe<v.length;oe++){const Me=M[oe],Se=v[oe];Me!==null&&Se!==void 0&&Se.update(Me,H,c||a)}y.render(e,_),ae&&ae(U,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const ve=new WebGLAnimation;ve.setAnimationLoop(fe),this.setAnimationLoop=function(U){ae=U},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,getUnlitUniformColorSpace(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===BackSide&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===BackSide&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),v=E.envMap,M=E.envMapRotation;if(v&&(p.envMap.value=v,_e1.copy(M),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),p.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*P,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===BackSide&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function WebGLUniformsGroups(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const M=v.program;n.uniformBlockBinding(E,M)}function c(E,v){let M=r[E.id];M===void 0&&(g(E),M=h(E),r[E.id]=M,E.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(E,P);const R=e.render.frame;s[E.id]!==R&&(u(E),s[E.id]=R)}function h(E){const v=d();E.__bindingPointIndex=v;const M=i.createBuffer(),P=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const v=r[E.id],M=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,w=M.length;R<w;R++){const I=Array.isArray(M[R])?M[R]:[M[R]];for(let z=0,_=I.length;z<_;z++){const A=I[z];if(m(A,R,z,P)===!0){const Q=A.__offset,j=Array.isArray(A.value)?A.value:[A.value];let T=0;for(let O=0;O<j.length;O++){const F=j[O],Y=y(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,Q+T,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,T),T+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,v,M,P){const R=E.value,w=v+"_"+M;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const I=P[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(E){const v=E.uniforms;let M=0;const P=16;for(let w=0,I=v.length;w<I;w++){const z=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,A=z.length;_<A;_++){const Q=z[_],j=Array.isArray(Q.value)?Q.value:[Q.value];for(let T=0,O=j.length;T<O;T++){const F=j[T],Y=y(F),X=M%P;X!==0&&P-X<Y.boundary&&(M+=P-X),Q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=M,M+=Y.storage}}}const R=M%P;return R>0&&(M+=P-R),E.__size=M,E.__cache={},this}function y(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){const v=E.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const m=new Uint32Array(4),g=new Int32Array(4);let y=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=SRGBColorSpace,this._useLegacyLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const v=this;let M=!1,P=0,R=0,w=null,I=-1,z=null;const _=new Vector4,A=new Vector4;let Q=null;const j=new Color(0);let T=0,O=t.width,F=t.height,Y=1,X=null,Z=null;const J=new Vector4(0,0,O,F),ae=new Vector4(0,0,O,F);let fe=!1;const ve=new Frustum;let U=!1,H=!1,oe=null;const Me=new Matrix4,Se=new Vector2,xe=new Vector3,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return w===null?Y:1}let L=n;function de(b,B){for(let W=0;W<b.length;W++){const $=b[W],k=t.getContext($,B);if(k!==null)return k}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),L=de(B,b),L===null)throw de(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let K,ue,ee,_e,N,ne,me,S,x,G,q,se,ie,Le,Ee,te,pe,Ce,ce,qe,Be,Pe,be,we;function C(){K=new WebGLExtensions(L),ue=new WebGLCapabilities(L,K,e),K.init(ue),Pe=new WebGLUtils(L,K,ue),ee=new WebGLState(L,K,ue),_e=new WebGLInfo(L),N=new WebGLProperties,ne=new WebGLTextures(L,K,ee,N,ue,Pe,_e),me=new WebGLCubeMaps(v),S=new WebGLCubeUVMaps(v),x=new WebGLAttributes(L,ue),be=new WebGLBindingStates(L,K,x,ue),G=new WebGLGeometries(L,x,_e,be),q=new WebGLObjects(L,G,x,_e),ce=new WebGLMorphtargets(L,ue,ne),te=new WebGLClipping(N),se=new WebGLPrograms(v,me,S,K,ue,be,te),ie=new WebGLMaterials(v,N),Le=new WebGLRenderLists,Ee=new WebGLRenderStates(K,ue),Ce=new WebGLBackground(v,me,S,ee,q,u,l),pe=new WebGLShadowMap(v,q,ue),we=new WebGLUniformsGroups(L,_e,ue,ee),qe=new WebGLBufferRenderer(L,K,_e,ue),Be=new WebGLIndexedBufferRenderer(L,K,_e,ue),_e.programs=se.programs,v.capabilities=ue,v.extensions=K,v.properties=N,v.renderLists=Le,v.shadowMap=pe,v.state=ee,v.info=_e}C();const re=new WebXRManager(v,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=K.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=K.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(O,F,!1))},this.getSize=function(b){return b.set(O,F)},this.setSize=function(b,B,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,F=B,t.width=Math.floor(b*Y),t.height=Math.floor(B*Y),W===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(O*Y,F*Y).floor()},this.setDrawingBufferSize=function(b,B,W){O=b,F=B,Y=W,t.width=Math.floor(b*W),t.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,B,W,$){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,B,W,$),ee.viewport(_.copy(J).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,B,W,$){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,B,W,$),ee.scissor(A.copy(ae).multiplyScalar(Y).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(b){ee.setScissorTest(fe=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(b=!0,B=!0,W=!0){let $=0;if(b){let k=!1;if(w!==null){const ye=w.texture.format;k=ye===RGBAIntegerFormat||ye===RGIntegerFormat||ye===RedIntegerFormat}if(k){const ye=w.texture.type,Re=ye===UnsignedByteType||ye===UnsignedIntType||ye===UnsignedShortType||ye===UnsignedInt248Type||ye===UnsignedShort4444Type||ye===UnsignedShort5551Type,De=Ce.getClearColor(),Ue=Ce.getClearAlpha(),Ve=De.r,Ne=De.g,Fe=De.b;Re?(m[0]=Ve,m[1]=Ne,m[2]=Fe,m[3]=Ue,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Ve,g[1]=Ne,g[2]=Fe,g[3]=Ue,L.clearBufferiv(L.COLOR,0,g))}else $|=L.COLOR_BUFFER_BIT}B&&($|=L.DEPTH_BUFFER_BIT),W&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Le.dispose(),Ee.dispose(),N.dispose(),me.dispose(),S.dispose(),q.dispose(),be.dispose(),we.dispose(),se.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ye),re.removeEventListener("sessionend",Ge),oe&&(oe.dispose(),oe=null),We.stop()};function Ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=_e.autoReset,B=pe.enabled,W=pe.autoUpdate,$=pe.needsUpdate,k=pe.type;C(),_e.autoReset=b,pe.enabled=B,pe.autoUpdate=W,pe.needsUpdate=$,pe.type=k}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function V(b){const B=b.target;B.removeEventListener("dispose",V),le(B)}function le(b){ge(b),N.remove(b)}function ge(b){const B=N.get(b).programs;B!==void 0&&(B.forEach(function(W){se.releaseProgram(W)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,$,k,ye){B===null&&(B=Ie);const Re=k.isMesh&&k.matrixWorld.determinant()<0,De=vt(b,B,W,$,k);ee.setMaterial($,Re);let Ue=W.index,Ve=1;if($.wireframe===!0){if(Ue=G.getWireframeAttribute(W),Ue===void 0)return;Ve=2}const Ne=W.drawRange,Fe=W.attributes.position;let je=Ne.start*Ve,Qe=(Ne.start+Ne.count)*Ve;ye!==null&&(je=Math.max(je,ye.start*Ve),Qe=Math.min(Qe,(ye.start+ye.count)*Ve)),Ue!==null?(je=Math.max(je,0),Qe=Math.min(Qe,Ue.count)):Fe!=null&&(je=Math.max(je,0),Qe=Math.min(Qe,Fe.count));const Ze=Qe-je;if(Ze<0||Ze===1/0)return;be.setup(k,$,De,W,Ue);let tt,Xe=qe;if(Ue!==null&&(tt=x.get(Ue),Xe=Be,Xe.setIndex(tt)),k.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*Te()),Xe.setMode(L.LINES)):Xe.setMode(L.TRIANGLES);else if(k.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),ee.setLineWidth(Oe*Te()),k.isLineSegments?Xe.setMode(L.LINES):k.isLineLoop?Xe.setMode(L.LINE_LOOP):Xe.setMode(L.LINE_STRIP)}else k.isPoints?Xe.setMode(L.POINTS):k.isSprite&&Xe.setMode(L.TRIANGLES);if(k.isBatchedMesh)Xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Xe.renderInstances(je,Ze,k.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ct=Math.min(W.instanceCount,Oe);Xe.renderInstances(je,Ze,ct)}else Xe.render(je,Ze)};function ze(b,B,W){b.transparent===!0&&b.side===DoubleSide&&b.forceSinglePass===!1?(b.side=BackSide,b.needsUpdate=!0,lt(b,B,W),b.side=FrontSide,b.needsUpdate=!0,lt(b,B,W),b.side=DoubleSide):lt(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),p=Ee.get(W),p.init(),E.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const $=new Set;return b.traverse(function(k){const ye=k.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const De=ye[Re];ze(De,W,k),$.add(De)}else ze(ye,W,k),$.add(ye)}),E.pop(),p=null,$},this.compileAsync=function(b,B,W=null){const $=this.compile(b,B,W);return new Promise(k=>{function ye(){if($.forEach(function(Re){N.get(Re).currentProgram.isReady()&&$.delete(Re)}),$.size===0){k(b);return}setTimeout(ye,10)}K.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ke=null;function He(b){ke&&ke(b)}function Ye(){We.stop()}function Ge(){We.start()}const We=new WebGLAnimation;We.setAnimationLoop(He),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(b){ke=b,re.setAnimationLoop(b),b===null?We.stop():We.start()},re.addEventListener("sessionstart",Ye),re.addEventListener("sessionend",Ge),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(B),B=re.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,w),p=Ee.get(b,E.length),p.init(),E.push(p),Me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ve.setFromProjectionMatrix(Me),H=this.localClippingEnabled,U=te.init(this.clippingPlanes,H),y=Le.get(b,f.length),y.init(),f.push(y),Ke(b,B,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(X,Z),this.info.render.frame++,U===!0&&te.beginShadows();const W=p.state.shadowsArray;if(pe.render(W,b,B),U===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1)&&Ce.render(y,b),p.setupLights(v._useLegacyLights),B.isArrayCamera){const $=B.cameras;for(let k=0,ye=$.length;k<ye;k++){const Re=$[k];nt(y,b,Re,Re.viewport)}}else nt(y,b,B);w!==null&&(ne.updateMultisampleRenderTarget(w),ne.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(v,b,B),be.resetDefaultState(),I=-1,z=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Ke(b,B,W,$){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ve.intersectsSprite(b)){$&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const Re=q.update(b),De=b.material;De.visible&&y.push(b,Re,De,W,xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ve.intersectsObject(b))){const Re=q.update(b),De=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xe.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),xe.copy(Re.boundingSphere.center)),xe.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(De)){const Ue=Re.groups;for(let Ve=0,Ne=Ue.length;Ve<Ne;Ve++){const Fe=Ue[Ve],je=De[Fe.materialIndex];je&&je.visible&&y.push(b,Re,je,W,xe.z,Fe)}}else De.visible&&y.push(b,Re,De,W,xe.z,null)}}const ye=b.children;for(let Re=0,De=ye.length;Re<De;Re++)Ke(ye[Re],B,W,$)}function nt(b,B,W,$){const k=b.opaque,ye=b.transmissive,Re=b.transparent;p.setupLightsView(W),U===!0&&te.setGlobalState(v.clippingPlanes,W),ye.length>0&&at(k,ye,B,W),$&&ee.viewport(_.copy($)),k.length>0&&ot(k,B,W),ye.length>0&&ot(ye,B,W),Re.length>0&&ot(Re,B,W),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function at(b,B,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ye=ue.isWebGL2;oe===null&&(oe=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:ye?4:0})),v.getDrawingBufferSize(Se),ye?oe.setSize(Se.x,Se.y):oe.setSize(floorPowerOfTwo(Se.x),floorPowerOfTwo(Se.y));const Re=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(j),T=v.getClearAlpha(),T<1&&v.setClearColor(16777215,.5),v.clear();const De=v.toneMapping;v.toneMapping=NoToneMapping,ot(b,W,$),ne.updateMultisampleRenderTarget(oe),ne.updateRenderTargetMipmap(oe);let Ue=!1;for(let Ve=0,Ne=B.length;Ve<Ne;Ve++){const Fe=B[Ve],je=Fe.object,Qe=Fe.geometry,Ze=Fe.material,tt=Fe.group;if(Ze.side===DoubleSide&&je.layers.test($.layers)){const Xe=Ze.side;Ze.side=BackSide,Ze.needsUpdate=!0,ft(je,W,$,Qe,Ze,tt),Ze.side=Xe,Ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(ne.updateMultisampleRenderTarget(oe),ne.updateRenderTargetMipmap(oe)),v.setRenderTarget(Re),v.setClearColor(j,T),v.toneMapping=De}function ot(b,B,W){const $=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ye=b.length;k<ye;k++){const Re=b[k],De=Re.object,Ue=Re.geometry,Ve=$===null?Re.material:$,Ne=Re.group;De.layers.test(W.layers)&&ft(De,B,W,Ue,Ve,Ne)}}function ft(b,B,W,$,k,ye){b.onBeforeRender(v,B,W,$,k,ye),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(v,B,W,$,b,ye),k.transparent===!0&&k.side===DoubleSide&&k.forceSinglePass===!1?(k.side=BackSide,k.needsUpdate=!0,v.renderBufferDirect(W,B,$,k,b,ye),k.side=FrontSide,k.needsUpdate=!0,v.renderBufferDirect(W,B,$,k,b,ye),k.side=DoubleSide):v.renderBufferDirect(W,B,$,k,b,ye),b.onAfterRender(v,B,W,$,k,ye)}function lt(b,B,W){B.isScene!==!0&&(B=Ie);const $=N.get(b),k=p.state.lights,ye=p.state.shadowsArray,Re=k.state.version,De=se.getParameters(b,k.state,ye,B,W),Ue=se.getProgramCacheKey(De);let Ve=$.programs;$.environment=b.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(b.isMeshStandardMaterial?S:me).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",V),Ve=new Map,$.programs=Ve);let Ne=Ve.get(Ue);if(Ne!==void 0){if($.currentProgram===Ne&&$.lightsStateVersion===Re)return mt(b,De),Ne}else De.uniforms=se.getUniforms(b),b.onBuild(W,De,v),b.onBeforeCompile(De,v),Ne=se.acquireProgram(De,Ue),Ve.set(Ue,Ne),$.uniforms=De.uniforms;const Fe=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=te.uniform),mt(b,De),$.needsLights=yt(b),$.lightsStateVersion=Re,$.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Ne,$.uniformsList=null,Ne}function pt(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=WebGLUniforms.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function mt(b,B){const W=N.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function vt(b,B,W,$,k){B.isScene!==!0&&(B=Ie),ne.resetTextureUnits();const ye=B.fog,Re=$.isMeshStandardMaterial?B.environment:null,De=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:LinearSRGBColorSpace,Ue=($.isMeshStandardMaterial?S:me).get($.envMap||Re),Ve=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Fe=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,Qe=!!W.morphAttributes.color;let Ze=NoToneMapping;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ze=v.toneMapping);const tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xe=tt!==void 0?tt.length:0,Oe=N.get($),ct=p.state.lights;if(U===!0&&(H===!0||b!==z)){const et=b===z&&$.id===I;te.setState($,b,et)}let $e=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ct.state.version||Oe.outputColorSpace!==De||k.isBatchedMesh&&Oe.batching===!1||!k.isBatchedMesh&&Oe.batching===!0||k.isInstancedMesh&&Oe.instancing===!1||!k.isInstancedMesh&&Oe.instancing===!0||k.isSkinnedMesh&&Oe.skinning===!1||!k.isSkinnedMesh&&Oe.skinning===!0||k.isInstancedMesh&&Oe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Oe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Oe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Oe.instancingMorph===!1&&k.morphTexture!==null||Oe.envMap!==Ue||$.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==te.numPlanes||Oe.numIntersection!==te.numIntersection)||Oe.vertexAlphas!==Ve||Oe.vertexTangents!==Ne||Oe.morphTargets!==Fe||Oe.morphNormals!==je||Oe.morphColors!==Qe||Oe.toneMapping!==Ze||ue.isWebGL2===!0&&Oe.morphTargetsCount!==Xe)&&($e=!0):($e=!0,Oe.__version=$.version);let it=Oe.currentProgram;$e===!0&&(it=lt($,B,k));let gt=!1,st=!1,ht=!1;const Je=it.getUniforms(),rt=Oe.uniforms;if(ee.useProgram(it.program)&&(gt=!0,st=!0,ht=!0),$.id!==I&&(I=$.id,st=!0),gt||z!==b){Je.setValue(L,"projectionMatrix",b.projectionMatrix),Je.setValue(L,"viewMatrix",b.matrixWorldInverse);const et=Je.map.cameraPosition;et!==void 0&&et.setValue(L,xe.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&Je.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Je.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,st=!0,ht=!0)}if(k.isSkinnedMesh){Je.setOptional(L,k,"bindMatrix"),Je.setOptional(L,k,"bindMatrixInverse");const et=k.skeleton;et&&(ue.floatVertexTextures?(et.boneTexture===null&&et.computeBoneTexture(),Je.setValue(L,"boneTexture",et.boneTexture,ne)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Je.setOptional(L,k,"batchingTexture"),Je.setValue(L,"batchingTexture",k._matricesTexture,ne));const ut=W.morphAttributes;if((ut.position!==void 0||ut.normal!==void 0||ut.color!==void 0&&ue.isWebGL2===!0)&&ce.update(k,W,it),(st||Oe.receiveShadow!==k.receiveShadow)&&(Oe.receiveShadow=k.receiveShadow,Je.setValue(L,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(rt.envMap.value=Ue,rt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),st&&(Je.setValue(L,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&xt(rt,ht),ye&&$.fog===!0&&ie.refreshFogUniforms(rt,ye),ie.refreshMaterialUniforms(rt,$,Y,F,oe),WebGLUniforms.upload(L,pt(Oe),rt,ne)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(L,pt(Oe),rt,ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Je.setValue(L,"center",k.center),Je.setValue(L,"modelViewMatrix",k.modelViewMatrix),Je.setValue(L,"normalMatrix",k.normalMatrix),Je.setValue(L,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const et=$.uniformsGroups;for(let dt=0,Mt=et.length;dt<Mt;dt++)if(ue.isWebGL2){const _t=et[dt];we.update(_t,it),we.bind(_t,it)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return it}function xt(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function yt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,B,W){N.get(b.texture).__webglTexture=B,N.get(b.depthTexture).__webglTexture=W;const $=N.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const W=N.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,W=0){w=b,P=B,R=W;let $=!0,k=null,ye=!1,Re=!1;if(b){const Ue=N.get(b);Ue.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(L.FRAMEBUFFER,null),$=!1):Ue.__webglFramebuffer===void 0?ne.setupRenderTarget(b):Ue.__hasExternalTextures&&ne.rebindTextures(b,N.get(b.texture).__webglTexture,N.get(b.depthTexture).__webglTexture);const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Re=!0);const Ne=N.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?k=Ne[B][W]:k=Ne[B],ye=!0):ue.isWebGL2&&b.samples>0&&ne.useMultisampledRTT(b)===!1?k=N.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[W]:k=Ne,_.copy(b.viewport),A.copy(b.scissor),Q=b.scissorTest}else _.copy(J).multiplyScalar(Y).floor(),A.copy(ae).multiplyScalar(Y).floor(),Q=fe;if(ee.bindFramebuffer(L.FRAMEBUFFER,k)&&ue.drawBuffers&&$&&ee.drawBuffers(b,k),ee.viewport(_),ee.scissor(A),ee.setScissorTest(Q),ye){const Ue=N.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,W)}else if(Re){const Ue=N.get(b.texture),Ve=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,W||0,Ve)}I=-1},this.readRenderTargetPixels=function(b,B,W,$,k,ye,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=N.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){ee.bindFramebuffer(L.FRAMEBUFFER,De);try{const Ue=b.texture,Ve=Ue.format,Ne=Ue.type;if(Ve!==RGBAFormat&&Pe.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===HalfFloatType&&(K.has("EXT_color_buffer_half_float")||ue.isWebGL2&&K.has("EXT_color_buffer_float"));if(Ne!==UnsignedByteType&&Pe.convert(Ne)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===FloatType&&(ue.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-$&&W>=0&&W<=b.height-k&&L.readPixels(B,W,$,k,Pe.convert(Ve),Pe.convert(Ne),ye)}finally{const Ue=w!==null?N.get(w).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(b,B,W=0){const $=Math.pow(2,-W),k=Math.floor(B.image.width*$),ye=Math.floor(B.image.height*$);ne.setTexture2D(B,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,b.x,b.y,k,ye),ee.unbindTexture()},this.copyTextureToTexture=function(b,B,W,$=0){const k=B.image.width,ye=B.image.height,Re=Pe.convert(W.format),De=Pe.convert(W.type);ne.setTexture2D(W,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,$,b.x,b.y,k,ye,Re,De,B.image.data):B.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,$,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Re,B.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,$,b.x,b.y,Re,De,B.image),$===0&&W.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W,$,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=Math.round(b.max.x-b.min.x),Re=Math.round(b.max.y-b.min.y),De=b.max.z-b.min.z+1,Ue=Pe.convert($.format),Ve=Pe.convert($.type);let Ne;if($.isData3DTexture)ne.setTexture3D($,0),Ne=L.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)ne.setTexture2DArray($,0),Ne=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,$.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,$.unpackAlignment);const Fe=L.getParameter(L.UNPACK_ROW_LENGTH),je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qe=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),tt=L.getParameter(L.UNPACK_SKIP_IMAGES),Xe=W.isCompressedTexture?W.mipmaps[k]:W.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?L.texSubImage3D(Ne,k,B.x,B.y,B.z,ye,Re,De,Ue,Ve,Xe.data):$.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,k,B.x,B.y,B.z,ye,Re,De,Ue,Xe.data):L.texSubImage3D(Ne,k,B.x,B.y,B.z,ye,Re,De,Ue,Ve,Xe),L.pixelStorei(L.UNPACK_ROW_LENGTH,Fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tt),k===0&&$.generateMipmaps&&L.generateMipmap(Ne),ee.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ne.setTextureCube(b,0):b.isData3DTexture?ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ne.setTexture2DArray(b,0):ne.setTexture2D(b,0),ee.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,ee.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===DisplayP3ColorSpace?"display-p3":"srgb",t.unpackColorSpace=ColorManagement.workingColorSpace===LinearDisplayP3ColorSpace?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class InterleavedBuffer{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=generateUUID()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return warnOnce("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _vector$6=new Vector3;class InterleavedBufferAttribute{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.applyMatrix4(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.applyNormalMatrix(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.transformDirection(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=denormalize(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=denormalize(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=denormalize(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=denormalize(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),r=normalize(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new BufferAttribute(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class SpriteMaterial extends Material{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _geometry;const _intersectPoint=new Vector3,_worldScale=new Vector3,_mvPosition=new Vector3,_alignedPosition=new Vector2,_rotatedPosition=new Vector2,_viewWorldMatrix=new Matrix4,_vA=new Vector3,_vB=new Vector3,_vC=new Vector3,_uvA=new Vector2,_uvB=new Vector2,_uvC=new Vector2;class Sprite extends Object3D{constructor(e=new SpriteMaterial){if(super(),this.isSprite=!0,this.type="Sprite",_geometry===void 0){_geometry=new BufferGeometry;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new InterleavedBuffer(t,5);_geometry.setIndex([0,1,2,0,2,3]),_geometry.setAttribute("position",new InterleavedBufferAttribute(n,3,0,!1)),_geometry.setAttribute("uv",new InterleavedBufferAttribute(n,2,3,!1))}this.geometry=_geometry,this.material=e,this.center=new Vector2(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_worldScale.setFromMatrixScale(this.matrixWorld),_viewWorldMatrix.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_mvPosition.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_worldScale.multiplyScalar(-_mvPosition.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;transformVertex(_vA.set(-.5,-.5,0),_mvPosition,a,_worldScale,r,s),transformVertex(_vB.set(.5,-.5,0),_mvPosition,a,_worldScale,r,s),transformVertex(_vC.set(.5,.5,0),_mvPosition,a,_worldScale,r,s),_uvA.set(0,0),_uvB.set(1,0),_uvC.set(1,1);let o=e.ray.intersectTriangle(_vA,_vB,_vC,!1,_intersectPoint);if(o===null&&(transformVertex(_vB.set(-.5,.5,0),_mvPosition,a,_worldScale,r,s),_uvB.set(0,1),o=e.ray.intersectTriangle(_vA,_vC,_vB,!1,_intersectPoint),o===null))return;const l=e.ray.origin.distanceTo(_intersectPoint);l<e.near||l>e.far||t.push({distance:l,point:_intersectPoint.clone(),uv:Triangle.getInterpolation(_intersectPoint,_vA,_vB,_vC,_uvA,_uvB,_uvC,new Vector2),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function transformVertex(i,e,t,n,r,s){_alignedPosition.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(_rotatedPosition.x=s*_alignedPosition.x-r*_alignedPosition.y,_rotatedPosition.y=r*_alignedPosition.x+s*_alignedPosition.y):_rotatedPosition.copy(_alignedPosition),i.copy(e),i.x+=_rotatedPosition.x,i.y+=_rotatedPosition.y,i.applyMatrix4(_viewWorldMatrix)}class DataTexture extends Texture{constructor(e=null,t=1,n=1,r,s,a,o,l,c=NearestFilter,h=NearestFilter,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LineBasicMaterial extends Material{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _start$1=new Vector3,_end$1=new Vector3,_inverseMatrix$1=new Matrix4,_ray$1=new Ray,_sphere$1=new Sphere;class Line extends Object3D{constructor(e=new BufferGeometry,t=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)_start$1.fromBufferAttribute(t,r-1),_end$1.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=_start$1.distanceTo(_end$1);e.setAttribute("lineDistance",new Float32BufferAttribute(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$1.copy(n.boundingSphere),_sphere$1.applyMatrix4(r),_sphere$1.radius+=s,e.ray.intersectsSphere(_sphere$1)===!1)return;_inverseMatrix$1.copy(r).invert(),_ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new Vector3,h=new Vector3,d=new Vector3,u=new Vector3,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let v=f,M=E-1;v<M;v+=m){const P=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,R),_ray$1.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(u);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let v=f,M=E-1;v<M;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),_ray$1.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const _start=new Vector3,_end=new Vector3;class LineSegments extends Line{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)_start.fromBufferAttribute(t,r),_end.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+_start.distanceTo(_end);e.setAttribute("lineDistance",new Float32BufferAttribute(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CanvasTexture extends Texture{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,m=(a-h)/u;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Vector2:new Vector3);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Vector3,r=[],s=[],a=[],o=new Vector3,l=new Matrix4;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new Vector3)}s[0]=new Vector3,a[0]=new Vector3;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(clamp(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(clamp(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class EllipseCurve extends Curve{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Vector2){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*d+this.aX,c=u*d+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ArcCurve extends EllipseCurve{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function CubicPoly(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,m*=h,r(a,o,u,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;class CatmullRomCurve3 extends Curve{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Vector3){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(tmp.subVectors(r[0],r[1]).add(r[0]),c=tmp);const d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(tmp.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=tmp),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),px.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),py.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),pz.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(px.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),py.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),pz.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(px.calc(l),py.calc(l),pz.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Vector3().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function CatmullRom(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function QuadraticBezierP0(i,e){const t=1-i;return t*t*e}function QuadraticBezierP1(i,e){return 2*(1-i)*i*e}function QuadraticBezierP2(i,e){return i*i*e}function QuadraticBezier(i,e,t,n){return QuadraticBezierP0(i,e)+QuadraticBezierP1(i,t)+QuadraticBezierP2(i,n)}function CubicBezierP0(i,e){const t=1-i;return t*t*t*e}function CubicBezierP1(i,e){const t=1-i;return 3*t*t*i*e}function CubicBezierP2(i,e){return 3*(1-i)*i*i*e}function CubicBezierP3(i,e){return i*i*i*e}function CubicBezier(i,e,t,n,r){return CubicBezierP0(i,e)+CubicBezierP1(i,t)+CubicBezierP2(i,n)+CubicBezierP3(i,r)}class CubicBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2,r=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Vector2){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(CubicBezier(e,r.x,s.x,a.x,o.x),CubicBezier(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CubicBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3,r=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Vector3){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(CubicBezier(e,r.x,s.x,a.x,o.x),CubicBezier(e,r.y,s.y,a.y,o.y),CubicBezier(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LineCurve extends Curve{constructor(e=new Vector2,t=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Vector2){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector2){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LineCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Vector3){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector3){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector2){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(QuadraticBezier(e,r.x,s.x,a.x),QuadraticBezier(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector3){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(QuadraticBezier(e,r.x,s.x,a.x),QuadraticBezier(e,r.y,s.y,a.y),QuadraticBezier(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SplineCurve extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Vector2){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(CatmullRom(o,l.x,c.x,h.x,d.x),CatmullRom(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Vector2().fromArray(r))}return this}}var Curves=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve});class CurvePath extends Curve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Curves[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Curves[r.type]().fromJSON(r))}return this}}class Path extends CurvePath{constructor(e){super(),this.type="Path",this.currentPoint=new Vector2,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new LineCurve(this.currentPoint.clone(),new Vector2(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,r),new Vector2(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new SplineCurve(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new EllipseCurve(e,t,n,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Shape extends Path{constructor(e){super(e),this.uuid=generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Path().fromJSON(r))}return this}}const Earcut={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=linkedList(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,m;if(n&&(s=eliminateHoles(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<r;g+=t)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return earcutLinked(s,a,t,o,l,m,0),a}};function linkedList(i,e,t,n,r){let s,a;if(r===signedArea(i,e,t,n)>0)for(s=e;s<t;s+=n)a=insertNode(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=insertNode(s,i[s],i[s+1],a);return a&&equals(a,a.next)&&(removeNode(a),a=a.next),a}function filterPoints(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(equals(t,t.next)||area(t.prev,t,t.next)===0)){if(removeNode(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function earcutLinked(i,e,t,n,r,s,a){if(!i)return;!a&&s&&indexCurve(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?isEarHashed(i,n,r,s):isEar(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),removeNode(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=cureLocalIntersections(filterPoints(i),e,t),earcutLinked(i,e,t,n,r,s,2)):a===2&&splitEarcut(i,e,t,n,r,s):earcutLinked(filterPoints(i),e,t,n,r,s,1);break}}}function isEar(i){const e=i.prev,t=i,n=i.next;if(area(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=m&&pointInTriangle(r,o,s,l,a,c,g.x,g.y)&&area(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function isEarHashed(i,e,t,n){const r=i.prev,s=i,a=i.next;if(area(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,y=o>l?o>c?o:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,f=zOrder(m,g,e,t,n),E=zOrder(y,p,e,t,n);let v=i.prevZ,M=i.nextZ;for(;v&&v.z>=f&&M&&M.z<=E;){if(v.x>=m&&v.x<=y&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&pointInTriangle(o,h,l,d,c,u,v.x,v.y)&&area(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=y&&M.y>=g&&M.y<=p&&M!==r&&M!==a&&pointInTriangle(o,h,l,d,c,u,M.x,M.y)&&area(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=y&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&pointInTriangle(o,h,l,d,c,u,v.x,v.y)&&area(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=E;){if(M.x>=m&&M.x<=y&&M.y>=g&&M.y<=p&&M!==r&&M!==a&&pointInTriangle(o,h,l,d,c,u,M.x,M.y)&&area(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cureLocalIntersections(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!equals(r,s)&&intersects(r,n,n.next,s)&&locallyInside(r,s)&&locallyInside(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),removeNode(n),removeNode(n.next),n=i=s),n=n.next}while(n!==i);return filterPoints(n)}function splitEarcut(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&isValidDiagonal(a,o)){let l=splitPolygon(a,o);a=filterPoints(a,a.next),l=filterPoints(l,l.next),earcutLinked(a,e,t,n,r,s,0),earcutLinked(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function eliminateHoles(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=linkedList(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(getLeftmost(c));for(r.sort(compareX),s=0;s<r.length;s++)t=eliminateHole(r[s],t);return t}function compareX(i,e){return i.x-e.x}function eliminateHole(i,e){const t=findHoleBridge(i,e);if(!t)return e;const n=splitPolygon(t,i);return filterPoints(n,n.next),filterPoints(t,t.next)}function findHoleBridge(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,r=t.x<t.next.x?t:t.next,u===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&pointInTriangle(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),locallyInside(t,i)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&sectorContainsSector(r,t)))&&(r=t,h=d)),t=t.next;while(t!==o);return r}function sectorContainsSector(i,e){return area(i.prev,i,e.prev)<0&&area(e.next,i,i.next)<0}function indexCurve(i,e,t,n){let r=i;do r.z===0&&(r.z=zOrder(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,sortLinked(r)}function sortLinked(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function zOrder(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function getLeftmost(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pointInTriangle(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function isValidDiagonal(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!intersectsPolygon(i,e)&&(locallyInside(i,e)&&locallyInside(e,i)&&middleInside(i,e)&&(area(i.prev,i,e.prev)||area(i,e.prev,e))||equals(i,e)&&area(i.prev,i,i.next)>0&&area(e.prev,e,e.next)>0)}function area(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function equals(i,e){return i.x===e.x&&i.y===e.y}function intersects(i,e,t,n){const r=sign(area(i,e,t)),s=sign(area(i,e,n)),a=sign(area(t,n,i)),o=sign(area(t,n,e));return!!(r!==s&&a!==o||r===0&&onSegment(i,t,e)||s===0&&onSegment(i,n,e)||a===0&&onSegment(t,i,n)||o===0&&onSegment(t,e,n))}function onSegment(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sign(i){return i>0?1:i<0?-1:0}function intersectsPolygon(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&intersects(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function locallyInside(i,e){return area(i.prev,i,i.next)<0?area(i,e,i.next)>=0&&area(i,i.prev,e)>=0:area(i,e,i.prev)<0||area(i,i.next,e)<0}function middleInside(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function splitPolygon(i,e){const t=new Node(i.i,i.x,i.y),n=new Node(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function insertNode(i,e,t,n){const r=new Node(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function removeNode(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Node(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class ShapeUtils{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return ShapeUtils.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];removeDupEndPts(e),addContour(n,e);let a=e.length;t.forEach(removeDupEndPts);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,addContour(n,t[l]);const o=Earcut.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function removeDupEndPts(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function addContour(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ExtrudeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(.5,.5),new Vector2(-.5,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Float32BufferAttribute(r,3)),this.setAttribute("uv",new Float32BufferAttribute(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:WorldUVGenerator;let v,M=!1,P,R,w,I;f&&(v=f.getSpacedPoints(h),M=!0,u=!1,P=f.computeFrenetFrames(h,!1),R=new Vector3,w=new Vector3,I=new Vector3),u||(p=0,m=0,g=0,y=0);const z=o.extractPoints(c);let _=z.shape;const A=z.holes;if(!ShapeUtils.isClockWise(_)){_=_.reverse();for(let L=0,de=A.length;L<de;L++){const K=A[L];ShapeUtils.isClockWise(K)&&(A[L]=K.reverse())}}const j=ShapeUtils.triangulateShape(_,A),T=_;for(let L=0,de=A.length;L<de;L++){const K=A[L];_=_.concat(K)}function O(L,de,K){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(de,K)}const F=_.length,Y=j.length;function X(L,de,K){let ue,ee,_e;const N=L.x-de.x,ne=L.y-de.y,me=K.x-L.x,S=K.y-L.y,x=N*N+ne*ne,G=N*S-ne*me;if(Math.abs(G)>Number.EPSILON){const q=Math.sqrt(x),se=Math.sqrt(me*me+S*S),ie=de.x-ne/q,Le=de.y+N/q,Ee=K.x-S/se,te=K.y+me/se,pe=((Ee-ie)*S-(te-Le)*me)/(N*S-ne*me);ue=ie+N*pe-L.x,ee=Le+ne*pe-L.y;const Ce=ue*ue+ee*ee;if(Ce<=2)return new Vector2(ue,ee);_e=Math.sqrt(Ce/2)}else{let q=!1;N>Number.EPSILON?me>Number.EPSILON&&(q=!0):N<-Number.EPSILON?me<-Number.EPSILON&&(q=!0):Math.sign(ne)===Math.sign(S)&&(q=!0),q?(ue=-ne,ee=N,_e=Math.sqrt(x)):(ue=N,ee=ne,_e=Math.sqrt(x/2))}return new Vector2(ue/_e,ee/_e)}const Z=[];for(let L=0,de=T.length,K=de-1,ue=L+1;L<de;L++,K++,ue++)K===de&&(K=0),ue===de&&(ue=0),Z[L]=X(T[L],T[K],T[ue]);const J=[];let ae,fe=Z.concat();for(let L=0,de=A.length;L<de;L++){const K=A[L];ae=[];for(let ue=0,ee=K.length,_e=ee-1,N=ue+1;ue<ee;ue++,_e++,N++)_e===ee&&(_e=0),N===ee&&(N=0),ae[ue]=X(K[ue],K[_e],K[N]);J.push(ae),fe=fe.concat(ae)}for(let L=0;L<p;L++){const de=L/p,K=m*Math.cos(de*Math.PI/2),ue=g*Math.sin(de*Math.PI/2)+y;for(let ee=0,_e=T.length;ee<_e;ee++){const N=O(T[ee],Z[ee],ue);Me(N.x,N.y,-K)}for(let ee=0,_e=A.length;ee<_e;ee++){const N=A[ee];ae=J[ee];for(let ne=0,me=N.length;ne<me;ne++){const S=O(N[ne],ae[ne],ue);Me(S.x,S.y,-K)}}}const ve=g+y;for(let L=0;L<F;L++){const de=u?O(_[L],fe[L],ve):_[L];M?(w.copy(P.normals[0]).multiplyScalar(de.x),R.copy(P.binormals[0]).multiplyScalar(de.y),I.copy(v[0]).add(w).add(R),Me(I.x,I.y,I.z)):Me(de.x,de.y,0)}for(let L=1;L<=h;L++)for(let de=0;de<F;de++){const K=u?O(_[de],fe[de],ve):_[de];M?(w.copy(P.normals[L]).multiplyScalar(K.x),R.copy(P.binormals[L]).multiplyScalar(K.y),I.copy(v[L]).add(w).add(R),Me(I.x,I.y,I.z)):Me(K.x,K.y,d/h*L)}for(let L=p-1;L>=0;L--){const de=L/p,K=m*Math.cos(de*Math.PI/2),ue=g*Math.sin(de*Math.PI/2)+y;for(let ee=0,_e=T.length;ee<_e;ee++){const N=O(T[ee],Z[ee],ue);Me(N.x,N.y,d+K)}for(let ee=0,_e=A.length;ee<_e;ee++){const N=A[ee];ae=J[ee];for(let ne=0,me=N.length;ne<me;ne++){const S=O(N[ne],ae[ne],ue);M?Me(S.x,S.y+v[h-1].y,v[h-1].x+K):Me(S.x,S.y,d+K)}}}U(),H();function U(){const L=r.length/3;if(u){let de=0,K=F*de;for(let ue=0;ue<Y;ue++){const ee=j[ue];Se(ee[2]+K,ee[1]+K,ee[0]+K)}de=h+p*2,K=F*de;for(let ue=0;ue<Y;ue++){const ee=j[ue];Se(ee[0]+K,ee[1]+K,ee[2]+K)}}else{for(let de=0;de<Y;de++){const K=j[de];Se(K[2],K[1],K[0])}for(let de=0;de<Y;de++){const K=j[de];Se(K[0]+F*h,K[1]+F*h,K[2]+F*h)}}n.addGroup(L,r.length/3-L,0)}function H(){const L=r.length/3;let de=0;oe(T,de),de+=T.length;for(let K=0,ue=A.length;K<ue;K++){const ee=A[K];oe(ee,de),de+=ee.length}n.addGroup(L,r.length/3-L,1)}function oe(L,de){let K=L.length;for(;--K>=0;){const ue=K;let ee=K-1;ee<0&&(ee=L.length-1);for(let _e=0,N=h+p*2;_e<N;_e++){const ne=F*_e,me=F*(_e+1),S=de+ue+ne,x=de+ee+ne,G=de+ee+me,q=de+ue+me;xe(S,x,G,q)}}}function Me(L,de,K){l.push(L),l.push(de),l.push(K)}function Se(L,de,K){Ie(L),Ie(de),Ie(K);const ue=r.length/3,ee=E.generateTopUV(n,r,ue-3,ue-2,ue-1);Te(ee[0]),Te(ee[1]),Te(ee[2])}function xe(L,de,K,ue){Ie(L),Ie(de),Ie(ue),Ie(de),Ie(K),Ie(ue);const ee=r.length/3,_e=E.generateSideWallUV(n,r,ee-6,ee-3,ee-2,ee-1);Te(_e[0]),Te(_e[1]),Te(_e[3]),Te(_e[1]),Te(_e[2]),Te(_e[3])}function Ie(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Te(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return toJSON$1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Curves[r.type]().fromJSON(r)),new ExtrudeGeometry(n,e.options)}}const WorldUVGenerator={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new Vector2(s,a),new Vector2(o,l),new Vector2(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[r*3],m=e[r*3+1],g=e[r*3+2],y=e[s*3],p=e[s*3+1],f=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Vector2(a,1-l),new Vector2(c,1-d),new Vector2(u,1-g),new Vector2(y,1-f)]:[new Vector2(o,1-l),new Vector2(h,1-d),new Vector2(m,1-g),new Vector2(p,1-f)]}};function toJSON$1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class TorusGeometry extends BufferGeometry{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new Vector3,d=new Vector3,u=new Vector3;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const y=g/r*s,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const y=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,f=(r+1)*(m-1)+g,E=(r+1)*m+g;a.push(y,p,E),a.push(p,f,E)}this.setIndex(a),this.setAttribute("position",new Float32BufferAttribute(o,3)),this.setAttribute("normal",new Float32BufferAttribute(l,3)),this.setAttribute("uv",new Float32BufferAttribute(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new TorusGeometry(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class WireframeGeometry extends BufferGeometry{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new Vector3,s=new Vector3;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,m=d.count;for(let g=u,y=u+m;g<y;g+=3)for(let p=0;p<3;p++){const f=o.getX(g+p),E=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,E),isUniqueEdge(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),isUniqueEdge(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Float32BufferAttribute(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function isUniqueEdge(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cache={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cache.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:n,onError:r});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=loading[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=u?parseInt(u):0,g=m!==0;let y=0;const p=new ReadableStream({start(f){E();function E(){d.read().then(({done:v,value:M})=>{if(v)f.close();else{y+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let R=0,w=h.length;R<w;R++){const I=h[R];I.onProgress&&I.onProgress(P)}f.enqueue(M),E()}})}}});return new Response(p)}else throw new HttpError(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(u);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Cache.add(e,c);const h=loading[e];delete loading[e];for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=loading[e];if(h===void 0)throw this.manager.itemError(e),c;delete loading[e];for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class DataTextureLoader extends Loader{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new DataTexture,o=new FileLoader(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:ClampToEdgeWrapping,a.wrapT=c.wrapT!==void 0?c.wrapT:ClampToEdgeWrapping,a.magFilter=c.magFilter!==void 0?c.magFilter:LinearFilter,a.minFilter=c.minFilter!==void 0?c.minFilter:LinearFilter,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=LinearMipmapLinearFilter),c.mipmapCount===1&&(a.minFilter=LinearFilter),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget$1),t.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(e.matrixWorld),n.position.copy(_lightPositionWorld),_lookTarget.copy(n.position),_lookTarget.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_lookTarget),n.updateMatrixWorld(),r.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix)}}class PointLight extends Light{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const _matrix=new Matrix4;class Raycaster{constructor(e,t,n=0,r=1/0){this.ray=new Ray(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _matrix.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_matrix),this}intersectObject(e,t=!0,n=[]){return intersect(e,this,n,t),n.sort(ascSort),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)intersect(e[r],this,n,t);return n.sort(ascSort),n}}function ascSort(i,e){return i.distance-e.distance}function intersect(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)intersect(r[s],e,t,!0)}}class Spherical{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GridHelper extends LineSegments{constructor(e=10,t=10,n=4473924,r=8947848){n=new Color(n),r=new Color(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,m=0,g=-o;u<=t;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const y=u===s?n:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const h=new BufferGeometry;h.setAttribute("position",new Float32BufferAttribute(l,3)),h.setAttribute("color",new Float32BufferAttribute(c,3));const d=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ShapePath{constructor(){this.type="ShapePath",this.color=new Color,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Path,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const E=[];for(let v=0,M=f.length;v<M;v++){const P=f[v],R=new Shape;R.curves=P.curves,E.push(R)}return E}function n(f,E){const v=E.length;let M=!1;for(let P=v-1,R=0;R<v;P=R++){let w=E[P],I=E[R],z=I.x-w.x,_=I.y-w.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(w=E[R],z=-z,I=E[P],_=-_),f.y<w.y||f.y>I.y)continue;if(f.y===w.y){if(f.x===w.x)return!0}else{const A=_*(f.x-w.x)-z*(f.y-w.y);if(A===0)return!0;if(A<0)continue;M=!M}}else{if(f.y!==w.y)continue;if(I.x<=f.x&&f.x<=w.x||w.x<=f.x&&f.x<=I.x)return!0}}return M}const r=ShapeUtils.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Shape,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const d=[],u=[];let m=[],g=0,y;u[g]=void 0,m[g]=[];for(let f=0,E=s.length;f<E;f++)o=s[f],y=o.getPoints(),a=r(y),a=e?!a:a,a?(!h&&u[g]&&g++,u[g]={s:new Shape,p:y},u[g].s.curves=o.curves,h&&g++,m[g]=[]):m[g].push({h:o,p:y[0]});if(!u[0])return t(s);if(u.length>1){let f=!1,E=0;for(let v=0,M=u.length;v<M;v++)d[v]=[];for(let v=0,M=u.length;v<M;v++){const P=m[v];for(let R=0;R<P.length;R++){const w=P[R];let I=!0;for(let z=0;z<u.length;z++)n(w.p,u[z].p)&&(v!==z&&E++,I?(I=!1,d[z].push(w)):f=!0);I&&d[v].push(w)}}E>0&&f===!1&&(m=d)}let p;for(let f=0,E=u.length;f<E;f++){l=u[f].s,c.push(l),p=m[f];for(let v=0,M=p.length;v<M;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"},_ray=new Ray,_plane=new Plane,TILT_LIMIT=Math.cos(70*MathUtils.DEG2RAD);class OrbitControls extends EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.cursor=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ee),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_changeEvent),n.update(),s=r.NONE},this.update=function(){const C=new Vector3,re=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),Ae=re.clone().invert(),D=new Vector3,he=new Quaternion,V=new Vector3,le=2*Math.PI;return function(ze=null){const ke=n.object.position;C.copy(ke).sub(n.target),C.applyQuaternion(re),o.setFromVector3(C),n.autoRotate&&s===r.NONE&&Q(_(ze)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let He=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;isFinite(He)&&isFinite(Ye)&&(He<-Math.PI?He+=le:He>Math.PI&&(He-=le),Ye<-Math.PI?Ye+=le:Ye>Math.PI&&(Ye-=le),He<=Ye?o.theta=Math.max(He,Math.min(Ye,o.theta)):o.theta=o.theta>(He+Ye)/2?Math.max(He,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ge=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)o.radius=J(o.radius);else{const We=o.radius;o.radius=J(o.radius*c),Ge=We!=o.radius}if(C.setFromSpherical(o),C.applyQuaternion(Ae),ke.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let We=null;if(n.object.isPerspectiveCamera){const Ke=C.length();We=J(Ke*c);const nt=Ke-We;n.object.position.addScaledVector(M,nt),n.object.updateMatrixWorld(),Ge=!!nt}else if(n.object.isOrthographicCamera){const Ke=new Vector3(P.x,P.y,0);Ke.unproject(n.object);const nt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ge=nt!==n.object.zoom;const at=new Vector3(P.x,P.y,0);at.unproject(n.object),n.object.position.sub(at).add(Ke),n.object.updateMatrixWorld(),We=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;We!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(We).add(n.object.position):(_ray.origin.copy(n.object.position),_ray.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_ray.direction))<TILT_LIMIT?e.lookAt(n.target):(_plane.setFromNormalAndCoplanarPoint(n.object.up,n.target),_ray.intersectPlane(_plane,n.target))))}else if(n.object.isOrthographicCamera){const We=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),We!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ge=!0)}return c=1,R=!1,Ge||D.distanceToSquared(n.object.position)>a||8*(1-he.dot(n.object.quaternion))>a||V.distanceToSquared(n.target)>a?(n.dispatchEvent(_changeEvent),D.copy(n.object.position),he.copy(n.object.quaternion),V.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ce),n.domElement.removeEventListener("pointerdown",ne),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",q),n.domElement.removeEventListener("pointermove",me),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",ie,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Spherical,l=new Spherical;let c=1;const h=new Vector3,d=new Vector2,u=new Vector2,m=new Vector2,g=new Vector2,y=new Vector2,p=new Vector2,f=new Vector2,E=new Vector2,v=new Vector2,M=new Vector3,P=new Vector2;let R=!1;const w=[],I={};let z=!1;function _(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function A(C){const re=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*re)}function Q(C){l.theta-=C}function j(C){l.phi-=C}const T=function(){const C=new Vector3;return function(Ae,D){C.setFromMatrixColumn(D,0),C.multiplyScalar(-Ae),h.add(C)}}(),O=function(){const C=new Vector3;return function(Ae,D){n.screenSpacePanning===!0?C.setFromMatrixColumn(D,1):(C.setFromMatrixColumn(D,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(Ae),h.add(C)}}(),F=function(){const C=new Vector3;return function(Ae,D){const he=n.domElement;if(n.object.isPerspectiveCamera){const V=n.object.position;C.copy(V).sub(n.target);let le=C.length();le*=Math.tan(n.object.fov/2*Math.PI/180),T(2*Ae*le/he.clientHeight,n.object.matrix),O(2*D*le/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(T(Ae*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),O(D*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(C,re){if(!n.zoomToCursor)return;R=!0;const Ae=n.domElement.getBoundingClientRect(),D=C-Ae.left,he=re-Ae.top,V=Ae.width,le=Ae.height;P.x=D/V*2-1,P.y=-(he/le)*2+1,M.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function ae(C){d.set(C.clientX,C.clientY)}function fe(C){Z(C.clientX,C.clientX),f.set(C.clientX,C.clientY)}function ve(C){g.set(C.clientX,C.clientY)}function U(C){u.set(C.clientX,C.clientY),m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;Q(2*Math.PI*m.x/re.clientHeight),j(2*Math.PI*m.y/re.clientHeight),d.copy(u),n.update()}function H(C){E.set(C.clientX,C.clientY),v.subVectors(E,f),v.y>0?Y(A(v.y)):v.y<0&&X(A(v.y)),f.copy(E),n.update()}function oe(C){y.set(C.clientX,C.clientY),p.subVectors(y,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(y),n.update()}function Me(C){Z(C.clientX,C.clientY),C.deltaY<0?X(A(C.deltaY)):C.deltaY>0&&Y(A(C.deltaY)),n.update()}function Se(C){let re=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),re=!0;break}re&&(C.preventDefault(),n.update())}function xe(C){if(w.length===1)d.set(C.pageX,C.pageY);else{const re=be(C),Ae=.5*(C.pageX+re.x),D=.5*(C.pageY+re.y);d.set(Ae,D)}}function Ie(C){if(w.length===1)g.set(C.pageX,C.pageY);else{const re=be(C),Ae=.5*(C.pageX+re.x),D=.5*(C.pageY+re.y);g.set(Ae,D)}}function Te(C){const re=be(C),Ae=C.pageX-re.x,D=C.pageY-re.y,he=Math.sqrt(Ae*Ae+D*D);f.set(0,he)}function L(C){n.enableZoom&&Te(C),n.enablePan&&Ie(C)}function de(C){n.enableZoom&&Te(C),n.enableRotate&&xe(C)}function K(C){if(w.length==1)u.set(C.pageX,C.pageY);else{const Ae=be(C),D=.5*(C.pageX+Ae.x),he=.5*(C.pageY+Ae.y);u.set(D,he)}m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;Q(2*Math.PI*m.x/re.clientHeight),j(2*Math.PI*m.y/re.clientHeight),d.copy(u)}function ue(C){if(w.length===1)y.set(C.pageX,C.pageY);else{const re=be(C),Ae=.5*(C.pageX+re.x),D=.5*(C.pageY+re.y);y.set(Ae,D)}p.subVectors(y,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(y)}function ee(C){const re=be(C),Ae=C.pageX-re.x,D=C.pageY-re.y,he=Math.sqrt(Ae*Ae+D*D);E.set(0,he),v.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),Y(v.y),f.copy(E);const V=(C.pageX+re.x)*.5,le=(C.pageY+re.y)*.5;Z(V,le)}function _e(C){n.enableZoom&&ee(C),n.enablePan&&ue(C)}function N(C){n.enableZoom&&ee(C),n.enableRotate&&K(C)}function ne(C){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",me),n.domElement.addEventListener("pointerup",S)),!Be(C)&&(ce(C),C.pointerType==="touch"?te(C):x(C)))}function me(C){n.enabled!==!1&&(C.pointerType==="touch"?pe(C):G(C))}function S(C){switch(qe(C),w.length){case 0:n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",me),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(_endEvent),s=r.NONE;break;case 1:const re=w[0],Ae=I[re];te({pointerId:re,pageX:Ae.x,pageY:Ae.y});break}}function x(C){let re;switch(C.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case MOUSE.DOLLY:if(n.enableZoom===!1)return;fe(C),s=r.DOLLY;break;case MOUSE.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;ve(C),s=r.PAN}else{if(n.enableRotate===!1)return;ae(C),s=r.ROTATE}break;case MOUSE.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;ae(C),s=r.ROTATE}else{if(n.enablePan===!1)return;ve(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(_startEvent)}function G(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;U(C);break;case r.DOLLY:if(n.enableZoom===!1)return;H(C);break;case r.PAN:if(n.enablePan===!1)return;oe(C);break}}function q(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(_startEvent),Me(se(C)),n.dispatchEvent(_endEvent))}function se(C){const re=C.deltaMode,Ae={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(re){case 1:Ae.deltaY*=16;break;case 2:Ae.deltaY*=100;break}return C.ctrlKey&&!z&&(Ae.deltaY*=10),Ae}function ie(C){C.key==="Control"&&(z=!0,n.domElement.getRootNode().addEventListener("keyup",Le,{passive:!0,capture:!0}))}function Le(C){C.key==="Control"&&(z=!1,n.domElement.getRootNode().removeEventListener("keyup",Le,{passive:!0,capture:!0}))}function Ee(C){n.enabled===!1||n.enablePan===!1||Se(C)}function te(C){switch(Pe(C),w.length){case 1:switch(n.touches.ONE){case TOUCH.ROTATE:if(n.enableRotate===!1)return;xe(C),s=r.TOUCH_ROTATE;break;case TOUCH.PAN:if(n.enablePan===!1)return;Ie(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case TOUCH.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(C),s=r.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(_startEvent)}function pe(C){switch(Pe(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;K(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ue(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(C),n.update();break;default:s=r.NONE}}function Ce(C){n.enabled!==!1&&C.preventDefault()}function ce(C){w.push(C.pointerId)}function qe(C){delete I[C.pointerId];for(let re=0;re<w.length;re++)if(w[re]==C.pointerId){w.splice(re,1);return}}function Be(C){for(let re=0;re<w.length;re++)if(w[re]==C.pointerId)return!0;return!1}function Pe(C){let re=I[C.pointerId];re===void 0&&(re=new Vector2,I[C.pointerId]=re),re.set(C.pageX,C.pageY)}function be(C){const re=C.pointerId===w[0]?w[1]:w[0];return I[re]}n.domElement.addEventListener("contextmenu",Ce),n.domElement.addEventListener("pointerdown",ne),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ie,{passive:!0,capture:!0}),this.update()}}class RGBELoader extends DataTextureLoader{constructor(e){super(e),this.type=HalfFloatType}parse(e){const a=function(I,z){switch(I){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(z||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(z||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(z||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(z||""))}},h=`
`,d=function(I,z,_){z=z||1024;let Q=I.pos,j=-1,T=0,O="",F=String.fromCharCode.apply(null,new Uint16Array(I.subarray(Q,Q+128)));for(;0>(j=F.indexOf(h))&&T<z&&Q<I.byteLength;)O+=F,T+=F.length,Q+=128,F+=String.fromCharCode.apply(null,new Uint16Array(I.subarray(Q,Q+128)));return-1<j?(I.pos+=T+j+1,O+F.slice(0,j)):!1},u=function(I){const z=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,Q=/^\s*FORMAT=(\S+)\s*$/,j=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,F;for((I.pos>=I.byteLength||!(O=d(I)))&&a(1,"no header found"),(F=O.match(z))||a(3,"bad initial token"),T.valid|=1,T.programtype=F[1],T.string+=O+`
`;O=d(I),O!==!1;){if(T.string+=O+`
`,O.charAt(0)==="#"){T.comments+=O+`
`;continue}if((F=O.match(_))&&(T.gamma=parseFloat(F[1])),(F=O.match(A))&&(T.exposure=parseFloat(F[1])),(F=O.match(Q))&&(T.valid|=2,T.format=F[1]),(F=O.match(j))&&(T.valid|=4,T.height=parseInt(F[1],10),T.width=parseInt(F[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2||a(3,"missing format specifier"),T.valid&4||a(3,"missing image size specifier"),T},m=function(I,z,_){const A=z;if(A<8||A>32767||I[0]!==2||I[1]!==2||I[2]&128)return new Uint8Array(I);A!==(I[2]<<8|I[3])&&a(3,"wrong scanline width");const Q=new Uint8Array(4*z*_);Q.length||a(4,"unable to allocate buffer space");let j=0,T=0;const O=4*A,F=new Uint8Array(4),Y=new Uint8Array(O);let X=_;for(;X>0&&T<I.byteLength;){T+4>I.byteLength&&a(1),F[0]=I[T++],F[1]=I[T++],F[2]=I[T++],F[3]=I[T++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=A)&&a(3,"bad rgbe scanline format");let Z=0,J;for(;Z<O&&T<I.byteLength;){J=I[T++];const fe=J>128;if(fe&&(J-=128),(J===0||Z+J>O)&&a(3,"bad scanline data"),fe){const ve=I[T++];for(let U=0;U<J;U++)Y[Z++]=ve}else Y.set(I.subarray(T,T+J),Z),Z+=J,T+=J}const ae=A;for(let fe=0;fe<ae;fe++){let ve=0;Q[j]=Y[fe+ve],ve+=A,Q[j+1]=Y[fe+ve],ve+=A,Q[j+2]=Y[fe+ve],ve+=A,Q[j+3]=Y[fe+ve],j+=4}X--}return Q},g=function(I,z,_,A){const Q=I[z+3],j=Math.pow(2,Q-128)/255;_[A+0]=I[z+0]*j,_[A+1]=I[z+1]*j,_[A+2]=I[z+2]*j,_[A+3]=1},y=function(I,z,_,A){const Q=I[z+3],j=Math.pow(2,Q-128)/255;_[A+0]=DataUtils.toHalfFloat(Math.min(I[z+0]*j,65504)),_[A+1]=DataUtils.toHalfFloat(Math.min(I[z+1]*j,65504)),_[A+2]=DataUtils.toHalfFloat(Math.min(I[z+2]*j,65504)),_[A+3]=DataUtils.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const f=u(p),E=f.width,v=f.height,M=m(p.subarray(p.pos),E,v);let P,R,w;switch(this.type){case FloatType:w=M.length/4;const I=new Float32Array(w*4);for(let _=0;_<w;_++)g(M,_*4,I,_*4);P=I,R=FloatType;break;case HalfFloatType:w=M.length/4;const z=new Uint16Array(w*4);for(let _=0;_<w;_++)y(M,_*4,z,_*4);P=z,R=HalfFloatType;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:E,height:v,data:P,header:f.string,gamma:f.gamma,exposure:f.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case FloatType:case HalfFloatType:a.colorSpace=LinearSRGBColorSpace,a.minFilter=LinearFilter,a.magFilter=LinearFilter,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}class STLExporter{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,r=[];let s=0;e.traverse(function(f){if(f.isMesh){const E=f.geometry,v=E.index,M=E.getAttribute("position");s+=v!==null?v.count/3:M.count/3,r.push({object3d:f,geometry:E})}});let a,o=80;if(n===!0){const f=s*2+s*3*4*4+80+4,E=new ArrayBuffer(f);a=new DataView(E),a.setUint32(o,s,!0),o+=4}else a="",a+=`solid exported
`;const l=new Vector3,c=new Vector3,h=new Vector3,d=new Vector3,u=new Vector3,m=new Vector3;for(let f=0,E=r.length;f<E;f++){const v=r[f].object3d,M=r[f].geometry,P=M.index,R=M.getAttribute("position");if(P!==null)for(let w=0;w<P.count;w+=3){const I=P.getX(w+0),z=P.getX(w+1),_=P.getX(w+2);g(I,z,_,R,v)}else for(let w=0;w<R.count;w+=3){const I=w+0,z=w+1,_=w+2;g(I,z,_,R,v)}}return n===!1&&(a+=`endsolid exported
`),a;function g(f,E,v,M,P){l.fromBufferAttribute(M,f),c.fromBufferAttribute(M,E),h.fromBufferAttribute(M,v),P.isSkinnedMesh===!0&&(P.applyBoneTransform(f,l),P.applyBoneTransform(E,c),P.applyBoneTransform(v,h)),l.applyMatrix4(P.matrixWorld),c.applyMatrix4(P.matrixWorld),h.applyMatrix4(P.matrixWorld),y(l,c,h),p(l),p(c),p(h),n===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function y(f,E,v){d.subVectors(v,E),u.subVectors(f,E),d.cross(u).normalize(),m.copy(d).normalize(),n===!0?(a.setFloat32(o,m.x,!0),o+=4,a.setFloat32(o,m.y,!0),o+=4,a.setFloat32(o,m.z,!0),o+=4):(a+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,a+=`		outer loop
`)}function p(f){n===!0?(a.setFloat32(o,f.x,!0),o+=4,a.setFloat32(o,f.y,!0),o+=4,a.setFloat32(o,f.z,!0),o+=4):a+="			vertex "+f.x+" "+f.y+" "+f.z+`
`}}}class FontLoader extends Loader{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new FileLoader(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,r)}parse(e){return new Font(e)}}class Font{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=createPaths(e,t,this.data);for(let s=0,a=r.length;s<a;s++)n.push(...r[s].toShapes());return n}}function createPaths(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const d=createPath(h,r,o,l,t);o+=d.offsetX,a.push(d.path)}}return a}function createPath(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const a=new ShapePath;let o,l,c,h,d,u,m,g;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,f=y.length;p<f;)switch(y[p++]){case"m":o=y[p++]*e+t,l=y[p++]*e+n,a.moveTo(o,l);break;case"l":o=y[p++]*e+t,l=y[p++]*e+n,a.lineTo(o,l);break;case"q":c=y[p++]*e+t,h=y[p++]*e+n,d=y[p++]*e+t,u=y[p++]*e+n,a.quadraticCurveTo(d,u,c,h);break;case"b":c=y[p++]*e+t,h=y[p++]*e+n,d=y[p++]*e+t,u=y[p++]*e+n,m=y[p++]*e+t,g=y[p++]*e+n,a.bezierCurveTo(d,u,m,g,c,h);break}}return{offsetX:s.ha*e,path:a}}class TextGeometry extends ExtrudeGeometry{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const MAX_DEPTH=.8,RESOLUTION=1e3,METAL_MATERIALS={"sterling-silver":{color:15263976,metalness:1,roughness:.1,envMapIntensity:1},"gold-18k":{color:16766720,metalness:1,roughness:.1,envMapIntensity:1}},FINISH_PROPERTIES={polished:{roughness:.1},brushed:{roughness:.3},matte:{roughness:.7}};let cropper=null;function showNotification(i,e="success"){const t=document.getElementById("notification"),n=document.getElementById("notification-content"),r=document.getElementById("notification-close");switch(n.innerHTML=i,e){case"success":t.style.background="#4CAF50";break;case"error":t.style.background="#f44336";break;case"info":t.style.background="#2196F3";break;default:t.style.background="#4CAF50"}t.style.display="block";let s;switch(e){case"success":s=1e4;break;case"error":s=8e3;break;case"info":s=3e3;break;default:s=5e3}setTimeout(()=>{t.style.display="none"},s),r.onclick=()=>{t.style.display="none"}}const BACKEND_URL="https://img2pen-s3-backend.onrender.com",OPENAI_BACKEND_URL="https://img2pen-openai-backend.onrender.com";async function submitOrderWithS3(i,e,t){try{console.log("📋 Requesting signed URL for STL upload...");const n=await fetch(`${BACKEND_URL}/api/get-upload-url`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,email:e,fileType:"application/octet-stream"})});if(!n.ok){const l=await n.json();throw new Error(l.error||"Failed to get upload URL")}const r=await n.json();console.log("✅ Signed URL received:",r.filename);const s=new Blob([t],{type:"application/octet-stream"});console.log(`📊 STL file size: ${(s.size/(1024*1024)).toFixed(2)}MB`);const a=await fetch(r.uploadUrl,{method:"PUT",body:s,headers:{"Content-Type":"application/octet-stream"}});if(!a.ok)throw new Error(`S3 upload failed: ${a.status} ${a.statusText}`);console.log("✅ STL uploaded to S3 successfully");const o=await fetch(`${BACKEND_URL}/api/confirm-upload`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:r.filename,guid:r.guid})});if(o.ok){const l=await o.json();console.log("✅ Upload confirmed:",l),showNotification(`<h3>🎉 Model uploaded successfully to S3!</h3>
                <p>Your STL file has been securely uploaded to Amazon S3.</p>
                <p><strong>Confirmation Number:</strong> <code style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:3px;">${r.guid}</code></p>
                <p><strong>File Size:</strong> ${l.fileSize}</p>
                <p><strong>Filename:</strong> ${r.filename}</p>
                <p>Please save this confirmation number for your records.</p>`,"success")}else console.warn("Upload succeeded but confirmation failed"),showNotification(`<h3>🎉 Model uploaded successfully!</h3>
                <p>Your STL file has been uploaded to S3.</p>
                <p><strong>Confirmation Number:</strong> <code style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:3px;">${r.guid}</code></p>
                <p>Please save this confirmation number for your records.</p>`,"success");return{success:!0,guid:r.guid,filename:r.filename}}catch(n){throw console.error("❌ S3 upload error:",n),showNotification(`Failed to upload: ${n.message}`,"error"),n}}async function uploadImageToS3(i){try{console.log("📋 Requesting signed URL for image upload...");const e=await fetch(`${BACKEND_URL}/api/get-image-upload-url`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fileType:i.type})});if(!e.ok){const r=await e.json();throw new Error(r.error||"Failed to get image upload URL")}const t=await e.json();console.log("✅ Image signed URL received:",t.filename);const n=await fetch(t.uploadUrl,{method:"PUT",body:i,headers:{"Content-Type":i.type}});if(!n.ok)throw new Error(`S3 image upload failed: ${n.status} ${n.statusText}`);return console.log("✅ Image uploaded to S3 successfully"),{success:!0,filename:t.filename,guid:t.guid}}catch(e){throw console.error("❌ S3 image upload error:",e),e}}function addCircleOverlay(i){let e=null;function t(){const s=i.cropper.querySelector(".cropper-crop-box");if(!s)return;let a=s.querySelector(".circle-crop-overlay");a&&a.remove();const o=s.offsetWidth,l=s.offsetHeight;a=document.createElementNS("http://www.w3.org/2000/svg","svg"),a.classList.add("circle-crop-overlay"),a.setAttribute("width",o),a.setAttribute("height",l),a.style.position="absolute",a.style.left="0",a.style.top="0",a.style.width="100%",a.style.height="100%",a.style.pointerEvents="none",a.style.zIndex="20";const c=Math.max(o/2-3,1),h=Math.max(l/2-3,1),d=document.createElementNS("http://www.w3.org/2000/svg","ellipse");d.setAttribute("cx",o/2),d.setAttribute("cy",l/2),d.setAttribute("rx",c),d.setAttribute("ry",h),d.setAttribute("fill","none"),d.setAttribute("stroke","white"),d.setAttribute("stroke-width","7"),d.setAttribute("stroke-dasharray","0"),d.setAttribute("opacity","0.8"),a.appendChild(d);const u=document.createElementNS("http://www.w3.org/2000/svg","ellipse");u.setAttribute("cx",o/2),u.setAttribute("cy",l/2),u.setAttribute("rx",c),u.setAttribute("ry",h),u.setAttribute("fill","none"),u.setAttribute("stroke","#4af"),u.setAttribute("stroke-width","5"),u.setAttribute("stroke-dasharray","10,8"),u.setAttribute("opacity","1"),a.appendChild(u),s.appendChild(a)}t();const n=i.cropper;n.addEventListener("crop",t),n.addEventListener("cropmove",t),n.addEventListener("cropend",t),n._ellipseUpdateEllipse=t;const r=i.cropper.querySelector(".cropper-crop-box");r&&(e=new MutationObserver(()=>{t()}),e.observe(r,{attributes:!0,attributeFilter:["style","class"]}),r._ellipseObserver=e)}function showCropperModal(imageSrc,onCrop,onCancel,cropShape){console.log("🖼️ showCropperModal called with:",{imageSrc:imageSrc?imageSrc.substring(0,50)+"...":"null",cropShape});const modal=document.getElementById("cropper-modal"),img=document.getElementById("cropper-image"),confirmBtn=document.getElementById("cropper-confirm"),cancelBtn=document.getElementById("cropper-cancel");console.log("🎯 Modal elements found:",{modal:!!modal,img:!!img,confirmBtn:!!confirmBtn,cancelBtn:!!cancelBtn});const aspectSelect=document.getElementById("cropper-aspect"),rotateLeftBtn=document.getElementById("cropper-rotate-left"),rotateRightBtn=document.getElementById("cropper-rotate-right"),flipHBtn=document.getElementById("cropper-flip-h"),flipVBtn=document.getElementById("cropper-flip-v"),zoomInBtn=document.getElementById("cropper-zoom-in"),zoomOutBtn=document.getElementById("cropper-zoom-out"),resetBtn=document.getElementById("cropper-reset"),fitBtn=document.getElementById("cropper-fit"),centerBtn=document.getElementById("cropper-center"),xInput=document.getElementById("cropper-x"),yInput=document.getElementById("cropper-y"),wInput=document.getElementById("cropper-w"),hInput=document.getElementById("cropper-h"),zoomDisplay=document.getElementById("cropper-zoom"),rotDisplay=document.getElementById("cropper-rotation"),previewCanvas=document.getElementById("cropper-preview"),previewCtx=previewCanvas.getContext("2d");let scaleX=1,scaleY=1;img.src=imageSrc,console.log("🎭 Setting modal display to flex"),modal.style.display="flex",cropper&&(cropper.destroy(),cropper=null),cropper=new Cropper(img,{viewMode:1,aspectRatio:cropShape==="circle"?1:NaN,autoCropArea:1,movable:!0,zoomable:!0,scalable:!0,rotatable:!0,ready(){cropShape==="circle"&&addCircleOverlay(cropper),updatePixelInputs(),updatePreview(),updateZoomRotDisplay()},crop(){updatePixelInputs(),updatePreview()},zoom(){updateZoomRotDisplay()},rotate(){updateZoomRotDisplay()}}),aspectSelect.onchange=function(){let val=aspectSelect.value;val==="free"?cropper.setAspectRatio(NaN):cropper.setAspectRatio(eval(val))},rotateLeftBtn.onclick=function(){cropper.rotate(-90)},rotateRightBtn.onclick=function(){cropper.rotate(90)},flipHBtn.onclick=function(){scaleX=-scaleX,cropper.scaleX(scaleX)},flipVBtn.onclick=function(){scaleY=-scaleY,cropper.scaleY(scaleY)},zoomInBtn.onclick=function(){cropper.zoom(.1)},zoomOutBtn.onclick=function(){cropper.zoom(-.1)},resetBtn.onclick=function(){cropper.reset(),scaleX=1,scaleY=1},fitBtn.onclick=function(){cropper.setCropBoxData({left:0,top:0,width:cropper.getImageData().naturalWidth,height:cropper.getImageData().naturalHeight})},centerBtn.onclick=function(){const i=cropper.getImageData(),e=cropper.getCropBoxData();cropper.setCropBoxData({left:i.left+(i.width-e.width)/2,top:i.top+(i.height-e.height)/2,width:e.width,height:e.height})};function updatePixelInputs(){const i=cropper.getData(!0);xInput.value=Math.round(i.x),yInput.value=Math.round(i.y),wInput.value=Math.round(i.width),hInput.value=Math.round(i.height)}function setCropBoxFromInputs(){cropper.setData({x:parseInt(xInput.value),y:parseInt(yInput.value),width:parseInt(wInput.value),height:parseInt(hInput.value)})}xInput.onchange=yInput.onchange=wInput.onchange=hInput.onchange=setCropBoxFromInputs;function updatePreview(){if(!previewCanvas)return;const i=cropper.getCroppedCanvas({width:250,height:250});previewCtx.clearRect(0,0,250,250),i&&i.width>0&&i.height>0&&previewCtx.drawImage(i,0,0,250,250)}function updateZoomRotDisplay(){const i=cropper.getImageData(),e=cropper.getData().rotate||0;zoomDisplay.textContent=Math.round(i.scaleX*100)+"%",rotDisplay.textContent=Math.round(e)+"°"}confirmBtn.onclick=()=>{if(cropShape==="circle"){const i=cropper.getCroppedCanvas(),e=Math.min(i.width,i.height),t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");n.save(),n.beginPath(),n.arc(e/2,e/2,e/2,0,2*Math.PI),n.closePath(),n.clip(),n.drawImage(i,0,0,e,e,0,0,e,e),n.restore(),t.toBlob(r=>{modal.style.display="none",cropper.destroy(),cropper=null,onCrop(r)})}else cropper.getCroppedCanvas().toBlob(i=>{modal.style.display="none",cropper.destroy(),cropper=null,onCrop(i)})},cancelBtn.onclick=()=>{modal.style.display="none",cropper.destroy(),cropper=null}}function showLoadingOverlay(){const i=document.getElementById("loading-overlay"),e=document.getElementById("loading-status"),t=document.getElementById("loading-progress-bar");i.style.display="flex",e.textContent="Analyzing image...",t.style.width="0%",[{t:0,text:"Analyzing image...",pct:10},{t:1200,text:"Detecting features...",pct:30},{t:2500,text:"Processing image...",pct:55},{t:4e3,text:"Generating 3D Geometries...",pct:80},{t:6e3,text:"Finalizing model...",pct:100}].forEach(r=>{setTimeout(()=>{e.textContent=r.text,t.style.width=r.pct+"%"},r.t)})}function hideLoadingOverlay(){document.getElementById("loading-overlay").style.display="none"}const ENGRAVING_FONTS={helvetiker:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/helvetiker_regular.typeface.json",optimer:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/optimer_regular.typeface.json",gentilis:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/gentilis_regular.typeface.json",droid_sans:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/droid_sans_regular.typeface.json",droid_serif:"https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/droid_serif_regular.typeface.json"};class HeightfieldViewer{constructor(){this.scene=new Scene,this.camera=new PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new WebGLRenderer({antialias:!0,alpha:!0}),this.controls=null,this.heightfield=null,this.heightfieldData=null,this.originalImageDataUrl=null,this.jumpring=null,this.grid=null,this.redLayer=null,this.lights={},this.isRotating=!1,this.rotationSpeed=.01,this.currentObjectType="circular-pendant",this.pendantDiameter=25,this.pendantWidth=25,this.pendantHeight=25,this.pendantThickness=2,this.borderThickness=1,this.aspectLocked=!0,this.jumpringOffset={x:0,y:0,z:-15},this.imageTransform={offsetX:0,offsetY:0,scale:1,rotation:0},this.textBoxes=[],this.textBoxCounter=0,this.fontCache={},this.defaultFontName="helvetiker",this.loadEngravingFont(this.defaultFontName),this.init()}init(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(3355443),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=PCFSoftShadowMap,this.renderer.toneMapping=ACESFilmicToneMapping,this.renderer.toneMappingExposure=1.2,document.getElementById("canvas-container").appendChild(this.renderer.domElement),this.camera.position.set(25,15,35),this.camera.lookAt(0,0,0),this.defaultCameraPosition=new Vector3(25,15,35),this.controls=new OrbitControls(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,new RGBELoader().load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr",n=>{n.mapping=EquirectangularReflectionMapping,this.scene.environment=n,this.scene.background=n,this.scene.backgroundBlurriness=.8,this.envMapLoaded=!0,this.heightfield&&(this.heightfield.material.metalness=1,this.heightfield.material.roughness=.1,this.heightfield.material.envMapIntensity=1.5)},void 0,n=>{this.envMapLoaded=!1,this.heightfield&&(this.heightfield.material.metalness=.2,this.heightfield.material.roughness=.7,this.heightfield.material.envMapIntensity=0),console.warn("HDRI environment map failed to load. Falling back to non-metallic material.")});const t=new AmbientLight(16777215,.3);this.scene.add(t),this.directionalLight=new DirectionalLight(16777215,1.2),this.directionalLight.position.set(2,3,2),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=50,this.scene.add(this.directionalLight),this.fillLight=new DirectionalLight(16777215,.6),this.fillLight.position.set(-2,1,1),this.scene.add(this.fillLight),this.rimLight=new DirectionalLight(16777215,.8),this.rimLight.position.set(0,1,-3),this.scene.add(this.rimLight),this.accentLight1=new PointLight(16777215,.5,30),this.accentLight1.position.set(3,2,3),this.scene.add(this.accentLight1),this.accentLight2=new PointLight(16777215,.4,25),this.accentLight2.position.set(-2,3,2),this.scene.add(this.accentLight2),this.lights={ambient:t,directional:this.directionalLight,fill:this.fillLight,rim:this.rimLight,accent1:this.accentLight1,accent2:this.accentLight2},this.setupEventListeners(),this.setupUIControls(),this.animate()}setupEventListeners(){const e=document.getElementById("drop-zone"),t=document.getElementById("file-input");e.addEventListener("dragover",s=>{s.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",async s=>{s.preventDefault(),e.classList.remove("dragover");const a=s.dataTransfer.files[0];if(a&&a.type.startsWith("image/")){uploadImageToS3(a).then(l=>{console.log("✅ Background image upload completed:",l)}).catch(l=>{console.error("❌ Background image upload failed:",l)});const o=new FileReader;o.onload=l=>{this.originalImageDataUrl=l.target.result,showCropperModal(l.target.result,c=>{this.processImage(c)},null,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?"circle":"rect")},o.readAsDataURL(a)}}),t.addEventListener("change",async s=>{console.log("File input change event triggered");const a=s.target.files[0];if(console.log("Selected file:",a),a){console.log("File type:",a.type),uploadImageToS3(a).then(l=>{console.log("✅ Background image upload completed:",l)}).catch(l=>{console.error("❌ Background image upload failed:",l)});const o=new FileReader;o.onload=l=>{console.log("FileReader onload triggered"),this.originalImageDataUrl=l.target.result,console.log("About to show cropper modal"),showCropperModal(l.target.result,c=>{console.log("Cropper modal callback triggered"),this.processImage(c)},null,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?"circle":"rect")},console.log("About to read file as data URL"),o.readAsDataURL(a)}else console.log("No file selected")}),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});const n=document.getElementById("prompt-submit"),r=document.getElementById("prompt-input");n&&r&&(n.addEventListener("click",async()=>{const s=r.value.trim();if(!s){showNotification("Please enter a prompt to generate an image","error");return}try{console.log("🎨 Starting image generation with prompt:",s);const a=await generateImageWithOpenAI(s);console.log("✅ Image generated, data URL length:",a?a.length:"null"),a?(fetch(a).then(o=>o.blob()).then(o=>{uploadDalleImageToS3(o,s).then(l=>{console.log("✅ Background DALL-E image upload completed:",l)}).catch(l=>{console.error("❌ Background DALL-E image upload failed:",l)})}),console.log("📷 About to show cropper modal with image data"),this.originalImageDataUrl=a,showCropperModal(a,o=>{console.log("✂️ Cropper callback triggered with blob size:",o.size),this.processImage(o)},null,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?"circle":"rect"),r.value="",showNotification("Image generated successfully! Please crop it to continue.","success")):(console.error("❌ Image generation returned null/empty data URL"),showNotification("Failed to generate image. Please try again.","error"))}catch(a){console.error("Error in prompt submit:",a),showNotification("Failed to generate image. Please try again.","error")}}),r.addEventListener("keypress",s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),n.click())}))}setupUIControls(){document.querySelectorAll(".menu-header").forEach(U=>{U.addEventListener("click",()=>{const H=U.nextElementSibling;H.classList.toggle("active");const oe=U.querySelector(".toggle-button");oe.textContent=H.classList.contains("active")?"▼":"▶"})});const e=document.getElementById("object-type");e&&e.addEventListener("change",U=>{this.currentObjectType=U.target.value,this.originalImageDataUrl?showCropperModal(this.originalImageDataUrl,H=>{this.processImage(H)},null,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?"circle":"rect"):this.heightfield&&this.updateObjectShape()});const t=document.getElementById("fov");t&&t.addEventListener("input",U=>{this.camera.fov=parseFloat(U.target.value),this.camera.updateProjectionMatrix()});const n=document.getElementById("camera-distance");n&&n.addEventListener("input",U=>{const H=parseFloat(U.target.value),oe=new Vector3;this.camera.getWorldDirection(oe),this.camera.position.copy(this.controls.target).add(oe.multiplyScalar(-H))});const r=document.getElementById("rotate-toggle");this.isRotating=!1,r&&r.addEventListener("change",U=>{this.isRotating=r.checked});const s=document.getElementById("light-intensity");s&&s.addEventListener("input",U=>{this.directionalLight.intensity=parseFloat(U.target.value)});const a=document.getElementById("material-color");a&&a.addEventListener("input",U=>{this.heightfield&&this.heightfield.material.color.set(U.target.value)});const o=document.getElementById("material-shine");o&&o.addEventListener("input",U=>{this.heightfield&&(this.heightfield.material.shininess=parseFloat(U.target.value))});const l=document.getElementById("image-offset-x");l&&l.addEventListener("input",U=>{this.imageTransform.offsetX=parseFloat(U.target.value),this.updateImagePosition()});const c=document.getElementById("image-offset-y");c&&c.addEventListener("input",U=>{this.imageTransform.offsetY=parseFloat(U.target.value),this.updateImagePosition()});const h=document.getElementById("image-scale");h&&h.addEventListener("input",U=>{this.imageTransform.scale=parseFloat(U.target.value),this.updateImagePosition()});const d=document.getElementById("image-rotation");d&&d.addEventListener("input",U=>{this.imageTransform.rotation=parseFloat(U.target.value),this.updateImagePosition()});const u=document.getElementById("metal-type");u&&u.addEventListener("change",U=>{this.updateMetalMaterial(U.target.value)});const m=document.getElementById("metal-finish");m&&m.addEventListener("change",U=>{this.updateMetalFinish(U.target.value)});const g=document.getElementById("jumpring-size");g&&g.addEventListener("change",U=>{this.updateJumpring(U.target.value)});const y=document.getElementById("jumpring-position");y&&y.addEventListener("change",U=>{this.updateJumpringPosition(U.target.value)});const p=document.getElementById("ambient-intensity");p&&p.addEventListener("input",U=>{const H=parseFloat(U.target.value),oe=document.getElementById("ambient-intensity-value");oe&&(oe.textContent=H.toFixed(2)),this.lights&&this.lights.ambient&&(this.lights.ambient.intensity=H)});const f=document.getElementById("directional-intensity");f&&f.addEventListener("input",U=>{const H=parseFloat(U.target.value),oe=document.getElementById("directional-intensity-value");oe&&(oe.textContent=H.toFixed(2)),this.lights&&this.lights.directional&&(this.lights.directional.intensity=H)});const E=document.getElementById("fill-light-intensity");E&&E.addEventListener("input",U=>{const H=parseFloat(U.target.value),oe=document.getElementById("fill-light-intensity-value");oe&&(oe.textContent=H.toFixed(2)),this.lights&&this.lights.fill&&(this.lights.fill.intensity=H)});const v=document.getElementById("rim-light-intensity");v&&v.addEventListener("input",U=>{const H=parseFloat(U.target.value),oe=document.getElementById("rim-light-intensity-value");oe&&(oe.textContent=H.toFixed(2)),this.lights&&this.lights.rim&&(this.lights.rim.intensity=H)});const M=document.getElementById("accent-light-intensity");M&&M.addEventListener("input",U=>{const H=parseFloat(U.target.value),oe=document.getElementById("accent-light-intensity-value");oe&&(oe.textContent=H.toFixed(2)),this.lights&&this.lights.accent1&&(this.lights.accent1.intensity=H),this.lights&&this.lights.accent2&&(this.lights.accent2.intensity=H*.8)});const P=document.getElementById("env-map-intensity");P&&P.addEventListener("input",U=>{const H=parseFloat(U.target.value),oe=document.getElementById("env-map-intensity-value");oe&&(oe.textContent=H.toFixed(2)),this.heightfield&&(this.heightfield.material.envMapIntensity=H),this.jumpring&&(this.jumpring.material.envMapIntensity=H),this.redLayer&&(this.redLayer.material.envMapIntensity=H)});const R=document.getElementById("pendant-diameter"),w=document.getElementById("pendant-width"),I=document.getElementById("pendant-height"),z=document.getElementById("aspect-lock"),_=document.getElementById("aspect-lock-icon"),A=document.getElementById("pendant-diameter-value"),Q=document.getElementById("pendant-width-value"),j=document.getElementById("pendant-height-value");if(R&&w&&I&&A&&Q&&j){const U=()=>{A.textContent=R.value+" mm",Q.textContent=w.value+" mm",j.textContent=I.value+" mm"};R.addEventListener("input",H=>{this.pendantDiameter=parseFloat(H.target.value),(this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud")&&this.createHeightfieldMesh(this.heightfieldData),U()}),w.addEventListener("input",U),I.addEventListener("input",U),U(),z.addEventListener("click",()=>{this.aspectLocked=!this.aspectLocked,_.textContent=this.aspectLocked?"🔒":"🔓"})}const T=document.getElementById("reset-view");T&&T.addEventListener("click",()=>{this.camera.position.copy(this.defaultCameraPosition),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()});const O=document.getElementById("screenshot");O&&O.addEventListener("click",()=>{this.renderer.render(this.scene,this.camera);const U=this.renderer.domElement.toDataURL("image/png"),H=document.createElement("a");H.href=U,H.download="pendant.png",H.click()});const F=document.getElementById("replace-file");F&&F.addEventListener("click",()=>{this.resetScene();const U=document.getElementById("drop-zone");U&&U.classList.remove("hidden");const H=document.getElementById("file-input");H&&(H.value=""),showNotification("Ready for new image upload","info")});const Y=document.getElementById("border-thickness"),X=document.getElementById("border-thickness-value");if(Y&&X){const U=()=>{X.textContent=Y.value};Y.addEventListener("input",H=>{this.borderThickness=parseFloat(H.target.value),U(),this.heightfieldData&&this.currentObjectType==="circular-pendant"&&this.createHeightfieldMesh(this.heightfieldData)}),U()}const Z=document.getElementById("export-stl");Z&&(Z.textContent="Submit Order",Z.removeEventListener("click",this.exportSTL),Z.addEventListener("click",async()=>{const U=prompt("Enter your name:");if(!U)return showNotification("Name is required.","error");const H=prompt("Enter your email:");if(!H)return showNotification("Email is required.","error");const oe=new STLExporter,Me=new Group;this.heightfield&&Me.add(this.heightfield.clone()),this.jumpring&&Me.add(this.jumpring.clone());const Se=oe.parse(Me);await submitOrderWithS3(U,H,Se)}));const J=document.getElementById("highlight-layer-color");J&&J.addEventListener("input",U=>{this.redLayer&&this.redLayer.material.color.set(U.target.value)});const ae=document.getElementById("antiquing-amount"),fe=document.getElementById("antiquing-amount-value");ae&&fe&&ae.addEventListener("input",U=>{fe.textContent=U.target.value,this.heightfieldData&&this.createHeightfieldMesh(this.heightfieldData)});const ve=document.getElementById("add-text-box");ve&&ve.addEventListener("click",()=>{this.addTextBox()})}async processImage(e){showLoadingOverlay(),setTimeout(async()=>{const t=await this.loadImage(e),n=this.generateHeightfieldData(t);this.createHeightfieldMesh(n),document.getElementById("drop-zone").classList.add("hidden"),hideLoadingOverlay()},7e3)}loadImage(e){return new Promise(t=>{const n=new FileReader;n.onload=r=>{const s=new Image;s.onload=()=>t(s),s.src=r.target.result},n.readAsDataURL(e)})}generateHeightfieldData(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=e.height/e.width,s=RESOLUTION,a=Math.round(s*r);t.width=s,t.height=a,n.drawImage(e,0,0,s,a);const o=n.getImageData(0,0,s,a);return{width:s,height:a,data:o.data,aspectRatio:r}}createHeightfieldMesh(e){var m,g,y,p,f;let t=null,n=null;switch(this.redLayer&&(console.log("Removing red layer"),this.scene.remove(this.redLayer),this.redLayer.geometry.dispose(),this.redLayer.material.dispose(),this.redLayer=null),this.heightfieldData=e,this.heightfield&&this.scene.remove(this.heightfield),this.grid&&this.scene.remove(this.grid),e.aspectRatio,this.currentObjectType){case"circular-pendant":this.heightfield&&this.scene.remove(this.heightfield),this.bottomDisc&&this.scene.remove(this.bottomDisc),this.sideWall&&this.scene.remove(this.sideWall),this.heightfield=null,this.bottomDisc=null,this.sideWall=null;const E=this.pendantDiameter,v=E/2,M=e.width-1,P=e.height-1,R=this.pendantThickness,w=[],I=[],z=(N,ne)=>ne*(M+1)+N,_=[];for(let N=0;N<=P;++N)for(let ne=0;ne<=M;++ne){const me=(ne/M-.5)*E,S=(N/P-.5)*E,x=Math.sqrt(me*me+S*S);let G=0,q=(me/v+1)/2,se=(S/v+1)/2;if(x<=v){const ie=Math.floor(q*(e.width-1)),Ee=((e.height-1-Math.floor(se*(e.height-1)))*e.width+ie)*4;G=(e.data[Ee]*.299+e.data[Ee+1]*.587+e.data[Ee+2]*.114)/255*MAX_DEPTH}_.push({px:me,py:S,z:G,u:q,v:se,inCircle:x<=v})}const A=new Array(_.length).fill(-1);let Q=0;for(let N=0;N<_.length;++N)_[N].inCircle&&(w.push(_[N].px,_[N].py,_[N].z),I.push(_[N].u,_[N].v),A[N]=Q++);const j=[];for(let N=0;N<P;++N)for(let ne=0;ne<M;++ne){const me=z(ne,N),S=z(ne+1,N),x=z(ne,N+1),G=z(ne+1,N+1);_[me].inCircle&&_[S].inCircle&&_[x].inCircle&&j.push(A[me],A[S],A[x]),_[S].inCircle&&_[G].inCircle&&_[x].inCircle&&j.push(A[S],A[G],A[x])}const T=[];for(let N=0;N<=P;++N)for(let ne=0;ne<=M;++ne){const me=N*(M+1)+ne;_[me].inCircle&&[z(ne-1,N),z(ne+1,N),z(ne,N-1),z(ne,N+1)].some(x=>x<0||x>=_.length||!_[x]||!_[x].inCircle)&&T.push({x:_[me].px,y:_[me].py,z:_[me].z})}T.sort((N,ne)=>{const me=Math.atan2(N.y,N.x),S=Math.atan2(ne.y,ne.x);return me-S});const O=[...w],F=[...I],Y=[...j],X=O.length/3;O.push(0,0,-R),F.push(.5,.5);for(let N=0;N<T.length;++N)O.push(T[N].x,T[N].y,-R),F.push((T[N].x/v+1)/2,(T[N].y/v+1)/2);for(let N=1;N<=T.length;++N){const ne=X,me=X+N,S=X+(N<T.length?N+1:1);Y.push(ne,me,S)}const Z=O.length/3;for(let N=0;N<T.length;++N){const ne=T[N].x,me=T[N].y,S=T[N].z,x=T[(N+1)%T.length].x,G=T[(N+1)%T.length].y,q=T[(N+1)%T.length].z,se=ne,ie=me,Le=-R,Ee=x,te=G,pe=-R;O.push(ne,me,S),O.push(x,G,q),O.push(se,ie,Le),O.push(Ee,te,pe),F.push(0,0,0,0,0,0,0,0);const Ce=Z+N*4;Y.push(Ce,Ce+2,Ce+1),Y.push(Ce+1,Ce+2,Ce+3)}const J=O.length/3,ae=this.borderThickness;let fe=-1/0;for(let N=0;N<_.length;++N)_[N].inCircle&&_[N].z>fe&&(fe=_[N].z);const ve=fe+.4;for(let N=0;N<T.length;++N){const ne=(N+1)%T.length,me=T[N].x,S=T[N].y,x=Math.sqrt(me*me+S*S),G=me/x,q=S/x,se=T[N].x+G*ae,ie=T[N].y+q*ae,Le=T[ne].x+T[ne].x/Math.sqrt(T[ne].x**2+T[ne].y**2)*ae,Ee=T[ne].y+T[ne].y/Math.sqrt(T[ne].x**2+T[ne].y**2)*ae;O.push(T[N].x,T[N].y,ve),O.push(T[ne].x,T[ne].y,ve),O.push(se,ie,ve),O.push(Le,Ee,ve),O.push(T[N].x,T[N].y,-R),O.push(T[ne].x,T[ne].y,-R),O.push(se,ie,-R),O.push(Le,Ee,-R),F.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=J+N*8;Y.push(te+2,te+3,te+0),Y.push(te+3,te+1,te+0),Y.push(te+4,te+6,te+5),Y.push(te+5,te+6,te+7),Y.push(te+2,te+6,te+3),Y.push(te+3,te+6,te+7),Y.push(te+0,te+1,te+4),Y.push(te+1,te+5,te+4)}const U=[],H=[];for(let N=0;N<T.length;++N){const ne=(N+1)%T.length,me=T[N].x,S=T[N].y,x=T[N].z,G=T[ne].x,q=T[ne].y,se=T[ne].z,ie=me,Le=S,Ee=ve,te=G,pe=q,Ce=ve,ce=U.length/3;U.push(me,S,x,G,q,se,ie,Le,Ee,te,pe,Ce),H.push(ce,ce+1,ce+2,ce+1,ce+3,ce+2)}const oe=U.length/3;U.push(0,0,ve);for(let N=0;N<T.length;++N)U.push(T[N].x,T[N].y,ve);for(let N=1;N<=T.length;++N){const ne=oe,me=oe+N,S=oe+(N<T.length?N+1:1);H.push(ne,me,S)}const Me=new BufferGeometry;Me.setAttribute("position",new Float32BufferAttribute(U,3)),Me.setIndex(H),Me.computeVertexNormals();const Se=((m=document.getElementById("highlight-layer-color"))==null?void 0:m.value)||"#ffffff",xe=new MeshStandardMaterial({color:Se,transparent:!0,opacity:.15,metalness:.9,roughness:.05,envMapIntensity:2,side:DoubleSide,depthWrite:!1}),Ie=new Mesh(Me,xe);this.currentObjectType==="circular-pendant"?(Ie.rotation.x=0,Ie.position.y=this.pendantThickness/2):Ie.rotation.x=-Math.PI/2,this.scene.add(Ie),this.redLayer=Ie;let Te=1/0,L=-1/0,de=[];for(let N=2;N<O.length;N+=3)O[N]<Te&&(Te=O[N]),O[N]>L&&(L=O[N]);const K=parseFloat(((g=document.getElementById("antiquing-amount"))==null?void 0:g.value)||.5);for(let N=2;N<O.length;N+=3){const me=(O[N]-Te)/(L-Te+1e-6),S=.15+(1-.15)*((1-K)*me+K*(1-me));de.push(S,S,S)}n=new BufferGeometry,n.setAttribute("position",new Float32BufferAttribute(O,3)),n.setAttribute("uv",new Float32BufferAttribute(F,2)),n.setAttribute("color",new Float32BufferAttribute(de,3)),n.setIndex(Y),n.computeVertexNormals();const ue=new MeshStandardMaterial({color:METAL_MATERIALS["sterling-silver"].color,metalness:this.envMapLoaded?1:.2,roughness:this.envMapLoaded?.1:.7,side:DoubleSide,envMapIntensity:this.envMapLoaded?1:0,transparent:!!t,alphaMap:t,alphaTest:t?.5:0,vertexColors:!0}),ee=new Mesh(n,ue);this.currentObjectType==="circular-pendant"?(ee.rotation.x=0,ee.position.y=this.pendantThickness/2):ee.position.y=this.pendantThickness/2,this.scene.add(ee),this.heightfield=ee,this.createJumpring("small"),this.updateJumpringPosition();const _e=((y=document.getElementById("metal-type"))==null?void 0:y.value)||"sterling-silver";this.updateMetalMaterial(_e),console.log("Adding red layer"),console.log("Scene children:",this.scene.children.length);return;case"rectangular-pendant":n=new PlaneGeometry(this.pendantWidth,this.pendantHeight,e.width-1,e.height-1);break;case"circular-stud":n=new PlaneGeometry(this.pendantDiameter/2,this.pendantDiameter/2,e.width-1,e.height-1);break;case"bracelet":n=new PlaneGeometry(this.pendantWidth*.8,this.pendantHeight,e.width-1,e.height-1);break}if(!n)return;const r=n.attributes.position.array,s=n.attributes.uv.array;for(let E=0;E<r.length;E+=3){let v,M;if(this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"){const z=r[E],_=r[E+1],A=this.currentObjectType==="circular-pendant"?this.pendantDiameter/2:this.pendantDiameter/4;if(v=(z/(this.pendantDiameter/2)+1)/2,M=(_/(this.pendantDiameter/2)+1)/2,Math.sqrt(z*z+_*_)>A){r[E+2]=0;continue}}else v=s[E/3*2],M=s[E/3*2+1];const P=Math.floor(v*(e.width-1)),w=((e.height-1-Math.floor(M*(e.height-1)))*e.width+P)*4,I=(e.data[w]*.299+e.data[w+1]*.587+e.data[w+2]*.114)/255;r[E+2]=I*MAX_DEPTH}if(n.computeVertexNormals(),this.currentObjectType==="circular-pendant"){const v=document.createElement("canvas");v.width=512,v.height=512;const M=v.getContext("2d");M.fillStyle="black",M.fillRect(0,0,512,512),M.beginPath(),M.arc(512/2,512/2,512/2,0,Math.PI*2),M.closePath(),M.fillStyle="white",M.fill(),t=new CanvasTexture(v)}let a=1/0,o=-1/0,l=[];for(let E=2;E<r.length;E+=3)r[E]<a&&(a=r[E]),r[E]>o&&(o=r[E]);const c=parseFloat(((p=document.getElementById("antiquing-amount"))==null?void 0:p.value)||.5);for(let E=2;E<r.length;E+=3){const M=(r[E]-a)/(o-a+1e-6),P=.15+(1-.15)*((1-c)*M+c*(1-M));l.push(P,P,P)}n.setAttribute("color",new Float32BufferAttribute(l,3));const h=new MeshStandardMaterial({color:METAL_MATERIALS["sterling-silver"].color,metalness:this.envMapLoaded?1:.2,roughness:this.envMapLoaded?.1:.7,side:DoubleSide,envMapIntensity:this.envMapLoaded?1:0,transparent:!!t,alphaMap:t,alphaTest:t?.5:0,vertexColors:!0}),d=new Mesh(n,h);this.currentObjectType==="circular-pendant"?(d.rotation.x=0,d.position.y=this.pendantThickness/2):d.position.y=this.pendantThickness/2,this.scene.add(d),this.heightfield=d,this.createJumpring("small"),this.updateJumpringPosition();const u=((f=document.getElementById("metal-type"))==null?void 0:f.value)||"sterling-silver";this.updateMetalMaterial(u),console.log("Adding red layer"),console.log("Scene children:",this.scene.children.length)}updateObjectShape(){this.heightfield&&(this.createHeightfieldMesh(this.heightfieldData),this.refreshAllTextBoxes())}fitCameraToObject(e){const t=new Box3().setFromObject(e),n=t.getCenter(new Vector3),r=t.getSize(new Vector3),s=Math.max(r.x,r.y,r.z),a=this.camera.fov*(Math.PI/180);let o=Math.abs(s/Math.sin(a/2));this.camera.position.set(n.x,n.y,n.z+o*1.5),this.camera.lookAt(n),this.controls.target.copy(n),this.controls.update()}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.directionalLight){const e=Date.now()*5e-4,t=5;this.directionalLight.position.x=Math.cos(e)*t,this.directionalLight.position.z=Math.sin(e)*t,this.directionalLight.position.y=3}if(this.isRotating&&this.heightfield){let e=0,t=0;this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?(e=-this.pendantDiameter/2,t=0):(e=-this.pendantHeight/2,t=0);const n=.01;this.heightfield.position.y=-e,this.heightfield.position.z=-t,this.heightfield.rotateY(n),this.heightfield.position.y=0,this.heightfield.position.z=0,this.jumpring&&(this.jumpring.position.y-=e,this.jumpring.position.z-=t,this.jumpring.rotation.y=this.heightfield.rotation.y,this.jumpring.position.y+=e,this.jumpring.position.z+=t),this.engravingMesh&&(this.engravingMesh.position.y-=e,this.engravingMesh.position.z-=t,this.engravingMesh.rotation.y=this.heightfield.rotation.y,this.engravingMesh.position.y+=e,this.engravingMesh.position.z+=t),this.redLayer&&(this.redLayer.position.y=0,this.redLayer.position.z=0,this.redLayer.rotation.y=this.heightfield.rotation.y)}this.controls.update(),this.renderer.render(this.scene,this.camera),this.cube&&this.cubeRenderer&&this.cubeScene&&this.cubeCamera&&(this.cube.quaternion.copy(this.camera.quaternion),this.cubeRenderer.render(this.cubeScene,this.cubeCamera))}updateImagePosition(){if(!this.heightfield)return;const e=this.heightfield.geometry,t=e.attributes.position.array,n=e.attributes.uv.array;this.heightfieldData.aspectRatio;for(let r=0;r<t.length;r+=3){let s=t[r],a=t[r+1];const o=this.imageTransform.rotation*Math.PI/180,l=Math.cos(o),c=Math.sin(o);s*=this.imageTransform.scale,a*=this.imageTransform.scale;const h=s*l-a*c,d=s*c+a*l;if(s=h,a=d,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"){const u=this.currentObjectType==="circular-pendant"?this.pendantDiameter/2:this.pendantDiameter/4;s+=this.imageTransform.offsetX*u,a+=this.imageTransform.offsetY*u}else s+=this.imageTransform.offsetX*this.pendantWidth,a+=this.imageTransform.offsetY*this.pendantHeight;if(t[r]=s,t[r+1]=a,this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"){const u=this.currentObjectType==="circular-pendant"?this.pendantDiameter/2:this.pendantDiameter/4;n[r/3*2]=(s/u+1)/2,n[r/3*2+1]=(a/u+1)/2}}e.attributes.position.needsUpdate=!0,e.attributes.uv.needsUpdate=!0,e.computeVertexNormals()}updateMetalMaterial(e){if(!this.heightfield)return;const t=METAL_MATERIALS[e];this.heightfield.material.color.set(t.color),this.heightfield.material.metalness=t.metalness,this.heightfield.material.roughness=t.roughness,this.heightfield.material.envMapIntensity=t.envMapIntensity,this.jumpring&&(this.jumpring.material.color.set(t.color),this.jumpring.material.metalness=t.metalness,this.jumpring.material.roughness=t.roughness,this.jumpring.material.envMapIntensity=t.envMapIntensity)}updateMetalFinish(e){if(!this.heightfield)return;const t=FINISH_PROPERTIES[e];this.heightfield.material.roughness=t.roughness,this.jumpring&&(this.jumpring.material.roughness=t.roughness)}createJumpring(e){this.jumpring&&this.scene.remove(this.jumpring);const t={small:2,medium:3,large:4}[e],n=new TorusGeometry(t,.5,16,32),r=new MeshStandardMaterial({color:METAL_MATERIALS["sterling-silver"].color,metalness:1,roughness:.1,envMapIntensity:1});this.jumpring=new Mesh(n,r),this.scene.add(this.jumpring),console.log("Creating jumpring")}updateJumpring(e){this.createJumpring(e),this.updateJumpringPosition()}updateJumpringPosition(){if(!this.jumpring||!this.heightfield)return;const e=new Box3().setFromObject(this.heightfield),t=e.getSize(new Vector3),n=e.getCenter(new Vector3);let r=n.x,s=n.y+t.y/2+1,a=n.z;this.jumpring.position.set(r,s,a),this.jumpring.rotation.set(0,0,0)}addScaleGrid(){this.grid&&this.scene.remove(this.grid);let e=60,t=60;this.currentObjectType==="circular-pendant"||this.currentObjectType==="circular-stud"?(e=Math.ceil(this.pendantDiameter*1.2),t=e):(e=Math.ceil(Math.max(this.pendantWidth,this.pendantHeight)*1.2),t=e);const n=new GridHelper(e,t,16777215,8947848);n.position.y=-this.pendantThickness/2-.5,n.material.opacity=.5,n.material.transparent=!0,this.grid=n,this.scene.add(this.grid)}addViewCube(){this.cubeScene=new Scene,this.cubeCamera=new PerspectiveCamera(50,1,.1,10),this.cubeCamera.position.set(2,2,2),this.cubeCamera.lookAt(0,0,0);const e=new BoxGeometry(1,1,1),t=[new MeshBasicMaterial({color:4886754,transparent:!0,opacity:.8}),new MeshBasicMaterial({color:14830154,transparent:!0,opacity:.8}),new MeshBasicMaterial({color:4907594,transparent:!0,opacity:.8}),new MeshBasicMaterial({color:14869066,transparent:!0,opacity:.8}),new MeshBasicMaterial({color:14830306,transparent:!0,opacity:.8}),new MeshBasicMaterial({color:4907746,transparent:!0,opacity:.8})];this.cube=new Mesh(e,t),this.cubeScene.add(this.cube),this.addCubeLabels();const n=new WireframeGeometry(e),r=new LineBasicMaterial({color:16777215,linewidth:2}),s=new LineSegments(n,r);this.cube.add(s),this.cubeRenderer=new WebGLRenderer({alpha:!0,antialias:!0}),this.cubeRenderer.setSize(120,120),this.cubeRenderer.setClearColor(0,0),this.cubeRenderer.domElement.style.position="absolute",this.cubeRenderer.domElement.style.top="20px",this.cubeRenderer.domElement.style.left="20px",this.cubeRenderer.domElement.style.zIndex="2001",this.cubeRenderer.domElement.style.border="2px solid rgba(255,255,255,0.3)",this.cubeRenderer.domElement.style.borderRadius="8px",this.cubeRenderer.domElement.style.cursor="pointer",this.cubeRenderer.domElement.style.background="rgba(0,0,0,0.2)",document.body.appendChild(this.cubeRenderer.domElement),this.cubeRaycaster=new Raycaster,this.cubePointer=new Vector2,this.hoveredFace=-1,this.cubeRenderer.domElement.addEventListener("pointerdown",a=>{const o=this.cubeRenderer.domElement.getBoundingClientRect();this.cubePointer.x=(a.clientX-o.left)/o.width*2-1,this.cubePointer.y=-((a.clientY-o.top)/o.height)*2+1,this.cubeRaycaster.setFromCamera(this.cubePointer,this.cubeCamera);const l=this.cubeRaycaster.intersectObject(this.cube,!0);if(l.length>0){const c=Math.floor(l[0].faceIndex/2);this.setCameraToCubeFace(c)}}),this.cubeRenderer.domElement.addEventListener("pointermove",a=>{const o=this.cubeRenderer.domElement.getBoundingClientRect();this.cubePointer.x=(a.clientX-o.left)/o.width*2-1,this.cubePointer.y=-((a.clientY-o.top)/o.height)*2+1,this.cubeRaycaster.setFromCamera(this.cubePointer,this.cubeCamera);const l=this.cubeRaycaster.intersectObject(this.cube,!0),c=l.length>0?Math.floor(l[0].faceIndex/2):-1;c!==this.hoveredFace&&(this.hoveredFace>=0&&(this.cube.material[this.hoveredFace].opacity=.8),this.hoveredFace=c,this.hoveredFace>=0&&(this.cube.material[this.hoveredFace].opacity=1))}),this.cubeRenderer.domElement.addEventListener("pointerleave",()=>{this.hoveredFace>=0&&(this.cube.material[this.hoveredFace].opacity=.8,this.hoveredFace=-1)}),this.addViewPresetButtons()}addCubeLabels(){const e=["R","L","T","B","F","K"],t=[[.51,0,0],[-.51,0,0],[0,.51,0],[0,-.51,0],[0,0,.51],[0,0,-.51]],n=document.createElement("canvas");n.width=64,n.height=64;const r=n.getContext("2d");e.forEach((s,a)=>{r.clearRect(0,0,64,64),r.fillStyle="white",r.font="bold 32px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(s,32,32);const o=new CanvasTexture(n);o.needsUpdate=!0;const l=new SpriteMaterial({map:o,transparent:!0,alphaTest:.1}),c=new Sprite(l);c.scale.set(.3,.3,1),c.position.set(...t[a]),this.cube.add(c)})}addViewPresetButtons(){const e=document.createElement("div");e.style.position="absolute",e.style.top="150px",e.style.left="20px",e.style.zIndex="2001",e.style.display="flex",e.style.flexDirection="column",e.style.gap="5px",[{name:"ISO",position:[35,35,35],icon:"⬚"},{name:"Front",position:[0,0,50],icon:"⬜"},{name:"Back",position:[0,0,-50],icon:"⬛"},{name:"Left",position:[-50,0,0],icon:"◀"},{name:"Right",position:[50,0,0],icon:"▶"},{name:"Top",position:[0,50,0],icon:"▲"},{name:"Bottom",position:[0,-50,0],icon:"▼"}].forEach(n=>{const r=document.createElement("button");r.textContent=`${n.icon} ${n.name}`,r.style.cssText=`
                background: rgba(0,0,0,0.7);
                color: white;
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 4px;
                padding: 4px 8px;
                font-size: 11px;
                cursor: pointer;
                transition: all 0.2s;
                white-space: nowrap;
            `,r.addEventListener("mouseenter",()=>{r.style.background="rgba(255,255,255,0.2)",r.style.borderColor="rgba(255,255,255,0.6)"}),r.addEventListener("mouseleave",()=>{r.style.background="rgba(0,0,0,0.7)",r.style.borderColor="rgba(255,255,255,0.3)"}),r.addEventListener("click",()=>{this.camera.position.set(...n.position),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}),e.appendChild(r)}),document.body.appendChild(e),this.viewPresetContainer=e}setCameraToCubeFace(e){let n={x:0,y:0,z:0},r="";switch(e){case 0:n={x:50,y:0,z:0},r="Right View";break;case 1:n={x:-50,y:0,z:0},r="Left View";break;case 2:n={x:0,y:50,z:0},r="Top View";break;case 3:n={x:0,y:-50,z:0},r="Bottom View";break;case 4:n={x:0,y:0,z:50},r="Front View";break;case 5:n={x:0,y:0,z:-50},r="Back View";break;default:n={x:50,y:50,z:50},r="Isometric View";break}this.animateCameraTo(n.x,n.y,n.z),showNotification(`Switched to ${r}`,"info")}animateCameraTo(e,t,n){const r=this.camera.position.clone(),s=new Vector3(e,t,n),a=500,o=Date.now(),l=()=>{const c=Date.now()-o,h=Math.min(c/a,1),d=1-Math.pow(1-h,3);this.camera.position.lerpVectors(r,s,d),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update(),h<1&&requestAnimationFrame(l)};l()}exportSTL(){const e=new STLExporter,t=new Group;this.heightfield&&t.add(this.heightfield.clone()),this.jumpring&&t.add(this.jumpring.clone());const n=e.parse(t),r=new Blob([n],{type:"text/plain"}),s=document.createElement("a");s.style.display="none",document.body.appendChild(s),s.href=URL.createObjectURL(r),s.download="pendant.stl",s.click(),document.body.removeChild(s)}loadEngravingFont(e,t){if(this.fontCache[e]){this.engravingFont=this.fontCache[e],t&&t();return}const n=new FontLoader,r=ENGRAVING_FONTS[e];if(!r){console.error(`Font ${e} not found in ENGRAVING_FONTS`);return}n.load(r,s=>{this.fontCache[e]=s,this.engravingFont=s,t&&t()})}updateEngraving(e){var m,g,y,p;if(this.engravingMesh&&(this.scene.remove(this.engravingMesh),this.engravingMesh.geometry.dispose(),this.engravingMesh.material.dispose(),this.engravingMesh=null),!this.engravingFont||!e.trim())return;const t=parseFloat(((m=document.getElementById("engraving-size"))==null?void 0:m.value)||5),n=(g=document.getElementById("engraving-bold"))==null?void 0:g.checked,r=(y=document.getElementById("engraving-italic"))==null?void 0:y.checked,s=((p=document.getElementById("engraving-justify"))==null?void 0:p.value)||"center",a=n?.3:.2,o=new TextGeometry(e,{font:this.engravingFont,size:t,height:a,curveSegments:8,bevelEnabled:!1});o.computeBoundingBox();const l=o.boundingBox;let c=0;s==="center"?c=-.5*(l.max.x-l.min.x):s==="right"&&(c=-(l.max.x-l.min.x));const h=-.5*(l.max.y-l.min.y);o.translate(c,h,0),r&&o.applyMatrix4(new Matrix4().set(1,.3,0,0,0,1,0,0,0,0,1,0,0,0,0,1));const d=new MeshStandardMaterial({color:2236962,metalness:.1,roughness:.9,transparent:!0,opacity:.8}),u=new Mesh(o,d);this.currentObjectType==="circular-pendant"?(u.position.set(textBox.positionX,textBox.positionY,-this.pendantThickness/2-a-1+textBox.positionZ),u.rotation.x=0,u.rotation.y=Math.PI,u.rotation.z=textBox.rotationZ*Math.PI/180):(u.position.set(textBox.positionX,-this.pendantThickness-a*.2+textBox.positionY,textBox.positionZ),u.rotation.x=-Math.PI/2,u.rotation.y=Math.PI,u.rotation.z=textBox.rotationZ*Math.PI/180),this.scene.add(u),this.engravingMesh=u,console.log("Engraving mesh created and positioned at back surface"),console.log("Engraving mesh position:",u.position,"rotation:",u.rotation)}addTextBox(){const t={id:++this.textBoxCounter,text:"",font:this.defaultFontName,size:5,bold:!1,italic:!1,justify:"center",positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,isArched:!1,archRadius:10,archAngle:180,archDirection:1,mesh:null};return this.textBoxes.push(t),this.createTextBoxUI(t),this.updateNoTextBoxesMessage(),t}removeTextBox(e){const t=this.textBoxes.findIndex(s=>s.id===e);if(t===-1)return;const n=this.textBoxes[t];n.mesh&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose()),this.textBoxes.splice(t,1);const r=document.getElementById(`text-box-${e}`);r&&r.remove(),this.updateNoTextBoxesMessage()}createTextBoxUI(e){const t=document.getElementById("text-boxes-container"),n=document.createElement("div");n.className="text-box-item",n.id=`text-box-${e.id}`,n.innerHTML=`
            <div class="text-box-header">
                <div class="text-box-title">Text Box ${e.id}</div>
                <div>
                    <button class="text-box-toggle">▼</button>
                    <button class="text-box-delete" onclick="viewer.removeTextBox(${e.id})">🗑️</button>
                </div>
            </div>
            <div class="text-box-controls active">
                <div class="control-row full-width">
                    <div>
                        <label>Text (max 50 characters)</label>
                        <textarea id="text-${e.id}" maxlength="50" rows="2" style="width:100%;resize:none;"></textarea>
                        <div class="char-counter">
                            <span id="char-count-${e.id}">0</span>/50
                        </div>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label>Font</label>
                        <select id="font-${e.id}">
                            <option value="helvetiker">Helvetiker</option>
                            <option value="optimer">Optimer</option>
                            <option value="gentilis">Gentilis</option>
                            <option value="droid_sans">Droid Sans</option>
                            <option value="droid_serif">Droid Serif</option>
                        </select>
                    </div>
                    <div>
                        <label>Size</label>
                        <input type="range" id="size-${e.id}" min="2" max="10" step="0.1" value="5">
                        <span class="slider-value" id="size-value-${e.id}">5</span>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label><input type="checkbox" id="bold-${e.id}"> Bold</label>
                        <label><input type="checkbox" id="italic-${e.id}"> Italic</label>
                    </div>
                    <div>
                        <label>Justify</label>
                        <select id="justify-${e.id}">
                            <option value="center">Center</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                        </select>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label>Position X</label>
                        <input type="range" id="pos-x-${e.id}" min="-15" max="15" step="0.1" value="0">
                        <span class="slider-value" id="pos-x-value-${e.id}">0</span>
                    </div>
                    <div>
                        <label>Position Y</label>
                        <input type="range" id="pos-y-${e.id}" min="-15" max="15" step="0.1" value="0">
                        <span class="slider-value" id="pos-y-value-${e.id}">0</span>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label>Position Z</label>
                        <input type="range" id="pos-z-${e.id}" min="-5" max="5" step="0.1" value="0">
                        <span class="slider-value" id="pos-z-value-${e.id}">0</span>
                    </div>
                    <div>
                        <label>Rotation</label>
                        <input type="range" id="rotation-${e.id}" min="0" max="360" step="1" value="0">
                        <span class="slider-value" id="rotation-value-${e.id}">0°</span>
                    </div>
                </div>
                
                <div class="control-row full-width">
                    <div>
                        <label><input type="checkbox" id="arched-${e.id}"> Arched Text</label>
                    </div>
                </div>
                
                <div id="arch-controls-${e.id}" style="display: none;">
                    <div class="control-row">
                        <div>
                            <label>Arch Radius</label>
                            <input type="range" id="arch-radius-${e.id}" min="5" max="25" step="0.5" value="10">
                            <span class="slider-value" id="arch-radius-value-${e.id}">10</span>
                        </div>
                        <div>
                            <label>Arch Angle</label>
                            <input type="range" id="arch-angle-${e.id}" min="30" max="360" step="5" value="180">
                            <span class="slider-value" id="arch-angle-value-${e.id}">180°</span>
                        </div>
                    </div>
                    <div class="control-row">
                        <div>
                            <label>Direction</label>
                            <select id="arch-direction-${e.id}">
                                <option value="1">Normal</option>
                                <option value="-1">Inverted</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `,t.appendChild(n),this.setupTextBoxEventListeners(e)}setupTextBoxEventListeners(e){const t=e.id,n=document.querySelector(`#text-box-${t} .text-box-header`),r=document.querySelector(`#text-box-${t} .text-box-controls`),s=document.querySelector(`#text-box-${t} .text-box-toggle`);n.addEventListener("click",u=>{u.target.classList.contains("text-box-delete")||(r.classList.toggle("active"),s.textContent=r.classList.contains("active")?"▼":"▶")});const a=document.getElementById(`text-${t}`),o=document.getElementById(`char-count-${t}`);a.addEventListener("input",u=>{e.text=u.target.value,o.textContent=u.target.value.length,this.updateTextBoxMesh(e)}),document.getElementById(`font-${t}`).addEventListener("change",u=>{e.font=u.target.value,this.loadEngravingFont(e.font,()=>{this.updateTextBoxMesh(e)})});const l=document.getElementById(`size-${t}`),c=document.getElementById(`size-value-${t}`);l.addEventListener("input",u=>{e.size=parseFloat(u.target.value),c.textContent=u.target.value,this.updateTextBoxMesh(e)}),document.getElementById(`bold-${t}`).addEventListener("change",u=>{e.bold=u.target.checked,this.updateTextBoxMesh(e)}),document.getElementById(`italic-${t}`).addEventListener("change",u=>{e.italic=u.target.checked,this.updateTextBoxMesh(e)}),document.getElementById(`justify-${t}`).addEventListener("change",u=>{e.justify=u.target.value,this.updateTextBoxMesh(e)}),this.setupSliderControl(`pos-x-${t}`,`pos-x-value-${t}`,u=>{e.positionX=u,this.updateTextBoxMesh(e)}),this.setupSliderControl(`pos-y-${t}`,`pos-y-value-${t}`,u=>{e.positionY=u,this.updateTextBoxMesh(e)}),this.setupSliderControl(`pos-z-${t}`,`pos-z-value-${t}`,u=>{e.positionZ=u,this.updateTextBoxMesh(e)}),this.setupSliderControl(`rotation-${t}`,`rotation-value-${t}`,u=>{e.rotationZ=u,this.updateTextBoxMesh(e)},"°");const h=document.getElementById(`arched-${t}`),d=document.getElementById(`arch-controls-${t}`);h.addEventListener("change",u=>{e.isArched=u.target.checked,d.style.display=u.target.checked?"block":"none",this.updateTextBoxMesh(e)}),this.setupSliderControl(`arch-radius-${t}`,`arch-radius-value-${t}`,u=>{e.archRadius=u,this.updateTextBoxMesh(e)}),this.setupSliderControl(`arch-angle-${t}`,`arch-angle-value-${t}`,u=>{e.archAngle=u,this.updateTextBoxMesh(e)},"°"),document.getElementById(`arch-direction-${t}`).addEventListener("change",u=>{e.archDirection=parseInt(u.target.value),this.updateTextBoxMesh(e)})}setupSliderControl(e,t,n,r=""){const s=document.getElementById(e),a=document.getElementById(t);s.addEventListener("input",o=>{const l=parseFloat(o.target.value);a.textContent=l+r,n(l)})}updateTextBoxMesh(e){if(e.mesh&&(this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.mesh=null),!e.text.trim())return;const t=this.fontCache[e.font];if(!t){this.loadEngravingFont(e.font,()=>{this.updateTextBoxMesh(e)});return}e.isArched?this.createArchedTextMesh(e,t):this.createStraightTextMesh(e,t)}createStraightTextMesh(e,t){const n=e.bold?.3:.2,r=new TextGeometry(e.text,{font:t,size:e.size,height:n,curveSegments:8,bevelEnabled:!1});r.computeBoundingBox();const s=r.boundingBox;let a=0;e.justify==="center"?a=-.5*(s.max.x-s.min.x):e.justify==="right"&&(a=-(s.max.x-s.min.x));const o=-.5*(s.max.y-s.min.y);r.translate(a,o,0),e.italic&&r.applyMatrix4(new Matrix4().set(1,.3,0,0,0,1,0,0,0,0,1,0,0,0,0,1));const l=new MeshStandardMaterial({color:2236962,metalness:.1,roughness:.9,transparent:!0,opacity:.8}),c=new Mesh(r,l);this.currentObjectType==="circular-pendant"?(c.position.set(e.positionX,e.positionY,-this.pendantThickness/2-n-1+e.positionZ),c.rotation.x=0,c.rotation.y=Math.PI,c.rotation.z=e.rotationZ*Math.PI/180):(c.position.set(e.positionX,-this.pendantThickness-n*.2+e.positionY,e.positionZ),c.rotation.x=-Math.PI/2,c.rotation.y=Math.PI,c.rotation.z=e.rotationZ*Math.PI/180),this.scene.add(c),e.mesh=c}createArchedTextMesh(e,t){const n=e.text.split(""),r=new Group,s=e.archAngle*Math.PI/180,a=s/Math.max(1,n.length-1),o=-s/2;n.forEach((l,c)=>{if(l===" ")return;const h=e.bold?.3:.2,d=new TextGeometry(l,{font:t,size:e.size,height:h,curveSegments:8,bevelEnabled:!1});d.computeBoundingBox();const u=d.boundingBox,m=u.max.x-u.min.x,g=u.max.y-u.min.y;d.translate(-m/2,-g/2,0),e.italic&&d.applyMatrix4(new Matrix4().set(1,.3,0,0,0,1,0,0,0,0,1,0,0,0,0,1));const y=new MeshStandardMaterial({color:2236962,metalness:.1,roughness:.9,transparent:!0,opacity:.8}),p=new Mesh(d,y),f=o+c*a,E=Math.cos(f)*e.archRadius*e.archDirection,v=Math.sin(f)*e.archRadius*e.archDirection;p.position.set(E,v,0),r.add(p)}),this.currentObjectType==="circular-pendant"?(r.position.set(e.positionX,e.positionY,-this.pendantThickness/2-1.3+e.positionZ),r.rotation.x=0,r.rotation.y=Math.PI,r.rotation.z=e.rotationZ*Math.PI/180):(r.position.set(e.positionX,-this.pendantThickness-.2+e.positionY,e.positionZ),r.rotation.x=-Math.PI/2,r.rotation.y=Math.PI,r.rotation.z=e.rotationZ*Math.PI/180),this.scene.add(r),e.mesh=r}updateNoTextBoxesMessage(){const e=document.getElementById("no-text-boxes"),t=this.textBoxes.length>0;e.style.display=t?"none":"block"}resetScene(){this.heightfield&&(this.scene.remove(this.heightfield),this.heightfield.geometry.dispose(),this.heightfield.material.dispose(),this.heightfield=null),this.jumpring&&(this.scene.remove(this.jumpring),this.jumpring.geometry.dispose(),this.jumpring.material.dispose(),this.jumpring=null),this.engravingMesh&&(this.scene.remove(this.engravingMesh),this.engravingMesh.geometry.dispose(),this.engravingMesh.material.dispose(),this.engravingMesh=null),this.textBoxes.forEach(t=>{t.mesh&&(this.scene.remove(t.mesh),t.mesh.geometry&&t.mesh.geometry.dispose(),t.mesh.material&&t.mesh.material.dispose(),t.mesh.children&&t.mesh.children.forEach(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}))}),this.textBoxes=[],this.textBoxCounter=0;const e=document.getElementById("text-boxes-container");e&&(e.innerHTML=""),this.updateNoTextBoxesMessage(),this.redLayer&&(this.scene.remove(this.redLayer),this.redLayer.geometry.dispose(),this.redLayer.material.dispose(),this.redLayer=null),this.grid&&(this.scene.remove(this.grid),this.grid=null),this.heightfieldData=null,this.originalImageDataUrl=null,this.camera.position.copy(this.defaultCameraPosition),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update(),document.getElementById("image-offset-x").value=0,document.getElementById("image-offset-y").value=0,document.getElementById("image-scale").value=1,document.getElementById("image-rotation").value=0,this.imageTransform={offsetX:0,offsetY:0,scale:1,rotation:0}}dispose(){this.viewPresetContainer&&this.viewPresetContainer.parentNode&&this.viewPresetContainer.parentNode.removeChild(this.viewPresetContainer),this.cubeRenderer&&this.cubeRenderer.domElement&&this.cubeRenderer.domElement.parentNode&&(this.cubeRenderer.domElement.parentNode.removeChild(this.cubeRenderer.domElement),this.cubeRenderer.dispose()),this.heightfield&&(this.heightfield.geometry.dispose(),this.heightfield.material.dispose()),this.jumpring&&(this.jumpring.geometry.dispose(),this.jumpring.material.dispose()),this.engravingMesh&&(this.engravingMesh.geometry.dispose(),this.engravingMesh.material.dispose()),this.renderer&&this.renderer.dispose()}refreshAllTextBoxes(){this.textBoxes.forEach(e=>{this.updateTextBoxMesh(e)})}}window.viewer=new HeightfieldViewer;fetch("./version.json").then(i=>i.json()).then(i=>{const e=document.getElementById("deployment-guid");e&&(e.textContent=`Deployment GUID: ${i.guid}
${i.date}`)}).catch(()=>{const i=document.getElementById("deployment-guid");i&&(i.textContent="Deployment version: unknown")});async function generateImageWithOpenAI(i){try{showLoadingOverlay(),document.getElementById("loading-status").textContent="Generating image with AI...";const e=await fetch(`${OPENAI_BACKEND_URL}/api/generate-image`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:i})});if(!e.ok){const n=await e.json();let r="Failed to generate image";throw e.status===429?r="Rate limit exceeded. Please wait a few minutes before trying again.":e.status===400?n.error&&n.error.includes("billing")?r="Billing issue detected. Please check your OpenAI account credits.":n.error&&n.error.includes("content")?r="Content policy violation. Please try a different prompt.":r="Invalid request. Please try a different prompt.":e.status===401?r="Authentication failed. Please contact support.":e.status>=500&&(r="Server error. Please try again later."),new Error(r)}const t=await e.json();return document.getElementById("loading-status").textContent="Processing generated image...",hideLoadingOverlay(),t.imageData}catch(e){return hideLoadingOverlay(),console.error("Error generating image:",e),showNotification(`Error: ${e.message}`,"error"),null}}async function uploadDalleImageToS3(i,e){try{console.log("📋 Requesting signed URL for DALL-E image upload...");const t=await fetch(`${BACKEND_URL}/api/get-dalle-upload-url`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fileType:i.type,prompt:e})});if(!t.ok){const s=await t.text();throw new Error(`Failed to get upload URL: ${t.status} - ${s}`)}const n=await t.json();console.log("✅ Got signed URL for DALL-E image:",n.filename),console.log("📤 Uploading DALL-E image to S3...");const r=await fetch(n.uploadUrl,{method:"PUT",body:i,headers:{"Content-Type":i.type}});if(!r.ok)throw new Error(`S3 upload failed: ${r.status}`);return console.log("✅ DALL-E image uploaded successfully to S3:",n.filename),{success:!0,filename:n.filename,guid:n.guid,s3Key:n.filename}}catch(t){throw console.error("❌ DALL-E S3 image upload error:",t),t}}
