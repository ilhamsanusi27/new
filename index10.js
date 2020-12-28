

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj, i, x, a, b, c, f, next, caption, alt, type, view, width, height, padding, viewer, foot = "";

        myObj = JSON.parse(this.responseText);
        x = '';
        c = getQueryVariable("token");
        f = getQueryVariable("l");

if (f != "") {
 var h = f;
} else { var h = "lucu"; }

        if (c != "") {
            a = myObj.data.hashtag.edge_hashtag_to_media;
        } else {
            a = myObj.graphql.hashtag.edge_hashtag_to_media;
        }

        b = a.edges;
        next = a.page_info.end_cursor;

        document.getElementById("next").innerHTML = "<form action='/' method='GET' target='_top'><input type='hidden' name='l' value='" + h + "'/><input type='hidden' name='token' value='" + next + "'/><input id='btn-instafeed-load' class='btn' type='submit' value='Load More'/></form>";

        for (i = 0; i < b.length; i++) {

            //cari caption
            if (b[i].node.__typename == "GraphSidecar") {} else {
                if (b[i].node.edge_media_to_caption.edges[0].node.text===undefined) {
                    caption = "";
                } else {
                    caption = b[i].node.edge_media_to_caption.edges[0].node.text;
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

            foot = "<div class='eo2As '><section class='ltpMr Slqrh'><span class='fr66n'><a href='/?v=" + id + "&l=" + h + "' title='" + alt + "'><button class='dCJp8 afkep'><svg height='24px' width='24px' x='0px' y='0px' viewBox='0 0 488.85 488.85' style='enable-background:new 0 0 488.85 488.85;' xml:space='preserve'><g><path d='M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3C343.725,302.225,302.225,343.725,251.125,347.025zM248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z'/></g></svg></button></a></span><span class='_15y0l'><a href='https://www.facebook.com/sharer/sharer.php?u=https://dagelan.online/?v="+id+"&l="+h+"' target='_blank'><button class='dCJp8 afkep'><svg viewBox='0 0 32 32' style='fill: rgb(255, 255, 255); width: 20px; height: 20px;'><title>Facebook</title><g><path d='M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z' fill-rule='evenodd'></path></g></svg></button></a></span><span class='_15y0l'><button class='dCJp8 afkep'><svg viewBox='0 0 32 32' style='fill: rgb(255, 255, 255); width: 20px; height: 20px;'><title>Twitter</title><g><path d='M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336' fill-rule='evenodd'></path></g></svg></button></span><span class='_15y0l'><button class='dCJp8 afkep'><svg viewBox='0 0 32 32' style='fill: rgb(255, 255, 255); width: 20px; height: 20px;'><title>WhatsApp</title><g><path d='M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z' fill-rule='evenodd'></path></g></svg></button></span><span class='_15y0l'><button class='dCJp8 afkep'><svg viewBox='0 0 32 32' style='fill: rgb(255, 255, 255); width: 20px; height: 20px;'><title>Pinterest</title><g><path d='M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z' fill-rule='evenodd'></path></g></svg></button></span><span class='wmtNn'><a href='#download' rel='noindex' download><button class='dCJp8 afkep'><svg height='24px' width='24px' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'><g><g><path d='M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z'></path></g></g><g><g><path d='M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z'></path></g></g></svg></button></a></span></section><section class='EDfFK ygqzn'><div class='HbPOm _9Ytll'>" + view + " " + viewer + "</div></section></div>";

if(caption.match(/order|WhatsApp|togel|Naturaworld|BPOM|pemesanan|62-8|62 8|628|08|bisnis*|profit*|ness*|ness v|ready stock|ready stok|togel|offcexalted|Bibit indonesia|doctorcostume|casing HP|Limited Edition|springbabykids|ikatrambut|qq|shopee|Min Lose|SLOT GAME|Segera bergabung|ayo bermain/gi)){} else {
            if (type == "Gambar") {
                x += "<article class='_8Rm4L'><a href='/?v=" + id + "&l=" + h + "'><div class='KL4Bh' style='padding-bottom: " + padding + "%;'><img alt='" + alt + "' class='FFVAD' src='" + b[i].node.display_url + "' style='object-fit: cover;' width='" + width + "' height='" + height + "'></div></a>" + foot + "</article>";
            } else {
                x += "<article class='_8Rm4L'><div style='padding-bottom: calc(" + padding + "% - 1px);'><div class='oJub8'><div class='wymO0'><div class='_5wCQW'><img alt='" + alt + "' class='_8jZFn' src='" + b[i].node.display_url + "' width='" + width + "' height='" + height + "'></div></div><div class='oujXn'><a href='/?v=" + id + "&l=" + h + "' title='Video lucu di dagelan online'><span class='B2xwy _3G0Ji PTIMp videoSpritePlayButton'></a></div></div></div>" + foot + "</article>";
            }}

        }
        document.getElementById("demo").innerHTML = x;

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
