import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

  onBinClick(event) {
    // stop the browser from trying to navigate
    event.preventDefault();

    // when a user clicks 'Create Bin'
    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`);
    });
  }

  render() {
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>Markbin</Link>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <a><Accounts /></a>
          </li>
          <li>
            <a href='#' onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

// to use this, import it on both server and client side main.js files!
export default Header;
