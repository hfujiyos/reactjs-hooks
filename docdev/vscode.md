# VSCode
## ショートカット
* command + j : ターミナル表示/非表示
* command + / : コメントアウト/イン
* command + n : 新規ファイル
* shift + option + クリック : 複数カーソル

## 拡張機能
* Japanese Language Pack for Visual Studio Code｜Microsoft
* Git Graph｜mhutchie
* Prettier - Code formatter｜Prettier
* vscode-icons｜VSCode Icons Team
* Bracket Pair Colorizer｜CoenraadS【非推奨｜現行VSCode標準搭載となり導入不要】
* Draw.io Integration｜Henning Dieterichs
* ES7+ React/Redux/React-Native snippets｜dsznajder
* Jest｜Orta

## settings.json
VSCodeのメニューバーから、[基本設定] - [設定] にて設定画面を開きます
右上のアイコンの[設定 (JSON) を開く]をクリック
個人設定となるsettings.jsonファイルを設定します

```json
{
  //ｽﾀｲﾙ関連
  "workbench.colorTheme": "Solarized Light",
  "terminal.integrated.fontSize": 18,
  "editor.fontSize": 18,
  "editor.tabSize": 2,
  "editor.fontFamily": "Ricty Diminished",
  "editor.renderLineHighlight": "gutter",
  // 括弧記号色付け機能をON
  "editor.guides.bracketPairs": true,
  "editor.bracketPairColorization.enabled": true,
  // 信頼されたﾜｰｸｽﾍﾟｰｽで信頼されていないﾌｧｲﾙを開くときの設定
  "security.workspace.trust.untrustedFiles": "open",
  // ﾘﾓｰﾄﾘﾎﾟｼﾞﾄﾘの自動ﾌｪｯﾁをON
  "git.autofetch": true,
  // ﾌｧｲﾙ自動保存設定をOFF
  "files.autoSave": "off",
  // 行の自動折り返しをOFF
  "editor.wordWrap": "off",
  // Prettier個別設定を.prettierrc設定ﾌｧｲﾙからの読込をON（共通設定となるpackage.json以外に読込）
  "prettier.requireConfig": true,
  // ﾌｫｰﾏｯﾀをprettierに設定
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // ﾌｫｰﾏｯﾀをﾌｧｲﾙ保存時実行をON
  "editor.formatOnSave": true,
  // ﾏｰｸﾀﾞｳﾝ時のﾌｫｰﾏｯﾀをﾌｧｲﾙ保存時実行をON
  "[markdown]": { "editor.formatOnSave": true },
  // ﾏｰｸﾀﾞｳﾝ時の改行認識設定
  "markdown.preview.breaks": true
}
```
