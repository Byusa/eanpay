import React from 'react'

import {
  CardNumberElement,
  CardExpiryElement,
  PaymentRequestButtonElement,
  //Elements,
  injectStripe,
} from 'react-stripe-elements'
import Axios from 'axios';

import { connect } from 'react-redux'


// "card_1H7E02HtuFKHLbY3CUoyGkPi"
// "card_1H7E1pHtuFKHLbY3LGUhx2xw"
//""card_1H7E2YHtuFKHLbY3C3ERt0Ve""
//""card_1H7E3PHtuFKHLbY3YL4oSVik""


const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = (change) => {
  //
  console.log('[change card number]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};


class _SplitForm extends React.Component {

  state = {
    error: ''
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(async (payload) => {

          // Sent an https request to stripe to recieve a payment
          // Firebase cloud functions

          if (payload.error) {

            this.setState({ error: payload.error.message })
            //failed
            console.log("Token not created ");
            return;
          }

          console.log("UserID: ", this.props.userID);

          console.log(" Before the fetch!! ")

          const res = await Axios.get(
            'https://us-central1-eanpay-53b8f.cloudfunctions.net/createCustomer',
            { params: { userID: this.props.userID } }
          )

          console.log(" Fetch results!!!! ")

          console.log({ res })

          // payment was successful

          /*
              1. Check if the payload was successful
              2. Post the card to firebase
              3. navigate
  
  
              EXTRA: Set state and tell the user what was wrong
          */

          console.log('[token]', payload)

        }
        );

    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card number
            <CardNumberElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />

          {
            this.state.error &&
            <div>
              {this.state.error}
            </div>
          }
        </label>
        <label>
          Expiration date
            <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        {/* 
          TODO: Add a postal code input 
          <label>
            CVC
            <CardCVCElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label> */}
        <button>Add Card</button>
      </form>
    );
  }
}
//const SplitForm = injectStripe(_SplitForm);

class _PaymentRequestForm extends React.Component {
  constructor(props) {
    super(props);

    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1000,
      },
    });

    paymentRequest.on('token', ({ complete, token, ...data }) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      complete('success');
    });

    paymentRequest.canMakePayment().then((result) => {
      this.setState({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: false,
      paymentRequest,
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        className="PaymentRequestButton"
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        onReady={handleReady}
        paymentRequest={this.state.paymentRequest}
        style={{
          paymentRequestButton: {
            theme: 'dark',
            height: '4rem',
            type: 'donate',
          },
        }}
      />
    ) : null;
  }
}
//const PaymentRequestForm = injectStripe(_PaymentRequestForm);



class Checkout extends React.Component {


  constructor(props) {

    super(props);
    this.state = {
      FullName: '',
      CardNumber: '',
      ExpDate: '',
      elementFontSize: window.innerWidth < 450 ? '20rem' : '2rem',
    };

    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '200px') {
        this.setState({ elementFontSize: '200px' });
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({ elementFontSize: '18px' });
      }
    });

  }

  render() {
    //const { elementFontSize } = this.state;
    return (
      <div>
        <div className="modal-body p-4">
          <form id="addCard" method="post">
            <div className="form-group">
              <label for="cardNumber">Card Number</label>
              <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required value="" placeholder="Card Number"/>
            </div>
            <div className="form-row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label for="expiryDate">Expiry Date</label>
                  <input id="expiryDate" type="text" className="form-control" data-bv-field="expiryDate" required value="" placeholder="MM/YY"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label for="cvvNumber">CVV <span className="text-info ml-1" data-toggle="tooltip" data-original-title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i className="fas fa-question-circle"></i></span></label>
                  <input id="cvvNumber" type="password" className="form-control" data-bv-field="cvvnumber" required value="" placeholder="CVV (3 digits)"/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="cardHolderName">Card Holder Name</label>
              <input
                id="FullName"
                type="text"
                name="FullName"
                className="form-control"
                placeholder="Card Holder Name"
                onChange={this.changeHandler}
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">Add Card</button>
          </form>
        </div>
        
        <div className="cardComp">

          <div className="cardStyle">
            {/* <Elements>
              <SplitForm fontSize={elementFontSize} userID={this.props.userID} />
            </Elements> */}
          </div>


          <div className="cardStyle">
            {/* <Elements>
              <PaymentRequestForm />
            </Elements> */}
          </div>

        </div>


      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  userID: state.FetchReducer.users.userID
})



export default connect(mapStateToProps, undefined)(Checkout)




// import React, { Component } from 'react';
// import { db } from '../config/Fire';
// import firebase from "firebase";
// import { CardElement , injectStripe, Elements } from 'react-stripe-elements';






// class AddCardComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             FullName: '',
//             CardNumber: '',
//             ExpDate: ''
//         }
//     }

//      handleChange = (change) => {
//         console.log('[change]', change);
//       };


//       handleSubmit = (ev) => {
//         ev.preventDefault();
//         if (this.props.stripe) {
//           this.props.stripe
//             .createToken()
//             .then((payload) => console.log('[token]', payload));
//         } else {
//           console.log("Stripe.js hasn't loaded yet.");
//         }
//       };


//     // changeHandler = (e) => {
//     //     this.setState({ [e.target.name]: e.target.value })
//     // }

//     // //post to the database (add card)
//     // updateCardsHandler = e => {
//     //     e.preventDefault(); // to prevent page refresh
//     //     console.log(this.state);

//     //     // Add a new document in collection "cards"


//     //     /*db.collection("users").doc().update({
//     //         cards
//     //     })*/

//     //     const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;
//     //     const id = db.collection('cards').doc().id

//     //     db.collection("cards").doc(id).set({
//     //         userId: Userid,
//     //         id,
//     //         fullName: this.state.FullName,
//     //         cardNumber: this.state.CardNumber,
//     //         expiryDate: firebase.firestore.Timestamp.fromDate(new Date(this.state.ExpDate)),

//     //     })
//     //     .then(function() {
//     //         console.log("Document successfully written!");
//     //     })
//     //     .catch(function(error) {
//     //         console.error("Error writing document: ", error);
//     //     });

//     //     //Go to this page as soon as you are done posting
//     //     this.props.history.push({
//     //         pathname: '/Cards',
//     //     });
//     // }


//     render() {
//         console.log({ props: this.props })
//         return (
//             <Elements>
//             <div>
//             <form onSubmit={this.handleSubmit}>
//             <label>
//               Card details
//               <CardElement
//                 onBlur={undefined}
//                 onChange={undefined}
//                 onFocus={undefined}
//                 onReady={undefined}
//                 // {...createOptions(this.props.fontSize)}
//               />
//             </label>
//             <button>Pay</button>
//           </form>

//           </div>
//           </Elements>
//         )
//     }
// }

// export default injectStripe(AddCardComponent);


