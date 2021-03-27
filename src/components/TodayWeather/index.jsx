import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class TodayWeather extends Component {


    render(){

        return(
        
            <Row md={4}>
                <Col xs={{ order: 'last' }}>{this.props.temperature} Temp</Col>
                <Col xs>Weather {this.props.weather}</Col>
                <Col xs={{ order: 'first' }}><Image src="holder.js/171x180" thumbnail /></Col>
           </Row>


        )
    }


}

export default TodayWeather;