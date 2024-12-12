# Blog

## 環境構築

### nix を使う場合(推奨)

```sh
nix develop
```

`direnv` を使用している場合`.envrc` に `use flake` を追加すると、自動で `nix develop` が実行される。

### nix を使わない場合

Node.js 22 LTS と、pnpm をインストールする.

- Node.js は `apt` ではなく [mise](https://mise.jdx.dev/getting-started.html) や [nvm](https://github.com/nvm-sh/nvm) でインストールすると良い.

## GraphQLのクエリの作り方

<https://tuatmcc.kibe.la/api/console> にアクセスして、GraphQLのクエリを作成して動作を確認する。

使いたいクエリをコピーして、`graphql/query.graphql` に追加する。(ファイルを分割する場合は`codegen.ts`も修正する)

`*.graphql` ファイルに変更を加えた場合、以下のコマンドで型定義を生成する。

```sh
pnpm codegen
```

## Kibela の GraphQL スキーマの取得

基本的にこの手順は不要.

```sh
pnpm get-graphql-schema https://tuatmcc.kibe.la/api/v1 -h Authorization="Bearer <access_token>" > graphql/schema.graphql
```
