import React, { Component } from 'react';
import { connect } from "react-redux";
import { editSkills, updateSkills, deleteSkills } from "../actions/skills-action";

class CardSkills extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    change: this.props.employees.length > 0 ? this.props.employees[this.props.index].skill : []
  }

  handleChange() {
    if (this.props.enabled) {
      return this.props.updateSkills({
        index : this.props.index,
        value : this.state.change
      });
    }
  }

  handleDelete(index) { 
    const array = this.state.change.filter((c => {
      const indexe = this.state.change.indexOf(c);
      return indexe !== index;
    }));
    console.log("Delete Array", array);
    this.setState({ change: array });
    console.log("After", this.state.change);

    this.props.deleteSkills({
      index : this.props.index, 
      value : this.state.change});
  }

  render() {
    return (
      <div>
        <h2>Skills</h2>
        {console.log(this.state.change)}
        {this.state.change.map(
          (propsValue, index) => (
            this.props.enabled ?
              <div key={index} >
                <input type="text" value={this.state.change[index]} onChange={(e) => {
                  let array = this.state.change;
                  array[index] = e.target.value;
                  this.setState(() => ({ change: array }));
                }} />
                <button onClick={() => ( this.handleDelete(index) )}>Del</button>
              </div> :
              <h6 key={index}>{propsValue}</h6>))}

        <button onClick={() => {
          this.handleChange();
          return this.props.editSkills();
        }} >{this.props.enabled ? "Save Skills" : "Edit Skills"}</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.SkillReducer.employees,
  enabled: state.SkillReducer.skillEdit
});

export default connect(mapStateToProps, { editSkills, updateSkills, deleteSkills })(CardSkills);