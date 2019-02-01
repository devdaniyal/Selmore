import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Billbanner from './billboardsbanner';
import Billpanel1 from './billpanel1';
import Billpanel2 from './billpanel2';
import './billboards.css';

class Billboards extends Component {
  render() {
    return (
        <div>
        	<Header />
        	<Billbanner />
        	<Billpanel1 />
        	<Billpanel2 />
            <Footer />
    	</div> 
    );
  }
}
export default Billboards;