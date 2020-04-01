import React, { useState, useEffect } from 'react';

import Pagination from './Pagination';

import '../scss/components/fundOrgColls.scss';

const FundOrgColls = ({ value }) => {
  const [fundations, setFundations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fundsPerPage] = useState(3);

  useEffect(() => {
    fetch(`http://localhost:3004/${value}`)
      .then(response => {
        return response.json();
      })
      .then(fundations => {
        setFundations(fundations);
      });
  }, []);

  const indexOfLastFund = currentPage * fundsPerPage;
  const indexOfFirstFund = indexOfLastFund - fundsPerPage;
  const currentFundations = fundations.slice(indexOfFirstFund, indexOfLastFund);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className='fund-org-colls'>
      <ul className='fund-org-colls-container'>
        {currentFundations.map(fundation => (
          <li key={fundation.id} className='one'>
            <div className='name-goal-container'>
              <div className='name'>{fundation.name}</div>
              <div className='goal'>{fundation.goals}</div>
            </div>
            <div className='categories'>{fundation.categories}</div>
          </li>
        ))}
      </ul>
      <Pagination
        fundsPerPage={fundsPerPage}
        totalFunds={fundations.length}
        paginate={paginate}
      />
    </section>
  );
};
export default FundOrgColls;
