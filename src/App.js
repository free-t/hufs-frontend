import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from "./views/PostPage/Post";
import LandingPage from "./views/LandingPage/LandingPage";
import Test from './components/Post/Test.js'
function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/list" component={Post} />
          <Route path="/test" component={Test} />
        </Switch>
    </Router>
  );
}

export default App;
