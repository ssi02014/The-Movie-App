import React,{useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/views/HomePage/HomePage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import MovieDetail from './components/views/MovieDetail/MovieDetail';
import mainPage from './Pages/mainPage';
import FavoritePage from './components/views/FavoritePage/FavoritePage';
import Header from './components/views/Header';
function App() {

  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/" component={mainPage}></Route>
            <Route path="/login" component={Auth(LoginPage, false)}></Route>
            <Route path="/register" component={Auth(RegisterPage, false)}></Route>
            <Route path="/movie/:movieId" component={Auth(MovieDetail, null)}></Route>
            <Route path="/favorite" component={Auth(FavoritePage, true)}></Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
