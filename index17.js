function grab(id){
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj, x, x0, a, type, view, title, src, alt, caption, author, pic, thumbnail, height, width, padding, viewer, stylepadder, wh, foot = "";

    myObj = JSON.parse(this.responseText);

a = myObj.graphql.shortcode_media;
author = a.owner.username;
if(author.match(/shop/gi)){}else{

if(a.edge_media_to_caption.edges[0].node.text===''){ caption='';} else {
caption = a.edge_media_to_caption.edges[0].node.text; }
    if(caption.match(/order|WhatsApp|togel|Naturaworld|BPOM|pemesanan|62-8|62 8|628|08|bisnis|profit|ness|ready|stock|stok|togel|offcexalted|Bibit indonesia|doctorcostume|casing HP|Limited Edition|springbabykids|ikatrambut|qq|shopee|Min Lose|SLOT GAME|Segera bergabung|ayo bermain/gi)){} else {
    
if(a.__typename=='GraphVideo'){ type='video'; view=a.video_view_count; title=a.title; src=a.video_url;
} else { type='foto'; view=a.edge_media_preview_like.count;

if(a.accessibility_caption === ''){ alt = type + ' lucu di dagelan online'; } else { alt = a.accessibility_caption; } title=alt; src=a.display_url; } 

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

foot = '<div class="eo2As"><section class='ltpMr Slqrh'><span class='fr66n'><a href='/?v=" + id + "&l=" + h + "' title='" + alt + "'><button class='dCJp8 afkep'><svg height='24px' width='24px' x='0px' y='0px' viewBox='0 0 488.85 488.85' style='enable-background:new 0 0 488.85 488.85;' xml:space='preserve'><g><path d='M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3C343.725,302.225,302.225,343.725,251.125,347.025zM248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z'/></g></svg></button></a></span><span class='_15y0l'><button class='dCJp8 afkep' onclick='share()'>Share</button></span><span class="wmtNn"><a href="'+src+'" rel="noindex" download><button class="dCJp8 afkep"><svg height="24px" width="24px" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"></path></g></g><g><g><path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"></path></g></g></svg></button></a></span></section><section class="ygqzn">' + view + ' ' + viewer + '</section>';

if(type=='video'){
x0 = '<div ' + stylepadder + '"><div class="oJub8"><div class="wymO0"><video class="tWeCl" poster="' + thumbnail + '" playsinline controls preload="none" src="' + src + '" type="video/mp4"'+wh+' loop></video></div></div></div>';
} else {
x0 = '<div '+stylepadder+'><img alt="'+alt+'" class="FFVAD" decoding="auto" src="'+src+'" style="object-fit: cover;"'+wh+'></div>';
}

x = '<article class="_8Rm4L"><header class="Ppjfr"><canvas class="CfWVH" height="63" width="63" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a rel="nofollow" class="_2dbep" href="https://www.instagram.com/'+author+'/" style="width: 32px; height: 32px;"><img alt="Foto profil '+author+'" class="_6q-tv" src="'+pic+'"></a><div class="o-MQd z8cbW"><h2><a rel="nofollow" class="nJAzx" title="'+author+'" href="https://www.instagram.com/'+author+'/">'+author+'</a></h2></div></header>'+x0+' '+foot+'</article>';

document.getElementById("demos").innerHTML += x;
  }}}
};

var url = "https://www.instagram.com/p/" + id + "/?hl=id&__a=1";

xmlhttp.open("GET", url, true);
xmlhttp.send();
  }

  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj, i, a, b, c, f, next, h = "";

        myObj = JSON.parse(this.responseText);
        c = getQueryVariable("token");
        f = getQueryVariable("l");

if (f != "") {
 h = f;
} else { h = "lucu"; }

        if (c != "") {
            a = myObj.data.hashtag.edge_hashtag_to_media;
        } else {
            a = myObj.graphql.hashtag.edge_hashtag_to_media;
        }

        b = a.edges;
        next = a.page_info.end_cursor;
     document.getElementById("next").innerHTML = "<form action='/' method='GET' target='_top'><input type='hidden' name='l' value='" + h + "'/><input type='hidden' name='token' value='" + next + "'/><input id='btn-instafeed-load' class='btn' type='submit' value='Load More'/></form>";

        for (i = 0; i < b.length; i++) {
            grab(b[i].node.shortcode);
        } 
    }
};

var d = getQueryVariable("token");
var e = getQueryVariable("l");

if (e != "") {
 var g = e;
} else { var g = "lucu"; }

if (d != "") {
    var url = "https://www.instagram.com/graphql/query/?hl=id&query_hash=90cba7a4c91000cf16207e4f3bee2fa2&variables=%7B%22tag_name%22:%22" + g + "%22,%22first%22:4,%22after%22:%22" + d + "%22%7D";
} else {
    var url = "https://www.instagram.com/explore/tags/" + g + "/?__a=1&hl=id";
}

xmlhttp.open("GET", url, true);
xmlhttp.send();
