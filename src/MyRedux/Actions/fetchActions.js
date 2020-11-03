import * as actions from '../actionTypes';
import firebase from 'firebase'


export const fetchRecipients = () => dispatch => {

    const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;

    try{

    firebase
    .firestore()
    .collection('recipient')
    .where('userId', '==', Userid)
    .onSnapshot(data => {
        const recipients = data.docs.map(item => item.data())
        console.log({ Userid, recipients })
        dispatch({
            type: actions.Fetch_Recipient_Success,
            payload: { recipients }
        })
    })
    }catch(error){
        
            dispatch({
                type: actions.Fetch_Recipient_Failure,
                payload: { error }
            })
        
    }

}

export const fetchCards = () => dispatch => {

    const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;

    try{

    firebase
    .firestore()
    .collection('cards')
    .where('userId', '==', Userid)
    .onSnapshot(data => {
        const cards = data.docs.map(item => item.data())
        //console.log({ Userid, cards })
        dispatch({
            type: actions.Fetch_Card_Success,
            payload: { cards }
        })
    })
    }catch(error){
        
            dispatch({
                type: actions.Fetch_Card_Failure,
                payload: { error }
            })
        
    }

}

export const fetchUsers = () => dispatch => {

    const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;

    try{

        firebase
        .firestore()
        .collection('users')
        .doc(Userid)
        .onSnapshot(data => {
            const users = data.data()
            console.log({ Userid, users })
            dispatch({
                type: actions.Fetch_User_Success,
                payload: { users }
            })
        })
        }catch(error){
            
                dispatch({
                    type: actions.Fetch_User_Failure,
                    payload: { error }
                })
            
        }
    
}

export const fetchRates = () => dispatch => {

    const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;

    try{

        firebase
        .firestore()
        .collection('rates')
        //.where('userId', '==', Userid)
        .onSnapshot(data => {
            const rates = data.docs.map(item => item.data())
            console.log({ Userid, rates })
            dispatch({
                type: actions.Fetch_Rate_Success,
                payload: { rates }
            })
        })
    }catch(error){

        dispatch({
            type: actions.Fetch_Rate_Failure,
            payload: { error }
        })
    }

}

