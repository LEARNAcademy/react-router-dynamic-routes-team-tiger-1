import React, { Component } from 'react'
import restaurantsData from "../store/restaurantsData.js"

class Restaurant extends Component {
  constructor(props){
    super(props)
    //deconstructing props to match
    const { match } = props

    this.state={
      //State is set to the current product ID
      restaurantId: match.params.id
    }
  }

  componentDidUpdate(prevProps){
    //assign previous props to a variable
    const prevMatch = prevProps.match
    //deconstructing current props
    const { match } = this.props
    //if current id doesn't match previous id
    if(match.params.id != prevMatch.params.id){
      //set state to new ID
      this.setState({restaurantId: match.params.id})
    }


  }
  render() {
    //destructure current resturant ID
    const { restaurantId } = this.state
    // seach through JSON objects, and find the objects based off the current ID
    const resturantObject = restaurantsData.find((resturant) => resturant.id == restaurantId)
    return (
      <div>
        <h1>{resturantObject.name}</h1>
        <p>{resturantObject.location}</p>
        <h3>Top Three Dishes</h3>
        <ul>
        {resturantObject.menuItems.map((item) =>
          <li>
              {item}
          </li>
          )}
        </ul>
        </div>

    )
  }
}

export default Restaurant
