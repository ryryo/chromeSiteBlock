$(function () {
    var imgURL = chrome.extension.getURL("images/twitter_m.png");
    var imageTag = '<img src="' + imgURL + '" width="200" class="animated bounce">';

    $("body").append("<div class='popSNSBlock'><div class='popSNSBlock-in'></div></div>");
    $(".popSNSBlock-in").append("<p>このサイトを利用するのかよく考えたまえよ。<br>" + imageTag + "</p>");
    $(".popSNSBlock-in").append("<div id='countdown'></div>");

    cnt = 10;
    $('#countdown').text(cnt);
    cnDown = setInterval(function () { //1秒おきにカウントマイナス
        cnt--;
        if (cnt <= 0) { //0になったら停止する
            clearInterval(cnDown);
            $(".popSNSBlock").remove();
        }
        $('#countdown').text(cnt);
    }, 1000);
});