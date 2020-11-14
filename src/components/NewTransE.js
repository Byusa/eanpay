import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addRecipientRecieves} from '../MyRedux/Actions/actions';



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
            <div  id="content" className="py-4">
                <div className="container">
                    <h2 className="font-weight-400 text-center mt-3"> Add security code</h2>
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                                    <br />

                                    <form>
                                        <div className="form-group">
                                            <label className="NewTransactionSub1 NewTransactionSubtitle">
                                                Card Number
                                            </label>

                                            <div id="card"  type="text" className="form-control bg-transparent">
                                                {this.props.card.cardNumber}
                                                {console.log("card Number" , this.props.card)}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="NewTransactionSub2 NewTransactionSubtitle">
                                                Security Code
                                            </label>

                                            <div>
                                                <input
                                                    type="amount"
                                                    name="amount"
                                                    className="form-control bg-transparent"
                                                    id="amount"
                                                />
                                            </div> 
                                        </div> 

                                        <div className="form-group">
                                            <div className="NewTransactionWordsB NewTransactionWordsE1"> Send Amount: {this.props.amountSent} {this.props.users.currencySender}  </div>
                                            <div className="NewTransactionWordsB NewTransactionWordsE2"> Fees: {this.props.fee} {this.props.users.currencySender} </div>
                                            <div className="NewTransactionWordsB NewTransactionWordsE3"> Total To Pay: {this.props.totalAmount} {this.props.users.currencySender}  </div>
                                            <div className="NewTransactionWordsB NewTransactionWordsE4"> Your Recipient Gets: {this.props.totalAmountConverted} {this.props.recieverCurrency}</div>
                                        </div>

                                        <div className="form-group">
                                            <button style={{ color: 'white' }} className="btn btn-primary btn-block" onClick={this.handleOnPressContinueE} >
                                            <label className="NewTransactionContinueWords"> Confirm</label>
                                            </button>
                                        </div>
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
