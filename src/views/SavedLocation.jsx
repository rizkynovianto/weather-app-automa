import React, { Component } from "react";
import { SearchedLocationTableHeads } from '../variables/Variables';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LocationTable from '../components/LocationTable';

class SavedLocation extends Component {


    getSearchedLocationsRows = () => {

        let searchedLocations = JSON.parse(localStorage.getItem('searchedLocations'));

        let dataRows = [];

        if(searchedLocations !== null){

            searchedLocations.map(
                
                searchedLocation => dataRows.push([searchedLocation])

            )

        }

        return dataRows;

    }
    
    deleteSearchLocation = index => {
        
        let dataRows = JSON.parse(localStorage.getItem('searchedLocations'));
       
        dataRows.splice(index, 1)

        localStorage.setItem('searchedLocations', JSON.stringify(dataRows));

        window.location.reload(); //ughhh

    }

    render(){

        return(
           
            <Container fluid >
 
                <Row>

                    <Col>
                    
                    <LocationTable tableHeads={SearchedLocationTableHeads} 
                                    tableRowsData={this.getSearchedLocationsRows()}
                                    onTdDeleteClicked={this.deleteSearchLocation.bind(this)}  ></LocationTable>
                    
                    </Col>

                </Row> 

            </Container>
        
        )
    }


}

export default SavedLocation;