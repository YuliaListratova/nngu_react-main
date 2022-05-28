import React, { useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [couter, setCount] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  return (
    <div>
      <p>{couter}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Увеличить couter
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Добавить число в массив
      </button>
      {someArray.map((num, index) => {
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
