import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AddProfileComponent from '../components/AddProfileComponent';
import Footer from '../components/Footer';
import AppNavBar from '../components/AppNavBar';



class AddProfile extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <AddProfileComponent  history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}

export default AddProfile