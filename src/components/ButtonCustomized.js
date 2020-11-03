import React, { Component } from 'react'

class ButtonCustomized extends Component {
    
    render() {
        console.log({ p: this.props.disabledProp})
        return (
            <div>
                <button
                    disabled={this.props.disabledProp}
                    className={this.props.classNameStyle}
                    onClick={this.props.onClickButton}>
                    <label
                        className="NewTransactionContinueWords">
                        {this.props.ButtonName}
                    </label>
                </button>
            </div>
        )
    }
}

export default ButtonCustomized;
