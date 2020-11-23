import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";


class Navbar extends Component {
   

    handleOnPressPersonSignup = (e) => {
        e.preventDefault(); 
        this.props.history.push({
            pathname: '/SignUp',
        });
    }
 
    handleOnPressHome = () => {
        this.props.history.push({
            pathname: '/',
        });
    }


    render() {
        return (
          <header id="header">
            <div className="container">
              <div className="header-row">
                <div className="header-column justify-content-start"> 
                  <div className="logo"> 
                    <Link to="/" className="d-flex">
                      <img
                        src={logo}
                        className="Nabarlogo"
                        width="121"
                        height="50"
                        alt="Eanpay"
                      />
                      {/* <h2 style={{color:"#08affb"}}>LOGO</h2> */}
                    </Link>
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>

                  <nav className="primary-menu navbar navbar-expand-lg">
                    <div id="header-nav" className="collapse navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                        <li><Link to="signIn" className="NavbarhowItWorks" > How It Works</Link></li>
                        <li><Link to="signIn" className="NavbarhowItWorks" > SEND</Link></li>        
                        {/* <li className="dropdown"> <a className="dropdown-toggle" href="#">Features</a>
                          <ul className="dropdown-menu">
                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Headers</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                                <li><a className="dropdown-item" href="feature-header-dark.html">Dark Version</a></li>
                                <li><a className="dropdown-item" href="feature-header-primary.html">Primary Version</a></li>
                                <li><a className="dropdown-item" href="index-2.html">Transparent Version</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                                <li><a className="dropdown-item" href="feature-navigation-dropdown-dark.html">Dark Version</a></li>
                                <li><a className="dropdown-item" href="feature-navigation-dropdown-primary.html">Primary Version</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Second Navigation</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="send-money.html">Default Version</a></li>
                                <li><a className="dropdown-item" href="deposit-money.html">Alternate Version</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="feature-layout-boxed.html">Layout Boxed</a></li>
                          </ul>
                        </li> */}
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="header-column justify-content-end"> 

                  <nav className="login-signup navbar navbar-expand">
                    <ul className="navbar-nav">
                      <li><Link to="/signIn" className="NavbarLogin">Login</Link></li>
                      <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-primary" href="" onClick={this.handleOnPressPersonSignup}>Sign Up</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default Navbar;