import React, { Component } from 'react';
import './home.css';

class Footer extends Component {
  render() {
    return (
        <div>
      		<div className="container true3">
      			<div className="row">
      				<div className="col-md-4">      				
  						<h3  className="footertext1"><span>ABOUT</span></h3>
  							<div className="row">
	  							<div className="col-md-4 col-4"></div>
		      					<div className="col-md-4 col-4 hrline3"></div>
		      					<div className="col-md-4 col-4"></div>
  							</div>
      					<p  className="footertext2"><span>selmore advertising is leading <br/> outdoor advertising portal<br/> in pakistan. selmore is home <br/>for outdoor advertising <br/>space.
      					 We connect ads buyer<br/> to ads seller</span></p>
      				</div>
      				<div className="col-md-4">
      					<h3  className="footertext1"><span>QUICK LINKS</span></h3>
						<div className="row">
							<div className="col-md-4 col-4"></div>
	      					<div className="col-md-4 col-4 hrline3"></div>
	      					<div className="col-md-4 col-4"></div>
						</div>
						<div>
							<ul className="true2">
							  <li><a href="#">About Us</a></li>
							  <li><a href="#">FaQ</a></li>
							  <li><a href="#">Privacy Policy</a></li>
							  <li><a href="#">Advertise On Selmore</a></li>
							  <li>Contact Us</li>
							</ul>  							
						</div>	
      				</div>
      				<div className="col-md-4">
      					<h3  className="footertext1"><span>CONNECT</span></h3>
						<div className="row">
							<div className="col-md-4 col-4"></div>
	      					<div className="col-md-4 col-4 hrline3"></div>
	      					<div className="col-md-4 col-4"></div>
						</div>
						<div>
							<ul className="true2">
							  <li><a href="#">Blog</a></li>
							  <li><a href="#">Forum</a></li>
							  <li><a href="#">List your Ads</a></li>
							</ul>  							
						</div>
      				</div>
      			</div>
      		</div>
      			<div className="container">
      				<div className="row rowbackground true7">
                <div className="col-md-1"></div>
      					<div className="col-md-6 col-9 true6"><span className="true5">Copyrights 2019 By Selmore. All Rights Reservered</span></div>

      					<div className="col-md-5 col-3"></div>
      				</div>			
      			</div>
      		
       </div>
    );
  }
}

export default Footer;