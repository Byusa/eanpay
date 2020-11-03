import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import NewTransE from '../components/NewTransE';

class NewTransactionE extends Component {
    render() {
        return (
            <div >
                <AppNavBar />
                <SideBar   />
                <NewTransE  history={this.props.history}/>
            </div>
        )
    }
}

export default NewTransactionE;
