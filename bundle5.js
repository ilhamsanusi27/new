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
    loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/root8.js");

var v = getQueryVariable("v");
var q = getQueryVariable("q");

if (v != "") { var vv = loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/views4.js"); setTimeout(vv, 1000); }
if (q != "") {
var qq = loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/search11.js"); setTimeout(qq, 1000);
} else { var ii = loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/index5.js"); setTimeout(ii, 2000); }

var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/analytics3.js");}(),lazyadsense=!0)},!0);
