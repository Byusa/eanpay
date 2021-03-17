import React, { Component } from 'react'
import img1 from '../assets/tempImages/anyone-freelancer.jpg';
import img2 from '../assets/tempImages/anyone-online-shopping.jpg';
import img3 from '../assets/tempImages/anyone-online-sellers.jpg';
import img4 from '../assets/tempImages/anyone-affiliate-marketing.jpg';

class HomeMiddle3 extends Component {
    render() {
        return (
            <section className="section">
            <div className="container overflow-hidden">
              <div className="row">
                <div className="col-lg-5 col-xl-6 d-flex">
                  <div className="my-auto pb-5 pb-lg-0">
                    <h2 className="text-9">Payment Solutions for anyone.</h2>
                    <p className="text-4">
                      Eanpay is initially used for sending money world wide but it also a useful payment solution for freelancers, online shopping, online sellers and affiliate marketing.
                    </p>
                    <a href="#" className="btn-link text-4">Find more solution<i className="fas fa-chevron-right text-2 ml-2"></i></a> </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                  <div className="row banner style-2 justify-content-center">
                    <div className="col-12 col-sm-6 mb-4 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 font-weight-400 mb-0">Freelancer</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src={img1} width="410" height="350"  alt="banner"/> </a> </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-4 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 font-weight-400 mb-0">Online Shopping</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src={img2} width="410" height="350"  alt="banner"/> </a> </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-4 mb-sm-0 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 font-weight-400 mb-0">Online Sellers</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src={img3} width="410" height="350"  alt="banner"/> </a> </div>
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 font-weight-400 mb-0">Affiliate Marketing</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src={img4} width="410" height="350" alt="banner"/> </a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default HomeMiddle3
