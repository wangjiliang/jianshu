// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
//frmoJS()方法将一个普通对象变为一个immutable对象

const defaultState = fromJS({
  topicList:[]
})

export default (state=defaultState,action) => {
  return state
}
