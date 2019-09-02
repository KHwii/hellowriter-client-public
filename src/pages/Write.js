import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';

class Write extends Component {
  render() {
    return (
        <div>
          {console.log(this.props,"히스토리확인")}
        </div>
    );
  }
}

export default withRouter(Write);
