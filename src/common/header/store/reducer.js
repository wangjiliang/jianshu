import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

//frmoJS()方法将一个普通对象变为一个immutable对象
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state=defaultState,action) => {
  switch(action.type){
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused',true) 
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.set('list',action.data).set('totalPage', action.totalPage)
    default:
      return state
  }
}
