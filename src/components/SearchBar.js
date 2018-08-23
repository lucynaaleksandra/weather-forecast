import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { fetchWeather } from '../actions/fetchWeather'
// import { withTheme } from '@material-ui/core/styles'
// import theme from '../styles'

// const buttonStyles = {
//   padding: "10px 20px",
//   margin: 12,
//   borderRadius: 6,
//   backgroundColor: "lightgray",
//   fontSize: 15,
//   height: 26,
//   textAlign: "center",
// }


class SearchBar extends Component {
  state = { term: '' }

  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    const { classes } = this.props

    return (
      <form className="input-group"
        onSubmit={this.onFormSubmit} >
        <Typography type="title"
          color="inherit"
          variant="display1"
          className="header"
          gutterBottom >
          {/* Enter city */}
          </Typography>
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          className='search-bar'
          placeholder=' Get a 5-day forecast in your favorite cities' />
        <span>
          {/* <Button variant="contained"
            color="default"
            type="submit"
            // style={theme["button--submit"]}
            className="button--submit" > */}
            {/* Submit */}
            {/* </Button> */}
          <button type="submit" className="button--submit" > Submit </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)