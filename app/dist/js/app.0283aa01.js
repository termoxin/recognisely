(function(e){function t(t){for(var r,i,o=t[0],u=t[1],s=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12d5":function(e,t,n){},"150b":function(e,t,n){},"1de3":function(e,t,n){"use strict";n("5dbf")},2432:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function c(e,t,n,c,i,o){var u=Object(r["j"])("FileUploader");return Object(r["f"])(),Object(r["c"])("div",a,[Object(r["e"])(u)])}var i=Object(r["l"])("data-v-ce77b526");Object(r["h"])("data-v-ce77b526");var o={key:1,class:"fileUploader"},u={for:"upload-video"},s={key:0},l={key:1,class:"lds-ring"},p=Object(r["e"])("div",null,null,-1),d=Object(r["e"])("div",null,null,-1),f=Object(r["e"])("div",null,null,-1),b=Object(r["e"])("div",null,null,-1);Object(r["g"])();var j=i((function(e,t,n,a,c,i){var j=Object(r["j"])("Transcript");return c.transcript.length?(Object(r["f"])(),Object(r["c"])(j,{key:0,transcript:c.transcript,previewUrl:c.previewUrl},null,8,["transcript","previewUrl"])):(Object(r["f"])(),Object(r["c"])("div",o,[Object(r["e"])("label",u,[c.file||c.isLoading?(Object(r["f"])(),Object(r["c"])("div",l,[p,d,f,b])):(Object(r["f"])(),Object(r["c"])("p",s,"Select file"))]),Object(r["e"])("input",{type:"file",onChange:t[1]||(t[1]=function(e){return i.uploadVideo(e)}),accept:"video/mp4",id:"upload-video"},null,32)]))})),v=n("1da1"),O=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("ac1f"),n("1276"),n("5319"),n("d81d"),n("498a"),n("a15b"),n("e1bd")),h=(n("caad"),n("2532"),Object(r["l"])("data-v-143fb443"));Object(r["h"])("data-v-143fb443");var g={class:"transcript-container"},m={class:"transcript"};Object(r["g"])();var w=h((function(e,t,n,a,c,i){var o=Object(r["j"])("PhraseInfo");return Object(r["f"])(),Object(r["c"])("div",g,[Object(r["e"])("video",{src:n.previewUrl,width:"500",controls:"",onTimeupdate:t[1]||(t[1]=function(e){return i.updateVideoPlayback(e)})},null,40,["src"]),Object(r["e"])("p",m,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(n.transcript,(function(e){return Object(r["f"])(),Object(r["c"])("span",{onClick:function(t){return i.addTranslation(t,e.id)},class:{selected:c.phrase.includes(e.id),playing:e.startSecs<=c.currentTime},key:e.id},Object(r["k"])(e.word+" "),11,["onClick"])})),128))]),c.phraseInfo?(Object(r["f"])(),Object(r["c"])(o,{key:0,phraseInfo:c.phraseInfo},null,8,["phraseInfo"])):Object(r["d"])("",!0)])})),y=(n("99af"),n("4de4"),n("fb6a"),Object(r["l"])("data-v-9489501e"));Object(r["h"])("data-v-9489501e");var k={class:"examples-container"},x=Object(r["e"])("br",null,null,-1);Object(r["g"])();var I=y((function(e,t,n,a,c,i){var o,u;return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("h1",null,Object(r["k"])(n.phraseInfo.text)+" "+Object(r["k"])(null!==(o=n.phraseInfo)&&void 0!==o&&o.translation.length?"— ".concat(null===(u=n.phraseInfo)||void 0===u?void 0:u.translation.slice(0,3).join(", ")):""),1),Object(r["e"])("div",k,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(n.phraseInfo.examples.slice(0,3),(function(e){return Object(r["f"])(),Object(r["c"])("div",{key:e.id,class:"example"},[Object(r["e"])("p",null,Object(r["k"])(e.from),1),Object(r["e"])("p",null,Object(r["k"])(e.to),1),x])})),128))])],64)})),T={name:"PhraseInfo",props:{phraseInfo:Object}};n("5742");T.render=I,T.__scopeId="data-v-9489501e";var P=T,U={name:"Transcript",components:{PhraseInfo:P},data:function(){return{phraseInfo:null,playingWordId:null,firstLanguage:"English",secondLanguage:"Russian",phrase:[],currentTime:0}},props:{previewUrl:String,transcript:Array},methods:{fetchTranslation:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r="/api/getContext",a="".concat(r,"?text=").concat(e,"&firstLanguage=").concat(t.firstLanguage,"&secondLanguage=").concat(t.secondLanguage),n.next=4,fetch(a);case 4:return c=n.sent,n.next=7,c.json();case 7:return i=n.sent,n.abrupt("return",i);case 9:case"end":return n.stop()}}),n)})))()},addTranslation:function(e,t){var n=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.shiftKey){r.next=4;break}n.phrase.push(t),r.next=12;break;case 4:if(e.shiftKey){r.next=12;break}return n.phrase.push(t),a=n.transcript.filter((function(e){return n.phrase.includes(e.id)})).map((function(e){return e.word})).join(" "),r.next=9,n.fetchTranslation(a);case 9:c=r.sent,n.phraseInfo=c,n.phrase=[];case 12:case"end":return r.stop()}}),r)})))()},updateVideoPlayback:function(e){this.currentTime=e.target.currentTime}}};n("979b");U.render=w,U.__scopeId="data-v-143fb443";var S=U,L={name:"FileUploader",components:{Transcript:S},data:function(){return{transcript:[],file:null,previewUrl:null,isLoading:!1}},methods:{createPreviewUrl:function(e){var t=new Blob([e],{type:"video/mp4"}),n=URL.createObjectURL(t);return n},uploadAndTranscribeVideo:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,n.append("filedata",e),t.next=4,fetch("/api/transcribeVideo",{method:"POST",body:n});case 4:return r=t.sent,t.next=7,r.json();case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})))()},splitByWords:function(e){var t=e.replace(/([ .,;]+)/g,"$1§sep§").split("§sep§");return t.map((function(e){return e.replaceAll(/[.,!?]+/g,"").trim()}))},uploadVideo:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isLoading=!0,t.file=e.currentTarget.files[0],n.next=4,t.uploadAndTranscribeVideo(t.file);case 4:r=n.sent,t.transcript=t.splitByWords(r[0].map((function(e){return e.word})).join(" ")).map((function(e,t){return{id:Object(O["a"])(),word:e,startSecs:r[0][t].startSecs,endSecs:r[0][t].endSecs}})),t.isLoading=!1,t.previewUrl=t.createPreviewUrl(t.file);case 8:case"end":return n.stop()}}),n)})))()}}};n("1de3");L.render=j,L.__scopeId="data-v-ce77b526";var _=L,R=(n("150b"),{name:"App",components:{FileUploader:_}});n("e4ce");R.render=c;var V=R;Object(r["b"])(V).mount("#app")},5742:function(e,t,n){"use strict";n("12d5")},"5dbf":function(e,t,n){},"78f5":function(e,t,n){},"979b":function(e,t,n){"use strict";n("2432")},e4ce:function(e,t,n){"use strict";n("78f5")}});
//# sourceMappingURL=app.0283aa01.js.map