import React, { Component } from 'react'
import ListItemsCards from './ListItemsCards'
import { connect } from 'react-redux';


export class CardComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cards: null,
             users: null

        }
    }
     
    render() {
 
        return (
            <div className="recipientComp">
                   {
                    this.props.cards &&
                        this.props.cards.map(cardInfo =>{
                             return (<ListItemsCards cardInfo={cardInfo}/>)
                        } 
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.FetchReducer.cards,
    users: state.FetchReducer.users


})

export default connect(
    mapStateToProps,
    undefined)(CardComponent);

