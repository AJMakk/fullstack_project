import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AppContainer from '../AppContainer';
import api from '../../api';

export default function AddExpense() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addExpense({
                amount, date,categoryId
            });
            history.push('/expenses')
        }catch {
            alert('Failed to Add Expense');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="Add Expense">
        <form>
            <div className="form-group">
                <label>Amount</label>
                <input 
                className="form-control" 
                type="number"
                min="1"
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
                <label>category ID</label>
                <input 
                className="form-control" 
                type="number"
                step="1"
                min="1"
                value={categoryId}
                onChange={e => setCategoryId(e.target.value)}/>
            </div>
            <div className="form-group">
                <button
                type="button"
                className="btn btn-success"
                onClick={onAddSubmit}
                disabled={loading}>
                    {loading? 'Loading...' : 'Add'}
                </button>
            </div>
        </form>
        </AppContainer>
    );
};

