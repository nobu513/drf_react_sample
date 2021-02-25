# DjangoRESTframeworkとReactを使ったTODOリスト

バックエンドにDRF、フロントエンドにReactを使ったTODOリストを作ってみる。

# 機能

以下の3つの機能を実装した。

* 新しくタスクを作る
一つのタスクはタイトル、優先順位（high, middle, lowから選択）、メモの３つの情報を持つ。

* 既存のタスクを編集する

* 既存のタスクを削除する

# 立ち上げ

1. ```docker-compose django run python manage.py makemigrations```
2. ```docker-compsoe django run python manage.py migrate```
3. ```docker-compose up```

# APIエンドポイント

* タスク一覧を取得
localhost:8000/api/tasks/

* 新規作成
localhost:8000/api/create/

* 更新、削除
localhost:8000/api/task/${id}

# フロントエンド

* ホーム
localhost:3000/

* アバウト
localhost:3000/about

