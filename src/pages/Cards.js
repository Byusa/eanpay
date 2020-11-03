import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import { db } from '../config/Fire';
import firebase from 'firebase';
import CardComponent from '../components/CardComponent';
import { connect } from 'react-redux'
import Footer from '../components/Footer';

class Cards extends Component {

    state = {
        cards: null,
    }

    componentDidMount() {
        //getting data from to Users table
        const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;

        db.collection('cards')
            .where("userId", "==", Userid)
            .get() //gets a
            .then(snapshot => {
                const cards = []
                snapshot.forEach(doc => {
                    const data = doc.data() //get the data
                    cards.push(data) //then push it 
                })
                this.setState({ cards: cards })
                console.log("It has been gotten " + snapshot)
            })
            .catch(error => console.log("There is an error here: " + error))
    }

    handleOnPressAddCard = () => {
        this.props.history.push({
            pathname: '/AddCard',
        });
    }


    render() {
        return (
            <div id="main-wrapper"> 
                <AppNavBar />
                <div id="content" className="py-4">
                    <div className=""> 
                    <div className="row">
                        <div className="col-md-9 col-lg-10 col-xl-6 mx-auto">
                        <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                            <div class="text-center">
                                <button style={{ color: 'white' }} className="btn btn-primary btn-sm" onClick={this.handleOnPressAddCard}>
                                    <label className=""> Add Card </label>
                                </button>
                            </div>
    
                            <div style={{ display: 'flex' }}>
                                <CardComponent />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    cards: state.FetchReducer.cards
})


export default connect(
    mapStateToProps,
    undefined)(Cards);



