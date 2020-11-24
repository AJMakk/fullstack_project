import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AppContainer from '../AppContainer';
import api from '../../api';


export default function Register() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.register({
                name, email, password, confirmPassword
            });
            history.push('/')
        }catch {
            alert('Failed to Register');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="Enter Your Information">
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
                <label>Email</label>
                <input 
                className="form-control" 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input 
                className="form-control" 
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <button
                type="button"
                className="btn btn-success"
                onClick={onAddSubmit}
                disabled={loading}>
                    {loading? 'REGISTERING...' : 'Register'}
                </button>
            </div>
        </form>
        </AppContainer>
    );
};