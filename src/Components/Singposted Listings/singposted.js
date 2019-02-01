import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Singbanner from './singbanner';
import Singpanel1 from './singpanel1';
import './singposted.css';

class Singposted extends Component {
  render() {
    return (
        <div>
        	<Header />
        	<Singbanner />
        	<Singpanel1 />
        	<Footer />
    	</div> 
    );
  }
}
export default Singposted;