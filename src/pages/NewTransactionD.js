import React, { Component } from 'react';
import AppNavBar from '../components/AppNavBar';
import NewTransD from '../components/NewTransD';
import Footer from '../components/Footer';


class NewTransactionD extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <NewTransD  history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}

export default NewTransactionD;
