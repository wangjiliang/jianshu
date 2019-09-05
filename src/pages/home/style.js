
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
`;
export const HomeLeft = styled.div`
  width:625px;
  float:left;
  margin-left:15px;
  padding-top:30px;
  .banner-img{
    width:625px;
    height:270px;
  }
`;
export const HomeRight = styled.div`
  width:280px;
  float:right;
`;

export const ListItem = styled.div`
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
  img {
    width: 150px;
    height: 100px;
    display: block;
    float: right;
  }
`;

export const ListInfo = styled.div`
  width: 475px;
  float: left;
  .title{
    line-height: 27px;
    font-size:18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size:13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  width:280px;
  margin: 20px 0;
`;

export const RecommendItem = styled.div`
  width:280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;


