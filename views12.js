var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj, x, x0, z, id, a, type, view, title, src, alt, caption, author, pic, thumbnail, height, width, padding, viewer, stylepadder, wh, foot = "";

    myObj = JSON.parse(this.responseText);

a = myObj.graphql.shortcode_media;

if(a.__typename=='GraphVideo'){ type='video'; view=a.video_view_count; title=a.title; src=a.video_url;
} else { type='foto'; view=a.edge_media_preview_like.count;

if(a.accessibility_caption === ''){ alt = type + ' lucu di dagelan online'; } else { alt = a.accessibility_caption; } title=alt; src=a.display_url; } 

if(a.edge_media_to_caption.edges[0].node.text===''){ caption='';} else {
caption = a.edge_media_to_caption.edges[0].node.text; }

id = getQueryVariable('v');
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

foot = '<div class="eo2As"><section class="ltpMr Slqrh"><button class="dCJp8 afkep"><div class='addthis_inline_share_toolbox'></div></button><span class="wmtNn"><a href="'+src+'" rel="noindex" download><button class="dCJp8 afkep"><svg height="24px" width="24px" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"></path></g></g><g><g><path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"></path></g></g></svg></button></a></span></section><section class="ygqzn">' + view + ' ' + viewer + '</section><div class="KlCQn EtaWk"><div class="P9YgZ"><div class="X7jCj">' + caption + '</div></div></div>';

if(type=='video'){
x0 = '<div ' + stylepadder + '"><div class="oJub8"><div class="wymO0"><video class="tWeCl" poster="' + thumbnail + '" playsinline controls preload="none" src="' + src + '" type="video/mp4"'+wh+' loop></video></div></div></div>';
} else {
x0 = '<div '+stylepadder+'><img alt="'+alt+'" class="FFVAD" decoding="auto" src="'+src+'" style="object-fit: cover;"'+wh+'></div>';
}

x = '<article class="_8Rm4L"><header class="Ppjfr"><canvas class="CfWVH" height="63" width="63" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a rel="nofollow" class="_2dbep" href="https://www.instagram.com/'+author+'/" style="width: 32px; height: 32px;"><img alt="Foto profil '+author+'" class="_6q-tv" src="'+pic+'"></a><div class="o-MQd z8cbW"><h2><a rel="nofollow" class="nJAzx" title="'+author+'" href="https://www.instagram.com/'+author+'/">'+author+'</a></h2></div></header>'+x0+' '+foot+'</article>';

z = '<article class="_8Rm4L"><center><div class="fb-page" data-href="https://www.facebook.com/dageeelan/" data-tabs="" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/dageeelan/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/dageeelan/">Dagelan Online</a></blockquote></div></center></article>';

document.getElementById("demos").innerHTML = x + z;
  }
};

var url = "https://www.instagram.com/p/" + getQueryVariable("v") + "/?hl=id&__a=1";

xmlhttp.open("GET", url, true);
xmlhttp.send();
