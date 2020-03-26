import React from 'react';

import '../scss/components/threeColumns.scss';

const ThreeColumns = () => {
  return (
    <section className='three-columns' id='three-columns'>
      <div className='three-columns-container'>
        <div className='column'>
          <div className='number'>10</div>
          <div className='title'>ODDANYCH WORKÓW</div>
          <div className='text'>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </div>
        </div>
        <div className='column'>
          <div className='number'>5</div>
          <div className='title'>WSPARTYCH ORGANIZACJI</div>
          <div className='text'>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </div>
        </div>
        <div className='column'>
          <div className='number'>7</div>
          <div className='title'>ZORGANIZOWANY ZBIÓREK</div>
          <div className='text'>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumns;
