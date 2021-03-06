import React from "react";
import { NavLink } from "react-router-dom";



function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active"  to="/expenses">
        Expenses
      </NavLink>
      <NavLink activeClassName="active"  to="/categories">
        Categories
      </NavLink>
      <NavLink activeClassName="active"  to="/">
        Log In
      </NavLink>
      <NavLink activeClassName="active"  to="/logout">
        Log Out
      </NavLink>
      <h4>
      Hello {localStorage.getItem('UsersName')} !
      </h4>
    </nav>

  
  );

  
  
}
export default Header;