import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
  renderWeather(cityData){
    const tempList = cityData.list.map(weather => weather.main.temp);
    const presureList = cityData.list.map(weather => weather.main.pressure);
    const humList = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key= {cityData.city.name}>
        <td> <GoogleMap lon={lon} lat={lat} /></td>
        <td> <Chart data={tempList} color={"blue"} units="K"/> </td>
        <td> <Chart data={presureList} color={"red"} units="hPa"/> </td>
        <td> <Chart data={humList} color={"green"}  units= "%"/> </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (k)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather } /*state* then state.weather*/) {
  return { weather /*weather: weather*/ }; //from combineReducers
}

export default connect(mapStateToProps)(WeatherList);
