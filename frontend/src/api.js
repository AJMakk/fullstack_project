import axios from 'axios';

const BASE_API_URL = 'http://localhost:8000/api';

const getTokenFromStorage = {
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('AccessToken')
    }
  };

export default {

    login: (loginCredentials) =>
        axios.post(`${BASE_API_URL}/login`, loginCredentials),
    register: (newUserInfo) =>
        axios.post(`${BASE_API_URL}/register`,{name:newUserInfo.name, email:newUserInfo.email, password:newUserInfo.password, password_confirmation:newUserInfo.confirmPassword}),
    logout: () =>
        axios.get(`${BASE_API_URL}/logout`),
    

    getAllCategories: () => 
        axios.get(`${BASE_API_URL}/categories`, getTokenFromStorage),
    getOneCategory: (id) =>
        axios.get(`${BASE_API_URL}/categories/${id}`, getTokenFromStorage),
    addCategory: (category) =>
        axios.post(`${BASE_API_URL}/categories/`,{name:category.name} , getTokenFromStorage),
    updateCategory: (category, id) =>
        axios.put(`${BASE_API_URL}/categories/${id}`, {name:category.name}, getTokenFromStorage),
    deleteCategory: (id) =>
        axios.delete(`${BASE_API_URL}/categories/${id}`, getTokenFromStorage),

    getAllExpenses: () => 
        axios.get(`${BASE_API_URL}/expenses`, getTokenFromStorage),
    getOneExpense: (id) =>
        axios.get(`${BASE_API_URL}/expenses/${id}`, getTokenFromStorage),
    addExpense: (expense) =>
        axios.post(`${BASE_API_URL}/expenses/`, {amount:expense.amount, date:expense.date, category_id:expense.categoryId}, getTokenFromStorage),
    updateExpense: (expense, id) =>
        axios.put(`${BASE_API_URL}/expenses/${id}`, {amount:expense.amount, date:expense.date, category_id:expense.categoryId}, getTokenFromStorage),
    deleteExpense: (id) =>
        axios.delete(`${BASE_API_URL}/expenses/${id}`, getTokenFromStorage),
        
}