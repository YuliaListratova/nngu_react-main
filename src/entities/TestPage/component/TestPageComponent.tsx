import React, { useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [couter, setCount] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updatedArray = useMemo(() => {
    return someArray.map((num) => {
      console.log('Hello');
      return num + 10;
    });
  }, [someArray]);

  // componentDidMount
  useEffect(() => {
    console.log('Компонент отображен');
  }, []);

  // // componentDidUpdate
  useEffect(() => {
    console.log('Компонент отображен');
  });

  useEffect(() => {
    console.log('Компонент отображен');
  }, [couter]);

  useEffect(() => {
    console.log('Компонент отображен');
  }, [someArray]);

  useEffect(() => {
    console.log('Компонент отображен');
  }, [couter, someArray]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Компонент был удален');
    };
  }, []);

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
        // {
        //   /* {updatedArray.map((num, index) => { */
        // }
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
