import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WeatherLabel extends Component {


    render(){

        return(
        
            <Row md={4}>
                <Col xs={{ order: 'last' }}>UV Index {this.props.uvindex}</Col>
                <Col xs>Strom {this.props.storm}</Col>
                <Col xs>Rain {this.props.rain}</Col>
                <Col xs={{ order: 'first' }}>Wind {this.props.wind}</Col>
           </Row>


        )
    }


}

export default WeatherLabel;