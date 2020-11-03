/*

This is not used but it is important to know
*/
//////////////////////////////////////////////
import React, { Component } from 'react'
import Home from '../pages/Home'
import { connect } from 'react-redux'



export function withAuth(WrapperClass){
    return class ProtectedHOC extends Component {
 
    render() {
        return (
            this.props.isAuthenticated ? <WrapperClass {...this.props} /> :
            <Home /> 
        )
      }
   }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.FetchReducer.isAuthenticated
})



// read from fetchuser

export  default  (WrapperComponent) => connect(mapStateToProps,undefined)(withAuth(WrapperComponent))
