import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  limit: number;
  itemsAmount: number;
  // currentPage: () => void;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pagesArray: number[] = [];
  // const [currentPage, setcurrentPage] = useState(1);
  const navigate = useNavigate();

  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i);
  }

  console.log(pagesAmount);

  return (
    <div>
      {pagesArray.map((page) => (
        <button key={`key${page}`} type="button" onClick={() => navigate(`?page=${page}`)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
