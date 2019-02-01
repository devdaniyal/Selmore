import React, { Component } from 'react';
import Home from './Components/home';
import Footer from './Components/footer';
import About from './Components/About Selmore/about';
import Advertising from './Components/Advertising Agency/advertising';
import Faq from './Components/Faq/faq';
import Seller from './Components/Seller/seller';
import Buyer from './Components/Buyer/buyer';
import Login from './Components/Login Form/loginform';
import Contactpage from './Components/Contact Page/contact';
import Sellerprofile from './Components/Seller Profile/sellerprofile';
import Billboardmardan from './Components/Billboard Mardan/billmardan';
import Billboardmilitary from './Components/Billboard Military/billmilitary';
import Billboards from './Components/Billboards/billboards';
import Singposted from './Components/Singposted Listings/singposted';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
    		<Billboardmilitary/>
	    </div>  	
    );
  }
}

export default App;


