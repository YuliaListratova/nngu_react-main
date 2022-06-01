import React, { useState } from 'react';
import TestBlock from './component/TestBlock';
import style from './Home.module.scss';

const Homework = () => {
  const [isShowBlock, setIsShowBlock] = useState(true);

  return (
    <div className={style.content}>
      <button
        className={style.buttonRoll}
        type="button"
        onClick={() => setIsShowBlock((prev) => !prev)}>
        Свернуть/развернуть
      </button>
      {isShowBlock && <TestBlock />}
    </div>
  );
};

export default Homework;
