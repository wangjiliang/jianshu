
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent {
  render(){
    console.log(this.props.match.params.id)
    return <div>detail</div>
  }
}

const mapState = (state) => ({

})
export default connect(mapState)(withRouter(Detail));
