
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreaters } from './store'

import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'


import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.getData()
  }
}


const mapDispatch = (dispatch) => ({
  getData() {
    const action = actionCreaters.getHomeInfo();
    dispatch(action)
  }
})

export default connect(null,mapDispatch)(Home);
