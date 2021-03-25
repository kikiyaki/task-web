import React from 'react';
import "./app.css"
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Logout from "./Pages/Logout"

function App() {
  return (
      <Router>
          <div className="auth-box">
              <a href="/">Home</a>
              <a href="/login">Login</a>
              <a href="/logout">Logout</a>
              <a href="/register">Registration</a>
          </div>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/logout" component={Logout}/>
      </Router>
  );
}

export default App;
