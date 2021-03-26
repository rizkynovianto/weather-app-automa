import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class LocationSearch extends Component {


    render(){

        return(
           
            <Form.Group controlId="searchInputForm.control">
                
                <Form.Control type="input" placeholder="Search Location" />
                <Button variant="primary">Search</Button>

            </Form.Group>
        
        )
    }


}

export default LocationSearch;