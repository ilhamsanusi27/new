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
        var myObj, i, x, a, b, c, next, caption, alt, type, view, width, height, padding, viewer, foot = "";

        myObj = JSON.parse(this.responseText);
        x = '';
        c = getQueryVariable("token");

        if (c != "") {
            a = myObj.data.hashtag.edge_hashtag_to_media;
        } else {
            a = myObj.graphql.hashtag.edge_hashtag_to_media;
        }

        b = a.edges;
        next = a.page_info.end_cursor;

        document.getElementById("next").innerHTML = "<form action='' method='GET' target='_top'><input type='hidden' name='token' value='" + next + "'/><input id='btn-instafeed-load' class='btn' type='submit' value='Load More'/></form>";

        for (i = 0; i < b.length; i++) {

            //cari caption
            if (b[i].node.__typename == "GraphSidecar") {} else {
                if (b[i].node.edge_media_to_caption.edges[0].node.text != "undefined") {
                    caption = b[i].node.edge_media_to_caption.edges[0].node.text;
                } else {
                    caption = "";
                }
            }

            //cari type
            if (b[i].node.__typename == "GraphVideo") {
                type = "Video";
                view = b[i].node.video_view_count;
                viewer = "tayangan";
            } else {
                type = "Gambar";
                view = b[i].node.edge_media_preview_like.count;
                viewer = "suka";
            }

            alt = type + " lucu di dagelan online";

            id = b[i].node.shortcode;
            width = b[i].node.dimensions.width;
            height = b[i].node.dimensions.height;
            padding = height * 100 / width;

            foot = "<div class='eo2As '><section class='ltpMr Slqrh'><span class='fr66n'><a href='/p/view.html?v=" + id + "' title='" + alt + "'><button class='dCJp8 afkep'><span aria-label='Komentari' class='glyphsSpriteComment__outline__24__grey_9 u-__7'></span></button></a></span><span class='_15y0l'><button class='dCJp8 afkep'><span aria-label='Bagikan Postingan' class='glyphsSpriteShare__outline__24__grey_9 u-__7'></span></button></span><!--glyphsSpriteSave__outline__24__grey_9 --><span class='wmtNn'><a href='/p/view.html?id=" + id + "' rel='noindex'><button class='dCJp8 afkep'><span aria-label='Simpan' class=' u-__7'><svg height='24px' width='24px' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'><g><g><path d='M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z'/></g></g><g><g><path d='M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z'/></g></g></svg></span></button></a></span></section><section class='EDfFK ygqzn'><div class='HbPOm _9Ytll'><span class='vcOH2' role='button' tabindex='0'><span>" + view + "</span> " + viewer + "</span></div></section></div>";

            if (type == "Gambar") {
                x += "<article class='_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4'><a href='/p/view.html?v=" + id + "' title='Keterangan foto tidak tersedia.'><div class='_97aPb '><div role='button' tabindex='0' class='ZyFrc'><div class='eLAPa kPFhm'><div class='KL4Bh' style='padding-bottom: " + padding + "%;'><img alt='" + alt + "' class='FFVAD lazy' src='" + b[i].node.display_url + "' style='object-fit: cover;' width='" + width + "' height='" + height + "'></div></div></div></div>" + foot + "</a></article>";
            } else {
                x += "<article class='_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4'><div class='_97aPb '><div><div class='kPFhm B1JlO OAXCp ' style='padding-bottom: calc(" + padding + "% - 1px);'><div class='oJub8'><div class='GRtmf wymO0 '><div class='_5wCQW'><img alt='" + alt + "' class='_8jZFn' src='" + b[i].node.display_url + "' width='" + width + "' height='" + height + "'></div></div><div class='oujXn'><div class='y4vpg VXgpI'><span aria-label='Video' class='mediatypesSpriteVideo__filled__32 u-__7'></span></div><a href='/p/view.html?v=" + id + "' title='Video lucu di dagelan online'><span class='B2xwy _3G0Ji PTIMp videoSpritePlayButton' role='button'><span class='jNBsH'>Putar</span></span></a></div></div></div></div></div>" + foot + "</article>";
            }

        }
        document.getElementById("demo").innerHTML = x;

    }
};

var d = getQueryVariable("token");

if (d != "") {
    var url = "https://www.instagram.com/graphql/query/?hl=id&query_hash=90cba7a4c91000cf16207e4f3bee2fa2&variables=%7B%22tag_name%22:%22lucu%22,%22first%22:4,%22after%22:%22" + d + "%22%7D";
} else {
    var url = "https://www.instagram.com/explore/tags/lucu/?__a=1&hl=id";
}

xmlhttp.open("GET", url, true);
xmlhttp.send();
