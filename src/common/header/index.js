import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Button,Addition, SearchWrapper } from './style'

class Header extends PureComponent {
  render (){
    const {login,focused,handleInputFocuse,handleInputBlur,logout} = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            login ? <NavItem onClick={logout} className="right">退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch className={focused ? 'focused':''}
              onFocus={handleInputFocuse}
              onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont':'iconfont'}>&#xe62b;</span>
          </SearchWrapper>
          <Addition>
            <Button className="writting">
              <span className="iconfont">&#xe61d;</span>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    //immutable对象不能通过点的方式去获取属性,要通过get()方法获取
    // focused:state.header.get('focused') 比较别扭使用下面的方法获取
    // focused: state.get('header').get('focused')  //常规写法
    focused: state.getIn(['header','focused']),  //简写
    login:state.getIn(['login','login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleInputFocuse(){
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    logout(){
      dispatch(loginCreators.logout())
    }
  }
}
export default connect(mapState,mapDispatch)(Header) 