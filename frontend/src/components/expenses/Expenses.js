import React from 'react'
import {Link} from 'react-router-dom';
import AppContainer from '../AppContainer';
import api from '../../api';
import {useEffect, useState} from 'react';

export default function Expenses() {

    const [expenses, setExpenses] = useState(null);

    const fetchExpenses = () => {
            console.log('token: ', localStorage.getItem('AccessToken'));
        api.getAllExpenses().then(res => {
            console.log("res: ",res);
            setExpenses(res.data.expenses);
        });
    }

    useEffect(() => {
        fetchExpenses();

    }, []);


    const renderExpenses = () => {

        if(!expenses) {
            return (
            <tr>
                <td colSpan="4">
                    Loading Expenses...
                </td>
            </tr>);
        }

        if(expenses.length === 0) {
            return (
            <tr>
                <td colSpan="4">
                    There is no expenses yet. Add one.
                </td>
            </tr>);
        }

        return expenses.map((expense) => (
            <tr id={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category.name}</td>
                <td>
                    <Link
                        className="btn btn-warning"
                        to={`expenses/edit/${expense.id}`}>
                        Edit Expense
                    </Link>
                    <button 
                    type = "button" 
                    className="btn btn-danger"
                    onClick={() => {
                        api.deleteExpense(expense.id)
                        .then(fetchExpenses)
                        .catch(err => {
                            alert('Failed to delete expense with id :' + expense.id);
                        });
                    }}>
                        Delete Expense
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <AppContainer title="Expenses Table">
        
            <Link to="/expenses/add" className="btn btn-primary">Add Expense</Link>
                    <div className = "table-responsive">
                        <table striped bordered hover size="sm" striped bordered hover variant="dark" className="table -table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                </tr>
                            </thead>

                            <tbody>
                               {renderExpenses()}
                            </tbody>
                        </table>
                    </div>
        </AppContainer>
    );
}
