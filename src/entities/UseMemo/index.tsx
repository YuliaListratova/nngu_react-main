import React, { useState } from 'react';
import Counter from './components/Counter';
import IsTen from './components/IsTen';
import ItemsList from './components/ItemsList';

const UseMemo = () => {
  //   const [counter1, setCounter1] = useState(0);
  //   const [counter2, setCounter2] = useState(0);

  //   const handleCounter1 = () => setCounter1((prev) => prev + 1);
  //   const handleCounter2 = () => setCounter2((prev) => prev + 1);

  //   return (
  //     <div>
  //       <button type="button" onClick={handleCounter1}>
  //         Увеличить1
  //       </button>
  //       <Counter value={counter1} />
  //       <hr />
  //       <button type="button" onClick={handleCounter2}>
  //         Увеличить2
  //       </button>
  //       <Counter value={counter2} />
  //       <IsTen value={counter2} />
  //     </div>
  //   );

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [counter, setCounter] = useState(0);

  const handleNumbersChange = () => {
    console.log('Функция отработала');
    const mappedNumbers = numbers.map((num) => num + (counter || 10));
    setNumbers(mappedNumbers);
  };

  return (
    <div>
      <div>{counter}</div>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Увеличить
      </button>
      <ItemsList numbersArray={numbers} />
      <button type="button" onClick={handleNumbersChange}>
        Изменить
      </button>
    </div>
  );
};

export default UseMemo;
