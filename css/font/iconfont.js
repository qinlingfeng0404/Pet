(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-jiantou" viewBox="0 0 1024 1024">'+""+'<path d="M74.012156 575.733557l377.651153-299.78983c25.518187-24.606421 66.929342-24.606421 92.488461 0l377.611244 299.78983c25.559119 24.617677 25.559119 64.522526 0 89.12997l-11.55108 11.142781c-25.538653 24.607444-66.949808 24.607444-92.489484 0L497.887073 430.897867 178.051697 676.006308c-25.518187 24.607444-66.929342 24.607444-92.488461 0l-11.55108-11.142781C48.47248 640.256082 48.47248 600.351234 74.012156 575.733557z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-sanjiao-copy-copy" viewBox="0 0 1024 1024">'+""+'<path d="M160.962 686.975l351.397-350.679 350.679 351.397z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)