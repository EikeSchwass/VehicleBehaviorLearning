(function(){var f=this;function g(a){return void 0!==a}function h(a,c,b){return a.call.apply(a.bind,arguments)}function k(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}}
function l(a,c,b){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:k;return l.apply(null,arguments)}function m(){var a=n,c=["glue","tracking","AutoTrack"],b=f;c[0]in b||!b.execScript||b.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)!c.length&&g(a)?b[d]=a:b=b[d]?b[d]:b[d]={}}
Function.prototype.bind=Function.prototype.bind||function(a,c){if(1<arguments.length){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return l.apply(null,b)}return l(this,a)};function n(a,c){if("string"!=typeof a||!p.test(a))throw"trackingId must be a string";var b;if(b=g(c))b=typeof c,b=!("object"==b&&null!=c||"function"==b);if(b)throw"Argument opt_conf must be an object";this.i=a;this.a=c||{};this.c=this.a._globalName||"ga";delete this.a._globalName;this.h=g(this.a._trackPageview)?this.a._trackPageview:!0;delete this.a._trackPageview;this.g=g(this.a._trackLinks)?this.a._trackLinks:!0;delete this.a._trackLinks;q(this);if(!g(this.a.cookiePath)){b=this.a;var d=r.match(t);
b.cookiePath=d&&d[1]||"/"}this.b("create",this.i,this.a);g(this.a.anonymizeIp)||this.b("set","anonymizeIp",!0);g(this.a.historyImportTask)||this.b("set","historyImportTask",!1);this.h&&this.b("send","pageview");u(this.f,this)}m();var p=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,r=location.pathname,t=/^(\/([^;,\/]*\/)?)/;
function q(a){var c=a.c;a=document.createElement("script");var b=document.getElementsByTagName("script")[0];window.GoogleAnalyticsObject=c;window[c]=window[c]||function(){(window[c].q=window[c].q||[]).push(arguments)};window[c].l=1*new Date;a.async=!0;a.src="//www.google-analytics.com/analytics.js";b.parentNode.insertBefore(a,b)}
n.prototype.f=function(){v(document.body,"click",function(a){a=a||window.event;a=a.target||a.srcElement;a=3==a.nodeType?a.parentNode:a;do{var c=a,b=c.getAttribute("data-ga-event"),d=void 0;b?(c=b,b=void 0,c=c.replace(/\'?\s*,\s*\'?/g,"_SEPARATOR_"),c=c.replace(/(^\'|\'$)/g,""),b=c.split("_SEPARATOR_"),d=w(b[0],b[1],b[2],b[3])):this.g&&c.nodeName&&"a"==c.nodeName.toLowerCase()&&(d=w(c.hostname!=location.hostname&&c.hostname?"AutoTrack: Outbound Click":"AutoTrack: Link Click",c.getAttribute("href"),
r));d&&this.b("send","event",d);if(a==document.body)break}while(a=a.parentNode)},this)};n.prototype.b=function(a){window[this.c].apply(window,arguments)};function w(a,c,b,d){var e={};d&&(d=parseFloat(d));if(!a||!c||g(d)&&isNaN(d))return!1;e.eventCategory=a;e.eventAction=c;b&&(e.eventLabel=b.toString());d&&(e.eventValue=d);return e}function v(a,c,b,d){d&&(b=l(b,d));a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,b)}
function u(a,c){c&&(a=l(a,c));if(document.addEventListener)try{v(document,"DOMContentLoaded",a)}catch(b){v(window,"load",a)}else if(!document.uniqueID&&document.expando)var d=document.createElement("tempnode"),e=window.setInterval(function(){try{d.doScroll("left")}catch(b){return}window.clearInterval(e);e=d=null;a()},50);else"readyState"in document?e=window.setInterval(function(){/loaded|complete/.test(document.readyState)&&(window.clearInterval(e),e=null,a())},50):v(window,"load",a)}m();})()