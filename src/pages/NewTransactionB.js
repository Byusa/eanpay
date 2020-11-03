import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import NewTransB from '../components/NewTransB'
import Footer from '../components/Footer';

class NewTransactionB extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <NewTransB  history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}

export default NewTransactionB;
