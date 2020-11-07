import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipient } from '../MyRedux/Actions/actions';
import ButtonCustomized from './ButtonCustomized';



class NewTransC extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recipient: this.props.recipients
                .filter(rec => rec.country === this.props.country.name)[0]
        }
    }


    handleOnPressAddRecipient = (e) => {
        e.preventDefault(); // to prevent page refresh
        this.props.history.push({
            pathname: '/AddRecipient',
        });
    }

    handleOnPressContinueC = (e) => {
        e.preventDefault(); // to prevent page refresh
        //Steps before you continue to the next page

        //1) error check
        const { recipient } = this.state;

        let error = '';

        if (!recipient) {
            error += 'Error: please Add the recipient'
        }

        this.setState({ error })

        if (error !== '') return;




        //Add recipient to the reducer
        this.props.addRecipient(this.state.recipient);


        //FIXME
        console.log("Yyyyyyyy");
        console.log(this.state.recipient);
        console.log(this.props.country.name);

        /*
        if(this.state.recipient.country !==  this.props.country){
            console.log("XXXXX Different");
        }else{
            console.log("XXXXX Same");
        }*/

        //Go to the next page
        this.props.history.push({
            pathname: '/NewTransactionD',
        });

    }

    render() {
        const filteredRecipient = this.props.recipients
            .filter(rec => rec.country === this.props.country.name)

        const buttonColor = filteredRecipient.length === 0 ?
            "NewTransactionButtons NewTransactionContinueButton NewTransactionContinueButtonDisabled" :
            "NewTransactionButtons NewTransactionContinueButton"
        return (
            <div id="content" className="py-4">
            <div className="container"> 
            <h2 className="font-weight-400 text-center mt-3">Add Recipient</h2>
            <div className="row">
                <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                    <br/>
                    <form>
                        <div className="form-group">
                            <label className="NewTransactionSub1 NewTransactionSubtitle">
                                Select Recipient
                            </label>
                            <div>
                                <select id="recipient" name="recipient" className="selectpicker form-control bg-transparent"
                                    onChange={(event) => this.setState({ recipient: this.props.recipients[Number(document.getElementById("recipient").value)] })}>
                                    {filteredRecipient
                                        .map((recipient, index) =>
                                            <option key={index} value={index}>
                                                {`${recipient.firstName} ${recipient.lastName}`}
                                            </option>)
                                    }
                                </select>
                            </div>
                        </div>

                       <button style={{ color: 'white' }} className="btn btn-primary btn-block" onClick={this.handleOnPressAddRecipient} >
                        <label className="NewTransactionContinueWords"> Add Recipient </label>
                       </button>

                        {
                            this.state.error && <div className="NewTransactionErrrorB  NewTransactionWordsErrorB">{this.state.error}</div>
                        }
                        
                        <button style={{ color: 'white' }} className="btn btn-primary btn-block" onClick={this.handleOnPressContinueC} >
                            Continue
                        </button>
                        
                       {/* <ButtonCustomized
                            disabledProp={filteredRecipient.length === 0}
                            onClickButton={this.handleOnPressContinueC}
                            ButtonName='Continue'
                            className="btn btn-primary btn-block"
                            style={{ color: 'white' }} 
                        />
                        */}
                    </form>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapDispatchStateToProps = (dispatch) => ({
    addRecipient: recipient => dispatch(addRecipient(recipient))
})

const mapStateToProps = (state) => ({
    recipients: state.FetchReducer.recipients,
    country: state.TransactionReducer.country
})


export default connect(
    mapStateToProps,
    mapDispatchStateToProps)(NewTransC);
