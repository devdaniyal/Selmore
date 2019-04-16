import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './loginform.css';
import { logUser } from '../../action';
import store from '../../store';



class Form extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }
    // this.singIn = this.singIn.bind(this);
  }

  singIn(e) {
    e.preventDefault();
    store.dispatch(logUser(this.state));
    this.setState({ loggedIn: true }, () => {
      console.log(this.state.loggedIn, "logged in")
      localStorage.setItem('loggedIn' , JSON.stringify(this.state.loggedIn))
    })

    // const { email, password } = this.state;
    // console.log(email, 'email');
    // console.log(password, "password");
    // return false;
    
  }

  render() {
    // console.log('renderrr******************')
    if(this.state.loggedIn){
      return <Redirect to = '/'/>

    }
    return (
      <div className="container">
        <div className="row school1" style={{ marginRight: '0px' }}>
          <div className="col-md-1">
          </div>
          <div className="col-md-5 school7">
            <img src="../images/log-in.png" style={{ width: '100%', height: '257px' }} />
          </div>
          <div className="col-md-4 school6">
            <form onSubmit={this.singIn.bind(this)}>
              <div className="form-group">
                <label for="exampleInputEmail1" style={{ marginBottom: '0px' }}><span className="school3">Email address:</span></label>
                <input type="email" className="form-control" id="exampleInputEmail1" style={{ marginTop: '-2%' }} onChange={(e) => this.setState({ email: e.target.value })} />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style={{ marginBottom: '0px' }}><span className="school3">Password:</span></label>
                <input type="password" className="form-control" id="exampleInputPassword1" style={{ marginTop: '-2%' }} onChange={(e) => this.setState({ password: e.target.value })} />
              </div>
              <p style={{ marginTop: '-4%' }}><span className="school8">Forget Password!?</span></p>
              <button type="submit" className="btn school4"><span className="school5" onClick={this.singIn.bind(this)}>Login</span></button>
            </form>
          </div>
          <div className="col-md-1">
          </div>
        </div>
      </div>
    );
  }
}

export default Form;