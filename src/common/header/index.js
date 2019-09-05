import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { HeaderWrapper,
  Logo,Nav,NavItem,
  NavSearch,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,
  SearchInfoList,
  Button,
  Addition,
  SearchWrapper
 } from './style'

class Header extends PureComponent {
  render (){
    const {
      login, focused, list, page, totalPage, mouseIn,
      handleMouseEnter, handleMouseLeave, handleChangePage,
      handleInputFocuse,handleInputBlur,logout
    } = this.props;
    const newList = list.toJS(); //toJS方法是将immutable(不支持list[i]这种方法) 对象转为普通对象
    const pageList = [];
    if (newList.length) {
      for(let i= (page-1) * 10; i < page * 10; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    const getListArea = (show) => {
      if(show || mouseIn){
        return (
          <SearchInfo onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={ () => {handleChangePage(page, totalPage, this.spinIcon)} }>
              <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              { pageList }
            </SearchInfoList>
          </SearchInfo>
        )
      } else {
        return null
      }
    }
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
              onFocus={() => { handleInputFocuse(list)}}
              onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe62b;</span>
            { getListArea(focused) }
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
    mouseIn: state.getIn(['header','mouseIn']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login:state.getIn(['login','login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleInputFocuse(list){
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, icon) {
      let angel = icon.style.transform.replace(/[^0-9]/ig, '')
      if (angel) {
        angel = parseInt(angel)
      } else {
        angel = 0
      }
      icon.style.transform = `rotate(${angel+360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage( page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginCreators.logout())
    }
  }
}
export default connect(mapState,mapDispatch)(Header) 