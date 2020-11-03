import React, { Component } from 'react';
import institutionList from "../Data/institutionsList.json";
import { Link } from 'react-router-dom';

import {
    Card,
    CardBody,
} from "mdbreact";


class PayConnectComponent extends Component {

    state = {
        search: ""
    }



    renderInstitution = institution => {
        const inst =  "./Institution"
        var instName = institution.name
        instName = instName.replace(/\s/g,''); 
        const institutionName= inst.concat(instName)
        return (
            <div className="PayConnectInstitutionList1">
                <Card>
                    <CardBody>
                        <Link to={institutionName}> {institution.name}</Link>
                        {/*<label> {institution.AccountNumber}</label>*/}
                    </CardBody>
                </Card>

            </div>
        )
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    }



    render() {
        const { search } = this.state;

        const filteredInstitutions = institutionList.filter( institution => {
            return institution.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <div >
                <label className="AppTitle InstitutionSearch">
                    Search for the organization/company
                </label>
                <div className="FormField" >

                    <input
                        label="Search Institution Name"
                        icon="search"
                        onChange={this.onchange}
                        className="PayConnectbox"
                    />

                    <table id="myUL" className="PayConnectTable">
                        <thead>
                            <th> Name of the institution </th>
                        </thead>

                        <tbody>
                            {
                                filteredInstitutions.map(institution => {
                                    return this.renderInstitution(institution)
                                })
                            }
                        </tbody>

                    </table>

                    <button id="Search Button" className=" PayConnectSearchButton"> Search</button>
                </div>
            </div>
        )
    }
}

export default PayConnectComponent;


/*
    <Card>
        <CardBody>
            <CardTitle title={institution.name}>
                {institution.name.substring(0, 40)}
                {institution.name.length > 45 && "..."}
            </CardTitle>
        </CardBody>
    </Card>
*/
