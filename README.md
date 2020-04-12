# Chrome拡張
SNS等、特定のサイトを開いた際に10秒間カウントダウンを表示することで、仕事中につい無駄なネットサーフィンをしてしまうことを抑制するための拡張機能です。

# インストール
Chromeの設定画面から、「拡張機能」→「パッケージ化されていない拡張機能を読み込む」でこのファイル群が設置したらディレクトリを読み込み。

# 設定
ブロック対象のサイトは、manifest.json内のcontent_scripts > matchesから指定できます。
デフォルトでは下記3サイトを設定してあります。
https://twitter.com/
https://tweetdeck.twitter.com/
https://www.facebook.com/
