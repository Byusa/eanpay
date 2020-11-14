import React, { Component } from "react";
import results from "../Data/results.js";
import { db } from "../config/Fire";
import { connect } from "react-redux";
import ButtonCustomized from "./ButtonCustomized";

class AddProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      City: "",
      Country: "",
      Photo: "",
    };
  }

  //other states
  profileChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //the File
  ProfilechangeHandlerFile = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };
  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  //post to the database (add card)
  profileConfirmHandler = (e) => {
    e.preventDefault(); // to prevent page refresh
    console.log(this.state);

    // Add a new document in collection "cards"
    db.collection("users")
      .doc()
      .set(
        {
          FirstName: this.state.FirstName,
          LastName: this.state.LastName,
          Email: this.state.Email,
          PhoneNumber: this.state.PhoneNumber,
          Address: this.state.Address,
          City: this.state.City,
          Country: this.state.Country,
          Photo: this.state.Photo,
        },
        { merged: true }
      )
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    //Go to this page as soon as you are done posting
    this.props.history.push({
      pathname: "/EditProfile",
    });
  };
  profileConfirmHandler1 = (e) => {
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
    };
    //const fd = new FormData();
    //fd.append('image', this.state.photo, this.state.photo.name)
    //post to the database
    results
      .post("/userProfile.json", CardData)
      .then((response) => {
        console.log("post yyyyyyyyyy");
        console.log(response);
      })
      .catch((error) => {
        console.log("An error:", error);
      });

    //Go to this page as soon as you are done posting
    this.props.history.push({
      pathname: "/EditProfile",
    });

    //get the data
    results
      .get("/userProfile.json", CardData)
      .then((response2) => {
        console.log("get xxxxxxxxxxx");
        console.log(response2);
      })
      .catch((error) => {
        console.log("Get error:", error);
      });
  };
  render() {
    const {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Address,
      City,
      Country,
      Photo,
      postalCode,
    } = this.state;

    return (
      <div id="content" className="py-4">
        <div className="container">
          <div className="editProfileLine line1" />
          <h2 className="font-weight-400 text-center mt-3">Select/Add Card</h2>
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
              <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                <br />
                <form onSubmit={this.profileConfirmHandler}>
                  {/*
                  <div className="form-group">
                    <label className="AddtoProfileSub1 ProfileSubtitle">
                      <p>
                        {" "}
                        <b>Customer ID:</b> {this.props.users.userID}{" "}
                      </p>
                    </label>
                  </div>
                  */}

                  <div className="form-group">
                    <div className="AddtoProfileSub2 ProfileSubtitle">
                      {" "}
                      <b>First Name:</b>{" "}
                    </div>
                    <input
                      id="FirstName"
                      type="text"
                      name="FirstName"
                      className="selectpicker form-control bg-transparent"
                      value={FirstName}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.FirstName}
                    />
                  </div>

                  <div className="form-group">
                    <div className="AddtoProfileSub3 ProfileSubtitle">
                      {" "}
                      <b>Last Name:</b>{" "}
                    </div>
                    <input
                      id="LastName"
                      type="text"
                      name="LastName"
                      className="selectpicker form-control bg-transparent"
                      value={LastName}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.LastName}
                    />
                  </div>

                  <div className="form-group">
                    <div className="AddtoProfileSub4 ProfileSubtitle">
                      {" "}
                      <b>Email:</b>{" "}
                    </div>
                    <input
                      id="Email"
                      type="email"
                      name="Email"
                      className="selectpicker form-control bg-transparent"
                      value={Email}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.email}
                    />
                  </div>

                  <div className="form-group">
                    <div className="AddtoProfileSub5 ProfileSubtitle">
                      {" "}
                      <b>Phone Number:</b>{" "}
                    </div>
                    <input
                      id="phoneNumber"
                      type="number"
                      name="phoneNumber"
                      className="selectpicker form-control bg-transparent"
                      value={PhoneNumber}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.phoneNumber}
                    />
                  </div>

                  <div className="form-group">
                    <div className="AddtoProfileSub6 ProfileSubtitle">
                      {" "}
                      <b>Country:</b>{" "}
                    </div>
                    <input
                      id="country"
                      type="text"
                      name="country"
                      className="selectpicker form-control bg-transparent"
                      value={Country.name}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.country}
                    />
                  </div>

                  <div className="editProfileLine line2" />

                  <div className="form-group">
                    <div className="AddtoProfileSub7 ProfileSubtitle">
                      {" "}
                      <b>City:</b>{" "}
                    </div>

                    <input
                      id="city"
                      type="text"
                      name="city"
                      className="selectpicker form-control bg-transparent"
                      value={City}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.city}
                    />
                  </div>

                  <div className="form-group">
                    <div className="AddtoProfileSub8 ProfileSubtitle">
                      {" "}
                      <b>Address:</b>{" "}
                    </div>

                    <input
                      id="Address"
                      type="text"
                      name="Address"
                      className="selectpicker form-control bg-transparent"
                      value={Address}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.address}
                    />
                  </div>

                  <div className="form-group">
                    <div className="AddtoProfileSub9 ProfileSubtitle">
                      {" "}
                      <b>Postal Code:</b>{" "}
                    </div>

                    <input
                      id="postalCode"
                      type="text"
                      name="postalCode"
                      className="selectpicker form-control bg-transparent"
                      value={postalCode}
                      onChange={this.profileChangeHandler}
                      placeholder={this.props.users.PostalCode}
                    />
                  </div>

                  <div className="form-group">
                    <div className="AddtoProfilePhoto ProfileSubtitle">
                      Upload Photo ID '('jpg', png NO pdf)'
                    </div>

                    <div className="selectpicker form-control bg-transparent">
                      <input
                        id="Photo"
                        type="file"
                        name="Photo"
                        value={Photo}
                        onChange={this.ProfilechangeHandlerFile}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <ButtonCustomized
                      // disabledProp = {this.isCompleted}
                      classNameStyle="btn btn-primary btn-block"
                      onClickButton={this.profileConfirmHandler}
                      ButtonName="Confirm"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.FetchReducer.users,
});

export default connect(mapStateToProps, undefined)(AddProfileComponent);
