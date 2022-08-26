import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './UseRef.module.scss';

const UseRef = () => {
  //   const divEl = useRef(null);

  //   console.log(divEl);

  //   useEffect(() => console.log(divEl), []);
  //   return <div ref={divEl}>123</div>;

  //   const inputRef = useRef<HTMLInputElement>(null);

  //   useEffect(() => {
  //     inputRef.current?.focus();
  //   }, []);

  //   const handleBtnClick = () => {
  //     if (inputRef.current) {
  //       inputRef.current.style.color = 'red';
  //     }
  //   };

  //   return (
  //     <div>
  //       <input type="text" />
  //       <button type="button" onClick={handleBtnClick}>
  //         Focus
  //       </button>
  //     </div>
  //   );

  const [number, setNumber] = useState([1, 2, 3, 4, 5]);

  const ulRef = useRef<HTMLUListElement>(null);

  const handleAddNum = () => {
    setNumber((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const handleScroll = useCallback(() => console.log('Скролл', number), []);

  const handleSub = () => {
    ulRef.current?.addEventListener('scroll', handleScroll);
  };

  const handleUnsub = () => {
    ulRef.current?.removeEventListener('scroll', handleScroll);
  };

  return (
    <div>
      <div className={style.btns_wrapper}>
        <button type="button" onClick={handleAddNum}>
          Add Number
        </button>
        <button type="button" onClick={handleSub}>
          Sub
        </button>
        <button type="button" onClick={handleUnsub}>
          Unsub
        </button>
      </div>
      <ul ref={ulRef} className={style.number_list}>
        {number.map((num, i) => (
          <li className={style.numbers_item} key={`${num + 1}`}>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseRef;
