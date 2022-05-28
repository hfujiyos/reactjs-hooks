## React.js プロジェクト作成

### Node.js

- バージョン確認
  ```sh
  $ nodebrew -v
  nodebrew 1.2.0
  $ node -v
  v16.14.2
  $ npm -v
  8.7.0
  $ yarn -v
  1.22.18
  $ npm info create-react-app versions
  5.0.1が存在することを確認
  $ npx create-react-app --version
  5.0.1
  ```

### React.js

React18 + TypeScript + Firebase8 + ReactRouter5 + MateialUI4 で環境構築

- React18 + TypeScript

  ```sh
  $ npx create-react-app . --template typescript
  ```

### ライブラリ追加

インストールの順番により環境構築できない場合があるため下記順序で環境構築

- Firebace8

  ```sh
  $ npm i firebase@8.10.0
  ```

- ReactRouter5

  ```sh
  $ npm i react-router-dom@5.3.0 @types/react-router-dom@5.3.1
  ```

- MateialUI4

  ```sh
  $ npm i @material-ui/core --legacy-peer-deps
  $ npm i @material-ui/icons --legacy-peer-deps
  ```

- プロダクションサーバー起動

  ```sh
  $ npm start
  ```

### Firebase 連携

- 環境変数ファイル（.env）

  ```
  REACT_APP_FIREBASE_APIKEY="AIzaSyCh2i8EiXwxjVfqo16qwgYpGRv9ycz6MP8"
  REACT_APP_FIREBASE_DOMAIN="reactjs-hooks-7670b.firebaseapp.com"
  REACT_APP_FIREBASE_DATABASE="https://reactjs-hooks-7670b.firebaseio.com"
  REACT_APP_FIREBASE_PROJECT_ID="reactjs-hooks-7670b"
  REACT_APP_FIREBASE_STORAGE_BUCKET="reactjs-hooks-7670b.appspot.com"
  REACT_APP_FIREBASE_SENDER_ID="200391480037"
  REACT_APP_FIREBASE_APP_ID="1:200391480037:web:bec5f6e68bb81f591c7a0c"
  ```

- コンフィグファイル（src/firebase.ts）

  ```ts
  import firebase from "firebase/app"
  import "firebase/conpat/app"
  import "firebase/conpat/firestore"
  import "firebase/conpat/auth"

  const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  })

  export const db = firebaseApp.firestore()
  export const auth = firebase.auth()
  ```

### VSCode

- .prettierrc

  ```
  {
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": false,
    "jsxSingleQuote": false,
    "printWidth": 80
  }
  ```

### GitHub

- initial commit

  ```
  $ git branch -M main
  $ git commit -m "initial commit"
  $ git remote add origin git@github.com:hfujiyos/reactjs-hooks.git
  $ git push -u origin main
  ```

## ディレクトリ構成

- docdev
- src
  - App.module.css
  - App.tsx
  - firebase.ts
  - index.tsx
  - Login.module.css
  - Login.tsx
  - TaskItem.module.css
  - TaskItem.tsx
- .env
- .gitignore
- .prettierrc
- package.json
- README.md

## 参考文献

- [Zenn ｜これから Firebase でプロジェクトを始めようとする全ての人が知っておくべきこと v8→v9 リリース](https://zenn.dev/hiro__dev/articles/605161cd5a7875)
- [MUI ｜ Get Started ｜ Installation](https://mui.com/material-ui/getting-started/installation/)
- [Qiita ｜ React: Create React App でプロジェクトがつくれない](https://qiita.com/FumioNonaka/items/076af56213afc7e29853)
- [Qiita ｜バージョン指定して create-react-app を実行](https://qiita.com/hayato94087/items/5c586e80bfa18b1c537a)
- [GitHub ｜ GomaGoma676 ｜ firebase-react-todo](https://github.com/GomaGoma676/firebase-react-todo)
- [GitHub ｜ GomaGoma676 ｜ react-router-dom-v6](https://github.com/GomaGoma676/react-router-dom-v6)
