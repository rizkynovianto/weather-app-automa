import React, { Component } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";


class SaveAndViewLocation extends Component {


    render(){

        return(
        
        <ButtonGroup>

            <Button variant="primary" size="lg" active>
                    Save
            </Button>
            <Button variant="secondary" size="lg" active>
                    View
            </Button>
    
        </ButtonGroup>


        )
    }


}

export default SaveAndViewLocation;