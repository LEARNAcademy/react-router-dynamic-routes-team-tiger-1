import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import restaurantsData from "../store/restaurantsData.js"
import Restaurant from "./Restaurant"
import ResturantCard from "../ResturantCard.js"


class Restaurants extends Component {
  constructor(props){
    super(props)
    this.state = {
      //Assign array of resturant objects to state
      restaurants: restaurantsData
    }
  }

  render() {
    //deconstructing state
    const { restaurants }= this.state
    return (
      <div className="resturants">

        {restaurants.map((restaurant) =>
            <ResturantCard title = {restaurant.name} location = {restaurant.location} link ={`/restaurant/${restaurant.id}`}/>
          )}

      </div>
    )
  }
}

export default Restaurants
