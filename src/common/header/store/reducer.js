import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

//frmoJS()方法将一个普通对象变为一个immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
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
      //merge方法可以一次设置几个date，提高效率
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      }) 
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
