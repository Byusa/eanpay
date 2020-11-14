import React, { Component } from 'react';
import './Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import Activities from './pages/Activities.js';
import NewTransactionA from './pages/NewTransactionA';
import NewTransactionB from './pages/NewTransactionB.js';
import NewTransactionC from './pages/NewTransactionC.js';
import NewTransactionD from './pages/NewTransactionD.js';
import NewTransactionE from './pages/NewTransactionE.js';
import NewTransactionF from './pages/NewTransactionF.js';
import AddRecipient from './pages/AddRecipient.js';
import Recipients from './pages/Recipients.js';
import Cards from './pages/Cards.js';
import AddCard from './pages/AddCard.js';
import EditProfile from './pages/EditProfile.js';
import AddProfile from './pages/AddProfile';
import SignUp from './pages/SignUp';
import SignInForm from './pages/SignInForm';
import HowItWorksPage from './pages/HowItWorksPage';
import Home from './pages/Home';
import PayConnect from './pages/PayConnect';
import Institution from './pages/Institution';
import PayInstitution from './pages/PayInstitution';
import InstitutionKigaliIndependentUniversity from './pages/InstitutionKigaliIndependentUniversity';
import AccountHolderDetails from './pages/AccountHolderDetails';
import { connect } from 'react-redux';
//import 'font-awesome/css/font-awesome.min.css';



class App extends Component {


  render() {


    console.log('rendered')

    const { isAuthenticated } = this.props



    ///

    return (


      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/howItWorks" component={HowItWorksPage} />
          <Route exact path="/signIn" component={SignInForm} />
          <Route exact path="/SignUp" component={SignUp} /> 
          {isAuthenticated && <Route exact path="/Activities" component={Activities} />}
          {isAuthenticated && <Route exact path="/NewTransactionA" component={NewTransactionA} />}
          {isAuthenticated && <Route exact path="/NewTransactionB" component={NewTransactionB} />}
          {isAuthenticated && <Route exact path="/NewTransactionC" component={NewTransactionC} />}
          {isAuthenticated && <Route exact path="/NewTransactionD" component={NewTransactionD} />}
          {isAuthenticated && <Route exact path="/NewTransactionE" component={NewTransactionE} />}
          {isAuthenticated && <Route exact path="/NewTransactionF" component={NewTransactionF} />}
          {isAuthenticated && <Route exact path="/Recipients" component={Recipients} />}
          {isAuthenticated && <Route exact path="/AddRecipient" component={AddRecipient} />}
          {isAuthenticated && <Route exact path="/Cards" component={Cards} />}
          {isAuthenticated && <Route exact path="/AddCard" component={AddCard} />}
          {isAuthenticated && <Route exact path="/EditProfile" component={EditProfile} />}
          {isAuthenticated && <Route exact path="/AddProfile" component={AddProfile} />}
          {isAuthenticated && <Route exact path='/PayConnect' component={PayConnect} />}
          {isAuthenticated && <Route exact path='/Institution' component={Institution} />}
          {isAuthenticated && <Route exact path='/PayInstitution' component={PayInstitution} />}
          {isAuthenticated && <Route exact path='/InstitutionKigaliIndependentUniversity' component={InstitutionKigaliIndependentUniversity} />}
          {isAuthenticated && <Route exact path='/AccountHolderDetails' component={AccountHolderDetails} />}
          
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.FetchReducer.isAuthenticated
})

export default connect(
  mapStateToProps,
  undefined)(App);







