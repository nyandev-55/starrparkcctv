var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
function hasDynamicImport() {
  try {
    return new Function("return import('data:text/javascript;base64,Cg==').then(r => true)")();
  } catch(e) {
    return Promise.resolve(false);
  }
}

function browserCheck() {
  hasDynamicImport()
  .then((support) => {
    if(!support) window.location.href = "/unsupported-browser.html";
  })
}
  
if (typeof window !== "undefined") {
  browserCheck();
}
  
}

/*
     FILE ARCHIVED ON 14:28:37 Dec 06, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:05:18 Oct 17, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.407
  load_resource: 127.717
  PetaboxLoader3.resolve: 46.019
  PetaboxLoader3.datanode: 55.015
*/