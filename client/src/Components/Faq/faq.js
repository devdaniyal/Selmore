import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Faqbanner from './faqbanner';
import Faqbannerfoot from './faqbannerfoot';
import Faqpanel1 from './faqpanel1';
import './faq.css';
import AbBanner from '../About Selmore/abBanner';

class Faq extends Component {
  render() {
    return (
        <div>
        		<Header />
                <AbBanner advertise={'FREQUENTLY ASKED QUESTIONS'} bred={'FAQ'}/>
        		<Faqpanel1 />
        		<Footer />
    	</div> 
    );
  }
}
export default Faq;