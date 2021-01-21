import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/views/HomePage/HomePage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import Header from './components/views/Header';
import MovieDetail from './components/views/MovieDetail/MovieDetail';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/" component={Auth(HomePage, null)}></Route>
            <Route path="/login" component={Auth(LoginPage, false)}></Route>
            <Route path="/register" component={Auth(RegisterPage, false)}></Route>
            <Route path="/movie/:movieId" component={Auth(MovieDetail, null)}></Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
