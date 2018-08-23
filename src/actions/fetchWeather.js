import axios from 'axios'

// use openweathermap.org/api
const API_KEY = process.env.API_KEY
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER"

// API call: api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
// action creator
export function fetchWeather(city) {
  // final url string
  const url = `${ROOT_URL}&q=${city},us`
  // ajax request using axios - axsios returns a promise
  const request = axios.get(url)

  // console.log("request: ", request)

  return {
    type: FETCH_WEATHER, 
    // returning a promise as a payload
    payload: request,
  }
}
