# Blog

## 必要なもの

### 1. nix を使う場合(推奨)

`nix develop` コマンドを実行して開発環境に入る. `direnv` を併用している場合初回のみ以下のコマンドを実行.

```sh
direnv allow
```


### 2. nix を使わない場合

- Node.js 22: [mise](https://mise.jdx.dev/getting-started.html) や [nvm](https://github.com/nvm-sh/nvm) 等のランタイム管理ツールでインストールすることをオススメ.
- [pnpm](https://pnpm.io/installation)

## 開発

### 依存関係のインストール

```sh
pnpm install
```

### 開発サーバーの起動

```sh
pnpm dev
```

### フォーマット

```sh
pnpm format
```

### リント

```sh
pnpm lint
```

### GraphQL クエリの作成 ・ コード生成

1. <https://tuatmcc.kibe.la/api/console> にアクセスして、動作を確認しながらクエリを作成する.

2. クエリをコピーして、`graphql/query.graphql` に追加し、 `pnpm codegen` を実行する.

### Kibela の GraphQL スキーマ取得

基本的にこの手順は不要.

```sh
pnpm get-graphql-schema https://tuatmcc.kibe.la/api/v1 -h Authorization="Bearer <access_token>" > graphql/schema.graphql
```
