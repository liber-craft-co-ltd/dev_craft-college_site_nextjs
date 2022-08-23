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


## フォルダ構成
### pages
pages配下のファイルが、そのままURLのパスとなる。
+ /pages
    + _app.js
      + 全ページ共通した処理を記述する場合はここに書く。グローバルCSSなどもここで読み込んでいる。
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
          
          
### components
画面内の一部の表示内容を分割(コンポーネント化)したファイルを格納。コンポーネント化することで画面間で同じ表示するときに使い回せたり、変更が発生したときに変更範囲が限定されるので他の箇所への影響などを抑えることができる。
+ /components
    + Footer.js
      + フッター部分のコンポーネントファイル。
    + Header.js
      + ヘッダー部分のコンポーネントファイル。
    + Layout.js
      + LPのレイアウトコンポーネント。headタグの設定と、LP全体のレイアウト(ヘッダー、フッター)を記述。全ての画面ファイルでこのレイアウトコンポーネントをimportして利用している。

### styles
cssファイルを格納。拡張子が`.module.css`のCSSファイルは[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)であり、特定のコンポーネント内でのみCSSを適応させたい場合に使用。  
グローバルに読み込んでいる`style.css`でもCSSを適用することができるが、CSS Modulesを使用して特定のコンポーネントにスコープを狭めることで、id名やクラス名の衝突を防げたりCSSコードを分割できるので変更もしやすくなる。
+ /styles
    + blog.module.css
      + 全ページ共通の処理を記載する。グローバルCSSなどを読み込んでいる。
    + header.module.css
      + LPのヘッダー部分(Header.js)のCSSファイル。
    + index.module.css
      + LPのトップ画面のCSSファイル。
    + layout.module.css
    　+ Layout.jsのCSSファイル。現在は、LPのコンテンツ部分の量が少ない場合でも常にフッター部分が画面下部に表示されるようにするためのCSSのみを記述。

### public/images
画像などの静的ファイルはpublic内に格納する。imagesフォルダ内に全画像データを格納。コード上からはベースURL(/)で参照できるので、imgタグで利用する場合は下記のようになる。  
```html
<img src="/images/XXXXXXXXX.svg" alt="" />
```


