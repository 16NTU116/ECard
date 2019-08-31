import React, { Component } from 'react';
import CardBody from './components/card-body';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <div>
          <div><Route render={( {history} ) => (
            <button
              style={styles.button}
              onClick={() => { history.push('/addprofile') }}>
              Add Profile
            </button> 
          )} /></div>
          {this.props.profiles.map( (prevState, index) => (<div style={styles.div} ><CardBody key={index} index={index} /></div>))}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  profiles: state.SkillReducer.employees,
});

export default connect(mapStateToProps, null)(App);

const styles = {
  div: {
      border: "2px solid black",
      borderRadius: "4px",
      marginTop : "30px",
      width: "34%",
      marginLeft: "33%",
      marginRight: "33%"
  },
  button: {
    padding: "8px 10px",
    backgroundColor: "green",
    border: "none",
    color: "white",
    borderRadius: "4px",
    marginTop: "30px",
    width: "20%",
    marginLeft: "40%",
    marginRight: "40%"
  }
}