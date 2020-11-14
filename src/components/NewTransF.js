import React, { Component } from 'react';


class NewTransactionF extends Component {

    handleOnPressBackToActivities =()=>{
        this.props.history.push({
            pathname: '/Activities',
        });
    }

    render() {
        return (
            <div id="content" className="py-4">
                <div className="container">
                    <h2 className="font-weight-400 text-center mt-3">Your payment is successfull</h2>
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                                <br />
                                <form>
                                    <div class="form-group">
                                        <button style={{ color: 'white' }} className="btn btn-primary btn-block" onClick={this.handleOnPressBackToActivities} >
                                            <label className="NewTransactionContinueWords"> Done</label>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTransactionF; 
