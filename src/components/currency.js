import React, { useState } from 'react';
const Currency = () => {
    const [currency, setCurrency] = useState('')
    return (
        <div>
            <select className='alert alert-success' onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue>(£ Pound)</option>
                <option value="$ Dollar" name="Dollar">$ Dollar</option>
                <option value="£ Pound" name="Pound">£ Pound</option>
                <option value="€ Euro" name="Euro">€ Euro</option>
                <option value="₹ Ruppee" name="Ruppee">₹ Ruppee</option>
                
                  </select>
        </div>
    );
};
export default Currency;