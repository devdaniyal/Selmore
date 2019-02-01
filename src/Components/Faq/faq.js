import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Faqbanner from './faqbanner';
import Faqbannerfoot from './faqbannerfoot';
import Faqpanel1 from './faqpanel1';
import './faq.css';


class Faq extends Component {
  render() {
    return (
        <div>
        		<Header />
        		<Faqbanner />
        		<Faqbannerfoot />
        		<Faqpanel1 />
        		<Footer />
    	</div> 
    );
  }
}
export default Faq;