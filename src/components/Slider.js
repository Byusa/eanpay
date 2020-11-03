import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import slider_1 from '../assets/tempImages/bg/image-1.jpg';
import slider_2 from '../assets/tempImages/bg/image-3.jpg';
//import './owl.css';  
export class Slider extends Component {  
        render()  
        {  
          return (  
            <div style={{padding:"0 !important"}}>            
        <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={0} >  
              <div className="item">
                <section className="hero-wrap">
                  <div className="hero-mask opacity-7 bg-dark"></div>
                  <div className="hero-bg" style={{backgroundImage:"url("+slider_1+")"}}></div>
                  <div className="hero-content d-flex fullscreen-with-header py-5">
                    <div className="container my-auto text-center">
                      <h2 className="text-16 text-white">Send & Receive Money</h2>
                      <p className="text-5 text-white mb-4">Quickly and easily send, receive and request money online with Payyed.<br className="d-none d-lg-block"/>
                        Over 180 countries and 120 currencies supported.</p>
                      <a href="#" className="btn btn-primary m-2">Open a Free Account</a> <a className="btn btn-outline-light video-btn m-2" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"><span className="text-2 mr-3"><i className="fas fa-play"></i></span>See How it Works</a> </div>
                  </div>
                </section>
              </div>
              <div className="item">
                <section className="hero-wrap">
                  <div className="hero-bg" style={{backgroundImage:"url("+slider_2+")"}}></div>
                  <div className="hero-content d-flex fullscreen-with-header py-5">
                    <div className="container my-auto">
                      <div className="row">
                        <div className="col-12 col-lg-8 col-xl-7 text-center text-lg-left">
                          <h2 className="text-13 text-white">Trusted by more than 50,000 businesses worldwide.</h2>
                          <p className="text-5 text-white mb-4">Over 180 countries and 120 currencies supported.</p>
                          <a href="#" className="btn btn-primary mr-3">Get started for free</a> <a className="btn btn-link text-light video-btn" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"><span className="mr-2"><i className="fas fa-play-circle"></i></span>Watch Demo</a> </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
      </OwlCarousel>  
      </div>  
          )  
        }  
      }  

export default Slider  