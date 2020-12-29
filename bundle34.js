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

loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/root14.js");

var q = getQueryVariable("q");

if (q != "") {
setTimeout(loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/search11.js"), 1000);
} else { setTimeout(loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/index21.js"), 2000); }

var lazy=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazy||0!=document.body.scrollTop&&!1===lazy)&&(!function(){loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/analytics6.js");}(),lazy=!0)},!0);
