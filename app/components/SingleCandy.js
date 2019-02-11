import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOneCandyFromServer} from '../action-creators'
import {Link} from 'react-router-dom'

class SingleCandy extends Component{
  
  componentDidMount(){
    this.props.loadOneCandy()
  }
  
  render(){
    const candy = this.props.candy
    
    const candyName = candy.name
    const candyDescription = candy.description
    const candyImage = candy.imageUrl

    return (
      <div>
      <Link to={'/candies'}>Back to the Goodie Bag</Link>
        <h1>{candyName}</h1>
        <p>{candyDescription}</p>
        <div>
          <img src={candyImage} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    candy: state.selectedCandy
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadOneCandy: ()=> {
      const candyId = ownProps.match.params.candyId
      const thunkAction = getOneCandyFromServer(candyId)
      dispatch(thunkAction)
    }
  }
}

const ConnectedSingleCandyComponent = connect(mapStateToProps, mapDispatchToProps)(SingleCandy)

export default ConnectedSingleCandyComponent
