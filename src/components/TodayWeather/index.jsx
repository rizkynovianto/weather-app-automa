import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class TodayWeather extends Component {


    render(){

        return(
        
            <Row md={4}>
                <Col xs={{ order: 'last' }}>Today temperature is {this.props.temperature}</Col>
                <Col xs>Today weather is{this.props.weather}</Col>
                <Col xs={{ order: 'first' }}><Image src={this.props.wstate} thumbnail /></Col>
           </Row>


        )
    }


}

export default TodayWeather;