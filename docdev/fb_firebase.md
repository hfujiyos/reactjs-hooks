# Firebase
## 料金プラン
* 課金プラン（Blazeプラン）
  * GCPのCloudFunctionsも利用でき、360MB/日までの無料枠がある。
  * 360MB/日の超過分が課金枠(＄0.15/GB)、例えば一斉ｱｸｾｽ時の425.2MB通信の課金は8円となる。
  * 予算ｱﾗｰﾄを25$で設定（ﾒｰﾙを受け取る費用は、$12.50(50%)、$22.50(90%)、$25.00(100%)）

## 環境構築（Firebase）
* [Firebase Console｜Google](https://console.firebase.google.com/?hl=ja) にアクセス
* Googleサインインする
* [プロジェクトを追加]をクリック
* [プロジェクト名]を設定して[続行]をクリック
* 通信量を最小化するため[Googleアナリティクス]を無効化して、[プロジェクトを作成]をクリック
* [続行]をクリック
* [WEB]をクリック
* [アプリ名]を設定して[アプリを登録]をクリック
* [コンソールに進む]をクリック
* [⚙] - [プロジェクトの設定]をクリック
* [構成]をクリックしてコンフィグ情報をコピー

## 環境構築（React.js）

### ライブラリインストール（Firebase）

* ライブラリインストール（Firebase）

  ```sh
  npm i firebase@8.10.0
  ```

### 環境変数ファイル（.env）

* 任意フロントエンドアプリに `.env` 環境変数ファイルを作成します。

  ```sh
  $ touch .env
  ```

* `.env`
  ```
  REACT_APP_FIREBASE_APIKEY="AIzaSyCh2i8EiXwxjVfqo16qwgYpGRv9ycz6MP8"
  REACT_APP_FIREBASE_DOMAIN="reactjs-hooks-7670b.firebaseapp.com"
  REACT_APP_FIREBASE_DATABASE="https://reactjs-hooks-7670b.firebaseio.com"
  REACT_APP_FIREBASE_PROJECTID="reactjs-hooks-7670b"
  REACT_APP_FIREBASE_STORAGE_BUCKET="reactjs-hooks-7670b.appspot.com"
  REACT_APP_FIREBASE_SENDER_ID="200391480037"
  REACT_APP_FIREBASE_APPID="1:200391480037:web:bec5f6e68bb81f591c7a0c"
  ```

### コンフィグファイル（src/firebase.ts）

* 任意フロントエンドアプリに `src/firebase.ts` コンフィグファイルを作成します。

  ```sh
  $ touch src/firebase.ts
  ```

* `src/firebase.ts`

  ```ts
  import firebase from "firebase/app";
  import "firebase/conpat/app";
  import "firebase/conpat/firestore";
  import "firebase/conpat/auth";

  const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  });

  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();
  ```

## 参考文献
* [Udemy｜最速で学ぶFirebase + React Hooks (TypeScript)｜13 ](https://www.udemy.com/course/firebasereact-hookstypescript-todo/)
* [Confluence｜Firebase環境構築](https://growseedinc.atlassian.net/wiki/spaces/dev/pages/11239625/Firebase)