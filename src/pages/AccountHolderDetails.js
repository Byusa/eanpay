import React, { Component } from 'react'
import Footer from '../components/Footer';
import AppNavBar from '../components/AppNavBar';


class AccountHolderDetails extends Component {

    handleOnPressAddTheProfile = () => {
        this.props.history.push({
            pathname: '/EditProfile',
        });
    }

    render() {
        return (
            <div> 
                <AppNavBar />
                <div id="content" className="py-4">
                    <div className=""> 
                    <div className="row">
                        <div className="col-md-9 col-lg-10 col-xl-6 mx-auto">
                        <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                            <div class="text-center">
                                
                                <h3>
                                    Account Holder Details
                                </h3>
                                <br></br>
                                <label className="NewAccountHolderSubtitle NewAccountHolderSubtitle1">
                                    We use this information to confirm your identity, as required by federal baking laws.
                                    Please note any information you provide us will be stored securely and in accordance
                                    with our Privacy Policy
                                </label>
                                <br></br>
                                <button style={{ color: 'white' }} className="btn btn-primary btn-sm" onClick={this.handleOnPressAddTheProfile}>
                                    Start Identification 
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>



        )
    }
}

export default AccountHolderDetails
