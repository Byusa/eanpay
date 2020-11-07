import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import NewTransD from '../components/NewTransD';

class NewTransactionD extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <NewTransD  history={this.props.history}/>
            </div>
        )
    }
}

export default NewTransactionD;
