import React, { Component } from 'react'
import SideBar from '../components/SideBar';
import AppNavBar from '../components/AppNavBar';
import { db } from '../config/Fire';



class InstitutionKigaliIndependentUniversity extends Component {

    state = {
        institution: null,
    }

    componentDidMount() {
        //getting data from to Users table
        //.where("swiftCode","==","BKIGRWRW")
        //const Userid = firebase.auth().currentUser && firebase.auth().currentUser.uid;
        //.where("", "==", Userid )
        
        db.collection('institution')
            .get() //gets a
            .then(snapshot => {
                const institution = []
                snapshot.forEach(doc => {
                    const data = doc.data() //get the data
                    institution.push(data) //then push it 
                })
                this.setState({ institution: institution })
                console.log("xxxxxxxx" + snapshot)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <AppNavBar />
                <SideBar history={this.props.history} />
                {
                    this.state.institution &&
                    this.state.institution.map(institutioninfo => {
                        return (
                            <div>
                                <form onSubmit={this.profileConfirmHandler}>
                                    <label className="AppTitle AddToProfile">
                                        {institutioninfo.name}
                                    </label>
                                    <label className="AddtoProfileSub1 ProfileSubtitle">
                                        <p>Account Number : {institutioninfo.accountNumber} </p>
                                    </label>

                                    <label className="AddtoProfileSub2 ProfileSubtitle">
                                        <p> address: {institutioninfo.address} </p>
                                    </label>

                                    <label className="AddtoProfileSub3 ProfileSubtitle">
                                        <p> swiftCode: {institutioninfo.swiftCode} </p>
                                    </label>

                                    <div className="FormField" >
                                        <input
                                            id="amount"
                                            type="text"
                                            name="amount"
                                            className="Addbox2 AddProfileBox4"
                                            onChange={this.profileChangeHandler}
                                        />
                                    </div>
                                </form>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default InstitutionKigaliIndependentUniversity
