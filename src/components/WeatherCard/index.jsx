import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

class WeatherCard extends Component {


    render(){

        return(
            
            <Card style={{ width: '18rem' }}>
            <Card.Header>{this.props.dateDay}</Card.Header>
            <Card.Body>
              <Col><Image src={this.props.wstate} thumbnail />
                <Card.Text>
                  Temperature {this.props.temperature}
                </Card.Text>
                <Card.Text>
                  Humidity {this.props.humidity}
                </Card.Text>
              </Col>
            </Card.Body>
          </Card>

        )
    }


}

export default WeatherCard;