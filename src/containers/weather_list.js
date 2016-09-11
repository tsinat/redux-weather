import React , { Component } from 'react';
import  { connect } from 'react-redux';
import { SparkLines, SparklinesLine } from 'react-sparkLines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        return (
            <tr key={name}>
                <SparkLines height={120} width={180} data={temps}>
                    <SparklinesLine color='red' />
                </SparkLines>
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
