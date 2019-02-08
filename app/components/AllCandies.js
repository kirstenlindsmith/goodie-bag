import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCandiesFromServer} from '../action-creators'

class AllCandies extends Component{

  componentDidMount(){
    this.props.loadCandies()
  }

  render(){
    const {allCandies} = this.props
    let candies;
    if (allCandies.length){
      candies = allCandies[0]
    } else candies = []
    
    return (
      <div>
        <Link to={'/'}>Close the bag</Link>
        <ul>
        {
          candies.map(candy => {
            return (
                <li key={candy.id}>
                  <Link to={'/candies/' + candy.id}>{candy.name}</Link>
                </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allCandies: state.candies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCandies: () => {
      const thunkAction = getCandiesFromServer()
      dispatch(thunkAction)
    }
  }
}

const connectedAllCandiesComponent = connect(mapStateToProps, mapDispatchToProps)(AllCandies)

export default connectedAllCandiesComponent
