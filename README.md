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
0. 「プロジェクトのプロパティ」を設定

#### 「プロジェクトのプロパティ」を設定

GASのメニューから「ファイル」>「プロジェクトのプロパティ」を開き、「スクリプトのプロパティ」タブを開く。

値を追加できるので、以下を入力する。

![スクリプトのプロパティ例](./doc/gas/project-properties.png)

- `TRELLO_API_KEY` : TrelloのWebAPIが操作可能なキー
- `TRELLO_API_TOKEN` : TrelloのWebAPIが操作可能なトークン
- `TRELLO_BOARD_ID` : ポイントの集計対象とするボードのID(非ボード名)
- `TRELLO_TODO_LIST_NAMES` : ポイントの集計対象とするリストの名前(こちらはリストの名前)
- `GOOGLESPREAD_SHEET_ID` : 記入対象のGoogleSpreadSheetのID(編集画面の `https://docs.google.com/spreadsheets/d/` の後ろの文字列)


### Deploy

## Auther

[@kazuhito_m](https://twitter.com/kazuhito_m)
