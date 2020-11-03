import React, { Component } from 'react'
import app from '../assets/images/app.png';
import { Link } from 'react-router-dom';
import googleplay from '../assets/images/google_play.png';
import HIWIOS from '../assets/images/HIWIOS.svg';


export class HowItworksMiddle2 extends Component {
    render() {
        return (
            <div>
                <img src={app} className="HWPic" alt="" />

                <div >

                    <div className="HWList1 HWListStyle">1.Create account   </div>
                    <div className="HWListIn1 HWListInStyle"> Register for free on our website or download our app </div>

                    <img src={googleplay} className="HWGooglePlay" alt="" />
                    <img src={HIWIOS} className="HWIOS" alt="" />


                    <div className="HWList2 HWListStyle">2.Amount and Delivery</div>
                    <div className="HWListIn2 HWListInStyle">Select the amount to transfer and the delivery method</div>

                    <Link to='' className="HWLinks HWLinks1"> Bank Transfer | </Link>
                    <Link to='' className="HWLinks HWLinks2"> Cash Pickup | </Link>
                    <Link to=''  className="HWLinks HWLinks3"> Mobile Money | </Link>
                    <Link to=''  className="HWLinks HWLinks4"> Airtime Top-Up </Link>
                    

                    <div className="HWList3 HWListStyle">3.Sender details</div>
                    <div className="HWListIn3 HWListInStyle">Fill in the sender details </div>
                    <div className="HWList4 HWListStyle">4.Recipient details</div>
                    <div className="HWListIn4 HWListInStyle">Fill in the recipient details</div>
                    <div className="HWList5 HWListStyle">5.Payment details</div>
                    <div className="HWListIn5 HWListInStyle">Fill in the payment details</div>
                    <div className="HWList6 HWListStyle">6.Confirm and send</div>
                    <div className="HWListIn6 HWListInStyle">Check the filled in data and submit.</div>
                </div>
            </div>
        )
    }
}

export default HowItworksMiddle2
