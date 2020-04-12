# Chrome 拡張

SNS 等、特定のサイトを開いた際に 10 秒間カウントダウンを表示することで、仕事中についムダなネットサーフィンをしてしまうことを抑制するための拡張機能です。

# インストール

Chrome の設定画面から、「拡張機能」→「パッケージ化されていない拡張機能を読み込む」でこのファイル群が設置したらディレクトリを読み込み。

# 設定

ブロック対象のサイトは、manifest.json 内の content_scripts > matches から指定できます。
デフォルトでは下記 3 サイトを設定してあります。
https://twitter.com/
https://tweetdeck.twitter.com/
https://www.facebook.com/
