import Axios from 'axios'


export const GET_CANDIES = 'GET_CANDIES'

export const loadCandies = (candies) => {
  return {
    type: GET_CANDIES,
    candies
  }
}

export const getCandiesFromServer = () => {
  return async (dispatch) => {
    try {
      const {data} = await Axios.get('/api/candies')
      dispatch(loadCandies(data))
    }
    catch (err) {console.error(err)}
  }
}
