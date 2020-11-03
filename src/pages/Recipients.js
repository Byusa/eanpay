import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import Searchbar from '../components/Searchbar';
import { connect } from 'react-redux'
import RecipientComponent from '../components/recipientComponent';
import Button from '@material-ui/core/Button';
import ButtonCustomized from '../components/ButtonCustomized';
import Footer from '../components/Footer';


class Recipients extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            recipients: null,
        }
    }

    handleOnPressContinueTransaction = (e) => {
        this.props.history.push({
            pathname: '/NewTransactionC',
        });
    }
    
    handleOnPressAddRecipient =() =>{
        this.props.history.push({
            pathname: '/AddRecipient',
        });
    }
    render() {
        return (
            <div id="main-wrapper"> 
                <AppNavBar />
                <div id="content" className="py-4">
                    <div className=""> 
                    <div className="row">
                        <div className="col-md-9 col-lg-10 col-xl-6 mx-auto">
                        <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                            <div class="text-center">
                                <ButtonCustomized
                                disabledProp = {this.isCompleted}
                                classNameStyle="btn btn-primary btn-sm"
                                onClickButton={this.handleOnPressContinueTransaction}
                                ButtonName='Continue to transaction' />
                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto">
                                    <button style={{ color: 'white' }} className="btn btn-primary btn-sm" onClick={this.handleOnPressAddRecipient} >
                                        <label className=""> Add Recipient</label>
                                    </button>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto text-right">
                                    <Searchbar/>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <RecipientComponent/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    recipients: state.FetchReducer.recipients
})


export default connect(
    mapStateToProps,
    undefined)(Recipients);

