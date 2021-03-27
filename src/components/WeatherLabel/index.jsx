import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WeatherLabel extends Component {


    render(){

        return(
        
            <Row md={4}>
                <Col xs={{ order: 'last' }}>Wind Speed {this.props.windspeed}</Col>
                <Col xs>Humidity {this.props.humidity}</Col>
                <Col xs>Wind Direction {this.props.windDirection}</Col>
                <Col xs={{ order: 'first' }}> Air Pressure {this.props.airpressure}</Col>
           </Row>


        )
    }


}

export default WeatherLabel;