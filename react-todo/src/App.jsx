import { useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

export const App = () => {
  console.log('--APP--');
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum(num + 1);
  };
  const onClickCountDown = () => {
    setNum(num - 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    console.log('--useEffect--');
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color='blue'>お元気ですか</ColorfulMessage>
      <ColorfulMessage color='green'>元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>

      <p>
        {num}
        {isShowFace && <p>('◉ 🐽 ◉`)</p>}
      </p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>('◉ 🐽 ◉`)</p>}
    </>
  );
};
