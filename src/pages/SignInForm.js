import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/Fire.js';
import Navbar from '../components/Navbar';
import ls from 'local-storage'
import bgImage from '../assets/tempImages/bg/image-3.jpg'




class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this); //bind to avoid errors
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        console.log('mounted for a sec')
    }
    
    

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            ls.set('token', u.user.uid ) //Any time the  user logs in persist to local storage
            this.props.history.push({
                pathname: '/Activities',
            });
        }).catch((error) => {
            alert(error.message);
        });
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
        <div id="main-wrapper" className="h-100">
          <Navbar  history={this.props.history}/>
          <div className="container-fluid px-0 h-100">
            <div className="row no-gutters h-100"> 
              <div className="col-md-6">
                <div className="hero-wrap d-flex align-items-center h-100">
                  <div className="hero-mask opacity-8 bg-primary"></div>
                  <div className="hero-bg hero-bg-scroll" style={{backgroundImage:"url("+bgImage+")"}}></div>
                  <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                    <div className="row no-gutters">
                      <div className="col-10 col-lg-9 mx-auto">
                        <div className="logo mt-5 mb-5 mb-md-0"> 
                          <Link to="/" className="d-flex">
                            <h2 style={{color:'white'}}>LOGO</h2>
                            {/* <img src={logo} className="Nabarlogo" width="121" height="50"  alt="Eanpay" /> */}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters my-auto">
                      <div className="col-10 col-lg-9 mx-auto">
                        <h1 className="text-11 text-white mb-4">Welcome back!</h1>
                        <p className="text-4 text-white line-height-4 mb-5">We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-center">
                <div className="container my-4">
                  <div className="row">
                    <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                      <h3 className="font-weight-400 mb-4">Log In</h3>
                      <form id="loginForm" onSubmit={this.handleSubmit}>
                        <div className="FormField form-group">
                          <label htmlFor="email">Email</label>
                          <input
                              value={this.state.email}
                              onChange={this.handleChange}
                              type="email"
                              name="email"
                              className="LoginEmail form-control"
                              id="email"
                              placeholder="Email"
                          />
                        </div>
                        <div className="FormField form-group">
                          <label htmlFor="password">Password</label>
                          <input
                              value={this.state.password}
                              onChange={this.handleChange}
                              type="password"
                              name="password"
                              className="LoginPassword form-control"
                              id="password"
                              placeholder="Password"
                          />
                        </div>
                        
                        <div className="row">
                          <div className="col-sm">
                            <div className="form-check custom-control custom-checkbox">
                              <input id="remember-me" name="remember" className="custom-control-input" type="checkbox"/>
                              <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                            </div>
                          </div>
                          <div className="col-sm text-right"><a className="btn-link" href="#">Forgot Password ?</a></div>
                        </div>
                        <button type="submit" onClick={this.login} className="LoginButton btn btn-primary btn-block my-4">
                              <label className="signUpButtonWord"> Log In </label>
                        </button>
                      </form>
                      <p className="text-3 text-center text-muted">Don't have an account?  

                        { <Link to="SignUp">
                            Sign Up
                        </Link>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        );
    }
}



export default SignInForm;
