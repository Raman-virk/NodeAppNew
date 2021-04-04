import React from 'react';
import './App.css';
import {Switch, Route,Redirect,BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store';
import { CONNECT_WITH_SSO } from './redux/types';
import { connect } from 'react-redux';
import axios from 'axios';
import FirstPage from './components/FirstPage'

const mapStateToProps = (state) => ({
  user: state.user,
});
function connectWithSSO() {
  const json = JSON.parse(localStorage.getItem("username"));
  console.log( json);
  store.dispatch({
      type: CONNECT_WITH_SSO,
      user: json,
  });
}


function App({user}) {
  var isUserThere = false;
  if (user) {
   isUserThere = true;
  } else {
    connectWithSSO();
  }
  return(
  
      <div>
      <Switch>
        <Route exact path="/" component={LoginPage}>
        {isUserThere ? < HomePage /> : <LoginPage />}
        </Route>
      </Switch>
    </div>
     
  ); 
    
  }
  
  export default connect(mapStateToProps)(App);

  