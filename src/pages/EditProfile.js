import React, { Component } from 'react';
import AppNavBar from '../components/AppNavBar';
import { connect } from 'react-redux';
import profileImg from "../assets/tempImages/profile-thumb.jpg";

class EditProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleOnPressAddProfile = () => {
        this.props.history.push({
            pathname: '/AddProfile',
        });
    }
    render() {

        return (
            // <div>

            //     <button style={{ color: 'white' }} className="Appbutton" onClick={this.handleOnPressAddProfile}>
            //         <label className="AppbuttonWords"> Edit Profile </label>
            //     </button>


            //     </form>
            // </div>
            <div>
             <AppNavBar />
             <div id="content" class="py-4">
              
               <div class="container">
                 <div class="row"> 
                   
                   <aside class="col-lg-3"> 

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


                     <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
                       <div class="text-17 text-light my-3"><i class="fas fa-wallet"></i></div>
                       <h3 class="text-9 font-weight-400">$2956.00</h3>
                       <p class="mb-2 text-muted opacity-8">Available Balance</p>
                       <hr class="mx-n3"/>
                       <div class="d-flex"><a href="withdraw-money.html" class="btn-link mr-auto">Withdraw</a> <a href="deposit-money.html" class="btn-link ml-auto">Deposit</a></div>
                     </div>

                     <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
                       <div class="text-17 text-light my-3"><i class="fas fa-comments"></i></div>
                       <h3 class="text-5 font-weight-400 my-4">Need Help?</h3>
                       <p class="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br/>
                         Our experts are here to help!.</p>
                       <a href="#" class="btn btn-primary btn-block">Chate with Us</a> </div>
  
                     
                   </aside>

                   <div class="col-lg-9"> 
                     

                     <div class="bg-white shadow-sm rounded p-4 mb-4">
                       <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Personal Details<a href="#edit-personal-details" onClick={this.handleOnPressAddProfile} class="ml-auto text-2 text-uppercase btn-link"><span class="mr-1"><i class="fas fa-edit"></i></span>Edit</a></h3>
                       <hr class="mx-n4 mb-4"/>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Customer ID:</p>
                         <p class="col-sm-9 text-3">{this.props.users.userID}</p>
                       </div>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Name:</p>
                         <p class="col-sm-9 text-3">{this.props.users.FirstName +" "+ this.props.users.LastName}</p>
                       </div>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth:</p>
                         <p class="col-sm-9 text-3"></p>
                       </div>
                       <div class="form-row align-items-baseline">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Address:</p>
                         <p class="col-sm-9 text-3">{this.props.users.address}<br/>
                          {this.props.users.city} ,<br/>
                          {this.props.users.country},<br/>
                          {this.props.users.PostalCode}</p>
                       </div>
                     </div>

                     <div class="bg-white shadow-sm rounded p-4 mb-4">
                       <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Account Settings</h3>
                       <hr class="mx-n4 mb-4"/>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Language:</p>
                         <p class="col-sm-9 text-3">English (United States)</p>
                       </div>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Time Zone:</p>
                         <p class="col-sm-9 text-3">(GMT-06:00) Central America</p>
                       </div>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Account Status:</p>
                         <p class="col-sm-9 text-3"><span class="bg-success text-white rounded-pill d-inline-block px-2 mb-0"><i class="fas fa-check-circle"></i> Active</span></p>
                       </div>
                     </div>

                     <div class="bg-white shadow-sm rounded p-4 mb-4">
                       <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Email Addresses</h3>
                       <hr class="mx-n4 mb-4"/>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Email ID:</p>
                         <p class="col-sm-9 text-3">{this.props.users.email} <span class="badge badge-info text-1 font-weight-500 rounded-pill px-2 py-1 ml-2">Primary</span></p>
                       </div>
                     </div>

                  <div class="bg-white shadow-sm rounded p-4 mb-4">
                       <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Phone</h3>
                       <hr class="mx-n4 mb-4"/>
                       <div class="form-row align-items-center">
                         <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Mobile:</p>
                         <p class="col-sm-9 text-3 align-items-center d-flex">{this.props.users.phoneNumber}<span class="badge badge-info text-1 font-weight-500 rounded-pill px-2 py-1 ml-2">Primary</span></p>
                       </div>
                     </div>   
                   </div>
               
                 </div>
               </div>
             </div>
             </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.FetchReducer.users
})

export default connect(
    mapStateToProps,
    undefined)(EditProfile);
