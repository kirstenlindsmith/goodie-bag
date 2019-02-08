import Axios from 'axios'

//action types
export const GET_CANDIES = 'GET_CANDIES'
export const GET_ONE_CANDY = 'GET_ONE_CANDY'

//regular action creators
export const loadCandies = (candies) => {
  return {
    type: GET_CANDIES,
    candies
  }
}

export const loadOneCandy = (candy) => {
  return {
    type: GET_ONE_CANDY,
    candy
  }
}

//async (thunk) action creators
export const getCandiesFromServer = () => {
  return async (dispatch) => {
    try {
      const {data} = await Axios.get('/api/candies')
      dispatch(loadCandies(data))
    }
    catch (err) {console.error(err)}
  }
}

export const getOneCandyFromServer = (candyId) => {
  return async (dispatch) => {
    try {
      const {data} = await Axios.get(`/api/candies/${candyId}`)
      dispatch(loadOneCandy(data))
    }
    catch (err) {console.error(err)}
  }
}
