import React, { Component } from "react";
import axios from "axios";

import LocationSearch from '../components/LocationSearch';
import SaveAndViewLocation from '../components/SaveAndViewLocation';
import WeatherLabel from '../components/WeatherLabel';
import WeatherCard from '../components/WeatherCard';
import TodayWeather from '../components/TodayWeather';

class WeatherMonitor extends Component {


    render(){

        return(
            
            <div>
                    
                <LocationSearch></LocationSearch>
                <SaveAndViewLocation></SaveAndViewLocation>
                <TodayWeather></TodayWeather>
                <WeatherLabel ></WeatherLabel>
                <WeatherCard></WeatherCard>

            </div>

        )
    }


}

export default WeatherMonitor;