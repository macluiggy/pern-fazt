module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=7)}([function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("mongodb")},function(e,t,o){"use strict";(function(e){var o;(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const r=()=>'<!doctype html>\n      <html lang="en">\n        <head>\n          <meta charset="utf-8">\n          <title>MERN Kickstart</title>\n        </head>\n        <body>\n          <div id="root"></div>\n          <script type="text/javascript" src="/dist/bundle.js"><\/script>\n        </body>\n      </html>';var n,l;t.a=r,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(r,"default","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/template.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o(0)(e))},function(e,t,o){"use strict";(function(e,t){var o;(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;let r=t;r=""+r;const n={root:r};var l,a;(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(!0,"production","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/root.js"),l.register(r,"root","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/root.js"),l.register(n,"default","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/root.js")),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,o(0)(e),"/")},function(e,t){e.exports=require("dotenv")},function(e,t,o){e.exports=o(8)},function(e,t,o){"use strict";o.r(t),function(e){var r,n=o(2),l=o.n(n),a=o(1),s=o.n(a),i=o(3),u=o(4),c=o(5),d=o(6),f=o.n(d);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;f.a.config();const p=s()();const m=process.cwd();let g=l.a.join(m,"dist");console.log(g),p.use("/dist",s.a.static(g)),console.log(c.root,"djjdjdjd"),p.get("/",(e,t)=>{t.status(200).send(Object(u.a)())}),p.get("/api/hello",(e,t)=>{t.json({hello:"world, jajja"})});let b=process.env.PORT||3e3;p.listen(b,(function(e){e&&console.log(e),console.info("Server started on port %s.",b)}));const v=process.env.MONGODB_URI||"mongodb://localhost:27017/mernSimpleSetup";i.MongoClient.connect(v,{useNewUrlParser:!0,useUnifiedTopology:!0},(e,t)=>{console.log("Connected successfully to mongodb server"),t.close()});const G=p;var y,M;t.default=G,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(p,"app","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),y.register(!1,"production","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),y.register(m,"CURRENT_WORKING_DIR","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),y.register(g,"dir","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),y.register(b,"port","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),y.register(v,"url","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),y.register(G,"default","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js")),(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&M(e)}.call(this,o(0)(e))}]);