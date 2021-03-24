import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Logout from "./Pages/Logout"

function App() {
  return (
      <Router>
          <div className="wrapper">
              <Route path="/" exact component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/logout" component={Logout}/>
          </div>
      </Router>
  );
}

export default App;
