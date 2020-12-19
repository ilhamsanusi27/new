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
      version    : 'v6.0'
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
  
  //google analytics
loadScript("https://www.googletagmanager.com/gtag/js?id=UA-121877700-7");
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-121877700-7');

//ads
loadScript("https://choupsee.com/pfe/current/tag.min.js?z=3796448");