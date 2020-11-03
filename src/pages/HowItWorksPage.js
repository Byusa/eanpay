import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HowItworksMiddle1 from '../components/HowItworksMiddle1';
import HowItworksMiddle2 from '../components/HowItworksMiddle2';
import HowItworksMiddle3 from '../components/HowItworksMiddle3';

class HowItWorksPage extends Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history} />

                <HowItworksMiddle1 />

                <div className="HWLine" />

                <HowItworksMiddle2 />

                <div className="HWLine2" />

                <HowItworksMiddle3 />

                <div className="FooterStyle FooterStyleHowItWorksPos">
                    <Footer />
                </div>
                
            </div>
        )
    }
}

export default HowItWorksPage;

