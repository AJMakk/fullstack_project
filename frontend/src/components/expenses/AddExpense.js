import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import Popup from 'reactjs-popup';
import api from '../../api';

export default function AddExpense() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [categoryId, setCategoryId] = useState('');
   /*  const [categories, setCategories] = useState(null); */

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

   /*  const fetchCategories = () => {
        api.getAllCategories().then(res => {
           setCategories(res.data.categories);
        });
    } */

  /*   useEffect(() => {
        fetchCategories();

    }, []);

 */
    if (!localStorage.getItem('AccessToken')) {
        return (
            
            <h6><b>Please Log in !</b></h6>   
        );
    }

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
       {/*      <div className="form-group">
                <label for="categories">Choose a category:</label>
                <input
                    type = "select"
                    name = "category"
                    onChange = {e => setCategoryId(e.currenttarget.value)}
                >
                    { categories.map((category) =>
                        <option 
                        name="category_id" 
                        key = {category.id}
                        value = {category.id}
                        >
                        {category.name}
                        </option>
                    )}
              
                </input>
            </div> */}
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

