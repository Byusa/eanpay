import * as actions from '../actionTypes';
 
export const addCountry = (country, rate, recieverCurrency) => dispatch => {
    dispatch({
        type: actions.Add_Country,
        payload: { country, rate, recieverCurrency }
    })
}

export const addPayOutNetwork = (payOutNetwork, amountSent, exchangeRate, fee, totalAmount, totalAmountConverted) => dispatch => {
    dispatch({
        type: actions.Add_PayOutNetwork,
        payload: { payOutNetwork , amountSent, exchangeRate, fee,  totalAmount, totalAmountConverted }
    })
}

export const addRecipient = recipient => dispatch => {
    dispatch({
        type: actions.Add_Recipient,
        payload: { recipient }
    })
}

export const addCard = card => dispatch => {
    dispatch({
        type: actions.Add_Card,
        payload: { card }
    })
}

export const addRecipientRecieves = recipientRecieves => dispatch => {
    dispatch({
        type: actions.Add_RecipientRecieves,
        payload: { recipientRecieves }
    })
}

