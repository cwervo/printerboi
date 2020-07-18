(function(){var h,k=this||self,l=function(a){return"string"==typeof a},m=function(a){return"number"==typeof a},aa=function(a,b){a=a.split(".");var c=k;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b},ba=function(){},n=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==
c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},q=function(a){return"array"==n(a)},ca=function(a){var b=n(a);return"array"==
b||"object"==b&&"number"==typeof a.length},r=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
da:ea;return t.apply(null,arguments)},u=function(a,b){function c(){}c.prototype=b.prototype;a.qa=b.prototype;a.prototype=new c;a.prototype.constructor=a};var fa=function(){this.W=void 0},ia=function(a){var b=[];ha(new fa,a,b);return b.join("")},ha=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(q(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],ha(a,a.W?a.W.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
ja(d,c),c.push(":"),ha(a,a.W?a.W.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":ja(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},ka={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},la=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g,
ja=function(a,b){b.push('"',a.replace(la,function(c){var d=ka[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ka[c]=d);return d}),'"')};var v=function(){this.ja="print-document";this.oa=0;this.Ia=!1},ma={hb:"print-document",ib:"print-file"};v.prototype.$a=function(a){this.ja=a;return this};v.prototype.bb=function(a){this.oa=a;return this};v.prototype.cb=function(a){this.Ia=a;return this};aa("cloudprint.Configuration",v);v.prototype.setMode=v.prototype.$a;v.prototype.setSelectedUser=v.prototype.bb;v.prototype.setShowPrintLocally=v.prototype.cb;aa("cloudprint.Configuration.Mode",ma);ma.PRINT_DOCUMENT="print-document";
ma.PRINT_FILE="print-file";var na=function(a,b,c,d){this.fb=a;this.eb=b;this.va=c;this.Qa=d||""};na.prototype.xa=function(){return this.va};var w=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(w,Error);w.prototype.name="CustomError";var oa;var pa=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");w.call(this,c+a[d])};u(pa,w);pa.prototype.name="AssertionError";
var qa=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new pa(""+e,f||[]);},x=function(a,b,c){a||qa("",null,b,Array.prototype.slice.call(arguments,2))},ra=function(a,b){throw new pa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},sa=function(a,b,c){l(a)||qa("Expected string but got %s: %s.",[n(a),a],b,Array.prototype.slice.call(arguments,2))};var ta=Array.prototype.indexOf?function(a,b){x(null!=a.length);return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ua=Array.prototype.forEach?function(a,b){x(null!=a.length);Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},va=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=
0;d<b;d++)c[d]=a[d];return c}return[]};var wa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ea=function(a,b){if(b)a=a.replace(xa,"&amp;").replace(ya,"&lt;").replace(za,"&gt;").replace(Aa,"&quot;").replace(Ba,"&#39;").replace(Ca,"&#0;");else{if(!Da.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Aa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ba,
"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ca,"&#0;"))}return a},xa=/&/g,ya=/</g,za=/>/g,Aa=/"/g,Ba=/'/g,Ca=/\x00/g,Da=/[\x00&<>"']/,Ha=function(a){var b=0,c=wa(String(Fa)).split(".");a=wa(String(a)).split(".");for(var d=Math.max(c.length,a.length),e=0;0==b&&e<d;e++){var f=c[e]||"",g=a[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;b=Ga(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||
Ga(0==f[2].length,0==g[2].length)||Ga(f[2],g[2]);f=f[3];g=g[3]}while(0==b)}return b},Ga=function(a,b){return a<b?-1:a>b?1:0};var y;a:{var Ia=k.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){y=Ja;break a}}y=""}var z=function(a){return-1!=y.indexOf(a)};var Ka=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},La=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Na=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ma.length;f++)c=Ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var A=function(a,b){this.pa=a===Oa&&b||"";this.Ma=Pa};A.prototype.J=!0;A.prototype.C=function(){return this.pa};A.prototype.toString=function(){return"Const{"+this.pa+"}"};var Qa=function(a){if(a instanceof A&&a.constructor===A&&a.Ma===Pa)return a.pa;ra("expected object of type Const, got '"+a+"'");return"type_error:Const"},Pa={},Oa={};var B=function(){this.la=""};B.prototype.J=!0;B.prototype.C=function(){return this.la.toString()};B.prototype.toString=function(){return"SafeScript{"+this.la+"}"};B.prototype.m=function(a){this.la=a;return this};(new B).m("");var C=function(){this.na=""};C.prototype.J=!0;C.prototype.C=function(){return this.na};C.prototype.toString=function(){return"SafeStyle{"+this.na+"}"};C.prototype.m=function(a){this.na=a;return this};(new C).m("");var D=function(){this.ma=""};D.prototype.J=!0;D.prototype.C=function(){return this.ma};D.prototype.toString=function(){return"SafeStyleSheet{"+this.ma+"}"};D.prototype.m=function(a){this.ma=a;return this};(new D).m("");var E=function(){this.T="";this.La=Ra;this.wa=null};E.prototype.Va=!0;E.prototype.J=!0;E.prototype.C=function(){return this.T.toString()};E.prototype.toString=function(){return"SafeHtml{"+this.T+"}"};
var Sa=function(a){if(a instanceof E&&a.constructor===E&&a.La===Ra)return a.T;ra("expected object of type SafeHtml, got '"+a+"' of type "+n(a));return"type_error:SafeHtml"},Ta=function(a){if(a instanceof E)return a;var b="object"==typeof a,c=null;b&&a.Va&&(c=a.wa);return F(Ea(b&&a.J?a.C():String(a)),c)},Ra={},F=function(a,b){return(new E).m(a,b)};E.prototype.m=function(a,b){this.T=a;this.wa=b;return this};F("<!DOCTYPE html>",0);var Ua=F("",0);F("<br>",0);var Va=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=Sa(Ua);return!b.parentElement});var Wa=function(a){Wa[" "](a);return a};Wa[" "]=ba;var Ya=function(a,b){var c=Xa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Za=z("Opera"),G=z("Trident")||z("MSIE"),H=z("Edge"),I=z("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),J=-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"),$a=J&&z("Mobile"),K=z("Macintosh"),ab=z("Linux")||z("CrOS"),bb=function(){var a=k.document;return a?a.documentMode:void 0},cb;
a:{var db="",eb=function(){var a=y;if(I)return/rv:([^\);]+)(\)|;)/.exec(a);if(H)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(J)return/WebKit\/(\S+)/.exec(a);if(Za)return/(?:Version)[ \/]?(\S+)/.exec(a)}();eb&&(db=eb?eb[1]:"");if(G){var fb=bb();if(null!=fb&&fb>parseFloat(db)){cb=String(fb);break a}}cb=db}var Fa=cb,Xa={},gb=function(a){return Ya(a,function(){return 0<=Ha(a)})},hb;hb=k.document&&G?bb():void 0;var ib=function(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;if(d.querySelectorAll&&d.querySelector&&a)a=d.querySelector(a?"."+a:"");else{b=b||c;if(b.querySelectorAll&&b.querySelector&&a)a=b.querySelectorAll(a?"."+a:"");else if(a&&b.getElementsByClassName){var e=b.getElementsByClassName(a);a=e}else if(e=b.getElementsByTagName("*"),a){var f={};for(c=d=0;b=e[c];c++){var g=b.className,p;if(p="function"==typeof g.split)p=0<=ta(g.split(/\s+/),
a);p&&(f[d++]=b)}f.length=d;a=f}else a=e;a=a[0]||null}}return a||null},jb=function(a,b,c){function d(p){p&&b.appendChild(l(p)?a.createTextNode(p):p)}for(var e=1;e<c.length;e++){var f=c[e];if(!ca(f)||r(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(r(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==n(f)){g="function"==typeof f.item;break a}}g=!1}ua(g?va(f):f,d)}}},kb=function(a){x(a,"Node cannot be null or undefined.");return 9==a.nodeType?a:a.ownerDocument||
a.document},lb=function(){this.ca=k.document||document};h=lb.prototype;h.getElementsByTagName=function(a,b){return(b||this.ca).getElementsByTagName(String(a))};h.createElement=function(a){return this.ca.createElement(String(a))};h.createTextNode=function(a){return this.ca.createTextNode(String(a))};h.appendChild=function(a,b){x(null!=a&&null!=b,"goog.dom.appendChild expects non-null arguments");a.appendChild(b)};h.append=function(a,b){jb(kb(a),a,arguments)};
h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};h.removeNode=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
h.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var mb={jb:!0},L=function(){throw Error("Do not instantiate directly");};L.prototype.ta=null;L.prototype.xa=function(){return this.content};L.prototype.toString=function(){return this.content};var nb=function(){L.call(this)};u(nb,L);nb.prototype.ua=mb;var qb=function(a){x(a,"Soy template may not be null.");var b=a(ob,void 0,void 0);a=(oa||(oa=new lb)).createElement("DIV");if(r(b))if(b instanceof L){if(b.ua!==mb)throw Error("Sanitized content was not of kind HTML.");var c=b.toString();b=b.ta;var d=new A(Oa,"Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");sa(Qa(d),"must provide justification");x(!/^[\s\xa0]*$/.test(Qa(d)),"must provide non-empty justification");c=F(c,b||null)}else ra("Soy template output is unsafe for use as HTML: "+
b),c=Ta("zSoyz");else c=Ta(String(b));b=c.C();d=b.match(pb);x(!d,"This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s",d&&d[0],b);if(Va())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Sa(c);1==a.childNodes.length&&(c=a.firstChild,1==c.nodeType&&(a=c));return a},pb=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,ob={};var rb=new function(){oa||(oa=new lb);this.Ka=null};var sb=Object.freeze||function(a){return a};var tb=function(){};var ub;(ub=!G)||(ub=9<=Number(hb));var vb=ub,wb=G&&!gb("9"),xb=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{k.addEventListener("test",ba,b),k.removeEventListener("test",ba,b)}catch(c){}return a}();var M=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.w=!1;this.Ha=!0};M.prototype.stopPropagation=function(){this.w=!0};M.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Ha=!1};var N=function(a,b){M.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=
b;if(b=a.relatedTarget){if(I){a:{try{Wa(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.offsetX=J||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=J||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=
void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=l(a.pointerType)?a.pointerType:yb[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&this.preventDefault()}};u(N,M);
var yb=sb({2:"touch",3:"pen",4:"mouse"});N.prototype.stopPropagation=function(){N.qa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};N.prototype.preventDefault=function(){N.qa.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,wb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var zb="closure_listenable_"+(1E6*Math.random()|0),O=function(a){return!(!a||!a[zb])},Ab=0;var Bb=function(a,b,c,d,e){this.listener=a;this.U=null;this.src=b;this.type=c;this.capture=!!d;this.N=e;this.key=++Ab;this.G=this.M=!1},Cb=function(a){a.G=!0;a.listener=null;a.U=null;a.src=null;a.N=null};var P=function(a){this.src=a;this.b={};this.L=0};P.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.b[f];a||(a=this.b[f]=[],this.L++);var g=Db(a,b,d,e);-1<g?(b=a[g],c||(b.M=!1)):(b=new Bb(b,this.src,f,!!d,e),b.M=c,a.push(b));return b};P.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=Db(e,b,c,d);return-1<b?(Cb(e[b]),x(null!=e.length),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.L--),!0):!1};
var Eb=function(a,b){var c=b.type;if(c in a.b){var d=a.b[c],e=ta(d,b),f;if(f=0<=e)x(null!=d.length),Array.prototype.splice.call(d,e,1);f&&(Cb(b),0==a.b[c].length&&(delete a.b[c],a.L--))}};P.prototype.V=function(a){a=a&&a.toString();var b=0,c;for(c in this.b)if(!a||c==a){for(var d=this.b[c],e=0;e<d.length;e++)++b,Cb(d[e]);delete this.b[c];this.L--}};P.prototype.I=function(a,b,c,d){a=this.b[a.toString()];var e=-1;a&&(e=Db(a,b,c,d));return-1<e?a[e]:null};
P.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return La(this.b,function(f){for(var g=0;g<f.length;++g)if(!(c&&f[g].type!=d||e&&f[g].capture!=b))return!0;return!1})};var Db=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.G&&f.listener==b&&f.capture==!!c&&f.N==d)return e}return-1};var Fb="closure_lm_"+(1E6*Math.random()|0),Gb={},Hb=0,Q=function(a,b,c,d,e){if(d&&d.once)return Ib(a,b,c,d,e);if(q(b)){for(var f=0;f<b.length;f++)Q(a,b[f],c,d,e);return null}c=Jb(c);return O(a)?a.F(b,c,r(d)?!!d.capture:!!d,e):Kb(a,b,c,!1,d,e)},Kb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=r(e)?!!e.capture:!!e,p=R(a);p||(a[Fb]=p=new P(a));c=p.add(b,c,d,g,f);if(c.U)return c;d=Lb();c.U=d;d.src=a;d.listener=c;if(a.addEventListener)xb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(Mb(b.toString()),d);else if(a.addListener&&a.removeListener)x("change"===b,"MediaQueryList only has a change event"),a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Hb++;return c},Lb=function(){var a=Nb,b=vb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Ib=function(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)Ib(a,b[f],c,d,e);return null}c=Jb(c);return O(a)?
a.Aa(b,c,r(d)?!!d.capture:!!d,e):Kb(a,b,c,!0,d,e)},Ob=function(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Ob(a,b[f],c,d,e);else d=r(d)?!!d.capture:!!d,c=Jb(c),O(a)?a.ra(b,c,d,e):a&&(a=R(a))&&(b=a.I(b,c,d,e))&&S(b)},S=function(a){if(!m(a)&&a&&!a.G){var b=a.src;if(O(b))Eb(b.g,a);else{var c=a.type,d=a.U;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Mb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Hb--;(c=R(b))?(Eb(c,a),0==c.L&&(c.src=null,b[Fb]=
null)):Cb(a)}}},Mb=function(a){return a in Gb?Gb[a]:Gb[a]="on"+a},Qb=function(a,b,c,d){var e=!0;if(a=R(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.G&&(f=Pb(f,d),e=e&&!1!==f)}return e},Pb=function(a,b){var c=a.listener,d=a.N||a.src;a.M&&S(a);return c.call(d,b)},Nb=function(a,b){if(a.G)return!0;if(!vb){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new N(d,this);c=!0;if(!(0>d.keyCode||void 0!=
d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.w&&0<=e;e--){b.currentTarget=d[e];var f=Qb(d[e],a,!0,b);c=c&&f}for(e=0;!b.w&&e<d.length;e++)b.currentTarget=d[e],f=Qb(d[e],a,!1,b),c=c&&f}return c}return Pb(a,new N(b,this))},R=function(a){a=a[Fb];return a instanceof P?a:null},Rb="__closure_events_fn_"+(1E9*Math.random()>>>0),Jb=function(a){x(a,
"Listener can not be null.");if("function"==n(a))return a;x(a.handleEvent,"An object listener must have handleEvent method.");a[Rb]||(a[Rb]=function(b){return a.handleEvent(b)});return a[Rb]};var T=function(a){this.ea=a;this.D={}};u(T,tb);var Sb=[];T.prototype.F=function(a,b,c,d){q(b)||(b&&(Sb[0]=b.toString()),b=Sb);for(var e=0;e<b.length;e++){var f=Q(a,b[e],c||this.handleEvent,d||!1,this.ea||this);if(!f)break;this.D[f.key]=f}return this};T.prototype.Aa=function(a,b,c,d){return Tb(this,a,b,c,d)};var Tb=function(a,b,c,d,e,f){if(q(c))for(var g=0;g<c.length;g++)Tb(a,b,c[g],d,e,f);else{b=Ib(b,c,d||a.handleEvent,e,f||a.ea||a);if(!b)return a;a.D[b.key]=b}return a};
T.prototype.ra=function(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)this.ra(a,b[f],c,d,e);else c=c||this.handleEvent,d=r(d)?!!d.capture:!!d,e=e||this.ea||this,c=Jb(c),d=!!d,b=O(a)?a.I(b,c,d,e):a?(a=R(a))?a.I(b,c,d,e):null:null,b&&(S(b),delete this.D[b.key])};T.prototype.V=function(){Ka(this.D,function(a,b){this.D.hasOwnProperty(b)&&S(a)},this);this.D={}};T.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var Ub=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.ta=d);return c}}(nb),U=function(a){var b=null!=a&&a.ua===mb;b&&x(a.constructor===nb);b?a=String(String(a.xa()).replace(Vb,"").replace(Wb,"&lt;")).replace(Xb,Yb):(a=String(a),a=Ea(a,void 0));return a},Zb={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",
">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Yb=function(a){return Zb[a]},Xb=/[\x00\x22\x27\x3c\x3e]/g,Vb=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Wb=/</g;var $b=function(a,b,c){a=(b=c||b)&&b.Pa;a='<style type="text/css"'+(a?' nonce="'+U(a)+'"':"")+'>.__gcp_button_cls {display: block; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAK6wAACusBgosNWgAAAAd0SU1FB9sEFhYNCw4IkMgAAAA1SURBVAjXvcexCQAxDATB5aT+C1UNEufEYOzPP1lmsW1VFepuNDNbzx4B/yQzUUR8dC+2vQAZOSMDprhidAAAAABJRU5ErkJggg==) repeat-x; border: 1px solid #ccc; height: 20px; text-decoration: none; font: bold 14px/20px "Droid Sans", "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif; color: #666; position: relative; padding: 0 5px 0 25px; float: left; text-shadow: #fff 0 1px 1px; cursor: pointer; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; -webkit-transition: background-position .2s ease-out, color .2s ease-out;}.__gcp_button_cls:hover {background-position: 0 -20px; color: #111;}.__gcp_button_img_cls {height: 18px; width: 17px; position: absolute; left: 5px; top: 2px; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASBAMAAABP1yhnAAAAA3NCSVQICAjb4U/gAAAAFVBMVEX///+RkZH///+RkZEAmQDLPDwAVKrOcjT8AAAAB3RSTlMA7v//////bfV3xQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAVdEVYdENyZWF0aW9uIFRpbWUANC8xOS8xMcNUYbQAAABuSURBVAiZXY7BCcAwCEVFQxboAmLoPegCoTv0HnrI/iNUDb3Ug3588r8AQGYGWYdI6yFIATCXxN5aqmyBEwSOs42NLVwcK2m4YIdO512u7rtmKGWYMWCrswyVsKoP8k6ra82/0u8XDGfOIPHy8QKJ2w71g2IHXgAAAABJRU5ErkJggg==) no-repeat center;}</style><div class="'+
U("__gcp_button_cls")+'"><div class="'+U("__gcp_button_img_cls")+'"></div><div>';return Ub(a+"Print</div></div>")};$b.Ja="cp.gadget.GadgetSoy.printButton";var ac=function(){rb.Ka&&rb.Ka.getData();return"You are using an outdated browser. For better performance and more advanced features such as Google Cloud Print - please upgrade to a modern browser such as Google Chrome, Firefox 3 or IE9 (if using IE9, ensure that compatibility mode is turned off)."};ac.Ja="cp.gadget.GadgetSoy.browserIsNotSupported";var bc=function(a,b,c,d){this.name=a;this.data=b;this.source=c;this.origin=d},cc=function(){this.R={};var a=this.S=t(this.Ua,this);window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("onmessage",a)};cc.prototype.addListener=function(a,b,c,d){var e=this.R[a]||[];b=new dc(b,c,d);0<=ta(e,b)||e.push(b);this.R[a]=e;return this};cc.prototype.Ga=function(){this.R={}};
cc.prototype.Ua=function(a){if(a.data){var b=a.data.indexOf("::");if(!(0>=b)){var c=a.data.substr(0,b);b=new bc(c,a.data.substr(b+2),a.source,a.origin);c=this.R[c]||[];for(var d,e=0;d=c[e];e++)d.source&&d.source!=a.source||("*"==d.origin||d.origin==a.origin)&&d.Ra(b)}}};var dc=function(a,b,c){this.Ra=a;this.source=b||null;this.origin=c||"*"};var V=function(a,b){this.S=new cc;this.ha=this.fa=!1;this.s=this.o=this.u=this.i=null;this.A=[];this.B=a;this.gb=b||!1};h=V.prototype;h.open=function(){this.ha&&this.close();this.ha=!0;this.Da();var a=this.da();a&&this.S.addListener("cp-dialog-on-init",t(this.ka,this),a).addListener("cp-dialog-on-close",t(this.close,this),a).addListener("cp-dialog-on-print-locally",t(this.Za,this),a)};h.close=function(){this.sa();this.S.Ga();this.ha=this.fa=!1;this.o&&this.o()};h.X=function(a){this.i=a;this.a&&this.a.X(this.i)};
h.$=function(a){this.u=a;ec(this,this.u)};h.Y=function(a){this.o=a};h.Z=function(a){this.s=a};h.aa=function(a){this.A=a;fc(this,"cp-dialog-set-tags",ia(this.A))};var gc=function(a){return(a.i||"https://www.google.com/")+a.ya()+"?authuser="+a.B.oa+"&hl=en&isUserSettings="+a.gb};V.prototype.ka=function(){this.fa=!0;ec(this,this.u);fc(this,"cp-dialog-set-tags",ia(this.A));var a=this.B;a=ia({mode:a.ja,selected_user:a.oa,"show-print-locally":a.Ia});fc(this,"cp-dialog-set-configuration",a)};
var ec=function(a,b){if(b){var c={};c.type=b.fb;c.title=b.eb;c.content=b.va;c.encoding=b.Qa;b=ia(c);fc(a,"cp-dialog-set-print-document",b)}},fc=function(a,b,c){var d=a.da();d&&a.fa&&d.postMessage&&d.postMessage(b+"::"+c,"*")};V.prototype.Za=function(){this.close();this.s?this.s():window.print()};var jc=function(a,b,c,d,e,f){if(J&&!gb("525"))return!0;if(K&&e)return hc(a);if(e&&!d)return!1;if(!I){m(b)&&(b=ic(b));var g=17==b||18==b||K&&91==b;if((!c||K)&&g||K&&16==b&&(d||f))return!1}if((J||H)&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(G&&d&&b==a)return!1;switch(a){case 13:return I?f||e?!1:!(c&&d):!0;case 27:return!(J||H||I)}return I&&(d||e||f)?!1:hc(a)},hc=function(a){if(48<=a&&57>=a||96<=a&&106>=a||
65<=a&&90>=a||(J||H)&&0==a)return!0;switch(a){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return I;default:return!1}},ic=function(a){if(I)a=kc(a);else if(K&&J)switch(a){case 93:a=91}return a},kc=function(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};var W=function(){this.g=new P(this);this.Na=this;this.Fa=null};u(W,tb);W.prototype[zb]=!0;h=W.prototype;h.addEventListener=function(a,b,c,d){Q(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Ob(this,a,b,c,d)};
h.dispatchEvent=function(a){lc(this);var b=this.Fa;if(b){var c=[];for(var d=1;b;b=b.Fa)c.push(b),x(1E3>++d,"infinite loop")}b=this.Na;d=a.type||a;if(l(a))a=new M(a,b);else if(a instanceof M)a.target=a.target||b;else{var e=a;a=new M(d,b);Na(a,e)}e=!0;if(c)for(var f=c.length-1;!a.w&&0<=f;f--){var g=a.currentTarget=c[f];e=mc(g,d,!0,a)&&e}a.w||(g=a.currentTarget=b,e=mc(g,d,!0,a)&&e,a.w||(e=mc(g,d,!1,a)&&e));if(c)for(f=0;!a.w&&f<c.length;f++)g=a.currentTarget=c[f],e=mc(g,d,!1,a)&&e;return e};
h.F=function(a,b,c,d){lc(this);return this.g.add(String(a),b,!1,c,d)};h.Aa=function(a,b,c,d){return this.g.add(String(a),b,!0,c,d)};h.ra=function(a,b,c,d){this.g.remove(String(a),b,c,d)};h.Ga=function(){this.g&&this.g.V(void 0)};var mc=function(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.G&&g.capture==c){var p=g.listener,xc=g.N||g.src;g.M&&Eb(a.g,g);e=!1!==p.call(xc,d)&&e}}return e&&0!=d.Ha};
W.prototype.I=function(a,b,c,d){return this.g.I(String(a),b,c,d)};W.prototype.hasListener=function(a,b){return this.g.hasListener(void 0!==a?String(a):void 0,b)};var lc=function(a){x(a.g,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var X=function(a,b){W.call(this);a&&(this.P&&this.detach(),this.f=a,this.O=Q(this.f,"keypress",this,b),this.ia=Q(this.f,"keydown",this.Sa,b,this),this.P=Q(this.f,"keyup",this.Ta,b,this))};u(X,W);h=X.prototype;h.f=null;h.O=null;h.ia=null;h.P=null;h.c=-1;h.h=-1;h.ba=!1;
var nc={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},oc={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},pc=!J||gb("525"),qc=K&&I;
X.prototype.Sa=function(a){if(J||H)if(17==this.c&&!a.ctrlKey||18==this.c&&!a.altKey||K&&91==this.c&&!a.metaKey)this.h=this.c=-1;-1==this.c&&(a.ctrlKey&&17!=a.keyCode?this.c=17:a.altKey&&18!=a.keyCode?this.c=18:a.metaKey&&91!=a.keyCode&&(this.c=91));pc&&!jc(a.keyCode,this.c,a.shiftKey,a.ctrlKey,a.altKey,a.metaKey)?this.handleEvent(a):(this.h=ic(a.keyCode),qc&&(this.ba=a.altKey))};X.prototype.Ta=function(a){this.h=this.c=-1;this.ba=a.altKey};
X.prototype.handleEvent=function(a){var b=a.l,c=b.altKey;if(G&&"keypress"==a.type){var d=this.h;var e=13!=d&&27!=d?b.keyCode:0}else(J||H)&&"keypress"==a.type?(d=this.h,e=0<=b.charCode&&63232>b.charCode&&hc(d)?b.charCode:0):Za&&!J?(d=this.h,e=hc(d)?b.keyCode:0):("keypress"==a.type?(qc&&(c=this.ba),b.keyCode==b.charCode?32>b.keyCode?(d=b.keyCode,e=0):(d=this.h,e=b.charCode):(d=b.keyCode||this.h,e=b.charCode||0)):(d=b.keyCode||this.h,e=b.charCode||0),K&&63==e&&224==d&&(d=191));var f=d=ic(d);d?63232<=
d&&d in nc?f=nc[d]:25==d&&a.shiftKey&&(f=9):b.keyIdentifier&&b.keyIdentifier in oc&&(f=oc[b.keyIdentifier]);I&&pc&&"keypress"==a.type&&!jc(f,this.c,a.shiftKey,a.ctrlKey,c,a.metaKey)||(a=f==this.c,this.c=f,b=new rc(f,e,a,b),b.altKey=c,this.dispatchEvent(b))};X.prototype.detach=function(){this.O&&(S(this.O),S(this.ia),S(this.P),this.P=this.ia=this.O=null);this.f=null;this.h=this.c=-1};var rc=function(a,b,c,d){N.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c};u(rc,N);var sc=function(a,b){W.call(this);a=this.f=a;a=r(a)&&1==a.nodeType?this.f:this.f?this.f.body:null;var c;if(c=!!a){a:{c=kb(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))){c=c.direction||c.getPropertyValue("direction")||"";break a}c=""}c="rtl"==(c||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction)}this.Wa=c;Q(this.f,I?"DOMMouseScroll":"mousewheel",this,b)};u(sc,W);
sc.prototype.handleEvent=function(a){var b=0,c=0,d=a.l;"mousewheel"==d.type?(a=tc(-d.wheelDelta),void 0!==d.wheelDeltaX?(b=tc(-d.wheelDeltaX),c=tc(-d.wheelDeltaY)):c=a):(a=d.detail,100<a?a=3:-100>a&&(a=-3),void 0!==d.axis&&d.axis===d.HORIZONTAL_AXIS?b=a:c=a);m(this.Ba)&&(b=Math.min(Math.max(b,-this.Ba),this.Ba));m(this.Ca)&&(c=Math.min(Math.max(c,-this.Ca),this.Ca));this.Wa&&(b=-b);b=new uc(a,d,b,c);this.dispatchEvent(b)};
var tc=function(a){return J&&(K||ab)&&0!=a%40?a:a/40},uc=function(a,b,c,d){N.call(this,b);this.type="mousewheel";this.detail=a;this.deltaX=c;this.deltaY=d};u(uc,N);var vc=function(a,b,c){a=(b=c||b)&&b.Pa;return Ub('<style type="text/css"'+(a?' nonce="'+U(a)+'"':"")+'>.__gcp_dialog_background_cls {position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 1002; background: white; opacity: 0.75;}.__gcp_dialog_container_cls {height: 385px; width: 600px; top: 50%; margin-top: -190px; left: 50%; margin-left: -325px; padding: 15px 25px; -webkit-box-shadow: 0 4px 16px rgba(0,0,0,.2); -moz-box-shadow: 0 4px 16px rgba(0,0,0,.2); box-shadow: 0 4px 16px rgba(0,0,0,.2); background: white; background-clip: padding-box; border: 1px solid #ACACAC; border: 1px solid rgba(0, 0, 0, .333); outline: 0; position: fixed; background: white; z-index: 2147483646;}.__gcp_dialog_close_cls {height: 15px; width: 15px; top: 21px; right: 31px; position: absolute; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEGRcrKtgeedMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAWklEQVQoz8WTuQ0AMQgEDc1S01Zrp77TgPwEJoQdtCAwSb2dxiksqXu7CF91QnknwV+Y5T9wRFgFzHW0TQ0IRJiEBKZwNvPWtrMRym3PYNlg1SLqnp2n3XzVAKIEULf6A6q/AAAAAElFTkSuQmCC) no-repeat center; cursor: pointer; z-index: 2147483647;}</style><div class="'+
U("__gcp_dialog_background_cls")+'"></div><div class="'+U("__gcp_dialog_container_cls")+'"><div class="'+U("__gcp_dialog_close_cls")+'"></div><iframe class="'+U("__gcp_dialog_iframe_cls")+'" style="height: 100%; width: 100%; border: 0;"></iframe></div>')};vc.Ja="cp.gadget.PrintDialogDesktopSoy.printDialogDesktop";var wc=function(a,b){V.call(this,a,b);this.H=new T(this);this.Xa=new sc(document);this.j=qb(vc);this.za=this.v=null};u(wc,V);h=wc.prototype;h.Da=function(){document.body.appendChild(this.j);this.v=ib("__gcp_dialog_iframe_cls",this.j);var a=ib("__gcp_dialog_close_cls",this.j);this.j.style.display="";this.za=new X(this.j.ownerDocument.body);this.H.F(a,"click",t(this.close,this)).F(this.za,"key",t(this.Ya,this)).F(this.Xa,"mousewheel",function(b){b.preventDefault()});this.v.src=gc(this);this.v.focus()};
h.sa=function(){this.j.style.display="none";this.v&&(this.v.src="");this.H.V()};h.da=function(){return this.v&&this.v.contentWindow};h.ya=function(){return"cloudprint/gadget.html"};h.ka=function(){wc.qa.ka.call(this);ib("__gcp_dialog_close_cls",this.j).style.display="none"};h.Ya=function(a){27==a.keyCode&&(a.preventDefault(),this.close())};var Y=function(a){V.call(this,a);this.K=null};u(Y,V);Y.prototype.da=function(){return this.K};Y.prototype.ya=function(){return"cloudprint/dialog.html"};Y.prototype.Da=function(){this.K=window.open(gc(this))};Y.prototype.sa=function(){this.K&&!this.K.closed&&this.K.close()};var Z=function(a){this.H=new T(this);this.s=this.o=this.u=this.a=this.i=null;this.A=[];this.B=a||new v};h=Z.prototype;h.ab=function(a){this.H.V();a&&this.H.F(a,"click",t(this.Ea,this))};h.X=function(a){this.i=a;this.a&&this.a.X(this.i)};h.$=function(a,b,c,d){if("print-document"!=this.B.ja)throw Error("Cannot set print document on gadget which is not in PRINT_DOCUMENT mode.");this.u=new na(a,b,c,d);this.a&&this.a.$(this.u)};h.Y=function(a){this.o=a||null;this.a&&this.a.Y(this.o)};
h.Z=function(a){this.s=a||null;this.a&&this.a.Z(this.s)};h.aa=function(a){this.A=a;this.a&&this.a.aa(this.A)};
h.Ea=function(){if(G?0<=Ha("9"):I?0<=Ha("1.9.0"):1){if(!this.a){if($a)var a=!0;else a=y,a=-1!=a.indexOf("Android")||-1!=a.indexOf("iPad")||-1!=a.indexOf("iPod")||-1!=a.indexOf("iPhone");this.a=a?new Y(this.B):new wc(this.B);this.a.X(this.i);this.a.$(this.u);this.a.Y(this.o);this.a.Z(this.s);this.a.aa(this.A)}this.a.open()}else{a=alert;var b=ac();sa(b,b instanceof L?'renderText was called with a template of kind other than "text"':"renderText was called with a non-template");a(String(b))}};
h.Oa=function(){this.a&&this.a.close()};aa("cloudprint.Gadget",Z);Z.createDefaultPrintButton=function(a){var b=qb($b);(a="string"===typeof a?document.getElementById(a):a)&&a.appendChild(b);return b};Z.prototype.setPrintButton=Z.prototype.ab;Z.prototype.setPrintDocument=Z.prototype.$;Z.prototype.setOnCloseCallback=Z.prototype.Y;Z.prototype.setOnPrintLocallyCallback=Z.prototype.Z;Z.prototype.setPrintTags=Z.prototype.aa;Z.prototype.openPrintDialog=Z.prototype.Ea;Z.prototype.closePrintDialog=Z.prototype.Oa;}).call(this);