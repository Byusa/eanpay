import React, { Component } from 'react'
import googleplay from '../assets/images/google_play.png';
import HIWIOS from '../assets/images/HIWIOS.svg';


class FooterInner extends Component {
    render() {
        return (
            <div className="FooterInnerStyle">
                <img src={googleplay} className="FooterInnerGooglePlay" alt="" />
                <img src={HIWIOS} className="FooterInnerHWIOS" alt="" />
                <label className="FooterInnerWords">
                    © 2019 Eanpay Inc. All Rights Reserved
                </label>
            </div>
        )
    }
}

export default FooterInner;
