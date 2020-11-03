import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import NewTransF from '../components/NewTransF';

class NewTransactionF extends Component {
    render() {
        return (
            <div>
               <AppNavBar />
                <SideBar   />
                <NewTransF  history={this.props.history}/>
            </div>
        )
    }
}

export default NewTransactionF; 
