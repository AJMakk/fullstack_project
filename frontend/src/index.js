import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Login from './components/users/login';
import Register from './components/users/register';
import Logout from './components/users/logout';

import Expenses from './components/expenses/Expenses';
import AddExpense from './components/expenses/AddExpense';
import EditExpense from './components/expenses/EditExpense';

import Categories from './components/categories/Categories';
import AddCategory from './components/categories/AddCategory';


export default function App() {
  return (
      <Router className="App__Container">
        <Header />
          <Switch>
              <Route exact path="/">
                 <Login></Login>
              </Route>
              <Route exact path="/register">
                 <Register></Register>
              </Route>
              <Route exact path="/logout">
                 <Logout></Logout>
              </Route>

              <Route exact path="/expenses">
                 <Expenses></Expenses>
              </Route>
              <Route exact path="/expenses/add">
                <AddExpense></AddExpense>
              </Route>   
              <Route exact path="/expenses/edit/:id">
                <EditExpense></EditExpense>
              </Route> 

              <Route exact path="/categories">
                <Categories></Categories>
              </Route>
              <Route exact path="/categories/add">
                <AddCategory></AddCategory>
              </Route>          
          </Switch>

      </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
