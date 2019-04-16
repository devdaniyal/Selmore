import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Form from './form';
import './loginform.css';

class Login extends Component {
  render() {
    return (
      <div>
          <Form/>
      </div>
    );
  }
}

export default Login;