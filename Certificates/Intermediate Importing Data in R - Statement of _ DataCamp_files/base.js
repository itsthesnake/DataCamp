!function(t){var e,n,a,o={async:1,pagePath:"/banner.js"},c="dc_consent";function i(){return window.location.hostname.split(".").slice(-2).join(".")}function s(){var n=i();return"datacamp-staging.com"===n||"localhost"===n?"datacamp-staging.com":"datacamp.com"}function r(n){return"https://"+n.subdomain+"."+n.domain+n.path}function m(n){var e=document.createElement("script");e.src=r({subdomain:"compliance",domain:s(),path:n.pagePath}),e.async=n.async,document.head.appendChild(e)}function d(n){for(var e=0;e<t.length;e++)-1<n.indexOf(t[e].category)&&m(t[e])}function p(n){var e=document.cookie.match("(^|;) ?"+n+"=([^;]*)(;|$)");return e?decodeURIComponent(e[2]):null}p(c)?d((e=JSON.parse(p(c)))?Object.keys(e).filter(function(n){return"version"!==n&&e[n]}):[]):(d(["essential","functional","performance","advertisement"]),n=function(n){!0===n||"true"===n?m(o):document.cookie=c+'={"version":"1.0.0","essential":1,"functional":1,"performance":1,"advertisement":1};path=/;domain='+i()+";"},(a=new XMLHttpRequest).onreadystatechange=function(){4==a.readyState&&n(a.response)},a.open("GET",r({subdomain:"compliancy",domain:s(),path:"/geolocation"})),a.responseType="json",a.send())}([{async:!0,pagePath:"/scripts/gtm.js",category:"advertisement"}]);