import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/EANPaylogoW.jpg';
import RecipientsIcon from '../assets/images/RecipientsIcon.svg';
import CreditCardIcon from '../assets/images/CreditCardIcon.svg';
import ProfileIcon from '../assets/images/ProfileIcon.svg';
import ActivitiesIcon from '../assets/images/ActivitiesIcon.svg';

class SideBar extends Component {
    handleOnPressPayConnect = () => {
        this.props.history.push({
            pathname: '/PayConnect',
        })
    }
    handleOnPressActivities = () => {
        this.props.history.push({
            pathname: '/Activities',
        });
    }
    handleOnPressRecipients = () => {
        this.props.history.push({
            pathname: '/Recipients',
        })
    }
    handleOnPressCards = () => {
        this.props.history.push({
            pathname: '/Cards',
        })
    }
    handleOnPressProfile = () => {
        this.props.history.push({
            pathname: '/AddProfile',
        })
    }

    render() {
        return (
            <div className="SideBarStyle">
                <Link to="/">
                    <img src={logo} className="SideBarLogo" alt="" />
                </Link>


               {/* <Link to="/PayConnect">
                    <button className="SideBarElements SideBarElement0">
                        <img src={PayConnectHome} className="SideBarButtonLogo" alt="" />
                        <label className="SideBarElementsWords"> Pay Connect </label>
                    </button>
                    </Link>
                    */}

                <Link to="/Activities" >
                    <button className="SideBarElements SideBarElement1">
                        <img src={ActivitiesIcon} className="SideBarButtonLogo" alt="" />
                        <label className="SideBarElementsWords"> Eanpay </label>
                    </button>
                </Link>

                <Link to="/Recipients">
                    <button className="SideBarElements SideBarElement2">
                        <img src={RecipientsIcon} className="SideBarButtonLogo" alt="" />
                        <label className="SideBarElementsWords"> Recipients </label>
                    </button>
                </Link>



                <Link to="/Cards" >
                    <button className="SideBarElements SideBarElement3">
                        <img src={CreditCardIcon} className="SideBarButtonLogo" alt="" />
                        <label className="SideBarElementsWords"> Cards </label>
                    </button>
                </Link>


                <Link to="/AccountHolderDetails" >
                    <button className="SideBarElements SideBarElement4">
                        <img src={ProfileIcon} className="SideBarButtonLogo" alt="" />
                        <label className="SideBarElementsWords"> Profile </label>
                    </button>
                </Link>


                {/*<button className="SideBarElements SideBarElement0" onClick={this.handleOnPressPayConnect} >
                        <label className="SideBarElementsWords"> Pay Connect </label>
                </button>

                <button className="SideBarElements SideBarElement1" onClick={this.handleOnPressActivities} >
                        <label className="SideBarElementsWords"> Activities </label>
                </button>

                <button className="SideBarElements SideBarElement2" onClick={this.handleOnPressRecipients} >
                        <label className="SideBarElementsWords"> Recipients </label>
                </button>

                <button className="SideBarElements SideBarElement3" onClick={this.handleOnPressCards} >
                    <label className="SideBarElementsWords"> Cards </label>
                </button>

                <button className="SideBarElements SideBarElement4" onClick={this.handleOnPressProfile}>
                    <label className="SideBarElementsWords"> Profile </label>
        </button> */}

                <div className="SideBarLine" />

                <label className="SideBarCopyWriteWords">
                    © 2019 Eanpay Inc. All Rights Reserved
                </label>

            </div>
        )
    }
}

export default SideBar;
