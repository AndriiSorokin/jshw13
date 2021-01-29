!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(o,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,a=void 0,i=void 0,l=void 0,s=void 0;n&&(a=n.start.line,i=n.end.line,l=n.start.column,s=n.end.column,e+=" - "+a+":"+l);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var o=n(0),a=r(n(1)),i=n(3),l=n(19),s=r(n(5)),u=n(6);t.VERSION="4.7.6";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var f=s.default.log;t.log=f,t.createFrame=o.createFrame,t.logger=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),l.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var o=r(n(12)),a=r(n(13)),i=r(n(14)),l=r(n(15)),s=r(n(16)),u=r(n(17)),c=r(n(18))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,n){return i("function"==typeof e?t.methods:t.properties,n)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var r=n(21),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),a=Object.create(null);function i(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,n){var r=n(10);e.exports=(r.default||r).template({1:function(e,t,n,r,o){var a,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",u=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li>\n  <div class="photo-card">\n    <img width="100%" height="420" src="'+u(typeof(a=null!=(a=c(n,"webformatURL")||(null!=t?c(t,"webformatURL"):t))?a:l)===s?a.call(i,{name:"webformatURL",hash:{},data:o,loc:{start:{line:4,column:40},end:{line:4,column:56}}}):a)+'" alt="'+u(typeof(a=null!=(a=c(n,"tags")||(null!=t?c(t,"tags"):t))?a:l)===s?a.call(i,{name:"tags",hash:{},data:o,loc:{start:{line:4,column:63},end:{line:4,column:71}}}):a)+'" data-src="'+u(typeof(a=null!=(a=c(n,"largeImageURL")||(null!=t?c(t,"largeImageURL"):t))?a:l)===s?a.call(i,{name:"largeImageURL",hash:{},data:o,loc:{start:{line:4,column:83},end:{line:4,column:100}}}):a)+'"\n      data-index="'+u(typeof(a=null!=(a=c(n,"index")||o&&c(o,"index"))?a:l)===s?a.call(i,{name:"index",hash:{},data:o,loc:{start:{line:5,column:18},end:{line:5,column:28}}}):a)+'" />\n\n    <div class="stats">\n      <p class="stats-item">\n        <i class="material-icons">thumb_up</i>\n        '+u(typeof(a=null!=(a=c(n,"likes")||(null!=t?c(t,"likes"):t))?a:l)===s?a.call(i,{name:"likes",hash:{},data:o,loc:{start:{line:10,column:8},end:{line:10,column:17}}}):a)+'\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">visibility</i>\n        '+u(typeof(a=null!=(a=c(n,"views")||(null!=t?c(t,"views"):t))?a:l)===s?a.call(i,{name:"views",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:17}}}):a)+'\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">comment</i>\n        '+u(typeof(a=null!=(a=c(n,"comments")||(null!=t?c(t,"comments"):t))?a:l)===s?a.call(i,{name:"comments",hash:{},data:o,loc:{start:{line:18,column:8},end:{line:18,column:20}}}):a)+'\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">cloud_download</i>\n        '+u(typeof(a=null!=(a=c(n,"downloads")||(null!=t?c(t,"downloads"):t))?a:l)===s?a.call(i,{name:"downloads",hash:{},data:o,loc:{start:{line:22,column:8},end:{line:22,column:21}}}):a)+"\n      </p>\n    </div>\n  </div>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:27,column:9}}}))?a:""},useData:!0})},function(e,t,n){e.exports=function e(t,n,r){function o(i,l){if(!n[i]){if(!t[i]){if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[i]={exports:{}};t[i][0].call(u.exports,(function(e){return o(t[i][1][e]||e)}),u,u.exports,e,t,n,r)}return n[i].exports}for(var a=!1,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),l=o(a,"VIDEO"),s=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===l&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(l)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(l)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var l={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(l)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(l)}))},close:i};return l}},{}]},{},[1])(1)},function(e,t,n){},function(e,t,n){e.exports=n(11).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=o(n(2)),i=r(n(22)),l=r(n(1)),s=o(n(0)),u=o(n(23)),c=r(n(25));function f(){var e=new a.HandlebarsEnvironment;return s.extend(e,a),e.SafeString=i.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var d=f();d.create=f,c.default(d),d.default=d,t.default=d,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var o=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return a(t,n)}))},e.exports=t.default},function(e,t,n){"use strict";(function(r){t.__esModule=!0;var o,a=n(0),i=n(1),l=(o=i)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new l.default("Must pass iterator to #each");var n,o=t.fn,i=t.inverse,s=0,u="",c=void 0,f=void 0;function d(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,f&&(c.contextPath=f+t)),u+=o(e[t],{data:c,blockParams:a.blockParams([e[t],t],[f+t,null])})}if(t.data&&t.ids&&(f=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(c=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var p=e.length;s<p;s++)s in e&&d(s,s,s===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var h=[],m=e[r.Symbol.iterator](),v=m.next();!v.done;v=m.next())h.push(v.value);for(p=(e=h).length;s<p;s++)d(s,s,s===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&d(n,s-1),n=e,s++})),void 0!==n&&d(n,s-1,!0);return 0===s&&(u=i(this)),u}))},e.exports=t.default}).call(this,n(4))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var n=t.fn;if(o.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:o.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var r,o=n(20),a=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=n.partials;n.partials=r.extend({},i,t.partials);var l=e(o,a);return n.partials=i,l}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(t))};var r=n(0)},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=l.COMPILER_REVISION;if(t>=l.LAST_COMPATIBLE_COMPILER_REVISION&&t<=l.COMPILER_REVISION)return;if(t<l.LAST_COMPATIBLE_COMPILER_REVISION){var r=l.REVISION_CHANGES[n],o=l.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(n,r,a){a.hash&&(r=o.extend({},r,a.hash),a.ids&&(a.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,a);var l=o.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,n,r,l);if(null==s&&t.compile&&(a.partials[a.name]=t.compile(n,e.compilerOptions,t),s=a.partials[a.name](r,l)),null!=s){if(a.indent){for(var u=s.split("\n"),c=0,f=u.length;c<f&&(u[c]||c+1!==f);c++)u[c]=a.indent+u[c];s=u.join("\n")}return s}throw new i.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var a=this.programs[e],i=this.fn(e);return t||o||r||n?a=f(this,e,i,t,n,r,o):a||(a=this.programs[e]=f(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=o.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;a._setup(n),!n.partial&&e.useData&&(o=p(t,o));var i=void 0,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,o,l,i)}return e.useDepths&&(i=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=h(e.main,s,r,n.depths||[],o,l))(t,n)}return a.isTop=!0,a._setup=function(a){if(a.partial)r.protoAccessControl=a.protoAccessControl,r.helpers=a.helpers,r.partials=a.partials,r.decorators=a.decorators,r.hooks=a.hooks;else{var i=o.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return u.wrapHelper(e,(function(e){return o.extend({lookupProperty:n},e)}))}(r,t)}))}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=o.extend({},t.decorators,a.decorators)),r.hooks={},r.protoAccessControl=c.createProtoAccessControl(a);var l=a.allowCallsToHelperMissing||n;s.moveHelperToHooks(r,"helperMissing",l),s.moveHelperToHooks(r,"blockHelperMissing",l)}},a._child=function(t,n,o,a){if(e.useBlockParams&&!o)throw new i.default("must pass block params");if(e.useDepths&&!a)throw new i.default("must pass parent depths");return f(r,t,e[t],n,0,o,a)},a},t.wrapProgram=f,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var a=void 0;n.fn&&n.fn!==d&&function(){n.data=l.createFrame(n.data);var e=n.fn;a=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=l.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=o.extend({},n.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new i.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=d;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},l=n(2),s=n(3),u=n(24),c=n(6);function f(e,t,n,r,o,a,i){function l(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),l)}return(l=h(n,l,e,i,r,a)).program=t,l.depth=i?i.length:0,l.blockParams=o||0,l}function d(){return""}function p(e,t){return t&&"root"in t||((t=t?l.createFrame(t):{}).root=e),t}function h(e,t,n,r,a,i){if(e.decorator){var l={};t=e.decorator(t,l,n,r&&r[0],a,i,r),o.extend(t,l)}return t}},function(e,t,n){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(4))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(9);var r={body:document.querySelector("body"),form:document.getElementById("search-form"),input:document.getElementById("query"),galleryList:document.querySelector(".gallery"),observeBox:document.querySelector(".js-observe")},o={apiKey:"18623550-dab6c274e7256e60b198db2a4",baseUrl:"https://pixabay.com/api/",searchQuery:"",page:1,perPage:10,fetchImages(){const e=`${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.apiKey}`;return fetch(e).then(e=>e.json()).then(({hits:e})=>(this.incrementPage(),e))},resetPage(){this.page=1},incrementPage(){this.page+=1},get query(){return this.searchQuery},set query(e){this.searchQuery=e}},a=n(7),i=n.n(a);var l=function(e){const t=i()(e);r.galleryList.insertAdjacentHTML("beforeend",t)};var s=()=>{new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(console.log("hi"),o.fetchImages().then(e=>{l(e)}))})},{rootMargin:"30px"}).observe(r.observeBox)},u=n(8);n(26);console.log(o),r.form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget;o.query=t.query.value,s(),r.form.reset(),r.galleryList.innerHTML=""})),r.galleryList.addEventListener("click",e=>{if("IMG"===e.target.nodeName){const t=e.target.dataset.src;u.create(`\n    <div class="modal">\n      <img class'light-box-img' src="${t}" alt="">\n    </div>`).show()}})}]);
//# sourceMappingURL=main.bundle.js.map