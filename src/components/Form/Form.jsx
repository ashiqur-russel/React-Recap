import { useState } from 'react';

export default function Form({ type, value, handleChange}) {
    const [inputValue, setInputValue] = useState(value);

    const handleValue = (e) => {
        const newValue = e.target.value;
        if (type === 'output' && newValue !== '1') {
            setInputValue(newValue);
            handleChange(newValue);
        } else if (type === 'progress' && newValue !== '-1') {
            setInputValue(newValue);
            handleChange(newValue);
        }
    };

    return (
        <div>
            <label>{type === 'output' ? 'Output' : 'Progress'}</label>
            <input type="number" value={inputValue} onChange={handleValue} />
        </div>
    );
}
