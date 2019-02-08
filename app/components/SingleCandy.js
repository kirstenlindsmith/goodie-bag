import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOneCandyFromServer} from '../action-creators'

class SingleCandy extends Component{
  
  componentDidMount(){
    this.props.loadOneCandy()
  }
  
  render(){
    const candyId = this.props.candy.id
    const candyName = this.props.candy.name
    const candyDescription = this.props.candy.candyDescription
    const candyImage = this.props.candy.imageUrl
    
    return (
      <div>
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
