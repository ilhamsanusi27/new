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

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj, a, type, view, title, src, alt, caption, id, time, datetime, datetime2, times, author, pic, thumbnail, height, width, padding, viewer, stylepadder, wh, foot = "";

    myObj = JSON.parse(this.responseText);

a = myObj.graphql.shortcode_media;

if(a.__typename=='GraphVideo'){ type='video'; view=a.video_view_count; title=a.title; src=a.video_url;
} else { type='foto'; view=a.edge_media_preview_like.count;

if(a.accessibility_caption === ''){ alt = type + ' lucu di dagelan online'; } else { alt = a.accessibility_caption; } title=alt; src=a.display_url; } 

if(a.edge_media_to_caption.edges[0].node.text===''){ caption='';} else {
caption = a.edge_media_to_caption.edges[0].node.text; }

id = getQueryVariable('id');
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

foot = '<div class="eo2As "><section class="ltpMr Slqrh"><span class="_5e4p"><button class="dCJp8 afkep"><span><div class="sharethis-inline-reaction-buttons"></div></span></button></span></section><section class="EDfFK ygqzn"><div class="HbPOm _9Ytll"><span class="vcOH2" role="button" tabindex="0"><span>' + view + '</span> ' + viewer + '</span></div></section><div class="KlCQn  EtaWk"><ul class="k59kT"><div role="button" class="ZyFrc"><li class="gElp9 " role="menuitem"><div class="P9YgZ"><div class="C7I1f X7jCj"><div class="C4VMK"><h2 class="_6lAjh"><a rel="nofollow" class="FPmhX notranslate TlrDj" title="' + author + '" href="https://www.instagram.com/' + author + '/">' + author + '</a></h2><span><span>' + caption + '</span></span></div></div></div></li></div></ul></div><div class="k_Q0X NnvRN"><a class="c-Yi7" href="https://www.instagram.com/p/'+id+'/" rel="nofollow"><time class="_1o9PC Nzb55" datetime="' + datetime + '.000Z" title="' + datetime2 + '">' + times + '</time></a></div><section class="sH9wk  _JgwE "><div class="RxpZH"><div class="fb-comments" data-href="https://dagelan.online/" data-width="" data-colorscheme="light" data-numposts="5"></div></div></section></div>';

if(type=='video'){

document.write('<article class="_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4"><header class="Ppjfr UE9AK  wdOqh"><div class="RR-M-  mrq0Z" role="button" tabindex="0"><canvas class="CfWVH" height="63" width="63" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a rel="nofollow" class="_2dbep qNELH kIKUG" href="https://www.instagram.com/'+author+'/" style="width: 32px; height: 32px;"><img alt="Foto profil '+author+'" class="_6q-tv" src="'+pic+'"></a></div><div class="o-MQd  z8cbW"><div class=" RqtMr"><div class="e1e1d"><h2 class="BrX75"><a rel="nofollow" class="FPmhX notranslate nJAzx" title="'+author+'" href="https://www.instagram.com/'+author+'/">'+author+'</a></h2></div></div><div class="M30cS"><div></div><div class="JF9hh"></div></div></div></header><div class="_97aPb "><div><div class="kPFhm B1JlO OAXCp "'+stylepadder+'"><div class="oJub8"><div class="GRtmf wymO0 "><div class="_5wCQW"><video class="tWeCl" poster="' + thum + '" playsinline controls preload="none" src="' + src + '" type="video/mp4"'+wh+' loop></video></div></div></div></div></div></div>'+foot+'</article>');

} else {

document.write('<article class="_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4"><header class="Ppjfr UE9AK  wdOqh"><div class="RR-M-  mrq0Z" role="button" tabindex="0"><canvas class="CfWVH" height="63" width="63" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a rel="nofollow" class="_2dbep qNELH kIKUG" href="https://www.instagram.com/'+author+'/" style="width: 32px; height: 32px;"><img alt="Foto profil '+author+'" class="_6q-tv" src="'+pic+'"></a></div><div class="o-MQd  z8cbW"><div class=" RqtMr"><div class="e1e1d"><h2 class="BrX75"><a rel="nofollow" class="FPmhX notranslate nJAzx" title="'+author+'" href="https://www.instagram.com/'+author+'/">'+author+'</a></h2></div></div><div class="M30cS"><div></div><div class="JF9hh"></div></div></div></header><div class="_97aPb "><div role="button" tabindex="0" class="ZyFrc"><div class="eLAPa kPFhm"><div class="KL4Bh"'+stylepadder+'><img alt="'+alt+'" class="FFVAD" decoding="auto" src="'+src+'" style="object-fit: cover;"'+wh+'></div></div></div></div>'+foot+'</article>');
}

  }
};

var url = "https://www.instagram.com/p/" + getQueryVariable("id") + "/?hl=id&__a=1";

xmlhttp.open("GET", url, true);
xmlhttp.send();
