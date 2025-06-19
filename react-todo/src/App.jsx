import { ColorfulMessage } from './components/ColorfulMessage';
import { useState } from 'react';

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum(num + 1);
  };
  const onClickCountDown = () => {
    setNum(num - 1);
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color='blue'>お元気ですか</ColorfulMessage>
      <ColorfulMessage color='green'>元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>

      <p>{num}</p>
    </>
  );
};
