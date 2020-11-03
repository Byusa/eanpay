import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addRecipientRecieves} from '../MyRedux/Actions/actions';
import SideSteps from './SideSteps';



class NewTransactionE extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            card:[],
            payoutNetwork: 'Mpesa',
            amountSent: 0,
            exchangeRate: 0,
            fee: 0,
            totalAmount: 0,
            error: '', 
            totalAmountConverted: 0
        }
    }

    handleOnPressContinueE = () => {

        this.props.addRecipientRecieves(this.state.recipientRecieves);

        this.props.history.push({
            pathname: '/NewTransactionF',
        });
    }

    render() {
        return (
            <div>
                <SideSteps stepTick1="✓" stepTick2 = '✓'stepTick3 = '✓' stepTick4 = '4'/>

                <label className="NewTransactionSub1 NewTransactionSubtitle">
                    Card
                </label>

                <div id="card"  type="text" className="NewTransactionboxE NewTransactionbox">
                    {this.props.card.cardNumber}
                    {console.log("card Number" , this.props.card)}
                </div>

                <label className="NewTransactionSub2 NewTransactionSubtitle">
                    Security Code
                </label>

                <div className="FormField" >
                    <input
                        type="amount"
                        name="amount"
                        className="NewTransactionboxB2 NewTransactionbox"
                        id="amount"
                    />
                </div> 

                <div >
                    <label className="NewTransactionWordsB NewTransactionWordsE1"> Send Amount: {this.props.amountSent} {this.props.users.currencySender}  </label>
                    <label className="NewTransactionWordsB NewTransactionWordsE2"> Fees: {this.props.fee} {this.props.users.currencySender} </label>
                    <label className="NewTransactionWordsB NewTransactionWordsE3"> Total To Pay: {this.props.totalAmount} {this.props.users.currencySender}  </label>
                    <label className="NewTransactionWordsB NewTransactionWordsE4"> Your Recipient Gets: {this.props.totalAmountConverted} {this.props.recieverCurrency}</label>
                </div>
                
                <button style={{ color: 'white' }} className="NewTransactionButtons NewTransactionPayButtonE" onClick={this.handleOnPressContinueE} >
                        <label className="NewTransactionContinueWords"> Continue</label>
                </button>



            </div>
        )
    }
}

const mapDispatchStateToProps = (dispatch) => ({
    addRecipientRecieves: recipientRecieves => dispatch(addRecipientRecieves(recipientRecieves))
})

const mapStateToProps = (state) => ({
    card: state.TransactionReducer.card,
    amountSent: state.TransactionReducer.amountSent,
    fee: state.TransactionReducer.fee,
    totalAmount: state.TransactionReducer.totalAmount,
    totalAmountConverted: state.TransactionReducer.totalAmountConverted,
    users: state.FetchReducer.users,

})


export default connect(
    mapStateToProps,
    mapDispatchStateToProps)(NewTransactionE);
