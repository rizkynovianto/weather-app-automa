import React, { Component } from "react";
import axios from "axios";

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
            locationId: '',
            search:{
                location: '',
            },
            locations: [],
            url:"https://secure-lowlands-34022.herokuapp.com/https://www.metaweather.com/"
            
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
                alert("Saved to storage")
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

    async componentDidMount(){

        await this.getWeather();

    }

    getWeather = () => {


        let urlString = "https://secure-lowlands-34022.herokuapp.com/https://www.metaweather.com/api/location/search/?query=jakarta"
       
        axios.get(urlString, this.state)
             .then(response => {

                let woeId = response.data[0].woeid;
                this.setState({locationId: woeId});
                this.fetchSixDaysWeather(this.state.locationId)

             })
             .catch(error => {
                 console.log(error);
             })
    }

    fetchSixDaysWeather = woeId => {

        let urlString = "https://secure-lowlands-34022.herokuapp.com/https://www.metaweather.com/api/location/"+woeId;
       
        axios.get(urlString, this.state)
             .then(response => {
                let weathersData = response.data["consolidated_weather"]
                this.setState({weathers: weathersData});
             })
             .catch(error => {
                 console.log(error);
             })

    }

    //Ugly duplication uuggh...
    fetchSearchResult = () => {

        let urlString = "https://secure-lowlands-34022.herokuapp.com/https://www.metaweather.com/api/location/search/?query="+this.state.search.location;

        axios.get(urlString, this.state)
             .then(response => {
                if(response.data.length > 0){

                    let woeId = response.data[0].woeid;
                    this.setState({locationId: woeId});
                    this.fetchSixDaysWeather(this.state.locationId)
                
                } else {

                    alert("Location not found in API");

                }
             })
             .catch(error => {
                 console.log(error);
             })
    }

    getDayName = dateString => {

        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(dateString);
        let dayName = days[d.getDay()];

        return dayName;

    }

    render(){
        
        const {url} = this.state;

        const mainWeather = this.state.weathers.splice(0,1);

        return(
            <div className="page-wrapper">
                <div className="content">
                    <Form onSubmit={this.submitHandler}>
                    <div class="row">
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 ">
                                <LocationSearch name="location" onChange={this.searchChangeHandler.bind(this)}></LocationSearch>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                                <SaveAndViewLocation onClick={this.saveOrView.bind(this)}></SaveAndViewLocation>
                            </div>
                    </div>
                    </Form>
                    <br></br>
                    <div class="row">
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                                    {mainWeather.map(weather => (

                                        <TodayWeather 
                                            temperature={weather.the_temp}
                                            weather={weather.weather_state_name}
                                            wstate={url+"static/img/weather/"
                                                        +weather.weather_state_abbr+".svg"}>
                                        </TodayWeather>

                                    ))}
                            </div>
                    </div>
                    <br></br>
                    <div class="row">
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                                {mainWeather.splice(0,1).map(weather => (
                                    <WeatherLabel 
                                            windspeed={weather.wind_speed}
                                            humidity={weather.humidity}
                                            windDirection={weather.wind_direction}
                                            airpressure={weather.air_pressure}>

                                    </WeatherLabel>
                                ))}
                            </div>
                    </div>
                    <br></br>
                    <div class="row">
                                {this.state.weathers.map(weather => (
                                            <WeatherCard
                                                    dateDay = {this.getDayName(weather.applicable_date)}
                                                    temperature={weather.the_temp}
                                                    humidity={weather.humidity}
                                                    wstate={url+"static/img/weather/"
                                                                +weather.weather_state_abbr+".svg"}>
                                            </WeatherCard>
                                ))}
                     </div>
                 </div>   
            </div>

        )
    }


}

export default WeatherMonitor;