import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Militarypanel1 from './militarypanel1';
import Militarypanel2 from './militarypanel2';
import Militarybanner from './militarybanner';
import './billmilitary.css';

class Billboardmilitary extends Component {
  render() {
    return (
        <div>
        	<Header />
        	<Militarybanner />
        	<Militarypanel2 />
  		</div> 
    );
  }
}
export default Billboardmilitary;