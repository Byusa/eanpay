import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

// const config = {
//     apiKey: "AIzaSyA9-_zQGHfP52KSwCByWlbaL_fuUZEXeos",
//     authDomain: "eanpay-53b8f.firebaseapp.com",
//     databaseURL: "https://eanpay-53b8f.firebaseio.com",
//     projectId: "eanpay-53b8f",
//     storageBucket: "eanpay-53b8f.appspot.com",
//     messagingSenderId: "100792891150",
//     appId: "1:100792891150:web:d999a59b35a2ad9165095f",
//     measurementId: "G-NFXZNK779N"
//   };

const config = {
  apiKey: "AIzaSyD-rXUgotI4Jbb4N84N1GXsV6RLnBjgmEY",
  authDomain: "eanpay-53b8f.firebaseapp.com",
  databaseURL: "https://eanpay-53b8f.firebaseio.com",
  projectId: "eanpay-53b8f",
  storageBucket: "eanpay-53b8f.appspot.com",
  messagingSenderId: "100792891150",
  appId: "1:100792891150:web:5fd50b471a25627365095f",
  measurementId: "G-X4ZYLKFS97"
};
const fire = firebase.initializeApp(config); //Initilazing our authenticaltion


/*
if (!firebase.apps.length) {
    firebase.initializeApp(config2);
}

*/
export const auth = firebase.auth();
export const db = firebase.firestore();

export  default fire;
