"use strict";var precacheConfig=[["/index.html","360caef3f04764a5cccfe13bbdadbb38"],["/static/css/main.3c284f74.css","fa64fe87abedb5d04a628b86059e1334"],["/static/js/0.10b9c151.chunk.js","8d091c634961d45fe215a80edefad1d5"],["/static/js/1.02e1edde.chunk.js","3eeb773adcbab53e68be574ec91c5b31"],["/static/js/10.cfad5f97.chunk.js","1ef62bc996183e4cd041b1dd57a2d1cc"],["/static/js/11.8aa974ca.chunk.js","da19335cadeffb3fc46a7730d58fa85f"],["/static/js/12.274bb155.chunk.js","a0e8868db70e2c3f1841dfa25038154e"],["/static/js/13.4d129bab.chunk.js","f17dd0dbb79ecbe7a452cd0dbcd63a84"],["/static/js/14.83bebd46.chunk.js","f903adedb6c1d6bf1d161765cbc6f1c3"],["/static/js/15.539d0258.chunk.js","9a21505a22d7d2dec05a0c8286d43e3f"],["/static/js/2.2e63e4ba.chunk.js","6e8340183b63f0519d9a79a272491a6e"],["/static/js/3.43a92469.chunk.js","d90e04fe564f9b8861355b1c1494e59f"],["/static/js/4.ef521dfc.chunk.js","3793bc6cfda4f841cc4538a62063d862"],["/static/js/5.27bf4d64.chunk.js","03c93d3c54b311b38969fbb624041116"],["/static/js/6.336f352d.chunk.js","2f5427c6e89498852828308ec564a45d"],["/static/js/7.7884cfe7.chunk.js","ff43b7f4862f01a2eaa55b720bfc2cac"],["/static/js/8.97bfa645.chunk.js","c8c88e06d80b2cff57526227c8c5efcd"],["/static/js/9.eceaf44c.chunk.js","80ad7d82ed6d77504593945fbbb6f537"],["/static/js/main.d75cf883.js","84d065af49736cc532167a3d8decb85f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,c){var a=new URL(e);return c&&a.pathname.match(c)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],c=new URL(t,self.location),a=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,c),e=urlsToCacheKeys.has(n));var a="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});