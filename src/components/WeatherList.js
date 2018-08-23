import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Typography from '@material-ui/core/Typography'
import { Sparklines, SparklinesLine } from 'react-sparklines'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.temps.map(weather => weather.main.temp)
    // const humidities = cityData.list.humidities.map(weather => weather.main.humidity)
    // const pressures = cityData.list.pressures.map(weather => weather.main.pressure)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red">{}</SparklinesLine>
          </Sparklines>
        </td>
        <td></td>
        <td></td>
      </tr>
    )
  }

  render() {
    return (
      <table>
        <thead>
          {/* <Typography variant="display1" > */}
            <tr>
              <th>City</th>
              <th>Temp (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          {/* </Typography> */}
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)