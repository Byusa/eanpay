import React, { Component } from 'react';
import AppNavBar from '../components/AppNavBar';
import AddRecip from '../components/AddRecip';
import Footer from '../components/Footer';

class AddRecipientA extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <AddRecip  history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}

export default AddRecipientA;
