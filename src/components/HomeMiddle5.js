import React, { Component } from 'react';
import howImage from '../assets/tempImages/how-work.jpg';
import { Link } from 'react-router-dom';


class HomeMiddle5 extends Component {
    render() {
        return (
<section className="section">
<div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="card bg-dark-3 shadow-sm border-0"> <img className="card-img opacity-8" src={howImage} width="570" height="362"  alt="banner"/>
        <div className="card-img-overlay p-0"> <a className="d-flex h-100 video-btn" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"> <span className="btn-video-play bg-white shadow-md rounded-circle m-auto"><i className="fas fa-play"></i></span> </a> </div>
      </div>
    </div>
    <div className="col-lg-6 mt-5 mt-lg-0">
      <div className="ml-4">
        <h2 className="text-9">How does it work?</h2>
        <p className="text-4">Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <ul className="list-unstyled text-3 line-height-5">
          <li><i className="fas fa-check mr-2"></i>Sign Up Account</li>
          <li><i className="fas fa-check mr-2"></i>Select the country you want to send money</li>
          <li><i className="fas fa-check mr-2"></i>Input the amount</li>
          <li><i className="fas fa-check mr-2"></i>Select or add recipient</li>
          <li><i className="fas fa-check mr-2"></i>Select or add card</li>
          <li><i className="fas fa-check mr-2"></i>Done</li>
        </ul>
          <Link to="\" className="btn btn-outline-primary shadow-none mt-2"> 
               Open a Free Account
          </Link> 
        </div>
    </div>
  </div>
</div>
</section>
)
    }
}

export default HomeMiddle5