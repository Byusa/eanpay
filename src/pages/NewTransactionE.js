import React, { Component } from 'react';
import AppNavBar from '../components/AppNavBar';
import NewTransE from '../components/NewTransE';
import Footer from '../components/Footer';


class NewTransactionE extends Component {
    render() {
        return (
            <div >
                <AppNavBar />
                <NewTransE  history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}

export default NewTransactionE;
 