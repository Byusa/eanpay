import * as actions from '../actionTypes';

export const addUser = ( address, cards, city, country, email, firstName, lastName, lastLogin, phoneNumber, photo, businessType ) => dispatch => {
    dispatch({
        type: actions.Add_User,
        payload: {  address, cards, city, country, email, firstName, lastName, lastLogin, phoneNumber, photo, businessType }
    })
}