
import React, { Component } from 'react'
import { db } from '../config/Fire';
import { connect } from 'react-redux'

// "tok_1H7Dn6HtuFKHLbY33eTxwGD7"
// ""tok_1H7DovHtuFKHLbY34it9KJkS""

class ListItem extends Component {

    deleteRecipient = (id) => {

        db.collection("recipient").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    render() {
        const { recipientInfo } = this.props
        return (
            // <div style={{ display: 'flex', marginTop: 10, height: '8rem', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F2F5F7' }}>
            //     <div style={{ display: 'flex', marginLeft: '2rem' }}>
            //         <div>
            //             <i style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center' }} className="fa fa-user-circle-o" aria-hidden="true"></i>
            //         </div>
            //         <div style={{ display: 'flex', marginLeft: '2rem', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', }}>
            //             <div style={{ marginBottom: 5 }}> {recipientInfo.firstName}   {recipientInfo.lastName} </div>
            //             <div style={{ marginTop: 7 }}>{recipientInfo.flag} {recipientInfo.phoneNumber} </div>
            //         </div>
            //     </div>
            //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '2rem' }}>
            //         <button  onClick={() => this.deleteRecipient(recipientInfo.id)} ><i style={{ fontSize: 30 }} className="fa fa-trash-o " aria-hidden="true"></i></button>
            //     </div>
            // </div>
            <div class="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div class="row align-items-center flex-row">
                    <div class="col-2 col-sm-1 text-center"> 
                        <i style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center' }} className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                    <div class="col col-sm-7"> 
                        <span class="d-block text-4">{recipientInfo.firstName}   {recipientInfo.lastName} </span> 
                        <span class="text-muted">{recipientInfo.flag} {recipientInfo.phoneNumber}</span> 
                    </div>
                    <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> 
                        <button  onClick={() => this.deleteRecipient(recipientInfo.id)} ><i style={{ fontSize: 30 }} className="fa fa-trash-o " aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    recipient: state.FetchReducer.recipient, //fetching (DB) already exciting rates 
})

export default connect(
    mapStateToProps,
    undefined
)(ListItem)