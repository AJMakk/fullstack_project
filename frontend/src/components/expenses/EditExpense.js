import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import api from '../../api';

export default function EditExpense() {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updateExpense({
                amount, date, categoryId,
            }, id);
            history.push('/expenses');
        }catch {
            alert('Failed to Edit Expense');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        api.getOneExpense(id).then(res => {
            const expense = res.data.expense;
        
            setAmount(expense.amount);
            setDate(expense.date);
            setCategoryId(expense.category_id);
        })
    }, []);

    if (!localStorage.getItem('AccessToken')) {
        return (
            
            <h6><b>Please Log in !</b></h6>   
        );
    }
    return (
        <AppContainer title="Edit Expense">
        <form>
        <div className="form-group">
                <label>Amount</label>
                <input 
                className="form-control" 
                type="text"
                value={amount}
                onChange={e => setAmount(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input 
                type="date" 
                value={date}
                onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>category</label>
                <input 
                className="form-control" 
                type="text"
                value={categoryId}
                onChange={e => setCategoryId(e.target.value)}/>
            </div>
            <div className="form-group">
                <button
                type="button"
                className="btn btn-success"
                onClick={onEditSubmit}
                disabled={loading}>
                    {loading? 'Loading...' : 'Edit'}
                </button>
            </div>
        </form>
        </AppContainer>
    );
};
