
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { ListItem, ListInfo } from '../style'

class List extends PureComponent {
  render(){
    return (
      <Link to="/detail/1">
        <ListItem>
          <img src="https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg" alt="" />
          <ListInfo>
            <h3 className="title">公告：关于暂停用户发布功能，并全面清查平台内容</h3>
            <p className="desc">亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网信息服务管理办法》《互联网新闻信息服务管理规定》《互联网用户公...</p>
          </ListInfo>
        </ListItem>
      </Link>
    )
  }
}

export default List;
