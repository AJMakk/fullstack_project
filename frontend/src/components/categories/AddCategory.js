import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AppContainer from '../AppContainer';
import api from '../../api';

export default function AddCategory() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addCategory({
                name
            });
            history.push('/categories')
        }catch {
            alert('Failed to Add Category');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="Add Category">
        <form>
            <div className="form-group">
                <label>Name</label>
                <input 
                className="form-control" 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}/>
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
