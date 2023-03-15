import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal'


const Budget = () => {
    //const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const totalExpenses  = useContext(AppContext)
    
const handleSubmit = (event) => {
    setBudget(event.target.value)}
    if(budget > 20000 ) {
        alert("The budget cannot exceed 20000");
        setBudget("");
            return;
        }
    if(budget > 1 && budget< totalExpenses) {
        alert("The budget cannot be lower than spending");
    
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
            value={budget}
            style={{ marginLeft: '2rem' , size: 10}}
            onChange={handleSubmit}></input>
        </div>
    );
};
export default Budget;
