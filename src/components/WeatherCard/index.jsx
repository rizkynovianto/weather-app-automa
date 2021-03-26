import React, { Component } from "react";

import Card from "react-bootstrap/Card";

class WeatherCard extends Component {


    render(){

        return(
            
            <Card style={{ width: '18rem' }}>
            <Card.Header>{this.props.day} Header</Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
                {this.props.weather}
              </Card.Text>
            </Card.Body>
          </Card>

        )
    }


}

export default WeatherCard;