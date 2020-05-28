var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function s(t,e,n){t.$$.on_destroy.push(c(e,n))}const i="undefined"!=typeof window;let a=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(d)}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}class T{constructor(t,e=null){this.e=b("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)h(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(g)}}let M;function O(t){M=t}const I=[],j=[],D=[],U=[],A=Promise.resolve();let C=!1;function S(t){D.push(t)}let z=!1;const _=new Set;function E(){if(!z){z=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];O(e),N(e.$$)}for(I.length=0;j.length;)j.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];_.has(e)||(_.add(e),e())}D.length=0}while(I.length);for(;U.length;)U.pop()();C=!1,z=!1,_.clear()}}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const P=new Set;let q;function L(){q={r:0,c:[],p:q}}function F(){q.r||r(q.c),q=q.p}function Z(t,e){t&&t.i&&(P.delete(t),t.i(e))}function R(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),q.c.push(()=>{P.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function G(t){t&&t.c()}function Y(t,n,l){const{fragment:c,on_mount:s,on_destroy:i,after_update:a}=t.$$;c&&c.m(n,l),S(()=>{const n=s.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(S)}function B(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(I.push(t),C||(C=!0,A.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,o,l,c,s,i,a=[-1]){const u=M;O(e);const f=o.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a};let m=!1;if(d.ctx=l?l(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),m&&H(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();o.intro&&Z(e.$$.fragment),Y(e,o.target,o.anchor),E()}O(u)}class V{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function X(t){const e=t*t;return t<4/11?7.5625*e:t<8/11?9.075*e-9.9*t+3.4:t<.9?4356/361*e-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}var J=Object.freeze({__proto__:null,backIn:function(t){const e=1.70158;return t*t*((e+1)*t-e)},backInOut:function(t){const e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},backOut:function(t){const e=1.70158;return--t*t*((e+1)*t+e)+1},bounceIn:function(t){return 1-X(1-t)},bounceInOut:function(t){return t<.5?.5*(1-X(1-2*t)):.5*X(2*t-1)+.5},bounceOut:X,circIn:function(t){return 1-Math.sqrt(1-t*t)},circInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},circOut:function(t){return Math.sqrt(1- --t*t)},cubicIn:function(t){return t*t*t},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},cubicOut:function(t){const e=t-1;return e*e*e+1},elasticIn:function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))},elasticInOut:function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1},elasticOut:function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1},expoIn:function(t){return 0===t?t:Math.pow(2,10*(t-1))},expoInOut:function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},expoOut:function(t){return 1===t?t:1-Math.pow(2,-10*t)},quadIn:function(t){return t*t},quadInOut:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},quadOut:function(t){return-t*(t-2)},quartIn:function(t){return Math.pow(t,4)},quartInOut:function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1},quartOut:function(t){return Math.pow(t-1,3)*(1-t)+1},quintIn:function(t){return t*t*t*t*t},quintInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},quintOut:function(t){return--t*t*t*t*t+1},sineIn:function(t){const e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e},sineInOut:function(t){return-.5*(Math.cos(Math.PI*t)-1)},sineOut:function(t){return Math.sin(t*Math.PI/2)},linear:t=>t}),K={$:t=>"string"==typeof t?document.querySelector(t):t,extend:(...t)=>Object.assign(...t),cumulativeOffset(t){let e=0,n=0;do{e+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:e,left:n}},directScroll:t=>t&&t!==document&&t!==document.body,scrollTop(t,e){let n=void 0!==e;return this.directScroll(t)?n?t.scrollTop=e:t.scrollTop:n?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,e){let n=void 0!==e;return this.directScroll(t)?n?t.scrollLeft=e:t.scrollLeft:n?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const Q={container:"body",duration:500,delay:0,offset:0,easing:"cubicInOut",onStart:t,onDone:t,onAborting:t,scrollX:!1,scrollY:!0},tt=t=>{let{offset:e,duration:n,delay:r,easing:o,x:l=0,y:c=0,scrollX:s,scrollY:i,onStart:m,onDone:h,container:g,onAborting:p,element:b}=t;"string"==typeof o&&(o=J[o]),"function"==typeof e&&(e=e());var v=K.cumulativeOffset(g),w=b?K.cumulativeOffset(b):{top:c,left:l},$=K.scrollLeft(g),y=K.scrollTop(g),k=w.left-v.left+e,x=w.top-v.top+e,T=k-$,M=x-y;let O=!0,I=!1,j=a()+r,D=j+n;function U(t){t||(I=!0,m(b,{x:l,y:c}))}function A(t){!function(t,e,n){s&&K.scrollLeft(t,n),i&&K.scrollTop(t,e)}(g,y+M*t,$+T*t)}function C(){O=!1}return function(t){let e;0===f.size&&u(d),new Promise(n=>{f.add(e={c:t,f:n})})}(t=>{if(!I&&t>=j&&U(!1),I&&t>=D&&(A(1),C(),h(b,{x:l,y:c})),!O)return p(b,{x:l,y:c}),!1;if(I){A(0+1*o((t-j)/n))}return!0}),U(r),A(0),C},et=t=>tt((t=>{let e=K.extend({},Q,t);return e.container=K.$(e.container),e.element=K.$(e.element),e})(t));const nt=new Intl.DateTimeFormat([],{weekday:"short",month:"short",day:"numeric"}).format,rt=new Intl.DateTimeFormat([],{hour12:!1,hour:"2-digit",minute:"2-digit"}).format,ot=new Intl.DateTimeFormat([],{hour:"2-digit",minute:"2-digit",weekday:"short",month:"short",day:"numeric",timeZoneName:"short"}).format,lt="Can Everyone See My Screen?",ct=[{startDate:new Date(Date.UTC(2020,4,29,17,0,0)),endDate:new Date(Date.UTC(2020,4,29,19,30,0)),tracks:[{name:"Sonos",zoomUrl:null,desc:"sonification, performance",color:"rgb(139,0,139)"},{name:"Commixt",zoomUrl:null,desc:"human relationships with technology, digital identities",color:"rgb(178,76,101)"},{name:"Terra",zoomUrl:null,desc:"of this world, ecology",color:"rgb(191,113,130)"},{name:"Locus",zoomUrl:null,desc:"expanded space/time/digital worlds",color:"rgb(217,131,150)"},{name:"Opt",zoomUrl:null,desc:"Agency and choice",color:"rgb(145, 19, 43)"},{name:"Proximity",zoomUrl:null,desc:"togetherness and isolation",color:"rgb(78,8,52)"}]},{startDate:new Date(Date.UTC(2020,4,30,13,0,0)),endDate:new Date(Date.UTC(2020,4,30,15,30,0)),tracks:[{name:"Interactive",zoomUrl:null,desc:"Require and respond to human participation",color:"rgb(116,89,116)"},{name:"Sonic Art",zoomUrl:null,desc:"Audio or audiovisual",color:"rgb(75,37,109)"},{name:"3D & VR",slug:"vr-3d",zoomUrl:null,desc:"Three-dimensional visuals and game design",color:"rgb(153,150,165)",blackText:!0},{shortName:"Data vis & Info Art",name:"Data visualization & Information Art",zoomUrl:null,desc:"Graphical representations of data, artistic interpretations of information",color:"rgb(38,55,85)"},{name:"Games & Physical computing",zoomUrl:null,desc:"Electronic systems that sense and respond to external stimuli",color:"rgb(138,43,226)"}]}],st=[],it=new Map;let at=0;ct.forEach((t,e)=>{t.id=e,t.tracks.forEach((e,n)=>{e.id=at++,e.day=t,e.slug=e.name.toLowerCase().replace(/[^a-z]+/g," ").trim().replace(/ /g,"-"),st.push(e),it.set(e.slug,e),e.color||(e.color=colors[n])})});const ut=[];function ft(t,e){return{subscribe:dt(t,e).subscribe}}function dt(e,n=t){let r;const o=[];function c(t){if(l(e,t)&&(e=t,r)){const t=!ut.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ut.push(n,e)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(l,s=t){const i=[l,s];return o.push(i),1===o.length&&(r=n(c)||t),l(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}var mt={},ht={};function gt(t){return new Function("d","return {"+t.map((function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function pt(t){var e=Object.create(null),n=[];return t.forEach((function(t){for(var r in t)r in e||n.push(e[r]=r)})),n}function bt(t,e){var n=t+"",r=n.length;return r<e?new Array(e-r+1).join(0)+n:n}function vt(t){var e,n=t.getUTCHours(),r=t.getUTCMinutes(),o=t.getUTCSeconds(),l=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((e=t.getUTCFullYear())<0?"-"+bt(-e,6):e>9999?"+"+bt(e,6):bt(e,4))+"-"+bt(t.getUTCMonth()+1,2)+"-"+bt(t.getUTCDate(),2)+(l?"T"+bt(n,2)+":"+bt(r,2)+":"+bt(o,2)+"."+bt(l,3)+"Z":o?"T"+bt(n,2)+":"+bt(r,2)+":"+bt(o,2)+"Z":r||n?"T"+bt(n,2)+":"+bt(r,2)+"Z":"")}var wt=function(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function r(t,e){var r,o=[],l=t.length,c=0,s=0,i=l<=0,a=!1;function u(){if(i)return ht;if(a)return a=!1,mt;var e,r,o=c;if(34===t.charCodeAt(o)){for(;c++<l&&34!==t.charCodeAt(c)||34===t.charCodeAt(++c););return(e=c)>=l?i=!0:10===(r=t.charCodeAt(c++))?a=!0:13===r&&(a=!0,10===t.charCodeAt(c)&&++c),t.slice(o+1,e-1).replace(/""/g,'"')}for(;c<l;){if(10===(r=t.charCodeAt(e=c++)))a=!0;else if(13===r)a=!0,10===t.charCodeAt(c)&&++c;else if(r!==n)continue;return t.slice(o,e)}return i=!0,t.slice(o,l)}for(10===t.charCodeAt(l-1)&&--l,13===t.charCodeAt(l-1)&&--l;(r=u())!==ht;){for(var f=[];r!==mt&&r!==ht;)f.push(r),r=u();e&&null==(f=e(f,s++))||o.push(f)}return o}function o(e,n){return e.map((function(e){return n.map((function(t){return c(e[t])})).join(t)}))}function l(e){return e.map(c).join(t)}function c(t){return null==t?"":t instanceof Date?vt(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,o,l=r(t,(function(t,r){if(n)return n(t,r-1);o=t,n=e?function(t,e){var n=gt(t);return function(r,o){return e(n(r),o,t)}}(t,e):gt(t)}));return l.columns=o||[],l},parseRows:r,format:function(e,n){return null==n&&(n=pt(e)),[n.map(c).join(t)].concat(o(e,n)).join("\n")},formatBody:function(t,e){return null==e&&(e=pt(t)),o(t,e).join("\n")},formatRows:function(t){return t.map(l).join("\n")},formatRow:l,formatValue:c}}(",").parse;const $t=dt(st[0].slug),yt=function(e,n,l){const s=!Array.isArray(e),i=s?[e]:e,a=n.length<2;return ft(l,e=>{let l=!1;const u=[];let f=0,d=t;const m=()=>{if(f)return;d();const r=n(s?u[0]:u,e);a?e(r):d=o(r)?r:t},h=i.map((t,e)=>c(t,t=>{u[e]=t,f&=~(1<<e),l&&m()},()=>{f|=1<<e}));return l=!0,m(),function(){r(h),d()}})}($t,(t,e)=>{e(it.get(t).day)}),kt=dt([]),xt=dt([]);function Tt(t){const e=ct[t.day-1].startDate,[n,r]=t.startUTC.split(":");return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),n,r,0))}const Mt=ft(new Date,t=>{const e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)});function Ot(t,e,n){const r=t.slice();return r[3]=e[n],r}function It(e){let n,r,o,l,c,s,i,a=e[1](e[3].startDate)+"",u=e[1](e[3].endDate)+"",f=e[2](e[3].endDate)+"";return{c(){n=b("br"),r=w(),o=v(a),l=v(" - "),c=v(u),s=w(),i=v(f)},m(t,e){h(t,n,e),h(t,r,e),h(t,o,e),h(t,l,e),h(t,c,e),h(t,s,e),h(t,i,e)},p:t,d(t){t&&g(n),t&&g(r),t&&g(o),t&&g(l),t&&g(c),t&&g(s),t&&g(i)}}}function jt(e){let n,r,o,l,c,s,i,a,u,f=ct,d=[];for(let t=0;t<f.length;t+=1)d[t]=It(Ot(e,f,t));return{c(){n=b("section"),r=b("div"),o=b("div"),l=b("h1"),l.textContent=""+lt,c=w(),s=b("h2"),i=v("Work in Progress Show - Goldsmiths\n        ");for(let t=0;t<d.length;t+=1)d[t].c();y(l,"class","title svelte-1viojpa"),y(s,"class","subtitle svelte-1viojpa"),y(o,"class","container"),y(r,"class","hero-body"),y(n,"class",a="hero "+e[0]+"-bg")},m(t,e,a){h(t,n,e),m(n,r),m(r,o),m(o,l),m(o,c),m(o,s),m(s,i);for(let t=0;t<d.length;t+=1)d[t].m(s,null);a&&u(),u=$(n,"click",Dt)},p(t,[e]){if(6&e){let n;for(f=ct,n=0;n<f.length;n+=1){const r=Ot(t,f,n);d[n]?d[n].p(r,e):(d[n]=It(r),d[n].c(),d[n].m(s,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=f.length}1&e&&a!==(a="hero "+t[0]+"-bg")&&y(n,"class",a)},i:t,o:t,d(t){t&&g(n),p(d,t),u()}}}function Dt(){history.pushState("",document.title,window.location.pathname)}function Ut(t,e,n){let r;s(t,$t,t=>n(0,r=t));const o=new Intl.DateTimeFormat([],{hour12:!1,hour:"2-digit",minute:"2-digit"}).format,l=new Intl.DateTimeFormat([],{weekday:"short",day:"numeric",month:"short",year:"numeric",timeZoneName:"short"}).format;return[r,o,l]}class At extends V{constructor(t){super(),W(this,t,Ut,jt,l,{})}}function Ct(t,e,n){const r=t.slice();return r[6]=e[n],r}function St(t,e,n){const r=t.slice();return r[9]=e[n],r}function zt(t){let e,n,r,o,l,c=nt(t[9].startDate)+"";function s(...e){return t[4](t[9],...e)}return{c(){e=b("a"),n=v(c),r=w(),y(e,"href","#schedule"),y(e,"class",o="item item-day "+(t[9]===t[2]?t[1]+"-bg":"")+" svelte-iieexo"),x(e,"is-active",t[9]===t[2])},m(t,o,c){h(t,e,o),m(e,n),m(e,r),c&&l(),l=$(e,"click",s)},p(n,r){t=n,6&r&&o!==(o="item item-day "+(t[9]===t[2]?t[1]+"-bg":"")+" svelte-iieexo")&&y(e,"class",o),6&r&&x(e,"is-active",t[9]===t[2])},d(t){t&&g(e),l()}}}function _t(t){let e,n,r,o,l,c=(t[6].shortName||t[6].name)+"";function s(...e){return t[5](t[6],...e)}return{c(){e=b("a"),n=v(c),r=w(),y(e,"href","#schedule"),y(e,"class",o="item item-track "+t[6].slug+"-bd "+t[6].slug+"-"+(t[6].slug===t[1]?"bg":"")+" svelte-iieexo"),x(e,"is-active",t[6].slug===t[1])},m(t,o,c){h(t,e,o),m(e,n),m(e,r),c&&l(),l=$(e,"click",s)},p(r,l){t=r,1&l&&c!==(c=(t[6].shortName||t[6].name)+"")&&k(n,c),3&l&&o!==(o="item item-track "+t[6].slug+"-bd "+t[6].slug+"-"+(t[6].slug===t[1]?"bg":"")+" svelte-iieexo")&&y(e,"class",o),3&l&&x(e,"is-active",t[6].slug===t[1])},d(t){t&&g(e),l()}}}function Et(e){let n,r,o,l,c,s=ct,i=[];for(let t=0;t<s.length;t+=1)i[t]=zt(St(e,s,t));let a=e[0],u=[];for(let t=0;t<a.length;t+=1)u[t]=_t(Ct(e,a,t));return{c(){n=b("div"),r=b("div"),o=b("div");for(let t=0;t<i.length;t+=1)i[t].c();l=w(),c=b("div");for(let t=0;t<u.length;t+=1)u[t].c();y(o,"class","row days svelte-iieexo"),y(c,"class","row tracks svelte-iieexo"),y(r,"class","container"),y(n,"class","track-nav svelte-iieexo")},m(t,e){h(t,n,e),m(n,r),m(r,o);for(let t=0;t<i.length;t+=1)i[t].m(o,null);m(r,l),m(r,c);for(let t=0;t<u.length;t+=1)u[t].m(c,null)},p(t,[e]){if(6&e){let n;for(s=ct,n=0;n<s.length;n+=1){const r=St(t,s,n);i[n]?i[n].p(r,e):(i[n]=zt(r),i[n].c(),i[n].m(o,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=s.length}if(3&e){let n;for(a=t[0],n=0;n<a.length;n+=1){const r=Ct(t,a,n);u[n]?u[n].p(r,e):(u[n]=_t(r),u[n].c(),u[n].m(c,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=a.length}},i:t,o:t,d(t){t&&g(n),p(i,t),p(u,t)}}}function Nt(t,e,n){let r,o;s(t,$t,t=>n(1,r=t)),s(t,yt,t=>n(2,o=t));let l=ct[0].tracks;let c;return t.$$.update=()=>{2&t.$$.dirty&&n(0,c=it.get(r).day.tracks)},[c,r,o,l,t=>{$t.set(t.tracks[0].slug)},t=>$t.set(t.slug)]}class Pt extends V{constructor(t){super(),W(this,t,Nt,Et,l,{})}}function qt(e){let n;return{c(){n=b("div"),n.innerHTML='<p>\n    Work in Progress show for Goldsmiths University Computational Arts MA/MFA\n    and Independent Games and Playable Experience Design MA.\n  </p> \n\n  <p>\n    For the very first time all performances, artwork, and games will be\n    showcased entirely online via\n    <a href="https://zoom.us/" target="_blank">Zoom</a>.\n  </p> \n\n  <p>\n    You can RSVP to our\n    <a href="https://www.facebook.com/events/1942782225857241/" target="_blank">\n      Facebook event</a>, follow us on\n    <a href="https://www.instagram.com/goldsmithscomparts/" target="_blank">\n      Instagram @goldsmithscomparts\n    </a>\n    and\n    <a href="https://twitter.com/goldcomparts/" target="_blank">\n      Twitter @goldcomparts</a>.\n  </p>',y(n,"class","content")},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class Lt extends V{constructor(t){super(),W(this,t,null,qt,l,{})}}var Ft="object"==typeof global&&global&&global.Object===Object&&global,Zt="object"==typeof self&&self&&self.Object===Object&&self,Rt=(Ft||Zt||Function("return this")()).Symbol,Gt=Object.prototype,Yt=Gt.hasOwnProperty,Bt=Gt.toString,Ht=Rt?Rt.toStringTag:void 0;var Wt=Object.prototype.toString;var Vt=Rt?Rt.toStringTag:void 0;function Xt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Vt&&Vt in Object(t)?function(t){var e=Yt.call(t,Ht),n=t[Ht];try{t[Ht]=void 0;var r=!0}catch(t){}var o=Bt.call(t);return r&&(e?t[Ht]=n:delete t[Ht]),o}(t):function(t){return Wt.call(t)}(t)}function Jt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var Kt=/^\s+|\s+$/g,Qt=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,ne=parseInt;function re(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==Xt(t)}(t))return NaN;if(Jt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Jt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Kt,"");var n=te.test(t);return n||ee.test(t)?ne(t.slice(2),n?2:8):Qt.test(t)?NaN:+t}function oe(t){var e=function(t){return t?(t=re(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),n=e%1;return e==e?n?e-n:e:0}var le=/^(?:0|[1-9]\d*)$/;function ce(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){if(!Jt(t))return!1;var e=Xt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}(t)}function se(t,e,n){if(!Jt(n))return!1;var r=typeof e;return!!("number"==r?ce(n)&&function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&le.test(t))&&t>-1&&t%1==0&&t<e}(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}function ie(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var l=Array(o);++r<o;)l[r]=t[r+e];return l}var ae=Math.ceil,ue=Math.max;function fe(t){let e,n,r,o,l;return{c(){e=b("div"),r=w(),o=b("a"),l=v(t[0]),n=new T(t[1],r),y(o,"href",t[2]),y(o,"target","_blank"),y(e,"class","social-profile")},m(t,c){h(t,e,c),n.m(e),m(e,r),m(e,o),m(o,l)},p(t,e){2&e&&n.p(t[1]),1&e&&k(l,t[0]),4&e&&y(o,"href",t[2])},d(t){t&&g(e)}}}function de(e){let n,r=e[0]&&fe(e);return{c(){r&&r.c(),n=v("")},m(t,e){r&&r.m(t,e),h(t,n,e)},p(t,[e]){t[0]?r?r.p(t,e):(r=fe(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&g(n)}}}function me(t,e,n){let r,o,{kind:l}=e,{value:c}=e;switch(l){case"website":r="",o=c;break;case"instagram":r='<span class="icon"><i class="fab fa-instagram"></i></span>',o="https://instagram.com/"+c;break;case"twitter":r='<span class="icon"><i class="fab fa-twitter"></i></span>',o="https://twitter.com/"+c;break;case"facebook":r='<span class="icon"><i class="fab fa-facebook"></i></span>',o="https://www.facebook.com/"+c;break;default:throw new Error("Unknown social kind "+l)}return t.$set=t=>{"kind"in t&&n(3,l=t.kind),"value"in t&&n(0,c=t.value)},[c,r,o,l]}class he extends V{constructor(t){super(),W(this,t,me,de,l,{kind:3,value:0})}}function ge(t,e,n){const r=t.slice();return r[2]=e[n],r}function pe(t){let e,n,r,o,l,c,s,i,a,u,f,d,p,x,T=t[2].track.name+"",M=ot(t[2].startTime)+"";function O(...e){return t[1](t[2],...e)}return{c(){e=b("li"),n=b("div"),r=v("Track:\n              "),o=b("a"),l=v(T),s=w(),i=b("div"),a=v("Start time:\n              "),u=b("time"),f=v(M),p=w(),y(o,"href","#schedule"),y(o,"class",c="track "+t[2].track.slug+"-bg svelte-f6jxb0"),y(u,"datetime",d=t[2].startTime.toISOString()),y(u,"class","svelte-f6jxb0")},m(t,c,d){h(t,e,c),m(e,n),m(n,r),m(n,o),m(o,l),m(e,s),m(e,i),m(i,a),m(i,u),m(u,f),m(e,p),d&&x(),x=$(o,"click",O)},p(e,n){t=e,1&n&&T!==(T=t[2].track.name+"")&&k(l,T),1&n&&c!==(c="track "+t[2].track.slug+"-bg svelte-f6jxb0")&&y(o,"class",c),1&n&&M!==(M=ot(t[2].startTime)+"")&&k(f,M),1&n&&d!==(d=t[2].startTime.toISOString())&&y(u,"datetime",d)},d(t){t&&g(e),x()}}}function be(t){let e,n,r,o;return{c(){e=b("div"),n=b("a"),r=v("More info"),y(n,"href",o=t[0].url),y(n,"target","_blank")},m(t,o){h(t,e,o),m(e,n),m(n,r)},p(t,e){1&e&&o!==(o=t[0].url)&&y(n,"href",o)},d(t){t&&g(e)}}}function ve(t){let e,n,r,o,l,c,s,i,a,u,f,d,$,x,T,M,O,I,j,D,U,A,C,S,z,_,E,N,P,q,L,F,H,W,V=t[0].title+"",X=t[0].form+"",J=(t[0].desc||"No description provided")+"",K=t[0].artist+"",Q=t[0].performances,tt=[];for(let e=0;e<Q.length;e+=1)tt[e]=pe(ge(t,Q,e));let et=t[0].url&&be(t);const nt=new he({props:{kind:"instagram",value:t[0].instagram}}),rt=new he({props:{kind:"twitter",value:t[0].twitter}}),ot=new he({props:{kind:"facebook",value:t[0].facebook}}),lt=new he({props:{kind:"website",value:t[0].website}});return{c(){e=b("div"),n=b("div"),r=b("div"),l=w(),c=b("figure"),s=b("img"),u=w(),f=b("div"),d=b("div"),$=b("h4"),x=v(V),T=w(),M=b("div"),O=b("span"),I=v(X),j=w(),D=b("ul");for(let t=0;t<tt.length;t+=1)tt[t].c();U=w(),A=b("div"),C=v(J),S=w(),et&&et.c(),z=w(),_=b("div"),E=b("div"),N=b("p"),P=v(K),q=w(),G(nt.$$.fragment),L=w(),G(rt.$$.fragment),F=w(),G(ot.$$.fragment),H=w(),G(lt.$$.fragment),y(r,"class","anchor-link"),y(r,"id",o=t[0].slug),s.src!==(i=t[0].thumbUrl)&&y(s,"src",i),y(s,"alt",a=t[0].title),y(s,"loading","lazy"),y(s,"class","svelte-f6jxb0"),y(c,"class","image is-2by1"),y(n,"class","card-image"),y($,"class","title is-4"),y(O,"class","tag"),y(d,"class","content"),y(N,"class","title is-5"),y(E,"class","media-content"),y(_,"class","media"),y(f,"class","card-content"),y(e,"class","card svelte-f6jxb0")},m(t,o){h(t,e,o),m(e,n),m(n,r),m(n,l),m(n,c),m(c,s),m(e,u),m(e,f),m(f,d),m(d,$),m($,x),m(d,T),m(d,M),m(M,O),m(O,I),m(d,j),m(d,D);for(let t=0;t<tt.length;t+=1)tt[t].m(D,null);m(d,U),m(d,A),m(A,C),m(d,S),et&&et.m(d,null),m(f,z),m(f,_),m(_,E),m(E,N),m(N,P),m(E,q),Y(nt,E,null),m(E,L),Y(rt,E,null),m(E,F),Y(ot,E,null),m(E,H),Y(lt,E,null),W=!0},p(t,[e]){if((!W||1&e&&o!==(o=t[0].slug))&&y(r,"id",o),(!W||1&e&&s.src!==(i=t[0].thumbUrl))&&y(s,"src",i),(!W||1&e&&a!==(a=t[0].title))&&y(s,"alt",a),(!W||1&e)&&V!==(V=t[0].title+"")&&k(x,V),(!W||1&e)&&X!==(X=t[0].form+"")&&k(I,X),1&e){let n;for(Q=t[0].performances,n=0;n<Q.length;n+=1){const r=ge(t,Q,n);tt[n]?tt[n].p(r,e):(tt[n]=pe(r),tt[n].c(),tt[n].m(D,null))}for(;n<tt.length;n+=1)tt[n].d(1);tt.length=Q.length}(!W||1&e)&&J!==(J=(t[0].desc||"No description provided")+"")&&k(C,J),t[0].url?et?et.p(t,e):(et=be(t),et.c(),et.m(d,null)):et&&(et.d(1),et=null),(!W||1&e)&&K!==(K=t[0].artist+"")&&k(P,K);const n={};1&e&&(n.value=t[0].instagram),nt.$set(n);const l={};1&e&&(l.value=t[0].twitter),rt.$set(l);const c={};1&e&&(c.value=t[0].facebook),ot.$set(c);const u={};1&e&&(u.value=t[0].website),lt.$set(u)},i(t){W||(Z(nt.$$.fragment,t),Z(rt.$$.fragment,t),Z(ot.$$.fragment,t),Z(lt.$$.fragment,t),W=!0)},o(t){R(nt.$$.fragment,t),R(rt.$$.fragment,t),R(ot.$$.fragment,t),R(lt.$$.fragment,t),W=!1},d(t){t&&g(e),p(tt,t),et&&et.d(),B(nt),B(rt),B(ot),B(lt)}}}function we(t,e,n){let{work:r}=e;return t.$set=t=>{"work"in t&&n(0,r=t.work)},[r,t=>$t.set(t.track.slug)]}class $e extends V{constructor(t){super(),W(this,t,we,ve,l,{work:0})}}function ye(t,e,n){const r=t.slice();return r[6]=e[n],r}function ke(t,e,n){const r=t.slice();return r[9]=e[n],r}function xe(t,e,n){const r=t.slice();return r[3]=e[n],r}function Te(t){let e,n;const r=new $e({props:{work:t[9]}});return{c(){e=b("div"),G(r.$$.fragment),y(e,"class","column")},m(t,o){h(t,e,o),Y(r,e,null),n=!0},p(t,e){const n={};1&e&&(n.work=t[9]),r.$set(n)},i(t){n||(Z(r.$$.fragment,t),n=!0)},o(t){R(r.$$.fragment,t),n=!1},d(t){t&&g(e),B(r)}}}function Me(t){let e;return{c(){e=b("div"),y(e,"class","column")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Oe(t){let e,n,r,o,l=t[3],c=[];for(let e=0;e<l.length;e+=1)c[e]=Te(ke(t,l,e));const s=t=>R(c[t],1,1,()=>{c[t]=null});let i=new Array(je-t[3].length),a=[];for(let e=0;e<i.length;e+=1)a[e]=Me(ye(t,i,e));return{c(){e=b("div");for(let t=0;t<c.length;t+=1)c[t].c();n=w();for(let t=0;t<a.length;t+=1)a[t].c();r=w(),y(e,"class","columns")},m(t,l){h(t,e,l);for(let t=0;t<c.length;t+=1)c[t].m(e,null);m(e,n);for(let t=0;t<a.length;t+=1)a[t].m(e,null);m(e,r),o=!0},p(t,o){if(1&o){let r;for(l=t[3],r=0;r<l.length;r+=1){const s=ke(t,l,r);c[r]?(c[r].p(s,o),Z(c[r],1)):(c[r]=Te(s),c[r].c(),Z(c[r],1),c[r].m(e,n))}for(L(),r=l.length;r<c.length;r+=1)s(r);F()}if(1&o){const n=i.length;let o;for(i=new Array(je-t[3].length),o=n;o<i.length;o+=1){ye(t,i,o);a[o]||(a[o]=Me(),a[o].c(),a[o].m(e,r))}for(o=i.length;o<n;o+=1)a[o].d(1);a.length=i.length}},i(t){if(!o){for(let t=0;t<l.length;t+=1)Z(c[t]);o=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)R(c[t]);o=!1},d(t){t&&g(e),p(c,t),p(a,t)}}}function Ie(t){let e,n,r,o,l,c,s=t[0],i=[];for(let e=0;e<s.length;e+=1)i[e]=Oe(xe(t,s,e));const a=t=>R(i[t],1,1,()=>{i[t]=null});return{c(){e=b("div"),n=b("h2"),n.textContent="All Works",r=w(),o=b("p"),o.textContent="In alphabetical order by title",l=w();for(let t=0;t<i.length;t+=1)i[t].c();y(n,"class","title is-2"),y(o,"class","subtitle is-7"),y(e,"class","works svelte-ozbg7q")},m(t,s){h(t,e,s),m(e,n),m(e,r),m(e,o),m(e,l);for(let t=0;t<i.length;t+=1)i[t].m(e,null);c=!0},p(t,[n]){if(1&n){let r;for(s=t[0],r=0;r<s.length;r+=1){const o=xe(t,s,r);i[r]?(i[r].p(o,n),Z(i[r],1)):(i[r]=Oe(o),i[r].c(),Z(i[r],1),i[r].m(e,null))}for(L(),r=s.length;r<i.length;r+=1)a(r);F()}},i(t){if(!c){for(let t=0;t<s.length;t+=1)Z(i[t]);c=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)R(i[t]);c=!1},d(t){t&&g(e),p(i,t)}}}const je=3;function De(t,e,n){let r,o,l;return s(t,kt,t=>n(2,r=t)),t.$$.update=()=>{if(6&t.$$.dirty&&r.length){n(1,o=r.slice().sort((t,e)=>function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}(t.slug,e.slug)));const t=o.map(t=>t.slug).indexOf("introduction-to-computational-arts-ma");o.splice(0,0,o.splice(t,1)[0])}2&t.$$.dirty&&n(0,l=function(t,e,n){e=(n?se(t,e,n):void 0===e)?1:ue(oe(e),0);var r=null==t?0:t.length;if(!r||e<1)return[];for(var o=0,l=0,c=Array(ae(r/e));o<r;)c[l++]=ie(t,o,o+=e);return c}(o,je))},[l]}class Ue extends V{constructor(t){super(),W(this,t,De,Ie,l,{})}}function Ae(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Ce(t,e,n){const r=t.slice();return r[0]=e[n],r[2]=n,r}function Se(e){let n;return{c(){n=v("Zoom link will appear here shortly before event")},m(t,e){h(t,n,e)},p:t,d(t){t&&g(n)}}}function ze(e){let n,r,o,l=e[3].zoomUrl+"";return{c(){n=b("a"),r=v(l),y(n,"href",o=e[3].zoomUrl)},m(t,e){h(t,n,e),m(n,r)},p:t,d(t){t&&g(n)}}}function _e(e){let n,r,o,l,c,s,i,a,u,f,d,p,$,k=e[3].name+"",x=e[3].desc&&function(e){let n,r,o,l=e[3].desc+"";return{c(){n=b("br"),r=w(),o=v(l)},m(t,e){h(t,n,e),h(t,r,e),h(t,o,e)},p:t,d(t){t&&g(n),t&&g(r),t&&g(o)}}}(e);let T=function(t,e){return t[3].zoomUrl?ze:Se}(e)(e);return{c(){n=b("div"),r=b("div"),o=b("div"),c=w(),s=b("p"),i=b("b"),a=v(k),u=w(),x&&x.c(),f=w(),d=b("br"),p=w(),T.c(),y(o,"class","anchor-link"),y(o,"id",l=e[3].slug),y(r,"class","content"),y(n,"class",$="track "+e[3].slug+"-bd svelte-d8yvcc")},m(t,e){h(t,n,e),m(n,r),m(r,o),m(r,c),m(r,s),m(s,i),m(i,a),m(s,u),x&&x.m(s,null),m(s,f),m(s,d),m(s,p),T.m(s,null)},p(t,e){t[3].desc&&x.p(t,e),T.p(t,e)},d(t){t&&g(n),x&&x.d(),T.d()}}}function Ee(t){let e,n,r,o,l,c,s,i,a=t[2]+1+"",u=nt(t[0].startDate)+"",f=t[0].tracks,d=[];for(let e=0;e<f.length;e+=1)d[e]=_e(Ae(t,f,e));return{c(){e=b("div"),n=b("h3"),r=v("Day "),o=v(a),l=v(" - "),c=v(u),s=w();for(let t=0;t<d.length;t+=1)d[t].c();i=w(),y(n,"class","title is-4"),y(e,"class","column")},m(t,a){h(t,e,a),m(e,n),m(n,r),m(n,o),m(n,l),m(n,c),m(e,s);for(let t=0;t<d.length;t+=1)d[t].m(e,null);m(e,i)},p(t,n){if(0&n){let r;for(f=t[0].tracks,r=0;r<f.length;r+=1){const o=Ae(t,f,r);d[r]?d[r].p(o,n):(d[r]=_e(o),d[r].c(),d[r].m(e,i))}for(;r<d.length;r+=1)d[r].d(1);d.length=f.length}},d(t){t&&g(e),p(d,t)}}}function Ne(e){let n,r,o,l,c,s,i=ct,a=[];for(let t=0;t<i.length;t+=1)a[t]=Ee(Ce(e,i,t));return{c(){n=b("div"),r=b("h2"),r.textContent="Tracks",o=w(),l=b("div"),l.innerHTML="<p>\n      Taking place over the course of two days, online audiences will be able to\n      dip in and out of five channels with their own Zoom meeting link. On the\n      Friday, discover the works by themes and on Saturday by their technical\n      aspect.\n    </p>",c=w(),s=b("div");for(let t=0;t<a.length;t+=1)a[t].c();y(r,"class","title is-2"),y(l,"class","content"),y(s,"class","columns"),y(n,"class","tracks")},m(t,e){h(t,n,e),m(n,r),m(n,o),m(n,l),m(n,c),m(n,s);for(let t=0;t<a.length;t+=1)a[t].m(s,null)},p(t,[e]){if(0&e){let n;for(i=ct,n=0;n<i.length;n+=1){const r=Ce(t,i,n);a[n]?a[n].p(r,e):(a[n]=Ee(r),a[n].c(),a[n].m(s,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=i.length}},i:t,o:t,d(t){t&&g(n),p(a,t)}}}class Pe extends V{constructor(t){super(),W(this,t,null,Ne,l,{})}}function qe(t,e,n){const r=t.slice();return r[4]=e[n],r[6]=n,r}function Le(e){let n;return{c(){n=v("Zoom link will appear here shortly before event")},m(t,e){h(t,n,e)},p:t,d(t){t&&g(n)}}}function Fe(t){let e,n,r,o=it.get(t[1]).zoomUrl+"";return{c(){e=b("a"),n=v(o),y(e,"href",r=it.get(t[1]).zoomUrl),y(e,"class","svelte-1rhbu2x")},m(t,r){h(t,e,r),m(e,n)},p(t,l){2&l&&o!==(o=it.get(t[1]).zoomUrl+"")&&k(n,o),2&l&&r!==(r=it.get(t[1]).zoomUrl)&&y(e,"href",r)},d(t){t&&g(e)}}}function Ze(t){let e,n,r,o,l,c,s,i,a,u,f,d,p=rt(t[4].startTime)+"",$=t[4].work.title+"",T=t[4].work.artist+"";return{c(){e=b("a"),n=b("time"),r=v(p),o=w(),l=b("span"),c=v($),s=w(),i=b("span"),a=v(" —  "),u=v(T),f=w(),y(n,"class","svelte-1rhbu2x"),y(l,"class","project-title svelte-1rhbu2x"),y(i,"class","artist is-hidden-mobile svelte-1rhbu2x"),y(e,"href",d="#"+t[4].work.slug),y(e,"class","panel-block performance svelte-1rhbu2x"),x(e,"is-past",(t[4],!1)),x(e,"is-active",(t[4],!1))},m(t,d){h(t,e,d),m(e,n),m(n,r),m(e,o),m(e,l),m(l,c),m(e,s),m(e,i),m(i,a),m(i,u),m(e,f)},p(t,n){1&n&&p!==(p=rt(t[4].startTime)+"")&&k(r,p),1&n&&$!==($=t[4].work.title+"")&&k(c,$),1&n&&T!==(T=t[4].work.artist+"")&&k(u,T),1&n&&d!==(d="#"+t[4].work.slug)&&y(e,"href",d),1&n&&x(e,"is-past",(t[4],!1)),1&n&&x(e,"is-active",(t[4],!1))},d(t){t&&g(e)}}}function Re(e){let n,r,o,l,c,s,i,a,u,f,d,$,x,T,M,O,I,j,D,U,A,C,S=ot(e[2])+"",z=it.get(e[1]).name+"";function _(t,e){return(null==U||2&e)&&(U=!!it.get(t[1]).zoomUrl),U?Fe:Le}let E=_(e,-1),N=E(e),P=e[0],q=[];for(let t=0;t<P.length;t+=1)q[t]=Ze(qe(e,P,t));return{c(){n=b("h2"),n.textContent="Schedules",r=w(),o=b("div"),l=b("p"),c=w(),s=b("p"),i=v("We aim to stick to the schedule below. All times are in your local timezone,\n    where the time is currently "),a=v(S),u=v("."),f=w(),d=b("div"),$=w(),x=b("nav"),T=b("p"),M=v(z),O=v(" Schedule\n    "),I=b("br"),j=w(),D=b("span"),N.c(),C=w();for(let t=0;t<q.length;t+=1)q[t].c();var t,m,h;y(n,"name","schedule"),y(n,"class","title is-2"),y(o,"class","content"),y(d,"class","anchor-link"),y(d,"id","schedule"),t="white-space",m="nowrap",D.style.setProperty(t,m,h?"important":""),y(T,"class",A="panel-heading "+e[1]+"-bg svelte-1rhbu2x"),y(x,"class","panel")},m(t,e){h(t,n,e),h(t,r,e),h(t,o,e),m(o,l),m(o,c),m(o,s),m(s,i),m(s,a),m(s,u),h(t,f,e),h(t,d,e),h(t,$,e),h(t,x,e),m(x,T),m(T,M),m(T,O),m(T,I),m(T,j),m(T,D),N.m(D,null),m(x,C);for(let t=0;t<q.length;t+=1)q[t].m(x,null)},p(t,[e]){if(4&e&&S!==(S=ot(t[2])+"")&&k(a,S),2&e&&z!==(z=it.get(t[1]).name+"")&&k(M,z),E===(E=_(t,e))&&N?N.p(t,e):(N.d(1),N=E(t),N&&(N.c(),N.m(D,null))),2&e&&A!==(A="panel-heading "+t[1]+"-bg svelte-1rhbu2x")&&y(T,"class",A),1&e){let n;for(P=t[0],n=0;n<P.length;n+=1){const r=qe(t,P,n);q[n]?q[n].p(r,e):(q[n]=Ze(r),q[n].c(),q[n].m(x,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=P.length}},i:t,o:t,d(t){t&&g(n),t&&g(r),t&&g(o),t&&g(f),t&&g(d),t&&g($),t&&g(x),N.d(),p(q,t)}}}function Ge(t,e,n){let r,o,l,c;return s(t,xt,t=>n(3,r=t)),s(t,$t,t=>n(1,o=t)),s(t,Mt,t=>n(2,l=t)),t.$$.update=()=>{10&t.$$.dirty&&n(0,c=r.filter(t=>t.track.slug===o))},[c,o,l]}class Ye extends V{constructor(t){super(),W(this,t,Ge,Re,l,{})}}function Be(t){let e,n,r,o,l,c,s,i,a,u,f;document.title=e=lt;const d=new At({}),p=new Pt({}),v=new Lt({}),$=new Pe({}),k=new Ye({}),x=new Ue({});return{c(){n=b("meta"),r=w(),G(d.$$.fragment),o=w(),G(p.$$.fragment),l=w(),c=b("section"),s=b("div"),G(v.$$.fragment),i=w(),G($.$$.fragment),a=w(),G(k.$$.fragment),u=w(),G(x.$$.fragment),y(n,"name","theme-color"),y(n,"content","#333333"),y(s,"class","container"),y(c,"class","section")},m(t,e){m(document.head,n),h(t,r,e),Y(d,t,e),h(t,o,e),Y(p,t,e),h(t,l,e),h(t,c,e),m(c,s),Y(v,s,null),m(s,i),Y($,s,null),m(s,a),Y(k,s,null),m(s,u),Y(x,s,null),f=!0},p(t,[n]){(!f||0&n)&&e!==(e=lt)&&(document.title=e)},i(t){f||(Z(d.$$.fragment,t),Z(p.$$.fragment,t),Z(v.$$.fragment,t),Z($.$$.fragment,t),Z(k.$$.fragment,t),Z(x.$$.fragment,t),f=!0)},o(t){R(d.$$.fragment,t),R(p.$$.fragment,t),R(v.$$.fragment,t),R($.$$.fragment,t),R(k.$$.fragment,t),R(x.$$.fragment,t),f=!1},d(t){g(n),t&&g(r),B(d,t),t&&g(o),B(p,t),t&&g(l),t&&g(c),B(v),B($),B(k),B(x)}}}function He(t){return fetch("data/works.csv").then(t=>t.text()).then(wt).then(t=>{const e=new Map,n=[];return t.forEach(t=>{let r;t.track=st[t.trackId],t.thumbUrl=t.imgur?`https://i.imgur.com/${t.imgur}.png`:"placeholder.png";const o={startTime:Tt(t),track:t.track};n.push(o),e.has(t.slug)?(r=e.get(t.slug),r.performances.push(o)):(r=t,r.performances=[o],e.set(r.slug,r)),o.work=r,delete r.track,delete r.startUTC}),kt.set(Array.from(e.values())),xt.set(n),t}).then(()=>{const t=window.location.hash;t&&et({element:t,delay:50,duration:0})}),[]}return new class extends V{constructor(t){super(),W(this,t,He,Be,l,{})}}({target:document.getElementById("app"),props:{}})}();
//# sourceMappingURL=bundle.js.map
