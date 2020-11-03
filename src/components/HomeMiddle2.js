import React, { Component } from 'react'
import HomeLowCost from '../assets/images/HomeLowCost.svg';
import HomeEasyAccess from '../assets/images/HomeEasyAccess.svg';
import HomeHighBenefits from '../assets/images/HomeHighBenefits.svg';
import HomeFullySecure from '../assets/images/HomeFullySecure.svg';
import HomeClientTrusted from '../assets/images/HomeClientTrusted.svg';
import HomeFastTransition from '../assets/images/HomeFastTransition.svg';





class HomeMiddle2 extends Component {
    render() {
        return (
           
            <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">Why should you choose Payyed?</h2>
              <p className="lead text-center mb-5">Here’s Top 4 reasons why using a Payyed account for manage your money.</p>
              <div className="row">
                <div className="col-sm-6 col-lg-3 mb-5 mb-lg-0">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-hand-pointer"></i> </div>
                    <h3>Easy to use</h3>
                    <p className="text-3">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ml-2"></i></a> </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-5 mb-lg-0">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-share"></i> </div>
                    <h3>Faster Payments</h3>
                    <p className="text-3">Persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ml-2"></i></a> </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-5 mb-sm-0">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-dollar-sign"></i> </div>
                    <h3>Lower Fees</h3>
                    <p className="text-3">Essent lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ml-2"></i></a> </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-lock"></i> </div>
                    <h3>100% secure</h3>
                    <p className="text-3">Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ml-2"></i></a> </div>
                </div>
              </div>
            </div>
          </section>
        )
    }

}

export default HomeMiddle2;


