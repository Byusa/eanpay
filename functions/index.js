const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const cors = require('cors')({origin: true});

//TODO store in an env variable

const apiKey = 'pk_test_51H5p0XHtuFKHLbY3ZmT4n93jSNv3RK4GiETowVmLX4G1zxj9bbxQE9YjylhJ6MzrvwoI0hkO0Js0iWDTqmivqv6U00qovmVEm3'

const stripe = require('stripe')(apiKey);




/*
TODO:
    Ask permissions from users to save cards for future use!!!
    EXTRA: Check if the user is located in europe and then ask to save card details
*/


exports.createCustomer = functions.https.onRequest(async (req, res) => {

    res.set('Access-Control-Allow-Origin: http://localhost:3000');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');
    const customer = await stripe.customers.create();

    const userID = req.userID

    console.log("userID", userID);

    await admin.firestore()
        .collection('users')
        .get(userID)
        .set({ customerID: customer.id }, { merge: true })

    const intent = await stripe.setupIntents.create({
        customer: customer.id,
    });


    res.status(200).send({ client_secret: intent.client_secret });


    //res.json({result: 'success'});
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

