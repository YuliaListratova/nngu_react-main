import React, { useState } from 'react';
import style from './TestBlock.module.scss';

const TestBlock = () => {
  const [test, setTest] = useState(0);
  const [testList, setTestList] = useState([1]);

  return (
    <div className={style.conteiner}>
      <div className={style.block1}>
        <button
          className={style.buttonClick}
          type="button"
          onClick={() => setTest((prev) => (prev > 0 ? prev - 1 : prev))}>
          -
        </button>

        <div>{test}</div>

        <button
          className={style.buttonClick}
          type="button"
          onClick={() => setTest((prev) => prev + 1)}>
          +
        </button>
      </div>

      <div className={style.block2}>
        <div>
          {testList.map((value, index) => {
            return (
              <div key={`${value + index}`}>
                {value} <input className={style.input} type="text" />
              </div>
            );
          })}
        </div>

        <button
          className={style.buttonClick}
          type="button"
          onClick={() => setTestList((prev) => [...prev, prev.length + 1])}>
          добавить
        </button>
      </div>
    </div>
  );
};

export default TestBlock;
