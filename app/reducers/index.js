import {GET_CANDIES} from '../action-creators'

const initialState = {
  candies: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { candies: [action.candies]}
    default:
      return state
  }
}

export default rootReducer
//change
