import React, { Component } from 'react';
import './home.css';

class Panel1 extends Component {
  render() {
    return (
      <div>

        <div className="container" style={{"backgroundImage":"url('../images/dropdown1.png')"}}>
          <div className="row">
      			<div className="container">
      				<div className="row">
      					<div className="col-md-4"></div>
      					<div className="col-md-4 head3"><h1 className="pakola1"><span className="head2">SEARCH BY CATEGORY</span></h1></div>
      					<div className="col-md-4"></div>
      				</div>
      				<div className="row">
      					<div className="col-md-4 col-4"></div>
      					<div className="col-md-4 col-4 hrline"></div>
      					<div className="col-md-4 col-4"></div>
      				</div>
      			</div>
      		</div><br/>
          <div className="row">
            <div className="container space">
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane3">Bus Ads (0)</h5>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane3">Taxi Ads (3)</h5>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane3">Billboard (125)</h5>
                        </div>
                    </div>
                  </div>
            </div>
          </div>
          <div className="row">
            <div className="container space">      
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane2">Shopping <br/>Mall (0)</h5>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane3">Airport Ads (0)</h5>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane2">Bus Shelter <br/>Ads (0)</h5>
                        </div>
                    </div>
                  </div>
            </div>
          </div>
          <div className="row">
            <div className="container space">   
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane3">Other (0)</h5>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane3">Radio Ads (0)</h5>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 divborder">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <img src="../images/bilbord.png" className="lane1"/>
                        </div>
                        <div className="col-md-9 col-9 col-sm-9">                                                
                            <h5 className="lane2">Total Cinima <br/>Ads (0)</h5>
                        </div>
                    </div>
                  </div>  
            </div>
          </div>
        </div><br/>

      </div>
    );
  }
}

export default Panel1;