import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

//frmoJS()方法将一个普通对象变为一个immutable对象
const defaultState = fromJS({
  focused:false
})

export default (state=defaultState,action) => {
  if(action.type === actionTypes.SEARCH_FOCUS){
    //immutable对象的set方法,会结合之前immtable对象的值和设置的值返回一个全新的对象
    return state.set('focused',true)
  }
  if(action.type === actionTypes.SEARCH_BLUR){
    return state.set('focused',false)
  }
  return state
}
