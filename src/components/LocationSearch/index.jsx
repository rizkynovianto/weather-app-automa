import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class LocationSearch extends Component {


    render(){

        return(
            
            <Row>
                <Col sm={10}><Form.Control 
                                    type="input" 
                                    name= {this.props.name}
                                    placeholder="Search Location" 
                                    onChange = {this.props.onChange}
                                    />
                </Col>
                <Col sm={2}><Button type="submit" 
                                    variant="primary">
                                        Search</Button></Col>
            </Row>
       
        )
    }


}

export default LocationSearch;