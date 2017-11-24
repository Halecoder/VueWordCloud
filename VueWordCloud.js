!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):t.VueWordCloud=e(t.Vue)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(t){return function(){return t}},n=function(t){return"function"==typeof t},r=function(t){return t&&"object"==typeof t},o=function(t,e){if(t===e)return!0;if(Array.isArray(t)){if(Array.isArray(e)&&t.length===e.length)return t.every(function(t,n){return o(t,e[n])})}else if(r(t)&&r(e)){var n=Object.entries(t);if(n.length===Object.keys(e).length)return n.every(function(t){var n=t[0],r=t[1];return o(r,e[n])})}return!1},i=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a=function(t){return function(t,e){var n={};return Object.entries(t).forEach(function(t){var r=t[0],o=t[1];n[r]=e(o,r)}),n}(t,function(t){return{key:t.key,text:t.text,weight:t.weight,rotation:t.rotation,fontFamily:t.fontFamily,fontStyle:t.fontStyle,fontVariant:t.fontVariant,fontWeight:t.fontWeight}})},u=function(t,e,n){return[Math.ceil(t*Math.abs(Math.cos(n))+e*Math.abs(Math.sin(n))),Math.ceil(t*Math.abs(Math.sin(n))+e*Math.abs(Math.cos(n)))]},f=function(t,e){if(t.length>0)return e&&(t=t.map(e)),t.reduce(function(t,e){return Math.min(t,e)})},c=function(t,e){if(t.length>0)return e&&(t=t.map(e)),t.reduce(function(t,e){return Math.max(t,e)})},h=function(t,e,n,r,o){return r+(t-e)*(o-r)/(n-e)},d=function(t,e,n,r){var o=[];if(t.length>0&&e>0&&n>0){var i=e/n,a=function(t,e){var n={};if(t.length>0){var r=f(t,function(t){return t.weight}),o=c(t,function(t){return t.weight});if(r<o&&e>0&&e<1/0)e<1&&(e=1/e),t.forEach(function(t){var i=t.key,a=t.weight;n[i]=h(a,r,o,1,e)});else if(r>0)t.forEach(function(t){var e=t.key,o=t.weight;n[e]=o/r});else{var i=1+Math.abs(r)+Math.abs(o);t.forEach(function(t){var e=t.key,a=t.weight;n[e]=h(a,r,o,1,i)})}}return n}(t,r);t=function(t,e){return t.map(function(t){return[e(t),t]}).sort(function(t,e){var n=t[0],r=e[0];return n>r?1:n<r?-1:0}).map(function(t){return t[1]})}(t,function(t){var e=t.key;return-a[e]});var d=Math.pow(2,22),l=Math.floor(Math.sqrt(i*d)),s=Math.floor(d/l),v=Array(l*s).fill(0);t.forEach(function(t){var e=t.key,n=t.text,r=t.rotation,i=t.fontFamily,f=t.fontStyle,c=t.fontVariant,h=t.fontWeight,d=4*a[e],y=function(t){return 2*t*Math.PI}(r),p=[f,c,h,d+"px",i].join(" ");try{var g=document.createElement("canvas").getContext("2d");g.font=p;var m=g.measureText(n).width;if(m>0){var W=d,S=Math.max(g.measureText("m").width,d),x=m+2*S,w=W+2*S,b=u(m,W,y),F=b[0],M=b[1],k=u(x,w,y),z=k[0],T=k[1],V=Array(z*T).fill(0);g.canvas.width=z,g.canvas.height=T,g.translate(z/2,T/2),g.rotate(y),g.font=p,g.textAlign="center",g.textBaseline="middle",g.fillText(n,0,0);for(var C=g.getImageData(0,0,z,T).data,H=0,B=V.length;H<B;++H)V[H]=C[4*H+3];for(var A=[],j=0;j<z;++j)for(var O=0;O<T;++O)V[z*O+j]&&A.push([j,O]);var E=function(t,e,n){if(t>0&&e>0){var r,o;t>e?(r=1,o=e/t):e>t?(o=1,r=t/e):r=o=1;var i=Math.floor(t/2),a=Math.floor(e/2),u=t-i,f=e-a;if(i<u)for(var c=i;c<=u;++c){var h=[c,a];if(n(h))return h}else if(a<f)for(var d=a;d<=f;++d){var l=[i,d];if(n(l))return l}for(var s=i,v=a,y=u,p=f;u<t||f<e;){i-=r,a-=o,u+=r,f+=o;var g=Math.floor(i),m=Math.floor(a),W=Math.ceil(u),S=Math.ceil(f);if(W>y)for(var x=m;x<S;++x){var w=[W,x];if(n(w))return w}if(S>p)for(var b=W;b>g;--b){var F=[b,S];if(n(F))return F}if(g<s)for(var M=S;M>m;--M){var k=[g,M];if(n(k))return k}if(m<v)for(var z=g;z<W;++z){var T=[z,m];if(n(T))return T}s=g,v=m,y=W,p=S}}throw new Error}(l-z,s-T,function(t){for(var e=t[0],n=t[1],r=0,o=A.length;r<o;++r){var i=A[r],a=i[0],u=i[1];if(a+=e,u+=n,v[l*u+a])return!1}for(var f=0,c=A.length;f<c;++f){var h=A[f],d=h[0],s=h[1];v[l*(s+=n)+(d+=e)]=1}return!0}),L=E[0]+(z-F)/2,P=E[1]+(T-M)/2;o.push({key:e,fontSize:d,textWidth:m,textHeight:W,rectLeft:L,rectTop:P,rectWidth:F,rectHeight:M})}}catch(t){}})}return o},l={name:"VueWordCloud",render:function(t){return function(t,e,n,r){return t("div",{style:{position:"relative",width:"100%",height:"100%"}},e.map(function(e){var o=e.key,i=e.fontSize,a=(e.textWidth,e.textHeight,e.rectLeft),u=e.rectTop,f=e.rectWidth,c=e.rectHeight,h=n[o],d=h.originalWord,l=h.text,s=h.weight,v=h.rotation,y=h.fontFamily,p=h.fontStyle,g=h.fontVariant,m=h.fontWeight,W=h.color;return t("div",{key:o,style:{position:"absolute",left:a+f/2+"px",top:u+c/2+"px",transform:"rotate("+v+"turn)"}},[t("div",{style:{position:"absolute",left:"50%",top:"50%",color:W,font:[p,g,m,i+"px/1",y].join(" "),whiteSpace:"nowrap",transform:"translate(-50%, -50%)"}},[r({originalWord:d,text:l,weight:s,rotation:v,fontFamily:y,fontStyle:p,fontVariant:g,fontWeight:m,color:W,fontSize:i})])])}))}(t,this.scaledBoundedWords,this.keyedPopulatedWords,this.$scopedSlots.default?this.$scopedSlots.default:function(t){return t.text})},props:{words:{type:Array,default:function(){return[]}},text:{type:[String,Function],default:""},weight:{type:[Number,Function],default:1},rotation:{type:[String,Function],default:function(){var t=[0,.75];return function(){return function(t){return t[Math.floor(t.length*Math.random())]}(t)}}},fontFamily:{type:[String,Function],default:"serif"},fontStyle:{type:[String,Function],default:"normal"},fontVariant:{type:[String,Function],default:"normal"},fontWeight:{type:[String,Function],default:"normal"},color:{type:[String,Function],default:"Black"},fontSizeRatio:{type:Number,default:0},maxFontSize:{type:Number,default:1/0},intervalBetweenUpdateContainerSize:{type:Number,default:1e3}},data:function(){return{containerWidth:0,containerHeight:0,keyedBoundableWords:void 0}},mounted:function(){this.startToUpdateContainerSize()},computed:{computeText:function(){var t=this.text;return n(t)?t:e(t)},computeWeight:function(){var t=this.weight;return n(t)?t:e(t)},computeRotation:function(){var t=this.rotation;return n(t)?t:e(t)},computeFontFamily:function(){var t=this.fontFamily;return n(t)?t:e(t)},computeFontStyle:function(){var t=this.fontStyle;return n(t)?t:e(t)},computeFontVariant:function(){var t=this.fontVariant;return n(t)?t:e(t)},computeFontWeight:function(){var t=this.fontWeight;return n(t)?t:e(t)},computeColor:function(){var t=this.color;return n(t)?t:e(t)},keyedPopulatedWords:function(){return function(t,e,n,o,a,u,f,c,h){var d={};return t.forEach(function(t){var l,s,v,y,p,g,m,W,S;if(t)if("string"==typeof t)s=t;else if(Array.isArray(t)){var x;s=(x=t)[0],v=x[1]}else if(r(t)){var w;l=(w=t).key,s=w.text,v=w.weight,y=w.rotation,p=w.fontFamily,g=w.fontStyle,m=w.fontVariant,W=w.fontWeight,S=w.color}for(void 0===s&&(s=e(t)),void 0===v&&(v=n(t)),void 0===y&&(y=o(t)),void 0===p&&(p=a(t)),void 0===g&&(g=u(t)),void 0===m&&(m=f(t)),void 0===W&&(W=c(t)),void 0===S&&(S=h(t)),void 0===l&&(l=JSON.stringify([s,p,g,m,W]));i(d,l);)l+="!";d[l]={key:l,originalWord:t,text:s,weight:v,rotation:y,fontFamily:p,fontStyle:g,fontVariant:m,fontWeight:W,color:S}}),d}(this.words,this.computeText,this.computeWeight,this.computeRotation,this.computeFontFamily,this.computeFontStyle,this.computeFontVariant,this.computeFontWeight,this.computeColor)},watch$keyedBoundableWords:function(){return a(this.keyedPopulatedWords)},boundableWords:function(){return Object.values(this.keyedBoundableWords)},boundedWords:function(){return d(this.boundableWords,this.containerWidth,this.containerHeight,this.fontSizeRatio)},scaledBoundedWords:function(){return function(t,e,n,r){var o=f(t,function(t){return t.rectLeft}),i=c(t,function(t){return t.rectLeft+t.rectWidth}),a=i-o,u=f(t,function(t){return t.rectTop}),h=c(t,function(t){return t.rectTop+t.rectHeight}),d=h-u,l=Math.min(e/a,n/d),s=c(t,function(t){return t.fontSize})*l;return s>r&&(l*=r/s),t.map(function(t){var r=t.key,a=t.fontSize,f=t.textWidth,c=t.textHeight,d=t.rectLeft,s=t.rectTop,v=t.rectWidth,y=t.rectHeight;return a*=l,f*=l,c*=l,d=(d-(o+i)/2)*l+e/2,s=(s-(u+h)/2)*l+n/2,v*=l,y*=l,{key:r,fontSize:a,textWidth:f,textHeight:c,rectLeft:d,rectTop:s,rectWidth:v,rectHeight:y}})}(this.boundedWords,this.containerWidth,this.containerHeight,this.maxFontSize)},startToUpdateContainerSize:function(){return function(){var t=this;this._isDestroyed||(setTimeout(function(){requestAnimationFrame(function(){t.startToUpdateContainerSize()})},this.intervalBetweenUpdateContainerSize),this.updateContainerSize())}}},watch:{watch$keyedBoundableWords:{handler:function(t,e){o(t,e)||(this.keyedBoundableWords=Object.freeze(t))},immediate:!0}},methods:{updateContainerSize:function(){var t=this.$el.getBoundingClientRect(),e=t.width,n=t.height;this.containerWidth=e,this.containerHeight=n}}};return"undefined"!=typeof window&&t.component(l.name,l),l});
