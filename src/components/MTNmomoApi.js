import React, { Component } from 'react'

export default class MTNmomoApi extends Component {
    
render() {
    const momo = require("mtn-momo");
 
    const { Collections } = momo.create({
        callbackHost: process.env.CALLBACK_HOST
    });

    const collections = Collections({
        userSecret: process.env.COLLECTIONS_USER_SECRET,
        userId: process.env.COLLECTIONS_USER_ID,
        primaryKey: process.env.COLLECTIONS_PRIMARY_KEY
    });

    // Request to pay
    collections
        .requestToPay({
            amount: "50",
            currency: "EUR",
            externalId: "123456",
            payer: {
                partyIdType: "MSISDN",
                partyId: "256774290781"
            },
            payerMessage: "testing",
            payeeNote: "hello"
        })
        .then(transactionId => {
            console.log({ transactionId });

            // Get transaction status
            return collections.getTransaction(transactionId);
        })
        .then(transaction => {
            console.log({ transaction });

            // Get account balance
            return collections.getBalance();
        })
        .then(accountBalance => console.log({ accountBalance }))
        .catch(error => {
            console.log(error);
        });
    return (
        <div>

        </div>
    )
}
}
