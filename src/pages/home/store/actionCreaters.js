
import axios from 'axios'
import * as actionTypes from './actionTypes'

const initHomeData = (result) => ({
  type:actionTypes.CHANGE_HOME_DATA,
  recommendList: result.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      dispatch(initHomeData(result))
    })
  }
}