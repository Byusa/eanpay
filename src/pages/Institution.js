import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';


export class Institution extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <SideBar history={this.props.history} />
                
            </div>
        )
    }
}

export default Institution
