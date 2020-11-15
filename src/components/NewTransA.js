import React, { Component } from "react";
import { addCountry } from "../MyRedux/Actions/actions";
import { connect } from "react-redux";
import { countries } from "countries-list";
import Axios from "axios";
import { db } from "../config/Fire";
import CountryList from "../Data/countryList";
import { withRouter } from "react-router-dom";
import { ListItemText } from "@material-ui/core";

class NewTransA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country:
        countries[
          Object.keys(countries).filter((ct) =>
            CountryList.has(countries[ct].name)
          )[0]
        ],
      user: {},
      rate: [],
    };
  }

  isEqual = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDay() === date2.getDay()
    );
  };

  ConvertCurrency = async (from, to, amount) => {
        let endpoint = "convert";
        let access_key = "fdc4b5653a50baf173f341c0847f0c9e"; // put this in env variable
        //let access_key = process.env.ConrencyConversionAccessKey; // put this in env variable
        // define from currency, to currency, and amount
        // execute the conversion using the "convert" endpoint:
        const url =
        "https://data.fixer.io/api/" +
        endpoint +
        "?access_key=" +
        access_key +
        "&from=" +
        from +
        "&to=" +
        to +
        "&amount=" +
        amount;
        try {
            //   const response = async () => {
            const res = await fetch(url);
            const data = await res.json();
            const rate = Math.round((data.info.rate * 100) / 100).toFixed(2);

            return rate;
        } catch (err) {

            console.log("XXXXXXXXX error = ", err);

        }

        return -1;
  };



  handleOnPressContinue = async (e) => {
    e.preventDefault(); // to prevent page refresh
    //Before navigating the next page
    //

    console.log(this.state);
    let from = this.props.users.currencySender;
    let to = this.state.country.currency;
    //read
    //use

    // console.log(" From " + from)
    // console.log(" To " + to)

    const rate = this.props.rates.find((theRate) => {
      // console.log(" theRate.from " + theRate.from)
      // console.log(" theRate.to " + theRate.to)
      return theRate.from === from && theRate.to === to;
    });

    if (rate) {
      const today = new Date();
      const date = new Date(rate.rateDate.toDate());
      if (this.isEqual(today, date)) {
        this.props.addCountry(this.state.country, rate.rateAmount, to);
      } else {
        const rateconv = await this.ConvertCurrency(from, to, 1);

        console.log("Called the API " + rateconv);

        //
        db.collection("rates")
          .doc(rate.rateId)
          .update({
            rateAmount: rateconv,
            rateDate: new Date(),
          })
          .then(function () {
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });

        //updating our transaction reducer
        this.props.addCountry(this.state.country, rateconv, to);
      }
    } else {
      const rateconv = await this.ConvertCurrency(from, to, 1);

      console.log("Called the API " + rateconv);

      const ref = db.collection("rates").doc();

      console.log("XXXXXX" + from);

      const rateObject = {
        from: from,
        rateAmount: rateconv,
        rateDate: new Date(),
        rateId: ref.id,
        to: to,
      };

      console.log({ rateObject });
      db.collection("rates")
        .doc(ref.id)
        .set(rateObject)
        .then(function () {
          console.log("Document successfully Written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      //updating our transaction reducer
      this.props.addCountry(this.state.country, rateconv, to);
    }

    this.props.history.push({
      pathname: "/NewTransactionB",
    });
  };

  render() {
    return (
      <div id="content" className="py-4">
        <div className="container">
          <h2 className="font-weight-400 text-center mt-3">New Transaction</h2>
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
              <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                <br />
                <form>
                  <div className="form-group">
                    <label className="NewTransactionSub1 NewTransactionSubtitle">
                      Select Country
                    </label>
                    <div>
                      <select
                        id="youSendCurrency country"
                        data-style="custom-select bg-transparent border-0"
                        data-container="body"
                        data-live-search="true"
                        name="country"
                        className="selectpicker form-control bg-transparent"
                        onChange={(event) =>
                          this.setState({
                            country: countries[event.target.value],
                          })
                        }
                      >
                        {Object.keys(countries)
                          .filter((ct) => CountryList.has(countries[ct].name))
                          .sort((a, b) =>
                            countries[a].name.localeCompare(countries[b].name)
                          )
                          .map((country) => (
                            <option value={country}>
                              {countries[country].emoji}{" "}
                              {countries[country].name}{" "}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <br />
                  <button
                    onClick={this.handleOnPressContinue}
                    className="btn btn-primary btn-block"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchStateToProps = (dispatch) => ({
  addCountry: (country, rate, recieverCurrency) =>
    dispatch(addCountry(country, rate, recieverCurrency)),
});

const mapStateToProps = (state) => ({
  users: state.FetchReducer.users,
  rates: state.FetchReducer.rates, //fetching (DB) already exciting rates
});

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(withRouter(NewTransA));
