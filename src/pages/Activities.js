import React, { Component } from 'react'
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import Searchbar from '../components/Searchbar';
import profileImg from "../assets/tempImages/profile-thumb.jpg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

 

class Activities extends Component {

    handleOnPressNewTransaction = () => {
        this.props.history.push({
            pathname: '/NewTransactionA',
        });
    }
 
    render() {
        return (
            <div id="main-wrapper">
                <AppNavBar />
                {/* <SideBar history={this.props.history} /> */}
                {/* <button style={{ color: 'white' }} className="Appbutton" onClick={this.handleOnPressNewTransaction}>
                    <label className="AppbuttonWords"> New Transaction</label>
                </button> */}
                <div id="content" class="py-4">
                  <div class="container">
                    <div class="row"> 
                      {/* <!-- Left Panel
                      ============================================= --> */}
                      <aside class="col-lg-3"> 
                      
                          {/* <!-- Profile Details
                          =============================== --> */}
                          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
                              <div class="profile-thumb mt-3 mb-4"> 
                                <img
                                  src={profileImg}
                                  className="rounded-circle"
                                />
                              <div class="profile-thumb-edit custom-file bg-primary text-white" data-toggle="tooltip" title="Change Profile Picture"> <i class="fas fa-camera position-absolute"></i>
                                  <input type="file" class="custom-file-input" id="customFile"/>
                              </div>
                              </div>
                              <p class="text-3 font-weight-500 mb-2">Hello, {this.props.users.FirstName +" "+ this.props.users.LastName}</p>
                              <p class="mb-2"><a href="profile.html" class="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i class="fas fa-edit"></i></a></p>
                          </div>
                          {/* <!-- Profile Details End --> 
                          
                          <!-- Available Balance
                          =============================== --> */}
                         {/* 
                         <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
                              <div class="text-17 text-light my-3"><i class="fas fa-wallet"></i></div>
                              <h3 class="text-9 font-weight-400">$2956.00</h3>
                              <p class="mb-2 text-muted opacity-8">Available Balance</p>
                              <hr class="mx-n3"/>
                              <div class="d-flex"><a href="#" class="btn-link mr-auto">Withdraw</a> <a href="#" class="btn-link ml-auto">Deposit</a></div>
                          </div>
                        */}
                          {/* <!-- Available Balance End --> 
                          
                          <!-- Need Help?
                          =============================== --> */}
                          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
                              <div class="text-17 text-light my-3"><i class="fas fa-comments"></i></div>
                              <h3 class="text-5 font-weight-400 my-4">Need Help?</h3>
                              <p class="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br/>
                              Our experts are here to help!.</p>
                              <Link to="/" class="btn btn-primary btn-block">Chate with Us</Link> 
                          </div>
                          {/* <!-- Need Help? End -->  */}
                      
                      </aside>
                      {/* <!-- Left Panel End --> 
                      
                      <!-- Middle Panel
                      ============================================= --> */}
                      <div class="col-lg-9"> 
                        
                        {/* <!-- Profile Completeness
                        =============================== --> */}
                        <div class="bg-white shadow-sm rounded p-4 mb-4">
                          <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Profile Completeness<span class="border text-success rounded-pill font-weight-500 text-2 px-3 py-1 ml-2">50%</span></h3>
                          <hr class="mb-4 mx-n4"/>
                          <div class="row profile-completeness">
                            <div class="col-sm-6 col-md-3 mb-4 mb-md-0">
                              <div class="border rounded text-center px-3 py-4"> <span class="d-block text-10 text-light mt-2 mb-3"><i class="fas fa-mobile-alt"></i></span> <span class="text-5 d-block text-success mt-4 mb-3"><i class="fas fa-check-circle"></i></span>
                                <p class="mb-0">Mobile Added</p>
                              </div>
                            </div>
                            <div class="col-sm-6 col-md-3 mb-4 mb-md-0">
                              <div class="border rounded text-center px-3 py-4"> <span class="d-block text-10 text-light mt-2 mb-3"><i class="fas fa-envelope"></i></span> <span class="text-5 d-block text-success mt-4 mb-3"><i class="fas fa-check-circle"></i></span>
                                <p class="mb-0">Email Added</p>
                              </div>
                            </div>
                            <div class="col-sm-6 col-md-3 mb-4 mb-sm-0">
                              <div class="border rounded text-center px-3 py-4"> <span class="d-block text-10 text-light mt-2 mb-3"><i class="fas fa-credit-card"></i></span> <span class="text-5 d-block text-light mt-4 mb-3"><i class="far fa-circle "></i></span>
                                <p class="mb-0">
                                  <Link class="btn-link stretched-link" to="AddCard"> Add Card </Link>
                                  {/*<a class="btn-link stretched-link" href="">Add Card</a>*/}
                                  </p>
                              </div>
                            </div>

                            {/* 

                              <div class="col-sm-6 col-md-3">
                                <div class="border rounded text-center px-3 py-4"> <span class="d-block text-10 text-light mt-2 mb-3"><i class="fas fa-university"></i></span> <span class="text-5 d-block text-light mt-4 mb-3"><i class="far fa-circle "></i></span>
                                  <p class="mb-0"><a class="btn-link stretched-link" href="">Add Bank Account</a></p>
                                </div>
                              </div>

                            */}

                          </div>
                        </div>
                        {/* <!-- Profile Completeness End --> 
                        
                        <!-- Recent Activity
                        =============================== --> */}
                        <div class="bg-white shadow-sm rounded py-4 mb-4">
                          <h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Recent Activity</h3>
                          
                          {/* <!-- Title
                          =============================== --> */}
                          <div class="transaction-title py-2 px-4">
                            <div class="row font-weight-00">
                              <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
                              <div class="col col-sm-7">Description</div>
                              <div class="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                              <div class="col-3 col-sm-2 text-right">Amount</div>
                            </div>
                          </div>
                          {/* <!-- Title End --> 
                          
                          <!-- Transaction List
                          =============================== --> */}
                          <div class="transaction-list">
                            <div class="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                              <div class="row align-items-center flex-row">
                                <div class="col-2 col-sm-1 text-center"> <span class="d-block text-4 font-weight-300">16</span> <span class="d-block text-1 font-weight-300 text-uppercase">APR</span> </div>
                                <div class="col col-sm-7"> <span class="d-block text-4">HDFC Bank</span> <span class="text-muted">Withdraw to Bank account</span> </div>
                                <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span class="text-warning" data-toggle="tooltip" data-original-title="In Progress"><i class="fas fa-ellipsis-h"></i></span> </div>
                                <div class="col-3 col-sm-2 text-right text-4"> <span class="text-nowrap">- $562</span> <span class="text-2 text-uppercase">(USD)</span> </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Transaction List End --> 
                          
                          <!-- Transaction Item Details Modal
                          =========================================== --> */}
                          <div id="transaction-detail" class="modal fade" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered transaction-details" role="document">
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div class="row no-gutters">
                                    <div class="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                                      <div class="my-auto text-center">
                                        <div class="text-17 text-white my-3"><i class="fas fa-building"></i></div>
                                        <h3 class="text-4 text-white font-weight-400 my-3">Envato Pty Ltd</h3>
                                        <div class="text-8 font-weight-500 text-white my-4">$557.20</div>
                                        <p class="text-white">15 March 2020</p>
                                      </div>
                                    </div>
                                    <div class="col-sm-7">
                                      <h5 class="text-5 font-weight-400 m-3">Transaction Details
                                        <button type="button" class="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                                      </h5>
                                      <hr/>
                                      <div class="px-3">
                                        <ul class="list-unstyled">
                                          <li class="mb-2">Payment Amount <span class="float-right text-3">$562.00</span></li>
                                          <li class="mb-2">Fee <span class="float-right text-3">-$4.80</span></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="text-center mt-4"><a href="transactions.html" class="btn-link text-3">View all<i class="fas fa-chevron-right text-2 ml-2"></i></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Searchbar />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  users: state.FetchReducer.users
})

export default connect(
  mapStateToProps,
  undefined)(Activities);

// export default ProtectedHOC(Activities)