import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
//frmoJS()方法将一个普通对象变为一个immutable对象


const defaultState = fromJS({
  topicList:[],
  recommendList: []
})

export default (state=defaultState,action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.set('recommendList', fromJS(action.recommendList))
    default:
      return state
  }
}
