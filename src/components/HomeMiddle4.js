import React, { Component } from 'react'
import HomeKCB from '../assets/images/HomeKCB.svg';
import HomeGTBank from '../assets/images/HomeGTBank.svg';
import HomeEcobank from '../assets/images/HomeEcobank.svg';




class HomeMiddle4 extends Component {
    render() {
        return (
            <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">How to send money and use EANPay Serives?</h2>
              <p className="lead text-center mb-5">We make international money transfer fast, affordable and efficient</p>
              <div className="row">
                <div className="col-sm-6 col-lg-3 mb-4"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-share-square"></i> </div>
                    <h3>Send Money</h3>
                  </div>
                  </a> </div>
                <div className="col-sm-6 col-lg-3 mb-4"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-check-square"></i> </div>
                    <h3>Receive Money</h3>
                  </div>
                  </a> </div>
                <div className="col-sm-6 col-lg-3 mb-4"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-user-friends"></i> </div>
                    <h3>Pay a Friend</h3>
                  </div>
                  </a> </div>
                <div className="col-sm-6 col-lg-3 mb-4"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-shopping-bag"></i> </div>
                    <h3>Online Shopping</h3>
                  </div>
                  </a> </div>
              </div>
              <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more can you do<i className="fas fa-chevron-right text-2 ml-2"></i></a></div>
            </div>
          </section>


        )
    }
}

export default HomeMiddle4
