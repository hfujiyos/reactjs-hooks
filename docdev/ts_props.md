## Props

ｺﾝﾎﾟｰﾈﾝﾄ間の値渡し

### Props ﾌｧﾝｸｼｮﾝ構文（extends 制約）

```ts
interface Props {
  price: number
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price }
}
const gen10 = funcGen3({ price: 10 })
```

### Props ｱﾛｰ関数構文（extends 制約）

```ts
type PropsAllow = {
  price: number
}
const funcGen4 = <T extends PropsAllow>(props: T) => {
  return { value: props.price }
}
```

## 参考文献

- [Zenn ｜ React + TypeScript で props と型を便利に扱う Tips 集](https://zenn.dev/so_nishimura/articles/e9afde3b7dc779)
