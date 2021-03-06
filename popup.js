$(function () {
    /*
     * カウントダウンタイマー
     */
    const host = location.host;
    const pathname = location.pathname;

    var countdownFlag = true;

    if ((host == "twitter.com" && pathname != "/") && (host == "twitter.com" && pathname != "/home")) {
        countdownFlag = false;
    }

    if (countdownFlag) {
        var imgURL = chrome.extension.getURL("images/twitter_m.png");
        var imageTag =
            '<img src="' +
            imgURL +
            '" width="200" class="animated bounce test-animation">';

        $("body").append(
            "<div class='popSNSBlock'><div class='popSNSBlock-in'></div></div>"
        );
        $(".popSNSBlock-in").append(
            "<p>このサイトを利用するのかよく考えたまえよ。<br />そしてコップ一杯の水を飲みたまえよ。<br />" + imageTag + "<br />願わくば私に、変えることのできない物事を受け入れる落ち着きと、変えることのできる物事を変える勇気と、その違いを常に見分ける知恵とを授けたまえ。</p>"
        );
        $(".popSNSBlock-in").append("<div id='countdown'></div>");
        $(".popSNSBlock-in").append("<div class='closebuttonArea'></div>");

        cnt = 10;
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

function removeUselessArea(host, pathname) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    function jsLoaded() {
        if (host == "twitter.com") {

            if (document.querySelector('[aria-label="タイムライン: トレンド"]') != null && '[aria-label="おすすめユーザー"]' != null) {
                clearInterval(jsInitCheckTimer);

                $('[aria-label="調べたいものを検索"]').remove();
                $('[aria-label="タイムライン: トレンド"]').remove();
                $('[aria-label="おすすめユーザー"]').parent().remove();
                $('[aria-label="おすすめユーザー"]').remove();
                $('[aria-label="フッター"]').parent().remove();
            };

            //広告削除
            $("span:contains('プロモーション')").closest("article").parent().remove();
        }
    }
}