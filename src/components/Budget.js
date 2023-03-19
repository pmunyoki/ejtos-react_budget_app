import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal'


const Budget = () => {
    //const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const {dispatch}= useContext(AppContext)
    
    const handleSubmit = (event) => {
        console.log(event.target.value)
        dispatch({
        type: 'SET_BUDGET',
        payload: parseInt(event.target.value),
    });
    
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
            required='required'
            type='number'
            id='budget'
            step= "10"
            max= "20000"
            style={{ marginLeft: '2rem' , size: 10}}
            onChange={handleSubmit}></input>
        </div>
    );
};
export default Budget;
