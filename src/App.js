import React, { Component } from 'react';
import CardBody from './components/card-body';
import { Provider } from 'react-redux';
import Store from "./store";
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <div><Route render={( {history} ) => (
            <button
              onClick={() => { history.push('/addprofile') }}
            >
              Add Profile
            </button> 
          )} /></div>
          <CardBody />
        </div>
      </Provider>
    );
  }
}

export default App;