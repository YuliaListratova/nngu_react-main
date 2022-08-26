import React, { FC } from 'react';

interface IProps {
  decrease: () => void;
  increase: () => void;
}

const ChildComponent: FC<IProps> = ({ decrease, increase }) => {
  return (
    <div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default ChildComponent;
