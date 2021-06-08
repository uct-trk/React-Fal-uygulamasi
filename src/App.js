import React , { useEffect, useState } from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail/Detail';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/">    
      <Home/>
      </Route>
      <Route path="/detail/:rumuz">
        <Detail/>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
