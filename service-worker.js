if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.65a0b497.css",revision:"182da060c91657920c5335e073fd1edb"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/21.3140edd4.js",revision:"8203a038bfbffa51f91c0396ce17920a"},{url:"assets/js/22.bf221b3b.js",revision:"047066cce6e8cdd8fd2b40d5f04c9b2a"},{url:"assets/js/app.2c026ee0.js",revision:"f49125adc31f12ce6c61efab54f65aed"},{url:"assets/js/layout-Blog.a7de9554.js",revision:"f18bcddd20cb0ab1ae83676bb359de76"},{url:"assets/js/layout-Layout.8241e617.js",revision:"18ef81168786c5402bb64b43e10e877c"},{url:"assets/js/layout-NotFound.b76cb319.js",revision:"b5b7a8166b7edd29d0a7729a50b01a0c"},{url:"assets/js/layout-Slide.d1419244.js",revision:"2738d9230306ae5b50dca2c2a6a1018f"},{url:"assets/js/page-Download.18aea2b9.js",revision:"776b4039ab7df29de37c48bfbf03aa45"},{url:"assets/js/page-Home.23acce9e.js",revision:"c353b2fc73aa1e81e98c99e891b8bfc7"},{url:"assets/js/page-什么是原生库架构？.f0b5ad35.js",revision:"5baaf8e098c30903fef08fcd7f9bfc7f"},{url:"assets/js/page-什么是注册组件？.7d554a88.js",revision:"a699b01b3b1cd793c273fa1957c171e2"},{url:"assets/js/page-包特性分析.1bf080b7.js",revision:"294d5b94f3566405c7aabfbb0fe08948"},{url:"assets/js/page-库引用统计.314ade55.js",revision:"4e4ce58741a309a9e2c812f79691e024"},{url:"assets/js/page-快照.25934335.js",revision:"dc8de0bbaee6f914f2dc5c11ad220fd6"},{url:"assets/js/page-思维导图.b1e0e4ca.js",revision:"666460148b9283116776fdd2fab061a2"},{url:"assets/js/page-更新日志.801f9e68.js",revision:"826fb5dcbc491040abf3c09d19ec8a72"},{url:"assets/js/page-概要.b500f162.js",revision:"315fe4e416bb280f416462c7f5e36810"},{url:"assets/js/page-知名库标记.8ec054f1.js",revision:"d48e05e5dac731180260122416dd5633"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.3a36b510.js",revision:"9acb167ab3cf78e98e9307dc65dac884"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.e51fef88.js",revision:"e45980c8895b482cb2f149f1c8faadf0"},{url:"assets/js/vendors~layout-Layout.ce382810.js",revision:"18c3ab60fdeed9a3c7f05930dea81c37"},{url:"assets/js/vendors~photo-swipe.f1b8eff5.js",revision:"a625331a38d603a5519662bf689dd986"},{url:"404.html",revision:"56ec9a4673c57300c556b63580b328c6"},{url:"article/index.html",revision:"01160bd8b2e61d3d854694e6bcb5797a"},{url:"category/index.html",revision:"ecf2e5bded63a1bbf5fbd8c950771c06"},{url:"changelog/index.html",revision:"68cfcdfb2cdd8249b23427e48bf6b064"},{url:"download/index.html",revision:"988a6e63bd97125c2da74e19ed349814"},{url:"encrypt/index.html",revision:"5c303779635888933404431477f2799d"},{url:"guide/index.html",revision:"0123f33e094c2d992190550bc75270d6"},{url:"guide/Library-Reference-Statistics/index.html",revision:"038e41f838300330eca38fd16201d854"},{url:"guide/Marked-Popular-Library/index.html",revision:"cb3a593ad98ab69a969f52b043179ff1"},{url:"guide/Mind-Mapping/index.html",revision:"d46073516a41959a2242496f826d5234"},{url:"guide/Package-Features-Analysis/index.html",revision:"868fb203a4d1cdc460dba712a5a3ac57"},{url:"guide/Snapshot-Usage/index.html",revision:"e858c1c8940022f5438c10c83661a77a"},{url:"guide/What-is-Native-Library-Architecture/index.html",revision:"05c5d95df9e8b6b54d956438810034bd"},{url:"guide/What-is-Registered-Component/index.html",revision:"950059a342ca3954d62e3d454dd2a55a"},{url:"index.html",revision:"40ed9c23dc331b6ced794907b83be194"},{url:"slide/index.html",revision:"3c72e7f2a97717641d9211b4f940aa7a"},{url:"star/index.html",revision:"542968c74fc9fb35f89bff0530b077fa"},{url:"tag/index.html",revision:"b92ac82d01e275c4fd9372b28b993784"},{url:"timeline/index.html",revision:"4a8c53eca4809886298449dfc0da1f0d"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
