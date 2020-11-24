import React from 'react';
import { useHistory } from "react-router-dom";
import api from '../../api';

export default function Logout() {
  let history = useHistory();

 
  const handleLogout = () => {
    api.logout().then(res => {
      console.log("res: ",res);
      localStorage.removeItem('AccessToken');
      localStorage.clear();
      history.push("/");
      window.location.reload();
      alert(res.data.message) ;
    });
      
  }

  return (
    <button type="button" onClick={handleLogout}>
      Go to Login Page
    </button>
  );

}