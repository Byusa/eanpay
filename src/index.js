import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import MyApp from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import store from './MyRedux/store';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
//import 'font-awesome/css/font-awesome.min.css';
import firebase from 'firebase';
import { fetchRecipients, fetchUsers, fetchCards, fetchRates } from './MyRedux/Actions/fetchActions';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { StripeProvider } from 'react-stripe-elements';

//import 'bootstrap/dist/css/bootstrap.min.css';    
const apiKey = 'pk_test_51H5p0XHtuFKHLbY3ZmT4n93jSNv3RK4GiETowVmLX4G1zxj9bbxQE9YjylhJ6MzrvwoI0hkO0Js0iWDTqmivqv6U00qovmVEm3'


const customHistory = createBrowserHistory();


const App = () => {
  return (
    <React.StrictMode>
      <StripeProvider apiKey={apiKey} >
      <Provider store={store}>
        <Router history={customHistory}>
          <MyApp />
        </Router>
      </Provider>
      </StripeProvider>
    </React.StrictMode>
  );
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged(user => {
  //As long as you are loggedin then access the recipients and cards
  if (user) {

    // localstorage.set(IsAuthe: user.is)
    store.dispatch(fetchRecipients());
    store.dispatch(fetchCards());
    store.dispatch(fetchUsers());
    store.dispatch(fetchRates());
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
