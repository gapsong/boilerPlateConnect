import React from 'react';
import {connect} from 'react-redux'
import {Panel} from "react-bootstrap";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Panel>Feedback</Panel>
      </div>
    );
  }
}

export default(Feedback);