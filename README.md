# Blog

## 必要なもの

### 1. nix を使う場合(推奨)

`direnv` を併用している場合、初回のみ以下のコマンドを実行する.

```sh
direnv allow
```
そうでない場合、`nix develop` コマンドで開発環境に入ることができる.

### 2. nix を使わない場合

以下の2つをインストールする.

- Node.js 22: [mise](https://mise.jdx.dev/getting-started.html) や [nvm](https://github.com/nvm-sh/nvm) 等のランタイム管理ツールでインストールすることをオススメ.
- [pnpm](https://pnpm.io/installation): v9.15.0

## 開発

### 依存関係のインストール

```sh
bun install
```

### 開発サーバーの起動

```sh
bun dev
```

### フォーマット

```sh
bun format
```

### リント

```sh
bun lint
```

### GraphQL クエリの作成 ・ コード生成

1. <https://tuatmcc.kibe.la/api/console> にアクセスして、動作を確認しながらクエリを作成する.

2. クエリをコピーして、`graphql/query.graphql` に追加し、 `bun codegen` を実行する.

### Kibela の GraphQL スキーマ取得

基本的にこの手順は不要.

```sh
bun get-graphql-schema https://tuatmcc.kibe.la/api/v1 -h Authorization="Bearer <access_token>" > graphql/schema.graphql
```
