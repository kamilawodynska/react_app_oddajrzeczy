import React from 'react';
import '../scss/components/pagination.scss';

const Pagination = ({ fundsPerPage, totalFunds, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFunds / fundsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li
          key={number}
          className={`page-item ${currentPage === number && 'active'}`}
        >
          <div onClick={() => paginate(number)} className='page-link'>
            {number}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
