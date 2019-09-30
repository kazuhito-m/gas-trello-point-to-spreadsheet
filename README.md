 gas-trello-point-to-spreadsheet
===============================

[![CircleCI](https://circleci.com/gh/kazuhito-m/gas-trello-point-to-spreadsheet.svg?style=svg)](https://circleci.com/gh/kazuhito-m/gas-trello-point-to-spreadsheet)

## What's this ?

Trelloの一つのボードのいくつかのリストからポイントを抜き出し、GoogelSpreadSheetの特定セルに記入するGoogle Apps Script(GAS)。

## Prerequisites

- [導入時に「すでにあるはずのもの」の前提](./doc/PREREQUISITES.md)

### ローカル環境

- npm 導入済み

## Usage

### 事前準備

1. GoogleDriveに「Google Apps Script」を作成
    - 名前を「無題のプロジェクト」から変更しておく
0. [「プロジェクトのプロパティ」を設定](#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%82%92%E8%A8%AD%E5%AE%9A)

#### プロジェクトのプロパティを設定

GASのメニューから「ファイル」>「プロジェクトのプロパティ」を開き、「スクリプトのプロパティ」タブを開く。

値を追加できるので、以下を入力する。

![スクリプトのプロパティ例](./doc/gas/project-properties.png)

- `TRELLO_API_KEY` : [TrelloのWebAPIが操作可能なキー](#trello%E3%81%AEapi%E3%82%AD%E3%83%BC%E3%81%A8api%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%81%A8%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AEid%E3%81%AE%E8%AA%BF%E3%81%B9%E3%81%8B%E3%81%9F)
- `TRELLO_API_TOKEN` : [TrelloのWebAPIが操作可能なトークン](#trello%E3%81%AEapi%E3%82%AD%E3%83%BC%E3%81%A8api%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%81%A8%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AEid%E3%81%AE%E8%AA%BF%E3%81%B9%E3%81%8B%E3%81%9F)
- `TRELLO_BOARD_ID` : ポイントの集計対象とする[ボードのID(非ボード名)](#trello%E3%81%AEapi%E3%82%AD%E3%83%BC%E3%81%A8api%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%81%A8%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AEid%E3%81%AE%E8%AA%BF%E3%81%B9%E3%81%8B%E3%81%9F)
- `TRELLO_TODO_LIST_NAMES` : ポイントの集計対象とするリストの名前(こちらはリストの名前) カンマ区切りで複数指定可能
- `GOOGLESPREAD_SHEET_ID` : 記入対象のGoogleSpreadSheetのID(編集画面の `https://docs.google.com/spreadsheets/d/` の後ろの文字列)

#### TrelloのAPIキーとAPIトークンとボードのIDの調べかた

[こちら(自身のブログの過去記事)](https://kazuhito-m.github.io/tech/2015/11/02/mindmeister2trello-importer) の中程を参考に。

### Deploy

#### claspでgoogleアカウントにログインする

```bash
npm run clasp_login
```

コンソール上に「このURLをブラウザに貼るように」というような指示が表示されるので、実行する。

以降、ブラウザに表示されたページのナビゲーションに従う。

#### 設定ファイルに「対象となるGASのScriptID」を設定する

事前に作成した「GASのURL」から、

`https://script.google.com/d/[この部分]/edit`

を、直下にある `.clasp.json` の `scriptId` へとコピーし保存する。

#### デプロイコマンドを叩く

```bash
npm run deploy
```

GASの編集画面の左ペインに「*.gs のファイルが大量に登録された」ら成功。

#### テスト実行

GASの編集画面の左ペインから `index.gs` を選択、メニューから「実行」>「関数を実行」>「main」を選択。

初回は「GASのpermissionの確認」が入るが、適宜許可する。

エラーなく実行が完了し、対象のSpreadSheetに数値が入力されれば成功。

#### 実行トリガー登録

GASの編集画面のメニューから「編集」>「現在のプロジェクトのトリガー」を選択。

「トリガー」画面が開くので、右下の「＋トリガーを追加」をクリック。

「〜のトリガーを追加」画面が開くので、以下の設定で保存。

- 実行する関数を選択 : `main`
- イベントのソースを選択 : 時間主導型
- 時間ベースのトリガーのタイプを選択 : 日付ベースのタイマー
- 時刻を選択 : 午後11時〜午前0時

上記の時刻設定は、スクリプトが「日付変更直前に一日の成果を集計する」前提で作られているため。

## Auther

[@kazuhito_m](https://twitter.com/kazuhito_m)
