## 環境構築
### Node.jsのインストール
Node.jsをインストールしていない場合は、下記等サイトを参考にNode.jsをインストール  
[Node.jsの開発環境を用意しよう！（Windows）](https://prog-8.com/docs/nodejs-env-win)

### ライブラリのインストール
ルートディレクトリに移動し、下記コマンドを実行。実行後、`node_modules`フォルダが自動生成される。
```
npm install
```


## 開発サーバーの起動
下記コマンド実行後、http://localhost:3000 にアクセスするとLP画面が表示される。
```
npm run dev
```

SSGされたサイト(本番環境と同様のサイト)の動作確認をしたい場合は、下記コマンドを実行する。
実行後、http://localhost:3000 にアクセスすると、SSGされたLP画面が表示される。
```
npm run serve
```

## microCMSへの接続
開発環境からmicroCMSへの接続を行うために、ルートディレクトリに環境変数を記載する`.env.local`ファイルを作成する。  
`.env.local`ファイルにmicroCMSのAPIキーとサービスドメインを記述する。このファイルはセキュリティ上、gitにpushしない。
サービスドメインは`XXXX.microcms.io`の`XXXX`の部分。
```:.env.local
SERVICE_DOMAIN=XXXXXXXXXXXXXXXXXXXXXXXXXXX
API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXX
```
Netlifyへデプロイする場合は、Netlifyの環境変数にも同様の内容を設定する。（[参考](https://blog.microcms.io/nuxt-microcms-netlify-portfolio/)）


## Netlifyへのデプロイ
mainブランチにpushを行うと、自動的にNetlifyで再ビルドが走り、本番環境に最新のコミットが反映される。

+ /pages
    + /posts
        + .check-list.md
        + .directory-list.md
+ /css
    + .main.css
+ /preview
    + .check-list.html
    + .directory-list.html
+ /static


## フォルダ構成
### pages
pages配下のファイルが、そのままURLのパスとなる。
+ /pages
    + _app.js
      + 全ページ共通の処理を記載する。グローバルCSSなどを読み込んでいる。
    + blog.js
      + ブログ一覧画面
    + commercial-transactions.js
      + 特定商取引法画面
    + index.js
    　+ LPのトップ画面
    + inquiry-info-session.js
      + 面談日程予約画面
    + privacy-policy.js
      + プライバシーポリシー画面
    + terms-of-use.js
      + 利用規約画面
    + blog
      + [id].js
        + ブログの記事詳細画面。SSGのときはビルド時にmicroCMSから全記事を取得し、全ての記事の画面を動的に生成する。
          ([Next.js dynamic-routes](https://nextjs.org/docs/routing/dynamic-routes))






