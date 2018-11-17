(function(window){var svgSprite='<svg><symbol id="icon-bianji" viewBox="0 0 1024 1024"><path d="M880.288 232.48L560.192 45.12a95.648 95.648 0 0 0-96.64 0L143.68 232.48A96.64 96.64 0 0 0 96 315.904v397.664c0 34.784 18.624 66.88 48.736 84l320 181.92a95.52 95.52 0 0 0 94.496 0l320-181.92A96.576 96.576 0 0 0 928 713.568V315.904a96.64 96.64 0 0 0-47.712-83.424zM864 713.568c0 11.584-6.208 22.304-16.256 28l-320 181.92a31.776 31.776 0 0 1-31.488 0l-320-181.92A32.192 32.192 0 0 1 160 713.568V315.904c0-11.456 6.048-22.048 15.904-27.808l319.872-187.36a31.84 31.84 0 0 1 32.192 0l320.128 187.392c9.856 5.728 15.904 16.32 15.904 27.776v397.664z"  ></path><path d="M512 320a192 192 0 1 0 0 384 192 192 0 0 0 0-384z m0 320a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"  ></path></symbol><symbol id="icon-icon_rukou" viewBox="0 0 1024 1024"><path d="M192 344.64H128V192a96 96 0 0 1 96-96h608a96 96 0 0 1 96 96v640a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96v-126.272h64V832a32 32 0 0 0 32 32h608a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v152.64z"  ></path><path d="M538.688 410.848a32 32 0 1 1 39.808-50.112l148.32 117.856c23.744 18.848 10.4 57.056-19.904 57.056H72.832a32 32 0 1 1 0-64h542.368l-76.48-60.8z"  ></path></symbol><symbol id="icon-rentijiance" viewBox="0 0 1024 1024"><path d="M615.168 583.264c-12.608-20.096-17.504-64.096 30.752-159.84a32.064 32.064 0 0 0-8.064-38.944c-0.448-0.352-0.992-0.48-1.44-0.832 1.216 0.032 2.368 0.352 3.584 0.352 88.224 0 160-71.776 160-160s-71.776-160-160-160-160 71.776-160 160c0 76.16 53.632 139.84 125.024 155.872-2.368 0.992-4.8 1.952-6.944 3.552l-218.976 164.352a32 32 0 1 0 38.4 51.168l130.848-98.208c-10.656 47.68-6.432 86.208 12.608 116.512 9.28 14.848 19.168 28.16 28.608 40.832 29.728 39.904 43.584 60.768 33.888 99.296-7.264 28.768-34.368 80.832-122.336 165.312a32 32 0 0 0 44.352 46.208c80.544-77.344 126.336-141.408 140.064-195.872 17.568-69.664-14.016-112.096-44.608-153.12-8.48-11.424-17.408-23.328-25.76-36.64zM544 224c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96-96-43.072-96-96z"  ></path><path d="M288 516.864a244.8 244.8 0 0 1 72.16-174.24 31.968 31.968 0 1 0-45.248-45.248C256.288 356 224 433.952 224 516.864s32.288 160.896 90.912 219.488a31.904 31.904 0 0 0 45.248 0 31.968 31.968 0 0 0 0-45.248A244.8 244.8 0 0 1 288 516.864z"  ></path><path d="M128 520.096c0-115.392 44.928-223.872 126.528-305.472A31.968 31.968 0 1 0 209.28 169.376 492.736 492.736 0 0 0 64 520.096c0 132.48 51.584 257.024 145.28 350.72a31.904 31.904 0 0 0 45.248 0 31.968 31.968 0 0 0 0-45.248A429.216 429.216 0 0 1 128 520.096zM875.008 737.28c-31.744-73.024-83.104-126.272-152.608-158.336a31.968 31.968 0 1 0-26.816 58.112c55.552 25.632 95.072 66.752 120.704 125.728a1089.92 1089.92 0 0 1 64.8 201.696 32 32 0 0 0 62.528-13.664 1155.296 1155.296 0 0 0-68.608-213.536zM923.744 509.024c-41.856 8.064-79.616 5.024-115.584-9.44-34.624-13.984-59.456-35.776-75.904-66.656a32 32 0 0 0-56.512 30.112c23.488 44.032 60 76.32 108.48 95.872a254.528 254.528 0 0 0 95.968 18.432c18.208 0 36.832-1.856 55.744-5.536a32 32 0 0 0-12.192-62.784z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)