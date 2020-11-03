import React, { Component } from 'react';
import logo from '../assets/images/EANPaylogoW.jpg';
import { Link } from 'react-router-dom';



class Footer extends Component {
    render() {
        return (
            // <div>
            //     <Link to="/">
            //         <img src={logo} className="Footerlogo" alt="EanPay Logo" />
            //     </Link>
            //     <Link to="/howItWorks" className="FooterWords FooterWords1">
            //         Terms and Conditions
            //     </Link>
            //     <Link to="/howItWorks" className="FooterWords FooterWords2">
            //         Privacy Policy
            //     </Link>
            //     <Link to="/howItWorks" className="FooterWords FooterWords3">
            //         Licences
            //     </Link>

            //     <Link to="/blog" className="FooterWords FooterWordsH1">
            //         <b>Company</b>
            //     </Link>
            //     <Link to="/howItWorks" className="FooterWords FooterWords4">
            //         Our Story
            //     </Link>
            //     <Link to="/howItWorks" className="FooterWords FooterWords5">
            //         How it works
            //     </Link>
            //     <Link to="/blog" className="FooterWords FooterWords6">
            //         Blog
            //     </Link>

            //     <Link to="/blog" className="FooterWords FooterWordsH2">
            //         <b>Help</b>
            //     </Link>
            //     <Link to="/blog" className="FooterWords FooterWords7">
            //         FAQ
            //     </Link>
            //     <Link to="/blog" className="FooterWords FooterWords8">
            //         Contact Us
            //     </Link>

            //     <Link to="/blog" className="FooterWords FooterWordsH3">
            //         <div className="FooterWordsH3">
            //             <b>Connect </b>
            //         </div>

            //         <div className="FooterWordsH3B">
            //             <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
            //                 <i className="fa fa-facebook-square" aria-hidden="true"></i>
            //             </a>
            //             <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
            //                 <i className="fa fa-twitter" aria-hidden="true"></i>
            //             </a>
            //             <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
            //                 <i className="fa fa-instagram" aria-hidden="true"></i>
            //             </a>
            //             <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
            //                 <i className="fa fa-linkedin-square" aria-hidden="true" />
            //             </a>
            //         </div>
            //     </Link>
            // </div>
            <footer id="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg d-lg-flex align-items-center">
                  <ul className="nav justify-content-center justify-content-lg-start text-3">
                    <li className="nav-item"> <a className="nav-link active" href="#">About Us</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Support</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Help</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Careers</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Affiliate</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Fees</a></li>
                  </ul>
                </div>
                <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
                  <ul className="social-icons justify-content-center">
                    <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li className="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                    <li className="social-icons-youtube"><a data-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-copyright pt-3 pt-lg-2 mt-2">
                <div className="row">
                  <div className="col-lg">
                    <p className="text-center text-lg-left mb-2 mb-lg-0">Copyright &copy; 2020 <a href="#">Eanpay</a>. All Rights Reserved.</p>
                  </div>
                  <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                    <ul className="nav justify-content-center">
                      <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                      <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                      <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer;

