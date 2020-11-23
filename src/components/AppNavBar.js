import React, { Component } from "react";
import fire from "../config/Fire";
import { BrowserRouter as Switch, withRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import ls from "local-storage";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profileImg from "../assets/tempImages/profile-thumb-sm.jpg";
import { connect } from 'react-redux';


class AppNavBar extends Component {
  constructor(props) {
    super(props);
    //this.logout = this.logout.bind(this);
  }

  logout = ()  =>{ 
    fire
      .auth()
      .signOut()
      .then((u) => {
        ls.remove("token");
        console.log("xxxxxxxxxxx logout =====",this.props.history);
        this.props.history.push({
          pathname: "/",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  render() {
    return (
      <header id="header" history={this.props.history}>
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
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#header-nav"
              >
                {" "}
                <span></span> <span></span> <span></span>{" "}
              </button>
              <nav className="primary-menu navbar navbar-expand-lg">
                <div id="header-nav" className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li><Link to="Activities" > Activities</Link></li>
                    <li><Link to="NewTransactionA" > Send</Link></li>
                    <li><Link to="Recipients" > Recipients</Link></li>
                    <li><Link to="Cards" > Cards</Link></li>
                    <li><Link to="AccountHolderDetails" > Profile</Link></li>
                  </ul>
                </div>
              </nav>
            </div>



            <div className="header-column justify-content-end">
              <nav className="login-signup navbar navbar-expand">
                <ul className="navbar-nav">
                  <li className="dropdown language">
                    {" "}
                    <Link className="dropdown-toggle" to="\">
                      En
                    </Link>
            
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="\">
                          English
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="\">
                          French
                        </Link>
                      </li> 
                    </ul>
                  </li>

                  <li className="dropdown profile ml-2">
                    {" "}
                    <div className="px-0 dropdown-toggle">
                      <img
                        src={profileImg}
                        className="rounded-circle"
                        alt="Eanpay"
                        onClick={this.logout}
                      />
                    </div>
                      


                    <ul className="dropdown-menu">
                      <li className="text-center text-3 py-2">Hi, {this.props.users.FirstName +" "+ this.props.users.LastName}</li>
                      <li className="dropdown-divider mx-n3"></li>
                      <li>
                        <a className="dropdown-item" href="settings-profile.html">
                          <i className="fas fa-user"></i>My Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="settings-Security.html">
                          <i className="fas fa-shield-alt"></i>Security
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="settings-payment-methods.html"
                        >
                          <i className="fas fa-credit-card"></i>Payment Methods
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="settings-notifications.html"
                        >
                          <i className="fas fa-bell"></i>Notifications
                        </a>
                      </li>
                      <li className="dropdown-divider mx-n3"></li>
                      <li>
                        <a className="dropdown-item" href="help.html">
                          <i className="fas fa-life-ring"></i>Need Help?
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          <i className="fas fa-sign-out-alt"></i>Sign Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.FetchReducer.users
}) 

export default connect(
  mapStateToProps,
  undefined)(AppNavBar);

