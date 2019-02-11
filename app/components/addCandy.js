import React, {Component} from 'react'

export default class AddCandy extends Component{
  
  componentDidMount(){
    // this.props.loadOneCandy()
  }
  
  render(){
    return (
    <div>
    <h3>Add a candy to the Goodie Bag!</h3>

    <form method='POST' action='/'>
      <div className='form-group'>
        <label htmlFor='name' class='control-label'>Candy Name</label>
        <div>
          <input name='name' type='text' className='form-control'/>
        </div>
      </div>
      
      <div class='form-group'>
        <label htmlFor='description' className='control-label'>Description</label>
        <div>
          <input name='description' type='text' className='form-control'/>
        </div>
      </div>
      
      <div className='form-group'>
        <label htmlFor='quantity' className='control-label'>Quantity</label>
        <div>
          <input name="quantity" type="number" min="1" max="10" className='form-control'/>
        </div>
      </div>
      
      <div className='form-group'>
        <label htmlFor="imageUrl" className='control-label'>Image URL</label>
        <div>
          <input name='imageUrl' type='text' className='form-control'/>
        </div>
      </div>
      
      <div>
        <button type='submit' className='button'>submit</button>
      </div>

    </form>

    </div>
    )}

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCandy: ()=> {
//       const thunkAction = postCandyToServer(candyId)
//       dispatch(thunkAction)
//     }
//   }
// }

// const ConnectedAddFormComponent = connect(null, mapDispatchToProps)(AddCandy)

// export default ConnectedAddFormComponent
