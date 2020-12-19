function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
    loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/root7.js");

var v = getQueryVariable("v");
var q = getQueryVariable("q");

if (v != "") { var vv = loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/views2.js"); setTimeout(vv, 1000); }
if (q != "") {
var qq = loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/search11.js"); setTimeout(qq, 1000);
} else { var ii = loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/index5.js"); setTimeout(ii, 2000); }

if (window.addEventListener) {
window.addEventListener("load", downloadJSAtOnload, false); }
else if (window.attachEvent) {
window.attachEvent("onload", downloadJSAtOnload); }
else { window.onload = downloadJSAtOnload; }
