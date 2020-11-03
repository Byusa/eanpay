import React, { Component } from 'react'
import results from '../Data/results.js';
import { db } from '../config/Fire';
import { connect } from 'react-redux';
import ButtonCustomized from './ButtonCustomized';




class AddProfileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
            Address: '',
            City: '',
            Country: '',
            Photo: ''
        }
    }


    //other states
    profileChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    //the File
    ProfilechangeHandlerFile = (e) => {
        this.setState({ selectedFile: e.target.files[0] })
    }
    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    //post to the database (add card)
    profileConfirmHandler = e => {
        e.preventDefault(); // to prevent page refresh
        console.log(this.state);

        // Add a new document in collection "cards"
        db.collection("users")
            .doc().set({
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Email: this.state.Email,
                PhoneNumber: this.state.PhoneNumber,
                Address: this.state.Address,
                City: this.state.City,
                Country: this.state.Country,
                Photo: this.state.Photo,
            }, { merged: true })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

        //Go to this page as soon as you are done posting
        this.props.history.push({
            pathname: '/EditProfile',
        });
    }
    profileConfirmHandler1 = e => {
        e.preventDefault(); // to prevent page refresh
        console.log(this.state);


        const CardData = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            PhoneNumber: this.state.PhoneNumber,
            Address: this.state.Address,
            City: this.state.City,
            Country: this.state.Country,
            Photo: this.state.Photo,
        }
        //const fd = new FormData();
        //fd.append('image', this.state.photo, this.state.photo.name)
        //post to the database
        results.post('/userProfile.json', CardData)
            .then(response => {
                console.log("post yyyyyyyyyy")
                console.log(response)
            })
            .catch(error => {
                console.log("An error:", error)
            })

        //Go to this page as soon as you are done posting
        this.props.history.push({
            pathname: '/EditProfile',
        });

        //get the data 
        results.get('/userProfile.json', CardData)
            .then(response2 => {
                console.log("get xxxxxxxxxxx")
                console.log(response2)
            })
            .catch(error => {
                console.log("Get error:", error)
            })

    }
    render() {
        const { FirstName, LastName, Email, PhoneNumber, Address, City, Country, Photo, postalCode } = this.state

        return (
            <div>

                <div className="editProfileLine line1" />

                <form onSubmit={this.profileConfirmHandler}>

                    <label className="AddtoProfileSub1 ProfileSubtitle">
                        <p> <b>Customer ID:</b> {this.props.users.userID} </p>
                    </label>

                    <div >
                        <div className="AddtoProfileSub2 ProfileSubtitle"> <b>First Name:</b> </div>
                        <input
                            id="FirstName"
                            type="text"
                            name="FirstName"
                            className="Addbox3 AddtoProfileSub2"
                            value={FirstName}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.FirstName}
                        />
                    </div>

                    <div >
                        <div className="AddtoProfileSub3 ProfileSubtitle"> <b>Last Name:</b> </div>
                        <input
                            id="LastName"
                            type="text"
                            name="LastName"
                            className="Addbox3Side AddtoProfileSub3"
                            value={LastName}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.LastName}
                        />
                    </div>

                    <div>
                        <div className="AddtoProfileSub4 ProfileSubtitle"> <b>Email:</b> </div>
                        <input
                            id="Email"
                            type="email"
                            name="Email"
                            className="Addbox3 AddtoProfileSub4"
                            value={Email}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.email}
                        />
                    </div>

                    <div >
                        <div className="AddtoProfileSub5 ProfileSubtitle"> <b>Phone Number:</b> </div>
                        <input
                            id="phoneNumber"
                            type="number"
                            name="phoneNumber"
                            className="Addbox3Side AddtoProfileSub5"
                            value={PhoneNumber}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.phoneNumber}
                        />
                    </div>

                    <div >
                        <div className="AddtoProfileSub6 ProfileSubtitle"> <b>Country:</b> </div>
                        <input
                            id="country"
                            type="text"
                            name="country"
                            className="Addbox3 AddtoProfileSub6"
                            value={Country.name}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.country}
                        />
                    </div>

                    <div className="editProfileLine line2" />

                    <div >
                        <div className="AddtoProfileSub7 ProfileSubtitle"> <b>City:</b> </div>

                        <input
                            id="city"
                            type="text"
                            name="city"
                            className="Addbox3Side AddtoProfileSub7"
                            value={City}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.city}
                        />
                    </div>

                    <div >
                        <div className="AddtoProfileSub8 ProfileSubtitle"> <b>Address:</b> </div>

                        <input
                            id="Address"
                            type="text"
                            name="Address"
                            className="Addbox3 AddtoProfileSub8"
                            value={Address}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.address}
                        />
                    </div>

                    <div>
                        <div className="AddtoProfileSub9 ProfileSubtitle"> <b>Postal Code:</b> </div>

                        <input
                            id="postalCode"
                            type="text"
                            name="postalCode"
                            className="Addbox3Side AddtoProfileSub9"
                            value={postalCode}
                            onChange={this.profileChangeHandler}
                            placeholder={this.props.users.PostalCode}
                        />
                    </div>

                    <div>
                        <div className="AddtoProfilePhoto ProfileSubtitle">
                            Upload Photo ID '('jpg', png NO pdf)'
                        </div>

                        <div className="Addbox3 AddProfileBox7">
                            <input
                                id="Photo"
                                type="file"
                                name="Photo"
                                value={Photo}
                                onChange={this.ProfilechangeHandlerFile}
                            />
                        </div> 
                    </div>


                    <ButtonCustomized
                   // disabledProp = {this.isCompleted}
                    classNameStyle="AddProfileButtons EditProfileConfirmButton"
                    onClickButton={this.profileConfirmHandler}
                    ButtonName='Confirm' />

                </form>

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.FetchReducer.users
})

export default connect(
    mapStateToProps,
    undefined)(AddProfileComponent);


