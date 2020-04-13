$(function () {
    /*
     * カウントダウンタイマー
     */
    const host = location.host;
    const pathname = location.pathname;

    var popupFlag = true;
    if (host == "twitter.com" && pathname != "/home") {
        popupFlag = false;
    }

    if (popupFlag) {
        var imgURL = chrome.extension.getURL("images/twitter_m.png");
        var imageTag =
            '<img src="' +
            imgURL +
            '" width="200" class="animated bounce test-animation">';

        $("body").append(
            "<div class='popSNSBlock'><div class='popSNSBlock-in'></div></div>"
        );
        $(".popSNSBlock-in").append(
            "<p>このサイトを利用するのかよく考えたまえよ。<br>" + imageTag + "</p>"
        );
        $(".popSNSBlock-in").append("<div id='countdown'></div>");
        $(".popSNSBlock-in").append("<div class='closebuttonArea'></div>");

        cnt = 1;
        $("#countdown").text(cnt);
        cnDown = setInterval(function () {
            cnt--;
            if (cnt <= 0) {
                //0になったら停止する
                clearInterval(cnDown)

                // $(".popSNSBlock").remove();
                $(".closebuttonArea").append(
                    '<a href="#" class="popSNSBlockClose btn-square">見ちゃう</a>'
                );
            }
            $("#countdown").text(cnt);
        }, 1000);
    }
});

$(document).on("click", ".popSNSBlockClose", function () {
    $(".popSNSBlock")
        .fadeOut("fast")
        .queue(function () {
            this.remove();
        });
    return false;
});

/*
 * ついでに不要なエリアブロック
 */
const host = location.host;
const pathname = location.pathname;

if (host == "twitter.com") {
    var observer = new MutationObserver(function () {
        var elm = document.getElementById("react-root");
        if (elm) {
            removeUselessArea(host, pathname)
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
}

//
window.addEventListener("load", removeUselessArea, false);

function removeUselessArea(ehost, pathname) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    function jsLoaded() {
        if (host == "twitter.com") {

            if (document.querySelector('[aria-label="タイムライン: トレンド"]') != null) {
                clearInterval(jsInitCheckTimer);

                $('[aria-label="調べたいものを検索"]').remove();
                $('[aria-label="タイムライン: トレンド"]').remove();
                $('[aria-label="おすすめユーザー"]').parent().remove();
                $('[aria-label="フッター"]').parent().remove();
            };
        }
    }
}