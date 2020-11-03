import React, { Component } from 'react';
import fire from '../config/Fire.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { db } from '../config/Fire';
import { countries } from 'countries-list';
import { addUser } from '../MyRedux/Actions/authActions';
import { connect } from 'react-redux';
import ls from 'local-storage';
import bgImage from '../assets/tempImages/bg/image-3.jpg'




class SignUp extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            address: '',
            cards: {},
            city: '',
            country: '',
            currencySender:'',
            email: '',
            FirstName: '',
            LastName: '',
            LastLogin: '',
            phoneNumber: '',
            photo: '',
            signuptype: 'personal',
            businessType: 'Charity',
            FromCurrency: '',
            error: '',
        }
    }
    //FIX ME:
    //change address to this
    /*
        this.state = {
            signuptype: '',
            address: {
                country: '',
                city: '',
                Street: ''
            },
            FirstName: '',
            LastName: '',
            email: '',
    
    */
    handleChange(e) {
        //console.log({ name: e.target.name, value: e.target.value })
        this.setState({ [e.target.name]: e.target.value });
    }

    //keeping our state with redux
    stateHandler = () => {
        /////////////////////
        //keeping our state with redux
        const {  country, FirstName, LastName, email } = this.state;

        let error = '';

        if (!country) {
            error += 'Please input your country'
        }

        if (!FirstName) {
            error += 'Please input your First Name'
        }

        if (!LastName) {
            error += 'Please input your Last Name'
        }

        if (!email) {
            error += 'Please input your email'
        }


        this.props.addUser(
            this.state.address,
            this.state.cards,
            this.state.city,
            this.state.country,
            this.state.email,
            this.state.FirstName,
            this.state.LastName,
            this.state.LastLogin,
            this.state.phoneNumber,
            this.state.photo,
            this.state.signuptype,
            this.state.businessType,
        )
    }

    //post to the database (add user)
    submitHandler = e => {
        const { user } = e
        const { signuptype } = this.state
        const isPersonal = signuptype === 'personal'

        let userObject = {
            userID: user.uid,
            address: this.state.address,
            cards: this.state.cards,
            city: this.state.city,
            country: this.state.country.name,
            currencySender: this.state.country.currency,
            email: this.state.email,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            LastLogin: this.state.LastLogin,
            phoneNumber: this.state.phoneNumber,
            photo: this.state.photo,
            signuptype: this.state.signuptype,
            businessType: this.state.businessType,
        }

        if(isPersonal){
            delete userObject['businessType']
        }

        this.stateHandler();
        //////////////

        // Add a new document in collection "cards"
        db.collection("users").doc(user.uid).set(userObject)
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {

            this.submitHandler(user)

            // 
            ls.set('token', user.user.uid )

            this.props.history.push({
                pathname: '/Activities',
            });
        }).catch((error) => {
            alert(error.message);
        })
    }


    render() {
        const { signuptype, country, FirstName, LastName, email, password, businessType } = this.state

        console.log(country)

        return (
            <div>
                <Navbar history={this.props.history} />
                <div id="main-wrapper" class="h-100">
                    <div class="container-fluid px-0 h-100">
                    <div class="row no-gutters h-100">
                        <div class="col-md-6"> 
                        <div class="hero-wrap d-flex align-items-center h-100">
                            <div class="hero-mask opacity-8 bg-primary"></div>
                            <div class="hero-bg hero-bg-scroll" style={{backgroundImage:"url("+bgImage+")"}}></div>
                            <div class="hero-content mx-auto w-100 h-100 d-flex flex-column">
                            <div class="row  no-gutters">
                                <div class="col-10 col-lg-9 mx-auto">
                                <div class="logo mt-5 mb-5 mb-md-0"> 
                                    {/* <Link to="/" className="d-flex">
                                        <img src={logo} className="Nabarlogo" width="121" height="50"  alt="Eanpay" />
                                    </Link> */}
                                </div>
                                </div>
                            </div>
                            <div class="row" style={{marginTop:"20%"}}>
                                <div class="col-10 col-lg-9 mx-auto">
                                <h1 class="text-11 text-white mb-4">Get Verified!</h1>
                                <p class="text-4 text-white line-height-4 mb-5">Every day, Payyed makes thousands of customers happy.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 d-flex align-items-center"> 
                        <div class="container my-4">
                            <div class="row">
                            <div class="col-11 col-lg-9 col-xl-8 mx-auto">
                                <div className="text-center">
                                    <label className="signUpTitle text-center" ><h2 class="text-center">Create an account</h2> </label>
                                    <label className="signUpSubTitle"> Already have an account?  </label>
                                    <Link to="/signIn">
                                        <label className="signUpLogin"> Log in </label>
                                    </Link>
                                </div>
                                <form id="loginForm" method="post">

                                    <div class="form-group">
                                        <div className="signUpChoicePerBus signUpChoicePersonal">
                                            <input
                                                type="radio"
                                                id="personal"
                                                name="signuptype"
                                                value="personal"
                                                onChange={this.handleChange}
                                                checked={signuptype === 'personal'}
                                            />
                                            <label className="signUpChoicePerBusWord" for="personal" >Personal </label>
                                        </div>

                                        <div className="signUpChoicePerBus signUpChoiceBusiness">
                                            <input
                                                type="radio"
                                                id="business"
                                                name="signuptype"
                                                value="business"
                                                onChange={this.handleChange}
                                                checked={signuptype === 'business'}
                                            />
                                            <label className="signUpChoicePerBusWord" for="business">Business</label>
                                        </div>
                                    </div>

                                    <div className="signUpbigWords signUpCountryWords">
                                        <label
                                            for="Country"
                                            value=""
                                        > Country </label>
                                        <select id="country" name="country" className="signUpbox signUpCountry form-control" onChange={(event) => this.setState({ country: countries[event.target.value] })} >
                                            {Object.keys(countries).sort((a, b) => countries[a].name.localeCompare(countries[b].name)).map(country => <option value={country} >{countries[country].emoji} {countries[country].name}</option>)}
                                        </select>
                                    </div>
                                
                                    <div class="form-group">
                                        <label>Full Name </label>

                                        <input
                                            value={FirstName}
                                            onChange={this.handleChange}
                                            type="FirstName"
                                            name="FirstName"
                                            className="signUpbox signUpFirstName form-control"
                                            id="FirstName"
                                            //className={this.formErrors.Firstname.length > 0 ? "error" :  null}
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            value={LastName}
                                            onChange={this.handleChange}
                                            type="LastName"
                                            name="LastName"
                                            className="signUpbox singUpLastName form-control"
                                            id="LastName"
                                            placeholder="LastName"
                                        />
                                    </div>

                                    <div className="signUpbigWords signUpLoginDetailsWords">
                                        Login Details
                                    </div>

                                    <div className="form-group">
                                        <input
                                            value={email}
                                            onChange={this.handleChange}
                                            type="email"
                                            name="email"
                                            className="signUpbox singUpEmail form-control"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            value={password}
                                            onChange={this.handleChange}
                                            type="password"
                                            name="password"
                                            className="signUpbox singUpPassword form-control"
                                            id="password"
                                            placeholder="Password"
                                        />
                                    </div>

                                    {
                                        signuptype === 'personal' &&

                                        (
                                            <div>

                                                {/*
                                                    this.state.error && <div className="NewTransactionErrrorB  NewTransactionWordsErrorB">{this.state.error}</div>
                                                */}
                                                <div className=" ">
                                                    <button  type="submit" onClick={this.signup} className="signUpButton signUpButtonPersonal btn btn-primary btn-block my-4">
                                                        <label className="signUpButtonWord"> Sign up </label>
                                                    </button>
                                                </div>

                                                { /* <CustomBottom title="Sign Up" disable onClick=   />     */}

                                                <div className="signUpCheckBoxContainer">
                                                    <input
                                                        className="signUpCheckBox signUpCheckBoxPersonal"
                                                        type="checkbox"
                                                        name="hasAgreed"
                                                        value={this.state.hasAgreed}
                                                        onChange={this.handleChange} />
                                                    <label className="signUpChekBoxMessage signUpChekBoxMessagePersonal" >
                                                        By submiting this form, you accept Eanpay Terms
                                                        and Conditions Privacy Policy.
                                                    </label>
                                                </div>

                                            </div>
                                        )
                                    }

                                    {

                                        signuptype === 'business' &&
                                        <div>
                                            <div className="signUpbigWords signUpBusinessTypeWords">
                                                Business type
                                            </div>
                                            <select id="BusinessType" name="BusinessType" className="signUpbox signUpBusinessType form-control"
                                                onChange={this.handleChange}
                                                value={businessType}>
                                                <option value="Charity">Charity</option>
                                                <option value="LimitedCompany">Limited Company</option>
                                                <option value="SoleTrader">Sole Trader</option>

                                            </select>
                                            {
                                                this.state.error && <div className="NewTransactionErrrorB  NewTransactionWordsErrorB">{this.state.error}</div>
                                            }
                                            <div>
                                                    <button  type="submit" onClick={this.signup} className="signUpButton signUpButtonPersonal btn btn-primary btn-block my-4">
                                                        <label className="signUpButtonWord"> Sign up </label>
                                                    </button>
                                            </div>

                                            <div>
                                                <input
                                                    className="signUpCheckBox signUpCheckBoxBusiness"
                                                    type="checkbox"
                                                    name="hasAgreed"
                                                    value={this.state.hasAgreed}
                                                    onChange={this.handleChange} />
                                                <label className="signUpChekBoxMessage signUpChekBoxMessageBusiness" >
                                                    By submiting this form, you accept Eanpay Terms
                                                    and Conditions Privacy Policy.
                                                </label>
                                            </div>

                                        </div>
                                    }

                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchStateToProps = (dispatch) => ({
    addUser: (address, cards, city, country, email, firstName, lastName, lastLogin, phoneNumber, photo, businessType ) => dispatch(addUser(address, cards, city, country, email, firstName, lastName, lastLogin, phoneNumber, photo, businessType))
})

export default connect(
    undefined,
    mapDispatchStateToProps)(SignUp);