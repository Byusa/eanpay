import React, { Component } from 'react'

class SideSteps extends Component {

    render() {
        
        return (
            <div className="roundStepAll" >
                <div >
                    <label className="roundSteps posSteps1"> {this.props.stepTick1}</label>
                    <label className="StepsWords posSteps1" > Amount And Delivery</label>
                </div>
                <div >
                    <label className="roundSteps posSteps2" > {this.props.stepTick2} </label>
                    <label className="StepsWords posSteps2" > Select Recipient</label>
                </div>
                <div >
                    <label className="roundSteps posSteps3" > {this.props.stepTick3} </label>
                    <label className="StepsWords posSteps3" > Payment Details</label>
                </div>
                <div >
                    <label className="roundSteps posSteps4"> {this.props.stepTick4}  </label>
                    <label className="StepsWords posSteps4" > Comfirm And Send</label>
                </div>

                {/* <div className="LineSteps LineSteps1" />*/}
            </div>

        )
    }
}

export default SideSteps;
