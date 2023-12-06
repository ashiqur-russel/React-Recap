import Form from '../Form/Form';
import { useState } from 'react';

export default function Output() {
    const [output, setOutput] = useState(0);
    const handleOutputChange = (value) => {
        setOutput(value);
    };

    return (
        <div>
            <Form type="output" value={output} handleChange={handleOutputChange} />
            <p>Output: {output}</p>
        </div>
    );
}
