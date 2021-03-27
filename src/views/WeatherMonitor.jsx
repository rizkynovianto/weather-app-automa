import React, { Component } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"


import LocationSearch from '../components/LocationSearch';
import SaveAndViewLocation from '../components/SaveAndViewLocation';
import WeatherLabel from '../components/WeatherLabel';
import WeatherCard from '../components/WeatherCard';
import TodayWeather from '../components/TodayWeather';

class WeatherMonitor extends Component {

    constructor(){

        super();

        this.state = {

            weathers: [],
            search:{
                location: '',
            },
            locations: []
            
        }

    }

    clearInput = () => {
        this.setState({
            search:{
                location: ''
            }
        })
    }

    searchChangeHandler = e => {
        this.setState({ search: {[e.target.name]: e.target.value }});
    }

    saveOrView = e => {
        
        switch(e.target.name){

            case "save":
                this.insertToStorage();
                break;    

            case "view":
                this.props.history.push("/main/savedlocation");
                break;
        }

    }

    insertToStorage = () => {


        this.setState({ locations: [...this.state.locations
                                        , this.state.search.location]})

        localStorage.setItem('searchedLocations'
                , JSON.stringify(this.state.locations));
    

    }

    submitHandler = e => {

        e.preventDefault();

        this.fetchSearchResult();

    }

    componentDidMount(){


    }

    fetchSearchResult = () => {


        axios.get('', this.state )
             .then(response => {
    
             })
             .catch(error => {
                 console.log(error);
             })
    }

    render(){

        const {location} = this.state.search;

        return(
            
            <Container fluid >
                <Form onSubmit={this.submitHandler}>
                    <Row className="show-grid">
                        <Col><LocationSearch name="location" onChange={this.searchChangeHandler.bind(this)}></LocationSearch></Col>
                        <Col><SaveAndViewLocation onClick={this.saveOrView.bind(this)}></SaveAndViewLocation></Col>
                    </Row>
                </Form>
                <Row className="align-items-center">
                    <Col><TodayWeather></TodayWeather></Col>
                </Row>

                <Row>
                    <Col><WeatherLabel ></WeatherLabel></Col>
                </Row> 

                <Row className="align-items-center">
                    <Col><WeatherCard></WeatherCard></Col>
                    <Col><WeatherCard></WeatherCard></Col>
                    <Col><WeatherCard></WeatherCard></Col>
                    <Col><WeatherCard></WeatherCard></Col>
                    <Col><WeatherCard></WeatherCard></Col>
                </Row>

            </Container>

        )
    }


}

export default WeatherMonitor;