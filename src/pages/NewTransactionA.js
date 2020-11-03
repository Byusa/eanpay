import React, { Component } from 'react';
import AppNavBar from '../components/AppNavBar';
import NewTransA from '../components/NewTransA';
import Footer from '../components/Footer';

class NewTransactionA extends Component {
    render() {
        return (
            <div id="main-wrapper"> 
            <AppNavBar />
            <NewTransA  history={this.props.history}/>
            <Footer />
          </div>
        )
    }
}

export default NewTransactionA;
