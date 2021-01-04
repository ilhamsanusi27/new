function a(a,b,c){
  var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
  if(this.readyState==4 && this.status==200){
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, wh, w, x, z, cc, y, v="";

    d=JSON.parse(this.responseText);
u=' class="';
g=d.graphql.shortcode_media;
m=g.owner.username;
if(m.match(/shop|toko|_ofc|ratoebilqiss/gi)){}else{
    
if(g.edge_media_to_caption.edges[0].node.text===''){l='';}else{
l=g.edge_media_to_caption.edges[0].node.text;}
    if(l.match(/coming|soon|coming soon|toko|customcase|Custom Case|hardcase|behel gigi|kawat gigi|rahang|order|WhatsApp|togel|Naturaworld|BPOM|pemesanan|62-8|62 8|628|08|bisnis|profit|nessv|ness v|ready stock|ready stok|togel|offcexalted|shop|dropship|Pengiriman|JNE|Gantungan Huruf|Material Stainless|Rp.|harga|Bibit indonesia|doctorcostume|casing HP|Limited Edition|springbabykids|ikatrambut|qq|shopee|Min Lose|SLOT GAME|Segera bergabung|ayo bermain/gi)){}else{
    
if(g.__typename=='GraphVideo'){h='video'; i=g.video_view_count; j=g.video_url;
}else{h='foto'; i=g.edge_media_preview_like.count;

if(g.accessibility_caption===''){k=h+' lucu di dagelan online';}else{k=g.accessibility_caption;}j=g.display_url;}

n=g.owner.profile_pic_url;
o=g.display_url;

p=g.dimensions.height;
q=g.dimensions.width;

if(p>0 && q>0){
r=(p*100)/q;}
if(h=='video'){
s='tayangan';
if(r>0){
t=' style="padding-bottom: calc('+r+'% - 1px);'; wh='';}else{
t=''; wh=' width="100%" height="auto"';}

}else{
s='suka'; 
if(r>0){
t=' style="padding-bottom: '+r+'%"'; wh=' width="'+q+'" height="'+p+'"';}else{
t=''; wh=' width="100%" height="auto"';}
}

z='<article'+u+'u"><center><div'+u+'fb-group" data-href="https://www.facebook.com/groups/449142473159415" data-width="320" data-show-social-context="true" data-show-metadata="false"></div><div'+u+'fb-page" data-href="https://www.facebook.com/dageeelan/" data-tabs="" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/dageeelan/"'+u+'fb-xfbml-parse-ignore"><a href="https://www.facebook.com/dageeelan/">Dagelan Online</a></blockquote></div></center></article>';

cc='<div'+u+'al am"><div'+u+'an"><div'+u+'ao">'+l+'</div></div></div>';

if(h=='video'){
x='<svg height="20px" width="20px" x="0px" y="0px" viewBox="0 0 488.85 488.85" style="enable-background:new 0 0 488.85 488.85;" xml:space="preserve"><g><path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3C343.725,302.225,302.225,343.725,251.125,347.025zM248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/></g></svg>';
}else{
x='<svg height="15px" width="15px" x="0px" y="0px" viewBox="0 0 241.66 241.66" style="enable-background:new 0 0 241.66 241.66;" xml:space="preserve"><g id="Like_2"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M208.632,133.579c10.345,0.472,19.121-7.677,19.574-18.203c0.453-10.526-6.821-19.989-17.174-20.444l-68.73-8.63c0,0,14.323-23.958,14.323-59.455C156.625,3.184,139.72,0,129.778,0c-7.821-0.003-9.927,15.151-9.927,15.151h-0.016c-1.771,9.717-4.077,18.203-12.09,33.827C98.775,66.49,86.559,64.847,72.297,80.445c-2.517,2.747-5.899,7.281-9.195,12.86c-0.269,0.295-0.52,0.708-0.763,1.289c-0.294,0.692-0.646,1.172-0.956,1.812c-0.546,1.003-1.083,2.006-1.611,3.059c-8.827,8.827-22.579,7.925-28.435,7.925c-11.746,0-17.898,6.825-17.898,17.898l-0.004,81.828c0,12.423,5.083,16.613,17.903,16.613h17.898c9.011,0,16.067,5.166,26.848,8.949c14.767,5.116,36.821,8.956,74.811,8.956c6.644,0,27.251,0.025,27.251,0.025c6.309,0,11.377-2.882,15.034-6.362c1.392-1.323,2.844-3.245,3.465-6.995c0.101-0.581,0.209-3.017,0.193-3.346c0.477-10.728-6.008-14.612-9.682-15.835c0.1-0.034,0.034-0.126,0.234-0.118l11.663,0.522c10.353,0.472,20.572-6.986,20.572-19.669c0-10.517-8.525-17.934-18.844-18.439l6.184,0.287c10.352,0.455,19.103-7.694,19.582-18.22C226.998,142.959,218.977,134.052,208.632,133.579z"/></g></svg>';
}

v='<div'+u+'m"><section'+u+'w x"><span'+u+'ar"><a href="/?v='+a+'&l='+b+'" title="'+k+'"><button'+u+'y z">'+x+'</button></a></span><span'+u+'aq"><span'+u+'y z"> '+i+' '+s+'</span></span><span'+u+'ak"><a href="'+j+'" rel="noindex" download><button'+u+'y z"><svg height="20px" width="20px" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"></path></g></g><g><g><path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"></path></g></g></svg></button></a></span></section>';

if(h=='video'){
f='<div '+t+'"><div'+u+'ag"><div'+u+'ah"><video'+u+'ai" poster="'+o+'" playsinline controls preload="none" src="'+j+'" type="video/mp4"'+wh+'></video></div></div></div>';
}else{
f='<div '+t+'><img alt="'+k+'"'+u+'aj" decoding="auto" src="'+j+'" style="object-fit: cover;"'+wh+'></div>';
}

if(c!==undefined){w=v+cc;}else{w=v;}

y='<article'+u+'u"><header'+u+'v"><canvas height="63" width="63" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a rel="nofollow"'+u+'ac" href="https://www.instagram.com/'+m+'/" style="width: 32px; height: 32px;"><img alt="Foto profil '+m+'"'+u+'ad" src="'+n+'"></a><div'+u+'ae af"><h2><a rel="nofollow"'+u+'ap" title="'+m+'" href="https://www.instagram.com/'+m+'/">'+m+'</a></h2></div></header>'+f+' '+w+'</article>';

if(c!==undefined){e=y+z; document.getElementById("d").innerHTML +=e;}else{e=y; document.getElementById("e").innerHTML +=e;}

 }}}
};

var url="https://www.instagram.com/p/"+a+"/?hl=id&__a=1";

xmlhttp.open("GET", url, true);
xmlhttp.send();
 }

var v=gQV("v");
var l=gQV("l");
a(v,l,"view");

  var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var g, i, k, b, c, f, j, h="";
        g=JSON.parse(this.responseText);
        c=gQV("token");
        f=gQV("l");

if(f!=""){
 h=f;
}else{h="lucu";}

        if(c!=""){
            k=g.data.hashtag.edge_hashtag_to_media;
       }else{
            k=g.graphql.hashtag.edge_hashtag_to_media;
       }

        b=k.edges;
        j=k.page_info.end_cursor;
      document.getElementById("next").innerHTML="<form action='/' method='GET' target='_top'><input type='hidden' name='l' value='"+h+"'/><input type='hidden' name='token' value='"+j+"'/><input id='c' type='submit' value='Load More'/></form>";

        for(i=0; i < b.length; i++){
            a(b[i].node.shortcode,h);
       }
   }
};

var d=gQV("token");
var e=gQV("l");

if(e!=""){
 var g=e;
}else{var g="lucu";}

if(d!=""){
    var url="https://www.instagram.com/graphql/query/?hl=id&query_hash=90cba7a4c91000cf16207e4f3bee2fa2&variables=%7B%22tag_name%22:%22"+g+"%22,%22first%22:4,%22after%22:%22"+d+"%22%7D";
}else{
    var url="https://www.instagram.com/explore/tags/"+g+"/?__a=1&hl=id";
}

xmlhttp.open("GET", url, true);
xmlhttp.send();