import React, { useState } from 'react';
import './chooseSeat.css';

const ChooseSeat = () => {
    const [value, setValue] = useState(1);
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const inputValue = parseInt(event.target.value);

        if (inputValue > 0 && inputValue <= 90) {
            setValue(inputValue);
            setError('');
        } else {
            setValue(0);
            setError('Debes ingresar por lo menos 1 asiento y máximo 90.');
        }
    };

    return (
        <div className="seat-container">
            <div className="input-container">
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    className={error ? 'seat-input error' : 'seat-input'}
                />
            </div>
            {error && <p className="error-message">{error}</p>}
            <p className="text-center">Cantidad</p>
        </div>
    );
};

export default ChooseSeat;
