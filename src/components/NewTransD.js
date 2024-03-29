import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../MyRedux/Actions/actions";
import ButtonCustomized from "./ButtonCustomized";

class NewTransD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: this.props.cards[0],
      payoutNetwork: "Mpesa",
      amountSent: 0,
      exchangeRate: 0,
      fee: 0,
      totalAmount: 0,
      error: "",
      totalAmountConverted: 0,
      recieverCurrency: "",
    };
  }

  handleOnPressAddCard = () => {
    this.props.history.push({
      pathname: "/AddCard",
    });
  };

  isCompleted = () => {
    console.log({ Thecard: !this.state.card, card: this.state.card });
    if (this.state.card) return false;
    return true;
  };

  handleOnPressContinueD = () => {
    const { card } = this.state;

    let error = "";

    if (!card) {
      error += "Error: please add a card";
    }

    this.setState({ error });

    if (error !== "") return;

    this.props.addCard(this.state.card);

    this.props.history.push({
      pathname: "/NewTransactionE",
    });
  };

  render() {
    console.log("Hey");
    const disable = this.isCompleted();
    return (
      <div id="content" className="py-4">
        <div className="container">
          <h2 className="font-weight-400 text-center mt-3">Select/Add Card</h2>
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
              <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                <br />
                <form>
                  <div className="form-group">
                    <label className="NewTransactionSub1 NewTransactionSubtitle">
                      Select Card
                    </label>
                    <select
                      id="card"
                      name="card"
                      className="selectpicker form-control bg-transparent"
                      onChange={(event) =>
                        this.setState({
                          card: this.props.cards[
                            Number(document.getElementById("card").value)
                          ],
                        })
                      }
                    >
                      {this.props.cards.map((card, index) => (
                        <option key={index} value={index}>
                          {" "}
                          {`${card.cardNumber} ${card.fullName}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <button
                      style={{ color: "white" }}
                      className="btn btn-primary btn-block"
                      onClick={this.handleOnPressAddCard}
                    >
                      <label className="NewTransactionContinueWords">
                        {" "}
                        Add Card
                      </label>
                    </button>

                    {this.state.error && (
                      <div className="NewTransactionErrrorB  NewTransactionWordsErrorB">
                        {this.state.error}
                      </div>
                    )}
                  </div>

                  <div class="form-group">
                    <div className="NewTransactionWordsB NewTransactionWordsD1">
                      {" "}
                      Send Amount: {this.props.amountSent}{" "}
                      {this.props.users.currencySender}{" "}
                    </div>

                    <div className="NewTransactionWordsB NewTransactionWordsD2">
                      {" "}
                      Fee: {this.props.fee} {this.props.users.currencySender}{" "}
                    </div>

                    <div className="NewTransactionWordsB NewTransactionWordsD3">
                      {" "}
                      Total To Pay: {this.props.totalAmount}{" "}
                      {this.props.users.currencySender}{" "}
                    </div>

                    <div className="NewTransactionWordsB NewTransactionWordsD4">
                      {" "}
                      Your Recipient Gets:{" "}
                      {(
                        Math.round(this.props.totalAmountConverted * 100) / 100
                      ).toFixed(2)}{" "}
                      {this.props.recieverCurrency}{" "}
                    </div>
                  </div>

                  <div class="form-group">
                    <button
                      style={{ color: "white" }}
                      className="btn btn-primary btn-block"
                      onClick={this.handleOnPressContinueD}
                    >
                      <label className="NewTransactionContinueWords">
                        {" "}
                        Continue
                      </label>
                    </button>

                    {/* 
                    <ButtonCustomized
                      disabledProp={disable}
                      classNameStyle="btn btn-primary btn-block"
                      onClickButton={this.handleOnPressContinueD}
                      ButtonName="Continue"
                    />
                */}
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

const mapDispatchStateToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCard(card)),
});

const mapStateToProps = (state) => ({
  amountSent: state.TransactionReducer.amountSent,
  fee: state.TransactionReducer.fee,
  totalAmount: state.TransactionReducer.totalAmount,
  totalAmountConverted: state.TransactionReducer.totalAmountConverted,
  cards: state.FetchReducer.cards,
  users: state.FetchReducer.users,
  recieverCurrency: state.TransactionReducer.recieverCurrency,
});

export default connect(mapStateToProps, mapDispatchStateToProps)(NewTransD);
