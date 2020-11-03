import React, { Component } from 'react';
import payoutNetworks from '../helper/payoutNetworks';
import { addPayOutNetwork } from '../MyRedux/Actions/actions'
import { connect } from 'react-redux';


class NewTransB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payoutNetwork: payoutNetworks[0],
            amountSent: 0,
            exchangeRate: 0,
            fee: 0,
            totalAmount: 0,
            error: '',
            totalAmountConverted: 0,
            country: '',
            total: 0,
            rate: 0,
            recieverCurrency: ''
        }

    }




    handleOnPressConfirm = () => {
        const { amountSent } = this.state;

        let error = '';

        if (amountSent === 0) {
            error += 'Error: please enter an amount to send \n'
        }


        this.setState({ error })

        if (error !== '') return;


        this.props.addPayOutNetwork(
            this.state.payoutNetwork,
            this.state.amountSent,
            this.state.exchangeRate,
            this.state.fee,
            this.state.totalAmount,
            this.state.totalAmountConverted
        )
        this.props.history.push({
            pathname: '/NewTransactionC',
        });
    }


    updateTransaction = async (amountSent) => {


        const fee = amountSent * 0.05;

        const totalAmountConverted = amountSent * this.props.rate;

        const totalAmount = amountSent + fee;
        this.setState({ amountSent, fee, totalAmountConverted, totalAmount });
    }



    render() {
        //console.log(this.state)
        const { totalAmountConverted, fee, totalAmount } = this.state;
        console.log(typeof this.props.rate, this.props.rate)
        return (
            <div id="content" className="py-4">
            <div className="container"> 
            <h2 className="font-weight-400 text-center mt-3">New Transaction</h2>
            <div className="row">
                <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                    <br/>
                    <form>
                        <div className="form-group">
                            <label className="NewTransactionSub1 NewTransactionSubtitle">
                                Payout Network
                            </label>
                            <div>
                                <select id="PayoutNetwork"
                                    data-style="custom-select bg-transparent border-0" 
                                    data-container="body" 
                                    className="selectpicker form-control bg-transparent"
                                    onChange={(event) => this.setState({ payoutNetwork: payoutNetworks[event.target.value] })}>
                                        {Object.keys(payoutNetworks).map((payoutNetwork, index) => <option key={index} value={payoutNetwork} > {payoutNetworks[payoutNetwork]}</option>)}
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="emailID">Enter Amount</label>
                            <input
                                 type="number"
                                 name="amountSent"
                                 className="form-control"
                                 id="amountSent"
                                 placeholder="You Send"
                                 onChange={(event) => this.updateTransaction(Number(event.target.value))}
                             />
                        </div>
                        <div class="form-group">
                            <label for="youSend">They recieve</label>
                            <div class="input-group">
                            <div class="input-group-prepend"> <span class="input-group-text">{this.props.country.currency}</span> </div>
                            <input disabled 
                                type="number" 
                                class="form-control" 
                                data-bv-field="youSend" 
                                id="youSend" value="1,000"
                                value= {totalAmountConverted.toFixed(2)}
                            />
                            <div class="input-group-append"> <span class="input-group-text p-0"> </span> 
                            </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div
                                className="NewTransactionWordsB NewTransactionWordsB1"
                                id="ExchangeRate"
                            >
                                Exchange Rate: 1{this.props.users.currencySender} = {(Math.round(this.props.rate * 100) / 100).toFixed(2)} {this.props.country.currency}
                            </div>
                            <div
                                className="NewTransactionWordsB NewTransactionWordsB2"
                                id="fee"
                            >
                                fee: +{fee} {this.props.users.currencySender}
                            </div>

                            <div className="NewTransactionWordsB NewTransactionWordsB3 ">
                                <div id="totalAmount"> Total To Pay:
                                <label className="NewTransactionWordsBB">{totalAmount} {this.props.users.currencySender}</label>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.error && <div className="NewTransactionErrrorB  NewTransactionWordsErrorB">{this.state.error}</div>
                        }
                        <button style={{ color: 'white' }} className="btn btn-primary btn-block" onClick={this.handleOnPressConfirm} >
                            Confirm
                        </button>

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
    addPayOutNetwork: (payoutNetwork, amountSent, exchangeRate, fee, totalAmount, totalAmountConverted, recieverCurrency) => dispatch(addPayOutNetwork(payoutNetwork, amountSent, exchangeRate, fee, totalAmount, totalAmountConverted, recieverCurrency))
})

const mapStateToProps = (state) => ({
    country: state.TransactionReducer.country,
    rate: state.TransactionReducer.rate, //this is for keeping track of the previous page rates
    users: state.FetchReducer.users
})

export default connect(
    mapStateToProps,
    mapDispatchStateToProps)(NewTransB);
