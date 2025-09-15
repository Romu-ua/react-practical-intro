import { useState } from 'react';

export default function ({ init }) {
  // 変数, 変数を変更する関数
  const [count, setCount] = useState(init);
  const handlClick = () => setCount(count + 1);
  return (
    <>
      <button onClick={handlClick}>カウント</button>
      <p>{count}回 クリックされました</p>
    </>
  );
}
