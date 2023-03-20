import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('')
    const {dispatch }= useContext(AppContext)
    const submit = (event) => {
        console.log(event.target.value)
        dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
        });
    };
    return (
        <div className="row" >
            <select className='alert alert-success'  onChange={submit} required>
                <option Value= "" disabled selected hidden>Currency (£ Pound)</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
                
                  </select>
        </div>
    );
};
export default Currency;