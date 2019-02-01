import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Sellprobanner from './sellprofilebanner';
import Sellpropanel1 from './sellprofilepanel1';
import './sellprofile.css';

class Sellerprofile extends Component {
  render() {
    return (
        <div>
        	<Header />
        	<Sellprobanner />
        	<Sellpropanel1 />
        	<Footer />
    	</div> 
    );
  }
}
export default Sellerprofile;