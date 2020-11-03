import * as actions from '../actionTypes';
//import { MDBPerfectScrollbar } from 'mdbreact';
//Redux
//in Redux reducers has to be pure functions
 
const initialState = {
    country : {},
    payOutNetwork: "Mpesa" | "Airtel" | "Equitel" | "Mobile Money",
    amountSent: 0,
    exchangeRate:0,
    fee:0,
    totalAmount: 0,
    recipient: "",
    card: "",
    totalAmountConverted:0,
    recieverCurrency: 0
}

export default function TransactionReducer ( state = initialState, action ) {
    
    switch (action.type){

        case actions.Add_Country:
            return {
                ...state, 
                country: action.payload.country,
                rate: action.payload.rate,
                recieverCurrency: action.payload.recieverCurrency 
            }

        case actions.Add_PayOutNetwork:
            return {
                ...state,
                payOutNetwork: action.payload.payOutNetwork, 
                amountSent: action.payload.amountSent,
                exchangeRate: action.payload.exchangeRate,
                fee: action.payload.fee,
                totalAmount: action.payload.totalAmount,
                totalAmountConverted: action.payload.totalAmountConverted,
            }
                
        case actions.Add_Recipient:
            return {
                    ...state,
                    recipient: action.payload.recipient,    
                }
        
        case actions.Add_Card:
            return {
                    ...state,
                    card: action.payload.card, 
                }
        case actions.Add_RecipientRecieves:
            return {
                    ...state,
                    totalAmount: action.payload.totalAmount,  
                }
        default:
            return state;

    }
}