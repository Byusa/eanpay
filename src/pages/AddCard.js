import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import AddCardComponent from '../components/AddCardComponent';
import Footer from '../components/Footer';

class AddCard extends Component {
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
                            <h5 class="modal-title font-weight-400">Add a Card</h5>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <AddCardComponent  history={this.props.history}/>
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

export default AddCard;
