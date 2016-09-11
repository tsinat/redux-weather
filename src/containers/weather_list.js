import React , { Component } from 'react';
import  { connect } from 'react-redux';
import Char from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        return (
            <tr key={name}>
                <Chart data={temps} color='orange'/>
            </tr>
        );
    }
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect (mapStateToProps)(WeatherList);
