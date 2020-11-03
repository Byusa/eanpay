import React, { Component } from 'react';
import { db } from '../config/Fire';

class ListItemsCards extends Component {
    
    deleteCard = (id) => {
        console.log("inside delete card"  + id);
        db.collection("cards").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    render() {
        const { cardInfo } = this.props
        return (
            <div style={{ display: 'flex', marginTop: 10, height: '8rem', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F2F5F7' }}>
                
                <div style={{ display: 'flex', marginLeft: '2rem' }}>
                    <div style={{ display: 'flex', marginLeft: '2rem', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', }}>
                        <div style={{ marginBottom: 5 }}> {cardInfo.cardNumber}  </div>
                    </div>
                </div>

                <div style={{ display: 'flex', marginLeft: '2rem' }}>
                    <div style={{ display: 'flex', marginLeft: '2rem', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', }}>
                        <div style={{ marginBottom: 5 }}> {cardInfo.expiryDate.toDate().toString()}  </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '2rem' }}>
                    <button onClick={() => this.deleteCard(cardInfo.id)} ><i style={{ fontSize: 30 }} class="fa fa-trash-o " aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}

export default ListItemsCards;
