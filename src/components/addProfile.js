import React, { Component } from "react";
import { connect  } from 'react-redux';
import { addProfile } from "../actions/skills-action";

class AddProfile extends Component {

  state = {
    profile: {
      name : "",
      discription : "",
      skill : [""]
    }
  }

  render() {
    return (
      
        <div style={putStyle.div}>
          <input style={putStyle.input} type="text" placeholder="Enter Your Name" onChange={(e) => {
            const value = e.target.value;
            this.setState(prevState => {
              let array = prevState.profile;
              array.name = value;
              return { profile : array }})}} />
          <textarea style={putStyle.textarea} type="text" placeholder="Enter Discription" onChange={(e) => {
            const value = e.target.value;
            this.setState(prevState => {
              let array = prevState.profile;
              array.discription = value;
              return { profile : array }})}} ></textarea>
          {this.state.profile.skill.map( (prevState, index) =>(
            <input style={putStyle.input} type="text" placeholder="Enter Your Skill" onChange={(e) => {
            const value = e.target.value;
            this.setState( (prevState) => {
              let array = prevState.profile.skill;
              array[index] = value;
              return { profile : { ...prevState.profile, skill : array} }});
          }} />))}
          <button style={putStyle.button} onClick={() => this.setState(prevState => ( { profile:  { ...prevState.profile, skill : prevState.profile.skill.concat("") }}))} >Add New Skill</button>
          <div>
            <button style={putStyle.button} onClick={() => {
              console.log("before", this.state.profile);
              this.props.addProfile(this.state.profile);
              console.log("After", this.state.profile);
              this.props.history.goBack();
            }} >Add Profile</button>
          </div>
        </div>
    );
  }
}

export default connect(null, { addProfile } )(AddProfile);

const putStyle = {
  div: {
    display: "felx",
    marginTop: "100px"
  },
  input: {
    padding: "8px 0px",
    fontSize: "15px",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "30px",
    width: "60%",
  },
  textarea: {
    width: "60%",
    height: "50px",
    padding: "4px px",
    fontSize: "15px",
    marginBottom: "28px",
    marginLeft: "20%",
    marginRight: "20%"
  },
  button: {
    padding: "8px 10px",
    backgroundColor: "#6C757D",
    border: "none",
    color: "white",
    borderRadius: "4px",
    marginTop: "30px",
    width: "20%",
    marginLeft: "40%",
    marginRight: "40%"
  }
}