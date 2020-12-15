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

        document.getElementById("demoss").innerHTML = '<ul class="SnxPi">' + x + '</ul>';

    }
};

var d = getQueryVariable("q");
var url = "https://www.instagram.com/web/search/topsearch/?query=" + d;

xmlhttp.open("GET", url, true);
xmlhttp.send();