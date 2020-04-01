import React, { Component } from 'react';

import Title from './Title';
import '../scss/components/help.scss';

import FundOrgColls from '../components/FundOrgColls';

class Help extends Component {
  state = {
    value: 'fundations'
  };

  // const [value, setValue] = useState('fundations');

  setOpen = e => {
    console.log(e.target.id);
    this.setState({
      value: e.target.id
    });
  };

  render() {
    return (
      <section className='help'>
        <Title title='Komu pomagamy?' />
        <ul className='who-help'>
          <li className='item' id='fundations' onClick={this.setOpen}>
            Fundacjom
          </li>
          <li className='item' id='organizations' onClick={this.setOpen}>
            Organizacjom pozarządowym
          </li>
          <li className='item' id='collections' onClick={this.setOpen}>
            Lokalnym zbiórkom
          </li>
        </ul>
        <div className='description'>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, Organizacji
          Pozarządowych oraz Zbiórek Lokalnych, z którymi współpracujemy. Możesz
          sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
        <FundOrgColls value={this.state.value} />
      </section>
    );
  }
}

export default Help;
