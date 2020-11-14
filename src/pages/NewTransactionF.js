import React, { Component } from 'react';
import AppNavBar from '../components/AppNavBar';
import NewTransF from '../components/NewTransF';
import Footer from '../components/Footer';


class NewTransactionF extends Component {
    render() {
        return (
            <div>
               <AppNavBar />
                <NewTransF  history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}

export default NewTransactionF; 
