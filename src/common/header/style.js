import styled from 'styled-components'
import logoimg from '../../statics/images/nav-logo.png'

export const HeaderWrapper = styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position:absolute;
  left:0;
  top:0;
  height:56px;
  width:100px;
  background:url(${logoimg});
  background-size:contain;
`;
export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .zoom {
    position: absolute;
    right:5px;
    top:14px;
    width:30px;
    height:30px;
    line-height:30px;
    text-align: center;
    border-radius:15px;
    // background:green;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;


export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  margin-top:9px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  box-sizing: border-box;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition:all 0.2s ease-out;
  }
  &.slide-enter-active {
    width:240px;
  }
  &.slide-exit{
    transition:all 0.2s ease-out;
  }
  &.slide-exit-active {
    width:160px;
  }
`;

export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width: 240px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom:15px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin{
    font-size:13px;
    margin-right: 2px;
    display:block;
    float:left;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display:block;
  float: left;
  line-height: 20px; 
  font-size: 12px;
  padding: 2px 6px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 0 10px 10px 0;
  color: #787878;
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;

export const Button = styled.div`
  float:right;
  margin-top:9px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ea6f5a;
  padding:0 20px;
  margin-right:15px;
  &.writting {
    background-color: #ea6f5a;
    color:#fff;
  }
  &.reg {
    color: #ea6f5a;
  }
`;
