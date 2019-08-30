import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from "../store";
import Error from "../components/Error";
import App from "../App";
import AddProfile from "../components/addProfile";

class Routers extends Component{
  render() {
    return(
      <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/addprofile" component={AddProfile}/>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default Routers;