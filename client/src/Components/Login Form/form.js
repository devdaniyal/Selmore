import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './loginform.css';
import { logUser } from '../../action';
import store from '../../store';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { HttpUtils } from '../../Services/HttpUtils';


class FormLogin extends Component {
  constructor() {
    super()

    //initilize states
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      isData: true,
      data: {},
      isLoader: false,
      isAlert: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        store.dispatch(logUser(this.state));
        this.setState({ isLoader: true }, () => {
          // console.log(this.state.loggedIn, "logged in")
          localStorage.setItem('loggedIn', JSON.stringify(this.state.loggedIn))
        })
        // console.log('Received values of form: ', values);
        this.fectSignInApiFunc(values)
      }
    });
  }

  fectSignInApiFunc = async (values) => {
    // fetch signIn api
    let response = await HttpUtils.post('signin', values);
    // console.log(response.username);
    try {
      if (response.code === 200) {
        this.setState({ data: response.content, isData: true, isLoader: false, loggedIn: true });
        // console.log(response.token, 'token')
        localStorage.setItem('userToken', JSON.stringify(response.token))
        localStorage.setItem('userName', JSON.stringify(response.username))
      } else {
        this.setState({ isData: false, isLoader: true })
      }
      // this.props.modalDis();
      // document.getElementById(this.props.id).modal("hide");
      // if (response.code === 200) {
      //   return <Redirect to='/' />
      // }
    }
    catch (error) {
      console.log(error , 'catch')

      //error handling if user enter wrong email or password
      if (response === undefined) {
        this.setState({
          isAlert: true,
          isLoader: false
        })
        // console.log("please check your email or password")
      }
    }

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isData, isLoader, loggedIn, isAlert } = this.state
    // console.log(loggedIn ,'loggedIn')
    //redirect to home page
    if (loggedIn) {
      return <Redirect to='/' />
    }
    return (
      <div className="container">
        <div className="row school1" style={{ marginRight: '0px' }}>
          <div className="col-md-1">
          </div>
          <div className="col-md-4 school7">
            <img src="../images/log-in.png" style={{ width: '100%', height: '257px' }} />
          </div>
          <div className="col-md-4 school6">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <div className="form-group">
                <label for="exampleInputEmail1" style={{ marginBottom: '0px' }}>
                  <span className="school3">
                    Email address:
                </span>
                </label>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    }, {
                      required: true,
                      message: 'Please input your E-mail!',
                    }],
                  })(
                    <Input
                      type="text"
                      className={"form-control"}
                      id={"exampleInputEmail1"}
                      name="username"
                      placeholder="Email:*"
                    />
                  )}
                </Form.Item>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style={{ marginBottom: '0px' }}>
                  <span className="school3"
                  >Password:
                </span>
                </label>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input type="password"
                      className={"form-control"}
                      id={"exampleInputPassword1"}
                      placeholder="Password" />
                  )}
                </Form.Item>
              </div>
              <p style={{ marginTop: '-4%' }}><span className="school8">Forget Password!?</span></p>
              <button type="submit" className="btn btn-primary"><span className="school5">Login</span></button>
              <br />
              {isAlert ?
                <div class="alert alert-danger" role="alert">
                  Please cheak your email or password
          </div>
                : null
              }
            </Form>
          </div>
          {isLoader ? <div class="loading"> 	</div>
            : null
          }
          <div className="col-md-1">
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(FormLogin);
export default WrappedNormalLoginForm;
