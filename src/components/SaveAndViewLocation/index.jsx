import React, { Component } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";


class SaveAndViewLocation extends Component {


    render(){

        return(
        
        <ButtonGroup>

            <Button variant="primary" 
                    size="lg" 
                    name = "save"
                    active
                    onClick={this.props.onClick}>
                    Save
            </Button>
            <Button variant="secondary" 
                    size="lg" 
                    name = "view"
                    active
                    onClick={this.props.onClick}>
                    View
            </Button>
    
        </ButtonGroup>


        )
    }


}

export default SaveAndViewLocation;