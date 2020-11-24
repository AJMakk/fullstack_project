import React from 'react'
import {Link} from 'react-router-dom';
import AppContainer from '../AppContainer';
import api from '../../api';
import {useEffect, useState} from 'react';

export default function Categories() {

    const [categories, setCategories] = useState(null);

    const fetchCategories = () => {
        api.getAllCategories().then(res => {
            console.log("res: ",res);
            const result = res.data.categories;
            console.log("RESULT: ", result);
            setCategories(res.data.categories);
        });
    }

    useEffect(() => {
        fetchCategories();

    }, []);


    const renderCategories = () => {

        if(!categories) {
            return (
            <tr>
                <td colSpan="4">
                    Loading Categories...
                </td>
            </tr>);
        }

        if(categories.length === 0) {
            return (
            <tr>
                <td colSpan="4">
                    There is no Categories yet. Add one.
                </td>
            </tr>);
        }

        return categories.map((category) => (
            <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
            </tr>
        ))
    }

    return (
        <AppContainer title="Categories Table">
        
            <Link to="/categories/add" className="btn btn-primary">Add Category</Link>
                    <div className = "table-responsive">
                        <table className="table -table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                </tr>
                            </thead>

                            <tbody>
                               {renderCategories()}
                            </tbody>
                        </table>
                    </div>
        </AppContainer>
    );
}
