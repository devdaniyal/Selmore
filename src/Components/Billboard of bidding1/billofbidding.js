import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Billofbanner from './billofbanner';
import Billofpanel1 from './billofpanel1';
import Billofpanel2 from './billofpanel2';
import './billofbidding.css';

class Billbidding extends Component {
  render() {
    return (
        <div>
          	<Header />
            <Billofbanner />  
            <Billofpanel1 />
            <Billofpanel2 />
            <Footer />      
  		  </div> 
    );
  }
}
export default Billbidding;