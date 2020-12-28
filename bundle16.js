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
    loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/root12.js");

var v = getQueryVariable("v");
var q = getQueryVariable("q");
var p1 = getQueryVariable("p1");
var p2 = getQueryVariable("p2");
var at = getQueryVariable("at");

if (v != "") { setTimeout(loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/views10.js"), 1000); }
if (q != "") {
setTimeout(loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/search11.js"), 1000);
} else { setTimeout(loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/index7.js"), 2000); }

var lazy=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazy||0!=document.body.scrollTop&&!1===lazy)&&(!function(){

//loadScript("https://cdn.statically.io/gh/ilhamsanusi27/new/main/analytics5.js");

  //facebook pixel
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2283154871992432');
  fbq('track', 'PageView');
  
  //facebook js
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2512602489066986',
      cookie     : true,
      xfbml      : true,
      version    : 'v9.0'
    });
      
    FB.AppEvents.logPageView();   
  };

      function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

 //Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZDNTZZ');

  //google analytics
loadScript("https://www.googletagmanager.com/gtag/js?id=UA-121877700-7","","","async");
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-121877700-7');

//propeller
//notif
if (p1 != "") {
loadScript("https://choupsee.com/pfe/current/tag.min.js?z=3796448","data-cfasync","false","async");}

//Multitag
if (p2 != "") {
setTimeout(loadScript("https://iclickcdn.com/tag.min.js","data-zone","3797617"), 60000); }

if (at != "") {
loadScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58a25e0fe19119b4","","","","type");      document.getElementById("at").style.height = "80px";
      }

}(),lazy=!0)},!0);
