import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Mardanbanner from './mardanbanner';
import Mardanpanel1 from './mardanpanel1';
import Mardanpanel2 from './mardanpanel2';
import './billmardan.css';

class Billmardan extends Component {
  render() {
    return (
        <div>
        	<Header />
            <Mardanbanner />
            <Mardanpanel1 />
            <Mardanpanel2 />
            <Footer />
    	</div> 
    );
  }
}
export default Billmardan;