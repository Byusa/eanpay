import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import PayConnectComponent from '../components/PayConnectComponent';

//import institutionList from '../Data/institutionsList';


class PayConnect extends Component {
    
    render() {
        return (
            <div>
                <AppNavBar />
                <SideBar history={this.props.history} />
                <PayConnectComponent />
            </div>
        )
    }
}

export default PayConnect;
 