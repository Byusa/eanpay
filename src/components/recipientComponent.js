import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem'



class recipientComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            recipients: null,
            users: null
        }
    } 

    render() {
        return (
            <div class="bg-white shadow-sm rounded py-12 mb-12">
            <div class="transaction-list">       
                   {
                    this.props.recipients &&
                        this.props.recipients.map((recipientInfo,index) => {
                             return (<ListItem key={index} recipientInfo={recipientInfo}/>)
                        } 
                    )
                }
            </div>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => ({
    recipients: state.FetchReducer.recipients,
    users: state.FetchReducer.users
})


export default connect(
    mapStateToProps,
    undefined)(recipientComponent);