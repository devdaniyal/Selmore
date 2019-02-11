import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Billbiddbanner from './billbiddbanner';
import Billbiddpanel1 from './billbiddpanel1';
import Billbiddpanel2 from './billbiddpanel2';
import './billbidding.css';

class Billbidding extends Component {
  render() {
    return (
        <div>
        	<Header />
          	<Billbiddbanner />
          	<Billbiddpanel1 />
          	<Billbiddpanel2 />
        
  		</div> 
    );
  }
}
export default Billbidding;