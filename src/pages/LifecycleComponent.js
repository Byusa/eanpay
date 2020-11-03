import React, { Component } from 'react'

class LifecycleComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hom: "",
            homeMounted: true
             
        }
        console.log("constructor");
    }
    
    /*components trial*/
    componentWillMount(){
        console.log("component Will Mount");
    }

    componentDidMount(){
        console.log("component Did Mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("component Will Receive Props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Component Update", nextProps, nextState);
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component Did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("component wiil unMount");
    }


    /**/
    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }


    render() {
        let homecmp ="";
        if(this.setState.homeMounted){
            homecmp = (
                <Home
                    name={"Max"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName = {this.state.homeLink}
                />
            );
        }
        return (
            <div>
                {homecmp}

                <button onClick={this.onChangeHomeMounted.bind(this)}>

                </button>
            </div>
        )
    }
}

export default LifecycleComponent;
