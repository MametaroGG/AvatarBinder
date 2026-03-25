# アバターの登録

AvatarBinder へのアバター（Prefab）の追加は、プロジェクトの規模や状況に合わせて複数の方法から選べます。

## 推奨する改変アバターの登録手順

アバターにアイテムを追加するなどの改変を行った場合、**Unpackせずに**「Prefab Variant」として保存・登録するのがおすすめです。
これにより、元のアバターの構造を維持したまま、安全に変更を管理できます。

1. **Projectにドラッグ＆ドロップ**
   改変したアバターをHierarchyで全選択した状態で、Projectウィンドウの任意のフォルダへドラッグ＆ドロップします。
   <img src="/新しいPrefab化のやり方01.webp" alt="Projectにドラッグ＆ドロップ" style="max-width: 520px; width: 100%;">

2. **Prefab Variantを選択**
   「Create Prefab or Variant?」というダイアログが表示されるので、**`Prefab Variant`** をクリックします。
   <img src="/新しいPrefab化のやり方02.webp" alt="Prefab Variantを選択" style="max-width: 520px; width: 100%;">

3. **AvatarBinderに登録**
   作成された Prefab Variant を AvatarBinder 上部の **Drop Zone** にドラッグ＆ドロップして登録完了です。
   *※フォルダをドラッグ＆ドロップすると、その中にある Prefab を自動的にスキャンして登録します。*
   <img src="/新しいPrefab化のやり方03.webp" alt="AvatarBinderにドラッグ＆ドロップ" style="max-width: 520px; width: 100%;">

### 再編集と上書き保存 (Original Prefab)

Prefab Variant として保存したアバターを再度編集して上書き保存する場合は、同じようにProjectにドラッグ&ドロップし、ダイアログで **`Original Prefab`** を選択してください。
<img src="/新しいPrefab化のやり方04.webp" alt="Original Prefabで保存" style="max-width: 520px; width: 100%;">

これにより、原型のPrefabとの親子関係（ペアレント）が切れることなく、設定を保持したまま安全に上書き保存ができます。
<img src="/新しいPrefab化のやり方05.webp" alt="ペアレントが切れずに保存" style="max-width: 520px; width: 100%;">

## 既存アバターの上書き保存 (Overwrite)

すでにライブラリに登録されているアバターに対して、シーン上で加えた変更を直接**上書き保存**することも可能です。
これにより「ちょっとした衣装の差し替え」等で無駄に新しいPrefabが増殖するのを防ぎ、常に最新の状態をすっきりと管理できます。

<img src="/アバターの登録_既存アバターの上書き保存.webp" alt="既存アバターの上書き保存" style="max-width: 520px; width: 100%;">

## シーンオブジェクトから追加

Hierarchy に配置済みのアバターから登録することも可能です。
1. Hierarchy で登録したいアバターを選択します。
2. ウィンドウ下部の `選択中を追加 (Scene)` をクリックすると、Prefabとしてライブラリに登録されます。

<img src="/アバターを登録する_シーンから追加.webp" alt="シーンから追加" style="max-width: 520px; width: 100%;">


## フォルダ一括スキャン

大量のアバターを一度にインポートしたい場合に便利です。
1. `フォルダ追加` ボタンをクリックします。
2. アセットフォルダ内の特定のディレクトリを選択します。
3. その配下にあるすべての Prefab が自動的に検出され、ライブラリに追加されます。

<img src="/アバターを登録する_フォルダスキャン.webp" alt="フォルダ一括スキャン" style="max-width: 520px; width: 100%;">

## 登録フローのイメージ

![登録フローの図解](/registration-flow.svg)

---

### ヒント: サムネイルの自動生成と手動設定

登録時にはデフォルトの見た目がサムネイルとして設定されますが、より分かりやすくするために：
- 詳細パネルのプレビューエリアに画像をドラッグ＆ドロップすることで、任意の画像をサムネイルとして設定できます。
- Unityプロジェクト内の Sprite や Texture2D を直接ドロップすることも可能です。

<img src="/アバターの登録_サムネイルの自動生成と手動設定.webp" alt="サムネイルの自動生成と手動設定" style="max-width: 520px; width: 100%;">
