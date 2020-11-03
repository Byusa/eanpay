import React, { Component } from 'react';
import howImage from '../assets/tempImages/bg/image-2.jpg';

class HomeMiddle6 extends Component {
    render() {
        return (
<section className="hero-wrap section shadow-md">
<div className="hero-mask opacity-9 bg-primary"></div>
<div className="hero-bg" style={{backgroundImage:"url("+howImage+")"}}></div>
<div className="hero-content py-5">
  <div className="container text-center">
    <h2 className="text-9 text-white">Awesome Customer Support</h2>
    <p className="lead text-white mb-4">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
    <button className="btn btn-light">Find out more</button> </div>
</div>
</section>
)
}
}

export default HomeMiddle6