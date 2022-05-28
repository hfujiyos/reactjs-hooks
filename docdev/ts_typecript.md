# TypeScript

## 型定義

### 定数定義（再代入不可）

```ts
const name = "hello"
```

### 変数定義（再代入可）

```ts
let nameChange = "hello"
nameChange = "hello2"
```

### 明示的型指定（Type Annotation）

```ts
let userName: string = "Hello"
let dummyNum: number = 2
let bool: boolean = true
```

### 配列型定義

```ts
let array1 = [true, false, true]
let array2 = [0, 1, "hello"]
```

## ｵﾌﾞｼﾞｪｸﾄ型定義

### ｵﾌﾞｼﾞｪｸﾄ型定義（宣言定義の従来手法）

```ts
interface NAME {
  first: string //必須
  middle?: string //任意
  last: string | null //NULL可
}
let nameObj: NAME = { first: "Yamada", last: null }
```

### ｵﾌﾞｼﾞｪｸﾄ型ｴｲﾘｱｽ式（代入実行の現在手法）

```ts
type FULLNAME = {
  first: string //必須
  middle?: string //任意
  last: string | null //NULL可
}
let fullnameObj: FULLNAME = { first: "Yamada", last: null }
```

## 関数定義

### 関数定義（宣言定義の従来手法）

```ts
function func1(x: number, y: number): number {
  return x + y
}
```

### 関数式（代入実行の現在手法）

```ts
const func2 = (x: number, y: number): number => {
  return x + y
}
```

## 型拡張

### 交差型拡張（Intersection Types）

両者を兼ねる場合は＆で交差型拡張

```ts
type PROFILE = {
  age: number
  city: string
} //型ｴｲﾘｱｽ式
type LOGIN = {
  username: string
  password: string
} //型ｴｲﾘｱｽ式
type USER = PROFILE & LOGIN //交差型拡張
const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
} //定数ｴｲﾘｱｽ式
```

### 合併型拡張（Union Types）

両者いずれかの場合は｜で合併型拡張

```ts
let value: boolean | number
value = true
value = 10

let arrayUni: (number | string)[]
arrayUni = [0, 1, 2, "hello"]

let company: "Google" | "Apple" | "Facebook" | "Amazon"
company = "Amazon"

let memory: 256 | 512
memory = 256
```

## 継承

### 型継承（typeof）

JSON の const 関数式の属性定義に利用

```ts
let msg: string = "Hi" //明示的型定義：string
let msg2: typeof msg //型継承：string
msg2 = "hello"

let animal = { cat: "small cat" } //型推論定義：string
let newAnimal: typeof animal = { cat: "big cat" } //型継承：string
```

### 合併型継承（keyof）

```ts
type KEYS = {
  primary: string
  secondary: string
} //型ｴｲﾘｱｽ式
let key: keyof KEYS //合併型継承：primary｜secondary
key = "primary"
```

### 値継承（typeof + keyof）

```ts
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
} //定数ｴｲﾘｱｽ式
let keySports: keyof typeof SPORTS //値継承：soccer｜baseball
keySports = "soccer"
```

## 列挙型

TypeScript の列挙型（enum）は非推奨
TypeScript の Union 型（type / typeof / keyof）が推奨

### 列挙型（enum）

自動で連番定数定義

```ts
enum OS {
  Windows, //0
  Mac, //1
  Linux, //2
}
interface PC {
  id: number
  OStype: OS
}
const PC1: PC = {
  id: 1,
  OStype: OS.Windows,
}
const PC2: PC = {
  id: 2,
  OStype: OS.Mac,
}
```

## 互換性

### 型の互換性

```ts
const comp1 = "test" //型推論定義：test型
let comp2: string = comp1 //test型よりもstring型が高抽象度のため代入可
```

### 関数の互換性

```ts
let funcComp1 = (x: number) => {}
let funcComp2 = (x: number) => {}
funcComp1 = funcComp2 //引数同型のため関数を代入可
```

## 参考文献

- [TypeScript の合併型と交差型ついて学ぼう](https://tyotto-good.com/blog/union-intersection-type)
- [Zenn ｜ interface と type の違い、そして何を使うべきかについて](https://zenn.dev/luvmini511/articles/6c6f69481c2d17)
- [Qiita ｜ Typescript「なぜ enum の利用が推奨されないのか？」をまとめてみた](https://qiita.com/saba_can00/items/696baa5337eb10c37342)
