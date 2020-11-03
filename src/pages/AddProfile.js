import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import AddProfileComponent from '../components/AddProfileComponent';


class AddProfile extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <SideBar   />
                <AddProfileComponent  history={this.props.history}/>
            </div>
        )
    }
}

export default AddProfile