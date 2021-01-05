loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/root2.js");

var lazy=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazy||0!=document.body.scrollTop&&!1===lazy)&&(!function(){loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/analytics.js");}(),lazy=!0)},!0);

var obj0=document.getElementById("post1");
var obj1=document.getElementById("post2");
var s=obj1.innerHTML;
var t=s.substr(0,s.length/2);
var r=t.lastIndexOf("</p>");
if(r>0) {obj0.innerHTML=s.substr(0,r);obj1.innerHTML= "<" + s.substr(r+1);}

function random_posts(t){for(var e=0;e<tampil;e++){for(var a=t.feed.openSearch$totalResults.$t,o=1+Math.round(Math.random()*(a-1)),l=t.feed.entry[o],r=l.title.$t,n=0;n<l.link.length;n++)if("alternate"==l.link[n].rel){var i=l.link[n].href;if("media$thumbnail"in l)var d=l.media$thumbnail.url;else d="https://4.bp.blogspot.com/-atF9AaH_YEI/WXc5HKoFZmI/AAAAAAAAAGE/LoIPxdwBHecNVesXy9J0AQJwdIuWFYu0QCLcBGAs/s1600/no_thumb.png"}var m='<li><img alt="'+r+'" src="'+d+'"/><div><a href="'+i+'?utm_source=randompost" onclick="fbq(\'trackCustom\', \'RandomPost\')">'+r+'</a></div><div style="clear:both"></div></li>';document.getElementById("i").innerHTML+=m}}
