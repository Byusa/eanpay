import React, { Component } from 'react'
import payoutNetworks from '../helper/payoutNetworks';
import { countries } from 'countries-list';
import { db } from '../config/Fire';
import firebase from "firebase";
import CountryList from '../Data/countryList';


class AddRecip extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            country: countries[Object.keys(countries)
                .filter(ct => CountryList.has(countries[ct].name))[0]],
            email: '',
            firstName: '',
            lastName: '',
            payoutNetwork: '',
            iban: '',
            accountNumber: 0,
            phoneNumber: '',
            emoji: '',
            goTo: 0
        }

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleOnPressConfirmRecipitient = (e) => {
        e.preventDefault(); // to prevent page refresh
        console.log(this.state);

        // Add a new document in collection "cards"
        const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;
        const id = db.collection('recipient').doc().id
        const phoneNumberWCode = this.state.country.phone +this.state.phoneNumber ;

        db.collection("recipient").doc(id).set({
            userId: Userid,
            id,
            country: this.state.country.name,
            flag: this.state.country.emoji,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            payoutNetwork: this.state.payoutNetwork,
            iban: this.state.iban,
            accountNumber: this.state.accountNumber,
            phoneNumber: phoneNumberWCode
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

        this.props.history.push({
            pathname: '/Recipients',
        });
    }



    render() {
        const {  email, firstName, lastName, payoutNetwork, iban, accountNumber, phoneNumber } = this.state;
        console.log({MyState:this.state});
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
                                Country
                            </label>
                            <div>
                                <select id="country" name="country" className="selectpicker form-control bg-transparent"
                                 data-style="custom-select bg-transparent border-0" 
                                 data-container="body"  
                                    onChange={(event) => this.setState({ country: countries[event.target.value] })}>
                                    {Object.keys(countries)
                                        .filter(ct => CountryList.has(countries[ct].name))
                                        .sort((a, b) => countries[a].name.localeCompare(countries[b].name))
                                        .map(country => <option value={country} >{countries[country].emoji} {countries[country].name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="emailID">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={this.changeHandler}
                                id="email"
                            />
                        </div>
                        <div class="form-group">
                            <label for="emailID">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                onChange={this.changeHandler}
                                value={firstName}
                                id="firstName"
                            />
                        </div>
                        <div class="form-group">
                            <label for="emailID">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                value={lastName}
                                onChange={this.changeHandler}
                                id="lastName"
                            />
                        </div>
                        <div className="form-group">
                            <div>
                                <select id="payoutNetwork" name="payoutNetwork" 
                                data-style="custom-select bg-transparent border-0" 
                                data-container="body"  
                                className="selectpicker form-control bg-transparent" 
                                value={payoutNetwork} 
                                onChange={(event) => this.setState({ payoutNetwork: payoutNetworks[event.target.value] })}>
                                    {Object.keys(payoutNetworks).map((payoutNetwork, index) => <option key={index} value={payoutNetwork} >{payoutNetworks[payoutNetwork]}</option>)}
                                </select>
                            </div>
                        </div>
                        {
                            payoutNetwork === 'Bank Account' &&

                            (<div>
                                <label className="AddRecipientSub6 NewTransactionSubtitle">
                                    IBAN
                            </label>
                                <div>
                                    <input
                                        type="text"
                                        name="iban"
                                        className="Addbox AddRecipientbox6"
                                        onChange={this.changeHandler}
                                        value={iban}
                                        id="iban"
                                    />
                                </div>

                                <label className="AddRecipientSub7 NewTransactionSubtitle">
                                    Bank Account
                            </label>
                                <div>
                                    <input
                                        type="number" 
                                        min="0"
                                        name="accountNumber"
                                        className="Addbox AddRecipientbox7"
                                        onChange={this.changeHandler}
                                        value={accountNumber}
                                        id="accountNumber"
                                    />
                                </div>

                            </div>

                            )
                        }
                        {
                            (
                                payoutNetwork !== 'Bank Account'
                            ) &&
                            (<div>
                                <label className="AddRecipientSub6 NewTransactionSubtitle">
                                    Phone Number
                                </label>
                                <div>
                                    <div class="input-group">
                                        <div class="input-group-prepend"> <span class="input-group-text">+{this.state.country.phone}</span> </div>
                                        <input
                                            type="number" 
                                            name="phoneNumber"
                                            min='0'
                                            className="form-control"
                                            onChange={this.changeHandler}
                                            value={phoneNumber}
                                            id="phoneNumber"
                                        />
                                    </div>
                                   
                                </div>
                            </div>)
                        }
                        <br/>
                        <button style={{ color: 'white' }} className="btn btn-primary btn-block" onClick={this.handleOnPressConfirmRecipitient} >
                            <label className="NewTransactionContinueWords"> Confirm</label>
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

export default AddRecip;
