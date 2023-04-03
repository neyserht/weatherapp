import React, { Component } from 'react';
import './App.css';

class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = { temp: 0, desc: "", icon: "", loading: true }
    }
    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Lima&units=Metric&APIkey=7485ef5b995d1798c97109ab650c234c")
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                temp : responseData.main.temp,
                desc : responseData.weather[0].description,
                icon : responseData.weather[0].icon,
                loading : false
            })
            
        })
        .catch((err) => console.err(err));
    }
    
    render() { 
        
        const imgSrc = "https://openweathermap.org/img/wn/"+ this.state.icon +".png";
        if(this.state.loading){
            return <p>Loading</p>
        } else{
            return ( 
                <div className='App'>
                    <p>Temperature: {this.state.temp}</p>
                    <p>Description: {this.state.desc}</p>
                    <img src={imgSrc} alt="Weather Icon" />
                </div>
                );
        }
    }
}
 
export default WeatherApp;

