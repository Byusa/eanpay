import React, { Component } from 'react'
import HIWPayConnect from '../assets/images/HIWPayConnect.svg';
import HIWEanpayMoneyTransfer from '../assets/images/HIWEanpayMoneyTransfer.svg';

class HowItworksMiddle1 extends Component {
    render() {
        return (
            <div>
                <div className="HWTTitle">
                    How to send money and use Eanpay Services
                </div>

                <div className="HWTSubTitile">
                    We make international money transfer fast, affordable and efficient.
                </div>

                <div>
                    <img src={HIWPayConnect} className="HIWIcons HIWPayConnect" alt="" />
                    <label className="HWMiddleWords HWMiddleWordUp1"> Pay-Connect </label>
                    <label className="HWSubwords HWSubwords1"> Facilitating Payment for your online purchases. College fees. Exam Testing Fees And Paying Bills </label>
                </div>

                <div>
                    <img src={HIWEanpayMoneyTransfer} className="HIWIcons HIWEanpayMoneyTransfer" alt="" />
                    <label className="HWMiddleWords HWMiddleWordUp5"> Eanpay Money Transfer </label>
                    <label className="HWSubwords HWSubwords5"> Support Individuals Or Companies To Receive Their Money From Their Clients. Partners Or Anyone In Real Time. </label>
                </div>

                



            </div>
        )
    }
}

export default HowItworksMiddle1
