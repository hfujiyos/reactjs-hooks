# Icon

## Icon

### heroicon

- https://heroicons.com/
- SVG 方式：サイトにあるアイコンの svg/jsx のコードをコピーして svg タグ利用できる

  ```ts
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    stroke-width='2'
  >
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
    />
  </svg>
  ```

- https://heroicons.com/
- https://github.com/tailwindlabs/heroicons
- import 方式：サイトにあるアイコン名の末尾に Icon をつけて import 利用できる

  ```sh
  npm install @heroicons/react
  ```

  ```ts
  import { BeakerIcon } from '@heroicons/react/solid'

  function MyComponent() {
    return (
      <div>
        <BeakerIcon className='h-5 w-5 text-blue-500' />
        <p>...</p>
      </div>
    )
  }
  ```

### tabler-icons-react

- https://tabler-icons-react.vercel.app/
- https://github.com/konradkalemba/tabler-icons-react
- import 方式：サイトにあるアイコンの react のコードをコピーして import 利用できる

  ```sh
  npm install tabler-icons-react
  ```

  ```ts
  import { Anchor } from 'tabler-icons-react'

  export default function Example() {
    return <Anchor size={30} strokeWidth={1.5} color={'#57862d'} />
  }
  ```

## 参考文献

- [heroicon](https://heroicons.com/)
- [heroicon ｜ GitHub](https://github.com/tailwindlabs/heroicons)
- [tabler-icons-react](https://tabler-icons-react.vercel.app/)
- [tabler-icons-react ｜ GitHub](https://github.com/konradkalemba/tabler-icons-react)
