import { useState } from 'react'
import Form from '../Form/Form'
import './Progress.css'
export default function Progress() {
    const [ progress , setProgress] = useState(0)
    const handleProgressChange = (value) => {
        setProgress(value);
    };

  return (
    <div className='progress'>
        <Form type="progress"  value={progress} handleChange={handleProgressChange}></Form>
        <p>Progress:{progress}</p>
    </div>
  )
}
