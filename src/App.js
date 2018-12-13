import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Posts from "./components/Posts"
import Post from "./components/Post"

class App extends Component {

  render() {
 
    return <BrowserRouter>
      
        <div className="App">
            <Switch>
        <Route path="/:id" component={Post}/>
         <Posts/>
            </Switch>
         </div>

      </BrowserRouter>
  }
}

export default App;
