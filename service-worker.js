if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f22e0002.css",revision:"0de173e2cafb63dd8f9f5bcff7b867d6"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/23.c570e496.js",revision:"4020856fcda5a4df6ebb2184ed1c5319"},{url:"assets/js/24.786dace0.js",revision:"45cb9099b780bab13ff87d0f8b1171c7"},{url:"assets/js/25.19392a45.js",revision:"7c73dde715710435a38f43a9de2af3ff"},{url:"assets/js/26.2124f987.js",revision:"179e8c3c23c53f6b32726f93751c188f"},{url:"assets/js/app.a531b621.js",revision:"c15b8072d97e310d81bd9800b2cc6525"},{url:"assets/js/layout-Blog.c6ff3f57.js",revision:"67dff02421651564b4dc552da5e49636"},{url:"assets/js/layout-Layout.bedc94dc.js",revision:"50ee3efcbc009ee4b3898935979ad59f"},{url:"assets/js/layout-NotFound.dc355449.js",revision:"d29c2007bcb64be9ab9b15f66184d71d"},{url:"assets/js/layout-Slide.fa7561a8.js",revision:"a83f87e964255f4ed9b030a1ec88c3f5"},{url:"assets/js/page-Download--b3f91be2.32ccdb22.js",revision:"64c5c9531f4fdd0e0b6ed955944e4d90"},{url:"assets/js/page-Home--4baedca8.a24142ab.js",revision:"388ad7687fdc6d799f9c7fd912206b6c"},{url:"assets/js/page-什么是原生库架构？--4c61bdb3.7bbc9c40.js",revision:"4183403c947023c3749a7de68bb8e2f5"},{url:"assets/js/page-什么是注册组件？--7d1a76a1.9a038428.js",revision:"09c2eaf9eae27232e6cdf990dc8fefee"},{url:"assets/js/page-包特性分析--33a81633.c94b50cf.js",revision:"79ffb135b09f885af8f5baf176a20d6f"},{url:"assets/js/page-库引用统计--1d58b70b.229d96bc.js",revision:"38c771e12071010ee39998c52d988904"},{url:"assets/js/page-快照--0b093b49.156e6af0.js",revision:"9162aad10715f52706754dae506eecba"},{url:"assets/js/page-思维导图--247d6493.ac044747.js",revision:"3d51c174effc4e2c00824580edb8e161"},{url:"assets/js/page-更新日志--4107fbf3.3b267b4c.js",revision:"73922d5ab5162ab4bcdd395f271d2ff0"},{url:"assets/js/page-概要--0f7e23e4.277935fa.js",revision:"74e81d5dc0dd8e31ac846f57aa859fc2"},{url:"assets/js/page-知名库标记--1b01c46d.b6139415.js",revision:"9661ee29d9b3416885ddc0fe66b58694"},{url:"assets/js/vendors~flowchart.85509201.js",revision:"8c17462d3b56cb5e17a51b730d5cb189"},{url:"assets/js/vendors~layout-Blog~layout-Layout.3506322f.js",revision:"ff9de0db62ce1c6b0b4f44731c2465f4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4f775c37.js",revision:"53f15642e6ed648a8c0c249b2d157d25"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.d418ba01.js",revision:"4d09526da08749597d62611cb4f85efa"},{url:"assets/js/vendors~photo-swipe.a6a08bcf.js",revision:"d41244f72929c0157a19f4d95f420fa1"},{url:"assets/js/vendors~reveal.8f6c76c7.js",revision:"d98ed8fe8f5738302ab2c75336f59d31"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"0c6aa35b5d4a92f29261b626bd63b8c8"},{url:"article/index.html",revision:"d729ca4b53f4aa18239a8da655a5ed2e"},{url:"category/index.html",revision:"67e0b8b2a30aa1996f0c12977f2cdbfc"},{url:"changelog/index.html",revision:"14fa502e03cb69ca50500b7f78f9d5f5"},{url:"download/index.html",revision:"c78bda1481ef5ad53765a741785b60e3"},{url:"encrypt/index.html",revision:"6ec4dd7bd7e1ccd76c70922a9dc7c3d4"},{url:"guide/index.html",revision:"e4b1a632127149007958b808127538a6"},{url:"guide/Library-Reference-Statistics/index.html",revision:"bc2eb13b3055909876ff9b41656ea0ab"},{url:"guide/Marked-Popular-Library/index.html",revision:"18014a300741891638874a10b32ae931"},{url:"guide/Mind-Mapping/index.html",revision:"1a8b6d05af1bfe306e8eadeccedd938a"},{url:"guide/Package-Features-Analysis/index.html",revision:"ad9f58b3348914655312255ca36e324e"},{url:"guide/Snapshot-Usage/index.html",revision:"ed902b904d1c65d1dcd0ef2e8aa6746d"},{url:"guide/What-is-Native-Library-Architecture/index.html",revision:"928fd80b4d7d6b6f3c6f24ad3e40ed4e"},{url:"guide/What-is-Registered-Component/index.html",revision:"a9f449c98d553c0cc57a40a397654d4b"},{url:"index.html",revision:"c28b5f8a7bc40870318f9d311593ce73"},{url:"slide/index.html",revision:"f8d075ae035f004ea224b1930e056d37"},{url:"tag/index.html",revision:"d1bd221511e936abecf3025d9add06ab"},{url:"timeline/index.html",revision:"8a74de2afa4600345d0c394315e12f23"}],{}),e.cleanupOutdatedCaches()}));
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
