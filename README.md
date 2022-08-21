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


