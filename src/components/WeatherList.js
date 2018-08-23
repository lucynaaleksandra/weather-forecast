import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Typography from '@material-ui/core/Typography'
import { Sparklines, SparklinesLine } from 'react-sparklines'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red">{temps}</SparklinesLine>
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressures}>
            <SparklinesLine color="green">{pressures}</SparklinesLine>
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidities}>
            <SparklinesLine color="orange">{humidities}</SparklinesLine>
          </Sparklines>
        </td>
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
        <tbody key={name}>
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