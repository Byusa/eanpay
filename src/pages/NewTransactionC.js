import React, { Component } from 'react'
import AppNavBar from '../components/AppNavBar';
import NewTransC from '../components/NewTransC';
import Footer from '../components/Footer';

class NewTransactionC extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <NewTransC history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}

export default NewTransactionC;
