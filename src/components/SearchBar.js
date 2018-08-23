import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/fetchWeather'
import Typography from '@material-ui/core/Typography'
// import { withStyles } from 'material-ui/styles'


// const styles = theme => ({
//   root: {
//     marginTop: theme.spacing.unit *3,
//     width: '100%'
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// })


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
    const {classes} = this.props

    return (
        <form className="input-group"
          onSubmit={this.onFormSubmit} >
          <Typography type="title" color="inherit" variant="display1" gutterBottom >
            Enter city
        </Typography>
          <input
            onChange={this.onInputChange}
            value={this.state.term}
            className='search-bar'
            placeholder='Get a 5-day forecast in your favorite cities' />
          <span>
            <button type="submit" className="submit-btn" > Submit </button>
          </span>
        </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// export default withStyles(styles)(SearchBar)

export default connect(null, mapDispatchToProps)(SearchBar)