
import axios from 'axios'
import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10)
})

export const searchFocus = () => ({
  type:actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type:actionTypes.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get("/api/headerList.json").then( res => {
      const data = res.data.data;
      dispatch(changeList(data))
    }).catch( err => {
      console.log(err)
    })
  }
}
