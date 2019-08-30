import React, {Component} from 'react';
import { connect } from "react-redux";

class Skills extends Component {
  render() {
    return (
      <div>
        {this.props.enabled ? <input type="text" value={} /> : <h6>{this.props.skills}</h6> />}
      </div>
    );
  }
}
export default Skills;