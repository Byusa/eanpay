import React, { Component } from 'react';
import SideSteps from './SideSteps';


class NewTransactionF extends Component {

    handleOnPressBackToActivities =()=>{
        this.props.history.push({
            pathname: '/Activities',
        });
    }

    render() {
        return (
            <div>
                <SideSteps stepTick1="✓" stepTick2 = '✓'stepTick3 = '✓' stepTick4 = '✓'/>

                <label className="AppTitle NewTransactionTitle">
                    Your payment was successfull
                </label>

                <button style={{ color: 'white' }} className="NewTransactionButtons NewTransactionContinueButtonF" onClick={this.handleOnPressBackToActivities} >
                        <label className="NewTransactionContinueWords"> Continue</label>
                </button>

            </div>
        )
    }
}

export default NewTransactionF; 
