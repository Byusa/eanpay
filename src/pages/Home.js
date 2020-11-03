import React, { Component } from 'react';
import Footer from '../components/Footer';
import FooterInner from '../components/FooterInner';
import Navbar from '../components/Navbar';
import HomeMiddle1 from '../components/HomeMiddle1';
import HomeMiddle2 from '../components/HomeMiddle2';
import HomeMiddle3 from '../components/HomeMiddle3';
import HomeMiddle4 from '../components/HomeMiddle4';
import HomeMiddle5 from '../components/HomeMiddle5';
import HomeMiddle6 from '../components/HomeMiddle6';
import Slider from '../components/Slider';
import ls from 'local-storage'
import slider_1 from '../assets/tempImages/bg/image-1.jpg';


import Loader from 'react-loader-spinner'
 class Loading extends React.Component {
 //other logic
   render() {
    return(
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
     <Loader
        style={{ display: 'flex' }}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
     />
     </div>
    );
   }
}


class Home extends Component {


    state = {
        isLoading: true
    }


    async componentDidMount() {
        // check local storage
        // if the key is there
        // navigate to the app
        // otherwise setn loading to false


        const token = await ls.get('token')


        if(token){
            this.props.history.push({
                pathname: '/Activities',
            });
            
        } else {
            this.setState({ isLoading: false })
        }

        
    }

    handleOnPressSigin = () => {
        this.props.history.push({
            pathname: '/signIn',
        });
    }

    handleOnPressSignup = () => {
        this.props.history.push({
            pathname: '/SignUp',
        });
    }


    render() {


        if(this.state.isLoading){
            return <Loading />
        }
        
        return (
            <div id="main-wrapper">
                <Navbar history={this.props.history} />
                <div id="content"> 
                <Slider /> 
                <HomeMiddle2 />
                <HomeMiddle3 />
                <HomeMiddle4 />
                <HomeMiddle5 />
                <HomeMiddle6 />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
