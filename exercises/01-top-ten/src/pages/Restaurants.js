import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import restaurantsData from "../store/restaurantsData.js"
import Restaurant from "./Restaurant"

class Restaurants extends Component {
  constructor(props){
    super(props)
    this.state = {
      restaurants: restaurantsData
    }
  }

  render() {
    const { restaurants }= this.state
    return (
      <div>
        <ul>
        {restaurants.map((restaurant) =>
          <li>
            <Link to={`/restaurant/${restaurant.id}`}>
              {restaurant.name}
            </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Restaurants
