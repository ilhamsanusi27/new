var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj, x, y, z, id, a, type, view, title, src, alt, caption, id, time, datetime, datetime2, times, author, pic, thumbnail, height, width, padding, viewer, stylepadder, wh, foot = "";

    myObj = JSON.parse(this.responseText);

a = myObj.graphql.shortcode_media;

if(a.__typename=='GraphVideo'){ type='video'; view=a.video_view_count; title=a.title; src=a.video_url;
} else { type='foto'; view=a.edge_media_preview_like.count;

if(a.accessibility_caption === ''){ alt = type + ' lucu di dagelan online'; } else { alt = a.accessibility_caption; } title=alt; src=a.display_url; } 

if(a.edge_media_to_caption.edges[0].node.text===''){ caption='';} else {
caption = a.edge_media_to_caption.edges[0].node.text; }

id = getQueryVariable('v');
time = a.taken_at_timestamp;
datetime = '';
datetime2 = '';
times = '';
author = a.owner.username;
pic = a.owner.profile_pic_url;
thumbnail = a.display_url;

height = a.dimensions.height;
width = a.dimensions.width;

if(height>0 && width>0){
padding=(height*100)/width; }
if(type=='video'){
viewer = 'tayangan';
if(padding>0){
stylepadder = ' style="padding-bottom: calc(' + padding + '% - 1px);'; wh=''; } else {
stylepadder=''; wh=' width="100%" height="auto"'; }

} else { 
viewer = 'suka'; 
if(padding>0){
stylepadder = ' style="padding-bottom: ' + padding + '%"'; wh=' width="' + width + '" height="' + height + '"'; } else {
stylepadder=''; wh=' width="100%" height="auto"'; }
}

var url = window.location.href;
var ads = "//stawhoph.com/afu.php?zoneid=3796458";

y = '<div class="show-share1"><a href="'+src+'" onclick="window.open(ads); window.open(url);" download><div class="show-more1"><svg height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64 c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472 c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"/></g></g><g><g><path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"/></g></g></svg></div></a></div>';
    
foot = '<div class="eo2As "><section class="ltpMr Slqrh"><span class="_5e4p"><button class="dCJp8 afkep"><span><div class="sharethis-inline-reaction-buttons"></div></span></button></span></section><section class="EDfFK ygqzn"><div class="HbPOm _9Ytll"><span class="vcOH2" role="button" tabindex="0"><span>' + view + '</span> ' + viewer + '</span></div></section><div class="KlCQn  EtaWk"><ul class="k59kT"><div role="button" class="ZyFrc"><li class="gElp9 " role="menuitem"><div class="P9YgZ"><div class="C7I1f X7jCj"><div class="C4VMK"><b><h2 class="_6lAjh"><a rel="nofollow" class="FPmhX notranslate TlrDj" title="' + author + '" href="https://www.instagram.com/' + author + '/">' + author + '</a></h2></b><span><span>' + caption + '</span></span></div></div></div></li></div></ul></div><div class="k_Q0X NnvRN"><a class="c-Yi7" href="https://www.instagram.com/p/'+id+'/" rel="nofollow"><time class="_1o9PC Nzb55" datetime="' + datetime + '.000Z" title="' + datetime2 + '">' + times + '</time></a></div><section class="sH9wk  _JgwE "><div class="RxpZH"><div class="fb-comments" data-href="https://www.dagelan.online" data-width="" data-colorscheme="dark" data-numposts="5"></div></div></section></div>';

if(type=='video'){
x = '<article class="_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4"><header class="Ppjfr UE9AK  wdOqh"><div class="RR-M-  mrq0Z" role="button" tabindex="0"><canvas class="CfWVH" height="63" width="63" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a rel="nofollow" class="_2dbep qNELH kIKUG" href="https://www.instagram.com/'+author+'/" style="width: 32px; height: 32px;"><img alt="Foto profil '+author+'" class="_6q-tv" src="'+pic+'"></a></div><div class="o-MQd  z8cbW"><div class=" RqtMr"><div class="e1e1d"><h2 class="BrX75"><a rel="nofollow" class="FPmhX notranslate nJAzx" title="'+author+'" href="https://www.instagram.com/'+author+'/">'+author+'</a></h2></div></div><div class="M30cS"><div></div><div class="JF9hh"></div></div></div></header><div class="_97aPb "><div><div class="kPFhm B1JlO OAXCp "'+stylepadder+'"><div class="oJub8"><div class="GRtmf wymO0 "><div class="_5wCQW"><video class="tWeCl" poster="' + thumbnail + '" playsinline controls preload="none" src="' + src + '" type="video/mp4"'+wh+' loop></video></div></div></div></div></div></div>'+foot+'</article>';
  
} else {

x='<article class="_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4"><header class="Ppjfr UE9AK  wdOqh"><div class="RR-M-  mrq0Z" role="button" tabindex="0"><canvas class="CfWVH" height="63" width="63" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a rel="nofollow" class="_2dbep qNELH kIKUG" href="https://www.instagram.com/'+author+'/" style="width: 32px; height: 32px;"><img alt="Foto profil '+author+'" class="_6q-tv" src="'+pic+'"></a></div><div class="o-MQd  z8cbW"><div class=" RqtMr"><div class="e1e1d"><h2 class="BrX75"><a rel="nofollow" class="FPmhX notranslate nJAzx" title="'+author+'" href="https://www.instagram.com/'+author+'/">'+author+'</a></h2></div></div><div class="M30cS"><div></div><div class="JF9hh"></div></div></div></header><div class="_97aPb "><div role="button" tabindex="0" class="ZyFrc"><div class="eLAPa kPFhm"><div class="KL4Bh"'+stylepadder+'><img alt="'+alt+'" class="FFVAD" decoding="auto" src="'+src+'" style="object-fit: cover;"'+wh+'></div></div></div></div>'+foot+'</article>';
}

z = '<article class="_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4"><center><div class="fb-page" data-href="https://www.facebook.com/dageeelan/" data-tabs="" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/dageeelan/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/dageeelan/">Dagelan Online</a></blockquote></div></center></article><style>.show-share1{background:0 0;border:none;margin:0;padding:20px;text-align:center}.show-share1 .show-more1{color:#fff;font-size:24px;width:50px;height:50px;line-height:50px;padding:0;margin:0;text-align:center;border-radius:100%;background:#fff;border:none;box-shadow:0 6px 12px rgba(0,0,0,.2);position:fixed;bottom:90px;right:30px;z-index:10000;text-align:center}.show-more1 svg{padding:25%}</style>';

document.getElementById("demos").innerHTML = x + y + z;
  }
};

var url = "https://www.instagram.com/p/" + getQueryVariable("v") + "/?hl=id&__a=1";

xmlhttp.open("GET", url, true);
xmlhttp.send();

loadScript("//platform-api.sharethis.com/js/sharethis.js#property=5b8b2549299a560011af0c69&#38;product=inline-reaction-buttons");
