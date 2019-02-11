import {GET_CANDIES, GET_ONE_CANDY} from '../action-creators'

const initialState = {
  candies: [],
  selectedCandy: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { ...state, candies: [...action.candies]}
    case GET_ONE_CANDY:
      return   {...state, selectedCandy: action.candy}
    default:
      return state
  }
}

export default rootReducer
