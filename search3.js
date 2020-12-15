function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj, i, x, a, name, count, title = "";

        myObj = JSON.parse(this.responseText);

        a = myObj.hashtags;
        x = '';

        for (i = 0; i < a.length; i++) {

            name = a[i].hashtag.name;
            count = a[i].hashtag.media_count;
            title = a[i].hashtag.search_result_subtitle;

            x += '<li><a class="-qQT3" href="/search/label/' + name + '"><div class=" Igw0E rBNOH eGOV_ ybXk5 _4EzTm XfCBB HVWg4 "><div class=" Igw0E IwRSH eGOV_ _4EzTm yC0tu "><div class="FuWoR j44N4 zlwcS " style="width: 44px; height: 44px;"><span aria-label="Tagar" class="glyphsSpriteHashtag__outline__24__grey_9 u-__7"></span></div></div><div class=" Igw0E IwRSH YBx95 vwCYk "><div class=" Igw0E IwRSH eGOV_ _4EzTm " id="f131bea878af53c"><div class="_7UhW9 xLCgt MMzan KV-D4 fDxYl "><div class="_7UhW9 xLCgt qyrsm KV-D4 uL8Hv ">#' + name + '</div></div></div><div class=" Igw0E IwRSH eGOV_ _4EzTm DhRcB " id="f1e944189ae015"><div class="_7UhW9 xLCgt MMzan _0PwGv fDxYl "><span class=" "><span class=" ">' + title + '</span> </span></div></div></div></div></a></li>';

        }

var y = "
<style>
/*Search Box*/
#search-box{position:relative;margin:0 20;border:1px solid #ccc;padding:5px;border-radius:4px} #search-form{height:40px;background-color:#fff;overflow:hidden} #search-text{font-size:14px;color:#ddd;border-width:0;background:transparent;line-height:15px} #search-box input[type="text"]{width:90%;padding:10px 0 5px 1em;color:#333;outline:none} #search-button{position:absolute;top:5px;right:5px;height:40px;width:80px;color:#fff;text-align:center;border-width:0;background-color:#1a7db7;cursor:pointer;text-transform:uppercase;border-radius:3px;outline:0} #search-button:hover{background:#333}
</style>

  <div id='search-box'> <form action='/search' id='search-form' method='get' target='_top'> <input id='search-text' name='q' placeholder='Cari apa...?' type='text'/> <button id='search-button' type='submit'><span>Search</span></button></form></div>

<style>
.f5C5x{color:#999;margin:11px 0 15px}._1n6a3{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._1n6a3{background-color:transparent;border:0;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:150px}._1n6a3:active{opacity:.5}.V48c7{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.V48c7{white-space:nowrap;font-size:12px}.V48c7,.V48c7:visited{color:#999}.e1e1d{max-width:100%;overflow:hidden}.e1e1d{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1}._-v0-{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-image:-webkit-gradient(linear,right top,left bottom,from(#bf00ff),color-stop(#ed4956),to(#ff8000));background-image:-webkit-linear-gradient(top right,#bf00ff,#ed4956,#ff8000);background-image:linear-gradient(to bottom left,#bf00ff,#ed4956,#ff8000);border:1px solid #fff;border-radius:50%;color:#fff;font-size:13px;height:17px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:17px;margin-top:-15px;position:absolute;width:17px}._7A2D8{height:100%;width:100%}@-webkit-keyframes like-button-animation{0%,to{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.2);transform:scale(1.2)}50%{-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes like-button-animation{0%,to{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.2);transform:scale(1.2)}50%{-webkit-transform:scale(.95);transform:scale(.95)}}@-webkit-keyframes like-heart-animation{0%,to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}15%{opacity:.9;-webkit-transform:scale(1.2);transform:scale(1.2)}30%{-webkit-transform:scale(.95);transform:scale(.95)}45%,80%{opacity:.9;-webkit-transform:scale(1);transform:scale(1)}}@keyframes like-heart-animation{0%,to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}15%{opacity:.9;-webkit-transform:scale(1.2);transform:scale(1.2)}30%{-webkit-transform:scale(.95);transform:scale(.95)}45%,80%{opacity:.9;-webkit-transform:scale(1);transform:scale(1)}}

.a65--{-webkit-align-content:space-around;-ms-flex-line-pack:distribute;align-content:space-around}.Igw0E{-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.rBNOH{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.IwRSH{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.ybXk5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.eGOV_{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.YBx95{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.vwCYk{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;min-height:0;min-width:0}._4EzTm{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.yC0tu{margin-right:12px}._748V-{margin-right:36px}.DhRcB{margin-top:8px}.XfCBB{padding-left:16px;padding-right:16px}.c420d{padding-left:32px;padding-right:32px}.HVWg4{padding-bottom:8px;padding-top:8px}.A086a,a.A086a{color:transparent}.sDN5V{--f52:153,153,153;--h5f:56,151,240;--g2b:237,73,86;--c37:237,73,86;--a96:255,255,255;--f36:237,73,86;--eca:255,255,255;--jb7:0,0,0;--fa7:223,239,255;--c74:112,192,80;--eac:237,73,86}.sDN5V{--i1d:38,38,38;--edc:199,199,199;--b38:219,219,219;--c90:239,239,239;--b3f:250,250,250;--cdc:255,255,255;--f07:38,38,38;--fe0:0,53,105;--f23:255,255,255;--b6a:219,219,219;--d0b:219,219,219;--cf6:178,178,178;--jd9:0,0,0;--j64:54,54,54;--a97:243,243,243;--d20:38,38,38}@-webkit-keyframes IGCoreSpinnerSpin8{0%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}@keyframes IGCoreSpinnerSpin8{0%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}@-webkit-keyframes IGCoreSpinnerSpin12{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes IGCoreSpinnerSpin12{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.FuWoR{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:0 0;border-radius:50%;border-style:solid;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative}.j44N4{border-color:#efefef}.zlwcS{border-width:1px}.u-__7{display:block}.glyphsSpriteHashtag__outline__24__grey_9{background-image:url(https://instagram.com/static/bundles/es6/sprite_glyphs_97445ca87e73.png/97445ca87e73.png)}.glyphsSpriteHashtag__outline__24__grey_9{background-repeat:no-repeat;background-position:-390px -298px;height:24px;width:24px}@media (min-device-pixel-ratio:1.5),(-webkit-min-device-pixel-ratio:1.5),(min-resolution:144dpi){.glyphsSpriteHashtag__outline__24__grey_9{background-image:url(https://instagram.com/static/bundles/es6/sprite_glyphs_2x_b9c774a3c875.png/b9c774a3c875.png)}.glyphsSpriteHashtag__outline__24__grey_9{background-size:411px 393px;background-position:-350px -294px}}.xLCgt{font-size:14px;line-height:18px;margin:-3px 0 -4px}.MMzan{font-weight:400}.qyrsm{font-weight:600}.KV-D4{color:#262626;color:rgba(var(--i1d,38,38,38),1)}._0PwGv{color:#999;color:rgba(var(--f52,153,153,153),1)}.uL8Hv{display:block}._7UhW9 ._7UhW9{display:inline!important;margin:0!important}.fDxYl{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._08v79{margin:16px 32px;text-align:center}._08v79>:nth-child(n+2){padding-top:16px}._08v79:first-child{margin-top:32px}@-webkit-keyframes IGCoreModalShow{0%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes IGCoreModalShow{0%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes IGCoreNotificationSlideIn{0%{top:-50px}to{top:6px}}@keyframes IGCoreNotificationSlideIn{0%{top:-50px}to{top:6px}}.-qQT3{cursor:pointer}.-qQT3:active{opacity:1}.-qQT3:hover{background-color:#fafafa;background-color:rgba(var(--b3f,250,250,250),1)}@-webkit-keyframes IGCorePill_slideIn{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes IGCorePill_slideIn{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes IGCoreToastShow{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1.5);transform:translate(-50%,-50%) scale(1.5)}to{opacity:.9;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}}@keyframes IGCoreToastShow{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1.5);transform:translate(-50%,-50%) scale(1.5)}to{opacity:.9;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}}@-webkit-keyframes IGCoreToastHide{0%{opacity:.9}to{opacity:0}}@keyframes IGCoreToastHide{0%{opacity:.9}to{opacity:0}}

@supports (margin-bottom:env(safe-area-inset-bottom)){.f11OC:not(.X6gVd){margin-bottom:env(safe-area-inset-bottom)}}@-webkit-keyframes GradientRotation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes GradientRotation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@supports (padding:max(0px)){.i6Izp{padding-left:max(16px,env(safe-area-inset-left));padding-right:max(16px,env(safe-area-inset-right))}}@supports (margin:max(0px)){.Ucj5b{margin-left:max(16px,env(safe-area-inset-left));margin-right:max(16px,env(safe-area-inset-right))}}@supports (bottom:env(safe-area-inset-bottom)) and (height:env(safe-area-inset-bottom)){.KGiwt{bottom:env(safe-area-inset-bottom)}.KGiwt::after{background-color:#fff;content:'';height:env(safe-area-inset-bottom);left:0;position:absolute;top:44px;right:0}}@supports (margin-bottom:env(safe-area-inset-bottom)){.Z_Gl2{margin-bottom:env(safe-area-inset-bottom)}}

a,b,body,div,html,label,li,span,u,ul{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}body{line-height:1}ul{list-style:none}div{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;border:0 solid #000;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0;padding:0;position:relative}body{background:#fff;background:rgba(var(--cdc,255,255,255),1);overflow-y:scroll}body:-webkit-full-screen{height:100%;width:100%}body:-moz-full-screen{height:100%;width:100%}body:-ms-fullscreen{height:100%;width:100%}body:fullscreen{height:100%;width:100%}html{-webkit-text-size-adjust:100%}body,html{height:100%}.js-focus-visible :focus:not([data-focus-visible-added]){outline:0}body{color:#262626;color:rgba(var(--i1d,38,38,38),1);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:18px}a,a:visited{color:#003569;color:rgba(var(--fe0,0,53,105),1);text-decoration:none}a:active{opacity:.5}._34d9n{position:absolute;right:10px;top:10px;z-index:1}.SnxPi{margin:8px 0}@-webkit-keyframes spinner-spin8{0%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}@keyframes spinner-spin8{0%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}@-webkit-keyframes spinner-spin12{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-spin12{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes LoadingBarProgress{0%{background-position:0 0}to{background-position:125% 0}}@keyframes LoadingBarProgress{0%{background-position:0 0}to{background-position:125% 0}}@-webkit-keyframes LoadingBarEnter{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes LoadingBarEnter{0%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}

ul.SnxPi li{display:inline-block;}
</style>";
        document.getElementById("demoss").innerHTML = y + '<ul class="SnxPi">' + x + '</ul>';

    }
};

var d = getQueryVariable("q");
var url = "https://www.instagram.com/web/search/topsearch/?query=" + d;

xmlhttp.open("GET", url, true);
xmlhttp.send();