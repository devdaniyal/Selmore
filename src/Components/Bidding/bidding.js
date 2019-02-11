import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Biddbanner from './biddingbanner';
import Biddpanel1 from './biddpanel1';
import './bidding.css';

class Bidding extends Component {
  render() {
    return (
      <div>
      		<Header />
      		<Biddbanner />
      		<Biddpanel1 />
       </div>
    );
  }
}

export default Bidding;
